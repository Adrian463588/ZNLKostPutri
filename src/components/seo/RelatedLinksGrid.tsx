import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { resolveRelatedLinks } from "@/lib/seo/internal-links";

type RelatedLinksGridProps = {
	title?: string;
	slugs: readonly string[];
};

export function RelatedLinksGrid({
	title = "Bacaan & Informasi Terkait",
	slugs,
}: RelatedLinksGridProps) {
	const items = resolveRelatedLinks(slugs);
	if (items.length === 0) return null;

	return (
		<section
			aria-label={title}
			className="mt-12 border-t border-border/70 pt-10"
		>
			<h2 className="text-xl font-semibold text-foreground sm:text-2xl">
				{title}
			</h2>
			<div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{items.map((item) => (
					<Link
						key={item.href}
						href={item.href}
						className="group block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
					>
						<Card className="h-full border-border/70 bg-card transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md">
							<CardContent className="flex h-full flex-col justify-between gap-3 p-5">
								<div>
									<p className="text-xs font-semibold uppercase tracking-wider text-primary">
										{item.eyebrow}
									</p>
									<h3 className="mt-1.5 text-base font-semibold text-foreground group-hover:text-primary">
										{item.title}
									</h3>
									<p className="mt-2 text-xs leading-5 text-muted-foreground">
										{item.description}
									</p>
								</div>
								<span className="inline-flex items-center gap-1 text-xs font-medium text-primary">
									Lihat selengkapnya
									<ArrowRight
										className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
										aria-hidden="true"
									/>
								</span>
							</CardContent>
						</Card>
					</Link>
				))}
			</div>
		</section>
	);
}
