import {
	BedDouble,
	Building2,
	Eye,
	Leaf,
	Lock,
	type LucideIcon,
	MapPin,
	ParkingCircle,
	ShieldCheck,
	ShowerHead,
	UtensilsCrossed,
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { MotionWrapper } from "@/components/common/MotionWrapper";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { facilities } from "@/data/facilities";

const iconMap: Record<string, LucideIcon> = {
	ShieldCheck,
	BedDouble,
	ShowerHead,
	MapPin,
	Leaf,
	ParkingCircle,
	Lock,
	UtensilsCrossed,
	Building2,
	Eye,
};

export function FacilitiesSection() {
	return (
		<section
			id="fasilitas"
			className="py-20 lg:py-28 bg-secondary/30"
			aria-label="Fasilitas ZNL Kost Putri"
		>
			<Container>
				<MotionWrapper>
					<SectionHeading
						eyebrow="Fasilitas"
						title="Apa yang Kami Tawarkan"
						description="ZNL Kost Putri dilengkapi dengan berbagai fasilitas untuk kenyamanan dan keamanan penghuni."
					/>
				</MotionWrapper>

				<div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
					{facilities.map((facility, index) => {
						const Icon = iconMap[facility.iconName];
						return (
							<MotionWrapper key={facility.title} delay={index * 0.05}>
								<Card className="group h-full border-border/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg cursor-default">
									<CardContent className="flex flex-col gap-3 p-5">
										<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
											{Icon ? (
												<Icon className="h-5 w-5" aria-hidden="true" />
											) : null}
										</div>
										<div>
											<h3 className="text-sm font-semibold text-foreground">
												{facility.title}
											</h3>
											<p className="mt-1.5 text-xs leading-5 text-muted-foreground">
												{facility.description}
											</p>
										</div>
									</CardContent>
								</Card>
							</MotionWrapper>
						);
					})}
				</div>
			</Container>
		</section>
	);
}
