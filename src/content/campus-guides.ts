import type { CampusGuideContent } from "@/types/seo";

export const campusGuides: readonly CampusGuideContent[] = [
	{
		id: "akses-kampus-ugm",
		slug: "/akses-kampus/ugm",
		title: "Kost Putri Dekat UGM di Terban, Yogyakarta",
		metaTitle: "Kost Putri Dekat UGM di Terban, Yogyakarta | ZNL Kost Putri",
		description:
			"Panduan akses dari ZNL Kost Putri (Terban GK V No.308, Gondokusuman) menuju kawasan kampus UGM Bulaksumur, informasi fasilitas kamar, dan cara jadwalkan survei.",
		contentType: "campus-guide",
		primaryKeyword: "kost putri dekat ugm",
		secondaryKeywords: [
			"kost mahasiswi ugm",
			"kost putri sekitar kampus ugm",
			"kost mahasiswa baru ugm terban",
		],
		searchIntent: "commercial-investigation",
		topicCluster: "kost-mahasiswa",
		relatedEntityIds: [
			"https://znlkostputri.edgeone.dev/#accommodation",
			"ugm",
			"jl-cik-di-tiro",
			"jl-kaliurang-simanjuntak",
		],
		relatedSlugs: [
			"/lokasi/terban-gondokusuman",
			"/akses-kampus/uny",
			"/panduan/checklist-survei-kost",
			"/tools/kalkulator-anggaran-kost",
		],
		sources: [
			"src/data/property.ts",
			"src/data/landmarks.ts",
			"Google Maps verified property coordinates",
		],
		status: "published",
		reviewedAt: "2026-11-26",
		updatedAt: "2026-11-26",
		indexable: true,
		eyebrow: "Panduan Akses Kampus • UGM",
		campusName: "Universitas Gadjah Mada (UGM)",
		campusShortName: "UGM",
		campusArea: "Bulaksumur & Sekitar Jalan Persatuan / Kaliurang",
		independentDisclaimer:
			"ZNL Kost Putri merupakan hunian kost mandiri dan bukan fasilitas resmi atau bagian dari Universitas Gadjah Mada (UGM).",
		intro:
			"Kelurahan Terban di Kecamatan Gondokusuman berada di sisi selatan kawasan kampus Universitas Gadjah Mada (UGM). Halaman ini merangkum gambaran akses lokasi dari ZNL Kost Putri (Terban GK V No.308) menuju klaster area UGM agar calon mahasiswi dan orang tua dapat menimbang kecocokan rute sebelum survei.",
		corridorSummary:
			"Dari kawasan Terban, jalur umum menuju kompleks UGM terhubung melalui koridor Jalan Cik Di Tiro ke arah Bundaran UGM serta Jalan C. Simanjuntak / Jalan Kaliurang bagian selatan. Karena kompleks UGM sangat luas, waktu tempuh bergantung pada gedung fakultas tujuan, moda transportasi, serta kepadatan lalu lintas jam kuliah. Silakan cek rute langsung via Google Maps untuk kondisi terkini.",
		transportModes: [
			"Sepeda motor pribadi (tersedia area parkir motor berpagar di kost)",
			"Sepeda kayuh atau transportasi daring melalui koridor Cik Di Tiro / Persatuan",
			"Akses layanan transportasi umum perkotaan di sekitar jalan utama Terban",
		],
		facultyRows: [
			{
				area: "Klaster Kesehatan & Sains (FKKMK, FKG, Farmasi, MIPA)",
				accessNote:
					"Dapat diakses ke arah utara melalui koridor Jl. Persatuan / area Kesehatan (sekitar RSUP Dr. Sardjito).",
				recommendedCheck:
					"Periksa rute menuju gerbang fakultas tujuan langsung di Google Maps saat jam kuliah pagi.",
			},
			{
				area: "Klaster Teknik (Fakultas Teknik UGM — Grafika)",
				accessNote:
					"Arah barat laut kawasan UGM melalui koridor Jl. Kaliurang atau Jl. Persatuan.",
				recommendedCheck:
					"Pertimbangkan rute masuk gerbang Jalan Grafika sesuai jadwal praktikum.",
			},
			{
				area: "Klaster Sosial & Humaniora (FEB, Hukum, Psikologi, FISIPOL, FIB)",
				accessNote:
					"Berada di kawasan inti Bulaksumur yang terhubung melalui akses Bundaran UGM / Jl. Cik Di Tiro.",
				recommendedCheck:
					"Cocokkan titik masuk gerbang Bulaksumur atau Sosiohumaniora pada aplikasi peta.",
			},
		],
		sections: [
			{
				heading: "Pertimbangan Penting Memilih Kost Terban untuk Mahasiswi UGM",
				paragraphs: [
					"Kawasan Terban sering dipilih mahasiswi UGM karena berada di antara pusat fasilitas kota (warung makan, apotek, RS Panti Rapih, pusat belanja) dan koridor selatan kampus. Dibandingkan area utara yang cenderung lebih ramai komersial, bagian dalam gang Terban GK V menawarkan suasana istirahat yang lebih tenang.",
					"Kami tidak menampilkan estimasi waktu tempuh tetap karena kecepatan perjalanan berbeda antara sepeda motor, transportasi daring, maupun jam sibuk pagi hari. Gunakan tautan Google Maps resmi ZNL Kost Putri untuk menghitung rute langsung ke gedung fakultas Anda.",
				],
			},
			{
				heading: "Ringkasan Fasilitas ZNL Kost Putri",
				paragraphs: [
					"Setiap kamar di ZNL Kost Putri sudah dilengkapi perabot dasar berupa kasur, bantal, lemari pakaian bercermin, dan meja kecil dengan kamar mandi luar yang terjaga kebersihannya. Ketersediaan kamar kosong dan detail tarif bulanan maupun tahunan dikonfirmasi langsung oleh Ibu Kost.",
				],
				bullets: [
					"Hunian khusus penghuni perempuan (mahasiswi & pekerja)",
					"Perabot kamar: kasur, lemari pakaian, meja kecil",
					"Kamar mandi luar bersih & area parkir motor",
					"Bisa survei langsung dengan perjanjian via WhatsApp (+62 821-9780-9087)",
				],
			},
		],
		faqs: [
			{
				question: "Apakah ZNL Kost Putri berafiliasi resmi dengan UGM?",
				answer:
					"Tidak. ZNL Kost Putri adalah hunian kost mandiri milik perorangan di Terban, Gondokusuman dan bukan asrama atau fasilitas resmi UGM.",
			},
			{
				question:
					"Bagaimana cara mengetahui jarak pasti ke fakultas saya di UGM?",
				answer:
					"Klik tautan Buka di Google Maps pada halaman ini lalu masukkan nama gedung fakultas tujuan Anda untuk melihat jarak rute jalan dan estimasi waktu tempuh aktual.",
			},
		],
	},
	{
		id: "akses-kampus-uny",
		slug: "/akses-kampus/uny",
		title: "Kost Putri Akses Mudah ke UNY dari Terban, Gondokusuman",
		metaTitle: "Kost Putri Dekat UNY di Terban, Yogyakarta | ZNL Kost Putri",
		description:
			"Informasi akses dari ZNL Kost Putri Terban GK V No.308, Gondokusuman menuju kampus UNY Karangmalang, fasilitas kamar, dan cara survei langsung.",
		contentType: "campus-guide",
		primaryKeyword: "kost putri dekat uny",
		secondaryKeywords: [
			"kost mahasiswi uny",
			"kost putri sekitar kampus uny",
			"kost mahasiswa baru uny yogyakarta",
		],
		searchIntent: "commercial-investigation",
		topicCluster: "kost-mahasiswa",
		relatedEntityIds: [
			"https://znlkostputri.edgeone.dev/#accommodation",
			"uny",
			"jl-cik-di-tiro",
			"galeria-mall",
		],
		relatedSlugs: [
			"/lokasi/terban-gondokusuman",
			"/akses-kampus/ugm",
			"/panduan/checklist-survei-kost",
			"/tools/kalkulator-anggaran-kost",
		],
		sources: [
			"src/data/property.ts",
			"src/data/landmarks.ts",
			"Google Maps verified property coordinates",
		],
		status: "published",
		reviewedAt: "2026-11-26",
		updatedAt: "2026-11-26",
		indexable: true,
		eyebrow: "Panduan Akses Kampus • UNY",
		campusName: "Universitas Negeri Yogyakarta (UNY)",
		campusShortName: "UNY",
		campusArea: "Kampus Pusat Karangmalang",
		independentDisclaimer:
			"ZNL Kost Putri merupakan hunian kost mandiri dan bukan fasilitas resmi atau bagian dari Universitas Negeri Yogyakarta (UNY).",
		intro:
			"Bagi mahasiswi Universitas Negeri Yogyakarta (UNY) yang beraktivitas di Kampus Pusat Karangmalang, kawasan Terban di Kecamatan Gondokusuman dapat menjadi pilihan lokasi tinggal yang terhubung ke koridor tengah kota maupun area kampus. Halaman ini membantu Anda memahami akses dan fasilitas sebelum menjadwalkan survei.",
		corridorSummary:
			"Dari Terban GK V No.308, perjalanan menuju kampus UNY Karangmalang mengarah ke timur laut melalui koridor jalan utama Gondokusuman dan area Jalan Colombo. Karena kondisi lalu lintas dan letak fakultas berbeda-beda, cek rute aktual melalui Google Maps sesuai jam perkuliahan.",
		transportModes: [
			"Sepeda motor pribadi (tersedia area parkir motor berpagar di kost)",
			"Transportasi daring dari titik penjemputan sekitar jalan utama Terban",
			"Akses ke koridor Jalan Jenderal Sudirman, Colombo, dan sekitarnya",
		],
		facultyRows: [
			{
				area: "Kampus Pusat UNY Karangmalang (FIP, FBSB, FMIPA, FISIP, FEB, FT, FIKK)",
				accessNote:
					"Terhubung melalui jalur jalan kota dari Kecamatan Gondokusuman menuju koridor Jalan Colombo.",
				recommendedCheck:
					"Pastikan titik gerbang fakultas tujuan (sisi barat Jalan Colombo atau sisi dalam Karangmalang) di Google Maps.",
			},
			{
				area: "Fasilitas Umum & Kebutuhan Mahasiswa di Antara Terban–Karangmalang",
				accessNote:
					"Sepanjang koridor Terban, Gondokusuman, dan Colombo tersedia tempat makan, apotek, pusat cetak tugas, dan minimarket.",
				recommendedCheck:
					"Survei langsung pada siang atau sore hari untuk merasakan akses keluar-masuk gang serta suasana sekitar.",
			},
		],
		sections: [
			{
				heading: "Alasan Mahasiswi Memilih Hunian di Gondokusuman",
				paragraphs: [
					"Tinggal di wilayah Terban, Gondokusuman memberi keseimbangan antara akses menuju kampus UNY Karangmalang dan kedekatan dengan pusat kota Yogyakarta (area Cik Di Tiro, Jenderal Sudirman, dan Galeria Mall). Hal ini membantu terutama bagi mahasiswi yang juga menjalani magang atau kegiatan di tengah kota.",
					"Sebagaimana prinsip informasi faktual kami, ZNL Kost Putri tidak mencantumkan klaim menit perjalanan tanpa pengukuran langsung ke gedung tujuan Anda. Silakan uji rute melalui tautan Google Maps yang telah terpasang.",
				],
			},
			{
				heading: "Kondisi Kamar & Ketentuan Penghuni",
				paragraphs: [
					"ZNL Kost Putri khusus dihuni oleh perempuan dengan kamar berperabot (kasur, bantal, lemari pakaian, meja kecil) dan kamar mandi luar yang bersih. Untuk menanyakan kamar yang tersedia saat ini maupun jadwal survei lokasi bersama orang tua atau teman, hubungi Ibu Kost via WhatsApp.",
				],
			},
		],
		faqs: [
			{
				question: "Apakah ZNL Kost Putri merupakan asrama resmi UNY?",
				answer:
					"Bukan. ZNL Kost Putri adalah kost putri swasta mandiri di Terban, Gondokusuman, dan tidak berafiliasi dengan UNY.",
			},
			{
				question: "Bolehkah orang tua ikut mendampingi saat survei kost?",
				answer:
					"Sangat dipersilakan. Silakan hubungi Ibu Kost via WhatsApp di +62 821-9780-9087 untuk mengatur jadwal kedatangan.",
			},
		],
	},
];

export function getCampusGuideBySlug(
	slug: string,
): CampusGuideContent | undefined {
	return campusGuides.find((item) => item.slug === slug);
}
