import { siteConfig } from "@/config/site";
import { galleryImages } from "@/data/gallery";

export function buildStructuredData() {
	const baseUrl = `${siteConfig.url}/`;
	const accommodationId = `${siteConfig.url}/#accommodation`;
	const websiteId = `${siteConfig.url}/#website`;
	const webpageId = `${siteConfig.url}/#webpage`;
	const primaryImageUrl = `${siteConfig.url}${siteConfig.ogImage.url}`;

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
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebSite",
				"@id": websiteId,
				url: baseUrl,
				name: siteConfig.name,
				description: siteConfig.seoDescription,
				inLanguage: "id-ID",
			},
			{
				"@type": "WebPage",
				"@id": webpageId,
				url: baseUrl,
				name: siteConfig.seoTitle,
				description: siteConfig.seoDescription,
				inLanguage: "id-ID",
				isPartOf: { "@id": websiteId },
				about: { "@id": accommodationId },
				primaryImageOfPage: {
					"@type": "ImageObject",
					url: primaryImageUrl,
					width: siteConfig.ogImage.width,
					height: siteConfig.ogImage.height,
				},
			},
			{
				"@type": "Accommodation",
				"@id": accommodationId,
				name: siteConfig.name,
				url: baseUrl,
				description: siteConfig.description,
				telephone: siteConfig.phoneSchema,
				hasMap: siteConfig.googleMapsUrl,
				image: [
					primaryImageUrl,
					...galleryImages.map((img) => `${siteConfig.url}${img.src}`),
				],
				address: {
					"@type": "PostalAddress",
					streetAddress: siteConfig.streetAddress,
					addressLocality: siteConfig.city,
					addressRegion: siteConfig.region,
					postalCode: siteConfig.postalCode,
					addressCountry: siteConfig.countryCode,
				},
				geo: {
					"@type": "GeoCoordinates",
					latitude: siteConfig.geo.latitude,
					longitude: siteConfig.geo.longitude,
				},
				amenityFeature: verifiedAmenities.map((name) => ({
					"@type": "LocationFeatureSpecification",
					name,
					value: true,
				})),
			},
		],
	};
}

export function serializeJsonLd(data: unknown): string {
	return JSON.stringify(data).replace(/</g, "\\u003c");
}
