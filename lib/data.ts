import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Haven & Co.",
    slug: "haven-co",
    liveUrl: "https://havenco.vercel.app/",
    description:
      "A world-class luxury real estate website. This is a demo/concept site — no backend or auth needed. The goal is to create a visually stunning, award-worthy frontend. Built to generate leads and showcase the brand, includes online booking, and local SEO optimisation.",
    image: "/images/projects/havenco/havencoHero.png",
    tags: ["Real Estate", "Luxury", "Premium"],
    screenshots: [
      "/images/projects/havenco/havenco-2.png",
      "/images/projects/havenco/havenco-3.png",
      "/images/projects/havenco/havenco-4.png",
    ],
    designBrief: {
      colors: [
        { hex: "#141414", label: "Primary - Obsidian" },
        { hex: "#C9A84C", label: "Accent - Gold" },
        { hex: "#F5F0EB", label: "Heading - Silk" },
        { hex: "#6B6B6B", label: "Body - Mist" },
      ],
      fonts: [
        { name: "DM Sans", role: "Body" },
        { name: "Cormorant Garamond", role: "Headings" },
        { name: "Montserrat", role: "Accent" },
      ],
    },
  },
  {
    id: "2",
    title: "Luxe Real Estate Platform",
    slug: "luxe-real-estate",
    liveUrl: "https://luxerealestate.com.au",
    description:
      "Premium property marketplace featuring virtual tours, interactive floor plans, and a buyer portal. Designed to elevate the brand and convert high-intent visitors into enquiries.",
    image: "/images/webDesign.jpg",
    tags: ["Real Estate", "Melbourne", "Marketplace"],
    screenshots: [
      "/projects/luxe-real-estate/hero.png",
      "/projects/luxe-real-estate/listings.png",
      "/projects/luxe-real-estate/property.png",
    ],
    designBrief: {
      colors: [
        { hex: "#0D0D0D", label: "Primary" },
        { hex: "#C9A86C", label: "Gold Accent" },
        { hex: "#FFFFFF", label: "Background" },
        { hex: "#3A3A3A", label: "Body Text" },
      ],
      fonts: [
        { name: "Playfair Display", role: "Headings" },
        { name: "DM Sans", role: "Body" },
      ],
    },
  },
  {
    id: "3",
    title: "FitTrack Coaching App",
    slug: "fittrack-coaching",
    liveUrl: "https://fittrackcoaching.com.au",
    description:
      "A dynamic marketing site for a personal training business. Features an interactive program builder, client transformations gallery, and seamless Calendly integration for bookings.",
    image: "/images/webDesign.jpg",
    tags: ["Fitness", "SaaS", "Bookings"],
    screenshots: [
      "/projects/fittrack-coaching/hero.png",
      "/projects/fittrack-coaching/programs.png",
      "/projects/fittrack-coaching/testimonials.png",
    ],
    designBrief: {
      colors: [
        { hex: "#FF6B2C", label: "Primary" },
        { hex: "#1A1A2E", label: "Dark" },
        { hex: "#F0FDF4", label: "Light Green" },
        { hex: "#22C55E", label: "Success" },
      ],
      fonts: [
        { name: "Space Grotesk", role: "Headings" },
        { name: "Inter", role: "Body" },
      ],
    },
  },
  {
    id: "4",
    title: "Coastal Café & Bistro",
    slug: "coastal-cafe",
    liveUrl: "https://coastalcafe.com.au",
    description:
      "An inviting, mobile-first website for a beachside café. Features an online menu with dietary filters, Instagram feed integration, and a reservation system with real-time availability.",
    image: "/images/webDesign.jpg",
    tags: ["Hospitality", "Restaurant", "Melbourne"],
    screenshots: [
      "/projects/coastal-cafe/hero.png",
      "/projects/coastal-cafe/menu.png",
      "/projects/coastal-cafe/reservations.png",
    ],
    designBrief: {
      colors: [
        { hex: "#2D6A4F", label: "Forest Green" },
        { hex: "#F4E8C1", label: "Sand" },
        { hex: "#FFFFFF", label: "White" },
        { hex: "#8B4513", label: "Espresso" },
      ],
      fonts: [
        { name: "Lora", role: "Headings" },
        { name: "Source Sans Pro", role: "Body" },
      ],
    },
  },
];
