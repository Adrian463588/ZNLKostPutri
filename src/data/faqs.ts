type FAQ = {
	question: string;
	answer: string;
};

export const faqs: readonly FAQ[] = [
	{
		question: "Apakah ZNL Kost Putri khusus putri?",
		answer:
			"Iya, Nduk. ZNL Kost Putri ini memang khusus untuk penghuni putri saja biar semuanya lebih nyaman dan merasa aman selama tinggal di sini.",
	},
	{
		question: "Apakah boleh survei lokasi sebelum memutuskan untuk sewa?",
		answer:
			"Boleh banget! Ibu sangat menyarankan kalian buat datang lihat langsung kamar dan lingkungannya biar mantap. Silakan chat Ibu via WhatsApp ya buat janjian waktu surveinya.",
	},
	{
		question: "Bagaimana cara mengecek ketersediaan kamar?",
		answer:
			"Langsung chat Ibu aja lewat tombol WhatsApp di bawah, ya. Nanti Ibu akan langsung balas dan kasih tahu kamar mana saja yang masih kosong.",
	},
	{
		question: "Apakah kamar mandi ada di dalam atau di luar?",
		answer:
			"Untuk semua tipe kamar di sini menggunakan kamar mandi luar ya, Nduk. Tapi tidak usah khawatir, jumlah kamar mandinya cukup dan selalu dijaga kebersihannya.",
	},
	{
		question: "Apakah sudah termasuk listrik dan air?",
		answer:
			"Sebagian besar sudah termasuk, tapi untuk detail pastinya nanti kita obrolin lewat WhatsApp ya, soalnya setiap tipe kamar bisa sedikit berbeda detail sewanya.",
	},
	{
		question: "Berapa biaya sewa kamarnya?",
		answer:
			"Harganya bervariasi tergantung tipe kamar yang dipilih. Silakan chat Ibu langsung untuk tanya harga ter-update-nya, ya.",
	},
	{
		question: "Apakah ada peraturan jam malam di kost ini?",
		answer:
			"Sebenarnya Ibu tidak terlalu membatasi jam malam, tapi sebaiknya jangan sering-sering pulang terlalu malam demi keamanan dan supaya tidak mengganggu penghuni lain yang sedang istirahat. Kita sama-sama jaga kenyamanan ya, Nduk.",
	},
] as const;
