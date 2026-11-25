import type { VerificationStatus } from "@/types/seo";

export type LandmarkCategory =
	| "campus"
	| "road-corridor"
	| "healthcare"
	| "retail-market";

export type Landmark = {
	id: string;
	name: string;
	category: LandmarkCategory;
	area: string;
	factualContext: string;
	distanceStatus: VerificationStatus;
	sources: readonly string[];
	lastVerifiedDate: string;
};

export const landmarks: readonly Landmark[] = [
	{
		id: "ugm",
		name: "Universitas Gadjah Mada (UGM)",
		category: "campus",
		area: "Bulaksumur / Sekitar Terban",
		factualContext:
			"Terban di Kecamatan Gondokusuman berbatasan dengan sisi selatan kawasan kampus UGM melalui koridor Jalan Cik Di Tiro, Jalan Persatuan, dan Jalan Kaliurang bagian selatan. Jarak serta waktu tempuh berbeda tergantung gedung fakultas tujuan; gunakan Google Maps untuk rute aktual.",
		distanceStatus: "pending-verification",
		sources: ["src/config/site.ts", "Google Maps geographic context"],
		lastVerifiedDate: "2026-11-26",
	},
	{
		id: "uny",
		name: "Universitas Negeri Yogyakarta (UNY)",
		category: "campus",
		area: "Karangmalang / Caturtunggal",
		factualContext:
			"Dari Terban, Gondokusuman, akses menuju kawasan kampus UNY Karangmalang terhubung melalui koridor jalan utama Kota Yogyakarta dan area Jl. Colombo. Cek rute serta estimasi waktu tempuh langsung melalui Google Maps sesuai jam berangkat.",
		distanceStatus: "pending-verification",
		sources: ["src/config/site.ts", "Google Maps geographic context"],
		lastVerifiedDate: "2026-11-26",
	},
	{
		id: "jl-cik-di-tiro",
		name: "Koridor Jalan Cik Di Tiro",
		category: "road-corridor",
		area: "Terban, Gondokusuman",
		factualContext:
			"Salah satu jalan utama di Kelurahan Terban yang menghubungkan pusat Kota Yogyakarta dengan kawasan kampus sekitar Bulaksumur.",
		distanceStatus: "verified",
		sources: ["Administrasi wilayah Kelurahan Terban, Gondokusuman"],
		lastVerifiedDate: "2026-11-26",
	},
	{
		id: "jl-kaliurang-simanjuntak",
		name: "Koridor Jalan C. Simanjuntak & Jalan Kaliurang Selatan",
		category: "road-corridor",
		area: "Terban, Gondokusuman",
		factualContext:
			"Koridor komersial dan kuliner di sisi barat-utara Terban yang banyak dilalui mahasiswa serta pekerja di Yogyakarta.",
		distanceStatus: "verified",
		sources: ["Administrasi wilayah Kelurahan Terban, Gondokusuman"],
		lastVerifiedDate: "2026-11-26",
	},
	{
		id: "rs-panti-rapih",
		name: "RS Panti Rapih",
		category: "healthcare",
		area: "Jalan Cik Di Tiro, Terban",
		factualContext:
			"Rumah sakit rujukan yang berlokasi di koridor Jalan Cik Di Tiro, Kelurahan Terban, Gondokusuman.",
		distanceStatus: "verified",
		sources: ["Public geographic records"],
		lastVerifiedDate: "2026-11-26",
	},
	{
		id: "rsup-sardjito",
		name: "RSUP Dr. Sardjito",
		category: "healthcare",
		area: "Sekitar kawasan kesehatan UGM",
		factualContext:
			"Rumah sakit pendidikan dan rujukan nasional yang berlokasi di kawasan kesehatan sebelah utara Terban.",
		distanceStatus: "pending-verification",
		sources: ["Public geographic records"],
		lastVerifiedDate: "2026-11-26",
	},
	{
		id: "galeria-mall",
		name: "Galeria Mall Yogyakarta",
		category: "retail-market",
		area: "Jalan Jenderal Sudirman, Gondokusuman",
		factualContext:
			"Pusat perbelanjaan dan kebutuhan harian yang berada di wilayah Kecamatan Gondokusuman.",
		distanceStatus: "verified",
		sources: ["Public geographic records"],
		lastVerifiedDate: "2026-11-26",
	},
	{
		id: "pasar-terban",
		name: "Pasar Terban & Warung Sekitar",
		category: "retail-market",
		area: "Terban, Gondokusuman",
		factualContext:
			"Pasar tradisional, minimarket, dan warung makan di lingkungan Terban untuk kebutuhan harian penghuni kost.",
		distanceStatus: "verified",
		sources: ["src/data/facilities.ts"],
		lastVerifiedDate: "2026-11-26",
	},
];
