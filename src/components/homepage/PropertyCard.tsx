import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Bed, Bath, SquareIcon, MapPin, Heart } from "lucide-react";
import Link from "next/link";
import MinioService from "@/utils/services/MinioService";
import { useState } from "react";

interface PropertyCardProps {
	id: string;
	title: string;
	location?: string;
	price?: string;
	beds: number;
	baths: number;
	sqft?: number | string;
	image: string;
	status?: string;
}
export default function PropertyCard({
	id,
	title,
	location,
	price,
	beds,
	baths,
	sqft,
	status,
	image,
}: PropertyCardProps) {
	return (
		<Card className="overflow-hidden group">
			<div className="relative">
				<Image
					src={image || "/placeholder.svg"}
					alt={title}
					width={400}
					height={250}
					className="w-full h-[180px] sm:h-[220px] object-cover transition-transform duration-300 group-hover:scale-105"
					loader={({ src }) => src}
				/>
				<div className="absolute top-3 right-3">
					<Button
						variant={"outline"}
						className="  rounded-full p-2 transition-colors"
					>
						<Heart />
					</Button>
				</div>
				<div className="absolute bottom-4 left-4  shadow-2xl border rounded-full bg-secondary border-white">
					<span className="p-3 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm">
						For {status}
					</span>
				</div>
			</div>

			<CardContent className="  px-4">
				<h3 className="font-bold text-base sm:text-lg mb-1 group-hover:text-orange transition-colors line-clamp-1">
					{title}
				</h3>
				<div className="flex items-center text-muted-foreground mb-2 sm:mb-3">
					<MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
					<span className="text-xs sm:text-sm line-clamp-1">{location}</span>
				</div>

				<div className="flex justify-between items-center mb-3 sm:mb-4">
					<div className="flex items-center gap-2 sm:gap-3 flex-wrap">
						<div className="flex items-center">
							<Bed className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-muted-foreground" />
							<span className="text-xs sm:text-sm">{beds} Beds</span>
						</div>
						<div className="flex items-center">
							<Bath className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-muted-foreground" />
							<span className="text-xs sm:text-sm">{baths} Baths</span>
						</div>
						<div className="flex items-center">
							<SquareIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-muted-foreground" />
							<span className="text-xs sm:text-sm">{sqft} </span>
						</div>
					</div>
				</div>
			</CardContent>

			<CardFooter className=" p-3 flex justify-between items-center border-t ">
				<span className="font-bold text-base sm:text-lg text-orange">
					{price}
				</span>
				<Link href={`/properties/${id}`} className="">
					<Button
						variant="outline"
						size="sm"
						className="text-xs h-8 sm:text-sm cursor-pointer"
					>
						View Details
					</Button>
				</Link>
			</CardFooter>
		</Card>
	);
}
