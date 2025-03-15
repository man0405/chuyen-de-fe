import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { ViewType } from "../../app/properties/page";
import { ViewToggle } from "./view-toggle";

interface PropertyListingHeaderProps {
  count: number;
  view: ViewType;
  onViewChange: (view: ViewType) => void;
}

export function PropertyListingHeader({
  count,
  view,
  onViewChange,
}: PropertyListingHeaderProps) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <div className="text-sm font-medium">{count} Items Found</div>
      <div className="flex items-center gap-2">
        <ViewToggle view={view} onViewChange={onViewChange} />
        <Select defaultValue="recommended">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recommended">Recommended</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="rating">Rating</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
