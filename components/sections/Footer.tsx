"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

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

const services = [
  "Website Design",
  "Web Development",
  "SEO Optimization",
  "Digital Marketing",
];

const legalLinks = ["Privacy Policy", "Terms of Service", "Cookies Settings"];

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      {/* ─── Section 1: Newsletter Bar ─── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
        className="w-full bg-white px-6 sm:px-10 lg:px-20 py-14 sm:py-16"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          {/* Left – copy */}
          <motion.div variants={fadeInUpVariants} className="lg:max-w-md">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 font-avantt">
              Join our newsletter
            </h3>
            <p className="mt-3 text-gray-500 text-sm sm:text-base leading-relaxed">
              Feel free to reach out if you want to collaborate with us, or
              simply have a chat.
            </p>
          </motion.div>

          {/* Right – form */}
          <motion.div
            variants={fadeInUpVariants}
            className="w-full lg:max-w-md"
          >
            <div className="flex items-center gap-3">
              <input
                type="email"
                placeholder="Your Email…"
                className="flex-1 px-5 py-3.5 rounded-full border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#4169E1] focus:ring-2 focus:ring-[#4169E1]/20 transition-all"
              />
              <button
                aria-label="Subscribe"
                className="flex-shrink-0 w-12 h-12 rounded-full bg-[#4169E1] flex items-center justify-center hover:bg-[#3558c0] transition-colors cursor-pointer"
              >
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>
            <p className="mt-3 text-xs text-gray-400">
              By subscribing you agree to with our{" "}
              <a
                href="#"
                className="text-[#4169E1] underline hover:text-[#3558c0] transition-colors"
              >
                Privacy Policy
              </a>
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        <div className="border-t border-gray-100" />
      </div>

      {/* ─── Section 2: Main Footer Content ─── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
        className="w-full px-6 sm:px-10 lg:px-20 py-14 sm:py-16 lg:py-20"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Column – Brand */}
          <motion.div variants={fadeInUpVariants} className="space-y-6">
            {/* Logo */}
            <div className="relative w-[160px] h-[40px]">
              <Image
                src="/images/Asset 7@3x.png"
                alt="Pixelate"
                fill
                className="object-contain object-left"
              />
            </div>

            {/* Tagline */}
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Transforming businesses for the digital age with professional
              websites that convert visitors into customers.
            </p>

            {/* Australian badge */}
            <div className="flex items-center gap-2">
              <span className="text-xl" role="img" aria-label="Australian flag">
                🇦🇺
              </span>
              <span className="text-sm font-bold text-gray-900">
                100% Australian Owned &amp; Operated
              </span>
            </div>

            {/* CTA Button */}
            <button className="group inline-flex items-center gap-3 bg-[#4169E1] text-white font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-[#3558c0] transition-colors cursor-pointer">
              Get Your Free Consultation
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#3558c0] group-hover:bg-[#2a49a3] transition-colors">
                <ArrowRight className="w-4 h-4 text-white" />
              </span>
            </button>
          </motion.div>

          {/* Middle Column – Services */}
          <motion.div variants={fadeInUpVariants}>
            <h4 className="text-base font-bold text-gray-900 mb-5">
              Services
            </h4>
            <ul className="space-y-3.5">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column – Contact */}
          <motion.div variants={fadeInUpVariants}>
            <h4 className="text-base font-bold text-gray-900 mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#4169E1] flex-shrink-0" />
                <span className="text-sm text-gray-600">+61 400 123 456</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#4169E1] flex-shrink-0" />
                <span className="text-sm text-gray-600">
                  support@pixelatelabs.com.au
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#4169E1] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-600">
                  <p>Monday – Friday</p>
                  <p>9:00 AM – 6:00 PM (AEST)</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* ─── Section 3: Bottom Bar ─── */}
      <section className="w-full border-t border-gray-200 px-6 sm:px-10 lg:px-20 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-xs text-gray-400 text-center sm:text-left">
            &copy; 2025 Pixelate Digital. All rights reserved.
          </p>

          {/* Legal links */}
          <div className="flex items-center gap-5">
            {legalLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {[
              { Icon: Facebook, label: "Facebook" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Twitter, label: "X (Twitter)" },
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Youtube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 4: Decorative Background Text ─── */}
      <div className="relative w-full overflow-hidden" aria-hidden="true">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <p
            className="text-[15vw] lg:text-[12vw] font-avantt font-bold text-gray-100 leading-none tracking-tight select-none whitespace-nowrap translate-y-[40%]"
          >
            PIXELATE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
