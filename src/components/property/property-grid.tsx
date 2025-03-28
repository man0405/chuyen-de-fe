import { House } from "@/types/HouseType";
import { PropertyCard } from "./property-card";

export interface PropertyGridProps {
  listings?: Array<{
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
  house_list: House[];
}

export function PropertyGrid({ listings, house_list }: PropertyGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {house_list?.map((listing) => (
        <PropertyCard key={listing.house_id} house_list={listing} />
      ))}
    </div>
  );
}
