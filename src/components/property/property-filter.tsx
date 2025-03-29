"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Search, SlidersHorizontal } from "lucide-react";
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
import { useState } from "react";

export function PropertyFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Handle potential null searchParams
  const getParam = (key: string) => searchParams?.get(key) || "";

  const [keyword, setKeyword] = useState<string>(getParam("keyword"));
  const [category, setCategory] = useState<string>(getParam("category"));
  const [location, setLocation] = useState<string>(getParam("location"));

  const updateSearchParams = () => {
    const params = new URLSearchParams();
    if (keyword) params.set("keyword", keyword);
    if (category) params.set("category", category);
    if (location) params.set("location", location);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="rounded-t-lg border-b bg-card">
      <Tabs defaultValue="general">
        <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
          <TabsTrigger
            value="apartment"
            className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:bg-amber-500"
          >
            Apartment
          </TabsTrigger>
          <TabsTrigger
            value="general"
            className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:bg-amber-500"
          >
            General
          </TabsTrigger>
          <TabsTrigger
            value="villa"
            className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:bg-amber-500"
          >
            Villa
          </TabsTrigger>
        </TabsList>

        <div className="p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <p className="mb-2 text-sm font-medium">Keyword</p>
              <Input
                placeholder="Looking For?"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium">Category</p>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
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
                  onChange={(e) => setLocation(e.target.value)}
                />
                <Button variant="outline" onClick={updateSearchParams}>
                  <Search className="h-4 w-4" />
                </Button>
                <Button variant="outline">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
}
