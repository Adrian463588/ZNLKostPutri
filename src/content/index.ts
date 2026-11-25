import { campusGuides } from "@/content/campus-guides";
import { editorialGuides } from "@/content/guides";
import { locationGuides } from "@/content/locations";
import type { SeoContent } from "@/types/seo";

export const toolPages: readonly SeoContent[] = [
	{
		id: "tool-kalkulator-anggaran-kost",
		slug: "/tools/kalkulator-anggaran-kost",
		title: "Kalkulator Anggaran Kost & Biaya Hidup Mahasiswa Jogja",
		metaTitle: "Kalkulator Anggaran Kost Mahasiswa Jogja | ZNL Kost Putri",
		description:
			"Hitung estimasi kebutuhan biaya kost bulanan dan per semester di Yogyakarta secara privat di browser: sewa kamar, makan, listrik, internet, laundry, dan cadangan.",
		contentType: "tool",
		primaryKeyword: "kalkulator anggaran kost mahasiswa jogja",
		secondaryKeywords: [
			"hitung biaya hidup mahasiswa yogyakarta",
			"simulasi pengeluaran kost bulanan",
		],
		searchIntent: "informational",
		topicCluster: "financial-planning",
		relatedEntityIds: ["https://znlkostputri.edgeone.dev/#website"],
		relatedSlugs: [
			"/panduan/biaya-kost-mahasiswa-jogja",
			"/panduan/mencari-kost-putri-jogja",
			"/lokasi/terban-gondokusuman",
		],
		sources: ["src/components/tools/BudgetCalculator.tsx"],
		status: "published",
		reviewedAt: "2026-11-26",
		updatedAt: "2026-11-26",
		indexable: true,
		eyebrow: "Alat Bantu Perencanaan",
		intro:
			"Gunakan kalkulator sederhana ini untuk memperkirakan total pengeluaran bulanan dan per semester (6 bulan) saat tinggal di kost Yogyakarta. Seluruh perhitungan diproses secara lokal di perangkat Anda tanpa mengirim data ke server mana pun.",
		sections: [
			{
				heading: "Cara Menggunakan & Batasan Estimasi",
				paragraphs: [
					"Masukkan perkiraan pengeluaran sesuai gaya hidup masing-masing. Angka bawaan pada kolom hanya merupakan contoh simulasi kosong/netral dan bukan tarif resmi kamar ZNL Kost Putri.",
					"Total per semester dihitung dengan mengalikan total bulanan sebanyak 6 bulan. Jika Anda mengisi kolom anggaran bulanan yang tersedia, kalkulator juga menampilkan perkiraan selisih surplus atau kekurangan dana tiap bulan.",
				],
			},
		],
		faqs: [
			{
				question:
					"Apakah angka di kalkulator ini menampilkan tarif kamar ZNL Kost Putri?",
				answer:
					"Tidak. Kalkulator ini menggunakan input Anda sendiri untuk simulasi anggaran pribadi. Untuk menanyakan tarif kamar ZNL Kost Putri terkini, silakan hubungi Ibu Kost melalui tombol WhatsApp.",
			},
			{
				question: "Apakah data anggaran yang saya masukkan disimpan?",
				answer:
					"Tidak. Perhitungan berjalan 100% di browser Anda dan tidak dikirim maupun disimpan ke pihak mana pun.",
			},
		],
	},
];

export const allSeoContents: readonly SeoContent[] = [
	...locationGuides,
	...campusGuides,
	...editorialGuides,
	...toolPages,
];

export { campusGuides, editorialGuides, locationGuides };
