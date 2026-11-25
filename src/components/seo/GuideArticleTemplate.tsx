import { CheckSquare, Info } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ConversionBanner } from "@/components/seo/ConversionBanner";
import { EditorialSectionsBlock } from "@/components/seo/EditorialSectionsBlock";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { RelatedLinksGrid } from "@/components/seo/RelatedLinksGrid";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
	type BreadcrumbItem,
	buildContentStructuredData,
} from "@/lib/seo/structured-data";
import type { EditorialGuideContent } from "@/types/seo";

type GuideArticleTemplateProps = {
	guide: EditorialGuideContent;
};

export function GuideArticleTemplate({ guide }: GuideArticleTemplateProps) {
	const breadcrumbs: BreadcrumbItem[] = [
		{ name: "Beranda", path: "/" },
		{ name: "Panduan", path: "/panduan" },
		{ name: guide.title, path: guide.slug },
	];

	const jsonLd = buildContentStructuredData(guide, breadcrumbs);

	return (
		<article className="pt-24 pb-16 lg:pt-32 lg:pb-24">
			<JsonLdScript data={jsonLd} />
			<Container>
				<div className="mx-auto max-w-4xl">
					<Breadcrumbs items={breadcrumbs} />

					<header className="space-y-4">
						<div className="flex flex-wrap items-center gap-3">
							<Badge
								variant="secondary"
								className="bg-primary/10 text-primary border-primary/20 text-xs font-semibold uppercase tracking-wider"
							>
								{guide.eyebrow}
							</Badge>
							<span className="text-xs text-muted-foreground">
								Estimasi baca {guide.readingMinutes} menit • Diperbarui{" "}
								{guide.updatedAt}
							</span>
						</div>

						<h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
							{guide.title}
						</h1>

						<p className="text-base leading-7 text-muted-foreground sm:text-lg">
							{guide.intro}
						</p>

						{guide.disclosure ? (
							<div className="flex items-start gap-2.5 rounded-xl border border-border/70 bg-secondary/40 p-4 text-xs leading-5 text-muted-foreground">
								<Info
									className="mt-0.5 h-4 w-4 shrink-0 text-primary"
									aria-hidden="true"
								/>
								<p>{guide.disclosure}</p>
							</div>
						) : null}
					</header>

					{/* Comparison Table (if present) */}
					{guide.comparisonRows && guide.comparisonRows.length > 0 ? (
						<section
							aria-label="Tabel perbandingan metode pencarian kost"
							className="mt-10"
						>
							<h2 className="text-xl font-semibold text-foreground sm:text-2xl">
								Perbandingan Metode Pencarian Kost di Yogyakarta
							</h2>
							<div className="mt-4 overflow-x-auto rounded-2xl border border-border/70 bg-card shadow-sm">
								<table className="w-full min-w-[640px] border-collapse text-left text-sm">
									<thead>
										<tr className="border-b border-border/70 bg-secondary/50 text-xs font-semibold uppercase tracking-wider text-foreground">
											<th className="p-4">Metode</th>
											<th className="p-4">Cara Kerja</th>
											<th className="p-4">Kelebihan</th>
											<th className="p-4">Keterbatasan</th>
										</tr>
									</thead>
									<tbody className="divide-y divide-border/60">
										{guide.comparisonRows.map((row) => (
											<tr key={row.label} className="align-top">
												<td className="p-4 font-semibold text-foreground">
													{row.label}
												</td>
												<td className="p-4 text-muted-foreground">
													{row.description}
												</td>
												<td className="p-4 text-muted-foreground">
													{row.strengths}
												</td>
												<td className="p-4 text-muted-foreground">
													{row.limitations}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</section>
					) : null}

					{/* Checklist Groups (if present) */}
					{guide.checklistGroups && guide.checklistGroups.length > 0 ? (
						<section
							aria-label="Checklist pemeriksaan saat survei kost"
							className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2"
						>
							{guide.checklistGroups.map((group) => (
								<Card
									key={group.category}
									className="border-border/70 bg-card shadow-sm"
								>
									<CardContent className="p-6">
										<h2 className="flex items-center gap-2 text-base font-semibold text-foreground">
											<CheckSquare
												className="h-4 w-4 text-primary"
												aria-hidden="true"
											/>
											{group.category}
										</h2>
										<ul className="mt-4 space-y-2.5 text-sm leading-6 text-muted-foreground">
											{group.items.map((item) => (
												<li key={item} className="flex items-start gap-2.5">
													<span
														className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
														aria-hidden="true"
													/>
													<span>{item}</span>
												</li>
											))}
										</ul>
									</CardContent>
								</Card>
							))}
						</section>
					) : null}

					<EditorialSectionsBlock
						sections={guide.sections}
						faqs={guide.faqs}
						faqAriaLabel="Pertanyaan terkait panduan"
					/>

					<ConversionBanner
						whatsappMessage={`Halo Ibu, saya membaca panduan "${guide.title}" di website ZNL Kost Putri dan ingin menanyakan ketersediaan kamar serta jadwal survei.`}
					/>

					<RelatedLinksGrid slugs={guide.relatedSlugs} />
				</div>
			</Container>
		</article>
	);
}
