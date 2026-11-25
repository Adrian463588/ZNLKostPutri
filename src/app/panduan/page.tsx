import { ArrowRight, Calculator, GraduationCap, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ConversionBanner } from "@/components/seo/ConversionBanner";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { campusGuides } from "@/content/campus-guides";
import { editorialGuides } from "@/content/guides";
import { locationGuides } from "@/content/locations";
import { buildStaticMetadata } from "@/lib/seo/metadata";
import {
	type BreadcrumbItem,
	buildHubStructuredData,
} from "@/lib/seo/structured-data";

const hubTitle = "Panduan Memilih Kost Putri di Yogyakarta | ZNL Kost Putri";
const hubDescription =
	"Kumpulan panduan lengkap untuk mahasiswi, pekerja perempuan, dan orang tua: profil lokasi Terban, akses UGM & UNY, checklist survei, perbandingan pencarian, dan kalkulator anggaran.";

export const metadata: Metadata = buildStaticMetadata({
	title: hubTitle,
	description: hubDescription,
	path: "/panduan",
});

export default function GuidesHubPage() {
	const breadcrumbs: BreadcrumbItem[] = [
		{ name: "Beranda", path: "/" },
		{ name: "Panduan Kost Jogja", path: "/panduan" },
	];

	const jsonLd = buildHubStructuredData(
		"/panduan",
		hubTitle,
		hubDescription,
		breadcrumbs,
	);

	const publishedLocationAndCampus = [
		...locationGuides.filter((item) => item.status === "published"),
		...campusGuides.filter((item) => item.status === "published"),
	];

	const publishedGuides = editorialGuides.filter(
		(item) => item.status === "published",
	);

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
								Pusat Referensi Calon Penghuni
							</Badge>
							<h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
								Panduan Kost Putri Yogyakarta
							</h1>
							<p className="text-base leading-7 text-muted-foreground sm:text-lg">
								Referensi praktis bagi mahasiswi baru, pekerja perempuan, dan
								orang tua sebelum survei kamar di kawasan Terban, Gondokusuman,
								maupun area sekitar UGM dan UNY.
							</p>
						</header>

						{/* Location & Campus Guides */}
						<section
							aria-label="Panduan lokasi dan akses kampus"
							className="mt-12"
						>
							<h2 className="flex items-center gap-2 text-xl font-semibold text-foreground sm:text-2xl">
								<MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
								<span>Panduan Kawasan & Akses Kampus</span>
							</h2>
							<div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
								{publishedLocationAndCampus.map((item) => (
									<Link
										key={item.id}
										href={item.slug}
										className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
									>
										<Card className="h-full border-border/70 bg-card transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md">
											<CardContent className="flex h-full flex-col justify-between gap-4 p-6">
												<div>
													<p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
														<GraduationCap
															className="h-3.5 w-3.5"
															aria-hidden="true"
														/>
														{item.eyebrow}
													</p>
													<h3 className="mt-2 text-lg font-semibold text-foreground group-hover:text-primary">
														{item.title}
													</h3>
													<p className="mt-2 text-sm leading-6 text-muted-foreground">
														{item.description}
													</p>
												</div>
												<span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
													Baca panduan lokasi
													<ArrowRight
														className="h-4 w-4 transition-transform group-hover:translate-x-1"
														aria-hidden="true"
													/>
												</span>
											</CardContent>
										</Card>
									</Link>
								))}
							</div>
						</section>

						{/* Editorial Articles */}
						<section aria-label="Artikel panduan sewa kost" className="mt-12">
							<h2 className="text-xl font-semibold text-foreground sm:text-2xl">
								Artikel Persiapan Mencari & Menyewa Kost
							</h2>
							<div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
								{publishedGuides.map((guide) => (
									<Link
										key={guide.id}
										href={guide.slug}
										className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
									>
										<Card className="h-full border-border/70 bg-card transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md">
											<CardContent className="flex h-full flex-col justify-between gap-4 p-6">
												<div>
													<div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
														<span className="font-semibold uppercase tracking-wider text-primary">
															{guide.eyebrow}
														</span>
														<span>{guide.readingMinutes} menit baca</span>
													</div>
													<h3 className="mt-2 text-lg font-semibold text-foreground group-hover:text-primary">
														{guide.title}
													</h3>
													<p className="mt-2 text-sm leading-6 text-muted-foreground">
														{guide.description}
													</p>
												</div>
												<span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
													Baca artikel lengkap
													<ArrowRight
														className="h-4 w-4 transition-transform group-hover:translate-x-1"
														aria-hidden="true"
													/>
												</span>
											</CardContent>
										</Card>
									</Link>
								))}
							</div>
						</section>

						{/* Interactive Budget Tool Callout */}
						<section
							aria-label="Alat hitung anggaran kost"
							className="mt-12 rounded-2xl border border-border/70 bg-secondary/30 p-6 sm:p-8"
						>
							<div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
								<div className="max-w-2xl space-y-2">
									<p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
										<Calculator className="h-4 w-4" aria-hidden="true" />
										Alat Bantu Interaktif Gratis
									</p>
									<h2 className="text-xl font-semibold text-foreground">
										Kalkulator Anggaran Kost & Biaya Hidup Mahasiswa Jogja
									</h2>
									<p className="text-sm leading-6 text-muted-foreground">
										Hitung simulasi kebutuhan bulanan dan per semester (sewa
										kamar, makan, listrik, kuota, laundry, serta dana cadangan)
										langsung di browser tanpa menyimpan data pribadi Anda.
									</p>
								</div>
								<Link
									href="/tools/kalkulator-anggaran-kost"
									className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
								>
									Buka Kalkulator
									<ArrowRight className="h-4 w-4" aria-hidden="true" />
								</Link>
							</div>
						</section>

						<ConversionBanner />
					</div>
				</Container>
			</main>
			<Footer />
		</>
	);
}
