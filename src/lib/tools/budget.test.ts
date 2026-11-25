import { describe, expect, it } from "vitest";
import {
	calculateMonthlyBudget,
	formatIdr,
	validateBudgetValue,
} from "@/lib/tools/budget";

describe("Student kost budget calculator helpers", () => {
	it("validates numeric strings cleanly and rejects negatives or non-numbers", () => {
		expect(validateBudgetValue("")).toEqual({ value: 0, error: null });
		expect(validateBudgetValue("750000")).toEqual({
			value: 750000,
			error: null,
		});
		expect(validateBudgetValue("-5000")).toEqual({
			value: 0,
			error: "Nilai tidak boleh negatif.",
		});
		expect(validateBudgetValue("abc")).toEqual({
			value: 0,
			error: "Masukkan angka yang valid.",
		});
	});

	it("calculates monthly, semester (6x), breakdown percentages, and budget delta", () => {
		const result = calculateMonthlyBudget({
			kostRent: 800000,
			dailyFood: 30000, // 900,000 / month
			transport: 100000,
			electricity: 50000,
			internet: 100000,
			laundry: 50000,
			personalNeeds: 0,
			reserveFund: 0,
			monthlyBudget: 2500000,
		});

		expect(result.monthlyTotal).toBe(2000000);
		expect(result.semesterTotal).toBe(12000000);
		expect(result.remainingBudget).toBe(500000);

		const rentLine = result.breakdown.find((item) => item.key === "kostRent");
		const foodLine = result.breakdown.find((item) => item.key === "dailyFood");
		expect(rentLine?.percentage).toBe(40);
		expect(foodLine?.monthlyAmount).toBe(900000);
		expect(foodLine?.percentage).toBe(45);
	});

	it("returns null remainingBudget when optional monthly budget is omitted", () => {
		const result = calculateMonthlyBudget({
			kostRent: 700000,
			dailyFood: 25000,
			transport: 0,
			electricity: 0,
			internet: 0,
			laundry: 0,
			personalNeeds: 0,
			reserveFund: 0,
		});

		expect(result.remainingBudget).toBeNull();
	});

	it("formats currency in Indonesian Rupiah", () => {
		expect(formatIdr(1500000)).toContain("1.500.000");
	});
});
