"use client";

import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MobileNav } from "@/components/layout/MobileNav";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig, whatsappUrl } from "@/config/site";
import { cn } from "@/lib/utils";

const navLinks = [
	{ href: "#beranda", label: "Beranda" },
	{ href: "#tentang", label: "Tentang" },
	{ href: "#fasilitas", label: "Fasilitas" },
	{ href: "#kamar", label: "Kamar" },
	{ href: "#galeri", label: "Galeri" },
	{ href: "#lokasi", label: "Lokasi" },
	{ href: "#faq", label: "FAQ" },
];

export function Header() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 12);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={cn(
				"fixed top-0 z-50 w-full transition-all duration-300",
				scrolled
					? "bg-white/95 shadow-sm backdrop-blur-md border-b border-border/60"
					: "bg-transparent",
			)}
		>
			<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
				{/* Logo */}
				<Link
					href="#beranda"
					className="flex items-center gap-2 group"
					aria-label="ZNL Kost Putri - Beranda"
				>
					<Image
						src="/images/IconWebsite.png"
						alt={`Logo ${siteConfig.name}`}
						width={32}
						height={32}
						className="rounded-full shadow-sm transition-transform duration-200 group-hover:scale-110"
					/>
					<span className="text-base font-semibold text-foreground tracking-tight">
						{siteConfig.name}
					</span>
				</Link>

				{/* Desktop Navigation */}
				<nav
					className="hidden md:flex items-center gap-6"
					aria-label="Navigasi utama"
				>
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="relative text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
						>
							{link.label}
						</Link>
					))}
				</nav>

				{/* Desktop CTA */}
				<div className="hidden md:flex items-center gap-3">
					<a
						href={whatsappUrl}
						target="_blank"
						rel="noopener noreferrer"
						className={cn(
							buttonVariants({ size: "sm" }),
							"gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
						)}
					>
						<MessageCircle className="h-4 w-4" />
						Hubungi Kami
					</a>
				</div>

				{/* Mobile Menu */}
				<MobileNav navLinks={navLinks} />
			</div>
		</header>
	);
}
