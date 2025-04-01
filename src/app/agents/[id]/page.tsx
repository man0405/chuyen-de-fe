"use client";
import Image from "next/image";
import Link from "next/link";
import {
	Home,
	Phone,
	Mail,
	Globe,
	Facebook,
	Twitter,
	Linkedin,
	Instagram,
	MapPin,
	Star,
	ChevronRight,
	ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PropertyCard from "@/components/property/PropertyCard";
import React, { useEffect, useState } from "react";
import { AgentService } from "@/utils/services/AgentService";
import { useParams } from "next/navigation";
import { Agent } from "@/types/AgentType";
import { House } from "@/types/HouseType";
import { HouseService } from "@/utils/services/HouseService";

export default function ProfilePage() {
	const params = useParams<{ id: string }>();
	const [agent, setAgent] = useState<Agent | null>(null);
	const [house, setHouse] = useState<House[]>([]);
	useEffect(() => {
		async function fetchData() {
			try {
				if (!params?.id) {
					console.warn("No ID parameter found");
					return;
				}
				console.log("Fetching agent with ID:", params.id);

				const agentData = await AgentService.getById(params.id);

				console.log(
					"Raw agent data response:",
					JSON.stringify(agentData, null, 2)
				);

				if (!agentData) {
					console.warn("No agent data returned");
					return;
				}

				setAgent(agentData);
				console.log("Agent state updated:", agentData);
				// Fetch houses for the specific user
				const options = {
					filter: { user_id: params.id }, // Lọc theo user_id
				};
				const houseData = await HouseService.find(options);
				console.log("House data for user:", houseData);
				setHouse(houseData || []);
				const agentsData = await AgentService.getAll();
				console.log("All agents count:", agentsData?.length);
			} catch (error) {
				if (error instanceof Error) {
					console.error("Failed to fetch agent data:", error.message);
				} else {
					console.error("Unknown error fetching agent data:", error);
				}
			}
		}

		fetchData();
	}, [params?.id]);

	return (
		<div className="min-h-screen flex flex-col">
			{/* Hero Section */}
			<div className="relative h-48 md:h-64  from-primary/50 to-primary/23 flex items-center justify-center">
				<div className="absolute inset-0 overflow-hidden">
					<Image
						src="/assets/images/about/roberto-nickson-tleCJiDOri0-unsplash.jpg"
						alt="City skyline"
						fill
						className="object-cover opacity-50"
						priority
						loader={({ src }) => src}
					/>
				</div>
				<div className="container mx-auto text-center z-10 text-white">
					<h1 className="text-3xl md:text-4xl font-bold mb-4">
						Author Profile
					</h1>
					<div className="flex items-center justify-center space-x-2">
						<Link href="/" className="hover:text-orange-400">
							Home
						</Link>
						<span>/</span>
						<span className="text-accent-foreground">Author Profile</span>
					</div>
				</div>
			</div>

			{/* Profile Section */}
			<main className="container mx-auto py-8 px-4">
				<div className="flex flex-col md:flex-row gap-8 mb-8">
					{/* Profile Card */}
					<div className="w-full md:w-1/3 flex flex-col items-center">
						<div className="relative mb-4">
							<Image
								// src="/assets/images/agents/agent-1.png"
								src={agent?.avatar || "/assets/images/agents/agent-1.png"}
								alt="Admin profile"
								width={120}
								height={120}
								loader={({ src }) => src}
								className="rounded-full border-4 border-white shadow-lg object-cover aspect-square"
							/>
						</div>
						<h2 className="text-xl font-bold">{agent?.name}</h2>
						<p className="text-sm text-muted-foreground mb-4">
							Member since 4 months ago
						</p>

						<div className="grid grid-cols-2 gap-4 w-full">
							<div className="bg-primary/30 p-4 rounded-lg flex items-center">
								<div className="bg-primary/80 text-white p-2 rounded-lg mr-3">
									<Star className="h-4 w-4" />
								</div>
								<div>
									<div className="text-lg font-bold">4.6</div>
									<div className="text-xs text-muted-foreground">
										18 Reviews
									</div>
								</div>
							</div>
							<div className="bg-primary/30 p-4 rounded-lg flex items-center">
								<div className="bg-primary/80 text-white p-2 rounded-lg mr-3">
									<Home className="h-4 w-4" />
								</div>
								<div>
									<div className="text-lg font-bold">18</div>
									<div className="text-xs text-muted-foreground">Listings</div>
								</div>
							</div>
						</div>
					</div>

					{/* Contact Info and About */}
					<div className="w-full md:w-2/3">
						<div className="grid md:grid-cols-2 gap-6">
							<div className="border rounded-lg p-6">
								<h3 className="text-lg font-bold mb-4">Contact Info</h3>
								<div className="space-y-4">
									<div className="flex items-start">
										<MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
										<span>{agent?.location}</span>
									</div>
									<div className="flex items-start">
										<Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
										<span>{agent?.phone}</span>
									</div>
									<div className="flex items-start">
										<Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
										<span>{agent?.email}</span>
									</div>
									<div className="flex items-start">
										<Globe className="h-5 w-5 text-primary mr-3 mt-0.5" />
										<span>http://example.com</span>
									</div>
									<div className="flex items-center space-x-2 pt-2">
										<Link
											href={agent?.facebook || "#"}
											className="bg-gray-100 dark:bg-gray-800 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
										>
											<Facebook className="h-4 w-4" />
										</Link>
										<Link
											href="#"
											className="bg-gray-100 dark:bg-gray-800 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
										>
											<Twitter className="h-4 w-4" />
										</Link>
										<Link
											href={agent?.linkedin || "#"}
											className="bg-gray-100 dark:bg-gray-800 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
										>
											<Linkedin className="h-4 w-4" />
										</Link>
										<Link
											href="#"
											className="bg-gray-100 dark:bg-gray-800 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
										>
											<Instagram className="h-4 w-4" />
										</Link>
									</div>
								</div>
							</div>
							<div className="border rounded-lg p-6">
								<h3 className="text-lg font-bold mb-4">About</h3>
								<p className="text-muted-foreground">{agent?.about}</p>
							</div>
						</div>
					</div>
				</div>

				{/* Property Listings */}
				<div className="mt-12">
					<div className="flex flex-col md:flex-row justify-between items-center mb-6">
						<Tabs defaultValue="general" className="w-full md:w-auto">
							<TabsList>
								<TabsTrigger value="apartment" className="flex items-center">
									<Home className="h-4 w-4 mr-2" />
									Apartment
								</TabsTrigger>
								<TabsTrigger value="general" className="flex items-center">
									<Home className="h-4 w-4 mr-2" />
									General
								</TabsTrigger>
								<TabsTrigger value="villa" className="flex items-center">
									<Home className="h-4 w-4 mr-2" />
									Villa
								</TabsTrigger>
							</TabsList>
						</Tabs>

						<div className="mt-4 md:mt-0">
							<Button variant="outline" className="flex items-center">
								Filter By Category <ChevronRight className="h-4 w-4 ml-2" />
							</Button>
						</div>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{house.length > 0 ? (
							house
								.slice(0, 6)
								.map((property, index) => (
									<PropertyCard
										key={index}
										image={
											property.image || "/assets/images/galary/galary-1.avif"
										}
										title={property.name}
										description={property.description}
										address={property.location}
										phone={agent?.phone || "N/A"}
										price={property.price}
										rating={4.8}
										reviews={32}
										badge={
											index === 0 ? "NEW" : index === 1 ? "FEATURED" : "POPULAR"
										}
									/>
								))
						) : (
							<div className="col-span-3 text-center py-8">
								<p className="text-muted-foreground">
									No properties found for this agent
								</p>
							</div>
						)}
					</div>

					{/* Pagination */}
					<div className="flex justify-center mt-8">
						<div className="flex items-center space-x-2">
							<Button className=" text-white w-8 h-8 p-0">1</Button>
							<Button variant="outline" className="w-8 h-8 p-0">
								2
							</Button>
							<Button variant="outline" className="w-8 h-8 p-0">
								<ArrowRight className="h-4 w-4" />
							</Button>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
