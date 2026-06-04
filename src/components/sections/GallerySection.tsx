import Image from "next/image";
import { Container } from "@/components/common/Container";
import { MotionWrapper } from "@/components/common/MotionWrapper";
import { SectionHeading } from "@/components/common/SectionHeading";
import { galleryImages } from "@/data/gallery";

export function GallerySection() {
	return (
		<section
			id="galeri"
			className="py-20 lg:py-28 bg-secondary/30"
			aria-label="Galeri ZNL Kost Putri"
		>
			<Container>
				<MotionWrapper>
					<SectionHeading
						eyebrow="Galeri"
						title="Lihat Lebih Dekat"
						description="Foto-foto asli ZNL Kost Putri untuk membantu Anda mengenal hunian kami lebih baik."
					/>
				</MotionWrapper>

				<div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{galleryImages.map((image, index) => (
						<MotionWrapper key={image.src} delay={index * 0.08}>
							<div className="group relative aspect-square w-full overflow-hidden rounded-xl shadow-md ring-1 ring-border/40 cursor-pointer">
								<Image
									src={image.src}
									alt={image.alt}
									fill
									loading="lazy"
									className="object-cover transition-transform duration-500 group-hover:scale-110"
									sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
								/>
								{/* Hover overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
								{/* Category badge on hover */}
								<div className="absolute bottom-3 left-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
									<span className="rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-foreground">
										{image.category}
									</span>
								</div>
							</div>
						</MotionWrapper>
					))}
				</div>
			</Container>
		</section>
	);
}
