"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import icon from "@/public/images/icon.svg";
import HEA from "@/public/images/HEA-Hero.png";

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
    role: "Founder, Heffernan Homes",
    quote:
      "Pixelate Labs completely transformed our online presence. Our new website has generated 3x more leads than our previous site. Their attention to detail and understanding of our brand was exceptional.",
    rating: 5,
    initials: "JH",
  },
  {
    id: "2",
    name: "James Chen",
    role: "CEO, Chen Enterprises",
    quote:
      "Working with Pixelate was an absolute game-changer. They delivered a world-class e-commerce platform that increased our conversion rate by 150%. Professional, creative, and always on time.",
    rating: 5,
    initials: "JC",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Marketing Director, Bloom & Co",
    quote:
      "The team at Pixelate Labs truly understands modern web design. They built us a stunning website that perfectly captures our brand identity and has significantly improved our customer engagement.",
    rating: 5,
    initials: "ER",
  },
  {
    id: "4",
    name: "Michael Thompson",
    role: "Owner, Thompson Legal",
    quote:
      "From initial consultation to final launch, Pixelate Labs exceeded every expectation. Our website now ranks on the first page of Google and brings in consistent leads every week.",
    rating: 5,
    initials: "MT",
  },
];

const stats = [
  { value: "15+", label: "Happy Clients" },
  { value: "100%", label: "Projects Delivered on time" },
  { value: "5.0", label: "Average Rating" },
  { value: "24/7", label: "Support" },
];

const CYCLE_INTERVAL = 10000;

const TestimonialsSection = ({
  badge = "Client Stories",
  title = "Loved by Melbourne Businesses",
  subtitle = "Don't just take our word for it—hear what our clients have to say about working with us.",
  testimonials = defaultTestimonials,
}: TestimonialsSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, CYCLE_INTERVAL);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const handleTabClick = (i: number) => {
    setActiveIndex(i);
    resetTimer();
  };

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

  const testimonialTransition = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="w-full bg-midnight py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
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
            <span className="inline-flex items-center text-lg font-bold tracking-wider text-brand-light uppercase">
              <Image src={icon} alt="Logo" className="w-6 h-6 mr-3" />
              {badge}
            </span>
          </motion.div>

          {/* Title and Subtitle */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <motion.h2
              variants={fadeInUpVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-2xl"
            >
              {title}
            </motion.h2>

            <motion.p
              variants={fadeInUpVariants}
              className="text-base sm:text-lg text-gray-400 max-w-md lg:max-w-lg lg:pt-2 leading-relaxed"
            >
              {subtitle}
            </motion.p>
          </div>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.div
            variants={cardVariants}
            className="bg-midnight border border-white/10 rounded-2xl overflow-hidden"
          >
            <div className="relative p-8 sm:p-8 lg:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial.id}
                  initial={testimonialTransition.initial}
                  animate={testimonialTransition.animate}
                  exit={testimonialTransition.exit}
                  transition={testimonialTransition.transition}
                >
                  <div className="flex gap-12 items-center">
                    <div className="relative w-full h-[400px]">
                      <Image src={HEA} alt="HEA" fill objectFit="contain" />
                    </div>
                    <div>
                      {/* Stars */}
                      <div className="flex items-center gap-1 mb-6">
                        {Array.from({ length: activeTestimonial.rating }).map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-yellow-400 text-yellow-400"
                            />
                          )
                        )}
                      </div>
                      {/* Quote */}
                      <blockquote className="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed mb-8 font-medium">
                        &ldquo;{activeTestimonial.quote}&rdquo;
                      </blockquote>
                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          {activeTestimonial.initials}
                        </div>
                        <div>
                          <p className="text-white font-semibold text-base">
                            {activeTestimonial.name}
                          </p>
                          <p className="text-gray-400 text-sm">
                            {activeTestimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Testimonial Tabs */}
            <div className="flex flex-wrap justify-stretch">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => handleTabClick(index)}
                  className={`grow-1 px-5 py-2.5 text-sm font-medium transition-all duration-300 cursor-pointer ${
                    index === activeIndex
                      ? "bg-dark-lighter text-white shadow-lg shadow-brand/25"
                      : "text-gray-400 border border-dark-lighter hover:border-brand/40 hover:text-white"
                  }`}
                >
                  {testimonial.name}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 pt-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUpVariants}
              className="text-center border border-white/20 rounded-lg p-4"
            >
              <p className="text-3xl sm:text-4xl font-bold text-white pb-2 mb-2 border-b border-white/20">
                {stat.value}
              </p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
