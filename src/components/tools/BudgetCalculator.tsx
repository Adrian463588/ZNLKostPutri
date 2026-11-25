"use client";

import { Calculator, RotateCcw, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	type BudgetInputs,
	calculateMonthlyBudget,
	formatIdr,
	validateBudgetValue,
} from "@/lib/tools/budget";

type FieldConfig = {
	key: keyof BudgetInputs;
	label: string;
	hint: string;
	placeholder: string;
};

const fields: readonly FieldConfig[] = [
	{
		key: "kostRent",
		label: "Biaya kost per bulan (Rp)",
		hint: "Isi sesuai target anggaran sewa kamar Anda (bukan tarif resmi ZNL).",
		placeholder: "Contoh: 750000",
	},
	{
		key: "dailyFood",
		label: "Biaya makan harian (Rp / hari)",
		hint: "Otomatis dikalikan 30 hari untuk simulasi pengeluaran makan bulanan.",
		placeholder: "Contoh: 35000",
	},
	{
		key: "transport",
		label: "Biaya transportasi per bulan (Rp)",
		hint: "Bensin motor, parkir kampus, atau transportasi daring.",
		placeholder: "Contoh: 150000",
	},
	{
		key: "electricity",
		label: "Biaya listrik & air tambahan per bulan (Rp)",
		hint: "Isi 0 jika sudah termasuk di sewa kost Anda.",
		placeholder: "Contoh: 50000",
	},
	{
		key: "internet",
		label: "Biaya internet / kuota per bulan (Rp)",
		hint: "Paket data seluler atau langganan internet pribadi.",
		placeholder: "Contoh: 100000",
	},
	{
		key: "laundry",
		label: "Biaya laundry per bulan (Rp)",
		hint: "Isi 0 jika mencuci sendiri.",
		placeholder: "Contoh: 80000",
	},
	{
		key: "personalNeeds",
		label: "Kebutuhan pribadi & tugas kuliah (Rp)",
		hint: "Alat mandi, perlengkapan kamar, cetak tugas.",
		placeholder: "Contoh: 200000",
	},
	{
		key: "reserveFund",
		label: "Dana cadangan bulanan (Rp)",
		hint: "Cadangan kesehatan atau kebutuhan tak terduga.",
		placeholder: "Contoh: 150000",
	},
	{
		key: "monthlyBudget",
		label: "Anggaran / uang saku bulanan Anda (Rp — opsional)",
		hint: "Isi jika ingin menghitung sisa atau kekurangan dana tiap bulan.",
		placeholder: "Contoh: 2500000",
	},
];

const emptyRawValues: Record<keyof BudgetInputs, string> = {
	kostRent: "",
	dailyFood: "",
	transport: "",
	electricity: "",
	internet: "",
	laundry: "",
	personalNeeds: "",
	reserveFund: "",
	monthlyBudget: "",
};

const sampleRawValues: Record<keyof BudgetInputs, string> = {
	kostRent: "750000",
	dailyFood: "35000",
	transport: "150000",
	electricity: "50000",
	internet: "100000",
	laundry: "80000",
	personalNeeds: "200000",
	reserveFund: "150000",
	monthlyBudget: "2800000",
};

