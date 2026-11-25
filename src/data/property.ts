import { siteConfig } from "@/config/site";
import { facilities } from "@/data/facilities";
import { galleryImages } from "@/data/gallery";
import { rooms } from "@/data/rooms";
import type { VerificationStatus } from "@/types/seo";

export type VerifiedField<T> = {
	value: T;
	status: VerificationStatus;
	sources: readonly string[];
	lastVerifiedDate: string;
};

export const propertyData = {
	id: `${siteConfig.url}/#accommodation`,
	websiteId: `${siteConfig.url}/#website`,
	identity: {
		name: siteConfig.name,
		shortName: siteConfig.shortName,
		businessType: "Hunian kost khusus putri",
		audience: ["Mahasiswi", "Pekerja perempuan", "Peserta magang perempuan"],
		status: "verified" as VerificationStatus,
		sources: ["PRD.md", "src/config/site.ts"],
		lastVerifiedDate: "2026-11-26",
	},
	address: {
		streetAddress: siteConfig.streetAddress,
		subdistrict: "Terban",
		district: "Gondokusuman",
		city: siteConfig.city,
		region: siteConfig.region,
		postalCode: siteConfig.postalCode,
		countryCode: siteConfig.countryCode,
		fullAddress: siteConfig.address,
		status: "verified" as VerificationStatus,
		sources: ["src/config/site.ts", "public/images/znl-kost-putri-terban.webp"],
		lastVerifiedDate: "2026-11-26",
	},
	coordinates: {
		latitude: siteConfig.geo.latitude,
		longitude: siteConfig.geo.longitude,
		googleMapsUrl: siteConfig.googleMapsUrl,
		embedMapsUrl: siteConfig.embedMapsUrl,
		status: "verified" as VerificationStatus,
		sources: ["src/config/site.ts"],
		lastVerifiedDate: "2026-11-26",
	},
	contact: {
		whatsappNumber: siteConfig.whatsappNumber,
		phoneDisplay: siteConfig.phoneDisplay,
		phoneSchema: siteConfig.phoneSchema,
		managerLabel: "Ibu Kost ZNL",
		status: "verified" as VerificationStatus,
		sources: ["src/config/site.ts"],
		lastVerifiedDate: "2026-11-26",
	},
	roomTypes: {
		items: rooms,
		bathroomType: "Kamar mandi luar",
		status: "verified" as VerificationStatus,
		sources: ["src/data/rooms.ts", "src/data/faqs.ts"],
		lastVerifiedDate: "2026-11-26",
	},
	availability: {
		status: "unknown" as VerificationStatus,
		displayLabel: "Hubungi Ibu Kost untuk cek kamar kosong",
		ctaLabel: "Tanya Ketersediaan Kamar",
		note: "Ketersediaan kamar dapat berubah sewaktu-waktu dan tidak diperbarui otomatis secara real-time.",
		lastVerifiedDate: "2026-11-26",
	},
	pricing: {
		status: "unknown" as VerificationStatus,
		displayLabel: "Tarif menyesuaikan tipe kamar — tanya via WhatsApp",
		ctaLabel: "Tanya Harga Sewa",
		note: "Detail biaya sewa serta ketentuan listrik dan air dikonfirmasi langsung oleh Ibu Kost.",
		lastVerifiedDate: "2026-11-26",
	},
	facilities: {
		verifiedList: facilities,
		unverifiedAttributesNotClaimed: [
			"Wi-Fi",
			"AC",
			"Kamar mandi dalam",
			"Bebas jam malam tanpa batas",
		],
		status: "verified" as VerificationStatus,
		sources: ["src/data/facilities.ts", "src/data/faqs.ts"],
		lastVerifiedDate: "2026-11-26",
	},
	houseRules: {
		items: [
			"Khusus untuk penghuni putri (mahasiswi dan pekerja wanita).",
			"Menjaga ketenangan lingkungan terutama pada malam hari demi kenyamanan penghuni lain.",
			"Disarankan menjadwalkan survei lokasi terlebih dahulu melalui WhatsApp.",
		],
		status: "verified" as VerificationStatus,
		sources: ["src/data/faqs.ts"],
		lastVerifiedDate: "2026-11-26",
	},
	gallery: {
		items: galleryImages,
		status: "verified" as VerificationStatus,
		sources: ["src/data/gallery.ts", "public/images/"],
		lastVerifiedDate: "2026-11-26",
	},
	videos: {
		items: [
			{
				id: "detail-kamar",
				src: "/videos/DetailKamar.mp4",
				poster: "/images/video-poster-kamar.webp",
				title: "Video Preview Kondisi Kamar ZNL Kost Putri",
				description:
					"Gambaran nyata kondisi kamar, kasur, lemari pakaian, dan lingkungan ZNL Kost Putri di Terban, Gondokusuman.",
			},
		],
		status: "verified" as VerificationStatus,
		sources: ["public/videos/DetailKamar.mp4"],
		lastVerifiedDate: "2026-11-26",
	},
	transportInformation: {
		summary:
			"Lokasi berada di kawasan Terban, Kecamatan Gondokusuman dengan akses jalan lingkungan paving yang dapat dilalui sepeda motor dan area parkir motor berpagar.",
		status: "verified" as VerificationStatus,
		sources: [
			"src/data/facilities.ts",
			"public/images/znl-kost-putri-terban.webp",
		],
		lastVerifiedDate: "2026-11-26",
	},
} as const;
