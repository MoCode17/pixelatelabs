"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import icon from "@/public/images/icon.svg";
import Image from "next/image";
import { ChevronRight, Pen, Code, BarChart3 } from "lucide-react";
import webDesignImg from "@/public/images/webDesign.jpg";

const services = [
  {
    title: "Web Design",
    icon: Pen,
    description:
      "Create stunning, user-centric designs that captivate your audience and reflect your brand's unique identity. We blend creativity with strategy.",
    features: [
      "Custom UI/UX Design",
      "Brand Identity Integration",
      "Responsive Layouts",
      "Prototyping & Wireframing",
    ],
    image: webDesignImg,
  },
  {
    title: "Web Development",
    icon: Code,
    description:
      "Build fast, scalable, and modern web applications using cutting-edge technologies. We deliver performant solutions tailored to your business needs.",
    features: [
      "Full-Stack Development",
      "API Design & Integration",
      "Performance Optimization",
      "CMS & E-Commerce Solutions",
    ],
    image: webDesignImg,
  },
  {
    title: "Digital Strategy",
    icon: BarChart3,
    description:
      "Drive growth with data-driven digital strategies that maximize your online presence. We help you reach the right audience at the right time.",
    features: [
      "SEO & Content Strategy",
      "Analytics & Reporting",
      "Social Media Planning",
      "Conversion Optimization",
    ],
    image: webDesignImg,
  },
];

const CYCLE_INTERVAL = 10000;

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const active = services[activeIndex];
  const ActiveIcon = active.icon;

  const changeService = useCallback((newIndex: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(newIndex);
      setIsAnimating(false);
    }, 300);
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % services.length;
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 300);
        return next;
      });
    }, CYCLE_INTERVAL);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const handleTabClick = (i: number) => {
    changeService(i);
    resetTimer();
  };

  return (
    <section className="bg-snow px-4 py-10">
      <div className="px-12 md:py-20">
        {/* Top: Label + Heading */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 md:gap-x-18 lg:gap-x-24 gap-y-10 md:gap-y-16 mb-14 md:mb-20">
          <span className="inline-flex items-center gap text-lg font-bold tracking-wider text-blue-600 uppercase">
            <Image src={icon} alt="Logo" className="w-6 h-6 mr-3" />
            OUR SERVICES
          </span>
          <h2 className="col-span-2 text-4xl md:text-4xl xl:text-5xl font-bold text-black tracking-tight leading-[1.05] lg:ml-8 font-avantt">
            Everything You Need to Succeed Online
          </h2>

          {/* Bottom: Service List + Detail Card */}
          {/* Left: Service tabs */}
          <div className="flex flex-col">
            {services.map((service, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={service.title}
                  onClick={() => handleTabClick(i)}
                  className={`flex items-center justify-between py-5 border-t border-b border-black/10 cursor-pointer transition-colors text-left ${
                    i > 0 ? "-mt-px" : ""
                  }`}
                >
                  <span
                    className={`text-xl md:text-2xl font-bold transition-colors font-avantt ${
                      isActive ? "text-black" : "text-black/30"
                    }`}
                  >
                    {service.title}
                  </span>
                  <span
                    className={`flex items-center justify-center w-9 h-9 rounded-full transition-colors ${
                      isActive
                        ? "bg-electric text-white"
                        : "bg-black/10 text-black/30"
                    }`}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Detail card */}
          <div
            className={`col-span-2 bg-gray rounded-2xl border border-black/10 overflow-hidden max-w-4xl lg:ml-8 transition-opacity duration-300 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="w-full px-8 pt-8">
              <ActiveIcon className="w-8 h-8 text-black" strokeWidth={2} />
            </div>
            <div className="flex flex-col lg:flex-row gap-6 p-8">
              {/* Text content */}
              <div className="flex-1 flex flex-col gap-5 overflow-hidden max-w-lg">
                <p className="text-black/60 text-sm leading-normal">
                  {active.description}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {active.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-electric/60 shrink-0" />
                      <span className="text-sm font-semibold text-black">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button className="mt-2 flex items-center gap-2 border-2 border-electric text-electric rounded-xl px-5 py-2.5 text-sm font-semibold w-fit hover:bg-electric hover:text-white transition-colors cursor-pointer">
                  Learn More
                  <span className="flex items-center justify-center w-6 h-6 bg-electric text-white rounded-full">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </button>
              </div>
              {/* Image */}
              <div className="relative h-60 md:h-60 lg:h-80 w-full lg:w-80 2xl:w-120 rounded-xl overflow-hidden shrink-0">
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
