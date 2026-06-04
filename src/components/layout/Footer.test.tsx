import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { siteConfig } from "@/config/site";
import { Footer } from "./Footer";

describe("Footer Component", () => {
	it("renders the footer correctly", () => {
		render(<Footer />);
		expect(screen.getByRole("contentinfo")).toBeDefined();
	});

	it("displays the author attribution based on siteConfig", () => {
		render(<Footer />);
		const authorElement = screen.getByText(
			new RegExp(`Dibuat oleh ${siteConfig.author}`, "i"),
		);
		expect(authorElement).toBeDefined();
		expect(authorElement.className).toContain("text-sm");
		expect(authorElement.className).toContain("font-medium");
	});
});