export function BudgetCalculator() {
	const [rawValues, setRawValues] =
		useState<Record<keyof BudgetInputs, string>>(emptyRawValues);
	const [errors, setErrors] = useState<
		Partial<Record<keyof BudgetInputs, string>>
	>({});

	const numericInputs: BudgetInputs = {
		kostRent: validateBudgetValue(rawValues.kostRent).value,
		dailyFood: validateBudgetValue(rawValues.dailyFood).value,
		transport: validateBudgetValue(rawValues.transport).value,
		electricity: validateBudgetValue(rawValues.electricity).value,
		internet: validateBudgetValue(rawValues.internet).value,
		laundry: validateBudgetValue(rawValues.laundry).value,
		personalNeeds: validateBudgetValue(rawValues.personalNeeds).value,
		reserveFund: validateBudgetValue(rawValues.reserveFund).value,
		monthlyBudget: rawValues.monthlyBudget
			? validateBudgetValue(rawValues.monthlyBudget).value
			: undefined,
	};

	const result = calculateMonthlyBudget(numericInputs);

	function handleChange(key: keyof BudgetInputs, nextValue: string) {
		setRawValues((prev) => ({ ...prev, [key]: nextValue }));
		const check = validateBudgetValue(nextValue);
		setErrors((prev) => ({
			...prev,
			[key]: check.error ?? undefined,
		}));
	}

	function handleReset() {
		setRawValues(emptyRawValues);
		setErrors({});
	}

	function handleLoadSample() {
		setRawValues(sampleRawValues);
		setErrors({});
	}

	return (
		<div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
			{/* Form inputs */}
			<Card className="border-border/70 bg-card shadow-sm lg:col-span-7">
				<CardContent className="p-6 sm:p-8">
					<div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-5">
						<div className="flex items-center gap-2.5">
							<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
								<Calculator className="h-5 w-5" aria-hidden="true" />
							</div>
							<div>
								<h2 className="text-lg font-semibold text-foreground">
									Input Simulasi Bulanan
								</h2>
								<p className="text-xs text-muted-foreground">
									Isi nominal Rupiah tanpa titik/koma (contoh: 750000).
								</p>
							</div>
						</div>
						<div className="flex flex-wrap gap-2">
							<Button
								type="button"
								variant="outline"
								size="sm"
								onClick={handleLoadSample}
								className="min-h-[44px] px-3"
							>
								Isi Contoh Simulasi
							</Button>
							<Button
								type="button"
								variant="ghost"
								size="sm"
								onClick={handleReset}
								className="min-h-[44px] gap-1.5 px-3"
							>
								<RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
								Reset
							</Button>
						</div>
					</div>

					<form
						className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2"
						onSubmit={(e) => e.preventDefault()}
						noValidate
					>
						{fields.map((field) => {
							const inputId = `calc-${field.key}`;
							const hintId = `${inputId}-hint`;
							const errorId = `${inputId}-error`;
							const fieldError = errors[field.key];
							const isBudgetField = field.key === "monthlyBudget";

							return (
								<div
									key={field.key}
									className={isBudgetField ? "sm:col-span-2" : undefined}
								>
									<label
										htmlFor={inputId}
										className="block text-sm font-medium text-foreground"
									>
										{field.label}
									</label>
									<input
										id={inputId}
										type="number"
										inputMode="numeric"
										min={0}
										step={1000}
										value={rawValues[field.key]}
										placeholder={field.placeholder}
										onChange={(e) => handleChange(field.key, e.target.value)}
										aria-describedby={
											fieldError ? `${hintId} ${errorId}` : hintId
										}
										aria-invalid={Boolean(fieldError)}
										className="mt-1.5 block min-h-[44px] w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring aria-invalid:border-destructive"
									/>
									<p id={hintId} className="mt-1 text-xs text-muted-foreground">
										{field.hint}
									</p>
									{fieldError ? (
										<p
											id={errorId}
											role="alert"
											className="mt-1 text-xs font-medium text-destructive"
										>
											{fieldError}
										</p>
									) : null}
								</div>
							);
						})}
					</form>
				</CardContent>
			</Card>

			{/* Summary Panel */}
			<div className="space-y-6 lg:col-span-5">
				<Card className="border-primary/30 bg-card shadow-md">
					<CardContent className="p-6 sm:p-8">
						<p className="text-xs font-semibold uppercase tracking-wider text-primary">
							Hasil Perhitungan Estimasi
						</p>
						<div className="mt-4 space-y-4">
							<div className="rounded-xl bg-secondary/50 p-4">
								<p className="text-xs text-muted-foreground">
									Total Kebutuhan Bulanan
								</p>
								<p
									className="mt-1 text-2xl font-bold text-foreground sm:text-3xl"
									aria-live="polite"
								>
									{formatIdr(result.monthlyTotal)}
								</p>
							</div>

							<div className="rounded-xl border border-border/70 p-4">
								<p className="text-xs text-muted-foreground">
									Estimasi Per Semester (6 Bulan)
								</p>
								<p className="mt-1 text-xl font-semibold text-foreground">
									{formatIdr(result.semesterTotal)}
								</p>
							</div>

							{result.remainingBudget !== null ? (
								<div
									className={`rounded-xl border p-4 ${
										result.remainingBudget >= 0
											? "border-primary/30 bg-primary/5"
											: "border-destructive/40 bg-destructive/5"
									}`}
								>
									<p className="text-xs text-muted-foreground">
										{result.remainingBudget >= 0
											? "Estimasi Sisa Anggaran Bulanan"
											: "Estimasi Kekurangan Anggaran Bulanan"}
									</p>
									<p
										className={`mt-1 text-xl font-semibold ${
											result.remainingBudget >= 0
												? "text-primary"
												: "text-destructive"
										}`}
									>
										{formatIdr(Math.abs(result.remainingBudget))}
									</p>
								</div>
							) : null}
						</div>

						{/* Breakdown table */}
						<div className="mt-6 border-t border-border/60 pt-5">
							<h3 className="text-sm font-semibold text-foreground">
								Rincian per Kategori
							</h3>
							<ul className="mt-3 space-y-2.5 text-sm">
								{result.breakdown.map((row) => (
									<li
										key={row.key}
										className="flex items-center justify-between gap-2 text-xs sm:text-sm"
									>
										<span className="text-muted-foreground">{row.label}</span>
										<span className="font-medium text-foreground">
											{formatIdr(row.monthlyAmount)}{" "}
											<span className="text-xs text-muted-foreground">
												({row.percentage}%)
											</span>
										</span>
									</li>
								))}
							</ul>
						</div>

						<div className="mt-6 flex items-start gap-2.5 rounded-xl bg-secondary/40 p-3.5 text-xs leading-5 text-muted-foreground">
							<ShieldCheck
								className="mt-0.5 h-4 w-4 shrink-0 text-primary"
								aria-hidden="true"
							/>
							<p>
								Simulasi ini diproses 100% di browser Anda tanpa mengirim data
								ke server. Angka simulasi bukan merupakan harga resmi ZNL Kost
								Putri.
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
