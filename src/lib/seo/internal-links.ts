import { allSeoContents } from "@/content";

export type RelatedLinkItem = {
	href: string;
	title: string;
	description: string;
	eyebrow: string;
};

const staticRouteMap: Record<string, RelatedLinkItem> = {
	"/": {
		href: "/",
		title: "Beranda ZNL Kost Putri",
		description:
			"Informasi lengkap kamar, fasilitas, galeri foto, video kamar, dan kontak WhatsApp Ibu Kost.",
		eyebrow: "Profil Utama",
	},
	"/panduan": {
		href: "/panduan",
		title: "Pusat Panduan Kost Yogyakarta",
		description:
			"Kumpulan panduan memilih kost, checklist survei, alternatif pencarian, dan anggaran mahasiswa.",
		eyebrow: "Hub Panduan",
	},
	"/kebijakan-privasi": {
		href: "/kebijakan-privasi",
		title: "Kebijakan Privasi",
		description:
			"Penjelasan transparansi privasi penggunaan situs dan kalkulator anggaran ZNL Kost Putri.",
		eyebrow: "Privasi",
	},
};

export function resolveRelatedLinks(
	slugs: readonly string[],
): RelatedLinkItem[] {
	const items: RelatedLinkItem[] = [];
	const seen = new Set<string>();

	for (const slug of slugs) {
		if (seen.has(slug)) continue;
		seen.add(slug);

		if (staticRouteMap[slug]) {
			items.push(staticRouteMap[slug]);
			continue;
		}

		const content = allSeoContents.find(
			(c) => c.slug === slug && c.status === "published" && c.indexable,
		);
		if (content) {
			items.push({
				href: content.slug,
				title: content.title,
				description: content.description,
				eyebrow: content.eyebrow,
			});
		}
	}

	return items;
}
