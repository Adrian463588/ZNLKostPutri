import { render, screen } from "@testing-library/react";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import { HeroSection } from "@/components/sections/HeroSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { siteConfig } from "@/config/site";
import robots from "./robots";
import sitemap from "./sitemap";

class MockIntersectionObserver implements IntersectionObserver {
	readonly root = null;
	readonly rootMargin = "";
	readonly thresholds = [];
	disconnect() {}
	observe() {}
	takeRecords(): IntersectionObserverEntry[] {
		return [];
	}
	unobserve() {}
}

beforeAll(() => {
	vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
});

afterAll(() => {
	vi.unstubAllGlobals();
});

describe("Metadata Routes (sitemap.xml & robots.txt)", () => {
	it("generates canonical indexable URLs in sitemap without anchors or fake dates", () => {
		const entries = sitemap();
		expect(entries).toHaveLength(12);
		for (const entry of entries) {
			expect(entry.url.startsWith(siteConfig.url)).toBe(true);
			expect(entry.url).not.toContain("#");
			expect(entry).not.toHaveProperty("lastModified");
			expect(entry).not.toHaveProperty("priority");
			expect(entry).not.toHaveProperty("changeFrequency");
		}
		expect(entries.map((e) => e.url)).toContain(`${siteConfig.url}/`);
		expect(entries.map((e) => e.url)).toContain(
			`${siteConfig.url}/lokasi/terban-gondokusuman`,
		);
	});

	it("generates robots.txt allowing all crawlers and pointing to production sitemap", () => {
		const config = robots();
		expect(config.rules).toEqual({ userAgent: "*", allow: "/" });
		expect(config.sitemap).toBe(`${siteConfig.url}/sitemap.xml`);
	});
});

describe("On-Page Local SEO & Conversion Smoke Tests", () => {
	it("renders HeroSection with single H1 targeting Terban, Gondokusuman, Yogyakarta", () => {
		render(<HeroSection />);
		const headings = screen.getAllByRole("heading", { level: 1 });
		expect(headings).toHaveLength(1);
		expect(headings[0].textContent).toContain("Terban");
		expect(headings[0].textContent).toContain("Gondokusuman");
		expect(headings[0].textContent).toContain("Yogyakarta");
	});

	it("renders LocationSection with consistent NAP, WhatsApp, and Google Maps links", () => {
		render(<LocationSection />);
		expect(screen.getAllByText(siteConfig.address).length).toBeGreaterThan(0);
		expect(screen.getByText(siteConfig.phoneDisplay)).toBeDefined();
		const mapsLink = screen.getByRole("link", {
			name: /Buka di Google Maps/i,
		});
		expect(mapsLink.getAttribute("href")).toBe(siteConfig.googleMapsUrl);
	});
});
