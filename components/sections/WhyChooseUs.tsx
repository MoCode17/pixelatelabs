"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Puzzle,
  BarChart3,
  Clock,
  Headphones,
  DollarSign,
  ArrowUpRight,
} from "lucide-react";
import icon from "@/public/images/icon.svg";

interface WhyChooseUsCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface WhyChooseUsSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  cards?: WhyChooseUsCard[];
}

const defaultCards: WhyChooseUsCard[] = [
  {
    id: "1",
    icon: <MapPin className="w-6 h-6" />,
    title: "Local Expertise",
    description:
      "Deep understanding of the Melbourne market and what local customers expect from your online presence.",
  },
  {
    id: "2",
    icon: <Puzzle className="w-6 h-6" />,
    title: "Custom Solutions",
    description:
      "No templates or cookie-cutter designs. Every website is built from scratch to match your brand perfectly.",
  },
  {
    id: "3",
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Results Driven",
    description:
      "Every design decision is backed by data and focused on converting visitors into paying customers.",
  },
  {
    id: "4",
    icon: <Clock className="w-6 h-6" />,
    title: "Fast Delivery",
    description:
      "Launch your new website in weeks, not months. We respect your timeline and deliver on schedule.",
  },
  {
    id: "5",
    icon: <Headphones className="w-6 h-6" />,
    title: "Ongoing Support",
    description:
      "We don't disappear after launch. Get dedicated support and maintenance to keep your site running smoothly.",
  },
  {
    id: "6",
    icon: <DollarSign className="w-6 h-6" />,
    title: "Transparent Pricing",
    description:
      "No hidden fees or surprise costs. You'll know exactly what you're paying for from day one.",
  },
];

const WhyChooseUs = ({
  badge = "WHY CHOOSE US",
  title = "Why Melbourne Businesses Choose Us",
  subtitle = "We don't just build websites — we craft digital experiences that drive real results for Melbourne businesses.",
  cards = defaultCards,
}: WhyChooseUsSectionProps) => {
  // Animation variants — matching Featured section patterns
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
    <section className="w-full bg-[#0B1121] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
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
            <span className="inline-flex items-center gap text-lg font-bold tracking-wider text-blue-500 uppercase">
              <Image src={icon} alt="Logo" className="w-6 h-6 mr-3" />
              {badge}
            </span>
          </motion.div>

          {/* Title, Subtitle, and CTA */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <motion.h2
              variants={fadeInUpVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-2xl"
            >
              {title}
            </motion.h2>

            <motion.div
              variants={fadeInUpVariants}
              className="flex flex-col gap-4 lg:max-w-lg lg:pt-2"
            >
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                {subtitle}
              </p>
              <div>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300">
                  Start Your Project
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
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
          {cards.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative flex flex-col gap-4 bg-[#111D33] border border-[#1E2D4A] rounded-2xl p-6 lg:p-8 transition-colors duration-300 hover:border-blue-600/40"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-500 group-hover:bg-blue-600/20 transition-colors duration-300">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
