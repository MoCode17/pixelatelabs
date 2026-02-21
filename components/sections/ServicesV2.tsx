"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Pen, Code } from "lucide-react";
import icon from "@/public/images/iconDark.svg";

const services = [
  {
    number: "01",
    title: "Web Design",
    subtitle: "Your brand, built to make people stop scrolling.",
    icon: Pen,
    description:
      'First impressions close deals before you even pick up the phone. We design websites that instantly tell your customer "these guys are legit" — on any device, at any screen size, at any hour of the night. Create stunning, user-centric designs that captivate your audience and reflect your brand\'s unique identity. We blend creativity with strategy.',
    features: [
      "A custom design built around your business (not a recycled template)",
      "A look and feel that matches the quality of your actual work",
      "Mobile-first layouts because your customers are on their phones",
      "Clear calls-to-action that turn visitors into enquiries",
      "Contact forms and booking flows that actually work",
    ],
    pills: ["Figma", "Webflow", "Framer"],
    cta: "Explore Design",
  },
  {
    number: "02",
    title: "Web Development",
    subtitle: "Fast, reliable, and built to grow with you.",
    icon: Code,
    description:
      "Build fast, scalable, and modern web applications using cutting-edge technologies. We deliver performant solutions tailored to your business needs. A pretty site that loads slow or breaks under pressure costs you customers. We build under the hood to make sure your website is as solid as your reputation — quick to load, easy to update, and ready when your business needs more from it.",
    features: [
      "Full-Stack Development",
      "API Design & Integration",
      "Performance Optimization",
      "Fast-loading pages that Google (and your customers) love",
      "Easy content management so you're never held hostage by a developer.",
    ],
    pills: ["React", "Next.js", "TypeScript"],
    cta: "Explore Development",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

const ServicesV2 = () => {
  return (
    <section className="relative w-full bg-midnight py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-brand/10 blur-[128px]" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-brand/15 blur-[128px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
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
            <span className="inline-flex items-center text-lg font-bold tracking-wider text-brand uppercase">
              <Image src={icon} alt="Logo" className="w-6 h-6 mr-3" />
              OUR SERVICES
            </span>
          </motion.div>

          {/* Title and Subtitle */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <motion.h2
              variants={fadeInUpVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-snow max-w-2xl font-avantt"
            >
              &lt;What We Do Best/&gt;
            </motion.h2>

            <motion.p
              variants={fadeInUpVariants}
              className="text-base sm:text-lg text-gray max-w-md lg:max-w-lg lg:pt-2"
            >
              Whether you need a site that looks the part or one that's built to
              scale — from concept to launch, we've got you covered. No jargon,
              no hand-holding required from you.
            </motion.p>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {services.map((service) => {
            const ServiceIcon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group relative flex flex-col gap-5 bg-surface rounded-2xl p-6 lg:p-8 overflow-hidden border border-dark-lighter hover:border-brand hover:-translate-y-2 transition-all duration-500 shadow-lg shadow-black/20"
              >
                {/* Top accent bar */}
                <span className="absolute top-0 left-0 h-[3px] w-0 group-hover:w-full bg-brand transition-all duration-700 rounded-t-2xl" />

                {/* Decorative number bg */}
                <span className="pointer-events-none absolute -bottom-4 -right-2 text-[10rem] leading-none font-avantt font-bold text-brand opacity-5 select-none">
                  {service.number}
                </span>

                {/* Number chip */}
                <span className="absolute top-5 right-5 text-xs font-bold font-space-mono text-brand bg-brand/10 border border-brand/20 rounded-full px-3 py-1">
                  {service.number}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-brand/10 border border-brand/20 text-brand-light group-hover:bg-brand group-hover:text-white transition-all duration-500">
                  <ServiceIcon className="w-6 h-6" />
                </div>

                {/* Title with animated underline */}
                <h3 className="relative inline-block text-xl font-bold text-snow font-avantt w-fit">
                  {service.title}
                  <span className="absolute -bottom-0.5 left-0 h-[2px] w-full bg-brand scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-full" />
                </h3>

                {/* Subtitle */}
                <h4 className="text-lg font-bold text-brand font-avantt">
                  {service.subtitle}
                </h4>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray leading-relaxed">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="flex flex-col gap-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-brand shrink-0" />
                      <span className="text-sm font-medium text-snow">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack pills */}
                <div className="flex flex-wrap gap-2 mt-1">
                  {service.pills.map((pill) => (
                    <span
                      key={pill}
                      className="text-xs font-medium text-gray bg-dark-lighter rounded-full px-3 py-1"
                    >
                      {pill}
                    </span>
                  ))}
                </div>

                {/* Per-card CTA */}
                <a
                  href="#"
                  className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-light transition-colors duration-300"
                >
                  {service.cta} →
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesV2;
