import { describe, expect, it } from "vitest";
import { createWhatsappUrl, siteConfig } from "./site";

describe("Site Configuration", () => {
	it("should have the correct location and name", () => {
		expect(siteConfig.name).toBe("ZNL Kost Putri");
		expect(siteConfig.location).toBe("Yogyakarta");
	});

	it("should correctly encode whatsapp message", () => {
		const phone = "6281234567890";
		const message = "Halo test message!";
		const url = createWhatsappUrl(phone, message);

		expect(url).toContain("https://wa.me/6281234567890");
		expect(url).toContain("text=Halo%20test%20message!");
	});
});
