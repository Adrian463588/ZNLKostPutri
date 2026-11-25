"use client";

import { ExternalLink, MapPin } from "lucide-react";
import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function LocationMapEmbed() {
	const [loaded, setLoaded] = useState(false);

	if (loaded) {
		return (
			<div className="relative h-full w-full min-h-[320px] lg:min-h-[400px] overflow-hidden rounded-2xl shadow-xl ring-1 ring-border/40 bg-secondary/30">
				<iframe
					title="Peta Lokasi ZNL Kost Putri di Terban, Gondokusuman, Yogyakarta"
					src={siteConfig.embedMapsUrl}
					width="100%"
					height="100%"
					className="absolute inset-0 border-0"
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				/>
			</div>
		);
	}

	return (
		<div className="relative flex h-full w-full min-h-[320px] lg:min-h-[400px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-br from-secondary/60 via-card to-secondary/40 p-6 text-center shadow-lg">
			<div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
				<MapPin className="h-6 w-6" aria-hidden="true" />
			</div>
			<h3 className="mt-4 text-lg font-semibold text-foreground">
				Peta Lokasi {siteConfig.name}
			</h3>
			<p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
				{siteConfig.address}
			</p>
			<p className="mt-1 text-xs text-muted-foreground">
				Koordinat: {siteConfig.geo.latitude}, {siteConfig.geo.longitude}
			</p>
			<div className="mt-6 flex flex-col gap-3 sm:flex-row">
				<Button
					type="button"
					onClick={() => setLoaded(true)}
					className="min-h-[44px] px-5"
				>
					Muat Peta Interaktif
				</Button>
				<a
					href={siteConfig.googleMapsUrl}
					target="_blank"
					rel="noopener noreferrer"
					className={cn(
						buttonVariants({ variant: "outline" }),
						"min-h-[44px] gap-2 px-5",
					)}
				>
					Buka Aplikasi Maps
					<ExternalLink className="h-4 w-4" aria-hidden="true" />
				</a>
			</div>
		</div>
	);
}
