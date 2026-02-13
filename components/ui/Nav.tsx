"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import logo from "@/public/images/PixelateLogoBlue.svg";

interface DropdownColumn {
  title?: string;
  links: {
    label: string;
    href: string;
  }[];
}

const Navbar = () => {
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsPagesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const pagesDropdown: DropdownColumn[] = [
    {
      links: [
        { label: "Home V.1", href: "/home/home-v1" },
        { label: "Home V.2", href: "/home/home-v2" },
        { label: "Home V.3", href: "/home/home-v3" },
        { label: "Features", href: "/features" },
      ],
    },
    {
      links: [
        { label: "Contact V.1", href: "/contact/contact-v1" },
        { label: "Contact V.2", href: "/contact/contact-v2" },
        { label: "Contact V.3", href: "/contact/contact-v3" },
        { label: "About", href: "/about" },
      ],
    },
    {
      links: [
        { label: "Blog V.1", href: "/blog/blog-v1" },
        { label: "Blog V.2", href: "/blog/blog-v2" },
        { label: "Blog V.3", href: "/blog/blog-v3" },
        { label: "Pricing", href: "/pricing" },
      ],
    },
    {
      links: [{ label: "Blog Post", href: "/blogs/sample-post" }],
    },
  ];

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

  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent z-100">
      {/* Spacer */}
      <div className="h-4 bg-snow" />
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

        <div className="w-full max-w-lg lg:max-w-3xl">
          <div className="flex items-center justify-between h-16 p-4 rounded-b-3xl bg-snow">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
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
                <button
                  onClick={() => setIsPagesOpen(!isPagesOpen)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors"
                >
                  <span>Pages</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isPagesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {/* Dropdown Menu */}
                {isPagesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px] bg-white rounded-lg shadow-xl border border-gray-100 p-6">
                    <div className="grid grid-cols-4 gap-6">
                      {pagesDropdown.map((column, columnIndex) => (
                        <div key={columnIndex} className="space-y-3">
                          {column.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
                              onClick={() => setIsPagesOpen(false)}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/get-started"
                className="inline-flex items-center px-6 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
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
        <div className="lg:hidden border-t border-gray-100">
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
                Pages
              </p>
              {pagesDropdown.flatMap((column) =>
                column.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2 text-sm text-gray-600 hover:text-gray-900"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))
              )}
            </div>

            {/* Mobile CTA */}
            <div className="pt-4">
              <Link
                href="/get-started"
                className="block w-full text-center px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
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
