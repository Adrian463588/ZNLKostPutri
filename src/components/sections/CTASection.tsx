import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import { Container } from "@/components/common/Container";
import { MotionWrapper } from "@/components/common/MotionWrapper";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig, whatsappUrl } from "@/config/site";
import { cn } from "@/lib/utils";

export function CTASection() {
	return (
		<section
			id="kontak"
			className="py-20 lg:py-28"
			aria-label="Hubungi ZNL Kost Putri"
		>
			<Container>
				<MotionWrapper>
					<div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-14 text-center shadow-xl sm:px-14 lg:py-20">
						{/* Decorative circles */}
						<div
							className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/5"
							aria-hidden="true"
						/>
						<div
							className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-white/5"
							aria-hidden="true"
						/>

						<div className="relative z-10 flex flex-col items-center gap-6">
							<p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/60">
								Tertarik Tinggal di Sini?
							</p>
							<h2 className="max-w-2xl text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
								Tertarik Tinggal di {siteConfig.name}?
							</h2>
							<p className="max-w-md text-base leading-7 text-primary-foreground/80">
								Silakan hubungi Ibu jika ada pertanyaan mengenai kost, atau
								sekadar ingin janjian untuk survei lokasi.
							</p>

							<div className="flex flex-col items-center gap-4 sm:flex-row">
								<a
									href={whatsappUrl}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Chat WhatsApp Ibu Kost ZNL"
									className={cn(
										buttonVariants({ size: "lg" }),
										"group gap-2 bg-white text-primary hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 font-semibold",
									)}
								>
									<MessageCircle className="h-4 w-4" />
									Chat Ibu di WhatsApp
									<ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
								</a>

								<a
									href={siteConfig.googleMapsUrl}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Lihat lokasi ZNL Kost Putri di Google Maps"
									className={cn(
										buttonVariants({ variant: "outline", size: "lg" }),
										"group gap-2 border-white/40 bg-transparent text-primary-foreground hover:bg-white/10 hover:border-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0",
									)}
								>
									<MapPin className="h-4 w-4" />
									Lihat Lokasi Kost
								</a>
							</div>
						</div>
					</div>
				</MotionWrapper>
			</Container>
		</section>
	);
}
