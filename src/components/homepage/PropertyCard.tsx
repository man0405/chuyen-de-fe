import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Bed, Bath, SquareIcon, MapPin, Heart, Badge } from "lucide-react"

interface PropertyCardProps {
    title: string
    location: string
    price: string
    beds: number
    baths: number
    sqft: number
    image: string
}

export default function PropertyCard({ title, location, price, beds, baths, sqft, image }: PropertyCardProps) {
    return (
        <Card className="overflow-hidden group pt-0">
            <div className="relative">
                <Image
                    src={image || "/placeholder.svg"}
                    alt={title}
                    width={400}
                    height={250}
                    className="w-full h-[220px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 shadow-2xl border rounded-full border-white">
                    <button className=" p-2 rounded-full transition-colors bg-secondary">
                        <Heart className="h-4 w-4" />
                    </button>
                </div>
                <div className="absolute bottom-4 left-4  shadow-2xl border rounded-full bg-secondary border-white">
                    <span className=" p-3  ">For Sale</span>
                </div>
            </div>

            <CardContent className="px-4">
                <h3 className="font-bold text-lg mb-1  transition-colors">{title}</h3>
                <div className="flex items-center text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{location}</span>
                </div>

                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center">
                            <Bed className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span className="text-sm">{beds} Beds</span>
                        </div>
                        <div className="flex items-center">
                            <Bath className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span className="text-sm">{baths} Baths</span>
                        </div>
                        <div className="flex items-center">
                            <SquareIcon className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span className="text-sm">{sqft} sqft</span>
                        </div>
                    </div>
                </div>
            </CardContent>

            <CardFooter className="px-4 pt-4 flex justify-between items-center border-t ">
                <span className="font-bold text-lg">{price}</span>
                <Button variant="secondary" size="sm">
                    View Details
                </Button>
            </CardFooter>
        </Card>
    )
}

