# ZNL Kost Putri - Landing Page

Ini adalah *Frontend-only Landing Page* modern yang dibangun untuk ZNL Kost Putri di Yogyakarta. Situs ini berfokus pada kecepatan, aksesibilitas, dan konversi, membantu calon penghuni (mahasiswi dan pekerja) untuk mengeksplorasi fasilitas, melihat kamar, serta menghubungi admin kost dengan sangat mudah melalui integrasi peta interaktif dan WhatsApp.

## 🚀 Tech Stack Utama

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library UI**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animasi**: [Motion (Framer Motion)](https://motion.dev/)
- **Komponen UI**: [shadcn/ui](https://ui.shadcn.com/)
- **Bahasa**: TypeScript
- **Ikon**: Lucide React

## 📂 Struktur Proyek (Project Structure)

Proyek ini disusun dengan mematuhi *clean code* dan pemisahan arsitektur SOLID. Seluruh inti kode berada di dalam direktori `src/`.

```text
znl-kost-putri/
├── .github/workflows/   # Pipeline CI/CD GitHub Actions
├── public/              # Aset statis publik (images, videos)
└── src/
    ├── app/             # Routing Next.js (layout.tsx, page.tsx, globals.css)
    ├── components/      # UI Modular
    │   ├── common/      # Komponen general (Container, SectionHeading)
    │   ├── layout/      # Komponen kerangka (Header, Footer, MobileNav)
    │   ├── sections/    # Potongan seksi utama Landing Page
    │   └── ui/          # Elemen desain murni bawaan shadcn/ui
    ├── config/          # Data konfigurasi global (site.ts, metadata)
    ├── data/            # Penyimpanan data konten statis (Fasilitas, FAQ, Gallery)
    ├── lib/             # Utility functions
    └── types/           # Definisi interface TypeScript statis
```

## 🛠️ Cara Menjalankan Proyek Secara Lokal (Getting Started)

### Prasyarat Sistem (Prerequisites)
Pastikan Anda memiliki **Node.js** versi **20.x atau lebih baru** yang terinstal di komputer.

### Langkah Instalasi
1. Lakukan *clone* repositori dan masuk ke dalam folder utama:
   ```bash
   git clone https://github.com/Adrian463588/ZNLKostPutri.git
   cd znl-kost-putri
   ```

2. Instal seluruh dependensi proyek secara *clean*:
   ```bash
   npm install
   ```

3. Jalankan *server development* lokal:
   ```bash
   npm run dev
   ```

4. Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya. Proyek memiliki fitur *Hot-Reload*, sehingga setiap perubahan pada file di dalam `src/` akan langsung terlihat di layar Anda.

## 🧪 Code Quality & Testing (Panduan Developer)

Proyek ini menerapkan batasan kualitas kode yang ketat untuk memastikan tidak ada kesalahan fungsi *(regression)* dan inkonsistensi struktur. Proyek diawasi oleh otomatisasi CI/CD lewat GitHub Actions.

Sebelum melakukan *Pull Request* atau mendorong (*push*) pembaruan apa pun, sangat disarankan bagi para developer untuk menjalankan validasi berikut:

- **Merapikan Kode (Formatting):**
  Meratakan struktur dan estetika kode dengan linter *Biome*.
  ```bash
  npm run format
  ```
- **Validasi Kesalahan Penulisan (Linting):**
  Menangkap *warning* aksesibilitas HTML dan anomali TS/JS.
  ```bash
  npm run check
  ```
- **Uji Coba Fungsional (Unit Testing):**
  Menjalankan tes dengan framework *Vitest* + *React Testing Library* yang meniru DOM (*jsdom*).
  ```bash
  npm run test
  ```

---
*Dikembangkan dengan dedikasi tinggi agar menjadi repositori Frontend teladan dengan pendekatan **DRY (Don't Repeat Yourself)** dan **Best Practice UI/UX**.*
