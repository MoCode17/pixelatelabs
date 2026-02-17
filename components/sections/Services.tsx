"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Pen, Code, BarChart3 } from "lucide-react";
import icon from "@/public/images/icon.svg";

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
  },
];

const CYCLE_INTERVAL = 10000;

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, CYCLE_INTERVAL);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const handleTabClick = (i: number) => {
    setActiveIndex(i);
    resetTimer();
  };

  // Animation variants — matching Featured/WhyChooseUs sections
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="w-full bg-snow py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-12 lg:mb-16"
        >
          {/* Badge */}
          <motion.div variants={fadeInUpVariants} className="mb-4">
            <span className="inline-flex items-center gap text-lg font-bold tracking-wider text-blue-600 uppercase">
              <Image src={icon} alt="Logo" className="w-6 h-6 mr-3" />
              OUR SERVICES
            </span>
          </motion.div>

          {/* Title and Subtitle */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <motion.h2
              variants={fadeInUpVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 max-w-2xl font-avantt"
            >
              What We Do Best
            </motion.h2>

            <motion.p
              variants={fadeInUpVariants}
              className="text-base sm:text-lg text-gray-600 max-w-md lg:max-w-lg lg:pt-2"
            >
              From concept to launch, we deliver end-to-end digital solutions
              that help your business stand out and grow online.
            </motion.p>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {services.map((service, i) => {
            const ServiceIcon = service.icon;
            const isActive = i === activeIndex;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleTabClick(i)}
                className={`group relative flex flex-col gap-4 bg-[#111D33] rounded-2xl p-6 lg:p-8 cursor-pointer transition-all duration-500 border ${
                  isActive
                    ? "border-blue-500 scale-[1.02] shadow-lg shadow-blue-500/10"
                    : "border-[#1E2D4A] hover:border-blue-600/40"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "bg-blue-600/10 border border-blue-600/20 text-blue-500"
                  }`}
                >
                  <ServiceIcon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white font-avantt">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="flex flex-col gap-2.5 mt-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                      <span className="text-sm font-medium text-white">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
