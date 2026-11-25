import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { allSeoContents } from "@/content";
import type { SeoContent } from "@/types/seo";

const staticIndexablePaths = ["/", "/panduan", "/kebijakan-privasi"] as const;

export function getIndexableSitemapEntries(
	contents: readonly SeoContent[] = allSeoContents,
): MetadataRoute.Sitemap {
	const urls = new Set<string>();

	for (const path of staticIndexablePaths) {
		urls.add(path === "/" ? `${siteConfig.url}/` : `${siteConfig.url}${path}`);
	}

	for (const item of contents) {
		if (item.status === "published" && item.indexable) {
			const normalized = item.slug.startsWith("/")
				? item.slug
				: `/${item.slug}`;
			urls.add(`${siteConfig.url}${normalized}`);
		}
	}

	return [...urls].map((url) => ({ url }));
}
