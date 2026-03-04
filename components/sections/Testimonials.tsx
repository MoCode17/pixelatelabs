"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import icon from "@/public/images/icon.svg";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  initials: string;
}

export interface TestimonialsSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Jesse Heffernan",
    role: "Owner, Heffernan Homes",
    quote:
      "I was sceptical at first — $499 felt too good to be true. But the site went live in under a week and I had my first enquiry two days later. It's paid for itself ten times over.",
    rating: 5,
    initials: "JH",
  },
  {
    id: "2",
    name: "James Chen",
    role: "Owner, Chen Electrical",
    quote:
      "Other agencies wanted $4k and six weeks. Pixelate had me live in 7 days and the phone hasn't stopped. Wish I'd done it two years ago.",
    rating: 5,
    initials: "JC",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Director, Bloom & Co",
    quote:
      "I handed over some notes on a Monday and by Friday I had a website I was actually proud to send people to. The whole thing was done-for-you. No stress at all.",
    rating: 5,
    initials: "ER",
  },
  {
    id: "4",
    name: "Michael Thompson",
    role: "Owner, Thompson Plumbing",
    quote:
      "I used to lose jobs to competitors just because they had a better-looking site. Now I'm the one winning those quotes. First page of Google within a month too.",
    rating: 5,
    initials: "MT",
  },
];

const stats = [
  { value: "100+", label: "Melbourne Businesses" },
  { value: "7 Days", label: "Average Time To Live" },
  { value: "5.0 ★", label: "Average Client Rating" },
  { value: "$499", label: "Starting Price" },
];

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

const TestimonialsSection = ({
  badge = "Client Stories",
  title = "<Don't Take/>\nOur word for it",
  subtitle = "Real businesses. Real results. Here's what happens when your website actually works.",
  testimonials = defaultTestimonials,
}: TestimonialsSectionProps) => {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [autoplayPlugin.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  return (
    <section
      className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, var(--color-brand-light) 0%, var(--color-brand) 45%, var(--color-brand-dark) 100%)",
      }}
    >
      {/* Decorative radial glow — top left */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-white/10 blur-[120px]" />
      {/* Decorative radial glow — bottom right */}
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-brand-dark/40 blur-[100px]" />
      {/* Dot grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
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
            <span className="inline-flex items-center text-xs font-bold tracking-widest text-white/80 uppercase font-space-mono">
              <Image src={icon} alt="Logo" className="w-5 h-5 mr-2.5" />
              {badge}
            </span>
          </motion.div>

          {/* Title and Subtitle */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <motion.h2
              variants={fadeInUpVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-avantt tracking-tight text-white max-w-2xl whitespace-pre-line"
            >
              {title}
            </motion.h2>

            <motion.p
              variants={fadeInUpVariants}
              className="text-base sm:text-lg text-white/70 max-w-md lg:max-w-lg lg:pt-2 leading-relaxed"
            >
              {subtitle}
            </motion.p>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.div variants={fadeInUpVariants}>
            {/* Embla viewport */}
            <div ref={emblaRef} className="overflow-hidden">
              {/* Embla track */}
              <div className="flex -ml-4 sm:-ml-5 lg:-ml-6">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="flex-none pl-4 sm:pl-5 lg:pl-6 w-full sm:w-1/2 lg:w-[calc(100%/2.3)]"
                  >
                    {/* Card */}
                    <div className="h-full flex flex-col bg-white rounded-2xl p-6 sm:p-7 lg:p-8 shadow-xl shadow-black/20">
                      {/* Decorative quote mark */}
                      <div className="text-brand/15 font-avantt font-bold text-[7rem] leading-none select-none pointer-events-none -mt-4 -mb-8">
                        &ldquo;
                      </div>

                      {/* Stars */}
                      <div className="flex items-center gap-1 mb-4">
                        {Array.from({ length: testimonial.rating }).map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-solar text-solar"
                            />
                          )
                        )}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-base sm:text-lg text-gray-800 leading-relaxed mb-6 font-medium flex-1">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          {testimonial.initials}
                        </div>
                        <div>
                          <p className="text-gray-900 font-semibold text-sm">
                            {testimonial.name}
                          </p>
                          <p className="text-gray-500 text-xs">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls: Prev | Dots | Next */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                onClick={scrollPrev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white transition-all duration-200 hover:scale-105 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    className={`rounded-full transition-all duration-300 cursor-pointer ${
                      selectedIndex === index
                        ? "w-6 h-2.5 bg-white"
                        : "w-2.5 h-2.5 bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={scrollNext}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white transition-all duration-200 hover:scale-105 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 pt-10 mt-10 border-t border-white/20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUpVariants}
              className="text-center px-4 py-5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm"
            >
              <p className="text-3xl sm:text-4xl font-bold text-white font-avantt mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-white/65 font-outfit">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
