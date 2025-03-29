"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

interface PropertyFiltersProps {
  onSearch?: (term: string) => void;
  onCategoryChange?: (category: string) => void;
  onPriceChange?: (category: string) => void;
  onLocation?: (term: string) => void;
}

export function PropertyFilters({
  onSearch,
  onCategoryChange,
  onPriceChange,
  onLocation,
}: PropertyFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize state from URL search params
  const [searchTerm, setSearchTerm] = useState(() => {
    return searchParams?.get("search") || "";
  });

  const [location, setLocation] = useState(() => {
    return searchParams?.get("location") || "";
  });

  const [category, setCategory] = useState(() => {
    return searchParams?.get("category") || "";
  });

  const [price, setPrice] = useState(() => {
    return searchParams?.get("price") || "";
  });

  const [resType, setResType] = useState(() => {
    return searchParams?.get("resType") || "";
  });
  const [hotelType, setHotelType] = useState(() => {
    return searchParams?.get("hotelType") || "";
  });
  const [serviceType, setServiceType] = useState(() => {
    return searchParams?.get("serviceType") || "";
  });

  const [priceRange, setPriceRange] = useState(() => {
    return [
      Number.parseInt(searchParams?.get("minPrice") || "0"),
      Number.parseInt(searchParams?.get("maxPrice") || "1000"),
    ];
  });
  const [activeTab, setActiveTab] = useState(() => {
    return searchParams?.get("tab") || "general";
  });
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  // Update active filters based on URL params
  useEffect(() => {
    if (!searchParams) return;

    const newFilters: string[] = [];

    if (searchParams.get("search")) {
      newFilters.push(`Keyword: ${searchParams.get("search")}`);
    }

    if (
      searchParams.get("category") &&
      searchParams.get("category") !== "all"
    ) {
      newFilters.push(`Category: ${searchParams.get("category")}`);
    }

    if (searchParams.get("minPrice") || searchParams.get("maxPrice")) {
      newFilters.push(
        `Price: €${searchParams.get("minPrice") || "0"} - €${
          searchParams.get("maxPrice") || "1000"
        }`
      );
    }

    setActiveFilters(newFilters);
  }, [searchParams]);

  // Update URL with current filters
  const updateSearchParams = (params: Record<string, string>) => {
    if (typeof window === "undefined") return;

    const url = new URL(window.location.href);

    // Update or add new params
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        url.searchParams.set(key, value);
      } else {
        url.searchParams.delete(key);
      }
    });

    // Push the new URL to the router
    router.push(url.pathname + url.search);
  };

  const handleSearch = () => {
    updateSearchParams({ search: searchTerm });
    if (onSearch) onSearch(searchTerm);
  };

  const handleLocation = () => {
    updateSearchParams({ location: location });
    if (onLocation) onLocation(location);
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    updateSearchParams({ category: value });

    if (onCategoryChange) onCategoryChange(value);

    // Add to active filters if not "all"
    if (value && value !== "all") {
      if (!activeFilters.includes(`Category: ${value}`)) {
        setActiveFilters([...activeFilters, `Category: ${value}`]);
      }
    } else {
      // Remove category filters
      setActiveFilters(
        activeFilters.filter((filter) => !filter.startsWith("Category:"))
      );
    }
  };

  const handlePrice = (value: string) => {
    setPrice(value);
    updateSearchParams({ price: value });

    if (onPriceChange) onPriceChange(value);

    // Add to active filters if not "all"
    if (value && value !== "all") {
      if (!activeFilters.includes(`Price: ${value}`)) {
        setActiveFilters([...activeFilters, `Price: ${value}`]);
      }
    } else {
      // Remove category filters
      setActiveFilters(
        activeFilters.filter((filter) => !filter.startsWith("Price:"))
      );
    }
  };
  const handleResType = (value: string) => {
    setResType(value);
    updateSearchParams({ resType: value });

    // Add to active filters if not "all"
    if (value && value !== "all") {
      if (!activeFilters.includes(`Restaurant Type: ${value}`)) {
        setActiveFilters([...activeFilters, `Restaurant Type: ${value}`]);
      }
    } else {
      // Remove category filters
      setActiveFilters(
        activeFilters.filter((filter) => !filter.startsWith("Restaurant Type:"))
      );
    }
  };
  const handleHotelType = (value: string) => {
    setHotelType(value);
    updateSearchParams({ hotelType: value });

    // Add to active filters if not "all"
    if (value && value !== "all") {
      if (!activeFilters.includes(`Hotel Type: ${value}`)) {
        setActiveFilters([...activeFilters, `Hotel Type: ${value}`]);
      }
    } else {
      // Remove category filters
      setActiveFilters(
        activeFilters.filter((filter) => !filter.startsWith("Hotel Type:"))
      );
    }
  };
  const handleServiceType = (value: string) => {
    setServiceType(value);
    updateSearchParams({ serviceType: value });

    // Add to active filters if not "all"
    if (value && value !== "all") {
      if (!activeFilters.includes(`Service Type: ${value}`)) {
        setActiveFilters([...activeFilters, `Service Type: ${value}`]);
      }
    } else {
      // Remove category filters
      setActiveFilters(
        activeFilters.filter((filter) => !filter.startsWith("Service Type:"))
      );
    }
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);

    // Clear all existing search parameters
    const url = new URL(window.location.href);
    url.search = ""; // Remove all search parameters

    // Add only the new tab parameter
    url.searchParams.set("tab", value);

    // Update the router with the new URL
    router.push(url.pathname + url.search);

    // Clear active filters to reflect the new tab state
    setActiveFilters([]);
  };

  const handlePriceRangeChange = (value: number[]) => {
    setPriceRange(value);
    updateSearchParams({
      minPrice: value[0].toString(),
      maxPrice: value[1].toString(),
    });
  };

  const handleRemoveFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter));

    // Reset the corresponding filter
    if (filter.startsWith("Category:")) {
      setCategory("");
      updateSearchParams({ category: "" });
      if (onCategoryChange) onCategoryChange("");
    } else if (filter.startsWith("Keyword:")) {
      setSearchTerm("");
      updateSearchParams({ search: "" });
      if (onSearch) onSearch("");
    } else if (filter.startsWith("Price:")) {
      setPriceRange([0, 1000]);
      updateSearchParams({ minPrice: "0", maxPrice: "1000" });
    }
  };

  const handleClearAll = () => {
    setActiveFilters([]);
    setSearchTerm("");
    setCategory("");
    setPriceRange([0, 1000]);

    // Clear all search params
    router.push(window.location.pathname);

    if (onSearch) onSearch("");
    if (onCategoryChange) onCategoryChange("");
  };

  const handleKeyDownSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleKeyDownLocation = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleLocation();
    }
  };

  return (
    <div className="rounded-t-lg border-b bg-card">
      <Tabs
        defaultValue={activeTab}
        value={activeTab}
        onValueChange={handleTabChange}
      >
        <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
          <TabsTrigger
            value="general"
            className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
          >
            All Listings
          </TabsTrigger>
          <TabsTrigger
            value="restaurant"
            className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
          >
            Restaurants
          </TabsTrigger>
          <TabsTrigger
            value="hotel"
            className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
          >
            Hotels
          </TabsTrigger>
          <TabsTrigger
            value="beauty"
            className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
          >
            Beauty & Spa
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <p className="mb-2 text-sm font-medium">Keyword</p>
              <div className="relative">
                <Input
                  placeholder="Looking For?"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleKeyDownSearch}
                  className="pr-10"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full"
                  onClick={handleSearch}
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium">Category</p>
              <Select value={category} onValueChange={handleCategoryChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="restaurant">Restaurant</SelectItem>
                  <SelectItem value="hotel">Hotel</SelectItem>
                  <SelectItem value="shopping">Shopping</SelectItem>
                  <SelectItem value="beauty">Beauty & Spa</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium">Location</p>
              <div className="flex gap-2">
                <Input
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleKeyDownLocation}
                  className="flex-1"
                />
                <Button variant="outline" onClick={handleLocation}>
                  <Search className="h-4 w-4" />
                </Button>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline">
                      <SlidersHorizontal className="h-4 w-4 mr-2" />
                      More
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="w-full sm:max-w-md">
                    <SheetHeader>
                      <SheetTitle>Advanced Filters</SheetTitle>
                      <SheetDescription>
                        Refine your search with additional filters
                      </SheetDescription>
                    </SheetHeader>
                    <div className="mt-6 space-y-6">
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="price">
                          <AccordionTrigger>Price Range</AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4">
                              <Slider
                                defaultValue={[0, 1000]}
                                max={1000}
                                step={10}
                                value={priceRange}
                                onValueChange={handlePriceRangeChange}
                              />
                              <div className="flex items-center justify-between">
                                <span>€{priceRange[0]}</span>
                                <span>€{priceRange[1]}</span>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="rating">
                          <AccordionTrigger>Rating</AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-2">
                              {[5, 4, 3, 2, 1].map((rating) => (
                                <div
                                  key={rating}
                                  className="flex items-center space-x-2"
                                >
                                  <Checkbox id={`rating-${rating}`} />
                                  <label
                                    htmlFor={`rating-${rating}`}
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    {rating} Stars & Up
                                  </label>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="amenities">
                          <AccordionTrigger>Amenities</AccordionTrigger>
                          <AccordionContent>
                            <div className="grid grid-cols-2 gap-2">
                              {[
                                "Wi-Fi",
                                "Parking",
                                "Pool",
                                "Gym",
                                "Restaurant",
                                "Bar",
                                "Spa",
                                "Pet Friendly",
                              ].map((amenity) => (
                                <div
                                  key={amenity}
                                  className="flex items-center space-x-2"
                                >
                                  <Checkbox id={`amenity-${amenity}`} />
                                  <label
                                    htmlFor={`amenity-${amenity}`}
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    {amenity}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" onClick={handleClearAll}>
                          Reset
                        </Button>
                        <Button>Apply Filters</Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>

          {/* Active filters */}
          {activeFilters.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {activeFilters.map((filter) => (
                <Badge
                  key={filter}
                  variant="secondary"
                  className="flex items-center gap-1"
                >
                  {filter}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4 p-0 hover:bg-transparent"
                    onClick={() => handleRemoveFilter(filter)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              ))}
              <Button
                variant="ghost"
                size="sm"
                className="h-6 text-xs"
                onClick={handleClearAll}
              >
                Clear All
              </Button>
            </div>
          )}
        </TabsContent>

        {/* Other tabs content */}
        <TabsContent value="restaurant" className="p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <p className="mb-2 text-sm font-medium">Restaurant Type</p>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="italian">Italian</SelectItem>
                  <SelectItem value="asian">Asian</SelectItem>
                  <SelectItem value="mexican">Mexican</SelectItem>
                  <SelectItem value="cafe">Café</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium">Price Range</p>
              <Select value={price} onValueChange={handlePrice}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="100-1000">$ (Inspensive)</SelectItem>
                  <SelectItem value="1000-10000">$$ (Moderate)</SelectItem>
                  <SelectItem value="10000-100000">$$$ (Expensive)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium">Location</p>
              <div className="flex gap-2">
                <Input
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onKeyDown={handleKeyDownLocation}
                  className="flex-1"
                />
                <Button variant="outline" onClick={handleLocation}>
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="hotel" className="p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <p className="mb-2 text-sm font-medium">Hotel Type</p>
              <Select value={resType} onValueChange={handleResType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="luxury">Luxury</SelectItem>
                  <SelectItem value="boutique">Boutique</SelectItem>
                  <SelectItem value="resort">Resort</SelectItem>
                  <SelectItem value="budget">Budget</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium">Star Rating</p>
              <Select value={hotelType} onValueChange={handleHotelType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ratings</SelectItem>
                  <SelectItem value="5">5 Stars</SelectItem>
                  <SelectItem value="4">4 Stars & Up</SelectItem>
                  <SelectItem value="3">3 Stars & Up</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium">Location</p>
              <div className="flex gap-2">
                <Input
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onKeyDown={handleKeyDownLocation}
                  className="flex-1"
                />
                <Button variant="outline" onClick={handleLocation}>
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="beauty" className="p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <p className="mb-2 text-sm font-medium">Service Type</p>
              <Select value={serviceType} onValueChange={handleServiceType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Services</SelectItem>
                  <SelectItem value="hair">Hair Salon</SelectItem>
                  <SelectItem value="spa">Spa & Massage</SelectItem>
                  <SelectItem value="nails">Nail Salon</SelectItem>
                  <SelectItem value="facial">Facial & Skincare</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium">Price Range</p>
              <Select value={price} onValueChange={handlePrice}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="$">$ (Inexpensive)</SelectItem>
                  <SelectItem value="$$">$$ (Moderate)</SelectItem>
                  <SelectItem value="$$$">$$$ (Expensive)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium">Location</p>
              <div className="flex gap-2">
                <Input
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onKeyDown={handleKeyDownLocation}
                  className="flex-1"
                />
                <Button variant="outline" onClick={handleLocation}>
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
