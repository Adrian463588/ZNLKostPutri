import { cn } from "@/lib/utils";

type SectionHeadingProps = {
	eyebrow?: string;
	title: string;
	description?: string;
	className?: string;
	align?: "center" | "left";
};

export function SectionHeading({
	eyebrow,
	title,
	description,
	className,
	align = "center",
}: SectionHeadingProps) {
	return (
		<div
			className={cn(
				"max-w-2xl",
				align === "center" && "mx-auto text-center",
				className,
			)}
		>
			{eyebrow ? (
				<p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
					{eyebrow}
				</p>
			) : null}
			<h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
				{title}
			</h2>
			{description ? (
				<p className="mt-4 text-base leading-7 text-muted-foreground">
					{description}
				</p>
			) : null}
		</div>
	);
}
