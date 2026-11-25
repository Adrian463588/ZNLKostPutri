import type { EditorialGuideContent } from "@/types/seo";

const PUBLISHER_DISCLOSURE =
	"Panduan ini diterbitkan oleh pengelola website ZNL Kost Putri, sebuah hunian kost mandiri khusus perempuan di Terban, Gondokusuman, Yogyakarta.";

export const editorialGuides: readonly EditorialGuideContent[] = [
	{
		id: "panduan-mencari-kost-putri-jogja",
		slug: "/panduan/mencari-kost-putri-jogja",
		title: "Panduan Memilih Kost Putri di Yogyakarta",
		metaTitle: "Cara Mencari Kost Putri di Jogja | Panduan ZNL Kost Putri",
		description:
			"Panduan praktis bagi mahasiswi, pekerja perempuan, dan orang tua dalam memilih kost putri di Yogyakarta: lokasi, fasilitas kamar, aturan tinggal, dan survei.",
		contentType: "guide",
		primaryKeyword: "cara mencari kost putri di jogja",
		secondaryKeywords: [
			"tips memilih kost untuk mahasiswa baru",
			"kost putri untuk mahasiswi jogja",
			"kost putri untuk pekerja wanita jogja",
		],
		searchIntent: "informational",
		topicCluster: "kost-putri-yogyakarta",
		relatedEntityIds: ["https://znlkostputri.edgeone.dev/#accommodation"],
		relatedSlugs: [
			"/lokasi/terban-gondokusuman",
			"/panduan/checklist-survei-kost",
			"/panduan/biaya-kost-mahasiswa-jogja",
			"/panduan/menghindari-penipuan-kost",
		],
		sources: ["src/data/property.ts", "src/data/faqs.ts"],
		status: "published",
		reviewedAt: "2026-11-26",
		updatedAt: "2026-11-26",
		indexable: true,
		eyebrow: "Panduan Utama • Yogyakarta",
		readingMinutes: 5,
		disclosure: PUBLISHER_DISCLOSURE,
		intro:
			"Memilih kost putri di Yogyakarta bukan hanya soal tampilan kamar di foto, melainkan kecocokan antara lokasi aktivitas harian, suasana lingkungan, kejelasan aturan, dan transparansi biaya. Panduan ini membantu calon mahasiswi baru, pekerja perempuan, serta orang tua menyaring pilihan kost secara sistematis.",
		sections: [
			{
				heading: "1. Tentukan Zona Aktivitas Harian Terlebih Dahulu",
				paragraphs: [
					"Yogyakarta memiliki banyak kawasan kost dengan karakter berbeda. Bagi mahasiswi atau pekerja yang banyak beraktivitas di sekitar tengah kota, kawasan seperti Terban dan Gondokusuman membantu memangkas kerumitan mobilitas karena dekat dengan koridor kampus, rumah sakit, pasar, dan warung makan.",
					"Bedakan antara rumah kost di pinggir jalan besar yang ramai suara kendaraan dengan kost di dalam gang permukiman yang lebih tenang untuk belajar dan beristirahat.",
				],
			},
			{
				heading: "2. Sesuaikan Tipe Fasilitas dengan Kebutuhan dan Anggaran",
				paragraphs: [
					"Tidak semua penghuni membutuhkan fasilitas setara apartemen. Kamar berperabot dasar (kasur, lemari, meja) dengan kamar mandi luar yang dirawat bersih sering kali lebih efisien bagi mahasiswa yang lebih banyak beraktivitas di kampus dan ingin menjaga pengeluaran bulanan tetap terkendali.",
				],
				bullets: [
					"Cek kelengkapan perabot dasar agar tidak perlu membeli lemari atau kasur baru.",
					"Tanyakan sistem penggunaan dan perawatan kamar mandi luar (jumlah bilik serta jadwal kebersihan).",
					"Pastikan ketersediaan area parkir motor berpagar bila membawa kendaraan pribadi.",
				],
			},
			{
				heading: "3. Pahami Ketentuan Penghuni dan Kebersihan Bersama",
				paragraphs: [
					"Setiap kost putri memiliki aturan berbeda mengenai tamu, jam ketenangan malam, serta penggunaan listrik peralatan pribadi. Sebelum membayar uang muka, tanyakan langsung kepada pengelola atau Ibu Kost agar tidak terjadi salah paham setelah pindah.",
				],
			},
		],
		faqs: [
			{
				question:
					"Kapan waktu terbaik mulai mencari kost untuk mahasiswa baru Jogja?",
				answer:
					"Sebaiknya mulai mendata pilihan dan menghubungi pengelola beberapa minggu sebelum masa orientasi atau awal semester, terutama jika ingin melakukan survei langsung bersama keluarga.",
			},
			{
				question: "Apa perbedaan kost kamar mandi dalam dan kamar mandi luar?",
				answer:
					"Kamar mandi dalam memberi privasi lebih di dalam unit kamar, sedangkan kamar mandi luar umumnya memiliki tarif lebih terjangkau dan tetap nyaman selama jumlah biliknya memadai serta kebersihannya terjaga rutin.",
			},
		],
	},
	{
		id: "panduan-checklist-survei-kost",
		slug: "/panduan/checklist-survei-kost",
		title: "Checklist Survei Kost Putri Sebelum Menyewa",
		metaTitle: "Checklist Survei Kost Putri Jogja | Panduan ZNL Kost Putri",
		description:
			"Daftar periksa lengkap saat survei lokasi kost putri: kondisi fisik kamar, sirkulasi udara, keamanan pagar, aliran air, dan pertanyaan wajib untuk pengelola.",
		contentType: "guide",
		primaryKeyword: "checklist survei kost putri",
		secondaryKeywords: [
			"hal yang perlu ditanyakan sebelum menyewa kost",
			"kost putri bisa survei langsung",
		],
		searchIntent: "informational",
		topicCluster: "rental-discovery",
		relatedEntityIds: ["https://znlkostputri.edgeone.dev/#accommodation"],
		relatedSlugs: [
			"/panduan/menghindari-penipuan-kost",
			"/panduan/mencari-kost-putri-jogja",
			"/lokasi/terban-gondokusuman",
		],
		sources: ["src/data/property.ts", "src/data/faqs.ts"],
		status: "published",
		reviewedAt: "2026-11-26",
		updatedAt: "2026-11-26",
		indexable: true,
		eyebrow: "Checklist Lapangan",
		readingMinutes: 4,
		disclosure: PUBLISHER_DISCLOSURE,
		intro:
			"Foto dan video kamar membantu tahap seleksi awal, tetapi survei langsung ke lokasi tetap cara paling akurat untuk memastikan kenyamanan tinggal. Gunakan checklist di bawah ini ketika datang meninjau kost putri di Yogyakarta.",
		checklistGroups: [
			{
				category: "Kondisi Fisik Kamar & Perabot",
				items: [
					"Periksa kelembapan dinding, bau ruangan, serta fungsi jendela atau ventilasi udara.",
					"Uji kekokohan tempat tidur, pintu lemari pakaian, cermin, dan meja kecil.",
					"Periksa jumlah dan kondisi stopkontak serta pencahayaan lampu kamar.",
				],
			},
			{
				category: "Kamar Mandi, Air & Kebersihan",
				items: [
					"Cek kelancaran aliran keran/shower dan pembuangan air di kamar mandi.",
					"Amati kebersihan lantai, kloset, dan jarak kamar mandi dari kamar yang ditawarkan.",
					"Tanyakan pembagian jadwal atau pihak yang membersihkan area bersama.",
				],
			},
			{
				category: "Keamanan & Akses Lingkungan",
				items: [
					"Periksa sistem kunci gerbang depan, pintu kamar, dan penerangan di area parkir motor.",
					"Amati akses keluar-masuk gang di siang maupun sore hari.",
					"Pastikan lingkungan sekitar kondusif untuk belajar dan beristirahat.",
				],
			},
			{
				category: "Pertanyaan Wajib ke Pemilik / Ibu Kost",
				items: [
					"Konfirmasi tarif sewa terbaru serta apakah listrik dan air sudah termasuk atau ada ketentuan tambahan.",
					"Tanyakan skema pembayaran (bulanan/tahunan), batas tanggal bayar, dan ketentuan pembatalan.",
					"Pahami peraturan tamu, penitipan kunci, dan ketenangan jam malam.",
				],
			},
		],
		sections: [
			{
				heading: "Tips Tambahan Saat Datang Survei",
				paragraphs: [
					"Jika memungkinkan, jadwalkan survei pada siang hingga sore hari agar pencahayaan alami kamar terlihat jelas sekaligus Anda bisa mengecek keramaian aktivitas di sekitar lingkungan kost.",
					"Di ZNL Kost Putri Terban, calon penghuni dan orang tua sangat dipersilakan datang survei langsung setelah membuat janji melalui WhatsApp agar bisa melihat kondisi kamar secara langsung sebelum memutuskan.",
				],
			},
		],
		faqs: [
			{
				question:
					"Apakah survei langsung di ZNL Kost Putri harus janjian dulu?",
				answer:
					"Ya, sebaiknya hubungi Ibu Kost terlebih dahulu melalui WhatsApp (+62 821-9780-9087) agar waktu kedatangan dapat disesuaikan dan kamar yang ingin dilihat siap ditunjukkan.",
			},
		],
	},
	{
		id: "panduan-biaya-kost-mahasiswa-jogja",
		slug: "/panduan/biaya-kost-mahasiswa-jogja",
		title: "Panduan Anggaran Kost & Biaya Hidup Mahasiswa di Jogja",
		metaTitle: "Panduan Biaya Kost Mahasiswa Jogja | Panduan ZNL Kost Putri",
		description:
			"Cara menyusun rincian anggaran bulanan mahasiswi di Yogyakarta: komponen sewa kamar, makan, listrik, internet, transportasi, laundry, dan dana cadangan.",
		contentType: "guide",
		primaryKeyword: "biaya kost mahasiswa di jogja",
		secondaryKeywords: [
			"cara menghitung anggaran kost bulanan",
			"perbandingan biaya kost putri jogja",
		],
		searchIntent: "informational",
		topicCluster: "financial-planning",
		relatedEntityIds: ["https://znlkostputri.edgeone.dev/#accommodation"],
		relatedSlugs: [
			"/tools/kalkulator-anggaran-kost",
			"/panduan/mencari-kost-putri-jogja",
			"/akses-kampus/ugm",
			"/akses-kampus/uny",
		],
		sources: ["src/data/property.ts", "src/data/faqs.ts"],
		status: "published",
		reviewedAt: "2026-11-26",
		updatedAt: "2026-11-26",
		indexable: true,
		eyebrow: "Perencanaan Keuangan",
		readingMinutes: 5,
		disclosure: PUBLISHER_DISCLOSURE,
		intro:
			"Saat merencanakan kuliah atau bekerja di Yogyakarta, biaya sewa kamar hanyalah salah satu komponen pengeluaran bulanan. Mengetahui struktur biaya hidup sejak awal membantu mahasiswi dan orang tua memilih tipe kost yang seimbang tanpa mengganggu kebutuhan kuliah.",
		sections: [
			{
				heading: "Komponen Pengeluaran Bulanan Anak Kost",
				paragraphs: [
					"Agar anggaran tidak meleset di tengah semester, pisahkan biaya tetap dan biaya harian berikut saat membandingkan opsi kost putri di Jogja:",
				],
				bullets: [
					"Biaya sewa kamar: Tanyakan apakah tagihan listrik dan air sudah termasuk dalam biaya bulanan atau dihitung terpisah berdasarkan pemakaian elektronik.",
					"Konsumsi harian: Lokasi kost yang dekat warung makan atau pasar seperti di Terban membantu menjaga pengeluaran makan tanpa harus selalu bergantung pada pesan-antar.",
					"Transportasi: Jarak menuju kampus atau kantor sangat memengaruhi biaya bensin maupun tarif transportasi daring setiap bulan.",
					"Internet, laundry, kebutuhan pribadi, dan dana cadangan untuk tugas atau keperluan kesehatan mendadak.",
				],
			},
			{
				heading:
					"Kost Kamar Mandi Luar vs Kamar Mandi Dalam dari Sisi Anggaran",
				paragraphs: [
					"Umumnya, kamar dengan fasilitas bersama seperti kamar mandi luar memiliki biaya sewa lebih ringan dibandingkan unit ber-AC dengan kamar mandi dalam. Pilih fasilitas yang benar-benar terpakai setiap hari; dana selisihnya dapat dialokasikan untuk kebutuhan akademik atau tabungan darurat.",
					"Untuk mengetahui tarif sewa terbaru dan rincian listrik/air di ZNL Kost Putri Terban, silakan tanyakan langsung kepada Ibu Kost melalui WhatsApp karena besarannya menyesuaikan tipe kamar yang sedang tersedia.",
				],
			},
		],
		faqs: [
			{
				question: "Mengapa biaya listrik dan air perlu ditanyakan sejak awal?",
				answer:
					"Karena setiap kost memiliki kebijakan berbeda—ada yang memasukkan listrik-air untuk penggunaan standar dan ada yang mengenakan biaya tambahan untuk perangkat berdaya besar. Konfirmasi sejak awal mencegah pembengkakan tagihan.",
			},
		],
	},
	{
		id: "panduan-alternatif-mencari-kost-selain-mamikos",
		slug: "/panduan/alternatif-mencari-kost-selain-mamikos",
		title: "Alternatif Mencari Kost Selain Mamikos di Yogyakarta",
		metaTitle: "Alternatif Mencari Kost Selain Mamikos di Jogja | Panduan Kost",
		description:
			"Perbandingan objektif metode mencari kost putri di Yogyakarta: marketplace seperti Mamikos, Google Maps, website pemilik langsung, rekomendasi teman, dan survei lapangan.",
		contentType: "comparison",
		primaryKeyword: "alternatif mencari kost selain mamikos",
		secondaryKeywords: [
			"cara mencari kost tanpa aplikasi",
			"cari kost langsung ke pemilik",
			"marketplace kost vs website pemilik",
		],
		searchIntent: "commercial-investigation",
		topicCluster: "rental-discovery",
		relatedEntityIds: ["https://znlkostputri.edgeone.dev/#accommodation"],
		relatedSlugs: [
			"/panduan/checklist-survei-kost",
			"/panduan/menghindari-penipuan-kost",
			"/lokasi/terban-gondokusuman",
			"/",
		],
		sources: [
			"Public competitor research (docs/seo/advanced/COMPETITOR_INTELLIGENCE.md)",
			"src/data/property.ts",
		],
		status: "published",
		reviewedAt: "2026-11-26",
		updatedAt: "2026-11-26",
		indexable: true,
		eyebrow: "Perbandingan Metode Pencarian",
		readingMinutes: 6,
		disclosure: PUBLISHER_DISCLOSURE,
		intro:
			"Aplikasi dan marketplace properti seperti Mamikos, Infokost, atau Rukita memang mempermudah pencarian kost dari jarak jauh. Namun di Yogyakarta, banyak pemilik kost rumahan tidak memperbarui seluruh kamar secara rutin di platform agregator. Mengenal berbagai metode pencarian kost membantu Anda menemukan pilihan yang lebih tepat sekaligus berkomunikasi langsung dengan pengelola.",
		comparisonRows: [
			{
				label: "Marketplace Kost (mis. Mamikos, Infokost, Rukita)",
				description:
					"Mencari kamar menggunakan filter harga, wilayah, dan fasilitas dalam satu aplikasi atau situs agregator.",
				strengths:
					"Cepat membandingkan banyak unit sekaligus, filter lengkap, cocok untuk riset awal dari luar kota.",
				limitations:
					"Sering memerlukan login akun untuk chat, tidak semua kost rumahan terdaftar aktif, dan deskripsi kawasan bersifat umum.",
				verificationStatus: "verified",
			},
			{
				label: "Google Maps",
				description:
					"Menelusuri titik lokasi kost di area target seperti Terban atau Gondokusuman lalu memeriksa rute dan kontak.",
				strengths:
					"Menunjukkan posisi geografis nyata, akses gang, jalan utama, dan fasilitas sekitar kampus secara visual.",
				limitations:
					"Informasi kamar bagian dalam tidak selalu lengkap dan tidak semua kost memiliki profil bisnis aktif.",
				verificationStatus: "verified",
			},
			{
				label: "Website Resmi Pemilik Kost",
				description:
					"Mengunjungi situs properti mandiri seperti website ZNL Kost Putri dan menghubungi pengelola langsung via WhatsApp.",
				strengths:
					"Komunikasi langsung tanpa perantara atau wajib unduh aplikasi, informasi aturan dan foto langsung dari pengelola.",
				limitations:
					"Setiap situs hanya menampilkan satu properti sehingga tetap perlu membandingkan beberapa kost.",
				verificationStatus: "verified",
			},
			{
				label: "Rekomendasi Teman / Komunitas Mahasiswa",
				description:
					"Bertanya kepada kakak tingkat, alumni sekolah, atau grup komunitas kampus terkait hunian yang nyaman.",
				strengths:
					"Mendapat cerita pengalaman tinggal yang lebih personal dan jujur mengenai suasana lingkungan.",
				limitations:
					"Pilihan terbatas pada kenalan yang ada dan ketersediaan kamar tetap harus dikonfirmasi ulang.",
				verificationStatus: "verified",
			},
			{
				label: "Survei Lapangan Langsung",
				description:
					"Menelusuri kawasan target seperti gang permukiman Terban sambil melihat papan informasi kost.",
				strengths:
					"Kondisi lingkungan, kebisingan, pencahayaan, dan akses parkir terlihat 100% apa adanya sebelum transaksi.",
				limitations:
					"Memerlukan waktu dan kehadiran langsung di Yogyakarta (atau diwakilkan keluarga).",
				verificationStatus: "verified",
			},
		],
		sections: [
			{
				heading: "Kapan Sebaiknya Menghubungi Pemilik Secara Langsung?",
				paragraphs: [
					"Setelah menyaring 2 hingga 4 kandidat kost melalui marketplace, Google Maps, maupun website kost langsung, langkah paling aman adalah menghubungi pemilik atau pengelola untuk menanyakan kondisi kamar terbaru dan menjadwalkan survei.",
					"Melalui situs resmi ZNL Kost Putri, calon penghuni dapat langsung berdiskusi dengan Ibu Kost mengenai kondisi kamar mandi luar, aturan kost putri, serta jadwal survei di Terban GK V No.308 tanpa perantara.",
				],
			},
		],
		faqs: [
			{
				question:
					"Apakah mencari kost melalui website pemilik lebih aman daripada media sosial?",
				answer:
					"Keduanya tetap membutuhkan verifikasi. Pastikan alamat fisik jelas di peta, kontak terhubung langsung ke pengelola, dan hindari transfer uang muka sebelum survei langsung.",
			},
		],
	},
	{
		id: "panduan-menghindari-penipuan-kost",
		slug: "/panduan/menghindari-penipuan-kost",
		title: "Cara Menghindari Penipuan Sewa Kost di Yogyakarta",
		metaTitle:
			"Cara Menghindari Penipuan Sewa Kost Jogja | Panduan ZNL Kost Putri",
		description:
			"Kenali tanda bahaya penipuan booking kost online dan langkah verifikasi alamat, pemilik, serta survei lokasi sebelum mengirim uang muka di Yogyakarta.",
		contentType: "guide",
		primaryKeyword: "cara menghindari penipuan sewa kost",
		secondaryKeywords: [
			"tips aman cari kost online jogja",
			"verifikasi pemilik kost sebelum dp",
		],
		searchIntent: "informational",
		topicCluster: "rental-discovery",
		relatedEntityIds: ["https://znlkostputri.edgeone.dev/#accommodation"],
		relatedSlugs: [
			"/panduan/checklist-survei-kost",
			"/panduan/alternatif-mencari-kost-selain-mamikos",
			"/lokasi/terban-gondokusuman",
		],
		sources: ["Public rental safety guidance", "src/data/property.ts"],
		status: "published",
		reviewedAt: "2026-11-26",
		updatedAt: "2026-11-26",
		indexable: true,
		eyebrow: "Keamanan Transaksi Sewa",
		readingMinutes: 4,
		disclosure: PUBLISHER_DISCLOSURE,
		intro:
			"Menjelang tahun ajaran baru, tidak sedikit calon mahasiswi dari luar kota yang terburu-buru mencari kamar secara online. Sikap tergesa-gesa ini sering dimanfaatkan oknum tidak bertanggung jawab. Ikuti prinsip kehati-hatian berikut sebelum melakukan pembayaran sewa apa pun.",
		sections: [
			{
				heading: "Tanda Bahaya yang Perlu Diwaspadai",
				paragraphs: [
					"Penawaran sewa yang sehat bersifat transparan dan memberi ruang bagi calon penyewa untuk memeriksa kondisi bangunan. Waspadai pola berikut:",
				],
				bullets: [
					"Mendesak transfer uang muka (DP) secepatnya dengan alasan banyak peminat tanpa mengizinkan survei atau video call kamar nyata.",
					"Alamat tidak jelas, tidak bisa menunjukkan titik lokasi spesifik di peta, atau menolak pertemuan langsung di alamat properti.",
					"Tarif yang jauh di bawah standar kawasan sekitar tanpa penjelasan fasilitas yang masuk akal.",
					"Meminta data identitas sensitif secara berlebihan sebelum ada kesepakatan survei.",
				],
			},
			{
				heading: "Langkah Verifikasi Aman Sebelum Membayar",
				paragraphs: [
					"Pastikan Anda—atau kerabat/teman di Yogyakarta—mengunjungi alamat properti secara langsung, bertemu dengan pemilik atau pengelola resmi di lokasi, serta meminta bukti pembayaran tertulis yang mencantumkan nama pengelola dan periode sewa.",
					"Di ZNL Kost Putri Terban, kami menganjurkan calon penghuni dan orang tua untuk datang survei ke Terban GK V No.308 agar kondisi kamar dan identitas pengelola dapat dipastikan langsung.",
				],
			},
		],
		faqs: [
			{
				question:
					"Bagaimana jika saya masih di luar kota dan belum sempat datang ke Jogja?",
				answer:
					"Minta bantuan teman atau kerabat yang sudah berada di Yogyakarta untuk survei fisik ke alamat kost, atau lakukan verifikasi lokasi dan komunikasi langsung sebelum mengambil komitmen pembayaran.",
			},
		],
	},
];

export function getEditorialGuideBySlug(
	slug: string,
): EditorialGuideContent | undefined {
	return editorialGuides.find((item) => item.slug === slug);
}
