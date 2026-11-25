import {
	ArrowRight,
	Car,
	GraduationCap,
	MapPin,
	MessageCircle,
	Navigation,
	ShoppingBag,
} from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { MotionWrapper } from "@/components/common/MotionWrapper";
import { SectionHeading } from "@/components/common/SectionHeading";
import { LocationMapEmbed } from "@/components/property/LocationMapEmbed";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig, whatsappUrl } from "@/config/site";
import { cn } from "@/lib/utils";

const nearbyPlaces = [
	{ icon: GraduationCap, label: "Akses mudah ke area UGM & UNY" },
	{ icon: ShoppingBag, label: "Dekat minimarket & warung Terban" },
	{ icon: Car, label: "Tersedia area parkir motor" },
	{ icon: Navigation, label: "Lingkungan strategis Gondokusuman" },
];

export function LocationSection() {
	return (
		<section
			id="lokasi"
			className="py-20 lg:py-28"
			aria-label="Lokasi ZNL Kost Putri"
		>
			<Container>
				<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
					{/* Text Side */}
					<div className="flex flex-col gap-8">
						<MotionWrapper>
							<SectionHeading
								eyebrow="Lokasi"
								title="Lokasi Strategis di Terban, Gondokusuman"
								description="ZNL Kost Putri berlokasi di kawasan Terban, Kecamatan Gondokusuman, Kota Yogyakarta—lingkungan permukiman yang tenang namun mudah dijangkau dari koridor kampus dan fasilitas umum."
								align="left"
							/>
						</MotionWrapper>

						<MotionWrapper delay={0.1}>
							<div className="flex flex-col gap-3 rounded-xl border border-border/60 bg-secondary/40 p-4">
								<div className="flex items-start gap-3">
									<MapPin
										className="mt-0.5 h-5 w-5 shrink-0 text-primary"
										aria-hidden="true"
									/>
									<div>
										<p className="text-sm font-semibold text-foreground">
											{siteConfig.name} — Alamat Lengkap
										</p>
										<p className="mt-0.5 text-sm text-muted-foreground">
											{siteConfig.address}
										</p>
									</div>
								</div>
								<div className="flex items-center gap-3 border-t border-border/50 pt-3">
									<MessageCircle
										className="h-4 w-4 shrink-0 text-primary"
										aria-hidden="true"
									/>
									<p className="text-sm text-muted-foreground">
										WhatsApp Admin:{" "}
										<a
											href={whatsappUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="font-medium text-foreground underline-offset-4 hover:text-primary hover:underline"
										>
											{siteConfig.phoneDisplay}
										</a>
									</p>
								</div>
							</div>
						</MotionWrapper>

						<MotionWrapper delay={0.15}>
							<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
								{nearbyPlaces.map((place) => {
									const Icon = place.icon;
									return (
										<div
											key={place.label}
											className="flex items-center gap-2.5 text-sm text-foreground/80"
										>
											<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
												<Icon className="h-4 w-4" aria-hidden="true" />
											</div>
											{place.label}
										</div>
									);
								})}
							</div>
						</MotionWrapper>

						<MotionWrapper delay={0.2}>
							<a
								href={siteConfig.googleMapsUrl}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Buka di Google Maps — lokasi ZNL Kost Putri Terban"
								className={cn(
									buttonVariants({ size: "lg" }),
									"group w-fit gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0",
								)}
							>
								<MapPin className="h-4 w-4" aria-hidden="true" />
								Buka di Google Maps
								<ArrowRight
									className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
									aria-hidden="true"
								/>
							</a>
						</MotionWrapper>
					</div>

					{/* Map Preview Side */}
					<MotionWrapper
						delay={0.1}
						className="flex h-full w-full flex-col gap-4"
					>
						<LocationMapEmbed />
						<div className="flex flex-wrap items-center gap-2 text-xs">
							<span className="font-medium text-muted-foreground">
								Panduan lokasi terkait:
							</span>
							<Link
								href="/lokasi/terban-gondokusuman"
								className="rounded-full border border-border/70 bg-background px-3 py-1.5 font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
							>
								Area Terban & Gondokusuman
							</Link>
							<Link
								href="/akses-kampus/ugm"
								className="rounded-full border border-border/70 bg-background px-3 py-1.5 font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
							>
								Akses ke UGM
							</Link>
							<Link
								href="/akses-kampus/uny"
								className="rounded-full border border-border/70 bg-background px-3 py-1.5 font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
							>
								Akses ke UNY
							</Link>
						</div>
					</MotionWrapper>
				</div>
			</Container>
		</section>
	);
}
