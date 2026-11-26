import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();

const SECRET_PREFIX_PATTERNS = [
	{ name: "Google API Key", regex: /\bAIza[0-9A-Za-z\-_]{35}\b/g },
	{ name: "GitHub Token", regex: /\b(?:ghp|gho|ghu|ghs|ghr)_[A-Za-z0-9]{36}\b/g },
	{ name: "GitHub Fine-Grained PAT", regex: /\bgithub_pat_[A-Za-z0-9_]{22,}\b/g },
	{ name: "AWS Access Key", regex: /\bAKIA[0-9A-Z]{16}\b/g },
	{ name: "Stripe Secret Key", regex: /\bsk_(?:live|test)_[0-9A-Za-z]{20,}\b/g },
	{
		name: "Private Key Block",
		regex: /-----BEGIN (?:RSA |EC |DSA |OPENSSH )?PRIVATE KEY-----/g,
	},
];

const TOKEN_ASSIGNMENT_PATTERN =
	/\b(?:secret|api_?key|access_?token|auth_?token|private_?key|verification|expectedToken|googleSiteVerification)\b\s*[:=]\s*["']([A-Za-z0-9_\-+/=]{24,})["']/gi;

function shannonEntropy(str) {
	const counts = new Map();
	for (const ch of str) {
		counts.set(ch, (counts.get(ch) ?? 0) + 1);
	}
	let entropy = 0;
	for (const count of counts.values()) {
		const p = count / str.length;
		entropy -= p * Math.log2(p);
	}
	return entropy;
}

function collectFiles(dir) {
	const results = [];
	if (!fs.existsSync(dir)) return results;
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			if (entry.name === "node_modules" || entry.name === ".next") continue;
			results.push(...collectFiles(full));
		} else {
			results.push(full);
		}
	}
	return results;
}

function runSecurityAudit() {
	const errors = [];

	// 1. Check .gitignore enforces .env* and *.pem exclusions
	const gitignorePath = path.join(rootDir, ".gitignore");
	if (!fs.existsSync(gitignorePath)) {
		errors.push("Missing .gitignore");
	} else {
		const gitignore = fs.readFileSync(gitignorePath, "utf8");
		if (!gitignore.includes(".env*")) {
			errors.push(".gitignore must exclude .env* files");
		}
		if (!gitignore.includes("*.pem")) {
			errors.push(".gitignore must exclude *.pem private keys");
		}
	}

	// 2. Ensure no sensitive env/key files are tracked in git
	try {
		const tracked = execSync("git ls-files", {
			cwd: rootDir,
			encoding: "utf8",
		})
			.split(/\r?\n/)
			.filter(Boolean);
		for (const file of tracked) {
			const base = path.basename(file);
			if (
				(base.startsWith(".env") && base !== ".env.example") ||
				/\.(?:pem|key|p12|pfx)$/i.test(base)
			) {
				errors.push(`Sensitive file tracked in git: ${file}`);
			}
		}
	} catch {
		// Allow running outside git context if ever executed from archive
	}

	// 3. Scan source, scripts, workflows, and config files for secrets & high-entropy literals
	const filesToScan = [
		...collectFiles(path.join(rootDir, "src")),
		...collectFiles(path.join(rootDir, "scripts")),
		...collectFiles(path.join(rootDir, ".github")),
		...[".env.example", "next.config.ts"]
			.map((f) => path.join(rootDir, f))
			.filter((f) => fs.existsSync(f)),
	];

	for (const filePath of filesToScan) {
		const rel = path.relative(rootDir, filePath);
		const content = fs.readFileSync(filePath, "utf8");

		for (const { name, regex } of SECRET_PREFIX_PATTERNS) {
			regex.lastIndex = 0;
			if (regex.test(content)) {
				errors.push(`Detected ${name} pattern in ${rel}`);
			}
		}

		TOKEN_ASSIGNMENT_PATTERN.lastIndex = 0;
		for (const match of content.matchAll(TOKEN_ASSIGNMENT_PATTERN)) {
			const candidate = match[1];
			if (candidate && shannonEntropy(candidate) >= 3.2) {
				errors.push(
					`High-entropy token assignment detected in ${rel} (use environment variables instead)`,
				);
			}
		}

		// Ensure external target="_blank" links include rel="noopener"
		if (rel.startsWith(`src${path.sep}`) && /\.(tsx|jsx)$/.test(rel)) {
			const blankMatches = [...content.matchAll(/target="_blank"/g)];
			for (const bm of blankMatches) {
				const snippet = content.slice(
					Math.max(0, bm.index - 120),
					bm.index + 240,
				);
				if (!/rel="[^"]*noopener[^"]*"/.test(snippet)) {
					errors.push(`External link with target="_blank" missing noopener in ${rel}`);
				}
			}
		}
	}

	// 4. Verify baseline security headers in next.config.ts
	const nextConfigPath = path.join(rootDir, "next.config.ts");
	if (fs.existsSync(nextConfigPath)) {
		const nextConfig = fs.readFileSync(nextConfigPath, "utf8");
		if (!nextConfig.includes("poweredByHeader: false")) {
			errors.push("next.config.ts must disable X-Powered-By (poweredByHeader: false)");
		}
		for (const header of [
			"X-Content-Type-Options",
			"X-Frame-Options",
			"Referrer-Policy",
			"Permissions-Policy",
			"Strict-Transport-Security",
		]) {
			if (!nextConfig.includes(header)) {
				errors.push(`next.config.ts missing security header: ${header}`);
			}
		}
	}

	if (errors.length > 0) {
		console.error("DEVSECOPS SECURITY AUDIT FAILED:");
		for (const err of errors) {
			console.error(`  - ${err}`);
		}
		process.exit(1);
	}

	console.log(
		`DevSecOps security audit passed: scanned ${filesToScan.length} files (0 hardcoded secrets, headers verified).`,
	);
}

runSecurityAudit();
