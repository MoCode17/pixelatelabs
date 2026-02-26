"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { projects } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-snow">
      {/* Header */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-midnight">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray text-sm hover:text-brand transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-avantt text-snow tracking-tight"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-4 text-lg text-gray max-w-2xl"
          >
            From startups to established brands — explore the work we&apos;ve
            delivered for our clients across Melbourne and beyond.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={fadeUp}>
              <Link
                href={`/projects/${project.slug}`}
                className="group block rounded-2xl overflow-hidden bg-white border border-gray-200 hover:shadow-xl hover:border-brand transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-gray-600 uppercase tracking-wide border border-gray-200 rounded-full px-2.5 py-0.5 transition-colors duration-300 group-hover:bg-brand group-hover:text-white group-hover:border-brand"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold font-avantt text-gray-900 group-hover:text-brand transition-colors">
                      {project.title}
                    </h2>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-brand transition-colors" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
