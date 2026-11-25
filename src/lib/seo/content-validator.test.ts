import path from "node:path";
import { describe, expect, it } from "vitest";
import { allSeoContents, campusGuides, editorialGuides } from "@/content";
import { validateSeoContents } from "@/lib/seo/content-validator";

describe("SEO content registry and validation gates", () => {
	it("passes validation across all production SEO contents and public assets", () => {
		const publicDir = path.resolve(process.cwd(), "public");
		const result = validateSeoContents(allSeoContents, publicDir);

		expect(result.errors).toEqual([]);
		expect(result.valid).toBe(true);
	});

	it("ensures all campus guides include independent non-affiliation disclosure", () => {
		for (const guide of campusGuides) {
			expect(guide.independentDisclaimer.toLowerCase()).toContain("mandiri");
			expect(guide.independentDisclaimer.toLowerCase()).toContain("bukan");
		}
	});

	it("ensures comparison guides include publisher disclosure", () => {
		const comparison = editorialGuides.find(
			(g) => g.contentType === "comparison",
		);
		expect(comparison).toBeDefined();
		expect(comparison?.disclosure).toBeTruthy();
	});

	it("rejects duplicate slugs, broken internal links, and banned hyperbolic claims", () => {
		const first = allSeoContents[0];
		const broken = {
			...first,
			id: "broken-item",
			slug: "/panduan/broken-test",
			metaTitle: `${first.metaTitle} Test`,
			description: `${first.description} Test`,
			title: "Kost Termurah Se-Jogja",
			relatedSlugs: ["/rute-tidak-ada"],
		};

		const result = validateSeoContents([first, broken]);
		const codes = result.errors.map((e) => e.code);

		expect(result.valid).toBe(false);
		expect(codes).toContain("BROKEN_INTERNAL_LINK");
		expect(codes).toContain("BANNED_UNVERIFIED_CLAIM");
	});
});
