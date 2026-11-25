import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ConversionBanner } from "@/components/seo/ConversionBanner";
import { EditorialSectionsBlock } from "@/components/seo/EditorialSectionsBlock";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { RelatedLinksGrid } from "@/components/seo/RelatedLinksGrid";
import { BudgetCalculator } from "@/components/tools/BudgetCalculator";
import { Badge } from "@/components/ui/badge";
import { toolPages } from "@/content";
import { buildContentMetadata } from "@/lib/seo/metadata";
import {
	type BreadcrumbItem,
	buildContentStructuredData,
} from "@/lib/seo/structured-data";

const toolContent = toolPages.find(
	(item) => item.slug === "/tools/kalkulator-anggaran-kost",
);

if (!toolContent) {
	throw new Error("Missing content for /tools/kalkulator-anggaran-kost");
}

export const metadata: Metadata = buildContentMetadata(toolContent);

export default function BudgetCalculatorPage() {
	if (!toolContent) return null;

	const breadcrumbs: BreadcrumbItem[] = [
		{ name: "Beranda", path: "/" },
		{ name: "Panduan", path: "/panduan" },
		{ name: "Kalkulator Anggaran Kost", path: toolContent.slug },
	];

	const jsonLd = buildContentStructuredData(toolContent, breadcrumbs);

	return (
		<>
			<JsonLdScript data={jsonLd} />
			<Header />
			<main id="main-content" className="pt-24 pb-16 lg:pt-32 lg:pb-24">
				<Container>
					<div className="mx-auto max-w-5xl">
						<Breadcrumbs items={breadcrumbs} />

						<header className="max-w-3xl space-y-4">
							<Badge
								variant="secondary"
								className="bg-primary/10 text-primary border-primary/20 text-xs font-semibold uppercase tracking-wider"
							>
								{toolContent.eyebrow}
							</Badge>
							<h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
								{toolContent.title}
							</h1>
							<p className="text-base leading-7 text-muted-foreground sm:text-lg">
								{toolContent.intro}
							</p>
						</header>

						<div className="mt-10">
							<BudgetCalculator />
						</div>

						<div className="mx-auto max-w-4xl">
							<EditorialSectionsBlock
								sections={toolContent.sections}
								faqs={toolContent.faqs}
								faqAriaLabel="Pertanyaan tentang kalkulator anggaran kost"
							/>

							<ConversionBanner whatsappMessage="Halo Ibu, saya sedang menyusun anggaran kost di Jogja dan ingin menanyakan rincian tarif kamar serta ketersediaan di ZNL Kost Putri." />

							<RelatedLinksGrid slugs={toolContent.relatedSlugs} />
						</div>
					</div>
				</Container>
			</main>
			<Footer />
		</>
	);
}
