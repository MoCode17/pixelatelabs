"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/public/images/PixelateLogoOrange.svg";
import { motion, useScroll, useTransform, vh } from "framer-motion";

interface DropdownColumn {
  title?: string;
  links: {
    label: string;
    href: string;
  }[];
}

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Generate mask SVG
  const leftMaskSVG = useMemo(() => {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1">
        <path d="M 1 0 l -0.25 0 q 0.25 0, 0.25 0.30 l 0 -0.30 Z" fill="white"/>
      </svg>
    `;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg.trim())}`;
  }, []);

  // Generate mask SVG
  const rightMaskSVG = useMemo(() => {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1">
        <path d="M 0 0 l 0.25 0 q -0.25 0, -0.25 0.30 l 0 -0.30 Z" fill="white"/>
      </svg>
    `;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg.trim())}`;
  }, []);

  // Scroll-based background spacer height
  const ref = useRef(null);
  const { scrollY } = useScroll({ target: ref });
  const spacerHeight = useTransform(scrollY, [0, 400], [16, 0]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent z-100">
      {/* Spacer */}
      <motion.div
        ref={ref}
        className="bg-snow"
        style={{ height: spacerHeight }}
      />
      {/* Main Nav Container with surrounding divs */}
      <div className="flex w-full px-4 justify-center md:justify-start">
        {/* Left Curved Cutout */}
        <div className="hidden md:block flex-1 relative">
          {/* Apply the clip path */}
          <div
            className="absolute inset-0 bg-snow"
            style={{
              maskImage: `url("${leftMaskSVG}")`,
              WebkitMaskImage: `url("${leftMaskSVG}")`,
              maskSize: "auto 100%", // ✅ Maintains aspect ratio
              WebkitMaskSize: "auto 100%",
              maskPosition: "top right",
              WebkitMaskPosition: "top right",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
            }}
          ></div>
        </div>

        <div className="w-full max-w-lg lg:max-w-3xl mx-4 md:mx-0">
          <div className="flex items-center justify-between h-14 p-4 rounded-b-3xl bg-snow">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src={logo}
                alt="Logo"
                width={140}
                height={40}
                className=""
              />
            </Link>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 overflow-hidden">
              {/* Main Nav Items */}
              <Link
                href="/home/home-v1"
                className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                About us
              </Link>
              <Link
                href="/pricing"
                className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/contact/contact-v1"
                className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                Contact
              </Link>
              {/* Pages Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors">
                  <span>Portfolio</span>
                </button>
              </div>
            </div>
            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/get-started"
                className="inline-flex items-center px-4 py-2 bg-[#FF6B2C] text-white text-sm font-medium rounded-full hover:bg-brand-dark transition-colors"
              >
                Get Started
              </Link>
            </div>
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              {!isMobileMenuOpen ? <Menu size={24} /> : <X size={24} />}
            </button>
          </div>
        </div>

        {/* Right Curved Cutout */}
        <div className="hidden md:block flex-1 relative">
          {/* Apply the clip path */}
          <div
            className="absolute inset-0 bg-snow"
            style={{
              maskImage: `url("${rightMaskSVG}")`,
              WebkitMaskImage: `url("${rightMaskSVG}")`,
              maskSize: "auto 100%", // ✅ Maintains aspect ratio
              WebkitMaskSize: "auto 100%",
              maskPosition: "top left",
              WebkitMaskPosition: "top left",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-snow">
          <div className="px-4 pt-4 pb-6 space-y-4">
            <Link
              href="/home/home-v1"
              className="block text-gray-700 hover:text-gray-900 text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/about"
              className="block text-gray-700 hover:text-gray-900 text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About us
            </Link>

            <Link
              href="/pricing"
              className="block text-gray-700 hover:text-gray-900 text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>

            <Link
              href="/contact/contact-v1"
              className="block text-gray-700 hover:text-gray-900 text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile Pages Section */}
            <div className="pt-4 border-t border-gray-100">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Portfolio
              </p>
            </div>

            {/* Mobile CTA */}
            <div className="pt-4">
              <Link
                href="/get-started"
                className="block w-full text-center px-6 py-3 bg-[#FF6B2C] text-white text-sm font-medium rounded-lg hover:bg-brand-dark transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
