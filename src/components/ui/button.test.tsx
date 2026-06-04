import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "./button";

describe("Button Component", () => {
	it("should render correctly", () => {
		render(<Button>Click Me</Button>);
		const buttonElement = screen.getByText("Click Me");
		expect(buttonElement).toBeDefined();
		expect(buttonElement.tagName).toBe("BUTTON");
	});

	it("should apply default variants", () => {
		render(<Button>Default Button</Button>);
		const buttonElement = screen.getByText("Default Button");
		// Check for some default tailwind classes applied by CVA
		expect(buttonElement.className).toContain("bg-primary");
		expect(buttonElement.className).toContain("text-primary-foreground");
	});

	it("should apply custom class names", () => {
		render(<Button className="custom-class">Custom</Button>);
		const buttonElement = screen.getByText("Custom");
		expect(buttonElement.className).toContain("custom-class");
	});
});
