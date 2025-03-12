import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Star, ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export default function AboutPage() {
	return (
		<div className="flex flex-col min-h-screen">
			{/* Hero Section */}
			<div className="relative h-[300px] w-full">
				<Image
					src="/placeholder.svg?height=300&width=1200"
					alt="Modern interior"
					fill
					className="object-cover brightness-50"
					priority
				/>
				<div className="absolute inset-0 flex flex-col items-center justify-center text-white">
					<h1 className="text-3xl font-bold mb-2">About Page</h1>
					<div className="flex items-center gap-2 text-sm">
						<Link href="/" className="hover:underline">
							Home
						</Link>
						<span>/</span>
						<span>About Page</span>
					</div>
				</div>
			</div>

			{/* Achievements Section */}
			<section className="bg-muted/30 py-16">
				<div className="container mx-auto px-4">
					<Badge variant="outline" className="mb-4">
						Our Achievement
					</Badge>
					<div className="grid md:grid-cols-2 gap-8 items-center">
						<div>
							<h2 className="text-3xl md:text-4xl font-bold mb-8">
								Our Homeda Awesome
								<br />
								Success Story.
							</h2>

							<div className="grid grid-cols-3 gap-4 mb-8">
								<div className="text-center">
									<p className="text-2xl md:text-3xl font-bold text-primary">
										20.5K
									</p>
									<p className="text-sm text-muted-foreground">
										Property Projects
									</p>
								</div>
								<div className="text-center">
									<p className="text-2xl md:text-3xl font-bold text-primary">
										100.5K
									</p>
									<p className="text-sm text-muted-foreground">Luxury Homes</p>
								</div>
								<div className="text-center">
									<p className="text-2xl md:text-3xl font-bold text-primary">
										150.5K
									</p>
									<p className="text-sm text-muted-foreground">
										Satisfied Clients
									</p>
								</div>
							</div>
						</div>

						<div className="relative">
							<Image
								src="/placeholder.svg?height=400&width=600"
								alt="Modern house"
								width={600}
								height={400}
								className="rounded-lg w-full h-auto object-cover"
							/>
							<div className="absolute inset-0 flex items-center justify-center">
								<Button
									size="icon"
									variant="secondary"
									className="rounded-full h-14 w-14 bg-white/90 hover:bg-white"
								>
									<Play className="h-6 w-6 text-primary" />
								</Button>
							</div>
						</div>
					</div>

					{/* Partner Logos */}
					<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-16">
						{[1, 2, 3, 4, 5].map((i) => (
							<div key={i} className="flex items-center justify-center">
								<Image
									src={`/placeholder.svg?height=60&width=120&text=Partner${i}`}
									alt={`Partner ${i}`}
									width={120}
									height={60}
									className="opacity-70 hover:opacity-100 transition-opacity"
								/>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Trusted Advisors Section */}
			<section className="bg-slate-900 text-white py-16">
				<div className="container mx-auto px-4">
					<Badge variant="outline" className="mb-4 border-white/20 text-white">
						About Us
					</Badge>

					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl md:text-4xl font-bold mb-4">
								Our Trusted <span className="text-primary">Real Estate</span>
								<br />
								Advisors.
							</h2>
							<p className="text-white/70 mb-8">
								It is a long established fact that a reader will be distracted
								by the readable content of a page when looking at its layout.
								The point of using Lorem Ipsum is that it has a more-or-less
								normal distribution of letters.
							</p>

							<div className="flex flex-wrap gap-4">
								<Button variant="default">List your own property</Button>
								<Button variant="outline" className="border-white/20">
									Property hunt & fast support
								</Button>
							</div>

							<div className="flex gap-8 mt-12">
								<div className="text-center">
									<p className="text-2xl md:text-3xl font-bold text-primary">
										20+
									</p>
									<p className="text-sm text-white/70">Experience</p>
								</div>
								<div className="text-center">
									<p className="text-2xl md:text-3xl font-bold text-primary">
										700+
									</p>
									<p className="text-sm text-white/70">Agents</p>
								</div>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<Image
								src="/placeholder.svg?height=300&width=250"
								alt="Property 1"
								width={250}
								height={300}
								className="rounded-lg w-full h-auto object-cover"
							/>
							<Image
								src="/placeholder.svg?height=300&width=250"
								alt="Property 2"
								width={250}
								height={300}
								className="rounded-lg w-full h-auto object-cover mt-8 md:mt-12"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className="py-16 bg-muted/30">
				<div className="container mx-auto px-4">
					<Badge variant="outline" className="mb-4">
						Our Experts
					</Badge>

					<div className="flex justify-between items-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold">
							Meet Our Real Estate Team
						</h2>
						<Button
							variant="default"
							className="hidden md:flex items-center gap-2"
						>
							View All Member <ArrowRight className="h-4 w-4" />
						</Button>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{[
							{ name: "Savannah Nguyen", role: "CEO", phone: "(239) 555-0108" },
							{ name: "Annette Black", role: "Agent", phone: "(603) 555-0123" },
							{
								name: "Kathryn Murphy",
								role: "Agent",
								phone: "(208) 555-0112",
							},
						].map((member, i) => (
							<Card key={i} className="overflow-hidden">
								<div className="relative">
									<Image
										src={`/placeholder.svg?height=400&width=300&text=Team${
											i + 1
										}`}
										alt={member.name}
										width={300}
										height={400}
										className="w-full h-auto object-cover"
									/>
									<div className="absolute bottom-4 right-4">
										<Button
											size="icon"
											variant="default"
											className="rounded-full"
										>
											<Phone className="h-4 w-4" />
										</Button>
									</div>
								</div>
								<CardContent className="p-4">
									<h3 className="font-bold text-lg">{member.name}</h3>
									<p className="text-sm text-muted-foreground">
										{member.role} • {member.phone}
									</p>
								</CardContent>
							</Card>
						))}
					</div>

					<div className="mt-8 flex justify-center md:hidden">
						<Button variant="default" className="flex items-center gap-2">
							View All Member <ArrowRight className="h-4 w-4" />
						</Button>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="bg-slate-900 text-white py-16">
				<div className="container mx-auto px-4">
					<Badge variant="outline" className="mb-4 border-white/20 text-white">
						Testimonials
					</Badge>

					<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
						Latest Client Feedback
					</h2>

					<div className="grid md:grid-cols-3 gap-8">
						{[
							{ name: "Wade Warren", role: "Business Owner", rating: 5 },
							{ name: "Jessica Brown", role: "Doctor", rating: 5 },
							{ name: "David Anderson", role: "Engineer", rating: 5 },
						].map((testimonial, i) => (
							<div key={i} className="bg-slate-800/50 p-6 rounded-lg">
								<div className="flex mb-4">
									{Array(5)
										.fill(0)
										.map((_, j) => (
											<Star
												key={j}
												className="h-4 w-4 text-yellow-400 fill-yellow-400"
											/>
										))}
								</div>
								<p className="text-white/70 mb-6">
									Praesent et lacus a arcu cursus tristique at a augue. Sed
									ullamcorper tristique est at pharetra. Fusce accumsan et dolor
									sit amet.
								</p>
								<div className="flex items-center gap-4">
									<Image
										src={`/placeholder.svg?height=50&width=50&text=T${i + 1}`}
										alt={testimonial.name}
										width={50}
										height={50}
										className="rounded-full"
									/>
									<div>
										<h4 className="font-bold">{testimonial.name}</h4>
										<p className="text-sm text-white/70">{testimonial.role}</p>
									</div>
									<div className="ml-auto text-primary text-4xl">"</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-16 relative">
				<div className="absolute inset-0 z-0">
					<Image
						src="/placeholder.svg?height=600&width=1200"
						alt="Background"
						fill
						className="object-cover brightness-50"
					/>
				</div>
				<div className="container mx-auto px-4 relative z-10">
					<Badge variant="outline" className="mb-4 border-white/20 text-white">
						Categories
					</Badge>

					<h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
						Top Features
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
						<Button variant="outline" className="border-white/20 text-white">
							All Properties
						</Button>

						<Card className="bg-slate-900/80 border-slate-700 text-white">
							<CardContent className="p-6 flex flex-col items-center">
								<div className="mb-4 mt-2">
									<Image
										src="/placeholder.svg?height=40&width=40&text=V"
										alt="Villa icon"
										width={40}
										height={40}
									/>
								</div>
								<h3 className="font-bold text-lg mb-1">Villa</h3>
								<p className="text-sm text-white/70">8 Properties</p>
							</CardContent>
						</Card>

						<Card className="bg-slate-900/80 border-slate-700 text-white">
							<CardContent className="p-6 flex flex-col items-center">
								<div className="mb-4 mt-2">
									<Image
										src="/placeholder.svg?height=40&width=40&text=A"
										alt="Apartment icon"
										width={40}
										height={40}
									/>
								</div>
								<h3 className="font-bold text-lg mb-1">Apartment</h3>
								<p className="text-sm text-white/70">5 Properties</p>
							</CardContent>
						</Card>

						<Card className="bg-slate-900/80 border-slate-700 text-white">
							<CardContent className="p-6 flex flex-col items-center">
								<div className="mb-4 mt-2">
									<Image
										src="/placeholder.svg?height=40&width=40&text=W"
										alt="Warehouse icon"
										width={40}
										height={40}
									/>
								</div>
								<h3 className="font-bold text-lg mb-1">Warehouse</h3>
								<p className="text-sm text-white/70">4 Properties</p>
							</CardContent>
						</Card>
					</div>

					<div className="flex justify-center mt-8">
						<div className="flex gap-2">
							{[1, 2, 3, 4, 5].map((i) => (
								<div
									key={i}
									className={`h-2 rounded-full ${
										i === 1 ? "w-8 bg-primary" : "w-2 bg-white/30"
									}`}
								/>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
