import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Melbourne Plumbing Co.",
    slug: "melbourne-plumbing",
    liveUrl: "https://melbourneplumbing.com.au",
    description:
      "A modern, high-converting website for a Melbourne-based plumbing company. Built to generate leads with clear service pages, online booking, and local SEO optimisation.",
    image: "/images/projects/havenco/havencoHero.png",
    tags: ["Plumber", "Melbourne", "Lead Gen"],
    screenshots: [
      "/projects/melbourne-plumbing/hero.png",
      "/projects/melbourne-plumbing/services.png",
      "/projects/melbourne-plumbing/booking.png",
    ],
    designBrief: {
      colors: [
        { hex: "#1A3A5C", label: "Primary" },
        { hex: "#2B8FD4", label: "Accent" },
        { hex: "#F5F7FA", label: "Background" },
        { hex: "#1A1A2E", label: "Dark" },
      ],
      fonts: [
        { name: "Inter", role: "Body" },
        { name: "Poppins", role: "Headings" },
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
