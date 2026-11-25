export type BudgetInputs = {
	kostRent: number;
	dailyFood: number;
	transport: number;
	electricity: number;
	internet: number;
	laundry: number;
	personalNeeds: number;
	reserveFund: number;
	monthlyBudget?: number;
};

export type BudgetLineItem = {
	key: keyof Omit<BudgetInputs, "monthlyBudget">;
	label: string;
	monthlyAmount: number;
	percentage: number;
};

export type BudgetCalculation = {
	monthlyTotal: number;
	semesterTotal: number;
	breakdown: readonly BudgetLineItem[];
	remainingBudget: number | null;
};

export function validateBudgetValue(raw: string): {
	value: number;
	error: string | null;
} {
	if (raw.trim() === "") {
		return { value: 0, error: null };
	}
	const parsed = Number(raw);
	if (Number.isNaN(parsed) || !Number.isFinite(parsed)) {
		return { value: 0, error: "Masukkan angka yang valid." };
	}
	if (parsed < 0) {
		return { value: 0, error: "Nilai tidak boleh negatif." };
	}
	return { value: Math.round(parsed), error: null };
}

export function calculateMonthlyBudget(
	inputs: BudgetInputs,
): BudgetCalculation {
	const monthlyFood = Math.max(0, inputs.dailyFood) * 30;
	const rawItems: Array<{
		key: BudgetLineItem["key"];
		label: string;
		monthlyAmount: number;
	}> = [
		{
			key: "kostRent",
			label: "Sewa kamar kost",
			monthlyAmount: Math.max(0, inputs.kostRent),
		},
		{
			key: "dailyFood",
			label: "Makan harian (× 30 hari)",
			monthlyAmount: monthlyFood,
		},
		{
			key: "transport",
			label: "Transportasi",
			monthlyAmount: Math.max(0, inputs.transport),
		},
		{
			key: "electricity",
			label: "Listrik & air tambahan",
			monthlyAmount: Math.max(0, inputs.electricity),
		},
		{
			key: "internet",
			label: "Internet / kuota data",
			monthlyAmount: Math.max(0, inputs.internet),
		},
		{
			key: "laundry",
			label: "Laundry",
			monthlyAmount: Math.max(0, inputs.laundry),
		},
		{
			key: "personalNeeds",
			label: "Kebutuhan pribadi",
			monthlyAmount: Math.max(0, inputs.personalNeeds),
		},
		{
			key: "reserveFund",
			label: "Dana cadangan",
			monthlyAmount: Math.max(0, inputs.reserveFund),
		},
	];

	const monthlyTotal = rawItems.reduce(
		(acc, item) => acc + item.monthlyAmount,
		0,
	);
	const semesterTotal = monthlyTotal * 6;

	const breakdown: BudgetLineItem[] = rawItems.map((item) => ({
		...item,
		percentage:
			monthlyTotal > 0
				? Math.round((item.monthlyAmount / monthlyTotal) * 100)
				: 0,
	}));

	const remainingBudget =
		inputs.monthlyBudget !== undefined && inputs.monthlyBudget > 0
			? Math.max(0, inputs.monthlyBudget) - monthlyTotal
			: null;

	return {
		monthlyTotal,
		semesterTotal,
		breakdown,
		remainingBudget,
	};
}

export function formatIdr(amount: number): string {
	return new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
		maximumFractionDigits: 0,
	}).format(amount);
}
