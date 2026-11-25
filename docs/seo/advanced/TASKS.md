# Advanced SEO Tasks — ZNL Kost Putri

## Phase A — Audit, Research & SDD Docs
- [x] Verify live EdgeOne deployment (`/`, `/sitemap.xml`, `/robots.txt`, `/404`, Playwright, Mobile Lighthouse)
- [x] Conduct public competitor & SERP intelligence research (Mamikos, Infokost, Rukita, Pinhome, Sewakost, Jogjakosku, Unycommunity)
- [x] Author `docs/seo/advanced/{SPEC,PLAN,TASKS,BASELINE_AUDIT,KEYWORD_RESEARCH,COMPETITOR_INTELLIGENCE,CONTENT_CLUSTER_MAP,CONTENT_QUALITY_POLICY}.md`

## Phase B — Source of Truth & SEO Data Layer
- [x] Create `src/types/seo.ts`
- [x] Create `src/data/property.ts` and `src/data/landmarks.ts` with explicit verification statuses
- [x] Sync `src/data/rooms.ts`, `src/data/facilities.ts`, `src/data/faqs.ts` (remove permanent `"Tersedia"` badge claim in `RoomPreviewSection.tsx`)
- [x] Create `src/data/seo/keyword-map.json`, `competitors.json`, `topic-clusters.json`

## Phase C — Controlled Programmatic SEO & Validation Engine
- [x] Create `src/content/locations.ts`, `src/content/campus-guides.ts`, `src/content/guides.ts`
- [x] Create `src/lib/seo/{metadata,structured-data,sitemap,internal-links,content-validator}.ts` and update `src/lib/seo.ts` + `src/app/sitemap.ts`
- [x] Create `scripts/seo-validate.mjs`, `scripts/seo-audit.mjs`, `scripts/seo-report.mjs` and add npm scripts + CI workflow steps

## Phase D — Routes, Components & Conversion/Performance Polish
- [x] Update `Header.tsx`, `MobileNav.tsx` (via `navLinks`), `Footer.tsx` for cross-route navigation & structured internal links
- [x] Optimize `HeroSection.tsx` mobile `sizes` and `LocationSection.tsx` with click-to-load `LocationMapEmbed.tsx`
- [x] Add `src/components/seo/*` and `src/components/tools/BudgetCalculator.tsx`
- [x] Implement routes: `/lokasi/terban-gondokusuman`, `/akses-kampus/[slug]`, `/panduan`, `/panduan/[slug]`, `/tools/kalkulator-anggaran-kost`, `/kebijakan-privasi`
- [x] Update Homepage with `ExploreHubSection.tsx` contextual cluster navigation hub

## Phase E — QA, Verification, Merge & Push
- [x] Add comprehensive Vitest unit/validator/calculator/schema tests (`26 passed` across 8 test files)
- [x] Run Biome, ESLint, TypeScript, Vitest, `npm run seo:validate`, `npm run build`, `npm run seo:audit`, Playwright multi-route/viewport audit (`320–1440px`), and Lighthouse Mobile & Desktop
- [x] Finalize `docs/seo/advanced/SEO_FINAL_REPORT.md`
- [ ] Commit & push `feat/advanced-seo`, merge cleanly into `main`, push `main`, and verify EdgeOne deployment
