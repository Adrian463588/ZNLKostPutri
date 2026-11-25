import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ConversionBanner } from "@/components/seo/ConversionBanner";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";
import { buildStaticMetadata } from "@/lib/seo/metadata";
import {
	type BreadcrumbItem,
	buildHubStructuredData,
} from "@/lib/seo/structured-data";

const pageTitle = "Kebijakan Privasi | ZNL Kost Putri Yogyakarta";
const pageDescription =
	"Penjelasan mengenai penanganan informasi pengunjung pada website informasi ZNL Kost Putri dan penggunaan alat bantu lokal di browser.";

export const metadata: Metadata = buildStaticMetadata({
	title: pageTitle,
	description: pageDescription,
	path: "/kebijakan-privasi",
});

export default function PrivacyPolicyPage() {
	const breadcrumbs: BreadcrumbItem[] = [
		{ name: "Beranda", path: "/" },
		{ name: "Kebijakan Privasi", path: "/kebijakan-privasi" },
	];

	const jsonLd = buildHubStructuredData(
		"/kebijakan-privasi",
		pageTitle,
		pageDescription,
		breadcrumbs,
	);

	return (
		<>
			<JsonLdScript data={jsonLd} />
			<Header />
			<main id="main-content" className="pt-24 pb-16 lg:pt-32 lg:pb-24">
				<Container>
					<div className="mx-auto max-w-3xl">
						<Breadcrumbs items={breadcrumbs} />

						<header className="space-y-4">
							<Badge
								variant="secondary"
								className="bg-primary/10 text-primary border-primary/20 text-xs font-semibold uppercase tracking-wider"
							>
								Transparansi Website
							</Badge>
							<h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
								Kebijakan Privasi Website ZNL Kost Putri
							</h1>
							<p className="text-base leading-7 text-muted-foreground">
								Situs web {siteConfig.name} adalah website profil informasi yang
								tidak menyediakan akun pengguna, formulir pendaftaran database,
								maupun sistem pembayaran daring.
							</p>
						</header>

						<div className="mt-10 space-y-8 text-base leading-7 text-muted-foreground">
							<section className="space-y-3">
								<h2 className="text-xl font-semibold text-foreground">
									1. Pengumpulan Data di Situs Web
								</h2>
								<p>
									Website ini tidak mengumpulkan, menyimpan, atau menjual data
									pribadi pengunjung ke server basis data. Alat bantu seperti
									Kalkulator Anggaran Kost berjalan sepenuhnya di peramban
									(browser) perangkat Anda.
								</p>
							</section>

							<section className="space-y-3">
								<h2 className="text-xl font-semibold text-foreground">
									2. Komunikasi WhatsApp & Peta Pihak Ketiga
								</h2>
								<p>
									Saat Anda mengklik tombol WhatsApp untuk menghubungi Ibu Kost
									di nomor {siteConfig.phoneDisplay}, Anda akan diarahkan ke
									layanan eksternal WhatsApp sesuai kebijakan privasi penyedia
									layanan tersebut. Demikian pula saat Anda menekan tombol
									&ldquo;Muat Peta Interaktif&rdquo; atau &ldquo;Buka di Google
									Maps&rdquo;, layanan peta Google Maps dimuat berdasarkan
									tindakan Anda.
								</p>
							</section>

							<section className="space-y-3">
								<h2 className="text-xl font-semibold text-foreground">
									3. Kontak Resmi Pengelola
								</h2>
								<p>
									Pertanyaan mengenai informasi di situs web ini dapat
									disampaikan langsung melalui WhatsApp resmi pengelola:{" "}
									{siteConfig.phoneDisplay}, alamat {siteConfig.address}.
								</p>
							</section>
						</div>

						<ConversionBanner />
					</div>
				</Container>
			</main>
			<Footer />
		</>
	);
}
