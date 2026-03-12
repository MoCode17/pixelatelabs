"use client";

import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import {
  fadeUp,
  heroReveal,
  cardEntrance,
  staggerContainer,
  staggerFast,
} from "@/lib/animations";
import GrainOverlay from "@/components/ui/GrainOverlay";
import BrowserMockup from "@/components/ui/BrowserMockup";
import MagneticCard from "@/components/ui/MagneticCard";

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

function FilterBar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeTag = searchParams.get("tag") || "All";

  function setTag(tag: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (tag === "All") {
      params.delete("tag");
    } else {
      params.set("tag", tag);
    }
    router.replace(`/projects?${params.toString()}`, { scroll: false });
  }

  const filteredProjects =
    activeTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <>
      {/* Filter Pills */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerFast}
        className="flex flex-wrap gap-2 mb-12"
      >
        {["All", ...allTags].map((tag) => (
          <motion.button
            key={tag}
            variants={fadeUp}
            onClick={() => setTag(tag)}
            className={`px-4 py-1.5 rounded-full text-xs font-space-mono uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
              activeTag === tag
                ? "bg-brand text-snow"
                : "border border-dark-lighter text-gray hover:text-snow hover:border-gray"
            }`}
          >
            {tag}
          </motion.button>
        ))}
      </motion.div>

      {/* Project Cards Grid */}
      <div className="perspective-1200">
        <AnimatePresence mode="popLayout">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardEntrance}
                layout
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <MagneticCard className="group h-full">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="block h-full rounded-2xl overflow-hidden bg-surface relative transition-shadow duration-300 hover:shadow-2xl hover:shadow-brand/10"
                  >
                    <GrainOverlay opacity={0.05} />

                    {/* Browser Mockup Image */}
                    <div className="p-3 pb-0">
                      <BrowserMockup
                        src={project.image}
                        alt={project.title}
                        showUrl={project.liveUrl}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5 isolate-content relative z-10">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-space-mono uppercase tracking-wider text-gray border border-dark-lighter rounded-full px-2.5 py-0.5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title + Arrow */}
                      <div className="flex items-center justify-between mb-1">
                        <h2 className="text-lg font-bold font-avantt text-snow group-hover:text-brand transition-colors">
                          {project.title}
                        </h2>
                        <ArrowUpRight className="w-5 h-5 text-gray group-hover:text-brand transition-colors shrink-0" />
                      </div>

                      {/* Description */}
                      <p className="text-sm text-gray line-clamp-1">
                        {project.description}
                      </p>
                    </div>
                  </Link>
                </MagneticCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-midnight">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated gradient background */}
        <motion.div
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
        <GrainOverlay opacity={0.08} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs sm:text-sm font-space-mono text-brand-light tracking-wider uppercase mb-6"
          >
            {"// OUR WORK"}
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={heroReveal}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold font-avantt text-snow tracking-tight max-w-4xl"
          >
            Built in 7 days.
            <br />
            Looks like it took months.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg text-gray max-w-2xl"
          >
            $499 websites for Melbourne businesses — delivered in a week.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Suspense
            fallback={
              <div className="text-gray text-sm font-space-mono">
                Loading filters...
              </div>
            }
          >
            <FilterBar />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
