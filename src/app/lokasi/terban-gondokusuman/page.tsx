import { Compass, MapPin, Navigation } from "lucide-react";
import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LocationMapEmbed } from "@/components/property/LocationMapEmbed";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ConversionBanner } from "@/components/seo/ConversionBanner";
import { EditorialSectionsBlock } from "@/components/seo/EditorialSectionsBlock";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { RelatedLinksGrid } from "@/components/seo/RelatedLinksGrid";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { getLocationGuideBySlug } from "@/content/locations";
import { landmarks } from "@/data/landmarks";
import { propertyData } from "@/data/property";
import { buildContentMetadata } from "@/lib/seo/metadata";
import {
	type BreadcrumbItem,
	buildContentStructuredData,
} from "@/lib/seo/structured-data";

const locationGuide = getLocationGuideBySlug("/lokasi/terban-gondokusuman");

if (!locationGuide) {
	throw new Error("Missing content for /lokasi/terban-gondokusuman");
}

export const metadata: Metadata = buildContentMetadata(locationGuide);

export default function TerbanLocationPage() {
	if (!locationGuide) return null;

	const breadcrumbs: BreadcrumbItem[] = [
		{ name: "Beranda", path: "/" },
		{ name: "Lokasi Terban & Gondokusuman", path: locationGuide.slug },
	];

	const jsonLd = buildContentStructuredData(locationGuide, breadcrumbs);

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
								{locationGuide.eyebrow}
							</Badge>
							<h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
								{locationGuide.title}
							</h1>
							<p className="text-base leading-7 text-muted-foreground sm:text-lg">
								{locationGuide.intro}
							</p>
						</header>

						{/* Verified Property Fact Strip */}
						<section
							aria-label="Ringkasan identitas lokasi kost"
							className="mt-8 grid grid-cols-1 gap-4 rounded-2xl border border-border/70 bg-secondary/30 p-5 sm:grid-cols-3"
						>
							<div>
								<p className="text-xs font-semibold uppercase tracking-wider text-primary">
									Alamat Resmi
								</p>
								<p className="mt-1 text-sm font-medium text-foreground">
									{propertyData.address.fullAddress}
								</p>
							</div>
							<div>
								<p className="text-xs font-semibold uppercase tracking-wider text-primary">
									Kategori Hunian
								</p>
								<p className="mt-1 text-sm font-medium text-foreground">
									{propertyData.identity.businessType} •{" "}
									{propertyData.roomTypes.bathroomType}
								</p>
							</div>
							<div>
								<p className="text-xs font-semibold uppercase tracking-wider text-primary">
									Konfirmasi Kamar
								</p>
								<p className="mt-1 text-sm font-medium text-foreground">
									{siteConfig.phoneDisplay} (WhatsApp Ibu Kost)
								</p>
							</div>
						</section>

						{/* Neighborhood Highlights */}
						<section
							aria-label="Keunggulan kawasan Terban Gondokusuman"
							className="mt-10"
						>
							<h2 className="text-xl font-semibold text-foreground sm:text-2xl">
								Karakter Kawasan Terban & Gondokusuman
							</h2>
							<div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
								{locationGuide.neighborhoodHighlights.map((item) => (
									<Card
										key={item.title}
										className="border-border/70 bg-card shadow-sm"
									>
										<CardContent className="p-5">
											<h3 className="text-base font-semibold text-foreground">
												{item.title}
											</h3>
											<p className="mt-2 text-sm leading-6 text-muted-foreground">
												{item.detail}
											</p>
										</CardContent>
									</Card>
								))}
							</div>
						</section>

						{/* Verified Surrounding Landmarks */}
						<section
							aria-label="Titik referensi sekitar Terban"
							className="mt-10"
						>
							<h2 className="text-xl font-semibold text-foreground sm:text-2xl">
								Kampus, Koridor Jalan & Fasilitas Umum Sekitar
							</h2>
							<p className="mt-2 text-sm text-muted-foreground">
								Kami menampilkan konteks kawasan tanpa perkiraan menit
								perjalanan yang belum terukur ke masing-masing gedung tujuan.
								Gunakan peta di bawah untuk memeriksa rute aktual Anda.
							</p>
							<div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
								{landmarks.map((landmark) => (
									<div
										key={landmark.id}
										className="rounded-xl border border-border/70 bg-card p-4"
									>
										<div className="flex items-start justify-between gap-2">
											<h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
												<MapPin
													className="h-4 w-4 shrink-0 text-primary"
													aria-hidden="true"
												/>
												{landmark.name}
											</h3>
										</div>
										<p className="mt-1 text-xs font-medium text-primary">
											{landmark.area}
										</p>
										<p className="mt-2 text-xs leading-5 text-muted-foreground">
											{landmark.factualContext}
										</p>
									</div>
								))}
							</div>
						</section>

						{/* Transport & Interactive Map */}
						<section
							aria-label="Akses transportasi dan peta lokasi"
							className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start"
						>
							<Card className="border-border/70 bg-card shadow-sm">
								<CardContent className="p-6">
									<h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
										<Navigation
											className="h-4 w-4 text-primary"
											aria-hidden="true"
										/>
										Catatan Akses & Parkir
									</h2>
									<ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
										{locationGuide.transportNotes.map((note) => (
											<li key={note} className="flex items-start gap-2.5">
												<Compass
													className="mt-1 h-4 w-4 shrink-0 text-primary"
													aria-hidden="true"
												/>
												<span>{note}</span>
											</li>
										))}
									</ul>
								</CardContent>
							</Card>

							<LocationMapEmbed />
						</section>

						<EditorialSectionsBlock
							sections={locationGuide.sections}
							faqs={locationGuide.faqs}
							faqAriaLabel="Pertanyaan seputar lokasi Terban"
						/>

						<ConversionBanner whatsappMessage="Halo Ibu, saya melihat halaman lokasi ZNL Kost Putri di Terban Gondokusuman dan ingin menanyakan ketersediaan kamar serta jadwal survei." />

						<RelatedLinksGrid slugs={locationGuide.relatedSlugs} />
					</div>
				</Container>
			</main>
			<Footer />
		</>
	);
}
