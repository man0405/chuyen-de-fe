"use client";

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

export function PropertyFilters() {
  return (
    <div className="rounded-t-lg border-b bg-card">
      <Tabs defaultValue="general">
        <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
          <TabsTrigger
            value="apartment"
            className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary"
          >
            Apartment
          </TabsTrigger>
          <TabsTrigger
            value="general"
            className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            General
          </TabsTrigger>
          <TabsTrigger
            value="villa"
            className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary"
          >
            Villa
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <p className="mb-2 text-sm font-medium">Keyword</p>
              <Input placeholder="Looking For?" />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium">Category</p>
              <Select>
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
                <Input placeholder="Location" className="flex-1" />
                <Button variant="outline">
                  <Search className="h-4 w-4" />
                </Button>
                <Button variant="outline">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  More
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
