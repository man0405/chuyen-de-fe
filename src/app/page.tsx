"use client";
import NewsCard from "@/components/homepage/NewsCard";
import PropertyCard from "@/components/homepage/PropertyCard";
import StatsCounter from "@/components/homepage/StatsCounters";
import TeamMember from "@/components/homepage/TeamMember";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Home,
  Search,
  MapPin,
  Building,
  Users,
  Shield,
  Clock,
  MessageSquare,
  ChevronRight,
  Star,
  Heart,
  Phone,
  DollarSign,
  House,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { House as HouseType } from "@/types/HouseType";
import { HouseService } from "@/utils/services/HouseService";

// Sample data for listings
const listings = [
  {
    id: 1,
    title: "Beauty Hairsalon",
    description: "Modern Hair Style Salon",
    rating: 4.0,
    reviews: 1,
    address: "22 Broklyn Street New York USA",
    phone: "+84-666-888-99",
    price: "EUR€199.00",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Hair salon
    popular: true,
  },
  {
    id: 2,
    title: "Foodie Restaurant",
    description: "One of the best Restaurant",
    rating: 5.0,
    reviews: 1,
    address: "22 Broklyn Street New York USA",
    phone: "+84-666-888-99",
    price: "EUR€199.00",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Restaurant
    popular: true,
  },
  {
    id: 3,
    title: "Riki Hotel in Broklyn",
    description: "Outdoor, luxury for you",
    rating: 4.0,
    reviews: 1,
    address: "22 Broklyn Street New York USA",
    phone: "+84-666-888-99",
    price: "EUR€239.00",
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Hotel
    popular: true,
  },
  {
    id: 4,
    title: "Silver Rose Store",
    description: "Outdoor, luxury for you",
    rating: 5.0,
    reviews: 1,
    address: "22 Broklyn Street New York USA",
    phone: "+84-666-888-99",
    price: "EUR€189.00",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Store
    popular: true,
  },
  {
    id: 5,
    title: "Novotel London Canary",
    description: "Outdoor, luxury for you",
    rating: 4.0,
    reviews: 1,
    address: "22 Broklyn Street New York USA",
    phone: "+84-666-888-99",
    price: "EUR€169.00",
    image:
      "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=3548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Hotel
    popular: true,
  },
  {
    id: 6,
    title: "The Pastry Corner",
    description: "Outdoor, luxury for you",
    rating: 3.0,
    reviews: 1,
    address: "22 Broklyn Street New York USA",
    phone: "+84-666-888-99",
    price: "EUR€319.00",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Bakery
    popular: true,
  },
];

