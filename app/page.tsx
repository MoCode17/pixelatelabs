import Nav from "@/components/ui/Nav";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Featured from "@/components/sections/Featured";

export default function Home() {
  return (
    <div className="relative">
      {/* Nav UI */}
      <Nav />
      <Hero />
      <Services />
      <Featured />
    </div>
  );
}
