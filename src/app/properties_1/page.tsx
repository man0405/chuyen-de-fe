"use client";

import Properties from "@/components/Properties";

export default function PropertiesPage() {
    return (
        <main>
            <div
                className="relative h-[300px] w-full bg-[url('/assets/images/agents/image.png')] bg-cover bg-center"
            >
                <div className="absolute inset-0 bg-black/50">
                    <div className="container mx-auto h-full flex flex-col items-center justify-center text-white">
                        <h1 className="text-4xl font-bold mb-4">Beauty Hairsalon</h1>
                        <div className="flex items-center gap-2">
                            <a href="/" className="text-white hover:text-gray-300">Home</a>
                            <span>/</span>
                            <span className="text-orange-500">Beauty hairsalon</span>
                        </div>
                    </div>
                </div>
            </div>
            <Properties />
        </main>
    );
} 