// Listing Card Component
const ListingCard = ({ listing, onFavorite }: any) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    if (onFavorite) onFavorite(listing.id);
  };

  return (
    <Link href={"/properties/" + listing.id}>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
        <div className="relative">
          <Image
            src={listing.image || "/placeholder.svg"}
            alt={listing.title}
            width={400}
            height={250}
            className="w-full h-48 object-cover"
            loader={({ src }) => src}
          />
          <button
            onClick={handleFavoriteClick}
            className="absolute top-3 right-3 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-sm hover:bg-white dark:hover:bg-gray-700 transition-colors"
          >
            <Heart
              className={`h-5 w-5 ${
                isFavorite ? "fill-red-500 text-red-500" : "text-gray-500"
              }`}
            />
          </button>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-lg line-clamp-1">{listing.title}</h3>
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="text-sm font-medium">
                {listing.rating.toFixed(1)}
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">
            {listing.description}
          </p>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
            <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="truncate">{listing.address}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm">
              <Phone className="h-4 w-4 mr-1 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-500 dark:text-gray-400">
                {listing.phone}
              </span>
            </div>
            <div className="font-bold text-primary">{listing.price}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("buy");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredListings, setFilteredListings] = useState(listings);

  const [houseData, setHouseData] = useState<HouseType[]>([]);

  const fetchHouseData = async () => {
    try {
      const data = await HouseService.find();
      setHouseData(data);
    } finally {
      console.log("House data fetched successfully");
    }
  };

  useEffect(() => {
    fetchHouseData();
  }, []);

  const handleSearch = (e: any) => {
    e.preventDefault();
    const filtered = listings.filter(
      (listing) =>
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.address.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredListings(filtered);
  };

  const handleFavorite = (id: string) => {
    console.log(`Toggled favorite for listing ${id}`);
    // Here you would typically update a favorites list in state or backend
  };

  return (
    <div className="min-h-screen flex flex-col mx-auto ">
      {/* Hero Section */}
      <section className="bg-navy relative py-12 md:py-20 lg:py-32">
        <div className="containe px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mx-auto">
          <div className="space-y-4 md:space-y-6 z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-bold ">
              Global Home For Your Future Generation
            </h1>
            <p className=" text-base md:text-lg max-w-md">
              Find your dream property with our expert real estate services. We
              help you discover the perfect home.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <Button className=" text-sm md:text-base">
                <Link href={"/properties"}>Get Started</Link>
              </Button>
              <Button variant="outline" className="p-0 m-0">
                <Link href={"/about"} className="text-sm md:text-base p-3">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <Image
              src="/assets/images/galary/galary-1.avif"
              alt="Modern home"
              layout="responsive"
              width={16} // Aspect ratio (16:9 for example)
              height={12}
              className="rounded-lg shadow-xl"
              loader={({ src }) => src}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 md:py-10 bg-secondary">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            <StatsCounter value={30.3} label="Properties Sold" suffix="K" />
            <StatsCounter value={100.3} label="Happy Customers" suffix="K" />
            <StatsCounter value={150.5} label="Property Listings" suffix="K" />
          </div>
        </div>
      </section>

      {/* Enhanced Search Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
                Find Your Perfect Property
              </h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
                Discover amazing properties and businesses in your area with our
                advanced search tools
              </p>
            </div>

            <Card className="p-6 md:p-8 shadow-xl border-0 bg-white dark:bg-gray-800 rounded-2xl">
              <Tabs
                defaultValue="buy"
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="flex mb-6 md:mb-8 p-1 bg-gray-100 dark:bg-gray-700 rounded-xl">
                  <TabsTrigger
                    value="buy"
                    className="rounded-lg  data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-sm"
                  >
                    <Home className="w-4 h-4 mr-2" />
                    Buy
                  </TabsTrigger>
                  <TabsTrigger
                    value="rent"
                    className="rounded-lg  data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-sm"
                  >
                    <Building className="w-4 h-4 mr-2" />
                    Rent
                  </TabsTrigger>
                  <TabsTrigger
                    value="sell"
                    className="rounded-lg  data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-sm"
                  >
                    <DollarSign className="w-4 h-4 mr-2" />
                    Sell
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="buy" className="space-y-6">
                  <form onSubmit={handleSearch} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium mb-1 block">
                          Search Properties
                        </label>
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                          <Input
                            className="pl-10 text-sm bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                            placeholder="Search by name, type, location..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium mb-1 block">
                          Property Type
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                          <select className="w-full h-10 pl-10 pr-4 rounded-md border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-sm">
                            <option>Any Type</option>
                            <option>House</option>
                            <option>Apartment</option>
                            <option>Villa</option>
                            <option>Commercial</option>
                            <option>Restaurant</option>
                            <option>Hotel</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium mb-1 block">
                          Price Range
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                            €
                          </span>
                          <Input
                            className="pl-10 text-sm bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                            placeholder="Max Price"
                          />
                        </div>
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-xl transition-colors"
                    >
                      <Search className="mr-2 h-4 w-4" />
                      Search Properties
                    </Button>
                  </form>

                  {/* Search Results */}
                  <div className="mt-8">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-bold">
                        {filteredListings.length} Properties Found
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Sort by:</span>
                        <select className="text-sm border rounded-md p-1 bg-transparent">
                          <option>Newest</option>
                          <option>Price: Low to High</option>
                          <option>Price: High to Low</option>
                          <option>Rating</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredListings.map((listing) => (
                        <ListingCard
                          key={listing.id}
                          listing={listing}
                          onFavorite={handleFavorite}
                        />
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="rent" className="space-y-6">
                  <form onSubmit={handleSearch} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium mb-1 block">
                          Search Rentals
                        </label>
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                          <Input
                            className="pl-10 text-sm bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                            placeholder="Search by name, type, location..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium mb-1 block">
                          Property Type
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                          <select className="w-full h-10 pl-10 pr-4 rounded-md border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-sm">
                            <option>Any Type</option>
                            <option>House</option>
                            <option>Apartment</option>
                            <option>Villa</option>
                            <option>Commercial</option>
                            <option>Restaurant</option>
                            <option>Hotel</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium mb-1 block">
                          Monthly Rent
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                            €
                          </span>
                          <Input
                            className="pl-10 text-sm bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                            placeholder="Max Rent"
                          />
                        </div>
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-xl transition-colors"
                    >
                      <Search className="mr-2 h-4 w-4" />
                      Find Rentals
                    </Button>
                  </form>

                  {/* Search Results */}
                  <div className="mt-8">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-bold">
                        {filteredListings.length} Properties Found
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Sort by:</span>
                        <select className="text-sm border rounded-md p-1 bg-transparent">
                          <option>Newest</option>
                          <option>Price: Low to High</option>
                          <option>Price: High to Low</option>
                          <option>Rating</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredListings.map((listing) => (
                        <ListingCard
                          key={listing.id}
                          listing={listing}
                          onFavorite={handleFavorite}
                        />
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="sell" className="space-y-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium mb-1 block">
                          Property Address
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                          <Input
                            className="pl-10 text-sm bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                            placeholder="Enter your property address"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium mb-1 block">
                          Property Type
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                          <select className="w-full h-10 pl-10 pr-4 rounded-md border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-sm">
                            <option>Select Type</option>
                            <option>House</option>
                            <option>Apartment</option>
                            <option>Villa</option>
                            <option>Commercial</option>
                            <option>Restaurant</option>
                            <option>Hotel</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium mb-1 block">
                        Property Details
                      </label>
                      <textarea
                        className="w-full p-3 rounded-md border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-sm"
                        rows={4}
                        placeholder="Provide additional details about your property..."
                      ></textarea>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-xl transition-colors">
                      Get Free Valuation
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </section>

      {/* Top Properties Section */}
      <section className="py-10 md:py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row mb-6 md:mb-10 gap-4 justify-between items-center ">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Discover Top Properties
              </h2>
              <p className="text-muted-foreground">
                Explore our handpicked selection of top properties
              </p>
            </div>
            <Button variant="default" className="p-0">
              <Link
                href={"/properties"}
                className="flex items-center w-full md:w-auto p-3"
              >
                View All <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {houseData.slice(0, 3).map((house) => (
              <PropertyCard
                key={house.house_id}
                id={house.house_id}
                title={house.description}
                location={house.location}
                price={house.price}
                beds={Number(house.bed)}
                baths={Number(house.bath)}
                sqft={Number(house.size)}
                image={
                  house.image
                    ? house.image
                    : "/assets/images/galary/galary-2.avif"
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Projects Section */}
      <section className="py-16 bg-secondary md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Our Latest Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a look at our most recent developments and upcoming
              properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <NewsCard
              title="New Development in Suburban Area"
              date="March 10, 2025"
              excerpt="Explore our newest housing development featuring modern amenities and green spaces."
              image="/assets/images/galary/galary-1.avif"
            />
            <NewsCard
              title="Luxury Apartments Now Available"
              date="March 5, 2025"
              excerpt="Our high-end apartment complex is now open for viewings with special introductory prices."
              image="/assets/images/galary/galary-2.avif"
            />
            <NewsCard
              title="Commercial Spaces in Business District"
              date="February 28, 2025"
              excerpt="Premium office spaces available for lease in the heart of the financial district."
              image="/assets/images/galary/galary-3.avif"
            />
            <NewsCard
              title="Eco-Friendly Housing Project"
              date="February 20, 2025"
              excerpt="Sustainable living spaces with solar power and rainwater harvesting systems."
              image="/assets/images/galary/galary-4.avif"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-16 ">
        <div className="container mx-auto  px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center  mb-12">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <Home className="h-6 w-6 text-orange" />
              </div>
              <h3 className=" font-semibold mb-2">Exclusive Properties</h3>
              <p className="text-accent-foreground text-sm">
                Access to exclusive listings not available elsewhere
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <Users className="h-6 w-6 text-orange" />
              </div>
              <h3 className=" font-semibold mb-2">Expert Agents</h3>
              <p className="text-accent-foreground text-sm">
                Professional agents with years of experience in the real estate
                market
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <Shield className="h-6 w-6 text-orange" />
              </div>
              <h3 className=" font-semibold mb-2">Secure Transactions</h3>
              <p className="text-accent-foreground text-sm">
                Safe and secure property transactions
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <Clock className="h-6 w-6 text-orange" />
              </div>
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-accent-foreground text-sm">
                Round-the-clock customer support
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <MessageSquare className="h-6 w-6 text-orange" />
              </div>
              <h3 className="font-semibold mb-2">Free Consultation</h3>
              <p className="text-accent-foreground text-sm">
                Get free expert advice on your property needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Meet Our Real Estate Team</h2>
            <Button variant="outline">View All Team</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember
              name="Sarah Johnson"
              role="Senior Agent"
              image="/assets/images/ceo.jpeg"
              rating={4.9}
              properties={120}
            />
            <TeamMember
              name="Michael Chen"
              role="Property Consultant"
              image="/assets/images/ceo.jpeg"
              rating={4.8}
              properties={98}
            />
            <TeamMember
              name="Jessica Williams"
              role="Luxury Specialist"
              image="/assets/images/ceo.jpeg"
              rating={4.7}
              properties={85}
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ">
            {/* Left Image */}
            <div className="justify-self-center">
              <Image
                src="/assets/images/agents/agent-2.png"
                alt="Client"
                width={500}
                height={400}
                className="rounded-lg object-cover  "
                loader={({ src }) => src}
              />
            </div>

            {/* Right Testimonial Section */}
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">
                What Your Client Say?
              </h2>
              <p className="text-white mb-8 leading-relaxed">
                We pride ourselves on providing exceptional service to our
                clients. Here's what they have to say about their experience
                with us.
              </p>

              {/* Testimonial Box */}
              <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg mb-6">
                <p className="italic mb-6 text-lg">
                  "Working with this real estate agency was a fantastic
                  experience. They found us our dream home within our budget and
                  made the entire process smooth and stress-free."
                </p>

                <div className="flex items-center">
                  <Image
                    src="https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=Robert+Anderson"
                    alt="Testimonial author"
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                    loader={({ src }) => src}
                  />
                  <div>
                    <h4 className="font-semibold text-lg">Robert Anderson</h4>
                    <p className="text-sm text-muted-foreground">Homeowner</p>
                  </div>
                  <div className="ml-auto flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 fill-orange text-orange"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16 md:py-16">
        <div className="container mx-auto  px-4 md:px-6">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Featured Properties</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Popular
              </Button>
              <Button variant="outline" size="sm">
                Latest
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PropertyCard
              id={"1"}
              title="Luxury Penthouse"
              location="Manhattan, NY"
              price="$4,200,000"
              beds={4}
              baths={3}
              sqft={3200}
              image="/assets/images/galary/galary-1.avif"
            />
            <PropertyCard
              id={"1"}
              title="Waterfront Estate"
              location="Miami Beach, FL"
              price="$6,500,000"
              beds={6}
              baths={5}
              sqft={5500}
              image="/assets/images/galary/galary-1.avif"
            />
            <PropertyCard
              id={"1"}
              title="Modern Townhouse"
              location="San Francisco, CA"
              price="$1,850,000"
              beds={3}
              baths={2}
              sqft={1650}
              image="/assets/images/galary/galary-1.avif"
            />
            <PropertyCard
              id={"1"}
              title="Mountain Retreat"
              location="Aspen, CO"
              price="$3,900,000"
              beds={4}
              baths={4}
              sqft={3800}
              image="/assets/images/galary/galary-1.avif"
            />
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-primary-foreground  md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Our Latest News Update</h2>
            <Button variant="outline">View All News</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <NewsCard
              title="10 Tips for First-Time Home Buyers in 2025"
              date="March 10, 2025"
              excerpt="Discover essential tips to help you navigate the home buying process with confidence."
              image="/assets/images/galary/galary-2.avif"
            />
            <NewsCard
              title="Luxury Real Estate Market Trends for 2025"
              date="March 8, 2025"
              excerpt="Explore the latest trends shaping the luxury real estate market this year."
              image="/assets/images/galary/galary-2.avif"
            />
            <NewsCard
              title="How to Increase Your Property's Value Before Selling"
              date="March 5, 2025"
              excerpt="Learn effective strategies to boost your property's market value before listing it."
              image="/assets/images/galary/galary-2.avif"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
