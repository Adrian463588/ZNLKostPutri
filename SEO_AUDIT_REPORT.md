# SEO Audit Report — ZNL Kost Putri

- **Target URL**: `https://znlkostputri.edgeone.dev/`
- **Repository**: `znl-kost-putri` (Next.js 16.2.7 App Router, React 19, TypeScript, Tailwind CSS v4, npm)
- **Hosting**: Tencent EdgeOne Pages (`edgeone makers`)
- **Audit & Implementation Date**: 2026-11-26

## 1. Executive Summary

Audit awal pada `https://znlkostputri.edgeone.dev/` menemukan bahwa `/sitemap.xml` dan `/robots.txt` mengembalikan `HTTP 404`, metadata canonical/OG image/JSON-LD belum tersedia, penargetan lokal `Terban` dan `Gondokusuman` belum hadir pada title/description/H1/konten utama, terdapat horizontal overflow `+8px` pada viewport mobile (`320–390px`), dan performa mobile terhambat (`Performance 61`, `LCP 13.3 s`) akibat `loading.tsx` skeleton streaming, animasi `opacity: 0` di hero, serta aset PNG multi-megabyte.

Seluruh perbaikan Technical SEO, Local SEO, Schema.org JSON-LD, Social Metadata, responsivitas mobile, aksesibilitas, dan optimasi aset WebP telah diimplementasikan dan diverifikasi pada build produksi lokal (`next start`).

## 2. Baseline Findings vs Final Status (P0–P3)

| ID | Priority | Area | Before | After (Local Prod Verification) |
|---|---|---|---|---|
| F-01 | P0 Critical | `sitemap.xml` | FAIL (`404`) | **PASS** (`HTTP 200`, `application/xml`, canonical single URL `https://znlkostputri.edgeone.dev/`, zero `#` fragments or fake `lastmod`). |
| F-02 | P0 Critical | `robots.txt` | FAIL (`404`) | **PASS** (`HTTP 200`, `text/plain`, `Allow: /` + `Sitemap: https://znlkostputri.edgeone.dev/sitemap.xml`). |
| F-03 | P0 Critical | Canonical URL | FAIL (Missing) | **PASS** (`<link rel="canonical" href="https://znlkostputri.edgeone.dev"/>` via `metadataBase`). |
| F-04 | P0 Critical | Initial HTML & LCP | FAIL (`LCP 13.3s`, skeleton `B:0`) | **PASS (Desktop)** / **IMPROVED (Mobile)**: Removed `loading.tsx` skeleton deferral & hero `opacity: 0`, added `LazyMotion` + `decoding="sync"` + `fetchPriority="high"`; local Desktop `LCP 0.7s` (Perf `100`), local Mobile `LCP 3.3s` (Perf `82`, down from `13.3s`). |
| F-05 | P1 High | On-Page & Local SEO | NEEDS WORK | **PASS** (Title, Meta Description, H1, About, Facilities, Location, FAQ, Footer naturally target `Terban`, `Gondokusuman`, `Yogyakarta` with consistent NAP & `+62 821-9780-9087`; deprecated `keywords` removed). |
| F-06 | P1 High | Structured Data | FAIL (Missing) | **PASS** (Valid `@graph` JSON-LD: `WebSite`, `WebPage`, `Accommodation` with `PostalAddress`, `GeoCoordinates`, `telephone`, `hasMap`, verified `amenityFeature`). |
| F-07 | P1 High | Social Metadata | FAIL (No OG/Twitter image) | **PASS** (Real-photo `1200×630` `/og-image.jpg` `HTTP 200` + `og:url`, `og:image:alt`, `twitter:image`, `twitter:image:alt`). |
| F-08 | P1 High | Image & Video Assets | NEEDS WORK (~6.7 MB PNGs) | **PASS** (Converted to SEO-named WebP ~479 KB total + `10 KB` 16:9 video poster `preload="none"` + optimized icons; `ffmpeg` unavailable locally so `.mp4` re-encode not applied). |
| F-09 | P1 High | Mobile Overflow | FAIL (`+8px` at `320–390px`) | **PASS** (`0px` horizontal overflow across `320`, `360`, `375`, `390`, `768`, `1024`, `1440px`). |
| F-10 | P2 Medium | Accessibility & Lint | WARN | **PASS** (Lighthouse `label-content-name-mismatch` resolved; ESLint `0` warnings/errors; Biome `0` warnings/errors). |
| F-11 | P2 Medium | GSC / Bing / GBP | BLOCKED (Owner Access) | **BLOCKED (Owner Action Needed)**: Env-var hooks `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` and `NEXT_PUBLIC_BING_SITE_VERIFICATION` ready; requires owner Google Search Console, Bing Webmaster Tools, and Google Business Profile verification. |

