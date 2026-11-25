# Keyword Research & Search Intent Classification — ZNL Kost Putri

> **Disclaimer**: Klasifikasi prioritas (P0/P1/P2) disusun berdasarkan relevansi bisnis dan niat pencarian (*search intent*), **bukan** data volume pencarian terukur atau angka CPC/KD dari tool berbayar.

## 1. Keyword Taxonomy & Target Routing

| Category | Candidate Keyword | Search Intent | Priority | Target URL | Verification & Compliance Rule |
|---|---|---|---|---|---|
| Branded | ZNL Kost Putri, ZNL Kos Putri, Alamat/Kontak ZNL Kost Putri | Navigational | P0 | `/` | Nama resmi konsisten di title, H1, NAP, JSON-LD |
| Hyperlocal | Kost putri Terban, Kos putri Terban Jogja, Kost putri Gondokusuman | Local / Transactional | P0 | `/lokasi/terban-gondokusuman` | Alamat terverifikasi `Terban GK V No.308, Gondokusuman` |
| Campus Proximity | Kost putri dekat UGM, Kost mahasiswi UGM, Kost sekitar kampus UGM | Commercial / Proximity | P0 | `/akses-kampus/ugm` | Sertakan disclaimer bukan fasilitas resmi UGM; jangan karang menit/meter |
| Campus Proximity | Kost putri dekat UNY, Kost mahasiswi UNY, Kost sekitar kampus UNY | Commercial / Proximity | P0 | `/akses-kampus/uny` | Sertakan disclaimer bukan fasilitas resmi UNY; cek rute via Google Maps |
| Landmark & Geographic | Dekat Jalan Cik Di Tiro, Jalan Kaliurang, RS Panti Rapih, RSUP Dr. Sardjito, Galeria Mall, Pasar Terban | Geographic / Local | P1 | `/lokasi/terban-gondokusuman` | Gunakan konteks koridor geografis Terban/Gondokusuman tanpa klaim waktu tempuh palsu |
| Facility | Parkir motor, perabot lengkap (kasur, lemari, meja kecil), lingkungan tenang, survei langsung | Commercial | P1 | `/`, `/lokasi/terban-gondokusuman` | Hanya fasilitas terverifikasi (tolak klaim Wi-Fi/AC/kamar mandi dalam) |
| Audience & Transactional | Kost putri untuk mahasiswi / pekerja wanita Jogja, kost putri bisa survei langsung | Transactional | P0 | `/`, `/panduan/mencari-kost-putri-jogja` | Harga & ketersediaan diarahkan ke WhatsApp (tidak mengarang tarif/status) |
| Competitor / Alternative | Alternatif mencari kost selain Mamikos, cara mencari kost tanpa aplikasi | Commercial Investigation | P1 | `/panduan/alternatif-mencari-kost-selain-mamikos` | Bahas metode nyata secara berimbang + disclosure pengelola ZNL |
| Financial Planning | Biaya kost mahasiswa Jogja, cara menghitung anggaran kost bulanan | Informational / Tool | P1/P2 | `/panduan/biaya-kost-mahasiswa-jogja`, `/tools/kalkulator-anggaran-kost` | Jangan cantumkan angka tarif ZNL yang belum terkonfirmasi |
| Informational & Safety | Checklist survei kost, cara menghindari penipuan sewa kost | Informational | P1/P2 | `/panduan/checklist-survei-kost`, `/panduan/menghindari-penipuan-kost` | Edukatif, people-first, bebas klaim keamanan absolut |

## 2. Anti-Cannibalization Rules

1. Varian ejaan (`kost` vs `kos`, `Jogja` vs `Yogyakarta`) diarahkan ke satu canonical URL per intent melalui internal linking dan sinonim alami dalam teks—bukan halaman duplikat terpisah.
2. Kata kunci tingkat fakultas (Teknik, Kedokteran/FKKMK, FEB, Psikologi, FISIPOL UGM) digabung menjadi tabel panduan terstruktur di `/akses-kampus/ugm` (bukan 7 halaman tipis terpisah).
3. Tidak membuat halaman wilayah tanpa properti fisik ZNL (dilarang: Sleman, Bantul, Kulon Progo).
