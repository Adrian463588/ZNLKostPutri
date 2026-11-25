# SEO Implementation Plan — ZNL Kost Putri

## Architecture & File Map

1. **Centralized Config & Schema (`src/config/site.ts`, `src/lib/seo.ts`)**
   - Add `url: "https://znlkostputri.edgeone.dev"`, `phoneDisplay: "+62 821-9780-9087"`, `postalAddress`, `geo` (`-7.7789672`, `110.3739009`), `ogImage` metadata, and helper constants.
   - Build typed JSON-LD generator in `src/lib/seo.ts` (`WebSite`, `WebPage`, `Accommodation`) using only verified config & data.
2. **Crawl Endpoints (`src/app/sitemap.ts`, `src/app/robots.ts`)**
   - Static App Router metadata routes (`export const dynamic = "force-static"`) producing minimal compliant `sitemap.xml` and `robots.txt` using `siteConfig.url`.
3. **Asset Optimization (`public/images/*.webp`, `public/og-image.jpg`, `src/app/icon.png`, `src/app/apple-icon.png`)**
   - Convert large PNG assets (`IbuKost.png`, `KasurDanMejaKecil.png`, `LemariPakaian.png`, `KamarMandi.png`, `TampakDepan.png`, `IconWebsite.png`) into WebP with SEO-friendly filenames (`znl-kost-putri-terban.webp`, `kamar-kost-putri-gondokusuman.webp`, `lemari-kamar-znl-kost-putri.webp`, `kamar-mandi-znl-kost-putri.webp`, `ibu-kost-znl-putri-terban.webp`, `logo-znl-kost-putri.webp`).
   - Generate `public/og-image.jpg` (`1200×630`) composited from genuine property photos and ZNL branding.
   - Optimize `src/app/icon.png` (`192×192`) and add `src/app/apple-icon.png` (`180×180`).
4. **Metadata & SSR Rendering (`src/app/layout.tsx`, remove `src/app/loading.tsx`, `src/app/page.tsx`, `next.config.ts`)**
   - Update `metadata` with `metadataBase`, `alternates.canonical`, localized `title` & `description`, Open Graph (`url`, `images`), Twitter (`images`), `robots` + `googleBot`, and env-gated `verification`; remove deprecated `keywords`.
   - Remove unnecessary `src/app/loading.tsx` so full semantic SSR HTML paints immediately without `<template id="B:0">` skeleton deferral.
   - Render JSON-LD `<script type="application/ld+json">` inside `src/app/page.tsx`.
   - Configure `poweredByHeader: false`, image formats `["image/avif", "image/webp"]`, and security headers in `next.config.ts`.
5. **On-Page Local SEO, LCP & Accessibility Fixes**
   - `src/components/sections/HeroSection.tsx`: Server component (no `opacity: 0` blocking H1 or LCP image), H1 `"Kost Putri di Terban, Gondokusuman, Yogyakarta"`, `fetchPriority="high"` + `loading="eager"` on hero `<Image>`, WebP src.
   - `src/components/sections/AboutSection.tsx`: Fix `+8px` mobile overflow via `overflow-x-clip`, refine copy with natural Terban/Gondokusuman context, WebP src.
   - `src/components/sections/LocationSection.tsx`: Reinforce Terban/Gondokusuman local context, display consistent NAP (name, full address, `+62 821-9780-9087`), keep verified Google Maps CTA & lazy iframe.
   - `src/data/facilities.ts`, `src/data/rooms.ts`, `src/data/gallery.ts`, `src/data/faqs.ts`: Update WebP asset paths & descriptive alt text, refine natural local copy without unverified claims or AI fluff, add concise location/survei FAQ details.
   - `src/components/sections/RoomPreviewSection.tsx`: Use WebP poster (`/images/znl-kost-putri-terban.webp`) & `preload="none"` on `<video>` to avoid wasting mobile bandwidth before playback.
   - `src/components/sections/FAQSection.tsx`: Fix ESLint unused `_index` warning.
   - `src/components/layout/Header.tsx` & `Footer.tsx`: Use `logo-znl-kost-putri.webp` (`loading="eager"` on header logo), display phone number in footer NAP, fix `label-content-name-mismatch` on footer links.
6. **Automated SEO Smoke Tests & Verification**
   - Add unit/smoke tests in `src/lib/seo.test.ts` and `src/app/metadata-routes.test.ts` validating `sitemap()`, `robots()`, JSON-LD schema invariants, `siteConfig` NAP, and asset path integrity.
   - Verify with `npm run check`, `npm run lint`, `npx tsc --noEmit`, `npm run test`, `npm run build`, local production `next start` `curl.exe` + Playwright + Lighthouse (mobile & desktop).
   - Commit and push cleanly to `origin/main` and verify deployment/instructions.
