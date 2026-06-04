"use client";

import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
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
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, ease: "easeOut" }}
						>
							<Badge
								variant="secondary"
								className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border-primary/20"
							>
								Kost Putri Area Yogyakarta
							</Badge>
						</motion.div>

						<motion.h1
							className="text-4xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
							initial={{ opacity: 0, y: 24 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
						>
							Kost Putri <span className="text-primary">Nyaman</span>,{" "}
							<span className="text-accent">Aman</span>, dan Strategis{" "}
							<span className="text-primary">di Yogyakarta</span>
						</motion.h1>

						<motion.p
							className="max-w-lg text-base leading-7 text-muted-foreground sm:text-lg"
							initial={{ opacity: 0, y: 24 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
						>
							{siteConfig.description}
						</motion.p>

						<motion.div
							className="flex flex-col gap-3 sm:flex-row"
							initial={{ opacity: 0, y: 24 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
						>
							<a
								href={whatsappUrl}
								target="_blank"
								rel="noopener noreferrer"
								className={cn(
									buttonVariants({ size: "lg" }),
									"group gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
								)}
							>
								<MessageCircle className="h-4 w-4" />
								Hubungi via WhatsApp
								<ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
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
								<MapPin className="h-4 w-4" />
								Lihat Lokasi
							</a>
						</motion.div>

						{/* Trust indicators */}
						<motion.div
							className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.5 }}
						>
							{[
								"✓ Khusus Putri",
								"✓ Lingkungan Aman",
								"✓ Lokasi Strategis",
							].map((item) => (
								<span key={item} className="font-medium text-foreground/70">
									{item}
								</span>
							))}
						</motion.div>
					</div>

					{/* Hero Image */}
					<motion.div
						className="relative"
						initial={{ opacity: 0, scale: 0.96 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
					>
						<div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-border/40">
							<Image
								src="/images/TampakDepan.png"
								alt="Tampak depan ZNL Kost Putri Yogyakarta"
								fill
								priority
								className="object-cover"
								sizes="(max-width: 1024px) 100vw, 50vw"
							/>
							{/* Subtle overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
						</div>

						{/* Floating card */}
						<motion.div
							className="absolute -bottom-4 -left-4 rounded-xl bg-white p-4 shadow-lg ring-1 ring-border/40"
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.6 }}
						>
							<p className="text-xs font-medium text-muted-foreground">
								Hunian nyaman
							</p>
							<p className="mt-0.5 text-sm font-semibold text-foreground">
								Khusus Putri
							</p>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
