import React from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <div className="relative w-full max-w-300">
        {/* Curved top decorative elements */}
        <div className="absolute -top-4 -left-8 w-16 h-16 transform rotate-90">
          <svg
            viewBox="0 0 64 64"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d="M 0 64 Q 0 0 64 0 L 64 64 Z"
              fill="#E5E7EB"
              className="fill-gray-200"
            />
          </svg>
        </div>
        <div className="absolute -top-4 right-0 w-16 h-16">
          <svg
            viewBox="0 0 64 64"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d="M 64 64 Q 64 0 0 0 L 0 64 Z"
              fill="#E5E7EB"
              className="fill-gray-200"
            />
          </svg>
        </div>

        {/* Main nav container */}
        <div className="relative bg-gray-200 rounded-b-3xl shadow-lg">
          <div className="flex items-center justify-between px-6 md:px-8 py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className="hover:cursor-pointer hover:scale-105 transition-transform duration-300 sm:scale-110 md:scale-120 xl:scale-140 xl:px-8"
              >
                <Image
                  src="/images/PixelateLogo.svg"
                  alt="Pixelate Labs"
                  width={120}
                  height={32}
                  priority
                  className="object-contain"
                />
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/how-we-work"
                className="text-gray-900 text-base font-medium hover:text-blue-600 transition-colors"
              >
                How We Work
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-900 text-base font-medium hover:text-blue-600 transition-colors">
                  Services
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              <Link
                href="/about"
                className="text-gray-900 text-base font-medium hover:text-blue-600 transition-colors"
              >
                About Us
              </Link>

              <Link
                href="/work"
                className="text-gray-900 text-base font-medium hover:text-blue-600 transition-colors"
              >
                Work
              </Link>

              <Link
                href="/why-choose-us"
                className="text-gray-900 text-base font-medium hover:text-blue-600 transition-colors"
              >
                Why Choose Us
              </Link>
            </div>

            {/* CTA Button */}
            <Link
              href="/consultation"
              className="hidden md:flex items-center gap-2 h-11 px-5 bg-blue-600 hover:bg-blue-700 transition-colors rounded-xl text-white text-base font-bold"
            >
              Get a Free Consultation
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>

            {/* Mobile Menu Button */}
            <button className="md:hidden flex items-center justify-center w-10 h-10 text-gray-900">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
