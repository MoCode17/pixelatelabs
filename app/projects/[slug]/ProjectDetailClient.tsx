"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, X } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Project } from "@/lib/types";
import DesignBrief from "@/components/DesignBrief";

interface Props {
  project: Project;
}

export default function ProjectDetailClient({ project }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-snow">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-midnight">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-gray text-sm hover:text-brand transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All Projects
          </Link>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Tags */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-brand-light uppercase tracking-wide border border-dark-lighter rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-avantt text-snow tracking-tight mb-4"
            >
              {project.title}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-gray max-w-3xl mb-8"
            >
              {project.description}
            </motion.p>

            <motion.a
              variants={fadeUp}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white font-semibold rounded-full hover:bg-brand-dark transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              View Live Site
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold font-avantt text-gray-900 mb-8"
          >
            Screenshots
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {project.screenshots.map((src, i) => (
              <motion.button
                key={src}
                variants={fadeUp}
                onClick={() => setLightboxIndex(i)}
                className="relative aspect-[16/9] rounded-xl overflow-hidden cursor-pointer group"
              >
                <Image
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-midnight/0 group-hover:bg-midnight/20 transition-colors duration-300" />
              </motion.button>
            ))}
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
                src={project.screenshots[lightboxIndex]}
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
