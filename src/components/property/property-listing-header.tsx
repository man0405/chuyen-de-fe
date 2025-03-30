import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { ViewType } from "../../app/properties/page";
import { ViewToggle } from "./view-toggle";
import { Button } from "../ui/button";

interface PropertyListingHeaderProps {
  count: number;
  view: ViewType;
  onViewChange: (view: ViewType) => void;
  onSetSortBy: (sortBy: string) => void;
  onSetSortOrder: (sortOrder: string) => void;
}

export function PropertyListingHeader({
  count,
  view,
  onViewChange,
  onSetSortBy,
  onSetSortOrder,
}: PropertyListingHeaderProps) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <div className="text-sm font-medium">{count} Items Found</div>
      <div className="flex items-center gap-2">
        <ViewToggle view={view} onViewChange={onViewChange} />
        <select
          defaultValue="price"
          className="w-[180px] rounded-md border border-input bg-background px-3 py-2 text-sm"
          onChange={(e) => {
            switch (e.target.value) {
              case "price-low":
                onSetSortBy("price");
                onSetSortOrder("asc");
                break;
              case "price-high":
                onSetSortBy("price");
                onSetSortOrder("desc");
                break;
              case "star":
                onSetSortBy("star");
                onSetSortOrder("desc");
                break;
            }
          }}
        >
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="star">Rating</option>
        </select>
      </div>
    </div>
  );
}
