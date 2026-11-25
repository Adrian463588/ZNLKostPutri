import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { CTASection } from "@/components/sections/CTASection";
import { ExploreHubSection } from "@/components/sections/ExploreHubSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FacilitiesSection } from "@/components/sections/FacilitiesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { RoomPreviewSection } from "@/components/sections/RoomPreviewSection";
import { buildStructuredData, serializeJsonLd } from "@/lib/seo";

export default function HomePage() {
	const structuredData = buildStructuredData();

	return (
		<>
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: serialized JSON-LD escaped per Next.js docs
				dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }}
			/>
			<Header />
			<main id="main-content">
				<HeroSection />
				<AboutSection />
				<FacilitiesSection />
				<RoomPreviewSection />
				<GallerySection />
				<LocationSection />
				<FAQSection />
				<ExploreHubSection />
				<CTASection />
			</main>
			<Footer />
		</>
	);
}
