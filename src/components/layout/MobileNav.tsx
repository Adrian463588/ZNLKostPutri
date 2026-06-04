"use client";

import { MapPin, Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig, whatsappUrl } from "@/config/site";
import { cn } from "@/lib/utils";

type NavLink = {
	href: string;
	label: string;
};

type MobileNavProps = {
	navLinks: readonly NavLink[];
};

export function MobileNav({ navLinks }: MobileNavProps) {
	const [open, setOpen] = useState(false);

	return (
		<div className="md:hidden">
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger
					render={
						<Button
							variant="ghost"
							size="icon"
							aria-label="Buka menu navigasi"
							className="text-foreground hover:bg-secondary"
						/>
					}
				>
					{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
				</SheetTrigger>

				<SheetContent side="right" className="w-[280px] bg-white">
					<SheetHeader className="border-b border-border pb-4 mb-2">
						<SheetTitle className="text-left text-base font-semibold text-foreground">
							{siteConfig.name}
						</SheetTitle>
					</SheetHeader>

					<nav className="flex flex-col gap-1" aria-label="Navigasi mobile">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								onClick={() => setOpen(false)}
								className="flex items-center rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-150 hover:bg-secondary hover:text-foreground"
							>
								{link.label}
							</Link>
						))}
					</nav>

					<div className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
						<a
							href={whatsappUrl}
							target="_blank"
							rel="noopener noreferrer"
							onClick={() => setOpen(false)}
							className={cn(
								buttonVariants(),
								"w-full gap-2 justify-center bg-primary text-primary-foreground hover:bg-primary/90",
							)}
						>
							<MessageCircle className="h-4 w-4" />
							Chat Ibu di WhatsApp
						</a>
						<a
							href={siteConfig.googleMapsUrl}
							target="_blank"
							rel="noopener noreferrer"
							onClick={() => setOpen(false)}
							className={cn(
								buttonVariants({ variant: "outline" }),
								"w-full gap-2 justify-center border-border hover:bg-secondary",
							)}
						>
							<MapPin className="h-4 w-4" />
							Lihat Lokasi
						</a>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
}
