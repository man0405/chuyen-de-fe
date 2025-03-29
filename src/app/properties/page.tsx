"use client";

import { useState, useEffect, Suspense } from "react";
import { PropertyFilters } from "../../components/property/property-filter";
import { PropertyListingHeader } from "../../components/property/property-listing-header";
import { PropertyGrid } from "../../components/property/property-grid";
import { PropertyList } from "../../components/property/property-list";
import { PropertyMap } from "../../components/property/property-map";
import { Skeleton } from "@/components/ui/skeleton";
import { Building, MapPin, Search } from "lucide-react";

// View options enum
export type ViewType = "grid" | "list" | "map";

// Sample data for listings
const listings = [
	{
		id: 1,
		title: "Beauty Hairsalon",
		description: "Modern Hair Style Salon",
		rating: 4.0,
		reviews: 12,
		address: "22 Broklyn Street New York USA",
		phone: "+84-666-888-99",
		price: "EUR€199.00",
		image:
			"https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Hair salon
		popular: true,
		category: "beauty",
	},
	{
		id: 2,
		title: "Foodie Restaurant",
		description: "One of the best Restaurant",
		rating: 5.0,
		reviews: 28,
		address: "22 Broklyn Street New York USA",
		phone: "+84-666-888-99",
		price: "EUR€199.00",
		image:
			"https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Restaurant
		popular: true,
		category: "restaurant",
	},
	{
		id: 3,
		title: "Riki Hotel in Broklyn",
		description: "Outdoor, luxury for you",
		rating: 4.0,
		reviews: 15,
		address: "22 Broklyn Street New York USA",
		phone: "+84-666-888-99",
		price: "EUR€239.00",
		image:
			"https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Hotel
		popular: true,
		category: "hotel",
	},
	{
		id: 4,
		title: "Silver Rose Store",
		description: "Outdoor, luxury for you",
		rating: 5.0,
		reviews: 32,
		address: "22 Broklyn Street New York USA",
		phone: "+84-666-888-99",
		price: "EUR€189.00",
		image:
			"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Store
		popular: true,
		category: "shopping",
	},
	{
		id: 5,
		title: "Novotel London Canary",
		description: "Outdoor, luxury for you",
		rating: 4.0,
		reviews: 18,
		address: "22 Broklyn Street New York USA",
		phone: "+84-666-888-99",
		price: "EUR€169.00",
		image:
			"https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=3548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Hotel
		popular: true,
		category: "hotel",
	},
	{
		id: 6,
		title: "The Pastry Corner",
		description: "Outdoor, luxury for you",
		rating: 3.0,
		reviews: 9,
		address: "22 Broklyn Street New York USA",
		phone: "+84-666-888-99",
		price: "EUR€319.00",
		image:
			"https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Bakery
		popular: true,
		category: "restaurant",
	},
];

export default function PropertyListing() {
	const [view, setView] = useState<ViewType>("grid");
	const [loading, setLoading] = useState(true);
	const [filteredListings, setFilteredListings] = useState(listings);
	const [searchTerm, setSearchTerm] = useState("");
	const [location, setLocation] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("");

	// Simulate loading
	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	// Handle search and filtering
	const handleSearch = (term: string) => {
		setSearchTerm(term);
		filterListings(term, selectedCategory);
	};

	const handleLocation = (location: string) => {
		setLocation(location);
		filterListings(location, selectedCategory);
	};

	const handleCategoryChange = (category: string) => {
		setSelectedCategory(category);
		filterListings(searchTerm, category);
	};

	const handlePriceChange = (category: string) => {
		setSelectedCategory(category);
		filterListings(searchTerm, category);
	};

	const filterListings = (term: string, category: string) => {
		let filtered = [...listings];

		if (term) {
			filtered = filtered.filter(
				(listing) =>
					listing.title.toLowerCase().includes(term.toLowerCase()) ||
					listing.description.toLowerCase().includes(term.toLowerCase()) ||
					listing.address.toLowerCase().includes(term.toLowerCase())
			);
		}

		if (category && category !== "all") {
			filtered = filtered.filter((listing) => listing.category === category);
		}

		setFilteredListings(filtered);
	};

	return (
		<div className="min-h-screen bg-gradient-to-b ">
			{/* Hero Section */}
			<div className="bg-gradient-to-r from-primary/90 to-primary relative overflow-hidden">
				<div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
				<div className="container mx-auto px-4 py-12 relative z-10">
					<div className="max-w-3xl">
						<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
							Find Your Perfect Place
						</h1>
						<p className="text-white/90 text-lg mb-6">
							Discover the best locations, restaurants, hotels, and more in your
							area
						</p>
						<div className="flex items-center gap-2 text-white/80 text-sm">
							<MapPin className="h-4 w-4" />
							<span>Over 1,000+ locations available</span>
							<span className="mx-2">•</span>
							<Building className="h-4 w-4" />
							<span>Trusted by 10,000+ customers</span>
							<span className="mx-2">•</span>
							<Search className="h-4 w-4" />
							<span>Easy search & filter</span>
						</div>
					</div>
				</div>
			</div>

			<div className="container mx-auto px-4 py-8">
				<div className="rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:shadow-xl">
					<Suspense fallback={<div className="p-4">Loading filters...</div>}>
						<PropertyFilters
							onSearch={handleSearch}
							onCategoryChange={handleCategoryChange}
							onPriceChange={handlePriceChange}
							onLocation={handleLocation}
						/>
					</Suspense>

					<div className="px-6 pb-6">
						{loading ? (
							<div className="space-y-4">
								<div className="flex justify-between items-center">
									<Skeleton className="h-8 w-32" />
									<div className="flex gap-2">
										<Skeleton className="h-10 w-32" />
										<Skeleton className="h-10 w-40" />
									</div>
								</div>
								<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
									{[1, 2, 3, 4, 5, 6].map((i) => (
										<div key={i} className="rounded-lg overflow-hidden border">
											<Skeleton className="h-48 w-full" />
											<div className="p-4 space-y-3">
												<Skeleton className="h-4 w-24" />
												<Skeleton className="h-6 w-3/4" />
												<Skeleton className="h-4 w-full" />
												<Skeleton className="h-4 w-2/3" />
												<div className="flex justify-between pt-2">
													<Skeleton className="h-6 w-20" />
													<Skeleton className="h-10 w-24" />
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						) : (
							<>
								<PropertyListingHeader
									count={filteredListings.length}
									view={view}
									onViewChange={setView}
								/>

								{filteredListings.length === 0 ? (
									<div className="flex flex-col items-center justify-center py-16 text-center">
										<Search className="h-16 w-16 text-muted-foreground mb-4" />
										<h3 className="text-xl font-semibold mb-2">
											No results found
										</h3>
										<p className="text-muted-foreground max-w-md">
											We couldn't find any listings matching your search
											criteria. Try adjusting your filters or search term.
										</p>
									</div>
								) : (
									<>
										<div className={view === "grid" ? "block" : "hidden"}>
											<PropertyGrid listings={filteredListings} />
										</div>
										<div className={view === "list" ? "block" : "hidden"}>
											<PropertyList listings={filteredListings} />
										</div>
										<div className={view === "map" ? "block" : "hidden"}>
											<PropertyMap listings={filteredListings} />
										</div>
									</>
								)}
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
