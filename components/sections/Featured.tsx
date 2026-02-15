"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Props interface for future customization
export interface FeaturedSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  projects?: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link?: string;
  }>;
}

const FeaturedSection = ({
  badge = "FEATURED WORK",
  title = "Crafting Digital Experiences",
  subtitle = "From startups to enterprises, we transform ideas into pixel-perfect experiences that drive real business results.",
  projects = [
    {
      id: "1",
      title: "Luxe Real Estate Platform",
      description: "Premium property marketplace with virtual tours",
      image: "/images/webDesign.jpg",
      tags: ["NEXTJS", "THREE.JS", "HTML", "REAL ESTATE"],
    },
    {
      id: "2",
      title: "Fintech Dashboard",
      description: "Real-time financial analytics platform",
      image: "/images/webDesign.jpg",
      tags: ["NEXTJS", "THREE.JS", "HTML"],
    },
    {
      id: "3",
      title: "E-Commerce Redesign",
      description: "Premium property marketplace with virtual tours",
      image: "/images/webDesign.jpg",
      tags: ["NEXTJS", "THREE.JS", "HTML"],
    },
    {
      id: "4",
      title: "SaaS Platform UI",
      description: "Premium property marketplace with virtual tours",
      image: "/images/webDesign.jpg",
      tags: ["NEXTJS", "THREE.JS", "HTML"],
    },
  ],
}: FeaturedSectionProps) => {
  // Animation variants
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
    <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
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
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-600 uppercase">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="w-4 h-4"
              >
                <path
                  d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z"
                  fill="currentColor"
                />
              </svg>
              {badge}
            </span>
          </motion.div>

          {/* Title and Subtitle */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <motion.h2
              variants={fadeInUpVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 max-w-2xl"
            >
              {title}
            </motion.h2>

            <motion.p
              variants={fadeInUpVariants}
              className="text-base sm:text-lg text-gray-600 max-w-md lg:max-w-xs lg:pt-2"
            >
              {subtitle}
            </motion.p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium text-gray-700 uppercase tracking-wide"
                    >
                      {tag}
                      {index < project.tags.length - 1 && (
                        <span className="ml-2 text-gray-300">•</span>
                      )}
                    </span>
                  ))}
                </div>

                {/* Title and Description */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Arrow Button */}
                  <button
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300"
                    aria-label={`View ${project.title} project`}
                  >
                    <ArrowUpRight className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors duration-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="mt-12 lg:mt-16 text-center"
        >
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg">
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedSection;
