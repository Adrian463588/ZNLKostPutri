import { MapPin, MessageCircle, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { siteConfig, whatsappUrl } from "@/config/site";

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-foreground text-background" role="contentinfo">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Main Footer */}
				<div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-3">
					{/* Brand */}
					<div className="flex flex-col gap-4">
						<div className="flex items-center gap-2">
							<Image
								src="/images/IconWebsite.png"
								alt={`Logo ${siteConfig.name}`}
								width={32}
								height={32}
								className="rounded-full shadow-sm"
							/>
							<span className="text-base font-semibold">{siteConfig.name}</span>
						</div>
						<p className="text-sm leading-6 text-background/70 max-w-xs">
							Kost putri nyaman dan strategis di Yogyakarta untuk mahasiswi dan
							pekerja wanita.
						</p>
					</div>

					{/* Navigation */}
					<div>
						<h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background/50">
							Navigasi
						</h3>
						<ul className="flex flex-col gap-2">
							{[
								{ href: "#beranda", label: "Beranda" },
								{ href: "#tentang", label: "Tentang" },
								{ href: "#fasilitas", label: "Fasilitas" },
								{ href: "#galeri", label: "Galeri" },
								{ href: "#lokasi", label: "Lokasi" },
								{ href: "#faq", label: "FAQ" },
							].map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="text-sm text-background/70 transition-colors hover:text-background"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background/50">
							Hubungi Kami
						</h3>
						<ul className="flex flex-col gap-3">
							<li>
								<a
									href={whatsappUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-background"
									aria-label="Hubungi via WhatsApp"
								>
									<MessageCircle className="h-4 w-4 shrink-0" />
									WhatsApp Ibu Kost
								</a>
							</li>
							<li>
								<a
									href={siteConfig.googleMapsUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-background"
									aria-label="Buka lokasi di Google Maps"
								>
									<MapPin className="h-4 w-4 shrink-0" />
									{siteConfig.address}
								</a>
							</li>
							{siteConfig.instagramUrl ? (
								<li>
									<a
										href={siteConfig.instagramUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-background"
										aria-label="Instagram ZNL Kost Putri"
									>
										<Share2 className="h-4 w-4 shrink-0" />
										Instagram
									</a>
								</li>
							) : null}
						</ul>
					</div>
				</div>

				<Separator className="bg-background/10" />

				{/* Copyright */}
				<div className="flex flex-col items-center justify-between gap-2 py-6 text-center sm:flex-row">
					<p className="text-xs text-background/50">
						© {currentYear} {siteConfig.name}. Semua hak dilindungi.
					</p>
					<div className="flex flex-col items-center gap-1 sm:items-end">
						<p className="text-xs text-background/40">
							{siteConfig.location}, Daerah Istimewa Yogyakarta
						</p>
						<p className="text-xs text-background/40 text-muted-foreground/50">
							Dibuat oleh {siteConfig.author}
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
