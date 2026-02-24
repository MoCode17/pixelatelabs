# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Build Commands

- `npm run dev` — Start development server (localhost:3000)
- `npm run build` — Create production build
- `npm start` — Run production server
- `npm run lint` — Run ESLint

---

## Website Intent

**Pixelate** is a Melbourne-based web design and development agency. The website is a conversion-focused marketing site with the goal of turning visitors into clients.

- **Audience:** Australian small-to-medium businesses looking for a premium web agency
- **Tone:** Confident, modern, slightly technical — not corporate, not casual
- **Goal:** Generate leads and bookings via the CTA ("Book a Call" / "Start a Project")
- **Page structure (top → bottom):**
  1. `Nav` — Sticky navigation
  2. `Hero` — Headline, sub-headline, primary CTA, social proof
  3. `ServicesV2` — Service offering cards
  4. `Featured` — Portfolio / featured work showcase
  5. `Testimonials` — Client testimonials
  6. `Process` — How we work (step-by-step)
  7. `FinalCTA` — Bottom conversion section
  8. `Footer` — Newsletter, links, contact, socials

---

## Tech Stack

- **Framework:** Next.js 16, App Router, React 19
- **Styling:** Tailwind CSS 4 with PostCSS
- **Language:** TypeScript (strict mode)
- **Animations:** Framer Motion (`motion` from `framer-motion`)
- **Icons:** Lucide React
- **Fonts:** Google Fonts via `next/font/google` + local fonts via `next/font/local`

---

## Architecture

### Directory Structure

```
app/
  globals.css          # Tailwind @import + @theme CSS variables
  layout.tsx           # Root layout — fonts, metadata, html wrapper
  page.tsx             # Composes all sections in order
components/
  ui/
    Nav.tsx            # Sticky top nav with logo + mobile hamburger
    Footer.tsx         # Footer — newsletter, services, socials
  sections/
    Hero.tsx           # Hero banner
    ServicesV2.tsx     # Services cards (active — use this, not Services.tsx)
    Services.tsx       # LEGACY — not used in page.tsx
    Featured.tsx       # Portfolio showcase
    Testimonials.tsx   # Client testimonials
    Process.tsx        # Process steps + stats row
    FinalCTA.tsx       # Bottom CTA
public/
  images/              # SVG logos + photo assets
  fonts/               # Avantt Trial OTF files (16 weights/styles)
```

### Component Patterns

- Client components use `"use client"` directive at the top of the file
- All page sections are composed in `app/page.tsx`
- Path alias `@/*` maps to the project root (e.g. `@/components/ui/Nav`)
- Framer Motion is used throughout — `motion` is available in all section components

---

## Brand & Design System

### Color Tokens

Defined in `app/globals.css` (`@theme` block) and `tailwind.config.ts`.

| Token | Hex | Usage |
|---|---|---|
| `brand` | `#FF6B2C` | Primary orange — CTAs, accents, active states, highlights |
| `brand-dark` | `#E85A1E` | Hover state for `brand` |
| `brand-light` | `#FF8A56` | Lighter orange — badge text on dark backgrounds |
| `midnight` | `#1A1A2E` | Primary dark background (Hero, ServicesV2, Process stats, FinalCTA) |
| `surface` | `#222240` | Cards and elevated surfaces on dark backgrounds |
| `dark-lighter` | `#2D2D4A` | Active tabs, borders, dividers on dark |
| `solar` | `#FFD166` | Yellow accent — highlight badges, decorative elements |
| `coral` | `#FF6B6B` | Coral accent — secondary highlights |
| `orange-100` | `#FFF0E8` | Light orange tint — icon/badge backgrounds on white sections |
| `snow` | `#ffffff` | White — text on dark, backgrounds on light sections |
| `gray` | `#BCC3CE` | Body/label text on dark backgrounds |

### Font Stack

| Token | CSS Variable | Source | Weights | Usage |
|---|---|---|---|---|
| `font-outfit` | `--font-outfit` | Google Fonts | 300–900 | Primary sans-serif — body, UI, nav |
| `font-space-mono` | `--font-space-mono` | Google Fonts | 400, 700 | Monospace — labels, tags, technical text |
| `font-avantt` | `--font-avantt-trial` | Local OTF (public/fonts/) | 400, 700 | Display/headings — hero titles, stat values |

Fonts are loaded in `app/layout.tsx` and applied as CSS variables. `font-sans` defaults to Outfit; `font-mono` defaults to Space Mono.

### Styling Conventions

- Use Tailwind utility classes with the brand tokens above (e.g. `bg-midnight`, `text-snow`, `text-brand`, `bg-surface`)
- Responsive breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px)
- Dark sections use `bg-midnight` with `text-snow` headings and `text-gray` body copy
- Light sections use `bg-white` or `bg-gray-50` with dark text
- Animated gradients use `backgroundPosition` with Framer Motion `animate` prop + `backgroundSize: "300% 300%"`
- Never use arbitrary hex values inline — always use a named token from the palette above

### Logo Assets

| File | Use when |
|---|---|
| `public/images/PixelateLogoOrange.svg` | Nav, footer, light backgrounds |
| `public/images/PixelateLight.svg` | Dark background sections |
| `public/images/PixelateLogoGray.svg` | Decorative / watermark use |
| `public/images/icon.svg` / `iconDark.svg` | Favicon / icon-only contexts |

### Image Handling

- Use Next.js `<Image>` component with `fill` prop for responsive images
- Avoid raw `<img>` tags
- Photo assets in `public/images/` (JPG/PNG); brand assets are SVG

---

## Section Background Rhythm

The page alternates dark ↔ light to create visual separation:

| Section | Background |
|---|---|
| Hero | `bg-midnight` (dark) |
| ServicesV2 | `bg-midnight` (dark) |
| Featured | `bg-white` or `bg-gray-50` (light) |
| Testimonials | `bg-white` or `bg-gray-50` (light) |
| Process | `bg-gray-50` (light) + `bg-midnight` stats row |
| FinalCTA | `bg-midnight` (dark) |
| Footer | `bg-midnight` (dark) |

Maintain this alternating rhythm when adding or reordering sections.
