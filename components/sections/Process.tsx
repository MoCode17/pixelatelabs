"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import icon from "@/public/images/iconDark.svg";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  items: string[];
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We begin by understanding your business, goals, and target audience to create a tailored digital strategy that drives results.",
    items: [
      "Business analysis & goals review",
      "Competitor research & market analysis",
      "Target audience identification",
      "Project scope & timeline planning",
    ],
  },
  {
    number: "02",
    title: "Design & Prototyping",
    description:
      "Our designers craft stunning visual concepts and interactive prototypes that bring your vision to life before development begins.",
    items: [
      "Wireframing & information architecture",
      "UI/UX design in Figma",
      "Interactive prototype creation",
      "Client review & iteration",
    ],
  },
  {
    number: "03",
    title: "Development & Testing",
    description:
      "We build your website using cutting-edge technologies, ensuring peak performance, security, and cross-device compatibility.",
    items: [
      "Frontend development (React/Next.js)",
      "Backend integration & APIs",
      "Cross-browser & device testing",
      "Performance optimization",
    ],
  },
  {
    number: "04",
    title: "Launch & Optimization",
    description:
      "Your website goes live with comprehensive SEO, analytics, and performance monitoring to ensure a flawless launch.",
    items: [
      "Final QA & bug fixes",
      "Domain & hosting setup",
      "SEO optimization & analytics",
      "Go-live & monitoring",
    ],
  },
  {
    number: "05",
    title: "Ongoing Support",
    description:
      "We provide continuous maintenance, updates, and support to keep your website running smoothly and growing with your business.",
    items: [
      "Regular maintenance & updates",
      "Performance monitoring",
      "Content updates & changes",
      "Priority technical support",
    ],
  },
];

const processStats = [
  { value: "48hrs", label: "Response Time" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "4-8 Wks", label: "Average Timeline" },
  { value: "24/7", label: "Support Available" },
];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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
    <section ref={sectionRef} className="w-full bg-gray-50 relative">
      {/* Main Content with Sticky Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-24 lg:items-start">
          {/* Left Column — Sticky on Desktop */}
          <div className="lg:sticky lg:top-0 lg:flex lg:flex-col lg:justify-center py-16 sm:py-20 lg:py-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              {/* Badge */}
              <motion.div variants={fadeInUpVariants} className="mb-4">
                <span className="inline-flex items-center text-lg font-bold tracking-wider text-brand uppercase">
                  <Image src={icon} alt="Logo" className="w-6 h-6 mr-3" />
                  OUR PROCESS
                </span>
              </motion.div>

              {/* Title */}
              <motion.h2
                variants={fadeInUpVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6"
              >
                How We Work
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                variants={fadeInUpVariants}
                className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 max-w-lg"
              >
                Our proven 5-step process ensures every project is delivered on
                time, on budget, and exceeds expectations. From initial
                discovery to ongoing support, we&apos;re with you every step of
                the way.
              </motion.p>

              {/* CTA Button */}
              <motion.div variants={fadeInUpVariants}>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white font-semibold rounded-full hover:bg-brand-dark transition-colors duration-300 shadow-md hover:shadow-lg">
                  Start Your Project
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column — Scrolling Steps */}
          <div ref={timelineRef} className="relative pb-16 sm:pb-20 lg:py-24">
            {/* Timeline Line (Desktop) */}
            <div className="hidden lg:block absolute left-0 top-24 bottom-24 w-px bg-gray-200">
              <motion.div
                className="w-full bg-brand origin-top"
                style={{ height: lineHeight }}
              />
            </div>

            {/* Steps */}
            <div className="space-y-8 lg:space-y-0">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={cardVariants}
                  className="relative lg:pl-12"
                >
                  {/* Timeline Dot (Desktop) */}
                  <div className="hidden lg:flex absolute left-0 top-8 w-[9px] h-[9px] -translate-x-1 rounded-full bg-brand ring-4 ring-gray-50 z-10" />

                  {/* Step Card */}
                  <div
                    className={`group bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-brand/20 transition-all duration-300 ${
                      index < steps.length - 1 ? "lg:mb-8" : ""
                    }`}
                  >
                    {/* Step Number & Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-sm font-bold text-brand bg-[#FFF0E8] rounded-full px-3 py-1 flex-shrink-0">
                        {step.number}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-brand transition-colors duration-300">
                        {step.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5 lg:pl-14">
                      {step.description}
                    </p>

                    {/* Checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:pl-14">
                      {step.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-[#FFF0E8] flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-brand" />
                          </div>
                          <span className="text-sm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center py-2">
                      <div className="w-px h-6 bg-gray-200" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
          >
            {processStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUpVariants}
                className="text-center"
              >
                <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
