import { siteConfig } from "@/config/site";
import { propertyData } from "@/data/property";
import type { FaqItem, SeoContent } from "@/types/seo";

export type BreadcrumbItem = {
	name: string;
	path: string;
};

function absoluteUrl(path: string): string {
	if (path === "/") return `${siteConfig.url}/`;
	return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildAccommodationNode() {
	const verifiedAmenities = [
		"Khusus penghuni putri",
		"Kasur dan bantal",
		"Lemari pakaian",
		"Meja kecil",
		"Kamar mandi luar bersih",
		"Area parkir motor",
		"Akses lingkungan terkontrol",
	];

	return {
		"@type": "Accommodation",
		"@id": propertyData.id,
		name: propertyData.identity.name,
		url: `${siteConfig.url}/`,
		description: siteConfig.description,
		telephone: propertyData.contact.phoneSchema,
		hasMap: propertyData.coordinates.googleMapsUrl,
		image: [
			`${siteConfig.url}${siteConfig.ogImage.url}`,
			...propertyData.gallery.items.map((img) => `${siteConfig.url}${img.src}`),
		],
		address: {
			"@type": "PostalAddress",
			streetAddress: propertyData.address.streetAddress,
			addressLocality: propertyData.address.city,
			addressRegion: propertyData.address.region,
			postalCode: propertyData.address.postalCode,
			addressCountry: propertyData.address.countryCode,
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: propertyData.coordinates.latitude,
			longitude: propertyData.coordinates.longitude,
		},
		amenityFeature: verifiedAmenities.map((name) => ({
			"@type": "LocationFeatureSpecification",
			name,
			value: true,
		})),
	};
}

export function buildBreadcrumbNode(
	pagePath: string,
	breadcrumbs: readonly BreadcrumbItem[],
) {
	return {
		"@type": "BreadcrumbList",
		"@id": `${absoluteUrl(pagePath)}#breadcrumb`,
		itemListElement: breadcrumbs.map((crumb, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: crumb.name,
			item: absoluteUrl(crumb.path),
		})),
	};
}

export function buildFaqNode(pagePath: string, faqs: readonly FaqItem[]) {
	return {
		"@type": "FAQPage",
		"@id": `${absoluteUrl(pagePath)}#faq`,
		mainEntity: faqs.map((faq) => ({
			"@type": "Question",
			name: faq.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: faq.answer,
			},
		})),
	};
}

export function buildHomepageStructuredData() {
	const baseUrl = `${siteConfig.url}/`;
	const primaryImageUrl = `${siteConfig.url}${siteConfig.ogImage.url}`;

	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebSite",
				"@id": propertyData.websiteId,
				url: baseUrl,
				name: siteConfig.name,
				description: siteConfig.seoDescription,
				inLanguage: "id-ID",
			},
			{
				"@type": "WebPage",
				"@id": `${siteConfig.url}/#webpage`,
				url: baseUrl,
				name: siteConfig.seoTitle,
				description: siteConfig.seoDescription,
				inLanguage: "id-ID",
				isPartOf: { "@id": propertyData.websiteId },
				about: { "@id": propertyData.id },
				primaryImageOfPage: {
					"@type": "ImageObject",
					url: primaryImageUrl,
					width: siteConfig.ogImage.width,
					height: siteConfig.ogImage.height,
				},
			},
			buildAccommodationNode(),
		],
	};
}

export function buildContentStructuredData(
	content: SeoContent,
	breadcrumbs: readonly BreadcrumbItem[],
) {
	const pageUrl = absoluteUrl(content.slug);
	const primaryImageUrl = `${siteConfig.url}${siteConfig.ogImage.url}`;

	const graph: Record<string, unknown>[] = [
		{
			"@type": "WebPage",
			"@id": `${pageUrl}#webpage`,
			url: pageUrl,
			name: content.metaTitle,
			description: content.description,
			inLanguage: "id-ID",
			isPartOf: { "@id": propertyData.websiteId },
			about: { "@id": propertyData.id },
			breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
			primaryImageOfPage: {
				"@type": "ImageObject",
				url: primaryImageUrl,
				width: siteConfig.ogImage.width,
				height: siteConfig.ogImage.height,
			},
		},
		buildBreadcrumbNode(content.slug, breadcrumbs),
	];

	if (content.contentType === "guide" || content.contentType === "comparison") {
		graph.push({
			"@type": "Article",
			"@id": `${pageUrl}#article`,
			headline: content.title,
			description: content.description,
			inLanguage: "id-ID",
			datePublished: content.reviewedAt,
			dateModified: content.updatedAt,
			author: {
				"@type": "Organization",
				name: siteConfig.name,
				url: `${siteConfig.url}/`,
			},
			publisher: {
				"@type": "Organization",
				name: siteConfig.name,
				url: `${siteConfig.url}/`,
			},
			mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
		});
	}

	if (content.contentType === "tool") {
		graph.push({
			"@type": "WebApplication",
			"@id": `${pageUrl}#tool`,
			name: content.title,
			description: content.description,
			url: pageUrl,
			applicationCategory: "FinanceApplication",
			operatingSystem: "Any",
			inLanguage: "id-ID",
			offers: {
				"@type": "Offer",
				price: "0",
				priceCurrency: "IDR",
			},
		});
	}

	if (content.faqs && content.faqs.length > 0) {
		graph.push(buildFaqNode(content.slug, content.faqs));
	}

	return {
		"@context": "https://schema.org",
		"@graph": graph,
	};
}

export function buildHubStructuredData(
	pagePath: string,
	title: string,
	description: string,
	breadcrumbs: readonly BreadcrumbItem[],
) {
	const pageUrl = absoluteUrl(pagePath);
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "CollectionPage",
				"@id": `${pageUrl}#webpage`,
				url: pageUrl,
				name: title,
				description,
				inLanguage: "id-ID",
				isPartOf: { "@id": propertyData.websiteId },
				breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
			},
			buildBreadcrumbNode(pagePath, breadcrumbs),
		],
	};
}

export function serializeJsonLd(data: unknown): string {
	return JSON.stringify(data).replace(/</g, "\\u003c");
}
