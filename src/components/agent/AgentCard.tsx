import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Facebook,
	Instagram,
	Linkedin,
	MapPin,
	Phone,
	Twitter,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

type AgentCardProps = {
	id: number;
	name: string;
	description: string;
	address: string;
	phone: string;
	image: string;
};
export default function AgentCard(agent: AgentCardProps) {
	return (
		<Card
			key={agent.id}
			className="overflow-hidden group transition-all duration-300 hover:shadow-lg"
		>
			<CardHeader className="p-6 flex flex-row items-center gap-4">
				<Avatar className="h-16 w-16 border-2 border-primary/10">
					<AvatarImage src={agent.image} alt={agent.name} />
					<AvatarFallback>
						{agent.name.substring(0, 2).toUpperCase()}
					</AvatarFallback>
				</Avatar>
				<div>
					<h3 className="text-lg font-semibold">{agent.name}</h3>
				</div>
			</CardHeader>
			<CardContent className="px-6 pb-2">
				<p className="text-sm text-muted-foreground mb-4">
					{agent.description}
				</p>
				<div className="flex items-center gap-2 text-sm mb-2">
					<MapPin className="h-4 w-4 text-primary" />
					<span>{agent.address}</span>
				</div>
				<div className="flex items-center gap-2 text-sm">
					<Phone className="h-4 w-4 text-primary" />
					<span>{agent.phone}</span>
				</div>
			</CardContent>
			<CardFooter className="p-6 flex flex-col gap-4">
				<div className="flex items-center gap-2">
					<Link
						href="#"
						className="p-1.5 rounded-full bg-muted hover:bg-muted/80 transition-colors"
					>
						<Facebook className="h-4 w-4" />
					</Link>
					<Link
						href="#"
						className="p-1.5 rounded-full bg-muted hover:bg-muted/80 transition-colors"
					>
						<Twitter className="h-4 w-4" />
					</Link>
					<Link
						href="#"
						className="p-1.5 rounded-full bg-muted hover:bg-muted/80 transition-colors"
					>
						<Linkedin className="h-4 w-4" />
					</Link>
					<Link
						href="#"
						className="p-1.5 rounded-full bg-muted hover:bg-muted/80 transition-colors"
					>
						<Instagram className="h-4 w-4" />
					</Link>
				</div>
				<Button
					variant="outline"
					className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors
                        pointer-events-auto
                    "
				>
					<Link href={`/agents/${agent.id}`}>
						View All Listings
					</Link>
				</Button>
			</CardFooter>
		</Card>
	);
}
