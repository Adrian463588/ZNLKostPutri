import type { MetadataRoute } from "next";
import { getIndexableSitemapEntries } from "@/lib/seo/sitemap";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
	return getIndexableSitemapEntries();
}
