import { House } from "@/types/HouseType";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Bath, Bed, MapPin, Star } from "lucide-react";
import Image from "next/image";

interface PropertyCardProps {
  listing: House;
}

export function PropertyCard({ listing }: PropertyCardProps) {
  const defaultImage = "https://placehold.co/600x400";

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={listing.default_image || defaultImage}
            alt={listing.name}
            fill
            className="object-cover"
            loader ={({src}) => src}
          />
          <Badge className="absolute top-2 right-2">{listing.status}</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">{listing.name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{listing.description}</p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <MapPin className="h-4 w-4" />
          <span>{listing.location}</span>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{listing.bed} beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{listing.bath} baths</span>
          </div>
          <div className="flex items-center gap-1">
            <Building className="h-4 w-4" />
            <span>{listing.size} sqft</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm">{listing.star.toFixed(1)}</span>
        </div>
        <div className="text-lg font-semibold">${listing.price.toLocaleString()}</div>
      </CardFooter>
    </Card>
  );
}
