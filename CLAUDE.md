# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

- `npm run dev` - Start development server (localhost:3000)
- `npm run build` - Create production build
- `npm start` - Run production server
- `npm run lint` - Run ESLint

## Tech Stack

- **Framework**: Next.js 16 with App Router and React 19
- **Styling**: Tailwind CSS 4 with PostCSS
- **Language**: TypeScript (strict mode)
- **Icons**: Lucide React

## Architecture

### Directory Structure
- `app/` - Next.js App Router pages and layouts
- `components/ui/` - Reusable UI components (Nav)
- `components/sections/` - Page section components (Hero, Services)
- `public/images/` - Static assets and brand logos

### Component Patterns
- Client components use `"use client"` directive at top of file
- Page sections are composed in `app/page.tsx`
- Path alias `@/*` maps to project root for imports

### Styling Conventions
- Custom theme colors defined in `globals.css`: `electric` (#0066ff), `snow` (#ffffff)
- Use Tailwind utility classes (e.g., `bg-electric`, `text-snow`)
- Responsive breakpoints: `md:` for tablet, `lg:` for desktop
- Dark mode support via CSS `prefers-color-scheme` media query

### Image Handling
- Use Next.js `Image` component with `fill` prop for responsive images
- Brand assets stored as SVGs in `/public/images/`
