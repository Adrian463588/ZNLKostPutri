import { describe, expect, it } from "vitest";
import { siteConfig } from "@/config/site";
import { allSeoContents, campusGuides, editorialGuides } from "@/content";
import { propertyData } from "@/data/property";
import {
	buildContentMetadata,
	buildSiteVerification,
	buildStaticMetadata,
} from "@/lib/seo/metadata";
import { getIndexableSitemapEntries } from "@/lib/seo/sitemap";
import {
	buildContentStructuredData,
	buildHomepageStructuredData,
	buildHubStructuredData,
} from "@/lib/seo/structured-data";

describe("Sitemap filtering, metadata, and structured data consistency", () => {
	it("includes all 12 indexable routes in sitemap without duplicates", () => {
		const entries = getIndexableSitemapEntries(allSeoContents);
		const urls = entries.map((e) => e.url);

		expect(urls).toHaveLength(12);
		expect(new Set(urls).size).toBe(12);
		expect(urls).toContain(`${siteConfig.url}/`);
		expect(urls).toContain(`${siteConfig.url}/lokasi/terban-gondokusuman`);
		expect(urls).toContain(`${siteConfig.url}/akses-kampus/ugm`);
		expect(urls).toContain(`${siteConfig.url}/akses-kampus/uny`);
		expect(urls).toContain(`${siteConfig.url}/panduan`);
		expect(urls).toContain(`${siteConfig.url}/tools/kalkulator-anggaran-kost`);
		expect(urls).toContain(`${siteConfig.url}/kebijakan-privasi`);
	});

	it("excludes draft and non-indexable pages from sitemap and marks them noindex", () => {
		const baseItem = editorialGuides[0];
		const draftItem = {
			...baseItem,
			id: "draft-preview",
			slug: "/panduan/draft-internal",
			status: "draft" as const,
			indexable: false,
		};

		const entries = getIndexableSitemapEntries([...allSeoContents, draftItem]);
		const urls = entries.map((e) => e.url);
		expect(urls).not.toContain(`${siteConfig.url}/panduan/draft-internal`);

		const draftMeta = buildContentMetadata(draftItem);
		expect(draftMeta.robots).toEqual({ index: false, follow: false });
	});

	it("sets canonical URLs cleanly for root and subpages", () => {
		const homeMeta = buildStaticMetadata({
			title: "Home",
			description: "Desc",
			path: "/",
		});
		expect(homeMeta.alternates?.canonical).toBe(`${siteConfig.url}/`);

		const guideMeta = buildContentMetadata(campusGuides[0]);
		expect(guideMeta.alternates?.canonical).toBe(
			`${siteConfig.url}/akses-kampus/ugm`,
		);
	});

	it("keeps entity @id consistent and omits unverified Schema fields", () => {
		const homeLd = buildHomepageStructuredData();
		const accommodation = homeLd["@graph"].find(
			(n) => n["@type"] === "Accommodation",
		);
		expect(accommodation?.["@id"]).toBe(propertyData.id);
		expect(accommodation).not.toHaveProperty("aggregateRating");
		expect(accommodation).not.toHaveProperty("review");
		expect(accommodation).not.toHaveProperty("priceRange");

		const articleLd = buildContentStructuredData(editorialGuides[0], [
			{ name: "Beranda", path: "/" },
			{ name: editorialGuides[0].title, path: editorialGuides[0].slug },
		]);
		const types = articleLd["@graph"].map((node) => node["@type"]);
		expect(types).toContain("WebPage");
		expect(types).toContain("BreadcrumbList");
		expect(types).toContain("Article");
		expect(types).toContain("FAQPage");

		const hubLd = buildHubStructuredData("/panduan", "Hub", "Desc", [
			{ name: "Beranda", path: "/" },
			{ name: "Hub", path: "/panduan" },
		]);
		expect(hubLd["@graph"].map((n) => n["@type"])).toEqual([
			"CollectionPage",
			"BreadcrumbList",
		]);
	});

	it("emits Google Search Console verification metadata from siteConfig with optional env overrides", () => {
		expect(buildSiteVerification()).toEqual({
			google: siteConfig.googleSiteVerification,
		});
		expect(buildSiteVerification("custom-token", "bing-token")).toEqual({
			google: "custom-token",
			other: { "msvalidate.01": "bing-token" },
		});
	});
});
