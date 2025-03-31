"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Share2, Flag } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import imageLoader from "@/utils/imageLoader";
import { usePathname } from "next/navigation";
import { HouseService } from "@/utils/services/HouseService";
import { House } from "@/types/HouseType";
import { Heart } from "lucide-react";
export default function Properties() {
  const router = usePathname();
  const id = router?.split("/").pop();
  const [data, setData] = useState<House>();
  const fetchDataById = async () => {
    try {
      if (!id) return;
      const data = await HouseService.findOne(id);
      setData(data);
    } catch (error) { }
  };
  useEffect(() => {
    fetchDataById();
  }, [id]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/assets/images/galary/galary-1.avif",
    "/assets/images/galary/galary-2.avif",
    "/assets/images/galary/galary-3.avif",
    "/assets/images/galary/galary-4.avif",
  ];

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="relative">
            <div className="relative w-full h-[400px] mb-4">
              <Image
                src={images[currentImageIndex]}
                alt="Property"
                loader={imageLoader}
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
                <button
                  onClick={handlePrevious}
                  className="bg-white/90 p-2 rounded-full hover:bg-white/95 transition dark:bg-white/95 dark:hover:bg-white/100"
                >
                  <span className="sr-only">Previous</span>
                  <div className="h-6 w-6 text-black dark:text-black">←</div>
                </button>
                <button
                  onClick={handleNext}
                  className="bg-white/90 p-2 rounded-full hover:bg-white/95 transition dark:bg-white/95 dark:hover:bg-white/100"
                >
                  <span className="sr-only">Next</span>
                  <div className="h-6 w-6 text-black dark:text-black">→</div>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  loader={imageLoader}
                  alt={`Property thumbnail ${index + 1}`}
                  width={200}
                  height={100}
                  className={`w-full h-[100px] object-cover rounded-lg cursor-pointer ${currentImageIndex === index ? "ring-2 ring-[color:var(--primary)]" : ""
                    }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-center gap-4 mb-6 bg-gray-100 p-4 rounded-lg dark:bg-[var(--card)]">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">★</span>
                <span>4</span>
                <span className="text-muted-foreground underline cursor-pointer">
                  (1 Review)
                </span>
              </div>
              {/* <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">
                POPULAR
              </span> */}

              <Button variant="default" size="sm" className="hidden md:inline-flex">
                POPULAR
              </Button>

              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span>•</span>
                  <span>Place</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>•</span>
                  <span>Melbourne</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Description</h2>
            <p className="text-muted-foreground mb-6">{data?.description}</p>
            <p className="text-muted-foreground mb-8">
              Nullam quis ante tiam sit amet orci eget eros faucibus tincidunt.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 ">
              <span className="inline-block">Overview</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 bg-gray-50 p-6 rounded-lg dark:bg-[var(--card)]">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg">
                  <span className="text-primary">🏷️</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Number ID</p>
                  <p className="text-muted-foreground">#1668</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg">
                  <span className="text-primary">📋</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Type</p>
                  <p className="text-muted-foreground">Salon, Luxury</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg">
                  <span className="text-primary">🏗️</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Build Year</p>
                  <p className="text-muted-foreground">2023</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg">
                  <span className="text-primary">💳</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Credit Cards</p>
                  <p className="text-muted-foreground">Yes</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg">
                  <span className="text-primary">💰</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Digital Payments</p>
                  <p className="text-muted-foreground">Bitcoin, Altcoin</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg">
                  <span className="text-primary">🅿️</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Parking</p>
                  <p className="text-muted-foreground">Yes</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Features & Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-[oklch(0.769_0.188_70.08)]">⭕</span>
                <span>Air Conditioning</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-[oklch(0.769_0.188_70.08)]">⭕</span>
                <span>Washer and dryer</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-[oklch(0.769_0.188_70.08)]">⭕</span>
                <span>Swimming Pool</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-[oklch(0.769_0.188_70.08)]">⭕</span>
                <span>Basketball</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-[oklch(0.769_0.188_70.08)]">⭕</span>
                <span>24x7 Security</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-[oklch(0.769_0.188_70.08)]">⭕</span>
                <span>Central Air</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-[oklch(0.769_0.188_70.08)]">⭕</span>
                <span>Media Room</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-[oklch(0.769_0.188_70.08)]">⭕</span>
                <span>Indoor Game</span>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>📍</span> Location
            </h2>

            {/* Map container */}
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-4">
              <iframe
                width="100%"
                height="100%"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0059,40.7128,-73.9973,40.7193&layer=mapnik"
                className="absolute top-0 left-0 w-full h-full border-0"
              ></iframe>
              {/* <div className="absolute top-4 left-4 z-10">
                <button className="bg-white w-8 h-8 flex items-center justify-center rounded-sm shadow-md mb-2">
                  +
                </button>
                <button className="bg-white w-8 h-8 flex items-center justify-center rounded-sm shadow-md">
                  −
                </button>
              </div> */}
            </div>

            {/* Address and Directions */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-[var(--primary)]">📍</span>
                <span>22 Broklyn Street New York USA</span>
              </div>
              <button className="flex items-center gap-2 text-[var(--primary)]">
                <span>Get Directions</span>
                <span>🔜</span>
              </button>
            </div>

            {/* Tags section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span>🏷️</span> Tag
              </h2>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gray-100 rounded-full text-sm dark:bg-[var(--card)]">
                  Colorful
                </span>
                <span className="px-4 py-2 bg-gray-100 rounded-full text-sm dark:bg-[var(--card)]">
                  Diamond
                </span>
                <span className="px-4 py-2 bg-gray-100 rounded-full text-sm dark:bg-[var(--card)]">
                  House
                </span>
                <span className="px-4 py-2 bg-gray-100 rounded-full text-sm dark:bg-[var(--card)]">
                  Luxury
                </span>
                <span className="px-4 py-2 bg-gray-100 rounded-full text-sm dark:bg-[var(--card)]">
                  Luxury Living
                </span>
                <span className="px-4 py-2 bg-gray-100 rounded-full text-sm dark:bg-[var(--card)]">
                  Rental Property
                </span>
              </div>
            </div>

            {/* Review section */}
            <div className="mb-12 bg-gray-50 p-6 rounded-lg dark:bg-[var(--card)]">
              <div className="flex justify-between items-center mb-6 ">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <span>💬</span> Review
                </h2>
                {/* <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                  <span>⭐</span> Login To Write Your Review
                </button> */}
                <Button variant="default" size="sm" className="hidden md:inline-flex">
                  <span>⭐</span> Login To Write Your Review
                </Button>
              </div>

              {/* Rating Overview */}
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[var(--primary)] text-white text-4xl font-bold w-16 h-16 flex items-center justify-center rounded-lg ">
                  4
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-gray-300">⭐</span>
                  </div>
                  <p className="text-muted-foreground">1 review</p>
                </div>
              </div>

              {/* Individual Review */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                    <img
                      src="/assets/images/agents/agent-1.png"
                      alt="admin"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">admin</h4>
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-400">⭐</span>
                          <span className="text-yellow-400">⭐</span>
                          <span className="text-yellow-400">⭐</span>
                          <span className="text-yellow-400">⭐</span>
                          <span className="text-gray-300">⭐</span>
                        </div>
                      </div>
                      <span className="text-muted-foreground text-sm">
                        8 November, 2024
                      </span>
                    </div>
                    <p className="text-muted-foreground">
                      It was amazing and I'll book it again soon, Every thing
                      was perfect except the water of bathroom was little hot.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Listings section - moved inside lg:col-span-2 */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Related Listings</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {[
                  {
                    id: 1,
                    image: "/assets/images/product/image1.png",
                    title: "The Pastry Corner",
                    rating: 3.0,
                    reviews: 1,
                    description: "Outdoor, luxury for you",
                    address: "22 Broklyn Street New York USA",
                    phone: "+84-666-888-99",
                    price: "$319.00",
                  },
                  {
                    id: 2,
                    image: "/assets/images/product/image2.png",
                    title: "Riki Hotel in Broklyn",
                    rating: 4.0,
                    reviews: 1,
                    description: "Outdoor, luxury for you",
                    address: "22 Broklyn Street New York USA",
                    phone: "+84-666-888-99",
                    price: "$239.00",
                  },
                ].map((listing) => (
                  <div
                    key={listing.id}
                    className="bg-white rounded-md overflow-hidden shadow-sm dark:bg-[var(--card)]"
                  >
                    <div className="relative">
                      <Image
                        src={listing.image}
                        alt={listing.title}
                        width={600}
                        height={400}
                        className="w-full h-[160px] object-cover"
                        loader={({ src }) => src}
                      />
                      <span className="absolute top-2 left-2 bg-[var(--primary)] text-black px-2 py-0.5 text-xs rounded">
                        POPULAR
                      </span>
                      <button className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full hover:bg-white dark:bg-[var(--card)]">
                        {/* <span className="text-sm">❤️</span> */}
                        <Heart className="w-4 h-4 " />
                      </button>
                      <div className="absolute -bottom-3 left-3">
                        <Image
                          src="/assets/images/agents/agent-1.png"
                          alt="Agent"
                          width={50}
                          height={50}
                          className="rounded-full border-2 border-white"
                          loader={({ src }) => src}
                        />
                      </div>
                    </div>

                    <div className="p-3">
                      <div className="flex items-center gap-1 mb-1">
                        <div className="flex text-yellow-400 text-xs">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={
                                i < listing.rating ? "" : "text-gray-300"
                              }
                            >
                              ⭐
                            </span>
                          ))}
                        </div>
                        <span className="text-muted-foreground text-xs">
                          {listing.rating} ({listing.reviews})
                        </span>
                      </div>

                      <h3 className="text-base font-semibold mb-1">
                        {listing.title}
                      </h3>
                      <p className="text-muted-foreground text-xs mb-2">
                        {listing.description}
                      </p>

                      <div className="space-y-1 mb-2">
                        <div className="flex items-center gap-1 text-muted-foreground text-xs">
                          <span>📍</span>
                          <span>{listing.address}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground text-xs">
                          <span>📞</span>
                          <span>{listing.phone}</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-[var(--primary)] text-base font-bold">
                          {listing.price}
                        </span>
                        {/* <button className="bg-gray-900 text-white px-2 py-1 rounded text-xs flex items-center gap-1 hover:bg-gray-800">
                          <span>🏠</span> Details
                        </button> */}
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-xs h-8 sm:text-sm cursor-pointer"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/assets/images/agents/agent-1.png" />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-lg">Admin</h3>
                  <p className="text-sm text-muted-foreground">
                    Member since 4 months ago
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>21 Monroe Ave, Rochester NY</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>888 666 111</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>http://example.com</span>
                </div>
              </div>

              <div className="flex gap-2 mt-6">
                <Button className="flex-1">View Profile</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">Property Contact</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Address</label>
                  <p className="text-muted-foreground">
                    22 Broklyn Street New York USA
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium">Phone</label>
                  <p className="text-muted-foreground">+84-666-888-99</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <p className="text-muted-foreground">contact@example.com</p>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Contact Listing Owner Form */}
          <Card className="mt-6">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="text-primary">📝</span>
                Contact Listing Owner
              </h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message..."
                    rows={4}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                {/* <button
                  type="submit"
                  className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
                >
                  Submit Now
                </button> */}
                <Button variant="default" size="sm" className="hidden md:inline-flex"
                  type="submit"
                >
                  Submit Now
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
