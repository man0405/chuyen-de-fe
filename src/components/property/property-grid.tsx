import { PropertyCard } from "./property-card";

export interface PropertyGridProps {
  listings: Array<{
    id: number;
    title: string;
    description: string;
    rating: number;
    reviews: number;
    address: string;
    phone: string;
    price: string;
    image: string;
    popular: boolean;
  }>;
}

export function PropertyGrid({ listings }: PropertyGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {listings.map((listing) => (
        <PropertyCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
}
