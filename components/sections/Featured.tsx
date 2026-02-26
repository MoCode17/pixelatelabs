"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import icon from "@/public/images/iconDark.svg";
import {
  fadeIn,
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from "@/lib/animations";
import { projects } from "@/lib/data";

// Props interface for future customization
export interface FeaturedSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
}

const FeaturedSection = ({
  badge = "OUR WORK",
  title = "<Results/>",
  subtitle = "From startups to enterprises, we transform ideas into pixel-perfect experiences that drive real business results.",
}: FeaturedSectionProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="w-full bg-snow py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-12 lg:mb-16"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-4">
            <span className="inline-flex items-center gap text-lg font-bold tracking-wider text-brand uppercase">
              <Image src={icon} alt="Logo" className="w-6 h-6 mr-3" />
              {badge}
            </span>
          </motion.div>

          {/* Title and Subtitle */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-avantt tracking-tight text-gray-900 max-w-2xl"
            >
              {title}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-gray-600 max-w-md lg:max-w-lg lg:pt-2"
            >
              {subtitle}
            </motion.p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={i % 2 === 0 ? slideInLeft : slideInRight}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group relative flex flex-col gap-4 bg-transparent rounded-2xl"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden hover:shadow-xl hover:border hover:border-brand transition-all duration-300">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover z-10"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  />
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8 z-5">
                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs font-medium text-gray-700 uppercase tracking-wide border border-gray-300 rounded-full px-2 py-1 transition-colors duration-300 group-hover:bg-brand group-hover:text-white group-hover:border-brand"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title and Description */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-bold font-avantt text-brand mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Arrow Button */}
                    <span
                      className="flex-shrink-0 w-10 h-10 rounded-full bg-gray flex items-center justify-center transition-all duration-300"
                      aria-label={`View ${project.title} project`}
                    >
                      <ArrowUpRight className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors duration-300" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-12 lg:mt-16 text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white font-semibold rounded-full hover:bg-brand-dark transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedSection;
