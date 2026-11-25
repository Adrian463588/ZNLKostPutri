import { Leaf, MapPin, ShieldCheck, Star } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { MotionWrapper } from "@/components/common/MotionWrapper";
import { SectionHeading } from "@/components/common/SectionHeading";

const highlights = [
	{
		icon: ShieldCheck,
		title: "Khusus Putri",
		description:
			"Lingkungan nyaman yang diperuntukkan khusus untuk penghuni perempuan.",
	},
	{
		icon: Leaf,
		title: "Suasana Tenang",
		description:
			"Lingkungan permukiman yang kondusif untuk belajar, bekerja, dan beristirahat.",
	},
	{
		icon: MapPin,
		title: "Area Terban, Gondokusuman",
		description:
			"Lokasi strategis di Kota Yogyakarta, mudah diakses menuju area kampus dan fasilitas umum.",
	},
	{
		icon: Star,
		title: "Bersih & Terawat",
		description:
			"Kamar dan fasilitas bersama selalu dijaga kebersihan dan kerapihannya.",
	},
];

export function AboutSection() {
	return (
		<section
			id="tentang"
			className="py-20 lg:py-28 overflow-x-clip"
			aria-label="Tentang ZNL Kost Putri"
		>
			<Container>
				<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
					{/* Image side */}
					<MotionWrapper className="relative order-last lg:order-first">
						<div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-xl ring-1 ring-border/40">
							<Image
								src="/images/ibu-kost-znl-putri-terban.webp"
								alt="Ibu pemilik ZNL Kost Putri di Terban, Gondokusuman, Yogyakarta"
								fill
								loading="lazy"
								className="object-cover object-[50%_25%]"
								sizes="(max-width: 1024px) 80vw, 40vw"
							/>
						</div>
						{/* Decorative element */}
						<div
							className="absolute -bottom-6 -right-6 -z-10 h-48 w-48 rounded-full bg-primary/10"
							aria-hidden="true"
						/>
						<div
							className="absolute -top-6 -left-6 -z-10 h-32 w-32 rounded-full bg-accent/10"
							aria-hidden="true"
						/>
					</MotionWrapper>

					{/* Text side */}
					<div className="flex flex-col gap-8">
						<MotionWrapper>
							<SectionHeading
								eyebrow="Tentang Kami"
								title="Hunian Nyaman di Terban, Gondokusuman"
								description="ZNL Kost Putri hadir sebagai tempat tinggal yang tenang dan terawat untuk mahasiswi serta pekerja wanita di kawasan Terban, Gondokusuman, Kota Yogyakarta. Dikelola langsung secara kekeluargaan sehingga calon penghuni dapat berkonsultasi dan survei lokasi dengan nyaman."
								align="left"
							/>
						</MotionWrapper>

						<MotionWrapper delay={0.1}>
							<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
								{highlights.map((item) => {
									const Icon = item.icon;
									return (
										<div
											key={item.title}
											className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-primary/30"
										>
											<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
												<Icon className="h-4 w-4" aria-hidden="true" />
											</div>
											<div>
												<h3 className="text-sm font-semibold text-foreground">
													{item.title}
												</h3>
												<p className="mt-0.5 text-xs leading-5 text-muted-foreground">
													{item.description}
												</p>
											</div>
										</div>
									);
								})}
							</div>
						</MotionWrapper>
					</div>
				</div>
			</Container>
		</section>
	);
}
