import type { Room } from "@/types";

export const rooms: readonly Room[] = [
	{
		id: "kamar-standar",
		title: "Kamar Kost Putri",
		description:
			"Kamar bersih dan nyaman dengan perabot lengkap di Terban, Gondokusuman. Cocok untuk mahasiswi dan pekerja wanita yang mencari hunian tenang di Kota Yogyakarta.",
		image: "/images/kamar-kost-putri-gondokusuman.webp",
		imageAlt:
			"Interior kamar ZNL Kost Putri di Terban, Gondokusuman dengan kasur, bantal, dan meja kecil",
		features: [
			"Kasur dan bantal nyaman",
			"Lemari pakaian",
			"Meja kecil",
			"Kamar mandi luar bersih",
			"Ventilasi udara baik",
			"Lingkungan tenang",
		],
	},
];
