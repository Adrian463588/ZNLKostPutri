import type { LocationGuideContent } from "@/types/seo";

export const locationGuides: readonly LocationGuideContent[] = [
	{
		id: "lokasi-terban-gondokusuman",
		slug: "/lokasi/terban-gondokusuman",
		title: "Kost Putri Terban & Gondokusuman, Yogyakarta",
		metaTitle: "Kost Putri Terban, Gondokusuman Jogja | ZNL Kost Putri",
		description:
			"Hunian khusus mahasiswi dan pekerja perempuan di Terban GK V No.308, Gondokusuman, Yogyakarta. Lihat fasilitas terverifikasi, akses kawasan, dan jadwal survei langsung.",
		contentType: "location",
		primaryKeyword: "kost putri terban gondokusuman",
		secondaryKeywords: [
			"kos putri terban jogja",
			"kost wanita gondokusuman",
			"kost putri pusat kota yogyakarta",
			"kost putri dekat cik di tiro",
		],
		searchIntent: "local-discovery",
		topicCluster: "hyperlocal-living",
		relatedEntityIds: [
			"https://znlkostputri.edgeone.dev/#accommodation",
			"ugm",
			"uny",
			"jl-cik-di-tiro",
			"rs-panti-rapih",
			"pasar-terban",
		],
		relatedSlugs: [
			"/",
			"/akses-kampus/ugm",
			"/akses-kampus/uny",
			"/panduan/checklist-survei-kost",
		],
		sources: [
			"src/data/property.ts",
			"src/data/landmarks.ts",
			"public/images/znl-kost-putri-terban.webp",
		],
		status: "published",
		reviewedAt: "2026-11-26",
		updatedAt: "2026-11-26",
		indexable: true,
		eyebrow: "Panduan Lokasi Hyperlocal",
		intro:
			"ZNL Kost Putri terletak di Terban GK V No.308, Kelurahan Terban, Kecamatan Gondokusuman, Kota Yogyakarta. Area ini dikenal sebagai permukiman yang relatif tenang namun terhubung langsung dengan koridor utama pendidikan, kesehatan, dan kuliner di tengah kota.",
		neighborhoodHighlights: [
			{
				title: "Koridor Jalan Cik Di Tiro & Jalan Kaliurang Selatan",
				detail:
					"Terban berada di antara dua koridor jalan utama Kota Yogyakarta yang memudahkan mobilitas menuju kawasan kampus maupun pusat kota.",
			},
			{
				title: "Akses Kebutuhan Harian & Kuliner",
				detail:
					"Di sekitar kawasan Terban dan Gondokusuman tersedia warung makan, minimarket, Pasar Terban, apotek, serta area pertokoan di koridor Jenderal Sudirman dan Galeria Mall.",
			},
			{
				title: "Dekat Layanan Kesehatan",
				detail:
					"Lokasi Terban berdekatan dengan koridor layanan kesehatan seperti RS Panti Rapih di Jalan Cik Di Tiro serta koridor menuju RSUP Dr. Sardjito.",
			},
			{
				title: "Lingkungan Permukiman Khusus Putri",
				detail:
					"Lingkungan gang paving berpagar dengan area parkir motor bagi penghuni, cocok untuk aktivitas belajar dan istirahat mahasiswi maupun pekerja perempuan.",
			},
		],
		transportNotes: [
			"Akses jalan lingkungan dapat dilalui sepeda motor dengan area parkir berpagar di dalam kompleks kost.",
			"Transportasi daring maupun layanan umum di sekitar jalan utama Terban mudah diakses tanpa harus masuk ke area pinggiran kota.",
			"Calon penghuni disarankan membuka Google Maps untuk memeriksa rute perjalanan harian menuju kampus atau tempat kerja masing-masing.",
		],
		sections: [
			{
				heading: "Gambaran Lingkungan Terban GK V, Gondokusuman",
				paragraphs: [
					"Berbeda dari kawasan jalan protokol yang padat lalu lintas, lokasi ZNL Kost Putri di Terban GK V No.308 berada di dalam area permukiman warga yang lebih kondusif untuk beristirahat maupun belajar. Bangunan dua lantai berpagar ini dikhususkan bagi penghuni perempuan sehingga privasi dan ketertiban lingkungan lebih terjaga.",
					"Untuk kebutuhan sehari-hari, penghuni dapat menemukan warung makan, tempat fotokopi, minimarket, dan layanan kesehatan di sekitar Kelurahan Terban maupun Kecamatan Gondokusuman tanpa harus menempuh perjalanan jauh keluar kota.",
				],
			},
			{
				heading: "Informasi Kamar, Fasilitas & Cara Survei",
				paragraphs: [
					"Kamar di ZNL Kost Putri dilengkapi kasur, bantal, lemari pakaian dengan cermin, serta meja kecil dengan penggunaan kamar mandi luar yang rutin dijaga kebersihannya. Karena ketersediaan kamar dan rincian tarif dapat berubah sewaktu-waktu, calon penghuni dapat langsung menghubungi Ibu Kost melalui WhatsApp sebelum datang survei.",
				],
				bullets: [
					"Alamat lengkap: Terban GK V No.308, Terban, Kec. Gondokusuman, Kota Yogyakarta, DIY 55223",
					"Koordinat terverifikasi: -7.7789672, 110.3739009",
					"Kontak resmi pengelola: +62 821-9780-9087 (WhatsApp Ibu Kost)",
				],
			},
		],
		faqs: [
			{
				question: "Di mana letak persis ZNL Kost Putri di Terban?",
				answer:
					"ZNL Kost Putri beralamat di Terban GK V No.308, Kelurahan Terban, Kecamatan Gondokusuman, Kota Yogyakarta, DIY 55223. Titik pastinya dapat dibuka langsung melalui tombol Google Maps di halaman ini.",
			},
			{
				question: "Apakah lingkungan Terban cocok untuk mahasiswi dan pekerja?",
				answer:
					"Ya, kawasan Terban berada di tengah Kota Yogyakarta dan terhubung ke koridor kampus maupun perkantoran di Gondokusuman serta pusat kota, dengan suasana permukiman yang relatif tenang untuk beristirahat.",
			},
			{
				question: "Apakah tersedia parkir motor di ZNL Kost Putri?",
				answer:
					"Tersedia area parkir motor di lingkungan kost yang berpagar untuk penghuni.",
			},
		],
	},
];

export function getLocationGuideBySlug(
	slug: string,
): LocationGuideContent | undefined {
	return locationGuides.find((item) => item.slug === slug);
}
