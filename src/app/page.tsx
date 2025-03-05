import { ModeToggle } from "@/components/ModeToggle";
import { TabsDemo } from "@/components/TabsDemo";
import Image from "next/image";

export default function Home() {
	return (
		<div className="bg-background text-foreground">
			<ModeToggle />;<h1>Home</h1>
			<TabsDemo />
		</div>
	);
}
