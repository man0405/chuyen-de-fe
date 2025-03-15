import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface PropertyMapProps {
  listings: Array<{
    id: number;
    title: string;
    address: string;
    price: string;
    image: string;
  }>;
}

export function PropertyMap({ listings }: PropertyMapProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative h-[600px] bg-muted/20">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="mx-auto h-12 w-12 text-muted-foreground" />
              <p className="mt-2 text-lg font-medium">Map View</p>
              <p className="text-sm text-muted-foreground">
                Showing {listings.length} properties on the map
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
