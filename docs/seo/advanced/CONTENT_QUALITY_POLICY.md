# Content Quality Policy & Google Search Compliance — ZNL Kost Putri

## 1. Regulatory & Spam Policy Compliance
Seluruh konten tunduk pada dokumentasi resmi Google Search Central:
- **Spam Policies**: Dilarang doorway pages, cloaking, keyword stuffing, scaled content abuse, fake reviews/ratings, link manipulation, dan competitor brand impersonation.
- **People-First Content**: Setiap halaman wajib menjawab kebutuhan nyata calon mahasiswi/pekerja perempuan atau orang tua secara ringkas, jujur, dan dapat langsung dipraktikkan.

## 2. Fact-Checking & Verification Gate
1. **Verified Facts Only**: Data properti wajib bersumber dari `src/data/property.ts` dan `src/data/landmarks.ts`.
2. **Forbidden Claims**:
   - Dilarang mengklaim "termurah", "terbaik", "paling strategis", atau "pasti aman 100%".
   - Dilarang menampilkan harga sewa atau label status kamar "Tersedia" secara permanen apabila belum ada data tarif/ketersediaan terkonfirmasi.
   - Dilarang mencantumkan fasilitas tidak terverifikasi (Wi-Fi, AC, kamar mandi dalam, akses bebas 24 jam).
   - Dilarang mengarang jarak tempuh (meter/km/menit) ke UGM, UNY, atau landmark lain.
3. **Mandatory Disclosures**:
   - Halaman akses kampus wajib menyatakan bahwa *ZNL Kost Putri merupakan hunian independen dan bukan fasilitas resmi universitas*.
   - Halaman panduan alternatif/perbandingan wajib menyatakan bahwa *panduan diterbitkan oleh pengelola website ZNL Kost Putri, sebuah hunian independen di Yogyakarta*.

## 3. Publication & Automated Validation Gate
- Hanya konten dengan `status: "published"` dan `indexable: true` yang masuk ke `sitemap.xml` dan di-render sebagai rute publik.
- `content-validator.ts` dan `scripts/seo-validate.mjs` memblokir build/CI jika ditemukan:
  - Duplikasi `slug`, `title`, atau `canonical`
  - Entri `published` tanpa `sources` atau `reviewedAt`
  - Tautan internal atau aset gambar rusak
  - Frasa hiperbolik/terlarang
  - JSON-LD mengandung field palsu (`aggregateRating`, `review`, `priceRange`, `openingHours`)
