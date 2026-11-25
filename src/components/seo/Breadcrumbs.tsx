import { ChevronRight } from "lucide-react";
import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/seo/structured-data";

type BreadcrumbsProps = {
	items: readonly BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
	return (
		<nav aria-label="Breadcrumb" className="mb-6">
			<ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
				{items.map((item, index) => {
					const isLast = index === items.length - 1;
					return (
						<li key={item.path} className="flex items-center gap-1.5">
							{index > 0 ? (
								<ChevronRight
									className="h-3.5 w-3.5 shrink-0"
									aria-hidden="true"
								/>
							) : null}
							{isLast ? (
								<span
									className="font-medium text-foreground"
									aria-current="page"
								>
									{item.name}
								</span>
							) : (
								<Link
									href={item.path}
									className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
								>
									{item.name}
								</Link>
							)}
						</li>
					);
				})}
			</ol>
		</nav>
	);
}
