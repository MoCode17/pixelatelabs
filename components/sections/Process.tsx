"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import icon from "@/public/images/iconDark.svg";

interface ProcessStep {
  number: string;
  title: string;
  subtitle?: string;
  description: string;
  items: string[];
}

const steps: ProcessStep[] = [
  {
    number: "1",
    title: "We Get To Know Your Business",
    subtitle: "30 min kickoff call",
    description:
      "You tell us what you do, who you want to attract, and what makes you better than the next guy. That's it. We take care of the strategy, the structure, and the words — you just talk, we listen.",
    items: [
      "What you do and who you serve",
      "What do you actually want more of",
      "What your competitors are doing (so we can do it better)",
    ],
  },
  {
    number: "2",
    title: "We Design & Build It",
    description:
      "While you're working on your business, we're building. Custom design, mobile-optimised, with a contact form wired directly to your phone. No templates. No cookie-cutter layouts.",
    items: [
      "Custom design, not a drag-and-drop template",
      "Mobile-first (because that's where your customers are)",
      "Quote request form set up and tested",
    ],
  },
  {
    number: "3",
    title: "You Review, We Refine",
    subtitle: "30 min revision call",
    description:
      'We show you the site. You tell us what you love, what you\'d tweak, and we tighten it up. One focused call. No endless email chains, no "can we just change one more thing" spirals.',
    items: [
      "Live walkthrough of your new site",
      "One round of revisions included",
      "You sign off, we prep for launch",
    ],
  },
  {
    number: "4",
    title: "Your Site Goes Live",
    description:
      "Domain connected. Hosting sorted. Site live. We do a final check on speed, mobile display, and form submissions — then we hand you the keys. From here, every Google search for your business in your area is a chance for a new customer to find you.",
    items: [
      "Domain & hosting fully set up",
      "Speed and mobile tested",
      "SEO optimization & analytics",
      "Go-live & monitoring",
    ],
  },
  {
    number: "5",
    title: "Ongoing Support",
    subtitle: "We've Got Your Back",
    description:
      "Got a question? Something needs updating? We're one message away. No retainers, no hourly rates — 3 months of support is baked into your $499. After that, we offer simple monthly plans if you want us to stick around.",
    items: [
      "3 months support included, no extra cost",
      "Content and copy updates when you need them",
      "Priority response within 48 hours",
    ],
  },
];

const processStats = [
  { value: "7 Days", label: "Average Time To Live" },
  { value: "30 mins", label: "Your Min Time Investment" },
  { value: "48 Hrs", label: "Support Response Time" },
  { value: "100%", label: "Satisfaction Rate" },
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
                &lt;Online in 7 Days/&gt;
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                variants={fadeInUpVariants}
                className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 max-w-lg"
              >
                We've done this enough times to have it dialled in. You show up
                to a 30-minute call, tell us about your business, and we handle
                everything from there. No back-and-forth. No chasing. No tech
                headaches. From initial discovery to ongoing support, we&apos;re
                with you every step of the way.
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

                    {/* Optional Subtitle */}
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
                      {step.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
                      {step.description}
                    </p>

                    {/* Checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
