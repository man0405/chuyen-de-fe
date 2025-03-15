"use client";

import { useState } from "react";
import Link from "next/link";
import {
	MapPin,
	Phone,
	Facebook,
	Twitter,
	Linkedin,
	Instagram,
	ArrowRight,
	Play,
	ChevronUp,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Sample data for agents
const agents = [
	{
		id: 1,
		name: "admin",
		image: "/placeholder.svg?height=200&width=200",
		address: "21 Monroe Ave, Rochester NY",
		phone: "888 555 1111",
		description:
			"Nullam quis ante nam sit amet orci eget eros faucibus tincidunt. Donec quam.",
	},
	{
		id: 2,
		name: "agent",
		image: "/placeholder.svg?height=200&width=200",
		address: "21 Monroe Ave, Rochester NY",
		phone: "888 555 2222",
		description:
			"Nullam quis ante nam sit amet orci eget eros faucibus tincidunt. Donec quam.",
	},
	{
		id: 3,
		name: "ahmad",
		image: "/placeholder.svg?height=200&width=200",
		address: "21 Monroe Ave, Rochester NY",
		phone: "888 555 3333",
		description:
			"Nullam quis ante nam sit amet orci eget eros faucibus tincidunt. Donec quam.",
	},
	{
		id: 4,
		name: "Bianca",
		image: "/placeholder.svg?height=200&width=200",
		address: "21 Monroe Ave, Rochester NY",
		phone: "888 555 4444",
		description:
			"Nullam quis ante nam sit amet orci eget eros faucibus tincidunt. Donec quam.",
	},
	{
		id: 5,
		name: "Kathryn Murphy",
		image: "/placeholder.svg?height=200&width=200",
		address: "21 Monroe Ave, Rochester NY",
		phone: "888 555 5555",
		description:
			"Nullam quis ante nam sit amet orci eget eros faucibus tincidunt. Donec quam.",
	},
	{
		id: 6,
		name: "Andrew Fred",
		image: "/placeholder.svg?height=200&width=200",
		address: "21 Monroe Ave, Rochester NY",
		phone: "888 555 6666",
		description:
			"Nullam quis ante nam sit amet orci eget eros faucibus tincidunt. Donec quam.",
	},
	{
		id: 7,
		name: "jggbroiler",
		image: "/placeholder.svg?height=200&width=200",
		address: "21 Monroe Ave, Rochester NY",
		phone: "888 555 7777",
		description:
			"Nullam quis ante nam sit amet orci eget eros faucibus tincidunt. Donec quam.",
	},
	{
		id: 8,
		name: "qweenoq",
		image: "/placeholder.svg?height=200&width=200",
		address: "21 Monroe Ave, Rochester NY",
		phone: "888 555 8888",
		description:
			"Nullam quis ante nam sit amet orci eget eros faucibus tincidunt. Donec quam.",
	},
	{
		id: 9,
		name: "kimarh.abuasi@mail.com",
		image: "/placeholder.svg?height=200&width=200",
		address: "21 Monroe Ave, Rochester NY",
		phone: "888 555 9999",
		description:
			"Nullam quis ante nam sit amet orci eget eros faucibus tincidunt. Donec quam.",
	},
];

// Generate alphabet array for tabs
const alphabet = Array.from({ length: 26 }, (_, i) =>
	String.fromCharCode(65 + i)
);

export default function AgencyDirectory() {
	const [activeTab, setActiveTab] = useState("all");

	// Filter agents based on active tab
	const filteredAgents =
		activeTab === "all"
			? agents
			: agents.filter((agent) =>
					agent.name.toUpperCase().startsWith(activeTab)
			  );

	return (
		<div className="flex flex-col min-h-screen">
			{/* Hero Section */}
			<section className="relative bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/agentlist-EM0Oilqxy6LeMot2Xgla5Jdh9WZ1xi.png')] bg-cover bg-center py-24 before:absolute before:inset-0 before:bg-black/50">
				<div className="container mx-auto px-4 relative z-10 text-center">
					<h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
						Future Dream Home
					</h1>
					<p className="text-white/90 text-lg">
						Providing the best Real Estate services
					</p>
				</div>
			</section>

			{/* Agents Directory */}
			<section className="py-16 bg-background">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<Badge className="mb-2 bg-primary/10 text-primary hover:bg-primary/20">
							Our Expert
						</Badge>
						<h2 className="text-3xl md:text-4xl font-bold">
							Meet All Our Agencies
						</h2>
					</div>

					{/* Alphabet Filter */}
					<Tabs
						defaultValue="all"
						value={activeTab}
						onValueChange={setActiveTab}
						className="mb-8"
					>
						<div className="overflow-x-auto pb-2">
							<TabsList className="flex w-full justify-start">
								<TabsTrigger value="all" className="rounded-md">
									All
								</TabsTrigger>
								{alphabet.map((letter) => (
									<TabsTrigger
										key={letter}
										value={letter}
										className="rounded-md"
									>
										{letter}
									</TabsTrigger>
								))}
							</TabsList>
						</div>
					</Tabs>

					{/* Agents Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{filteredAgents.map((agent) => (
							<Card
								key={agent.id}
								className="overflow-hidden group transition-all duration-300 hover:shadow-lg"
							>
								<CardHeader className="p-6 flex flex-row items-center gap-4">
									<Avatar className="h-16 w-16 border-2 border-primary/10">
										<AvatarImage src={agent.image} alt={agent.name} />
										<AvatarFallback>
											{agent.name.substring(0, 2).toUpperCase()}
										</AvatarFallback>
									</Avatar>
									<div>
										<h3 className="text-lg font-semibold">{agent.name}</h3>
									</div>
								</CardHeader>
								<CardContent className="px-6 pb-2">
									<p className="text-sm text-muted-foreground mb-4">
										{agent.description}
									</p>
									<div className="flex items-center gap-2 text-sm mb-2">
										<MapPin className="h-4 w-4 text-primary" />
										<span>{agent.address}</span>
									</div>
									<div className="flex items-center gap-2 text-sm">
										<Phone className="h-4 w-4 text-primary" />
										<span>{agent.phone}</span>
									</div>
								</CardContent>
								<CardFooter className="p-6 flex flex-col gap-4">
									<div className="flex items-center gap-2">
										<Link
											href="#"
											className="p-1.5 rounded-full bg-muted hover:bg-muted/80 transition-colors"
										>
											<Facebook className="h-4 w-4" />
										</Link>
										<Link
											href="#"
											className="p-1.5 rounded-full bg-muted hover:bg-muted/80 transition-colors"
										>
											<Twitter className="h-4 w-4" />
										</Link>
										<Link
											href="#"
											className="p-1.5 rounded-full bg-muted hover:bg-muted/80 transition-colors"
										>
											<Linkedin className="h-4 w-4" />
										</Link>
										<Link
											href="#"
											className="p-1.5 rounded-full bg-muted hover:bg-muted/80 transition-colors"
										>
											<Instagram className="h-4 w-4" />
										</Link>
									</div>
									<Button
										variant="outline"
										className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
										onClick={() => {
											window.location.href = `/agents/${agent.id}`;
										}}
									>
										View All Listings
									</Button>
								</CardFooter>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* About Section */}
			<section className="py-16 bg-muted/30">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:20 items-center">
						<div className="relative">
							<div className="relative z-10">
								<img
									src="/assets/images/about/premium_photo-1661883964999-c1bcb57a7357.avif"
									alt="Property"
									className="rounded-lg shadow-lg"
								/>
								<div className="absolute -right-4 -bottom-4 bg-primary text-primary-foreground p-4 rounded-full">
									<Play className="h-8 w-8" />
								</div>
							</div>
							<div className="absolute -z-10 top-8 left-8 w-full h-full border-2 border-primary/20 rounded-lg"></div>
						</div>
						<div>
							<Badge className="mb-2 bg-primary/10 text-primary hover:bg-primary/20">
								About Company
							</Badge>
							<h2 className="text-3xl md:text-4xl font-bold mb-6">
								Welcome To Properties
							</h2>
							<p className="text-muted-foreground mb-6">
								It is a long established fact that a reader will be distracted
								the readable content of a page when looking at layout at the
								point of using lorem this is a ipsum like normal distribution of
								letters.
							</p>

							<div className="space-y-4 mb-8">
								<div className="flex items-center gap-2">
									<Badge className="h-2 w-2 rounded-full p-0 bg-primary"></Badge>
									<span className="font-medium">
										Proactively portfolio client
									</span>
								</div>
								<div className="flex items-center gap-2">
									<Badge className="h-2 w-2 rounded-full p-0 bg-primary"></Badge>
									<span className="font-medium">
										Is there a waiting list for desired
									</span>
								</div>
								<div className="flex items-center gap-2">
									<Badge className="h-2 w-2 rounded-full p-0 bg-primary"></Badge>
									<span className="font-medium">Immediate 24/7 Emergency</span>
								</div>
							</div>

							<div className="flex flex-wrap gap-8 mb-8">
								<div className="flex items-center gap-2">
									<div className="text-3xl font-bold text-primary">30k+</div>
									<div className="text-sm text-muted-foreground">
										Properties Sold
									</div>
								</div>
								<div className="flex items-center gap-2">
									<div className="text-3xl font-bold text-primary">700+</div>
									<div className="text-sm text-muted-foreground">
										Happy Clients
									</div>
								</div>
							</div>

							<Button className="flex items-center gap-2">
								Explore More
								<ArrowRight className="h-4 w-4" />
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Scroll to top button */}
			<Button
				className="fixed bottom-6 right-6 p-2 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground"
				size="icon"
				aria-label="Scroll to top"
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
			>
				<ChevronUp className="h-5 w-5" />
			</Button>
		</div>
	);
}
