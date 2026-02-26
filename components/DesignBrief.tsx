"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface DesignBriefProps {
  colors: { hex: string; label: string }[];
  fonts: { name: string; role: string }[];
}

export default function DesignBrief({ colors, fonts }: DesignBriefProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
      className="border border-gray-200 rounded-2xl p-6 lg:p-8 bg-white"
    >
      <motion.h3
        variants={fadeUp}
        className="text-xl font-bold font-avantt text-gray-900 mb-6"
      >
        Design Brief
      </motion.h3>

      {/* Colors */}
      <motion.div variants={fadeUp} className="mb-8">
        <p className="text-sm font-space-mono uppercase tracking-wider text-gray-500 mb-4">
          Colour Palette
        </p>
        <div className="flex flex-wrap gap-6">
          {colors.map((color) => (
            <div key={color.hex} className="flex flex-col items-center gap-2">
              <div
                className="w-14 h-14 rounded-full border border-gray-200 shadow-sm"
                style={{ backgroundColor: color.hex }}
              />
              <span className="text-xs font-medium text-gray-700">
                {color.label}
              </span>
              <span className="text-[11px] font-space-mono text-gray-400 uppercase">
                {color.hex}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Fonts */}
      <motion.div variants={fadeUp}>
        <p className="text-sm font-space-mono uppercase tracking-wider text-gray-500 mb-4">
          Typography
        </p>
        <div className="flex flex-wrap gap-6">
          {fonts.map((font) => (
            <div
              key={font.name}
              className="flex flex-col gap-1 bg-gray-50 rounded-xl px-5 py-4"
            >
              <span
                className="text-lg font-semibold text-gray-900"
                style={{ fontFamily: font.name }}
              >
                {font.name}
              </span>
              <span className="text-xs text-gray-500">{font.role}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
