"use client";

import { Container } from "@/components/common/Container";
import { MotionWrapper } from "@/components/common/MotionWrapper";
import { SectionHeading } from "@/components/common/SectionHeading";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";

export function FAQSection() {
	return (
		<section
			id="faq"
			className="py-20 lg:py-28 bg-secondary/30"
			aria-label="Pertanyaan umum tentang ZNL Kost Putri"
		>
			<Container>
				<MotionWrapper>
					<SectionHeading
						eyebrow="FAQ"
						title="Pertanyaan yang Sering Ditanyakan"
						description="Temukan jawaban atas pertanyaan umum tentang ZNL Kost Putri."
					/>
				</MotionWrapper>

				<MotionWrapper delay={0.1} className="mt-12 max-w-3xl mx-auto">
					<Accordion className="space-y-3">
						{faqs.map((faq, _index) => (
							<AccordionItem
								key={faq.question}
								value={faq.question}
								className="rounded-xl border border-border/60 bg-card px-6 shadow-sm open:border-primary/30 open:shadow-md transition-all duration-200"
							>
								<AccordionTrigger className="py-5 text-left text-sm font-semibold text-foreground hover:text-primary hover:no-underline">
									{faq.question}
								</AccordionTrigger>
								<AccordionContent className="pb-5 text-sm leading-7 text-muted-foreground">
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</MotionWrapper>
			</Container>
		</section>
	);
}
