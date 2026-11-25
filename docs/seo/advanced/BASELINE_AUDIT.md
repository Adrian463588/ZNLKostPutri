# Baseline Audit — ZNL Kost Putri (Pre-Advanced SEO Sprint)

- **Target**: `https://znlkostputri.edgeone.dev/`
- **Date**: 2026-11-26
- **Commit Baseline**: `b3a351e` (Deployed on EdgeOne Makers, `Last-Modified: Wed, 25 Nov 2026 17:55:16 GMT`)

## 1. Production Endpoint Verification

| Endpoint | HTTP Status | Content-Type | Notes |
|---|---:|---|---|
| `/` | `200 OK` | `text/html` | Indexable, `canonical` valid, JSON-LD `@graph` (`WebSite`, `WebPage`, `Accommodation`), H1 `"Kost Putri di Terban, Gondokusuman, Yogyakarta"`. |
| `/sitemap.xml` | `200 OK` | `application/xml` | Valid single-URL XML (`168 B`). |
| `/robots.txt` | `200 OK` | `text/plain;charset=utf-8` | Valid `Allow: /` + Sitemap pointer (`78 B`). |
| `/halaman-tidak-ada-test-404` | `404 Not Found` | `text/html` | Proper HTTP 404 (no SPA soft 404). |

## 2. Production Lighthouse Mobile Baseline (Commit `b3a351e`)

- **Scores**: Performance `83`, Accessibility `100`, Best Practices `100`, SEO `100`
- **Metrics**: FCP `1.2 s`, LCP `4.0 s`, TBT `240 ms`, CLS `0`, Speed Index `2.5 s`, Interactive `4.1 s`
- **Remaining Performance Opportunities**:
  - Hero `<img>` mobile `sizes` caused EdgeOne to request `750w` thumbnail for a `382px` wide source photo.
  - Embedded Google Maps `<iframe>` fetches third-party `maps.googleapis.com` assets during page audit; switching to click-to-load embed prevents initial third-party load.
- **Core Web Vitals Field Data (p75 CrUX)**: `insufficient data` (low traffic volume).

## 3. Production Playwright DOM & Responsive Check

- **Console Errors**: `0`
- **Failed Internal Requests**: `0`
- **Mobile Overflow (`320–1440px`)**: `0px` (`overflowX: false` across all 7 breakpoints).
- **WhatsApp Links**: 6 valid links (`wa.me/6282197809087`).
- **Google Maps Links**: 4 valid links (`maps.app.goo.gl/3JgijFKAbBEWSSF47`).

## 4. Strategic SEO Gaps Identified

1. **Single-Page Ceiling**: Only `/` exists; dedicated search intents (`Terban/Gondokusuman`, `dekat UGM`, `dekat UNY`, `alternatif Mamikos`, `checklist survei`, `anggaran kost`, `anti-penipuan`) lack dedicated landing/guide pages.
2. **Source-of-Truth Verification Tracking**: Need explicit verification status (`verified` / `unknown` / `pending-verification`) for pricing, live availability, and campus travel estimates; existing `"Tersedia"` badge on room card should be replaced until live status tracking exists.
3. **Interactive Utility & Topical Authority**: Missing student budget calculator tool and interconnected topic clusters with automated quality/build gates.
