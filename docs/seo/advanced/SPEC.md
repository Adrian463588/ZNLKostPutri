# Advanced SEO Specification — ZNL Kost Putri Yogyakarta

## 1. Constitution & Core Invariants

1. **White Hat Only**: Strict compliance with Google Search Essentials Spam Policies, People-First Content, and Helpful Content guidelines. Zero doorway pages, zero cloaking, zero keyword stuffing, zero scaled thin content, zero competitor impersonation.
2. **Verified Source of Truth**: Every business fact (identity, address, coordinates, phone, facilities, house rules, gallery, video) originates from `src/data/property.ts` and `src/data/landmarks.ts` with explicit verification status (`verified`, `pending-verification`, `unknown`, `outdated`).
3. **Unknown Never Fabricated**:
   - Room pricing is `unknown` -> render "Tanya Harga Sewa via WhatsApp" CTA.
   - Live room availability is `unknown` -> render "Tanya Ketersediaan Kamar" CTA (never display a permanent "Tersedia" badge).
   - Point-to-point campus travel durations are `pending-verification` -> direct users to Google Maps live routing (`https://maps.app.goo.gl/3JgijFKAbBEWSSF47`) without inventing travel minutes or distances.
   - Unverified amenities (`Wi-Fi`, `AC`, `kamar mandi dalam`, `bebas jam malam 24 jam`) must never be claimed.
4. **Frontend-Only Architecture**: Next.js 16 App Router SSG deployed on Tencent EdgeOne Pages (`https://znlkostputri.edgeone.dev/`). No backend, database, auth, or third-party tracking that captures personal phone numbers or chat content.
5. **Preserve Design & UX**: Maintain existing warm cream/brown design system, typography, mobile-first accessibility (WCAG 2.2 AA), and real kost photography/video.

## 2. BDD Acceptance Scenarios

### BDD-01: Hyperlocal & Campus Proximity Discovery
- **Given** verified property data for Terban GK V No.308, Gondokusuman (`-7.7789672, 110.3739009`)
- **When** a user visits `/lokasi/terban-gondokusuman`, `/akses-kampus/ugm`, or `/akses-kampus/uny`
- **Then** the page renders HTTP 200 SSR HTML with unique title, meta description, canonical URL, `BreadcrumbList` + `Accommodation` reference (`#accommodation`), verified facilities, factual neighborhood/corridor tables, independent-housing disclosure, and working WhatsApp/Maps CTAs.

### BDD-02: Ethical Alternative & Informational Guides
- **Given** searchers looking for `"alternatif mencari kost selain mamikos"` or student cost/survey guidance
- **When** visiting `/panduan` and `/panduan/[slug]`
- **Then** each guide provides substantial, people-first guidance across real methods (marketplaces, Google Maps, direct owner sites, community referrals, on-site survey), explicitly discloses publisher identity (`ZNL Kost Putri`), and avoids unsubstantiated superiority claims.

### BDD-03: Controlled Programmatic SEO & Quality Gate
- **Given** `SeoContent` records and `content-validator.ts`
- **When** `npm run seo:validate` or Vitest runs
- **Then** only `status: "published"` and `indexable: true` routes enter `sitemap.xml`; duplicate slugs/titles, missing `sources`/`reviewedAt`, broken internal links/images, fake schema fields, or banned hype terms fail validation before build/deploy.

### BDD-04: Interactive Budget Calculator (Privacy by Design)
- **Given** `/tools/kalkulator-anggaran-kost`
- **When** a student inputs monthly boarding costs (kost, food, transport, electricity, internet, laundry, personal needs, reserve fund) and optional budget
- **Then** client-side logic rejects negative values, calculates monthly and 6-month semester totals + remaining balance without any network call or personal data collection, and clearly states estimation assumptions.

### BDD-05: Technical SEO, Performance & Error Handling
- **Given** production build on Next.js / EdgeOne Pages
- **When** requesting valid routes, `/sitemap.xml`, `/robots.txt`, and unknown routes
- **Then** valid routes return HTTP 200 with canonical + JSON-LD + `0px` mobile horizontal overflow (`320–1440px`), `/sitemap.xml` includes only published indexable URLs, unknown dynamic slugs return HTTP 404 (no soft 404), and Lighthouse meets Performance `>= 90` (Desktop) / improved Mobile LCP (`<= 2.5s` target) with click-to-load Maps embed.
