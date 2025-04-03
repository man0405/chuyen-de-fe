import { Star, MapPin, Phone, Link as LinkSvg, Bed, Bath, Building } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Badge } from "../ui/badge";
import Link from "next/link";
import Image from "next/image";
import { HouseAndUserPhone } from "@/types/HouseType";

interface PropertyCardProps {
  listing: HouseAndUserPhone;
}

export default function PropertyCard(props: PropertyCardProps) {
  const { listing } = props;
  const { name, description, location, user, price, default_image, status, bed, bath, size } =
    listing;
  const defaultImage = "https://placehold.co/600x400";
  return (
    <Card className="overflow-hidden group">
      <div className="relative">
        <Image
          src={default_image || defaultImage}
          alt={name}
          width={400}
          height={300}
          loader={({ src }) => src}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge
          variant={"default"}
          className="absolute top-3 left-3 bg-primary text-white"
        >
          {status}
        </Badge>
        <div className="absolute bottom-3 right-3  rounded-full h-8 w-8 flex items-center justify-center">
          <Image
            src="/assets/images/agents/agent-1.png"
            alt="Agent"
            width={40}
            height={40}
            loader={({ src }) => src}
            className="rounded-full object-cover aspect-square "
          />
        </div>
      </div>
      <CardContent className="pt-4">
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{bed} beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{bath} baths</span>
          </div>
          <div className="flex items-center gap-1">
            <Building className="h-4 w-4" />
            <span>{size} sqft</span>
          </div>
        </div>

        {/* <div className="flex items-center mb-2"> */}
        {/*   <div className="flex items-center text-primary"> */}
        {/*     <Star className="h-4 w-4 fill-primary" /> */}
        {/*     <span className="ml-1 text-sm font-medium">{rating}</span> */}
        {/*   </div> */}
        {/*   <span className="text-xs text-muted-foreground ml-1"> */}
        {/*     ({reviews}) */}
        {/*   </span> */}
        {/* </div> */}
        <h3 className="font-bold text-lg mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground mb-3">{description}</p>
        <div className="space-y-2">
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 text-primary mr-2" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-sm">
            <Phone className="h-4 w-4 text-primary mr-2" />
            <span>{user.phone}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center border-t p-4">
        <div className="font-bold text-primary">{price}$</div>
        <Button variant="default" className="bg-primary hover:bg-primary/90">
          <Link href={"/properties/" + listing.house_id}>
            Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
