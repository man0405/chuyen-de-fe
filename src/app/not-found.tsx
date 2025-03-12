"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center py-16 text-center">
			<div className="relative mx-auto mb-8 w-64">
				<Image
					src="/assets/images/404.png"
					alt="404 Error"
					width={250}
					height={300}
					className="mx-auto"
				/>
			</div>
			<h1 className="mb-4 text-4xl font-bold text-[#1a2841]">
				OPPS! This Page is Not Found
			</h1>
			<p className="mx-auto max-w-lg text-gray-600">
				The page requested could not be found. This could be a spelling error in
				the URL or a removed page.
			</p>
			<Button asChild className="mt-8 px-6 py-3">
				<Link href="/">
					<Home className="mr-2 h-5 w-5" />
					Back Homepage
				</Link>
			</Button>
		</main>
	);
}
