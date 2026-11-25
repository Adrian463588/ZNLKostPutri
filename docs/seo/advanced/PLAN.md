# Advanced SEO Implementation Plan — ZNL Kost Putri

## 1. Architecture Overview

```text
src/data/property.ts + src/data/landmarks.ts + src/data/seo/*.json
   │
   ▼
src/content/{locations,campus-guides,guides}.ts  (Typed SeoContent records)
   │
   ▼
src/lib/seo/{content-validator,metadata,structured-data,sitemap,internal-links}.ts
   │
   ├─► Static App Router Pages (SSG):
   │     ├── /
   │     ├── /lokasi/terban-gondokusuman
   │     ├── /akses-kampus/[slug]  (ugm, uny)
   │     ├── /panduan              (Hub)
   │     ├── /panduan/[slug]       (5 editorial guides)
   │     ├── /tools/kalkulator-anggaran-kost
   │     └── /kebijakan-privasi
   │
   └─► Build & CI Quality Gate:
         ├── Vitest (Unit + Validator + Schema + Route Tests)
         ├── scripts/seo-validate.mjs (Data, Links, Slug, Policy Gate)
         ├── scripts/seo-audit.mjs (Built HTML, Canonical, H1, JSON-LD, Sitemap, Robots)
         └── scripts/seo-report.mjs (Markdown summary output)
```

## 2. File-by-File Plan

1. **Docs (`docs/seo/advanced/*`)**: Baseline audit, keyword research, competitor intelligence, cluster map, quality policy, spec, plan, tasks, final report.
2. **Source of Truth (`src/data/property.ts`, `src/data/landmarks.ts`, `src/data/seo/*.json`)**: Verification-tagged property & geographic entity records, keyword map, competitor intelligence JSON, topic clusters JSON.
3. **Types & Content (`src/types/seo.ts`, `src/content/*`)**: Strongly typed hyperlocal location, campus proximity guides, and 5 people-first editorial/alternative/comparison guides.
4. **SEO Engine (`src/lib/seo/*`, `src/lib/seo.ts`)**: Dynamic metadata factory, multi-schema JSON-LD generator with shared `#accommodation` & `#website` entity IDs, filtered sitemap builder, contextual internal links resolver, and build-time validator.
5. **UI Components & Routes**:
   - Shared SEO components: `Breadcrumbs`, `JsonLdScript`, `ConversionBanner`, `RelatedLinksGrid`, `ContentArticleView`.
   - Click-to-load `LocationMapEmbed` reducing initial mobile third-party Maps load.
   - `BudgetCalculator` client tool on `/tools/kalkulator-anggaran-kost`.
   - Updated `Header`, `MobileNav`, `Footer`, `RoomPreviewSection`, `HeroSection`, `LocationSection`, and Homepage hub links.
   - App Router pages with `generateStaticParams` + `dynamicParams = false` for clean 404 handling.
6. **Automation & CI (`scripts/seo-*.mjs`, `package.json`, `.github/workflows/ci.yml`)**: Automated Node 20+ validation & post-build HTML SEO audit integrated into CI.
