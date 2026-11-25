import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig, whatsappUrl } from "@/config/site";
import { cn } from "@/lib/utils";

export function HeroSection() {
	return (
		<section
			id="beranda"
			className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[oklch(0.975_0.008_80)] via-[oklch(0.97_0.012_70)] to-[oklch(0.96_0.015_65)]"
			aria-label="Bagian hero ZNL Kost Putri"
		>
			{/* Decorative background circles */}
			<div
				className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
				aria-hidden="true"
			/>
			<div
				className="pointer-events-none absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-accent/8 blur-3xl"
				aria-hidden="true"
			/>

			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32">
				<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
					{/* Text content */}
					<div className="flex flex-col items-start gap-6">
						<Badge
							variant="secondary"
							className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border-primary/20"
						>
							Kost Putri {siteConfig.area}
						</Badge>

						<h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
							Kost Putri di <span className="text-primary">Terban</span>,{" "}
							<span className="text-accent">Gondokusuman</span>,{" "}
							<span className="text-primary">Yogyakarta</span>
						</h1>

						<p className="max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
							{siteConfig.description}
						</p>

						<div className="flex flex-col gap-3 sm:flex-row">
							<a
								href={whatsappUrl}
								target="_blank"
								rel="noopener noreferrer"
								className={cn(
									buttonVariants({ size: "lg" }),
									"group gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
								)}
							>
								<MessageCircle className="h-4 w-4" aria-hidden="true" />
								Hubungi via WhatsApp
								<ArrowRight
									className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
									aria-hidden="true"
								/>
							</a>

							<a
								href={siteConfig.googleMapsUrl}
								target="_blank"
								rel="noopener noreferrer"
								className={cn(
									buttonVariants({ variant: "outline", size: "lg" }),
									"gap-2 border-border hover:bg-secondary hover:text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0",
								)}
							>
								<MapPin className="h-4 w-4" aria-hidden="true" />
								Lihat Lokasi
							</a>
						</div>

						{/* Trust indicators */}
						<div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
							{[
								"✓ Khusus Putri",
								"✓ Lingkungan Tenang",
								"✓ Terban, Gondokusuman",
							].map((item) => (
								<span key={item} className="font-medium text-foreground/70">
									{item}
								</span>
							))}
						</div>
					</div>

					{/* Hero Image — immediate SSR render for fast LCP */}
					<div className="relative">
						<div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-border/40">
							<Image
								src="/images/znl-kost-putri-terban.webp"
								alt="Tampak depan ZNL Kost Putri nomor 308 di Terban, Gondokusuman, Yogyakarta"
								fill
								loading="eager"
								decoding="sync"
								fetchPriority="high"
								className="object-cover"
								sizes="(max-width: 640px) 384px, (max-width: 1024px) 512px, 50vw"
							/>
							{/* Subtle overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
						</div>

						{/* Floating card */}
						<div className="absolute -bottom-4 left-2 sm:-left-4 rounded-xl bg-white p-4 shadow-lg ring-1 ring-border/40">
							<p className="text-xs font-medium text-muted-foreground">
								Terban GK V No.308
							</p>
							<p className="mt-0.5 text-sm font-semibold text-foreground">
								Khusus Putri • Gondokusuman
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
