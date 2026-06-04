import {
	ArrowRight,
	Car,
	GraduationCap,
	MapPin,
	Navigation,
	ShoppingBag,
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { MotionWrapper } from "@/components/common/MotionWrapper";
import { SectionHeading } from "@/components/common/SectionHeading";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const nearbyPlaces = [
	{ icon: GraduationCap, label: "Dekat kampus & sekolah" },
	{ icon: ShoppingBag, label: "Dekat minimarket & warung" },
	{ icon: Car, label: "Tersedia area parkir" },
	{ icon: Navigation, label: "Mudah dijangkau kendaraan" },
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
								title="Temukan Kami di Yogyakarta"
								description="ZNL Kost Putri berlokasi di area Yogyakarta yang mudah diakses dan dekat dengan berbagai fasilitas penting."
								align="left"
							/>
						</MotionWrapper>

						<MotionWrapper delay={0.1}>
							<div className="flex items-start gap-3 rounded-xl border border-border/60 bg-secondary/40 p-4">
								<MapPin
									className="mt-0.5 h-5 w-5 shrink-0 text-primary"
									aria-hidden="true"
								/>
								<div>
									<p className="text-sm font-semibold text-foreground">
										Alamat
									</p>
									<p className="mt-0.5 text-sm text-muted-foreground">
										{siteConfig.address}
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
								aria-label="Buka ZNL Kost Putri di Google Maps"
								className={cn(
									buttonVariants({ size: "lg" }),
									"group w-fit gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0",
								)}
							>
								<MapPin className="h-4 w-4" />
								Buka di Google Maps
								<ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
							</a>
						</MotionWrapper>
					</div>

					{/* Map Preview Side */}
					<MotionWrapper
						delay={0.1}
						className="relative h-full w-full min-h-[300px] lg:min-h-[400px]"
					>
						<div className="group block relative h-full w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-border/40 focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2">
							<iframe
								title="Peta Lokasi ZNL Kost Putri"
								src={siteConfig.embedMapsUrl}
								width="100%"
								height="100%"
								className="absolute inset-0 border-0"
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							/>
							{/* Optional overlay for styling (if needed) */}
							<div
								className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10"
								aria-hidden="true"
							/>
						</div>
					</MotionWrapper>
				</div>
			</Container>
		</section>
	);
}
