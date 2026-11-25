import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { siteConfig } from "@/config/site";
import { galleryImages } from "@/data/gallery";
import { rooms } from "@/data/rooms";
import { buildStructuredData, serializeJsonLd } from "./seo";

describe("Structured Data & SEO Asset Integrity", () => {
	it("builds valid Schema.org graph with truthful NAP and geo coordinates", () => {
		const data = buildStructuredData();
		expect(data["@context"]).toBe("https://schema.org");
		expect(data["@graph"]).toHaveLength(3);

		const accommodation = data["@graph"].find(
			(node) => node["@type"] === "Accommodation",
		);
		expect(accommodation).toBeDefined();
		if (
			accommodation?.["@type"] !== "Accommodation" ||
			!("address" in accommodation) ||
			!accommodation.address ||
			!("geo" in accommodation) ||
			!accommodation.geo
		) {
			throw new Error("Accommodation node missing");
		}

		expect(accommodation.name).toBe(siteConfig.name);
		expect(accommodation.url).toBe(`${siteConfig.url}/`);
		expect(accommodation.telephone).toBe(siteConfig.phoneSchema);
		expect(accommodation.hasMap).toBe(siteConfig.googleMapsUrl);
		expect(accommodation.address.streetAddress).toContain("Terban GK V No.308");
		expect(accommodation.address.postalCode).toBe("55223");
		expect(accommodation.geo.latitude).toBe(siteConfig.geo.latitude);
		expect(accommodation.geo.longitude).toBe(siteConfig.geo.longitude);

		expect(accommodation).not.toHaveProperty("aggregateRating");
		expect(accommodation).not.toHaveProperty("review");
		expect(accommodation).not.toHaveProperty("priceRange");
		expect(accommodation).not.toHaveProperty("openingHours");
	});

	it("escapes < characters in serialized JSON-LD to prevent XSS", () => {
		const serialized = serializeJsonLd({ note: "</script><script>" });
		expect(serialized).not.toContain("<");
		expect(serialized).toContain("\\u003c");
	});

	it("references existing files under public/ for OG, rooms, and gallery assets", () => {
		const publicDir = path.resolve(process.cwd(), "public");
		const assetPaths = [
			siteConfig.ogImage.url,
			...rooms.map((room) => room.image),
			...galleryImages.map((img) => img.src),
			"/images/ibu-kost-znl-putri-terban.webp",
			"/images/logo-znl-kost-putri.webp",
			"/images/video-poster-kamar.webp",
			"/videos/DetailKamar.mp4",
		];

		for (const relPath of assetPaths) {
			const fullPath = path.join(publicDir, relPath.replace(/^\//, ""));
			expect(fs.existsSync(fullPath), `Missing public asset: ${relPath}`).toBe(
				true,
			);
		}
	});
});