## 3. Lighthouse Comparison (Before vs After)

| Audit (Target) | Prod Baseline Mobile | Local Build Mobile | Prod Baseline Desktop | Local Build Desktop |
|---|---:|---:|---:|---:|
| Performance (`>= 90`) | 61 | 82 | 83 | **100** |
| Accessibility (`>= 95`) | 100 | **100** | 100 | **100** |
| Best Practices (`>= 95`) | 100 | **100** | 100 | **100** |
| SEO (`100`) | 100 | **100** | 100 | **100** |
| FCP | 2.7 s | **1.1 s** | 0.8 s | **0.3 s** |
| LCP (`<= 2.5 s`) | 13.3 s | 3.3 s | 2.6 s | **0.7 s** |
| TBT | 320 ms | 440 ms | 40 ms | **40 ms** |
| CLS (`<= 0.1`) | 0 | **0** | 0 | **0** |
| Speed Index | 4.4 s | **1.9 s** | 1.6 s | **0.8 s** |

*Catatan metodologi*: Baseline diukur langsung terhadap `https://znlkostputri.edgeone.dev/`; hasil sesudah diukur terhadap `next start` lokal (`http://127.0.0.1:3100/`, HTTP/1.1 tanpa edge CDN atau `sharp`). Core Web Vitals field data (p75 CrUX) berstatus `insufficient data` karena traffic rendah.

## 4. Automated Checks & QA Evidence

- `npm run check` (Biome): **PASS** (`39` files checked, `0` errors, `0` warnings).
- `npm run lint` (ESLint): **PASS** (`0` errors, `0` warnings).
- `npx tsc --noEmit`: **PASS** (`0` errors).
- `npm run test` (Vitest): **PASS** (`5` test files, `14/14` tests passed).
- `npm run build` (`next build`): **PASS** (`6` static routes prerendered: `/`, `/_not-found`, `/apple-icon.png`, `/icon.png`, `/robots.txt`, `/sitemap.xml`).
- Playwright + `urllib` local production audit: **PASS** (`0` console errors, `0` failed requests, `0` broken images out of `9`, `0` horizontal overflow on `320–1440px`, FAQ accordion & MobileNav verified).

## 5. Known Limitations & Owner Manual Steps

1. **EdgeOne Production Re-Verification**: Setelah push ke GitHub `main`, tunggu EdgeOne Pages menyelesaikan build otomatis lalu jalankan validasi `curl.exe` pada `/`, `/sitemap.xml`, dan `/robots.txt`.
2. **Mobile LCP Local vs Edge CDN**: Pada server lokal (`next start` HTTP/1.1 tanpa `sharp`), LCP mobile berada di `3.3 s` (Performance `82`); perlu diukur ulang via PageSpeed Insights setelah EdgeOne Pages CDN + `?imageMogr2` aktif pada produksi.
3. **Video MP4 Compression**: `ffmpeg` tidak terpasang di environment lokal sehingga `public/videos/DetailKamar.mp4` (`5.33 MB`) tetap dipertahankan dengan `preload="none"` + poster WebP `10 KB`.
4. **Google Search Console & Bing Webmaster Tools**:
   - Buka Google Search Console -> *Add property* -> *URL prefix*: `https://znlkostputri.edgeone.dev/`.
   - Verifikasi menggunakan HTML tag (`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` di environment variables EdgeOne Pages) atau unggah file HTML verifikasi ke `public/`.
   - Submit `sitemap.xml`, jalankan *URL Inspection* -> *Test Live URL* -> *Request Indexing*.
   - Impor/daftarkan properti ke Bing Webmaster Tools (`NEXT_PUBLIC_BING_SITE_VERIFICATION` opsional).
5. **Google Business Profile Eligibility**: Properti kost/sewa harus memenuhi kebijakan Google Business Profile (papan nama permanen di `Terban GK V No.308` dan pengelola yang dapat dihubungi saat jam survei); jangan membuat kategori/jam palsu apabila tidak memenuhi syarat.
