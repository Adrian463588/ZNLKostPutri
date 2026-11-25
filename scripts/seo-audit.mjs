import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const nextAppDir = path.join(rootDir, ".next", "server", "app");
const baseUrl = "https://znlkostputri.edgeone.dev";

const EXPECTED_ROUTES = [
	"/",
	"/lokasi/terban-gondokusuman",
	"/akses-kampus/ugm",
	"/akses-kampus/uny",
	"/panduan",
	"/panduan/mencari-kost-putri-jogja",
	"/panduan/checklist-survei-kost",
	"/panduan/biaya-kost-mahasiswa-jogja",
	"/panduan/alternatif-mencari-kost-selain-mamikos",
	"/panduan/menghindari-penipuan-kost",
	"/tools/kalkulator-anggaran-kost",
	"/kebijakan-privasi",
];

function routeToHtmlPath(route) {
	if (route === "/") {
		return path.join(nextAppDir, "index.html");
	}
	return path.join(nextAppDir, `${route.replace(/^\//, "")}.html`);
}

function decodeHtmlEntities(value) {
	return value
		.replace(/&amp;/g, "&")
		.replace(/&quot;/g, '"')
		.replace(/&#x27;/g, "'")
		.replace(/&lt;/g, "<")
		.replace(/&gt;/g, ">")
		.trim();
}

function extractFirst(regex, html) {
	const match = html.match(regex);
	return match?.[1] ? decodeHtmlEntities(match[1]) : "";
}

function findBodyFile(targetFileName) {
	const direct = path.join(nextAppDir, targetFileName);
	if (fs.existsSync(direct)) return direct;
	for (const entry of fs.readdirSync(nextAppDir, { recursive: true })) {
		if (String(entry).endsWith(targetFileName)) {
			return path.join(nextAppDir, String(entry));
		}
	}
	return null;
}

export function runPostBuildAudit() {
	if (!fs.existsSync(nextAppDir)) {
		throw new Error(
			"Build output .next/server/app not found. Run `npm run build` first.",
		);
	}

	const errors = [];
	const seenTitles = new Map();
	const seenDescriptions = new Map();
	const auditedRoutes = [];

	for (const route of EXPECTED_ROUTES) {
		const htmlPath = routeToHtmlPath(route);
		if (!fs.existsSync(htmlPath)) {
			errors.push(`Missing prerendered HTML for route ${route}: ${htmlPath}`);
			continue;
		}

		const html = fs.readFileSync(htmlPath, "utf8");
		const title = extractFirst(/<title>([^<]+)<\/title>/i, html);
		const description =
			extractFirst(
				/<meta\s+name="description"\s+content="([^"]*)"/i,
				html,
			) ||
			extractFirst(/<meta\s+content="([^"]*)"\s+name="description"/i, html);
		const canonical =
			extractFirst(/<link\s+rel="canonical"\s+href="([^"]+)"/i, html) ||
			extractFirst(/<link\s+href="([^"]+)"\s+rel="canonical"/i, html);
		const robots =
			extractFirst(/<meta\s+name="robots"\s+content="([^"]*)"/i, html) ||
			extractFirst(/<meta\s+content="([^"]*)"\s+name="robots"/i, html);

		const h1Matches = [...html.matchAll(/<h1[\s>]/gi)];
		const ldJsonMatches = [
			...html.matchAll(
				/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi,
			),
		];

		if (!title) {
			errors.push(`Missing <title> on ${route}`);
		} else {
			if (title.split("ZNL Kost Putri").length > 2) {
				errors.push(`Duplicate brand suffix in <title> on ${route}: '${title}'`);
			}
			if (seenTitles.has(title)) {
				errors.push(
					`Duplicate <title> '${title}' on ${route} and ${seenTitles.get(title)}`,
				);
			} else {
				seenTitles.set(title, route);
			}
		}

		if (!description) {
			errors.push(`Missing meta description on ${route}`);
		} else if (seenDescriptions.has(description)) {
			errors.push(
				`Duplicate meta description on ${route} and ${seenDescriptions.get(description)}`,
			);
		} else {
			seenDescriptions.set(description, route);
		}

		const expectedCanonicals =
			route === "/" ? [baseUrl, `${baseUrl}/`] : [`${baseUrl}${route}`];
		if (!expectedCanonicals.includes(canonical)) {
			errors.push(
				`Canonical mismatch on ${route}: got '${canonical}', expected '${expectedCanonicals[0]}'`,
			);
		}

		if (robots.toLowerCase().includes("noindex")) {
			errors.push(`Unexpected noindex meta tag on ${route}: '${robots}'`);
		}

		if (h1Matches.length !== 1) {
			errors.push(
				`Expected exactly 1 <h1> on ${route}, found ${h1Matches.length}`,
			);
		}

		if (ldJsonMatches.length === 0) {
			errors.push(`Missing JSON-LD script on ${route}`);
		} else {
			for (const [, jsonText] of ldJsonMatches) {
				try {
					const parsed = JSON.parse(jsonText);
					if (!parsed["@context"]) {
						errors.push(`JSON-LD missing @context on ${route}`);
					}
				} catch (err) {
					errors.push(`Invalid JSON-LD on ${route}: ${String(err)}`);
				}
			}
		}

		auditedRoutes.push({
			route,
			titleLength: title.length,
			descriptionLength: description.length,
			h1Count: h1Matches.length,
			jsonLdCount: ldJsonMatches.length,
		});
	}

	// Verify sitemap.xml output
	const sitemapFile = findBodyFile("sitemap.xml.body");
	if (!sitemapFile) {
		errors.push("Missing prerendered sitemap.xml.body in .next/server/app");
	} else {
		const sitemapXml = fs.readFileSync(sitemapFile, "utf8");
		for (const route of EXPECTED_ROUTES) {
			const expectedUrl =
				route === "/" ? `${baseUrl}/` : `${baseUrl}${route}`;
			if (!sitemapXml.includes(`<loc>${expectedUrl}</loc>`)) {
				errors.push(`Sitemap missing expected URL: ${expectedUrl}`);
			}
		}
		if (sitemapXml.includes("_not-found") || sitemapXml.includes("draft")) {
			errors.push("Sitemap contains disallowed internal or draft route");
		}
	}

	// Verify robots.txt output
	const robotsFile = findBodyFile("robots.txt.body");
	if (!robotsFile) {
		errors.push("Missing prerendered robots.txt.body in .next/server/app");
	} else {
		const robotsTxt = fs.readFileSync(robotsFile, "utf8");
		if (!robotsTxt.includes(`Sitemap: ${baseUrl}/sitemap.xml`)) {
			errors.push("robots.txt missing canonical Sitemap directive");
		}
		if (!robotsTxt.includes("Allow: /")) {
			errors.push("robots.txt missing Allow: / directive");
		}
	}

	return {
		valid: errors.length === 0,
		errors,
		auditedRoutes,
		sitemapFound: Boolean(sitemapFile),
		robotsFound: Boolean(robotsFile),
	};
}

if (import.meta.url === `file://${process.argv[1]}` || process.argv[1]?.endsWith("seo-audit.mjs")) {
	const result = runPostBuildAudit();
	if (!result.valid) {
		console.error("POST-BUILD SEO AUDIT FAILED:");
		for (const err of result.errors) {
			console.error(`  - ${err}`);
		}
		process.exit(1);
	}
	console.log(
		`Post-build SEO audit passed for ${result.auditedRoutes.length} routes, sitemap.xml, and robots.txt.`,
	);
}
