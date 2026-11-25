import { Compass, Info } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/common/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ConversionBanner } from "@/components/seo/ConversionBanner";
import { EditorialSectionsBlock } from "@/components/seo/EditorialSectionsBlock";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { RelatedLinksGrid } from "@/components/seo/RelatedLinksGrid";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { campusGuides, getCampusGuideBySlug } from "@/content/campus-guides";
import { buildContentMetadata } from "@/lib/seo/metadata";
import {
	type BreadcrumbItem,
	buildContentStructuredData,
} from "@/lib/seo/structured-data";

type CampusGuidePageProps = {
	params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
	return campusGuides
		.filter((guide) => guide.status === "published")
		.map((guide) => ({
			slug: guide.slug.replace("/akses-kampus/", ""),
		}));
}

export async function generateMetadata({
	params,
}: CampusGuidePageProps): Promise<Metadata> {
	const { slug } = await params;
	const guide = getCampusGuideBySlug(`/akses-kampus/${slug}`);
	if (!guide) {
		return {};
	}
	return buildContentMetadata(guide);
}

export default async function CampusGuidePage({
	params,
}: CampusGuidePageProps) {
	const { slug } = await params;
	const guide = getCampusGuideBySlug(`/akses-kampus/${slug}`);

	if (!guide) {
		notFound();
	}

	const breadcrumbs: BreadcrumbItem[] = [
		{ name: "Beranda", path: "/" },
		{ name: "Lokasi Terban", path: "/lokasi/terban-gondokusuman" },
		{ name: `Akses ${guide.campusShortName}`, path: guide.slug },
	];

	const jsonLd = buildContentStructuredData(guide, breadcrumbs);

	return (
		<>
			<JsonLdScript data={jsonLd} />
			<Header />
			<main id="main-content" className="pt-24 pb-16 lg:pt-32 lg:pb-24">
				<Container>
					<div className="mx-auto max-w-4xl">
						<Breadcrumbs items={breadcrumbs} />

						<header className="space-y-4">
							<Badge
								variant="secondary"
								className="bg-primary/10 text-primary border-primary/20 text-xs font-semibold uppercase tracking-wider"
							>
								{guide.eyebrow}
							</Badge>
							<h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
								{guide.title}
							</h1>
							<p className="text-base leading-7 text-muted-foreground sm:text-lg">
								{guide.intro}
							</p>

							<div className="flex items-start gap-2.5 rounded-xl border border-border/70 bg-secondary/40 p-4 text-xs leading-5 text-muted-foreground">
								<Info
									className="mt-0.5 h-4 w-4 shrink-0 text-primary"
									aria-hidden="true"
								/>
								<p>{guide.independentDisclaimer}</p>
							</div>
						</header>

						{/* Corridor Summary & Transport Modes */}
						<section
							aria-label={`Akses koridor menuju ${guide.campusShortName}`}
							className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2"
						>
							<Card className="border-border/70 bg-card shadow-sm">
								<CardContent className="p-6">
									<h2 className="text-lg font-semibold text-foreground">
										Koridor Akses dari Terban ke {guide.campusShortName}
									</h2>
									<p className="mt-3 text-sm leading-6 text-muted-foreground">
										{guide.corridorSummary}
									</p>
								</CardContent>
							</Card>

							<Card className="border-border/70 bg-card shadow-sm">
								<CardContent className="p-6">
									<h2 className="text-lg font-semibold text-foreground">
										Opsi Mobilitas Penghuni
									</h2>
									<ul className="mt-3 space-y-2.5 text-sm leading-6 text-muted-foreground">
										{guide.transportModes.map((mode) => (
											<li key={mode} className="flex items-start gap-2.5">
												<Compass
													className="mt-1 h-4 w-4 shrink-0 text-primary"
													aria-hidden="true"
												/>
												<span>{mode}</span>
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						</section>

						{/* Faculty / Campus Cluster Guidance Table */}
						<section
							aria-label={`Area kampus ${guide.campusShortName}`}
							className="mt-10"
						>
							<h2 className="text-xl font-semibold text-foreground sm:text-2xl">
								Catatan Arah per Klaster Area {guide.campusShortName}
							</h2>
							<div className="mt-4 overflow-x-auto rounded-2xl border border-border/70 bg-card shadow-sm">
								<table className="w-full min-w-[600px] border-collapse text-left text-sm">
									<thead>
										<tr className="border-b border-border/70 bg-secondary/50 text-xs font-semibold uppercase tracking-wider text-foreground">
											<th className="p-4">Klaster Area</th>
											<th className="p-4">Arah Akses dari Terban</th>
											<th className="p-4">Pengecekan Disarankan</th>
										</tr>
									</thead>
									<tbody className="divide-y divide-border/60">
										{guide.facultyRows.map((row) => (
											<tr key={row.area} className="align-top">
												<td className="p-4 font-semibold text-foreground">
													{row.area}
												</td>
												<td className="p-4 text-muted-foreground">
													{row.accessNote}
												</td>
												<td className="p-4 text-muted-foreground">
													{row.recommendedCheck}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</section>

						<EditorialSectionsBlock
							sections={guide.sections}
							faqs={guide.faqs}
							faqAriaLabel={`Pertanyaan akses ${guide.campusShortName}`}
						/>

						<ConversionBanner
							whatsappMessage={`Halo Ibu, saya mahasiswi ${guide.campusShortName} yang ingin menanyakan ketersediaan kamar ZNL Kost Putri dan jadwal survei.`}
						/>

						<RelatedLinksGrid slugs={guide.relatedSlugs} />
					</div>
				</Container>
			</main>
			<Footer />
		</>
	);
}
