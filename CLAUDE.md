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
- Custom theme colors defined in `globals.css` and `tailwind.config.ts`
- Token names: `brand` (#FF6B2C), `midnight` (#1A1A2E), `snow` (#ffffff)
- Use Tailwind utility classes (e.g., `bg-brand`, `text-snow`, `bg-midnight`)
- Responsive breakpoints: `md:` for tablet, `lg:` for desktop
- Dark mode support via CSS `prefers-color-scheme` media query

### Brand Design System
Full color palette and font stack (updated 2026):

| Token | Value | Usage |
|---|---|---|
| `brand` | `#FF6B2C` | Primary orange — CTAs, accents, highlights |
| `brand-dark` | `#E85A1E` | Hover state for brand orange |
| `brand-light` | `#FF8A56` | Lighter orange — badge text on dark |
| `midnight` | `#1A1A2E` | Dark section backgrounds |
| `surface` | `#222240` | Cards on dark backgrounds |
| `dark-lighter` | `#2D2D4A` | Active tabs, borders on dark |
| `solar` | `#FFD166` | Accent yellow |
| `coral` | `#FF6B6B` | Accent coral |
| `orange-100` | `#FFF0E8` | Light orange tint (bg for icons/badges on white) |
| `snow` | `#ffffff` | White |
| `gray` | `#BCC3CE` | Body text on dark |

Font stack:
- **Outfit** (`font-outfit` / `--font-outfit`) — primary sans-serif, weights 300–900
- **Space Mono** (`font-space-mono` / `--font-space-mono`) — monospace/technical, weights 400 & 700
- **Avantt Trial** (`font-avantt` / `--font-avantt-trial`) — display/headings, local font

Tailwind config: `tailwind.config.ts` at project root documents all brand tokens.

### Image Handling
- Use Next.js `Image` component with `fill` prop for responsive images
- Brand assets stored as SVGs in `/public/images/`
- `PixelateLogoBlue.svg` — orange logo for use on light backgrounds
- `PixelateLight.svg` — white logo for use on dark backgrounds
