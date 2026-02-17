"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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

const FinalCTA = () => {
  return (
    <section className="relative w-full bg-[#0B1121] py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Dot grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Top-center blue glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[128px] pointer-events-none" />

      {/* Bottom-left blue glow */}
      <div className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3 w-[400px] h-[400px] bg-blue-500/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Bottom-right blue glow */}
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          {/* Retro Badge */}
          <motion.div variants={fadeInUpVariants} className="mb-6">
            <span className="inline-block text-xs sm:text-sm font-player text-blue-400 tracking-wider uppercase">
              {"// Start Your Project"}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeInUpVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-avantt tracking-tight text-white mb-6"
          >
            Ready to Elevate Your Digital Presence?
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUpVariants}
            className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mb-10"
          >
            Partner with Melbourne&apos;s most trusted web design agency. We
            transform your vision into a high-performance digital experience
            that drives real results.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={fadeInUpVariants}>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 text-base sm:text-lg cursor-pointer">
              Start Your Project
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Trust Text */}
          <motion.p
            variants={fadeInUpVariants}
            className="mt-6 text-sm text-gray-500"
          >
            No commitment required &mdash; free consultation included.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
