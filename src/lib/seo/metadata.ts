import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import type { SeoContent } from "@/types/seo";

type StaticPageMetaInput = {
	title: string;
	description: string;
	path: string;
	indexable?: boolean;
	type?: "website" | "article";
};

export function buildStaticMetadata({
	title,
	description,
	path,
	indexable = true,
	type = "website",
}: StaticPageMetaInput): Metadata {
	const normalizedPath = path.startsWith("/") ? path : `/${path}`;
	const canonicalUrl =
		normalizedPath === "/"
			? `${siteConfig.url}/`
			: `${siteConfig.url}${normalizedPath}`;

	return {
		title: title.includes(siteConfig.name) ? { absolute: title } : title,
		description,
		alternates: {
			canonical: canonicalUrl,
		},
		openGraph: {
			type,
			locale: "id_ID",
			url: canonicalUrl,
			siteName: siteConfig.name,
			title,
			description,
			images: [
				{
					url: siteConfig.ogImage.url,
					width: siteConfig.ogImage.width,
					height: siteConfig.ogImage.height,
					alt: siteConfig.ogImage.alt,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [
				{
					url: siteConfig.ogImage.url,
					alt: siteConfig.ogImage.alt,
				},
			],
		},
		robots: indexable
			? {
					index: true,
					follow: true,
					googleBot: {
						index: true,
						follow: true,
						"max-video-preview": -1,
						"max-image-preview": "large",
						"max-snippet": -1,
					},
				}
			: {
					index: false,
					follow: false,
				},
	};
}

export function buildContentMetadata(content: SeoContent): Metadata {
	const isIndexable = content.status === "published" && content.indexable;
	const isArticle =
		content.contentType === "guide" || content.contentType === "comparison";

	return buildStaticMetadata({
		title: content.metaTitle,
		description: content.description,
		path: content.slug,
		indexable: isIndexable,
		type: isArticle ? "article" : "website",
	});
}

export function buildSiteVerification(
	googleEnv?: string,
	bingEnv?: string,
): Metadata["verification"] {
	const google = googleEnv?.trim();
	const bing = bingEnv?.trim();

	if (!google && !bing) return undefined;

	return {
		...(google ? { google } : {}),
		...(bing ? { other: { "msvalidate.01": bing } } : {}),
	};
}
