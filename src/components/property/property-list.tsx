import Image from "next/image";
import { Heart, Home, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RatingStars } from "./rating-stars";

interface PropertyListProps {
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

export function PropertyList({ listings }: PropertyListProps) {
  return (
    <div className="flex flex-col gap-4">
      {listings.map((listing) => (
        <Card key={listing.id} className="overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="relative md:w-1/3">
              <div className="absolute left-4 top-4 z-10">
                {listing.popular && (
                  <span className="inline-block rounded bg-amber-300 px-2 py-1 text-xs font-semibold uppercase text-black">
                    Popular
                  </span>
                )}
              </div>
              <div className="absolute right-4 top-4 z-10">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full bg-white"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              <Image
                src={listing.image || "/placeholder.svg"}
                alt={listing.title}
                width={500}
                height={300}
                className="h-48 w-full object-cover md:h-full"
              />
            </div>
            <CardContent className="flex flex-1 flex-col p-4">
              <div className="mb-2">
                <RatingStars
                  rating={listing.rating}
                  reviews={listing.reviews}
                />
              </div>
              <h3 className="mb-1 text-lg font-semibold">{listing.title}</h3>
              <p className="mb-3 text-sm text-muted-foreground">
                {listing.description}
              </p>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{listing.address}</span>
              </div>
              <div className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{listing.phone}</span>
              </div>
              <div className="mt-auto flex items-center justify-between pt-4">
                <div className="font-semibold text-primary">
                  {listing.price}
                </div>
                <Button variant="outline" className="gap-2">
                  <Home className="h-4 w-4" />
                  Details
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  );
}
