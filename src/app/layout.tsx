import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { buildSiteVerification } from "@/lib/seo/metadata";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

const verification = buildSiteVerification(
	process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
	process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
);

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: {
		default: siteConfig.seoTitle,
		template: "%s | ZNL Kost Putri",
	},
	description: siteConfig.seoDescription,
	alternates: {
		canonical: `${siteConfig.url}/`,
	},
	authors: [{ name: siteConfig.name }],
	creator: siteConfig.name,
	openGraph: {
		type: "website",
		locale: "id_ID",
		url: `${siteConfig.url}/`,
		siteName: siteConfig.name,
		title: siteConfig.seoTitle,
		description: siteConfig.seoDescription,
		images: [
			{
				url: siteConfig.ogImage.url,
				width: siteConfig.ogImage.width,
				height: siteConfig.ogImage.height,
				alt: siteConfig.ogImage.alt,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.seoTitle,
		description: siteConfig.seoDescription,
		images: [
			{
				url: siteConfig.ogImage.url,
				alt: siteConfig.ogImage.alt,
			},
		],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	...(verification ? { verification } : {}),
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="id" className={`${inter.variable} h-full antialiased`}>
			<body className="min-h-full flex flex-col font-[family-name:var(--font-inter)] bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
				{children}
			</body>
		</html>
	);
}
