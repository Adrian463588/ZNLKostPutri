import { ArrowRight, Check, MessageCircle } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { MotionWrapper } from "@/components/common/MotionWrapper";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { whatsappUrl } from "@/config/site";
import { rooms } from "@/data/rooms";
import { cn } from "@/lib/utils";

export function RoomPreviewSection() {
	return (
		<section
			id="kamar"
			className="py-20 lg:py-28"
			aria-label="Pratinjau kamar ZNL Kost Putri"
		>
			<Container>
				<MotionWrapper>
					<SectionHeading
						eyebrow="Kamar"
						title="Kamar yang Nyaman untuk Anda"
						description="Kamar bersih dan terawat dengan perabot lengkap untuk mendukung aktivitas sehari-hari."
					/>
				</MotionWrapper>

				<div className="mt-12 flex flex-col gap-12">
					{rooms.map((room, index) => (
						<MotionWrapper key={room.id} delay={index * 0.1}>
							<div className="grid grid-cols-1 items-center gap-8 rounded-2xl border border-border/60 bg-card p-6 shadow-sm lg:grid-cols-2 lg:gap-12 lg:p-10">
								{/* Room Image */}
								<div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-md">
									<Image
										src={room.image}
										alt={room.imageAlt}
										fill
										className="object-cover transition-transform duration-500 group-hover:scale-105"
										sizes="(max-width: 1024px) 100vw, 50vw"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
								</div>

								{/* Room Info */}
								<div className="flex flex-col gap-6">
									<div>
										<Badge
											variant="secondary"
											className="mb-3 bg-primary/10 text-primary border-primary/20 text-xs font-semibold uppercase tracking-wide"
										>
											Tersedia
										</Badge>
										<h3 className="text-2xl font-semibold text-foreground">
											{room.title}
										</h3>
										<p className="mt-3 text-sm leading-7 text-muted-foreground">
											{room.description}
										</p>
									</div>

									{/* Features */}
									<ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
										{room.features.map((feature) => (
											<li
												key={feature}
												className="flex items-center gap-2 text-sm text-foreground/80"
											>
												<div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
													<Check className="h-3 w-3" aria-hidden="true" />
												</div>
												{feature}
											</li>
										))}
									</ul>

									<a
										href={whatsappUrl}
										target="_blank"
										rel="noopener noreferrer"
										className={cn(
											buttonVariants(),
											"group w-fit gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0",
										)}
									>
										<MessageCircle className="h-4 w-4" />
										Tanya Ketersediaan Kamar
										<ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
									</a>
								</div>
							</div>
						</MotionWrapper>
					))}

					{/* Video Preview */}
					<MotionWrapper delay={0.3}>
						<div className="mt-8 overflow-hidden rounded-2xl shadow-xl ring-1 ring-border/40">
							<div className="bg-primary/5 p-4 sm:p-8">
								<div className="mx-auto max-w-3xl text-center mb-6">
									<h3 className="text-2xl font-bold text-foreground">
										Lihat Detail Kamar Secara Nyata
									</h3>
									<p className="mt-2 text-sm text-muted-foreground">
										Tonton video singkat berikut untuk mendapatkan gambaran
										nyata kondisi kamar dari berbagai sudut.
									</p>
								</div>
								<div className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-xl shadow-lg ring-1 ring-border/20 bg-black">
									<video
										src="/videos/DetailKamar.mp4"
										controls
										playsInline
										preload="metadata"
										className="h-full w-full object-cover"
										poster="/images/TampakDepan.png"
										aria-label="Video preview kamar ZNL Kost Putri"
									>
										<track kind="captions" />
										Maaf, browser Anda tidak mendukung pemutar video HTML5.
									</video>
								</div>
							</div>
						</div>
					</MotionWrapper>
				</div>
			</Container>
		</section>
	);
}
