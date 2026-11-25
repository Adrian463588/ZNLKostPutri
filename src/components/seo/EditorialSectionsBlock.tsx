import type { ContentSection, FaqItem } from "@/types/seo";

type EditorialSectionsBlockProps = {
	sections: readonly ContentSection[];
	faqs?: readonly FaqItem[];
	faqAriaLabel?: string;
};

export function EditorialSectionsBlock({
	sections,
	faqs,
	faqAriaLabel = "Pertanyaan yang sering ditanyakan",
}: EditorialSectionsBlockProps) {
	return (
		<>
			<div className="mt-10 space-y-8">
				{sections.map((section) => (
					<section key={section.heading} className="space-y-3">
						<h2 className="text-xl font-semibold text-foreground sm:text-2xl">
							{section.heading}
						</h2>
						{section.paragraphs.map((paragraph) => (
							<p
								key={paragraph}
								className="text-base leading-7 text-muted-foreground"
							>
								{paragraph}
							</p>
						))}
						{section.bullets && section.bullets.length > 0 ? (
							<ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground sm:text-base">
								{section.bullets.map((bullet) => (
									<li key={bullet}>{bullet}</li>
								))}
							</ul>
						) : null}
					</section>
				))}
			</div>

			{faqs && faqs.length > 0 ? (
				<section
					aria-label={faqAriaLabel}
					className="mt-12 rounded-2xl border border-border/70 bg-secondary/30 p-6 sm:p-8"
				>
					<h2 className="text-xl font-semibold text-foreground sm:text-2xl">
						Pertanyaan yang Sering Ditanyakan
					</h2>
					<div className="mt-5 space-y-5">
						{faqs.map((faq) => (
							<div key={faq.question} className="space-y-1.5">
								<h3 className="text-base font-semibold text-foreground">
									{faq.question}
								</h3>
								<p className="text-sm leading-6 text-muted-foreground">
									{faq.answer}
								</p>
							</div>
						))}
					</div>
				</section>
			) : null}
		</>
	);
}
