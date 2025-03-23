"use client";
import NewsCard from "@/components/homepage/NewsCard";
import PropertyCard from "@/components/homepage/PropertyCard";
import StatsCounter from "@/components/homepage/StatsCounters";
import TeamMember from "@/components/homepage/TeamMember";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Home,
	Search,
	MapPin,
	Building,
	Users,
	Shield,
	Clock,
	MessageSquare,
	ChevronRight,
	Star,
} from "lucide-react";
import Image from "next/image";

export default function HomePage() {
	return (
		<div className="min-h-screen flex flex-col mx-auto ">
			{/* Hero Section */}
			<section className="bg-navy relative py-12 md:py-20 lg:py-32">
				<div className="containe px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mx-auto">
					<div className="space-y-4 md:space-y-6 z-10">
						<h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-bold ">
							Global Home For Your Future Generation
						</h1>
						<p className=" text-base md:text-lg max-w-md">
							Find your dream property with our expert real estate services. We
							help you discover the perfect home.
						</p>
						<div className="flex flex-wrap gap-3 md:gap-4">
							<Button className=" text-sm md:text-base">Get Started</Button>
							<Button variant="outline" className="text-sm md:text-base">
								Learn More
							</Button>
						</div>
					</div>
					<div className="relative hidden lg:block">
						<Image
							src="/assets/images/galary/galary-1.avif"
							alt="Modern home"
							layout="responsive"
							width={16} // Aspect ratio (16:9 for example)
							height={12}
							className="rounded-lg shadow-xl"
							loader={({ src }) => src}
						/>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="py-8 md:py-10 bg-secondary">
				<div className="container px-4 md:px-6 mx-auto">
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
						<StatsCounter value={30.3} label="Properties Sold" suffix="K" />
						<StatsCounter value={100.3} label="Happy Customers" suffix="K" />
						<StatsCounter value={150.5} label="Property Listings" suffix="K" />
					</div>
				</div>
			</section>

			{/* Search Section */}
			<section className="py-16 md:py-16 ">
				<div className="container mx-auto px-4 md:px-6">
					<div className="max-w-3xl mx-auto">
						<div className="text-center mb-6 md:mb-8">
							<h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
								Let's Find The Right Selling Option For You
							</h2>
							<p className="text-muted-foreground text-sm md:text-base">
								Search through our extensive property listings to find your
								perfect match
							</p>
						</div>

						<Card className="p-4 md:p-6 shadow-lg">
							<Tabs defaultValue="buy" className="w-full">
								<TabsList className="grid grid-cols-3 mb-4 md:mb-6">
									<TabsTrigger value="buy">Buy</TabsTrigger>
									<TabsTrigger value="rent">Rent</TabsTrigger>
									<TabsTrigger value="sell">Sell</TabsTrigger>
								</TabsList>

								<TabsContent value="buy" className="space-y-4">
									<div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
										<div>
											<label className="text-xs md:text-sm font-medium mb-1 block">
												Location
											</label>
											<div className="relative">
												<MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
												<Input
													className="pl-10 text-sm"
													placeholder="City, Address, Zip"
												/>
											</div>
										</div>
										<div>
											<label className="text-xs md:text-sm font-medium mb-1 block">
												Property Type
											</label>
											<div className="relative">
												<Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
												<select className="w-full h-10 pl-10 pr-4 rounded-md border border-input bg-background text-sm">
													<option>Any Type</option>
													<option>House</option>
													<option>Apartment</option>
													<option>Villa</option>
												</select>
											</div>
										</div>
										<div>
											<label className="text-xs md:text-sm font-medium mb-1 block">
												Price Range
											</label>
											<div className="relative">
												<span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
													$
												</span>
												<Input
													className="pl-10 text-sm"
													placeholder="Max Price"
												/>
											</div>
										</div>
									</div>
									<Button className="w-full bg-orange hover:bg-orange/90 text-sm md:text-base">
										<Search className="mr-2 h-4 w-4" /> Search Properties
									</Button>
								</TabsContent>

								<TabsContent value="rent" className="space-y-4">
									{/* Similar structure to buy tab */}
									<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
										<div>
											<label className="text-sm font-medium mb-1 block">
												Location
											</label>
											<div className="relative">
												<MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
												<Input
													className="pl-10"
													placeholder="City, Address, Zip"
												/>
											</div>
										</div>
										<div>
											<label className="text-sm font-medium mb-1 block">
												Property Type
											</label>
											<div className="relative">
												<Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
												<select className="w-full h-10 pl-10 pr-4 rounded-md border border-input bg-background">
													<option>Any Type</option>
													<option>House</option>
													<option>Apartment</option>
													<option>Villa</option>
												</select>
											</div>
										</div>
										<div>
											<label className="text-sm font-medium mb-1 block">
												Monthly Rent
											</label>
											<div className="relative">
												<span className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500">
													$
												</span>
												<Input className="pl-10" placeholder="Max Rent" />
											</div>
										</div>
									</div>
									<Button className="w-full ">
										<Search className="mr-2 h-4 w-4" /> Find Rentals
									</Button>
								</TabsContent>

								<TabsContent value="sell" className="space-y-4">
									{/* Sell tab content */}
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div>
											<label className="text-sm font-medium mb-1 block">
												Property Address
											</label>
											<div className="relative">
												<MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
												<Input
													className="pl-10"
													placeholder="Enter your property address"
												/>
											</div>
										</div>
										<div>
											<label className="text-sm font-medium mb-1 block">
												Property Type
											</label>
											<div className="relative">
												<Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
												<select className="w-full h-10 pl-10 pr-4 rounded-md border border-input bg-background">
													<option>Select Type</option>
													<option>House</option>
													<option>Apartment</option>
													<option>Villa</option>
												</select>
											</div>
										</div>
									</div>
									<Button className="w-full ">Get Free Valuation</Button>
								</TabsContent>
							</Tabs>
						</Card>
					</div>
				</div>
			</section>

			{/* Top Properties Section */}
			<section className="py-10 md:py-16">
				<div className="container px-4 md:px-6 mx-auto">
					<div className="flex flex-col md:flex-row    mb-6 md:mb-10 gap-4 justify-between items-center ">
						<div>
							<h2 className="text-2xl md:text-3xl font-bold">
								Discover Top Properties
							</h2>
							<p className="text-muted-foreground">
								Explore our handpicked selection of top properties
							</p>
						</div>
						<Button
							variant="default"
							className="flex items-center w-full md:w-auto"
						>
							View All <ChevronRight className="ml-2 h-4 w-4" />
						</Button>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
						<PropertyCard
							id={"1"}
							title="Modern Apartment in Downtown"
							location="123 Main Street, New York"
							price="$350,000"
							beds={2}
							baths={2}
							sqft={1200}
							image="/assets/images/galary/galary-2.avif"
						/>
						<PropertyCard
							id={"1"}
							title="Luxury Villa with Pool"
							location="456 Ocean Drive, Miami"
							price="$1,250,000"
							beds={4}
							baths={3}
							sqft={3200}
							image="/assets/images/galary/galary-2.avif"
						/>
						<PropertyCard
							id={"1"}
							title="Cozy Family Home"
							location="789 Park Avenue, Chicago"
							price="$550,000"
							beds={3}
							baths={2}
							sqft={1800}
							image="/assets/images/galary/galary-2.avif"
						/>
					</div>
				</div>
			</section>

			{/* Latest Projects Section */}

			<section className="py-16 bg-secondary md:py-16">
				<div className="container mx-auto px-4 md:px-6">
					<div className="text-center mb-10">
						<h2 className="text-3xl font-bold mb-2">Our Latest Projects</h2>
						<p className="text-muted-foreground max-w-2xl mx-auto">
							Take a look at our most recent developments and upcoming
							properties
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						<NewsCard
							title="New Development in Suburban Area"
							date="March 10, 2025"
							excerpt="Explore our newest housing development featuring modern amenities and green spaces."
							image="/assets/images/galary/galary-1.avif"
						/>
						<NewsCard
							title="Luxury Apartments Now Available"
							date="March 5, 2025"
							excerpt="Our high-end apartment complex is now open for viewings with special introductory prices."
							image="/assets/images/galary/galary-1.avif"
						/>
						<NewsCard
							title="Commercial Spaces in Business District"
							date="February 28, 2025"
							excerpt="Premium office spaces available for lease in the heart of the financial district."
							image="/assets/images/galary/galary-1.avif"
						/>
						<NewsCard
							title="Eco-Friendly Housing Project"
							date="February 20, 2025"
							excerpt="Sustainable living spaces with solar power and rainwater harvesting systems."
							image="/assets/images/galary/galary-1.avif"
						/>
					</div>
				</div>
			</section>

			{/* Why Choose Us Section */}
			<section className="py-16 md:py-16 ">
				<div className="container mx-auto  px-4 md:px-6">
					<h2 className="text-3xl font-bold text-center  mb-12">
						Why Choose Us
					</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
						<div className="flex flex-col items-center text-center">
							<div className="bg-white/10 p-4 rounded-full mb-4">
								<Home className="h-6 w-6 text-orange" />
							</div>
							<h3 className=" font-semibold mb-2">Exclusive Properties</h3>
							<p className="text-accent-foreground text-sm">
								Access to exclusive listings not available elsewhere
							</p>
						</div>
						<div className="flex flex-col items-center text-center">
							<div className="bg-white/10 p-4 rounded-full mb-4">
								<Users className="h-6 w-6 text-orange" />
							</div>
							<h3 className=" font-semibold mb-2">Expert Agents</h3>
							<p className="text-accent-foreground text-sm">
								Professional agents with years of experience
							</p>
						</div>
						<div className="flex flex-col items-center text-center">
							<div className="bg-white/10 p-4 rounded-full mb-4">
								<Shield className="h-6 w-6 text-orange" />
							</div>
							<h3 className=" font-semibold mb-2">Secure Transactions</h3>
							<p className="text-accent-foreground text-sm">
								Safe and secure property transactions
							</p>
						</div>
						<div className="flex flex-col items-center text-center">
							<div className="bg-white/10 p-4 rounded-full mb-4">
								<Clock className="h-6 w-6 text-orange" />
							</div>
							<h3 className="font-semibold mb-2">24/7 Support</h3>
							<p className="text-accent-foreground text-sm">
								Round-the-clock customer support
							</p>
						</div>
						<div className="flex flex-col items-center text-center">
							<div className="bg-white/10 p-4 rounded-full mb-4">
								<MessageSquare className="h-6 w-6 text-orange" />
							</div>
							<h3 className="font-semibold mb-2">Free Consultation</h3>
							<p className="text-accent-foreground text-sm">
								Get free expert advice on your property needs
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className="py-16 md:py-16">
				<div className="container mx-auto px-4 md:px-6">
					<div className="flex justify-between items-center mb-10">
						<h2 className="text-3xl font-bold">Meet Our Real Estate Team</h2>
						<Button variant="outline">View All Team</Button>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<TeamMember
							name="Sarah Johnson"
							role="Senior Agent"
							image="/assets/images/ceo.jpeg"
							rating={4.9}
							properties={120}
						/>
						<TeamMember
							name="Michael Chen"
							role="Property Consultant"
							image="/assets/images/ceo.jpeg"
							rating={4.8}
							properties={98}
						/>
						<TeamMember
							name="Jessica Williams"
							role="Luxury Specialist"
							image="/assets/images/ceo.jpeg"
							rating={4.7}
							properties={85}
						/>
					</div>
				</div>
			</section>

			{/* Testimonial Section */}
			<section className="py-20 bg-primary-foreground">
				<div className="container mx-auto px-6">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ">
						{/* Left Image */}
						<div className="justify-self-center">
							<Image
								src="/assets/images/agents/agent-2.png"
								alt="Client"
								width={500}
								height={400}
								className="rounded-lg object-cover  "
							/>
						</div>

						{/* Right Testimonial Section */}
						<div>
							<h2 className="text-4xl font-bold mb-6 text-white">
								What Your Client Say?
							</h2>
							<p className="text-white mb-8 leading-relaxed">
								We pride ourselves on providing exceptional service to our
								clients. Here's what they have to say about their experience
								with us.
							</p>

							{/* Testimonial Box */}
							<div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg mb-6">
								<p className="italic mb-6 text-lg">
									"Working with this real estate agency was a fantastic
									experience. They found us our dream home within our budget and
									made the entire process smooth and stress-free."
								</p>

								<div className="flex items-center">
									<Image
										src="https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=Robert+Anderson"
										alt="Testimonial author"
										width={60}
										height={60}
										className="rounded-full mr-4"
									/>
									<div>
										<h4 className="font-semibold text-lg">Robert Anderson</h4>
										<p className="text-sm text-muted-foreground">Homeowner</p>
									</div>
									<div className="ml-auto flex">
										{[1, 2, 3, 4, 5].map((star) => (
											<Star
												key={star}
												className="h-5 w-5 fill-orange text-orange"
											/>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* <section className="py-16 bg-secondary md:py-16">
			<div className="container mx-auto px-4 md:px-6"> */}

			{/* Featured Properties Section */}
			<section className="py-16 md:py-16">
				<div className="container mx-auto  px-4 md:px-6">
					<div className="flex justify-between items-center mb-10">
						<h2 className="text-3xl font-bold">Featured Properties</h2>
						<div className="flex gap-2">
							<Button variant="outline" size="sm">
								Popular
							</Button>
							<Button variant="outline" size="sm">
								Latest
							</Button>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						<PropertyCard
							id={"1"}
							title="Luxury Penthouse"
							location="Manhattan, NY"
							price="$4,200,000"
							beds={4}
							baths={3}
							sqft={3200}
							image="/assets/images/galary/galary-1.avif"
						/>
						<PropertyCard
							id={"1"}
							title="Waterfront Estate"
							location="Miami Beach, FL"
							price="$6,500,000"
							beds={6}
							baths={5}
							sqft={5500}
							image="/assets/images/galary/galary-1.avif"
						/>
						<PropertyCard
							id={"1"}
							title="Modern Townhouse"
							location="San Francisco, CA"
							price="$1,850,000"
							beds={3}
							baths={2}
							sqft={1650}
							image="/assets/images/galary/galary-1.avif"
						/>
						<PropertyCard
							id={"1"}
							title="Mountain Retreat"
							location="Aspen, CO"
							price="$3,900,000"
							beds={4}
							baths={4}
							sqft={3800}
							image="/assets/images/galary/galary-1.avif"
						/>
					</div>
				</div>
			</section>

			{/* News Section */}
			<section className="py-16 bg-primary-foreground  md:py-16">
				<div className="container mx-auto px-4 md:px-6">
					<div className="flex justify-between items-center mb-10">
						<h2 className="text-3xl font-bold">Our Latest News Update</h2>
						<Button variant="outline">View All News</Button>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<NewsCard
							title="10 Tips for First-Time Home Buyers in 2025"
							date="March 10, 2025"
							excerpt="Discover essential tips to help you navigate the home buying process with confidence."
							image="/assets/images/galary/galary-2.avif"
						/>
						<NewsCard
							title="Luxury Real Estate Market Trends for 2025"
							date="March 8, 2025"
							excerpt="Explore the latest trends shaping the luxury real estate market this year."
							image="/assets/images/galary/galary-2.avif"
						/>
						<NewsCard
							title="How to Increase Your Property's Value Before Selling"
							date="March 5, 2025"
							excerpt="Learn effective strategies to boost your property's market value before listing it."
							image="/assets/images/galary/galary-2.avif"
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
