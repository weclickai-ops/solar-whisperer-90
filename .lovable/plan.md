# Glarenergy — Precision Solar Tracking Site

A dark, engineering-grade marketing site for Glarenergy built in phases, with a locked content file as the single source of truth and custom SVG technical illustrations instead of stock photography.

## Stack note

This project runs on TanStack Start (React 19 + Vite + Tailwind v4 + shadcn/ui), not plain Vite React. Two adaptations to the brief:

- Brand tokens go in `src/styles.css` under `@theme` / `:root` (Tailwind v4 is CSS-first — there is no `tailwind.config.ts`).
- Fonts load via `<link>` tags in the root route head (`src/routes/__root.tsx`), not `index.html`.
- Routing is file-based under `src/routes/`; the home page is `src/routes/index.tsx`.

Everything else — colors, typography scale, component set, accessibility rules — follows the brief exactly.

## Phase 1 — Foundation & design system

- Tokens in `src/styles.css`: `--blue #007FFF`, `--blue-600 #0069D6`, `--cyan #3FD4FF`, `--bg #04060C`, `--bg-elev #070D18`, text ramp `#E9EEFB / #AEB9D6 / #7D8AA8`, hairline/surface alphas. Mapped as Tailwind utilities. No green, purple, teal, orange, or rainbow gradients anywhere.
- Fonts: Clash Display (display), General Sans (body), JetBrains Mono (labels/specs) loaded from Fontshare + Google Fonts in the root head. Heading weight 600, line-height 1.02, tracking -0.025em; h1 `clamp(2.75rem, 7.5vw, 6rem)`, h2 `clamp(2rem, 4.6vw, 3.5rem)`; body 16px/1.65 at 52ch max.
- Global shell: fixed ~80px header, transparent over a scrim at top and blurred `rgba(4,6,12,0.72)` + hairline on scroll; nav Technology · Product · Engineering · About · Contact; blue pill CTA "Talk to an Engineer →"; mobile hamburger drawer with scroll lock and 44px targets.
- Ambient fixed background layer: two soft blue/cyan radial washes plus a 72px radially-masked technical grid.
- Reusable primitives: `Button` (pill, blue / ghost), `Card` (hairline, 1.5rem radius, cursor-following blue glow on hover), `Eyebrow`, `SectionHead`, `Reveal` (IntersectionObserver, 750ms `cubic-bezier(.16,1,.3,1)`, stagger prop, fires once).
- Route scaffolds: `/`, `/about`, `/product`, `/technology`, `/specs`, `/contact` with per-route `head()` metadata.

## Phase 2 — Locked content

`src/data/content.ts`, strongly typed, holding identity, mission/vision, the eleven headline figures, the 2P-HSAT product copy, both datasheets, features, and contact details verbatim. No component hardcodes copy. No invented projects, clients, certifications, team, addresses, dates, or PDF downloads — sections that would need them become CTAs instead.

## Phase 3 — Home page

Twelve sections in order: hero with animated three-line masked headline, spec rail, and the cinematic SVG tracker-array scene with live telemetry chips on a 12s sun loop; marquee strip; count-up performance strip; interactive "Why track the sun?" morning/midday/afternoon diagram; 2P-HSAT showcase with six keyboard-accessible SVG hotspots; 1P vs 2P tabbed comparator; engineering 3×3 hairline grid with hand-drawn line icons; annotated terrain cross-section; five-step "how it tracks" rows; energy-gain curve chart with stroke-dashoffset draw-in; asymmetric "Why Glarenergy"; blue-bordered CTA band.

## Phase 4 — Inner pages

About (story, mission/vision panels, stat block, CTA — no timeline or team), Product (full 2P-HSAT with hotspots, comparator, spec summary), Technology (alternating diagram/text deep dives), Specs (four instrument-style datasheet blocks with sticky jump nav, no download button), Contact (validated enquiry form with visible labels and inline errors plus hairline contact cards — no address or map; submit handler left clearly unwired).

## Phase 5 — Dock, footer, QA

Floating bottom-right "Contact" pill expanding to WhatsApp / Call / Email pills (dark glass, cyan line icons, plus icon rotates 45°, closes on Escape and outside click — no green bubble). Four-column minimal footer with no social icons. Then a full QA sweep: contrast, 44px targets, focus rings, no horizontal scroll at 375/768/1024/1440/1920, no layout shift, no emoji icons, `prefers-reduced-motion` kill switch on every animation, heading order, `role="img"` + `<title>` on every meaningful SVG, lazy-loading below the fold.

## Delivery

I will build phases 1–2 together (they are inseparable), then 3, then 4, then 5 — pausing after each so you can check for drift before I continue.
