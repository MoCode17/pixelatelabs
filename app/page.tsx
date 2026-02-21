import Nav from "@/components/ui/Nav";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import ServicesV2 from "@/components/sections/ServicesV2";
import Featured from "@/components/sections/Featured";
import Testimonials from "@/components/sections/Testimonials";
import Process from "@/components/sections/Process";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Nav />
      <Hero />
      <ServicesV2 />
      <Featured />
      <Testimonials />
      <Process />
      <FinalCTA />
      <Footer />
    </div>
  );
}
