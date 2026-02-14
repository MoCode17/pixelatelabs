import React from "react";
import Image from "next/image";
import pexelsHero from "@/public/images/pexelsHero.jpg";
import Nav from "@/components/ui/Nav";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen bg-snow flex justify-center items-center p-4">
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
        <div className="relative z-10 h-full flex flex-col justify-end px-8 md:px-16 lg:px-20 py-6">
          <p className="text-white text-md md:text-lg font-extralight font-['Geist'] leading-relaxed">
            Hey 👋 We&apos;re Pixelate!
          </p>
          {/* Headline */}
          <div className="text-yellow-400 text-4xl md:text-5xl lg:text-6xl  leading-tight mb-4 font-player">
            &lt;Web Design/&gt;
          </div>
          <div className="flex flex-col items-start pl-24">
            {/* Main Title */}
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold font-avantt leading-tight mb-6">
              Without The
              <br />
              Tech Headaches
            </h1>
            {/* Description */}
            <p className="text-white/90 text-base md:text-lg font-normal font-['Geist'] leading-relaxed max-w-[650px] mb-8">
              Melbourne&apos;s favorite web design agency creating
              high-performance websites that convert visitors into customers. We
              help growing businesses stand out online with stunning design,
              seamless user experience, and lightning-fast performance.
            </p>
            {/* CTAs and Social Proof */}
            <div className="flex flex-wrap items-center gap-6">
              {/* CTA Buttons */}
              <button className="h-12 md:h-14 px-6 bg-blue-600 hover:bg-blue-700 transition-colors rounded-xl flex justify-center items-center gap-3">
                <span className="text-white text-base md:text-lg font-bold ">
                  Start Your Project
                </span>
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
              <button className="h-12 md:h-14 px-6 bg-yellow-400 hover:bg-yellow-500 transition-colors rounded-xl flex justify-center items-center gap-3">
                <span className="text-white text-base md:text-lg font-bold">
                  View Our Work
                </span>
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
              {/* Divider */}
              <div className="hidden md:block w-px h-12 bg-white/30" />
              {/* Social Proof */}
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
                  <p className="text-sm md:text-base font-normal font-['Geist']">
                    Trusted by <span className="font-bold">100+</span>
                  </p>
                  <p className="text-sm md:text-base font-bold font-['Geist']">
                    Melbourne businesses
                  </p>
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
