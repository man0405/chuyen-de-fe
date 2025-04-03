import PropertyCard from "./PropertyCard";
import { House, HouseAndUserPhone } from "@/types/HouseType";

export interface PropertyGridProps {
  listings: HouseAndUserPhone[];
}

export function PropertyGrid({ listings }: PropertyGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {listings.map((listing) => (
        <PropertyCard key={listing.house_id} listing={listing} />
      ))}
    </div>
  );
}
