import Image from "next/image";
import { Heart, Home, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { RatingStars } from "./rating-stars";
import Link from "next/link";
import imageLoader from "@/utils/imageLoader";
import { PropertyGridProps } from "./property-grid";
import { House } from "@/types/HouseType";

interface PropertyCardProps {
  house_list: House;
}

export function PropertyCard({ listing }: PropertyCardProps) {
	return (
		<Card className="overflow-hidden">
			<div className="relative">
				<div className="absolute left-4 top-4 z-10">
					{listing.popular && (
						<span className="inline-block rounded bg-red-500 px-2 py-1 text-xs font-semibold uppercase text-white">
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
					className="h-48 w-full object-cover"
					loader={({src} )=> src}
				/>
				<div className="absolute bottom-4 right-4 z-10">
					<div className="h-8 w-8 overflow-hidden rounded-full border-2 border-white">
						<Image
							src="https://images.unsplash.com/photo-1623091928870-dbe5bd43ea7d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="User"
							width={32}
							height={32}
							loader={({src} )=> src}
							className="h-full w-full object-cover"
						/>
					</div>
				</div>
			</div>
			<CardContent className="p-4">
				<div className="mb-2">
					<RatingStars rating={listing.rating} reviews={listing.reviews} />
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
			</CardContent>
			<CardFooter className="flex items-center justify-between border-t p-4">
				<div className="font-semibold text-primary">{listing.price}</div>
				<Link href={`/properties/${listing.id}`}>
					<Button variant="outline" className="gap-2">
						<Home className="h-4 w-4" />
						Details
					</Button>
				</Link>
			</CardFooter>
		</Card>
	);
}
