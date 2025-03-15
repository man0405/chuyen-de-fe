import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Phone } from "lucide-react"
import { Button } from "../ui/button"

// interface TeamMemberProps {
//     name: string
//     role: string
//     image: string
//     rating: number
//     properties: number
// }

// export default function TeamMember({ name, role, image, rating, properties }: TeamMemberProps) {
//     return (
//         <Card className="overflow-hidden group pt-0">
//             <div className="relative ">
//                 <Image

//                     src={image || "/placeholder.svg"}
//                     alt={name}
//                     width={300}
//                     height={400}
//                     className="w-full   object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
//                     <div className=" w-full">
//                         <Button variant={"secondary"} className="w-full  flex items-center justify-center">
//                             <Phone className="h-4 w-4 mr-2" /> Contact Agent
//                         </Button>
//                     </div>
//                 </div>
//                 <div className="absolute top-4 right-4">
//                     <span className=" px-3 py-1 rounded-full text-sm">{properties} Properties</span>
//                 </div>
//             </div>

//             <CardContent className="p-4 text-center">
//                 <h3 className="font-bold text-lg mb-1">{name}</h3>
//                 <p className="text-muted-foreground text-sm mb-2">{role}</p>
//                 <div className="flex items-center justify-center">
//                     <div className="flex">
//                         {[1, 2, 3, 4, 5].map((star) => (
//                             <Star
//                                 key={star}
//                                 className={`h-4 w-4 ${star <= Math.floor(rating) ? "fill-orange text-orange" : "text-gray-300"}`}
//                             />
//                         ))}
//                     </div>
//                     <span className="text-sm ml-2">{rating}</span>
//                 </div>
//             </CardContent>
//         </Card>
//     )
// }

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
                    className="w-full h-[280px] sm:h-[320px] md:h-[350px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 md:p-6 w-full">
                        <Button variant={"secondary"} className=" w-full py-2 rounded-md flex items-center justify-center text-sm">
                            <Phone className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" /> Contact Agent
                        </Button>
                    </div>
                </div>
                <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 md:px-3 md:py-1 rounded-full border shadow-orange-200 text-xs">
                        {properties} Properties
                    </span>
                </div>
            </div>

            <CardContent className="p-3 md:p-4 text-center">
                <h3 className="font-bold text-base md:text-lg mb-0.5 md:mb-1">{name}</h3>
                <p className="text-muted-foreground text-xs md:text-sm mb-1.5 md:mb-2">{role}</p>
                <div className="flex items-center justify-center">
                    <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                                key={star}
                                className={`h-3 w-3 md:h-4 md:w-4 ${star <= Math.floor(rating) ? "fill-orange text-orange" : "text-gray-300"}`}
                            />
                        ))}
                    </div>
                    <span className="text-xs md:text-sm ml-1.5 md:ml-2">{rating}</span>
                </div>
            </CardContent>
        </Card>
    )
}

