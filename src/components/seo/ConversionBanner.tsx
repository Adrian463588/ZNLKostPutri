import { MapPin, MessageCircle } from "lucide-react";
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
	title = "Tertarik untuk Sewa Kamar?",
	description = "Hubungi Ibu Kost untuk informasi ketersediaan kamar, harga, atau jadwal survei langsung.",
	whatsappMessage = "Halo Ibu, saya membaca informasi ZNL Kost Putri di website dan ingin menanyakan ketersediaan kamar, tarif sewa, serta jadwal survei lokasi.",
	primaryLabel = "Hubungi via WhatsApp",
}: ConversionBannerProps) {
	const href = createWhatsappUrl(siteConfig.whatsappNumber, whatsappMessage);

	return (
		<section
			aria-label="Kontak dan jadwal survei ZNL Kost Putri"
			className="@container/cta mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-5 sm:p-6 lg:p-7"
		>
			<div className="flex flex-col gap-5 @[780px]/cta:flex-row @[780px]/cta:items-center @[780px]/cta:justify-between @[780px]/cta:gap-6">
				<div className="min-w-0 flex-1 max-w-xl space-y-2">
					<h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
						{title}
					</h2>
					<p className="text-sm leading-6 text-muted-foreground sm:text-[15px]">
						{description}
					</p>
					<p className="flex flex-wrap items-center gap-x-2 gap-y-0.5 pt-0.5 text-xs leading-5 text-muted-foreground">
						<span>{siteConfig.streetAddress}</span>
						<span aria-hidden="true">&bull;</span>
						<span className="whitespace-nowrap">
							WhatsApp {siteConfig.phoneDisplay}
						</span>
					</p>
				</div>

				<div className="flex flex-col gap-3 sm:flex-row sm:items-center @[780px]/cta:shrink-0">
					<a
						href={href}
						target="_blank"
						rel="noopener noreferrer"
						className={cn(
							buttonVariants({ size: "lg" }),
							"h-auto min-h-[44px] w-full sm:w-auto whitespace-normal px-5 py-2.5 text-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 active:translate-y-px transition-colors duration-200",
						)}
					>
						<MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
						<span>{primaryLabel}</span>
					</a>
					<a
						href={siteConfig.googleMapsUrl}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Lihat Lokasi di Google Maps"
						className={cn(
							buttonVariants({ variant: "outline", size: "lg" }),
							"h-auto min-h-[44px] w-full sm:w-auto whitespace-normal px-5 py-2.5 text-center gap-2 border-border bg-background text-foreground hover:bg-secondary active:translate-y-px transition-colors duration-200",
						)}
					>
						<MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
						<span>Lihat Lokasi</span>
					</a>
				</div>
			</div>
		</section>
	);
}
