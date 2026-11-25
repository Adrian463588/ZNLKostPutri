import {
	ArrowRight,
	BookOpen,
	Calculator,
	GraduationCap,
	MapPin,
} from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { MotionWrapper } from "@/components/common/MotionWrapper";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";

const areaAndCampusLinks = [
	{
		href: "/lokasi/terban-gondokusuman",
		eyebrow: "Kawasan Terban",
		title: "Profil Lingkungan Terban & Gondokusuman",
		description:
			"Akses jalan Cik Di Tiro, Jl. Kaliurang selatan, Pasar Terban, RS Panti Rapih, dan kondisi lingkungan permukiman.",
		icon: MapPin,
	},
	{
		href: "/akses-kampus/ugm",
		eyebrow: "Akses Kampus UGM",
		title: "Panduan Kost Putri Dekat UGM",
		description:
			"Gambaran koridor menuju klaster Kesehatan, Teknik, dan Sosiohumaniora UGM Bulaksumur serta catatan rute.",
		icon: GraduationCap,
	},
	{
		href: "/akses-kampus/uny",
		eyebrow: "Akses Kampus UNY",
		title: "Panduan Kost Putri Dekat UNY Karangmalang",
		description:
			"Akses dari Terban ke kawasan UNY Karangmalang sekaligus tetap dekat dengan fasilitas pusat Kota Yogyakarta.",
		icon: GraduationCap,
	},
] as const;

const guideAndToolLinks = [
	{
		href: "/panduan/checklist-survei-kost",
		label: "Checklist Survei Kost",
		summary: "Daftar pemeriksaan kondisi fisik kamar & keamanan sebelum DP.",
	},
	{
		href: "/panduan/alternatif-mencari-kost-selain-mamikos",
		label: "Cari Kost Langsung vs Platform",
		summary:
			"Perbandingan netral kelebihan menghubungi pengelola secara langsung.",
	},
	{
		href: "/tools/kalkulator-anggaran-kost",
		label: "Kalkulator Anggaran Kost",
		summary:
			"Simulasi biaya hidup bulanan & per semester di Yogyakarta secara privat.",
	},
	{
		href: "/panduan",
		label: "Semua Panduan Kost Jogja",
		summary:
			"Lihat artikel biaya hidup, cara memilih kost, dan tips hindari penipuan.",
	},
] as const;

export function ExploreHubSection() {
	return (
		<section id="panduan-informasi" className="bg-secondary/20 py-20 lg:py-28">
			<Container>
				<MotionWrapper>
					<SectionHeading
						eyebrow="Panduan & Akses"
						title="Pelajari Kawasan, Akses Kampus, dan Persiapan Survei"
						description="Referensi singkat untuk membantu mahasiswi, pekerja perempuan, dan orang tua mengecek kesesuaian lokasi sebelum menghubungi Ibu Kost."
					/>
				</MotionWrapper>

				<div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
					{areaAndCampusLinks.map((item, idx) => {
						const Icon = item.icon;
						return (
							<MotionWrapper key={item.href} delay={idx * 0.06}>
								<Link
									href={item.href}
									className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
								>
									<Card className="h-full border-border/70 bg-card transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
										<CardContent className="flex h-full flex-col justify-between gap-4 p-6">
											<div>
												<div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-primary">
													<Icon className="h-4 w-4" aria-hidden="true" />
													<span>{item.eyebrow}</span>
												</div>
												<h3 className="mt-3 text-lg font-semibold text-foreground group-hover:text-primary">
													{item.title}
												</h3>
												<p className="mt-2 text-sm leading-6 text-muted-foreground">
													{item.description}
												</p>
											</div>
											<span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
												Buka halaman panduan
												<ArrowRight
													className="h-4 w-4 transition-transform group-hover:translate-x-1"
													aria-hidden="true"
												/>
											</span>
										</CardContent>
									</Card>
								</Link>
							</MotionWrapper>
						);
					})}
				</div>

				<MotionWrapper delay={0.18}>
					<div className="mt-8 rounded-2xl border border-border/70 bg-card p-6 sm:p-8">
						<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
							<div className="flex items-center gap-2 text-sm font-semibold text-foreground">
								<BookOpen className="h-4 w-4 text-primary" aria-hidden="true" />
								<span>Alat Bantu & Artikel Panduan Calon Penghuni</span>
							</div>
							<Link
								href="/tools/kalkulator-anggaran-kost"
								className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
							>
								<Calculator className="h-3.5 w-3.5" aria-hidden="true" />
								Buka Kalkulator Anggaran Kost
							</Link>
						</div>

						<div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
							{guideAndToolLinks.map((guide) => (
								<Link
									key={guide.href}
									href={guide.href}
									className="group rounded-xl border border-border/60 bg-background/70 p-4 transition-colors hover:border-primary/40 hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
								>
									<p className="text-sm font-semibold text-foreground group-hover:text-primary">
										{guide.label}
									</p>
									<p className="mt-1.5 text-xs leading-5 text-muted-foreground">
										{guide.summary}
									</p>
								</Link>
							))}
						</div>
					</div>
				</MotionWrapper>
			</Container>
		</section>
	);
}
