import { ModeToggle } from "@/components/ModeToggle";
import { TabsDemo } from "@/components/TabsDemo";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <ModeToggle />;<h1>Home</h1>
      <TabsDemo />
    </div>
  );
}
