import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { GuideArticleTemplate } from "@/components/seo/GuideArticleTemplate";
import { editorialGuides, getEditorialGuideBySlug } from "@/content/guides";
import { buildContentMetadata } from "@/lib/seo/metadata";

type GuidePageProps = {
	params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
	return editorialGuides
		.filter((guide) => guide.status === "published")
		.map((guide) => ({
			slug: guide.slug.replace("/panduan/", ""),
		}));
}

export async function generateMetadata({
	params,
}: GuidePageProps): Promise<Metadata> {
	const { slug } = await params;
	const guide = getEditorialGuideBySlug(`/panduan/${slug}`);
	if (!guide) {
		return {};
	}
	return buildContentMetadata(guide);
}

export default async function GuideDetailPage({ params }: GuidePageProps) {
	const { slug } = await params;
	const guide = getEditorialGuideBySlug(`/panduan/${slug}`);

	if (!guide) {
		notFound();
	}

	return (
		<>
			<Header />
			<main id="main-content">
				<GuideArticleTemplate guide={guide} />
			</main>
			<Footer />
		</>
	);
}
