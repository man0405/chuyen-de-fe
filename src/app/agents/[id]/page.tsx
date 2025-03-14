import Image from "next/image";
import Link from "next/link";
import {
	Home,
	Phone,
	Mail,
	Globe,
	Facebook,
	Twitter,
	Linkedin,
	Instagram,
	MapPin,
	Star,
	ChevronRight,
	Search,
	Plus,
	ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProfilePage() {
	return (
		<div className="min-h-screen flex flex-col">
			{/* Hero Section */}
			<div className="relative h-48 md:h-64 bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
				<div className="absolute inset-0 overflow-hidden">
					<Image
						src="/placeholder.svg?height=400&width=1920"
						alt="City skyline"
						fill
						className="object-cover opacity-20"
						priority
					/>
				</div>
				<div className="container mx-auto text-center z-10 text-white">
					<h1 className="text-3xl md:text-4xl font-bold mb-4">
						Author Profile
					</h1>
					<div className="flex items-center justify-center space-x-2">
						<Link href="/" className="hover:text-orange-400">
							Home
						</Link>
						<span>/</span>
						<span className="text-orange-400">Author Profile</span>
					</div>
				</div>
			</div>

			{/* Profile Section */}
			<main className="container mx-auto py-8 px-4">
				<div className="flex flex-col md:flex-row gap-8 mb-8">
					{/* Profile Card */}
					<div className="w-full md:w-1/3 flex flex-col items-center">
						<div className="relative mb-4">
							<Image
								src="/placeholder.svg?height=200&width=200"
								alt="Admin profile"
								width={120}
								height={120}
								className="rounded-full border-4 border-white shadow-lg"
							/>
						</div>
						<h2 className="text-xl font-bold">Admin</h2>
						<p className="text-sm text-muted-foreground mb-4">
							Member since 4 months ago
						</p>

						<div className="grid grid-cols-2 gap-4 w-full">
							<div className="bg-orange-100 dark:bg-orange-900/20 p-4 rounded-lg flex items-center">
								<div className="bg-orange-500 text-white p-2 rounded-lg mr-3">
									<Star className="h-4 w-4" />
								</div>
								<div>
									<div className="text-lg font-bold">4.6</div>
									<div className="text-xs text-muted-foreground">
										18 Reviews
									</div>
								</div>
							</div>
							<div className="bg-orange-100 dark:bg-orange-900/20 p-4 rounded-lg flex items-center">
								<div className="bg-orange-500 text-white p-2 rounded-lg mr-3">
									<Home className="h-4 w-4" />
								</div>
								<div>
									<div className="text-lg font-bold">18</div>
									<div className="text-xs text-muted-foreground">Listings</div>
								</div>
							</div>
						</div>
					</div>

					{/* Contact Info and About */}
					<div className="w-full md:w-2/3">
						<div className="grid md:grid-cols-2 gap-6">
							<div className="border rounded-lg p-6">
								<h3 className="text-lg font-bold mb-4">Contact Info</h3>
								<div className="space-y-4">
									<div className="flex items-start">
										<MapPin className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
										<span>21 Monroe Ave, Rochester NY</span>
									</div>
									<div className="flex items-start">
										<Phone className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
										<span>888 666 111</span>
									</div>
									<div className="flex items-start">
										<Mail className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
										<span>contact@example.com</span>
									</div>
									<div className="flex items-start">
										<Globe className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
										<span>http://example.com</span>
									</div>
									<div className="flex items-center space-x-2 pt-2">
										<Link
											href="#"
											className="bg-gray-100 dark:bg-gray-800 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
										>
											<Facebook className="h-4 w-4" />
										</Link>
										<Link
											href="#"
											className="bg-gray-100 dark:bg-gray-800 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
										>
											<Twitter className="h-4 w-4" />
										</Link>
										<Link
											href="#"
											className="bg-gray-100 dark:bg-gray-800 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
										>
											<Linkedin className="h-4 w-4" />
										</Link>
										<Link
											href="#"
											className="bg-gray-100 dark:bg-gray-800 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
										>
											<Instagram className="h-4 w-4" />
										</Link>
									</div>
								</div>
							</div>
							<div className="border rounded-lg p-6">
								<h3 className="text-lg font-bold mb-4">About</h3>
								<p className="text-muted-foreground">
									Nullam quis ante tiam sit amet orci eget eros faucibus
									tincidunt. Donec quam felis ultricies nec pellentesque eu
									pretium quis, sem.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Property Listings */}
				<div className="mt-12">
					<div className="flex flex-col md:flex-row justify-between items-center mb-6">
						<Tabs defaultValue="general" className="w-full md:w-auto">
							<TabsList>
								<TabsTrigger value="apartment" className="flex items-center">
									<Home className="h-4 w-4 mr-2" />
									Apartment
								</TabsTrigger>
								<TabsTrigger value="general" className="flex items-center">
									<Home className="h-4 w-4 mr-2" />
									General
								</TabsTrigger>
								<TabsTrigger value="villa" className="flex items-center">
									<Home className="h-4 w-4 mr-2" />
									Villa
								</TabsTrigger>
							</TabsList>
						</Tabs>

						<div className="mt-4 md:mt-0">
							<Button variant="outline" className="flex items-center">
								Filter By Category <ChevronRight className="h-4 w-4 ml-2" />
							</Button>
						</div>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{/* Property Card 1 */}
						<PropertyCard
							image="/placeholder.svg?height=300&width=400"
							title="Beauty hairsalon"
							description="Modern Hair Style Salon"
							address="22 Brooklyn Street New York USA"
							phone="+84-666-888-99"
							price="$199.00"
							rating={4.8}
							reviews={32}
							badge="POPULAR"
						/>

						{/* Property Card 2 */}
						<PropertyCard
							image="/placeholder.svg?height=300&width=400"
							title="Foodie Restaurant"
							description="One of the Best Restaurant"
							address="22 Brooklyn Street New York USA"
							phone="+84-666-888-99"
							price="$199.00"
							rating={5.0}
							reviews={11}
							badge="FEATURED"
						/>

						{/* Property Card 3 */}
						<PropertyCard
							image="/placeholder.svg?height=300&width=400"
							title="Riki Hotel in Broklyn"
							description="Outdoor, Luxury For You"
							address="22 Brooklyn Street New York USA"
							phone="+84-666-888-99"
							price="$239.00"
							rating={4.9}
							reviews={32}
							badge="POPULAR"
						/>
					</div>

					{/* Pagination */}
					<div className="flex justify-center mt-8">
						<div className="flex items-center space-x-2">
							<Button className="bg-orange-500 hover:bg-orange-600 text-white w-8 h-8 p-0">
								1
							</Button>
							<Button variant="outline" className="w-8 h-8 p-0">
								2
							</Button>
							<Button variant="outline" className="w-8 h-8 p-0">
								<ArrowRight className="h-4 w-4" />
							</Button>
						</div>
					</div>
				</div>
			</main>

			{/* Footer */}
			<footer className="bg-primary text-primary-foreground mt-12">
				{/* Contact Info */}
				<div className="container mx-auto py-8">
					<div className="bg-orange-500 rounded-lg p-6 grid md:grid-cols-3 gap-6">
						<div className="flex items-center">
							<div className="bg-white/20 p-3 rounded-full mr-4">
								<MapPin className="h-5 w-5" />
							</div>
							<div>
								<div className="text-xs opacity-80">Address</div>
								<div className="font-medium">6391 Elgin St, Delaware</div>
							</div>
						</div>
						<div className="flex items-center">
							<div className="bg-white/20 p-3 rounded-full mr-4">
								<Mail className="h-5 w-5" />
							</div>
							<div>
								<div className="text-xs opacity-80">Send Email</div>
								<div className="font-medium">contact@example.com</div>
							</div>
						</div>
						<div className="flex items-center">
							<div className="bg-white/20 p-3 rounded-full mr-4">
								<Phone className="h-5 w-5" />
							</div>
							<div>
								<div className="text-xs opacity-80">Call Emergency</div>
								<div className="font-medium">+88 0123 654 99</div>
							</div>
						</div>
					</div>
				</div>

				{/* Main Footer */}
				<div className="container mx-auto py-8 px-4">
					<div className="grid md:grid-cols-4 gap-8">
						<div>
							<Link href="/" className="flex items-center mb-4">
								<div className="relative h-10 w-10 mr-2">
									<div className="absolute inset-0 bg-orange-500 rounded-full flex items-center justify-center">
										<Home className="h-5 w-5 text-white" />
									</div>
								</div>
								<div className="font-bold text-xl">
									HOMIRX
									<div className="text-xs font-normal text-orange-400">
										LUXURY SOLUTIONS
									</div>
								</div>
							</Link>
							<p className="text-sm text-primary-foreground/70 mb-4">
								Nullam interdum libero vitae pretium aliquam donec nisl purus
								laoreet in ullamcorper vel malesuada et amet enim.
							</p>
							<div className="text-sm">Follow on</div>
							<div className="flex items-center space-x-3 mt-2">
								<Link href="#" className="hover:text-orange-400">
									<Facebook className="h-4 w-4" />
								</Link>
								<Link href="#" className="hover:text-orange-400">
									<Twitter className="h-4 w-4" />
								</Link>
								<Link href="#" className="hover:text-orange-400">
									<Linkedin className="h-4 w-4" />
								</Link>
								<Link href="#" className="hover:text-orange-400">
									<Instagram className="h-4 w-4" />
								</Link>
							</div>
						</div>

						<div>
							<h3 className="text-lg font-bold mb-4">Quick Link</h3>
							<ul className="space-y-3">
								<li>
									<Link
										href="#"
										className="flex items-center text-primary-foreground/70 hover:text-orange-400"
									>
										<ChevronRight className="h-3 w-3 text-orange-500 mr-2" />
										Startup Business
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="flex items-center text-primary-foreground/70 hover:text-orange-400"
									>
										<ChevronRight className="h-3 w-3 text-orange-500 mr-2" />
										Financial Advice
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="flex items-center text-primary-foreground/70 hover:text-orange-400"
									>
										<ChevronRight className="h-3 w-3 text-orange-500 mr-2" />
										Management
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="flex items-center text-primary-foreground/70 hover:text-orange-400"
									>
										<ChevronRight className="h-3 w-3 text-orange-500 mr-2" />
										Business Advice
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="flex items-center text-primary-foreground/70 hover:text-orange-400"
									>
										<ChevronRight className="h-3 w-3 text-orange-500 mr-2" />
										Strategy Services
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="text-lg font-bold mb-4">Discover</h3>
							<ul className="space-y-3">
								<li>
									<Link
										href="#"
										className="flex items-center text-primary-foreground/70 hover:text-orange-400"
									>
										<ChevronRight className="h-3 w-3 text-orange-500 mr-2" />
										About
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="flex items-center text-primary-foreground/70 hover:text-orange-400"
									>
										<ChevronRight className="h-3 w-3 text-orange-500 mr-2" />
										Our Team
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="flex items-center text-primary-foreground/70 hover:text-orange-400"
									>
										<ChevronRight className="h-3 w-3 text-orange-500 mr-2" />
										Testimonials
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="flex items-center text-primary-foreground/70 hover:text-orange-400"
									>
										<ChevronRight className="h-3 w-3 text-orange-500 mr-2" />
										Gallery
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="flex items-center text-primary-foreground/70 hover:text-orange-400"
									>
										<ChevronRight className="h-3 w-3 text-orange-500 mr-2" />
										Contact
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="text-lg font-bold mb-4">Gallery</h3>
							<div className="grid grid-cols-3 gap-2">
								{[1, 2, 3, 4, 5, 6].map((item) => (
									<Link
										href="#"
										key={item}
										className="block overflow-hidden rounded-md"
									>
										<Image
											src={`/placeholder.svg?height=80&width=80`}
											alt={`Gallery image ${item}`}
											width={80}
											height={80}
											className="hover:scale-110 transition-transform duration-300"
										/>
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className="border-t border-primary-foreground/10">
					<div className="container mx-auto py-4 px-4 flex flex-col md:flex-row justify-between items-center text-sm">
						<div className="text-primary-foreground/70">
							© 2023, Copyrights by DeviesTheme. All Rights Reserved
						</div>
						<div className="flex items-center space-x-4 mt-2 md:mt-0">
							<Link
								href="#"
								className="text-primary-foreground/70 hover:text-orange-400"
							>
								Terms & Conditions
							</Link>
							<Link
								href="#"
								className="text-primary-foreground/70 hover:text-orange-400"
							>
								Privacy Policy
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

// Property Card Component
interface PropertyCardProps {
	image: string;
	title: string;
	description: string;
	address: string;
	phone: string;
	price: string;
	rating: number;
	reviews: number;
	badge: string;
}

function PropertyCard({
	image,
	title,
	description,
	address,
	phone,
	price,
	rating,
	reviews,
	badge,
}: PropertyCardProps) {
	return (
		<Card className="overflow-hidden group">
			<div className="relative">
				<Image
					src={image || "/placeholder.svg"}
					alt={title}
					width={400}
					height={300}
					className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
				/>
				<Badge className="absolute top-3 left-3 bg-orange-500 hover:bg-orange-600">
					{badge}
				</Badge>
				<div className="absolute bottom-3 right-3 bg-white dark:bg-gray-800 rounded-full h-8 w-8 flex items-center justify-center">
					<Image
						src="/placeholder.svg?height=32&width=32"
						alt="Agent"
						width={32}
						height={32}
						className="rounded-full"
					/>
				</div>
			</div>
			<CardContent className="pt-4">
				<div className="flex items-center mb-2">
					<div className="flex items-center text-orange-500">
						<Star className="h-4 w-4 fill-orange-500" />
						<span className="ml-1 text-sm font-medium">{rating}</span>
					</div>
					<span className="text-xs text-muted-foreground ml-1">
						({reviews})
					</span>
				</div>
				<h3 className="font-bold text-lg mb-1">{title}</h3>
				<p className="text-sm text-muted-foreground mb-3">{description}</p>
				<div className="space-y-2">
					<div className="flex items-center text-sm">
						<MapPin className="h-4 w-4 text-orange-500 mr-2" />
						<span>{address}</span>
					</div>
					<div className="flex items-center text-sm">
						<Phone className="h-4 w-4 text-orange-500 mr-2" />
						<span>{phone}</span>
					</div>
				</div>
			</CardContent>
			<CardFooter className="flex justify-between items-center border-t pt-4">
				<div className="font-bold text-orange-500">{price}</div>
				<Button variant="default" className="bg-primary hover:bg-primary/90">
					Details
				</Button>
			</CardFooter>
		</Card>
	);
}
