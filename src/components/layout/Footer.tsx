"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
	MapPin,
	Mail,
	Phone,
	Facebook,
	Twitter,
	Instagram,
	Linkedin,
} from "lucide-react";

const socials = [
	{
		name: "facebook",
		url: "#",
		element: <Facebook />,
	},
	{
		name: "twitter",
		url: "#",
		element: <Twitter />,
	},
	{
		name: "instagram",
		url: "#",
		element: <Instagram />,
	},
	{
		name: "linkedin",
		url: "#",
		element: <Linkedin />,
	},
];
export default function Footer() {
	return (
		<>
			{/* Contact Bar */}
			<section className="bg-primary py-8">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="flex items-center gap-4 text-white">
							<div className="bg-white/20 p-3 rounded-full">
								<MapPin className="h-5 w-5" />
							</div>
							<div>
								<p className="text-sm text-white/70">Address</p>
								<p className="font-medium">399 Thanh Khe, Da Nang</p>
							</div>
						</div>

						<div className="flex items-center gap-4 text-white">
							<div className="bg-white/20 p-3 rounded-full">
								<Mail className="h-5 w-5" />
							</div>
							<div>
								<p className="text-sm text-white/70">Email Address</p>
								<p className="font-medium">vanman04.w@gmail..com</p>
							</div>
						</div>

						<div className="flex items-center gap-4 text-white">
							<div className="bg-white/20 p-3 rounded-full">
								<Phone className="h-5 w-5" />
							</div>
							<div>
								<p className="text-sm text-white/70">Phone Number</p>
								<p className="font-medium">+339 228 240</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<footer className="bg-slate-900 text-white py-16">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
						<div>
							<div className="flex items-center gap-2 mb-6">
								<div className="p-1">
									<Image
										src="/assets/images/logo-white.png"
										alt="Logo"
										width={150}
										height={300}
									/>
								</div>
								<span className="font-bold text-xl">HOMIRX</span>
							</div>
							<p className="text-white/70 mb-6">
								A short paragraph about what your platform provides. Include a
								couple of keywords.
							</p>
							<div className="flex gap-4">
								{socials.map((social) => (
									<Link
										key={social.name}
										href={social.url}
										className="bg-slate-800 p-2 rounded-full hover:bg-primary transition-colors"
									>
										<span className="sr-only">{social.name}</span>
										{social.element}
									</Link>
								))}
							</div>
						</div>

						<div>
							<h3 className="font-bold text-lg mb-6">Quick Link</h3>
							<ul className="space-y-4">
								{[
									"Startup Business",
									"Financial Advice",
									"Marketing Strategy",
									"Business Development",
									"Strategy Services",
								].map((link) => (
									<li key={link}>
										<Link
											href="#"
											className="text-white/70 hover:text-primary transition-colors"
										>
											{link}
										</Link>
									</li>
								))}
							</ul>
						</div>

						<div>
							<h3 className="font-bold text-lg mb-6">Discover</h3>
							<ul className="space-y-4">
								{[
									"About",
									"Our Team",
									"Features",
									"Testimonials",
									"Contact",
								].map((link) => (
									<li key={link}>
										<Link
											href="#"
											className="text-white/70 hover:text-primary transition-colors"
										>
											{link}
										</Link>
									</li>
								))}
							</ul>
						</div>

						<div>
							<h3 className="font-bold text-lg mb-6">Gallery</h3>
							<div className="grid grid-cols-2 gap-2">
								{[1, 2, 3, 4].map((i) => (
									<Link
										key={i}
										href="#"
										className="block relative aspect-[3/2]"
									>
										<Image
											src={`/assets/images/galary/galary-${i}.avif`}
											alt={`Gallery ${i}`}
											fill
											className="rounded-lg hover:opacity-80 transition-opacity object-cover"
										/>
									</Link>
								))}
							</div>
						</div>
					</div>

					<div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
						<p className="text-white/70 text-sm">
							© 2023, Designed by HomixTheme. All Rights Reserved
						</p>
						<div className="flex gap-4 mt-4 md:mt-0">
							<Link
								href="#"
								className="text-white/70 text-sm hover:text-primary"
							>
								Terms & Conditions
							</Link>
							<Link
								href="#"
								className="text-white/70 text-sm hover:text-primary"
							>
								Privacy Policy
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
