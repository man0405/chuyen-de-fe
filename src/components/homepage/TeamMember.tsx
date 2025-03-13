import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Phone } from "lucide-react"

interface TeamMemberProps {
    name: string
    role: string
    image: string
    rating: number
    properties: number
}

export default function TeamMember({ name, role, image, rating, properties }: TeamMemberProps) {
    return (
        <Card className="overflow-hidden group">
            <div className="relative">
                <Image
                    src={image || "/placeholder.svg"}
                    alt={name}
                    width={300}
                    height={400}
                    className="w-full h-[350px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                        <button className="bg-orange text-white w-full py-2 rounded-md flex items-center justify-center">
                            <Phone className="h-4 w-4 mr-2" /> Contact Agent
                        </button>
                    </div>
                </div>
                <div className="absolute top-4 right-4">
                    <span className="bg-orange text-white px-3 py-1 rounded-full text-sm">{properties} Properties</span>
                </div>
            </div>

            <CardContent className="p-4 text-center">
                <h3 className="font-bold text-lg mb-1">{name}</h3>
                <p className="text-muted-foreground text-sm mb-2">{role}</p>
                <div className="flex items-center justify-center">
                    <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                                key={star}
                                className={`h-4 w-4 ${star <= Math.floor(rating) ? "fill-orange text-orange" : "text-gray-300"}`}
                            />
                        ))}
                    </div>
                    <span className="text-sm ml-2">{rating}</span>
                </div>
            </CardContent>
        </Card>
    )
}

