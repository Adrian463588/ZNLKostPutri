import type { Room } from "@/types";

export const rooms: readonly Room[] = [
	{
		id: "kamar-standar",
		title: "Kamar Kost Putri",
		description:
			"Kamar bersih dan nyaman dengan perabot lengkap, cocok untuk mahasiswi dan pekerja wanita yang mencari hunian tenang di Yogyakarta.",
		image: "/images/KasurDanMejaKecil.png",
		imageAlt: "Kamar kost putri ZNL dengan kasur dan meja kecil",
		features: [
			"Kasur dan bantal nyaman",
			"Lemari pakaian",
			"Meja kecil",
			"Kamar mandi bersih",
			"Ventilasi udara baik",
			"Lingkungan tenang",
		],
	},
];
