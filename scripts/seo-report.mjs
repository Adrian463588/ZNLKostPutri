import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { runPostBuildAudit } from "./seo-audit.mjs";

const rootDir = process.cwd();

console.log("=== ZNL Kost Putri SEO Report ===");
execSync("node scripts/seo-validate.mjs", { stdio: "inherit" });

const nextAppDir = path.join(rootDir, ".next", "server", "app");
if (fs.existsSync(nextAppDir)) {
	const audit = runPostBuildAudit();
	console.log("\nBuild Route Inventory:");
	console.table(audit.auditedRoutes);
	if (!audit.valid) {
		console.error("\nAudit errors:", audit.errors);
		process.exit(1);
	}
	console.log("\nSitemap & Robots check: PASS");
} else {
	console.log(
		"\nNote: .next/server/app not present yet; run `npm run build` then `npm run seo:audit` for HTML verification.",
	);
}
