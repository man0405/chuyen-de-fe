"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import { useTheme } from "next-themes";
import imageLoader from "@/utils/imageLoader";

export default function Header() {
	const { theme, systemTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Only run on client side
	useEffect(() => {
		console.log(theme);
		setMounted(true);
	}, []);
	const isDarkTheme = !mounted
		? false
		: theme === "system"
		? systemTheme === "dark"
		: theme === "dark";

	const logoSrc = !mounted
		? "/assets/images/logo-black.png"
		: isDarkTheme
		? "/assets/images/logo-white.png"
		: "/assets/images/logo-black.png";

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 items-center justify-between mx-auto">
				<div className="flex items-center gap-2">
					<div className="p-1">
						<Image
							src={logoSrc}
							loader={imageLoader}
							alt="Logo"
							width={150}
							height={300}
						/>
					</div>
					<span className="font-bold text-xl">HOMIRX</span>
				</div>

				<nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
					<Link href="/" className="transition-colors hover:text-primary">
						Home
					</Link>
					{/* <Link
						href="/properties"
						className="transition-colors hover:text-primary"
					>
						Properties
					</Link> */}
					<Link
						href="/properties"
						className="transition-colors hover:text-primary"
					>
						Properties
					</Link>
					<Link href="/agents" className="transition-colors hover:text-primary">
						Agents
					</Link>
					<Link href="/pages" className="transition-colors hover:text-primary">
						Pages
					</Link>
					<Link href="/news" className="transition-colors hover:text-primary">
						News
					</Link>
					<Link href="/about" className="transition-colors hover:text-primary">
						Contact
					</Link>
				</nav>

				<div className="flex items-center gap-4">
					<div className="hidden md:flex items-center gap-2">
						<Button variant="ghost" size="icon" className="rounded-full">
							<Phone className="h-4 w-4" />
						</Button>
						<Button variant="ghost" size="icon" className="rounded-full">
							<Mail className="h-4 w-4" />
						</Button>
					</div>
					<Button variant="default" size="sm" className="hidden md:inline-flex">
						Add Property
					</Button>
				</div>
			</div>
		</header>
	);
}
