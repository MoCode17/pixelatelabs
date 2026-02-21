import React from "react";
import Image from "next/image";
import pexelsHero from "@/public/images/pexelsHero.jpg";
import { ChevronRight, Star } from "lucide-react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative w-full min-h-screen bg-snow flex justify-center items-center p-4"
    >
      {/* Hero Card Container */}
      <div className="relative w-full h-[calc(100vh-2rem)] rounded-3xl overflow-hidden">
        {/* Background Image */}
        <Image
          src={pexelsHero}
          alt="Hero Image"
          fill
          className="object-cover"
          priority
        />

        {/* Dark Overlay for better text contrast */}
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/50 to-black/60" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center md:justify-end px-8 md:px-16 lg:px-20 py-6 text-center md:text-left">
          <p className="text-white text-md md:text-lg font-extralight font-outfit leading-relaxed">
            Hey 👋 We&apos;re Pixelate! Melbourne's Fav
          </p>
          {/* Headline */}
          <div className="text-solar text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 font-avantt font-bold">
            &lt;Web Design Studio/&gt;
          </div>
          <div className="flex flex-col md:tems-start md:pl-24">
            {/* Main Title */}
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold font-avantt leading-tight mb-6">
              Stop Losing Jobs
              <br /> To Your Competitors
            </h1>
            {/* Description */}
            <p className="text-white/90 text-base md:text-lg font-normal font-outfit leading-relaxed max-w-[650px] mb-8">
              We get Melbourne businesses online in 7 days for $499 —
              mobile-ready, lead-generating, and done for you. Tell us your
              business, send us some pics, and we handle the rest.
            </p>
            {/* CTAs and Social Proof */}
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
              {/* CTA Buttons */}
              <button className="h-12 md:h-14 px-6 bg-brand hover:bg-brand-dark transition-colors rounded-xl flex justify-center items-center gap-3">
                <span className="text-white text-base md:text-lg font-bold ">
                  Get Online Now
                </span>
                <ChevronRight size={20} className="text-white" />
              </button>
              <button className="h-12 md:h-14 px-6 bg-solar hover:bg-[#F5C842] transition-colors rounded-xl flex justify-center items-center gap-3">
                <span className="text-white text-base md:text-lg font-bold">
                  View Our Work
                </span>
                <ChevronRight size={20} className="text-white" />
              </button>
              {/* Divider */}
              <div className="hidden md:block w-px h-12 bg-white/30" />
              <div className="flex flex-col items-start gap-4">
                {/* Social Proof */}
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-[#FFC107] fill-[#FFC107]"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    <img
                      className="w-12 h-12 rounded-full border-2 border-white"
                      src="https://i.pravatar.cc/150?img=1"
                      alt="Customer testimonial"
                    />
                    <img
                      className="w-12 h-12 rounded-full border-2 border-white"
                      src="https://i.pravatar.cc/150?img=2"
                      alt="Customer testimonial"
                    />
                    <img
                      className="w-12 h-12 rounded-full border-2 border-white"
                      src="https://i.pravatar.cc/150?img=3"
                      alt="Customer testimonial"
                    />
                  </div>
                  <div className="text-white/90">
                    <p className="text-sm md:text-base font-normal font-outfit">
                      Trusted by <span className="font-bold">100+</span>
                    </p>
                    <p className="text-sm md:text-base font-bold font-outfit">
                      Melbourne businesses
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
