import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { siteConfig } from "@/config/site";
import { Footer } from "./Footer";

describe("Footer Component", () => {
	it("renders the footer correctly", () => {
		render(<Footer />);
		expect(screen.getByRole("contentinfo")).toBeDefined();
	});

	it("displays the author attribution based on siteConfig with correct link", () => {
		render(<Footer />);
		const authorElement = screen.getByRole("link", {
			name: `LinkedIn ${siteConfig.author}`,
		});

		expect(authorElement).toBeDefined();
		expect(authorElement.getAttribute("href")).toBe(siteConfig.authorUrl);
		expect(authorElement.getAttribute("target")).toBe("_blank");
		expect(authorElement.getAttribute("rel")).toContain("noopener");
		expect(authorElement.className).toContain("text-sm");
		expect(authorElement.className).toContain("font-medium");
	});
});
