"use client";

import { useState, useEffect, Suspense } from "react";
import { PropertyFilters } from "../../components/property/property-filter";
import { PropertyListingHeader } from "../../components/property/property-listing-header";
import { PropertyGrid } from "../../components/property/property-grid";
import { PropertyList } from "../../components/property/property-list";
import { PropertyMap } from "../../components/property/property-map";
import { Skeleton } from "@/components/ui/skeleton";
import { Building, MapPin, Search } from "lucide-react";
import { House } from "@/types/HouseType";
import { HouseService } from "@/utils/services/HouseService";

// View options enum
export type ViewType = "grid" | "list" | "map";

export default function PropertyListing() {
  const [view, setView] = useState<ViewType>("grid");
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [data, setData] = useState<House[]>([]);
  const [filteredData, setFilteredData] = useState<House[]>([]);
  const [sortBy, setSortBy] = useState("price"); // support [price,star]
  const [sortOrder, setSortOrder] = useState("asc"); // support [asc,desc]

  useEffect(() => {
    filterData(searchTerm, selectedCategory, location, sortBy, sortOrder);
  }, [searchTerm, location, selectedCategory, sortBy, sortOrder]);

  // Handle search and filtering
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    filterData(term, selectedCategory, location, sortBy, sortOrder);
  };

  const handleLocation = (loc: string) => {
    setLocation(loc);
    filterData(searchTerm, selectedCategory, loc, sortBy, sortOrder);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    filterData(searchTerm, category, location, sortBy, sortOrder);
  };

  const handleSortBy = (sortBy: string) => {
    setSortBy(sortBy);
    filterData(searchTerm, selectedCategory, location, sortBy, sortOrder);
  };
  const handleSortOrder = (sortOrder: string) => {
    setSortOrder(sortOrder);
    filterData(searchTerm, selectedCategory, location, sortBy, sortOrder);
  };

  const filterData = async (
    term: string,
    category: string,
    loc: string,
    sortBy: string,
    sortOrder: string
  ) => {
    let filtered = [...data];

    if (term) {
      filtered = filtered.filter(
        (house) =>
          house.name.toLowerCase().includes(term.toLowerCase()) ||
          house.description.toLowerCase().includes(term.toLowerCase()) ||
          house.location.toLowerCase().includes(term.toLowerCase())
      );
    }

    if (loc) {
      filtered = filtered.filter((house) =>
        house.location.toLowerCase().includes(loc.toLowerCase())
      );
    }

    if (category && category !== "all") {
      filtered = filtered.filter((house) => house.status === category);
    }

    const result = await HouseService.find({
      ...filtered,
      sort: [
        {
          column: sortBy,
          ascending: sortOrder === "asc",
        },
      ],
    });
    console.log("Fetched data:", result); // For debugging
    setData(result);
    setFilteredData(result);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/90 to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Find Your Perfect Place
            </h1>
            <p className="text-white/90 text-lg mb-6">
              Discover the best locations, restaurants, hotels, and more in your
              area
            </p>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <MapPin className="h-4 w-4" />
              <span>Over 1,000+ locations available</span>
              <span className="mx-2">•</span>
              <Building className="h-4 w-4" />
              <span>Trusted by 10,000+ customers</span>
              <span className="mx-2">•</span>
              <Search className="h-4 w-4" />
              <span>Easy search & filter</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:shadow-xl">
          <Suspense fallback={<div className="p-4">Loading filters...</div>}>
            <PropertyFilters
              onSearch={handleSearch}
              onCategoryChange={handleCategoryChange}
              onLocation={handleLocation}
            />
          </Suspense>

          <div className="px-6 pb-6">
            {loading ? (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Skeleton className="h-8 w-32" />
                  <div className="flex gap-2">
                    <Skeleton className="h-10 w-32" />
                    <Skeleton className="h-10 w-40" />
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="rounded-lg overflow-hidden border">
                      <Skeleton className="h-48 w-full" />
                      <div className="p-4 space-y-3">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-2/3" />
                        <div className="flex justify-between pt-2">
                          <Skeleton className="h-6 w-20" />
                          <Skeleton className="h-10 w-24" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <PropertyListingHeader
                  count={filteredData.length}
                  view={view}
                  onViewChange={setView}
                  onSetSortBy={handleSortBy}
                  onSetSortOrder={handleSortOrder}
                />

                {filteredData.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <Search className="h-16 w-16 text-muted-foreground mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      No results found
                    </h3>
                    <p className="text-muted-foreground max-w-md">
                      We couldn't find any listings matching your search
                      criteria. Try adjusting your filters or search term.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className={view === "grid" ? "block" : "hidden"}>
                      <PropertyGrid listings={filteredData} />
                    </div>
                    <div className={view === "list" ? "block" : "hidden"}>
                      <PropertyList listings={filteredData} />
                    </div>
                    <div className={view === "map" ? "block" : "hidden"}>
                      <PropertyMap listings={filteredData} />
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
