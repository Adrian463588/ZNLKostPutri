import { Container } from "@/components/common/Container";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
	return (
		<div className="w-full min-h-screen bg-background">
			{/* Header Skeleton */}
			<header className="h-16 w-full border-b border-border/60 bg-white/95">
				<div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
					<div className="flex items-center gap-2">
						<Skeleton className="h-8 w-8 rounded-full" />
						<Skeleton className="h-4 w-32" />
					</div>
					<div className="hidden md:flex gap-6">
						{[1, 2, 3, 4, 5].map((i) => (
							<Skeleton key={i} className="h-4 w-16" />
						))}
					</div>
					<div className="hidden md:block">
						<Skeleton className="h-9 w-32 rounded-lg" />
					</div>
				</div>
			</header>

			{/* Hero Skeleton */}
			<section className="pt-24 pb-16 lg:pt-32">
				<Container>
					<div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
						<div className="flex flex-col gap-6 pt-10">
							<Skeleton className="h-6 w-48 rounded-md" />
							<Skeleton className="h-16 w-full max-w-lg rounded-md" />
							<Skeleton className="h-4 w-full max-w-md rounded-md" />
							<Skeleton className="h-4 w-3/4 max-w-md rounded-md" />
							<div className="flex gap-4 mt-4">
								<Skeleton className="h-12 w-48 rounded-lg" />
								<Skeleton className="h-12 w-40 rounded-lg" />
							</div>
						</div>
						<div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
							<Skeleton className="h-full w-full" />
						</div>
					</div>
				</Container>
			</section>
		</div>
	);
}
