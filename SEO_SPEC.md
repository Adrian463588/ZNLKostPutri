# SEO Specification — ZNL Kost Putri

- **Target**: `https://znlkostputri.edgeone.dev/`
- **Scope**: Technical SEO, Local SEO (Terban, Gondokusuman, Yogyakarta), On-Page SEO, JSON-LD, Social Metadata, Asset & Core Web Vitals Optimization, QA Smoke Tests.
- **Methodology**: SDD / BDD + KISS, YAGNI, DRY, Clean Code, Zero AI Slop.

## 1. Non-Negotiable Invariants

1. **Frontend-Only**: Zero backend APIs, databases, authentication, booking/payment logic, or paid SEO plugins.
2. **Truthful Content & Schema**: Zero fake reviews, ratings, prices, opening hours, room counts, distances, or verification tokens. Geo coordinates (`-7.7789672, 110.3739009`), address (`Terban GK V No.308, Terban, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55223`), and phone (`+62 821-9780-9087` / `6282197809087`) must match visible content and `siteConfig`.
3. **Single Source of Truth (DRY)**: All canonical URLs, NAP, WhatsApp, and Google Maps constants derive from `src/config/site.ts`.
4. **Real Imagery Only**: Social OG preview (`1200×630`) uses genuine property photography and brand logo; zero AI-generated property photos.
5. **Preserve Existing UX & Design**: Maintain existing minimalist warm-brown design system, sections order, and user conversion journeys (WhatsApp & Google Maps).

## 2. BDD Scenarios

### S1 — `sitemap.xml` Availability & Validity (P0)
- **Given** a Next.js App Router production build deployed on EdgeOne Pages
- **When** a crawler requests `GET /sitemap.xml`
- **Then** the server returns `HTTP 200` with XML content-type (`application/xml`), valid XML `<urlset>` containing only `<loc>https://znlkostputri.edgeone.dev/</loc>`, with no `#` fragments, no fake `lastmod`, no `priority`/`changefreq` bloat, and no HTML fallback.

### S2 — `robots.txt` Availability & Validity (P0)
- **Given** a Next.js App Router production build deployed on EdgeOne Pages
- **When** a crawler requests `GET /robots.txt`
- **Then** the server returns `HTTP 200` with `text/plain` content-type allowing `User-agent: *` (`Allow: /`) and referencing `Sitemap: https://znlkostputri.edgeone.dev/sitemap.xml`, without blocking CSS/JS/images or returning HTML.

### S3 — On-Page, Canonical & Local SEO (P0/P1)
- **Given** initial SSR HTML of `https://znlkostputri.edgeone.dev/`
- **When** parsed without JavaScript execution
- **Then**:
  - `<html lang="id">` is set;
  - `<title>` is `ZNL Kost Putri Terban, Gondokusuman, Yogyakarta`;
  - `<meta name="description">` matches the optimized local description;
  - `<link rel="canonical" href="https://znlkostputri.edgeone.dev/">` is present;
  - `<meta name="keywords">` is absent;
  - `<meta name="robots">` allows indexing (`index, follow`);
  - Exactly one visible `<h1>` (`Kost Putri di Terban, Gondokusuman, Yogyakarta`) and semantic `<h2>`/`<h3>` hierarchy appear directly in initial HTML (not trapped inside a hidden `<div hidden id="S:0">` streaming shell);
  - Consistent NAP (`ZNL Kost Putri`, `Terban GK V No.308, Terban, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55223`, `+62 821-9780-9087`) is visible in content and footer.

### S4 — Structured Data & Social Preview (P1)
- **Given** the rendered homepage HTML
- **When** inspecting metadata and `<script type="application/ld+json">`
- **Then** valid JSON-LD (`@graph` with `WebSite`, `WebPage`, `Accommodation` + `PostalAddress` + `GeoCoordinates` + verified `amenityFeature`) matches visible content, and Open Graph + Twitter/X Card tags reference `https://znlkostputri.edgeone.dev/og-image.jpg` (`1200×630`, HTTP 200).

### S5 — Performance, Responsive Layout & Accessibility (P0/P1/P2)
- **Given** the production build tested on headless Edge / Playwright / Lighthouse
- **When** tested across `320px`, `360px`, `375px`, `390px`, `768px`, `1024px`, `1440px`
- **Then** zero horizontal overflow occurs, all images load (`naturalWidth > 0`) as WebP with descriptive `alt`, hero LCP image loads eagerly with `fetchPriority="high"` and `opacity: 1`, `label-content-name-mismatch` is resolved, and Lighthouse mobile targets SEO `100`, Accessibility `>= 95`, Best Practices `>= 95`, Performance `>= 90` (LCP `<= 2.5s`, CLS `<= 0.1`).

### S6 — Search Console & Bing Verification Readiness (P2)
- **Given** optional `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` and `NEXT_PUBLIC_BING_SITE_VERIFICATION` env vars
- **When** unset, no fake verification meta tags are rendered; when set, valid verification meta tags render in `<head>`, and `public/` supports static HTML verification files.
