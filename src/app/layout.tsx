import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

export const metadata: Metadata = {
	title: {
		default: "ZNL Kost Putri Yogyakarta | Kost Putri Nyaman dan Strategis",
		template: "%s | ZNL Kost Putri",
	},
	description:
		"ZNL Kost Putri adalah kost putri nyaman di Yogyakarta untuk mahasiswi dan pekerja wanita. Lihat fasilitas, galeri kamar, lokasi, dan hubungi Ibu Kost.",
	keywords: [
		"kost putri yogyakarta",
		"kost putri",
		"kost mahasiswi yogyakarta",
		"kost wanita yogyakarta",
		"kost nyaman yogyakarta",
		"ZNL kost putri",
	],
	authors: [{ name: siteConfig.name }],
	creator: siteConfig.name,
	openGraph: {
		type: "website",
		locale: "id_ID",
		title: "ZNL Kost Putri Yogyakarta | Kost Putri Nyaman dan Strategis",
		description:
			"Kost putri nyaman dan strategis di Yogyakarta untuk mahasiswi dan pekerja wanita. Lingkungan tenang, bersih, dan mudah diakses.",
		siteName: siteConfig.name,
	},
	twitter: {
		card: "summary_large_image",
		title: "ZNL Kost Putri Yogyakarta",
		description:
			"Kost putri nyaman dan strategis di Yogyakarta untuk mahasiswi dan pekerja wanita.",
	},
	robots: {
		index: true,
		follow: true,
	},
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
