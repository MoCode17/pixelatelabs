import Nav from "@/components/ui/Nav";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Featured from "@/components/sections/Featured";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/Process";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="relative">
      {/* Nav UI */}
      <Nav />
      <Hero />
      <Services />
      <Featured />
      <WhyChooseUs />
      <Process />
      <FinalCTA />
    </div>
  );
}
