import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ConversionBanner } from "@/components/seo/ConversionBanner";
import { siteConfig } from "@/config/site";

describe("ConversionBanner", () => {
	it("renders concise CTA heading, description, and accurate contact details", () => {
		render(<ConversionBanner />);

		expect(
			screen.getByRole("heading", {
				level: 2,
				name: "Tertarik untuk Sewa Kamar?",
			}),
		).toBeDefined();

		expect(
			screen.getByText(
				"Hubungi Ibu Kost untuk informasi ketersediaan kamar, harga, atau jadwal survei langsung.",
			),
		).toBeDefined();

		expect(
			screen.getByText(
				new RegExp(siteConfig.streetAddress.replace(".", "\\.")),
			),
		).toBeDefined();
		expect(
			screen.getByText(new RegExp(siteConfig.phoneDisplay.replace("+", "\\+"))),
		).toBeDefined();
	});

	it("renders proportional primary WhatsApp CTA and secondary Google Maps CTA with safe external links", () => {
		render(<ConversionBanner />);

		const whatsappLink = screen.getByRole("link", {
			name: /Hubungi via WhatsApp/i,
		});
		expect(whatsappLink.getAttribute("href")).toContain(
			`https://wa.me/${siteConfig.whatsappNumber}`,
		);
		expect(whatsappLink.getAttribute("rel")).toBe("noopener noreferrer");

		const mapsLink = screen.getByRole("link", {
			name: /Lihat Lokasi/i,
		});
		expect(mapsLink.getAttribute("href")).toBe(siteConfig.googleMapsUrl);
		expect(mapsLink.getAttribute("rel")).toBe("noopener noreferrer");
	});

	it("supports custom props without duplicating contact clutter", () => {
		render(
			<ConversionBanner
				title="Tanya Ketersediaan Kamar"
				description="Hubungi kami untuk jadwal survei."
				primaryLabel="Chat WhatsApp"
			/>,
		);

		expect(
			screen.getByRole("heading", {
				level: 2,
				name: "Tanya Ketersediaan Kamar",
			}),
		).toBeDefined();
		expect(screen.getByRole("link", { name: /Chat WhatsApp/i })).toBeDefined();
	});
});
