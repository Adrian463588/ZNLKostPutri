import fs from "node:fs";
import path from "node:path";
import { siteConfig } from "@/config/site";
import { allSeoContents } from "@/content";
import { propertyData } from "@/data/property";
import type {
	SeoContent,
	ValidationIssue,
	ValidationResult,
} from "@/types/seo";
import { getIndexableSitemapEntries } from "./sitemap";
import { buildHomepageStructuredData } from "./structured-data";

const BANNED_HYP_PHRASES = [
	"termurah",
	"paling murah",
	"paling strategis",
	"terbaik se-yogyakarta",
	"pasti aman 100%",
	"aman 100%",
	"free wifi",
	"wi-fi gratis",
	"kamar mandi dalam tersedia",
] as const;

const KNOWN_STATIC_ROUTES = new Set(["/", "/panduan", "/kebijakan-privasi"]);

function collectPlainText(item: SeoContent): string {
	const parts = [
		item.title,
		item.metaTitle,
		item.description,
		item.intro,
		...(item.disclosure ? [item.disclosure] : []),
		...item.sections.flatMap((s) => [
			s.heading,
			...s.paragraphs,
			...(s.bullets ?? []),
		]),
		...(item.faqs?.flatMap((f) => [f.question, f.answer]) ?? []),
	];
	return parts.join(" ").toLowerCase();
}

export function validateSeoContents(
	contents: readonly SeoContent[] = allSeoContents,
	publicDirPath?: string,
): ValidationResult {
	const errors: ValidationIssue[] = [];
	const warnings: ValidationIssue[] = [];

	const seenSlugs = new Set<string>();
	const seenTitles = new Set<string>();
	const seenDescriptions = new Set<string>();
	const validSlugs = new Set<string>([
		...KNOWN_STATIC_ROUTES,
		...contents
			.filter((c) => c.status === "published" && c.indexable)
			.map((c) => c.slug),
	]);

	for (const item of contents) {
		if (!item.slug.startsWith("/")) {
			errors.push({
				severity: "error",
				code: "INVALID_SLUG",
				message: `Slug must start with '/': ${item.slug}`,
				target: item.id,
			});
		}
		if (seenSlugs.has(item.slug)) {
			errors.push({
				severity: "error",
				code: "DUPLICATE_SLUG",
				message: `Duplicate slug detected: ${item.slug}`,
				target: item.id,
			});
		}
		seenSlugs.add(item.slug);

		if (seenTitles.has(item.metaTitle.toLowerCase())) {
			errors.push({
				severity: "error",
				code: "DUPLICATE_META_TITLE",
				message: `Duplicate metaTitle: ${item.metaTitle}`,
				target: item.id,
			});
		}
		seenTitles.add(item.metaTitle.toLowerCase());

		if (seenDescriptions.has(item.description.toLowerCase())) {
			errors.push({
				severity: "error",
				code: "DUPLICATE_DESCRIPTION",
				message: `Duplicate description on ${item.slug}`,
				target: item.id,
			});
		}
		seenDescriptions.add(item.description.toLowerCase());

		if (item.status === "published") {
			if (!item.sources || item.sources.length === 0) {
				errors.push({
					severity: "error",
					code: "MISSING_EVIDENCE",
					message: `Published item lacks verification sources: ${item.slug}`,
					target: item.id,
				});
			}
			if (!item.reviewedAt) {
				errors.push({
					severity: "error",
					code: "MISSING_REVIEW_DATE",
					message: `Published item lacks reviewedAt date: ${item.slug}`,
					target: item.id,
				});
			}
		}

		for (const relatedSlug of item.relatedSlugs) {
			if (!validSlugs.has(relatedSlug)) {
				errors.push({
					severity: "error",
					code: "BROKEN_INTERNAL_LINK",
					message: `Related slug '${relatedSlug}' does not point to a published route`,
					target: item.id,
				});
			}
		}

		const fullText = collectPlainText(item);
		for (const phrase of BANNED_HYP_PHRASES) {
			if (fullText.includes(phrase)) {
				errors.push({
					severity: "error",
					code: "BANNED_UNVERIFIED_CLAIM",
					message: `Forbidden unverified/hyperbolic phrase '${phrase}' found in ${item.slug}`,
					target: item.id,
				});
			}
		}

		if (item.metaTitle.length > 68) {
			warnings.push({
				severity: "warning",
				code: "LONG_META_TITLE",
				message: `Meta title exceeds 68 chars (${item.metaTitle.length}) on ${item.slug}`,
				target: item.id,
			});
		}
	}

	// Verify sitemap excludes non-published or non-indexable entries
	const sitemapUrls = new Set(
		getIndexableSitemapEntries(contents).map((entry) => entry.url),
	);
	for (const item of contents) {
		const expectedUrl = `${siteConfig.url}${item.slug}`;
		const shouldBeInSitemap = item.status === "published" && item.indexable;
		if (shouldBeInSitemap && !sitemapUrls.has(expectedUrl)) {
			errors.push({
				severity: "error",
				code: "SITEMAP_MISSING_PUBLISHED",
				message: `Published indexable route missing from sitemap: ${expectedUrl}`,
				target: item.id,
			});
		}
		if (!shouldBeInSitemap && sitemapUrls.has(expectedUrl)) {
			errors.push({
				severity: "error",
				code: "SITEMAP_LEAKED_NONINDEXABLE",
				message: `Draft/non-indexable route leaked into sitemap: ${expectedUrl}`,
				target: item.id,
			});
		}
	}

	// Validate structured data invariants
	const homepageLd = buildHomepageStructuredData();
	const accommodation = homepageLd["@graph"].find(
		(n) => n["@type"] === "Accommodation",
	);
	if (!accommodation || accommodation["@id"] !== propertyData.id) {
		errors.push({
			severity: "error",
			code: "SCHEMA_ENTITY_ID_MISMATCH",
			message: "Homepage Accommodation @id must match propertyData.id",
		});
	}
	for (const forbidden of [
		"aggregateRating",
		"review",
		"priceRange",
		"openingHours",
	]) {
		if (accommodation && forbidden in accommodation) {
			errors.push({
				severity: "error",
				code: "SCHEMA_FORBIDDEN_FIELD",
				message: `Forbidden unverified Schema field '${forbidden}' present on Accommodation`,
			});
		}
	}

	// Validate public assets when publicDirPath is provided or default exists
	const resolvedPublic = publicDirPath ?? path.resolve(process.cwd(), "public");
	if (fs.existsSync(resolvedPublic)) {
		const assets = [
			siteConfig.ogImage.url,
			...propertyData.roomTypes.items.map((r) => r.image),
			...propertyData.gallery.items.map((g) => g.src),
			...propertyData.videos.items.flatMap((v) => [v.src, v.poster]),
		];
		for (const rel of assets) {
			const abs = path.join(resolvedPublic, rel.replace(/^\//, ""));
			if (!fs.existsSync(abs)) {
				errors.push({
					severity: "error",
					code: "MISSING_PUBLIC_ASSET",
					message: `Asset not found on disk: ${rel}`,
				});
			}
		}
	}

	return {
		valid: errors.length === 0,
		errors,
		warnings,
	};
}
