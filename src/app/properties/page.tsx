"use client";

import { useState } from "react";
import { PropertyFilters } from "../../components/property/property-filter";
import { PropertyListingHeader } from "../../components/property/property-listing-header";
import { PropertyGrid } from "../../components/property/property-grid";
import { PropertyList } from "../../components/property/property-list";
import { PropertyMap } from "../../components/property/property-map";

// View options enum
export type ViewType = "grid" | "list" | "map";

// Sample data for listings
const listings = [
	{
		id: 1,
		title: "Beauty Hairsalon",
		description: "Modern Hair Style Salon",
		rating: 4.0,
		reviews: 1,
		address: "22 Broklyn Street New York USA",
		phone: "+84-666-888-99",
		price: "EUR€199.00",
		image:
			"https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Hair salon
		popular: true,
	},
	{
		id: 2,
		title: "Foodie Restaurant",
		description: "One of the best Restaurant",
		rating: 5.0,
		reviews: 1,
		address: "22 Broklyn Street New York USA",
		phone: "+84-666-888-99",
		price: "EUR€199.00",
		image:
			"https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Restaurant
		popular: true,
	},
	{
		id: 3,
		title: "Riki Hotel in Broklyn",
		description: "Outdoor, luxury for you",
		rating: 4.0,
		reviews: 1,
		address: "22 Broklyn Street New York USA",
		phone: "+84-666-888-99",
		price: "EUR€239.00",
		image:
			"https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Hotel
		popular: true,
	},
	{
		id: 4,
		title: "Silver Rose Store",
		description: "Outdoor, luxury for you",
		rating: 5.0,
		reviews: 1,
		address: "22 Broklyn Street New York USA",
		phone: "+84-666-888-99",
		price: "EUR€189.00",
		image:
			"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Store
		popular: true,
	},
	{
		id: 5,
		title: "Novotel London Canary",
		description: "Outdoor, luxury for you",
		rating: 4.0,
		reviews: 1,
		address: "22 Broklyn Street New York USA",
		phone: "+84-666-888-99",
		price: "EUR€169.00",
		image:
			"https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=3548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Hotel
		popular: true,
	},
	{
		id: 6,
		title: "The Pastry Corner",
		description: "Outdoor, luxury for you",
		rating: 3.0,
		reviews: 1,
		address: "22 Broklyn Street New York USA",
		phone: "+84-666-888-99",
		price: "EUR€319.00",
		image:
			"https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Bakery
		popular: true,
	},
];

export default function PropertyListing() {
	const [view, setView] = useState<ViewType>("grid");

	return (
		<div className="min-h-screen bg-gray-50">
			<div className="mx-auto max-w-[1200px] bg-white rounded-lg shadow-sm my-8">
				<PropertyFilters />

				<div className="px-6 pb-6">
					<PropertyListingHeader
						count={listings.length}
						view={view}
						onViewChange={setView}
					/>

					{view === "grid" && <PropertyGrid listings={listings} />}
					{view === "list" && <PropertyList listings={listings} />}
					{view === "map" && <PropertyMap listings={listings} />}
				</div>
			</div>
		</div>
	);
}
