import { Star, MapPin, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";

interface PropertyCardProps {
	image: string;
	title: string;

	description: string;
	address: string;
	phone: string;
	price: string;
	rating: number;
	reviews: number;
	badge: string;
}

export default function PropertyCard({
	image,
	title,
	description,
	address,
	phone,
	price,
	rating,
	reviews,
	badge,
}: PropertyCardProps) {
	return (
		<Card className="overflow-hidden group">
			<div className="relative">
				<Image
					src={image || "/placeholder.svg"}
					alt={title}
					width={400}
					height={300}
					className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
				/>
				<Badge
					variant={"default"}
					className="absolute top-3 left-3 bg-primary text-white"
				>
					{badge}
				</Badge>
				<div className="absolute bottom-3 right-3  rounded-full h-8 w-8 flex items-center justify-center">
					<Image
						src="/assets/images/agents/agent-1.png"
						alt="Agent"
						width={40}
						height={40}
						className="rounded-full object-cover aspect-square "
					/>
				</div>
			</div>
			<CardContent className="pt-4">
				<div className="flex items-center mb-2">
					<div className="flex items-center text-primary">
						<Star className="h-4 w-4 fill-primary" />
						<span className="ml-1 text-sm font-medium">{rating}</span>
					</div>
					<span className="text-xs text-muted-foreground ml-1">
						({reviews})
					</span>
				</div>
				<h3 className="font-bold text-lg mb-1">{title}</h3>
				<p className="text-sm text-muted-foreground mb-3">{description}</p>
				<div className="space-y-2">
					<div className="flex items-center text-sm">
						<MapPin className="h-4 w-4 text-primary mr-2" />
						<span>{address}</span>
					</div>
					<div className="flex items-center text-sm">
						<Phone className="h-4 w-4 text-primary mr-2" />
						<span>{phone}</span>
					</div>
				</div>
			</CardContent>
			<CardFooter className="flex justify-between items-center border-t p-4">
				<div className="font-bold text-primary">{price}</div>
				<Button variant="default" className="bg-primary hover:bg-primary/90">
					Details
				</Button>
			</CardFooter>
		</Card>
	);
}
