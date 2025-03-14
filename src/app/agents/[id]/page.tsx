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

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PropertyCard from "@/components/property/PropertyCard";

export default function ProfilePage() {
	return (
		<div className="min-h-screen flex flex-col">
			{/* Hero Section */}
			<div className="relative h-48 md:h-64 bg-gradient-to-r from-primary/50 to-primary/80 flex items-center justify-center">
				<div className="absolute inset-0 overflow-hidden">
					<Image
						src="/assets/images/about/roberto-nickson-tleCJiDOri0-unsplash.jpg"
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
						<span className="text-accent-foreground">Author Profile</span>
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
								src="/assets/images/agents/agent-1.png"
								alt="Admin profile"
								width={120}
								height={120}
								className="rounded-full border-4 border-white shadow-lg object-cover aspect-square"
							/>
						</div>
						<h2 className="text-xl font-bold">Admin</h2>
						<p className="text-sm text-muted-foreground mb-4">
							Member since 4 months ago
						</p>

						<div className="grid grid-cols-2 gap-4 w-full">
							<div className="bg-primary/30 p-4 rounded-lg flex items-center">
								<div className="bg-primary/80 text-white p-2 rounded-lg mr-3">
									<Star className="h-4 w-4" />
								</div>
								<div>
									<div className="text-lg font-bold">4.6</div>
									<div className="text-xs text-muted-foreground">
										18 Reviews
									</div>
								</div>
							</div>
							<div className="bg-primary/30 p-4 rounded-lg flex items-center">
								<div className="bg-primary/80 text-white p-2 rounded-lg mr-3">
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
										<MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
										<span>21 Monroe Ave, Rochester NY</span>
									</div>
									<div className="flex items-start">
										<Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
										<span>888 666 111</span>
									</div>
									<div className="flex items-start">
										<Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
										<span>contact@example.com</span>
									</div>
									<div className="flex items-start">
										<Globe className="h-5 w-5 text-primary mr-3 mt-0.5" />
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
							image="/assets/images/galary/galary-1.avif"
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
							image="/assets/images/galary/galary-1.avif"
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
							image="/assets/images/galary/galary-1.avif"
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
							<Button className=" text-white w-8 h-8 p-0">1</Button>
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
		</div>
	);
}
