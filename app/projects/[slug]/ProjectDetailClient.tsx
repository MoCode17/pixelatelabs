"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight, X } from "lucide-react";
import {
  fadeUp,
  heroReveal,
  staggerContainer,
  staggerFast,
} from "@/lib/animations";
import { Project } from "@/lib/types";
import DesignBrief from "@/components/DesignBrief";
import GrainOverlay from "@/components/ui/GrainOverlay";
import BrowserMockup from "@/components/ui/BrowserMockup";
import Grainient from "@/components/ui/Grainient";

interface Props {
  project: Project;
}

export default function ProjectDetailClient({ project }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const allScreenshots = [project.image, ...project.screenshots];

  return (
    <main className="min-h-screen bg-midnight">
      {/* Hero Section */}
      <section className="relative pt-32 pb-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated gradient background */}
        {/* <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "300% 300%",
            backgroundImage:
              "linear-gradient(135deg, #1A1A2E 0%, #FF6B2C 25%, #2D2D4A 50%, #1A1A2E 75%, #FF6B2C 100%)",
          }}
        />
        <GrainOverlay opacity={1} /> */}
        {/* Decorative grainient background */}
        {/* <div
          className="absolute inset-0"
          style={{ width: "1080px", height: "1080px", position: "relative" }}
        >
          <Grainient
            color1="#ff6b2c"
            color2="#6b31f2"
            color3="#ff8a56"
            timeSpeed={0.25}
            colorBalance={0}
            warpStrength={1}
            warpFrequency={5}
            warpSpeed={2}
            warpAmplitude={50}
            blendAngle={0}
            blendSoftness={0.05}
            rotationAmount={500}
            noiseScale={2}
            grainAmount={0.1}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
        </div> */}

        <div className="relative z-10 max-w-7xl mx-auto">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-gray text-sm hover:text-brand transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All Projects
          </Link>

          <motion.div initial="hidden" animate="visible" variants={staggerFast}>
            {/* Tags */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium font-space-mono text-brand-light uppercase tracking-wider border border-brand-light/30 rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={heroReveal}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-avantt text-snow tracking-tight mb-6"
            >
              {project.title}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-gray max-w-3xl mb-8"
            >
              {project.description}
            </motion.p>
          </motion.div>

          {/* Browser Mockup "peeking" into next section */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-5xl mx-auto translate-y-1/3"
          >
            <BrowserMockup
              src={project.image}
              alt={project.title}
              showUrl={project.liveUrl}
              className="shadow-2xl shadow-black/40"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerFast}
          className="max-w-3xl mx-auto bg-surface rounded-2xl p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 sm:divide-x sm:divide-dark-lighter">
            {[
              {
                label: "Industry",
                value: project.tags[0],
              },
              {
                label: "Timeline",
                value: "7 Days",
              },
              {
                label: "Status",
                value: "Live & Converting",
              },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="text-center px-4"
              >
                <span className="block text-xs font-space-mono uppercase tracking-wider text-gray mb-2">
                  {stat.label}
                </span>
                <span className="block text-xl sm:text-2xl font-avantt font-bold text-snow">
                  {stat.value}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Screenshots Showcase */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs sm:text-sm font-space-mono text-brand-light tracking-wider uppercase mb-8"
          >
            {"// WEBSITE SHOWCASE"}
          </motion.span>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* First screenshot — full width */}
            {allScreenshots.length > 0 && (
              <motion.button
                variants={fadeUp}
                onClick={() => setLightboxIndex(0)}
                className="w-full cursor-pointer"
              >
                <BrowserMockup
                  src={allScreenshots[0]}
                  alt={`${project.title} screenshot 1`}
                  showUrl={project.liveUrl}
                  className="shadow-xl shadow-black/20"
                />
              </motion.button>
            )}

            {/* Remaining screenshots — 2-col grid */}
            {allScreenshots.length > 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {allScreenshots.slice(1).map((src, i) => (
                  <motion.button
                    key={src}
                    variants={fadeUp}
                    onClick={() => setLightboxIndex(i + 1)}
                    className="cursor-pointer"
                  >
                    <BrowserMockup
                      src={src}
                      alt={`${project.title} screenshot ${i + 2}`}
                      className="shadow-lg shadow-black/15"
                    />
                  </motion.button>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Design Brief */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <DesignBrief
            colors={project.designBrief.colors}
            fonts={project.designBrief.fonts}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-midnight">
        <GrainOverlay opacity={0.08} />

        {/* Decorative glow blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/20 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3 w-[400px] h-[400px] bg-brand/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[400px] h-[400px] bg-brand/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block text-xs sm:text-sm font-space-mono text-brand-light tracking-wider uppercase mb-6"
            >
              {"// WANT RESULTS LIKE THIS?"}
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-avantt tracking-tight text-snow mb-6"
            >
              Let&apos;s build yours in 7 days.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-gray leading-relaxed max-w-2xl mb-10"
            >
              Your business. Our craft. Live in a week.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white font-semibold rounded-full hover:bg-brand-dark transition-colors duration-300 shadow-lg shadow-brand/25 hover:shadow-xl hover:shadow-brand/30 text-base sm:text-lg"
              >
                Start Your Project
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-midnight/90 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl aspect-[16/9] rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={allScreenshots[lightboxIndex]}
                alt={`${project.title} screenshot ${lightboxIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
