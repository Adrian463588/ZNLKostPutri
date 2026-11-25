import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { createWhatsappUrl, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type ConversionBannerProps = {
	title?: string;
	description?: string;
	whatsappMessage?: string;
	primaryLabel?: string;
};

export function ConversionBanner({
	title = "Ingin Menanyakan Kamar atau Jadwal Survei?",
	description = `Hubungi Ibu Kost langsung via WhatsApp (${siteConfig.phoneDisplay}) untuk informasi kamar yang tersedia, tarif terbaru, atau janji survei di ${siteConfig.streetAddress}.`,
	whatsappMessage = "Halo Ibu, saya membaca informasi ZNL Kost Putri di website dan ingin menanyakan ketersediaan kamar, tarif sewa, serta jadwal survei lokasi.",
	primaryLabel = "Tanya Ketersediaan & Harga via WhatsApp",
}: ConversionBannerProps) {
	const href = createWhatsappUrl(siteConfig.whatsappNumber, whatsappMessage);

	return (
		<section
			aria-label="Kontak dan jadwal survei ZNL Kost Putri"
			className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8"
		>
			<div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
				<div className="max-w-2xl space-y-2">
					<h2 className="text-xl font-semibold text-foreground sm:text-2xl">
						{title}
					</h2>
					<p className="text-sm leading-6 text-muted-foreground">
						{description}
					</p>
				</div>
				<div className="flex flex-col gap-3 sm:flex-row sm:shrink-0">
					<a
						href={href}
						target="_blank"
						rel="noopener noreferrer"
						className={cn(
							buttonVariants({ size: "lg" }),
							"group h-auto min-h-[44px] whitespace-normal px-4 py-2.5 text-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md",
						)}
					>
						<MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
						<span>{primaryLabel}</span>
						<ArrowRight
							className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
							aria-hidden="true"
						/>
					</a>
					<a
						href={siteConfig.googleMapsUrl}
						target="_blank"
						rel="noopener noreferrer"
						className={cn(
							buttonVariants({ variant: "outline", size: "lg" }),
							"h-auto min-h-[44px] whitespace-normal px-4 py-2.5 text-center gap-2 border-border bg-background hover:bg-secondary",
						)}
					>
						<MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
						<span>Lihat Lokasi di Google Maps</span>
					</a>
				</div>
			</div>
		</section>
	);
}
