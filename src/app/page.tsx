import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FacilitiesSection } from "@/components/sections/FacilitiesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { RoomPreviewSection } from "@/components/sections/RoomPreviewSection";

export default function HomePage() {
	return (
		<>
			<Header />
			<main id="main-content">
				<HeroSection />
				<AboutSection />
				<FacilitiesSection />
				<RoomPreviewSection />
				<GallerySection />
				<LocationSection />
				<FAQSection />
				<CTASection />
			</main>
			<Footer />
		</>
	);
}
