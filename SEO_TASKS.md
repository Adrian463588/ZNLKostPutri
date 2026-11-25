# SEO Implementation Tasks — ZNL Kost Putri

## P0 — Critical Technical SEO & LCP
- [x] Audit repository, production endpoints, Playwright DOM, and Lighthouse baseline
- [x] Write `SEO_AUDIT_REPORT.md`, `SEO_SPEC.md`, `SEO_PLAN.md`, `SEO_TASKS.md`
- [x] Create `src/app/sitemap.ts` returning valid XML for `https://znlkostputri.edgeone.dev/`
- [x] Create `src/app/robots.ts` returning valid `text/plain` with `Sitemap:` directive
- [x] Add `metadataBase` and `alternates.canonical` (`https://znlkostputri.edgeone.dev/`) in `src/app/layout.tsx`
- [x] Remove `src/app/loading.tsx` suspense skeleton blocker and convert `HeroSection.tsx` to immediate SSR paint (`opacity: 1`, `decoding="sync"`, `fetchPriority="high"`, `loading="eager"`)

## P1 — High Priority On-Page, Local SEO, Schema, Social & Assets
- [x] Update `src/config/site.ts` with canonical URL, formatted NAP (`+62 821-9780-9087`), `postalAddress`, `geo`, and OG image config
- [x] Update `src/app/layout.tsx` title, description, Open Graph, Twitter Card, `robots.googleBot`, optional GSC/Bing env verification, and remove deprecated `keywords`
- [x] Optimize property images to WebP with descriptive filenames and generate real-photo `public/og-image.jpg` (`1200×630`) + optimized app icons (`src/app/icon.png`, `src/app/apple-icon.png`, `src/app/favicon.ico`)
- [x] Implement `src/lib/seo.ts` and render `WebSite` + `WebPage` + `Accommodation` JSON-LD in `src/app/page.tsx`
- [x] Optimize local copy & NAP across `HeroSection`, `AboutSection`, `FacilitiesSection`, `LocationSection`, `FAQSection`, and `data/*` targeting Terban & Gondokusuman naturally
- [x] Fix `+8px` mobile horizontal overflow in `AboutSection.tsx`
- [x] Update `<video poster>` to lightweight 16:9 WebP (`/images/video-poster-kamar.webp`) and `preload="none"` in `RoomPreviewSection.tsx`

## P2 — Accessibility, Code Quality & Testing
- [x] Fix Lighthouse `label-content-name-mismatch` on `Footer.tsx` and `CTASection.tsx` links and add visible NAP telephone
- [x] Fix ESLint `_index` warning in `FAQSection.tsx`
- [x] Add `poweredByHeader: false`, image formats, and security headers in `next.config.ts`
- [x] Add Vitest unit/smoke tests for `sitemap`, `robots`, JSON-LD, and SEO config (`src/lib/seo.test.ts`, `src/app/metadata-routes.test.tsx`)
- [x] Run Biome, ESLint, TypeScript, Vitest, `next build`, Playwright responsive/SEO smoke check, and Lighthouse (mobile & desktop) on local production server

## P3 — Git & Post-Deploy Search Console
- [ ] Commit & push changes to GitHub (`origin/main`)
- [ ] Verify production EdgeOne deployment (`curl.exe`, Playwright, Lighthouse) once EdgeOne Pages completes build from `main`
- [ ] Verify Google Search Console (URL Prefix `https://znlkostputri.edgeone.dev/`) and submit `sitemap.xml` (Requires owner account)
- [ ] Import/Verify Bing Webmaster Tools and verify Google Business Profile eligibility (Requires owner account)
