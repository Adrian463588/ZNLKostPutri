import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const publicDir = path.join(rootDir, "public");

const STATIC_ROUTES = new Set(["/", "/panduan", "/kebijakan-privasi"]);

const BANNED_CLAIMS = [
	"termurah",
	"paling murah",
	"paling strategis",
	"terbaik se-yogyakarta",
	"pasti aman 100%",
	"aman 100%",
	"free wifi",
	"wi-fi gratis",
	"lorem ipsum",
];

function readJson(relPath) {
	const fullPath = path.join(rootDir, relPath);
	const raw = fs.readFileSync(fullPath, "utf8");
	return JSON.parse(raw);
}

function collectContentSlugs() {
	const slugs = new Set(STATIC_ROUTES);
	const contentDir = path.join(rootDir, "src", "content");
	for (const file of fs.readdirSync(contentDir)) {
		if (!file.endsWith(".ts")) continue;
		const src = fs.readFileSync(path.join(contentDir, file), "utf8");
		for (const match of src.matchAll(/slug:\s*"([^"]+)"/g)) {
			slugs.add(match[1]);
		}
	}
	return slugs;
}

function collectLocalAssetRefs() {
	const files = [
		"src/config/site.ts",
		"src/data/gallery.ts",
		"src/data/rooms.ts",
		"src/data/property.ts",
	];
	const refs = new Set();
	for (const rel of files) {
		const abs = path.join(rootDir, rel);
		if (!fs.existsSync(abs)) continue;
		const src = fs.readFileSync(abs, "utf8");
		for (const match of src.matchAll(
			/"(\/(?:images|videos)\/[^"]+|\/og-image\.jpg)"/g,
		)) {
			refs.add(match[1]);
		}
	}
	return [...refs];
}

function validate() {
	const errors = [];
	const validRoutes = collectContentSlugs();

	// 1. Validate keyword-map.json
	const keywordMap = readJson("src/data/seo/keyword-map.json");
	if (!Array.isArray(keywordMap) || keywordMap.length === 0) {
		errors.push("src/data/seo/keyword-map.json must be a non-empty array");
	} else {
		const seenNormalized = new Set();
		for (const entry of keywordMap) {
			if (!entry.keyword || !entry.normalizedKeyword || !entry.targetUrl) {
				errors.push(
					`Invalid keyword-map entry: ${JSON.stringify(entry)}`,
				);
				continue;
			}
			if (seenNormalized.has(entry.normalizedKeyword)) {
				errors.push(
					`Duplicate normalizedKeyword in keyword-map: ${entry.normalizedKeyword}`,
				);
			}
			seenNormalized.add(entry.normalizedKeyword);
			if (!validRoutes.has(entry.targetUrl)) {
				errors.push(
					`keyword-map targetUrl '${entry.targetUrl}' does not exist in known routes`,
				);
			}
		}
	}

	// 2. Validate topic-clusters.json
	const clusters = readJson("src/data/seo/topic-clusters.json");
	if (!Array.isArray(clusters) || clusters.length === 0) {
		errors.push("src/data/seo/topic-clusters.json must be a non-empty array");
	} else {
		for (const cluster of clusters) {
			if (!cluster.id || !cluster.pillarUrl) {
				errors.push(`Invalid cluster entry: ${JSON.stringify(cluster)}`);
				continue;
			}
			if (!validRoutes.has(cluster.pillarUrl)) {
				errors.push(
					`Cluster pillarUrl '${cluster.pillarUrl}' not found in routes`,
				);
			}
			for (const url of cluster.supportingUrls ?? []) {
				if (!validRoutes.has(url)) {
					errors.push(
						`Cluster '${cluster.id}' supportingUrl '${url}' not found in routes`,
					);
				}
			}
		}
	}

	// 3. Validate competitors.json
	const competitors = readJson("src/data/seo/competitors.json");
	if (!Array.isArray(competitors) || competitors.length === 0) {
		errors.push("src/data/seo/competitors.json must be a non-empty array");
	} else {
		for (const comp of competitors) {
			if (!comp.name || !comp.website || !Array.isArray(comp.evidenceSources)) {
				errors.push(`Invalid competitor entry: ${JSON.stringify(comp)}`);
			}
		}
	}

	// 4. Validate local assets referenced in config/data exist in public/
	for (const asset of collectLocalAssetRefs()) {
		const abs = path.join(publicDir, asset.replace(/^\//, ""));
		if (!fs.existsSync(abs)) {
			errors.push(`Referenced public asset missing: ${asset}`);
		}
	}

	// 5. Scan editorial/content files for banned unverified claims
	const scanDirs = [
		path.join(rootDir, "src", "content"),
		path.join(rootDir, "src", "data"),
	];
	for (const dir of scanDirs) {
		for (const file of fs.readdirSync(dir)) {
			if (!file.endsWith(".ts")) continue;
			const raw = fs.readFileSync(path.join(dir, file), "utf8").toLowerCase();
			for (const phrase of BANNED_CLAIMS) {
				if (raw.includes(phrase)) {
					errors.push(
						`Banned claim '${phrase}' found in ${path.join(dir, file)}`,
					);
				}
			}
		}
	}

	if (errors.length > 0) {
		console.error("SEO VALIDATION FAILED:");
		for (const err of errors) {
			console.error(`  - ${err}`);
		}
		process.exit(1);
	}

	console.log(
		`SEO validation passed: ${validRoutes.size} routes, ${keywordMap.length} keywords, ${clusters.length} topic clusters, ${competitors.length} competitors.`,
	);
}

validate();
