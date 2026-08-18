# Glarenergy Core

# Glarenergy — Lovable Build Prompts

Paste these **in order**, one at a time. Wait for each to finish and render before sending the next.
Prompt 1 is the foundation — do not skip it, everything after depends on the tokens it creates.

---

## PROMPT 1 — Foundation & Design System

```
Build the foundation for a premium deep-tech renewable-energy website for Glarenergy,
a solar-tracking technology company. React + Vite + TypeScript + Tailwind + shadcn/ui.

This is a DARK, precision-engineering brand. Think Unistellar / SpaceX / Arc-browser
level of restraint — NOT a generic solar-installer site, NOT a SaaS landing page.

=== BRAND TOKENS (exact — these are the real Glarenergy brand values, do not substitute) ===
Define these in index.css as CSS variables and map them in tailwind.config.ts:

  --blue:    #007FFF   /* primary brand accent, CTAs, active states */
  --blue-600:#0069D6   /* hover state */
  --cyan:    #3FD4FF   /* secondary accent, technical labels, gradient tips */
  --bg:      #04060C   /* page background, near-black */
  --bg-elev: #070D18   /* elevated surfaces, cards, CTA bands */
  --text:    #E9EEFB   /* primary text */
  --text-2:  #AEB9D6   /* body copy */
  --text-3:  #7D8AA8   /* labels, captions, muted */
  --line:    rgba(255,255,255,0.09)   /* hairline borders */
  --line-2:  rgba(255,255,255,0.16)   /* stronger borders */
  --line-blue: rgba(0,127,255,0.45)   /* active/hover borders */
  --surface: rgba(255,255,255,0.025)  /* card fill */

HARD COLOR RULES:
- NEVER use green, purple, teal, orange, or rainbow gradients anywhere.
- The ONLY accents are #007FFF and #3FD4FF. Everything else is black/white/grey.
- Blue is used sparingly and with intent — it is a highlight, not a wash.

=== TYPOGRAPHY (these are Glarenergy's actual fonts — load from Fontshare) ===
Add to index.html <head>:
<link href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600&f[]=general-sans@300,400,500,600&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">

  font-display: 'Clash Display'  → all h1–h4, big numbers, stat values
  font-body:    'General Sans'   → all body copy, buttons, nav
  font-mono:    'JetBrains Mono' → eyebrows, spec values, telemetry, step numbers

Type rules:
- Headings: weight 600, line-height 1.02, letter-spacing -0.025em
- h1 clamp(2.75rem, 7.5vw, 6rem) — h2 clamp(2rem, 4.6vw, 3.5rem)
- Body 16px minimum, line-height 1.65, color var(--text-2), max-width 52ch
- Eyebrow label pattern: mono, 0.75rem, letter-spacing 0.22em, UPPERCASE, cyan,
  preceded by a 28px blue horizontal rule
- Uppercase ONLY for eyebrows, the hero h1, and mono labels. Nowhere else.

=== GLOBAL SHELL ===
1. Fixed header, transparent at top over a dark gradient scrim, transitioning on scroll
   to rgba(4,6,12,0.72) + backdrop-blur(20px) + 1px bottom hairline. Height ~80px.
   Do not make it oversized.
   Nav items: Technology · Product · Engineering · About · Contact
   Primary CTA button (pill, blue, right-aligned): "Talk to an Engineer →"
   Mobile (<768px): hamburger → full-width drawer, 44px+ tap targets, body scroll locked.

2. Ambient background (fixed, pointer-events-none, behind all content):
   - radial-gradient(70vw 45vh at 82% -12%, rgba(0,127,255,0.16), transparent 62%)
   - radial-gradient(55vw 40vh at -8% 108%, rgba(63,212,255,0.08), transparent 62%)
   - a 72px technical grid of rgba(255,255,255,0.028) 1px lines, radially masked
     so it fades out below the fold
   Subtle. It should read as atmosphere, not decoration.

3. Reusable components to build now:
   - <Button> pill, 44px min-height, blue fill / ghost variant with hairline border
   - <Card> hairline border, radius 1.5rem, surface fill, hover: border turns
     rgba(0,127,255,0.45) + translateY(-3px) + a radial blue glow that follows the cursor
   - <Eyebrow> label component
   - <SectionHead> eyebrow + h2 + optional lede
   - <Reveal> wrapper using IntersectionObserver: opacity 0→1, translateY(18px)→0,
     750ms cubic-bezier(.16,1,.3,1), fires once, supports a stagger delay prop

=== NON-NEGOTIABLES (apply to every screen you ever build for this project) ===
- Accessibility: text contrast ≥4.5:1, visible :focus-visible ring (2px cyan, 3px offset),
  full keyboard navigation, semantic HTML (header/nav/main/section/footer), alt text on
  every meaningful image, aria-labels on all icon-only buttons.
- Respect prefers-reduced-motion: disable all transitions/animations, render final state.
- Icons: inline SVG only (Lucide). NEVER emoji as icons.
- cursor-pointer on every clickable element.
- Responsive at 375 / 768 / 1024 / 1440 / 1920. No horizontal scroll at any width.
  Mobile is a re-layout, not a shrink.
- Reserve space for images/media so there is no layout shift.
- Animations: 180–320ms for micro-interactions, 750ms max for reveals. Subtle and fast.
  This must feel expensive and engineered, never like an animation demo.

Set up the routing shell (Home, About, Product, Technology, Specs, Contact) with the
header and footer in place. Build ONLY the design system, header, footer and empty page
scaffolds in this step — I will send the page content next.
```

---

## PROMPT 2 — Locked Content (send this second, before any page)

```
Here is the COMPLETE and ONLY factual source for this site. It is taken from the live
Glarenergy website.

CRITICAL CONTENT RULE:
Do NOT invent, embellish, or extrapolate ANY company information, project, client,
certification, award, statistic, date, team member, office address, or technical spec.
If a section would need a fact that is not in this list, either omit that section or
replace it with a call-to-action. You may rewrite the wording to be more concise and
polished, but every factual claim and number must stay exactly as given.

--- IDENTITY ---
Company: Glarenergy
Tagline: "Energy Made Efficient"
Positioning: A renewable energy company built on precision — pioneering solar power
  with innovative single-axis trackers, empowering solar plants to achieve superior
  efficiency and output.
Mission: Install 1GW of solar plants equipped with our trackers by 2030, accelerating
  the global shift to clean energy.
Vision: Lead as the most innovative and efficient renewable energy technology company,
  driving a sustainable ecosystem for future generations.

--- HEADLINE PERFORMANCE FIGURES (the only numbers that exist) ---
15–25%    More energy yield vs fixed-tilt systems
180 km/h  Wind survival / stow rating
±2°       Tracking accuracy
1 GW      Deployment goal by 2030
~450      Piles per MW
>15%      Ground coverage ratio
10%       N–S slope tolerance
10%       E–W slope tolerance
±45°–±60° Tilt / rotation range
50m–100m  Tracker length
100       Maximum modules per tracker

--- PRODUCT ---
Name: 2P-HSAT — Horizontal Single Axis Tracker
Description: A dual-row horizontal tracker that follows the sun's east-west path with
  precision motorization and a low-profile design for maximum stability.
Key benefits: Increases energy output by 15–25% over fixed-tilt; wind-resistant up to
  180 km/h; ideal for flat terrains and bifacial modules; cost-effective land use with
  shared drive systems.
Configurations available: HSAT 2P and TSAT 1P.

--- DATASHEET: DESIGN SPECIFICATION ---
Tracking Type          HSAT 2P & TSAT 1P
Drive Type             Single point linear actuator
Motor Type             24V DC Motor
Tracker Length         50m – 100m
Module Number          Up to 100 modules
Ground Coverage Ratio  >15%
Modules Support        Commercial & Bifacial
Operating Temperature  -15°C to 60°C
Foundation             Ramming / Pre-drill / PHC
Anti-Corrosion         Galvanized / Mg-Zn Coated

--- DATASHEET: ELECTRONICS & CONTROLS ---
Control System         1 controller per tracker
Tracking Algorithm     Astronomical + intelligent
Tracking Accuracy      ±2°
Communications         Zigbee mesh / Ethernet / RS485
Nighttime Stow         Yes
Backtracking           Yes (3D optional)

--- FEATURES ---
10% N–S Slope     Adapts to north-south terrain gradients
10% E–W Slope     Handles undulating east-west ground
±45° to ±60° Tilt Wide rotation range for maximum capture
1P & 2P Configs   Single or dual-row portrait layouts
180 km/h Stow     0° stow position in extreme wind
Backtracking      Eliminates row-to-row shading (3D optional)
Bifacial Compatible
Easy Maintenance

--- CONTACT (real, use exactly) ---
Phone:   +91 95021 42303  and  +91 73969 77130
Email:   connect@glarenergy.com
Website: www.glarenergy.com

--- EXPLICITLY DOES NOT EXIST — never fabricate these ---
No physical/office address. No social media accounts. No named projects, case studies,
deployments or capacities. No client or partner logos. No certifications or awards.
No team members or leadership names. No founding date or company timeline/milestones.
No downloadable datasheet PDF.
Where a section would normally use these, use a CTA instead
(e.g. "Planning a solar plant? Let's engineer the right tracking solution.").

--- IMAGERY ---
There are no supplied photographs. Do NOT use stock photos of rooftop solar or houses.
Instead build the visuals as custom inline SVG technical illustrations (see next prompts),
and where a real photo is genuinely required, render a clearly-marked dashed placeholder
box labelled with what belongs there (e.g. "UTILITY-SCALE TRACKER ARRAY / 1920×1080")
so it can be swapped later.

Store all of this in a single src/data/content.ts file, strongly typed, and import from
it everywhere. No hardcoded copy in components.
```

---

## PROMPT 3 — Home Page

```
Build the Home page using the tokens and the content file. Sections in this exact order:

1. HERO (min-height 100svh, two-column 1.05fr / 0.95fr, stacks on mobile)
   LEFT:
     Eyebrow: PRECISION SOLAR TRACKING TECHNOLOGY
     h1, uppercase, three lines each animating up from a clipped mask on load
     (stagger 0.12s): "ENERGY" / "MADE" / "EFFICIENT." — the last line uses a
     white→#3FD4FF gradient text fill.
     Lede: "Glarenergy engineers precision single-axis solar tracking systems designed
     to increase energy yield, improve plant performance and maximise the value of every
     solar installation."
     Buttons: "Explore the Technology →" (primary) + "Talk to an Engineer" (ghost)
     Below, a 4-column spec rail separated by hairline vertical rules — large display
     numbers with small mono labels beneath:
       15–25%  More Energy Yield
       180 km/h  Wind Rated
       ±2°  Tracking Accuracy
       Bifacial  Ready
     These must read as engineering specifications, not marketing cards.

   RIGHT — this is the centrepiece, spend real effort here:
     A custom inline SVG cinematic scene of a utility-scale solar tracker array:
     receding rows of 2P trackers in perspective on a dark horizon, a low sun with a
     soft blue-cyan glow, subtle terrain, thin technical stroke work. Dark, moody,
     blue-lit. NOT flat vector art — use gradients and depth.
     Overlay 3 small glass telemetry chips (mono, 0.7rem, uppercase, blurred dark
     background, blue hairline border):
       SUN POSITION · 142°
       TRACKING ANGLE · +38°
       ENERGY OUTPUT · +21%
     The tracker rows should slowly rotate their tilt angle in a continuous ~12s loop
     following the sun, and the telemetry values should update in sync. Pause under
     prefers-reduced-motion.

2. MARQUEE STRIP — a single infinite-scrolling line, hairline border top and bottom:
   "15–25% MORE YIELD / 180 KM/H WIND RATED / ±2° TRACKING / BIFACIAL READY /
   ZIGBEE MESH / BACKTRACKING /" — slashes in blue. Pause on hover and focus.

3. PERFORMANCE STRIP — 5 equal cells in one bordered container, divided by hairlines.
   Large Clash Display numbers that count up when scrolled into view (respect
   reduced-motion: show final value instantly):
     15–25%  Higher Energy Yield
     180 km/h  Wind Survival
     ±2°  Tracking Accuracy
     10%  N–S / E–W Terrain Adaptability
     50–100 m  Tracker Length

4. "WHY TRACK THE SUN?" — the educational section, must be understandable by a
   non-technical visitor in 10 seconds.
   Eyebrow: THE FUNDAMENTALS
   h2: "The sun moves. Your panels should too."
   Build an interactive SVG diagram with three states — MORNING / MIDDAY / AFTERNOON —
   driven by a segmented control AND auto-advancing every 3.5s until the user interacts.
   Show two panels side by side: a fixed-tilt panel (static) and a Glarenergy tracker
   (rotating to face the sun), with incident sun rays drawn to each. The captured-energy
   indicator under the tracker is visibly fuller. Animate the tilt transition smoothly.
   Short caption: fixed-tilt panels stay in one position; trackers continuously adjust
   their orientation toward the sun.

5. PRODUCT SHOWCASE — 2P-HSAT
   Left: a large SVG cross-section/side view of the 2P tracker (torque tube, dual-row
   modules, linear actuator, pile foundation) on a sticky-positioned frame.
   Overlay 6 numbered circular hotspots with a soft ping animation, positioned on the
   relevant parts. Clicking one (keyboard accessible, aria-pressed) swaps the text in a
   detail panel to the right:
     01 Drive System  · Single point linear actuator, 24V DC motor
     02 Structural Design · Low-profile dual-row, galvanized / Mg-Zn coated
     03 Tracker Rotation · ±45° to ±60° range, ±2° accuracy
     04 Module Configuration · Up to 100 modules, commercial & bifacial
     05 Controller · One controller per tracker, astronomical + intelligent algorithm
     06 Foundation · Ramming / pre-drill / PHC, ~450 piles per MW
   Right column also carries the product name, the description, and a
   "View full specifications →" link.

6. CONFIGURATION COMPARISON — 1P vs 2P
   A tabbed engineering comparator (not plain cards). Tabs: "2P — HSAT" / "1P — TSAT".
   Each panel shows an SVG diagram of the module arrangement plus a hairline spec table:
   module arrangement, tracker configuration, terrain suitability, advantages.
   Only use facts from the content file; keep the two panels visually identical in
   structure so the differences are easy to scan.

7. ENGINEERING — "Engineered for real-world solar farms."
   3×3 grid of hairline cards, each with a custom thin-line SVG technical icon (drawn,
   not generic): Single-point linear actuator · 24V DC motor · Astronomical tracking
   algorithm · ±2° tracking accuracy · Zigbee mesh · Ethernet · RS485 · Nighttime stow ·
   180 km/h wind survival. Cards get the cursor-following blue glow on hover.

8. TERRAIN ADAPTABILITY — "Built for more than perfect terrain."
   Full-width SVG terrain cross-section with trackers installed along an undulating
   slope, annotated with 10% N–S, 10% E–W, ±45°–±60° tilt, and a stow position marker.
   Animate the annotations in on scroll.

9. HOW GLARENERGY TRACKS THE SUN — 5 rows, hairline separated, mono step numbers,
   each row: number / title / description, subtle background tint on hover:
     01 Calculate — Astronomical algorithms determine the sun's position.
     02 Track — The controller continuously calculates the required tracker angle.
     03 Move — The single-point linear actuator adjusts the tracker structure.
     04 Optimize — Panels stay positioned for maximum solar capture, with backtracking
        to eliminate row-to-row shading.
     05 Protect — The system responds to high wind and enters 0° stow; nighttime stow
        on schedule.

10. ENERGY GAIN VISUALISATION — an SVG line chart comparing generation across a day:
    a flatter fixed-tilt curve vs a broader Glarenergy tracker curve, with the delta
    area filled in a translucent blue. X axis: morning → midday → afternoon.
    Label the gap "15–25% higher energy yield". Draw the curves with a stroke-dashoffset
    animation on scroll-in. Do not invent any other numbers, and do not put values on
    the Y axis.

11. WHY GLARENERGY — asymmetric layout, NOT a uniform icon-card grid. Mix one large
    typographic statement block with smaller hairline cards:
    Higher Energy Yield · Intelligent Tracking · Robust Engineering · Terrain
    Adaptability · Bifacial Compatibility · Low Maintenance · Wind Resilience ·
    Flexible Communication · Backtracking

12. CTA BAND — bordered in rgba(0,127,255,0.45), radial blue glow from the top edge:
    h2 "Let's build the future of solar."
    "Have a project in mind? Talk to our team about your solar tracking requirements."
    Buttons: "Talk to an Engineer →" + "Request a Technical Consultation"

Every section fades/slides in on scroll via the Reveal component with a small stagger.
```

---

## PROMPT 4 — Inner Pages

```
Build the remaining pages. Each starts with a page header: breadcrumb (mono, uppercase),
eyebrow, large h1, and a lede — over the ambient background, no hero image.

ABOUT — "Building the next generation of solar infrastructure."
  Company story from the positioning statement. Mission and Vision as two large
  side-by-side hairline panels. A stat block: 1 GW deployment goal by 2030 / 15–25%
  more yield / 180 km/h wind resistance. NO timeline, NO team section, NO office
  address — those facts do not exist. End with the CTA band.

PRODUCT — the 2P-HSAT in full: large product SVG, the hotspot callout system, the
  1P vs 2P comparator, benefits, and a summary spec table. Link through to Specs.

TECHNOLOGY — deep dive on: astronomical + intelligent tracking algorithm, the controller
  (1 per tracker), single-point linear actuator, 24V DC motor, backtracking (3D optional),
  nighttime stow, 180 km/h wind protection and stow behaviour, terrain adaptability,
  bifacial compatibility, and communications (Zigbee mesh / Ethernet / RS485).
  Use the SVG diagrams, alternating left/right with text. Technical but readable.

SPECS — a proper engineering datasheet interface, the most "instrument-like" page:
  Four bordered sheet blocks with a header bar and hairline rows (label left in muted
  grey, value right in JetBrains Mono white):
    MECHANICAL — tracker length, module number, ground coverage ratio, modules support,
      operating temperature, foundation, anti-corrosion, tracking type
    ELECTRICAL — motor type, drive type, control system
    TRACKING — tracking algorithm, tracking accuracy, rotation range, backtracking,
      nighttime stow
    COMMUNICATION — Zigbee mesh, Ethernet, RS485
  Add a sticky category filter/jump nav on desktop. Rows highlight on hover.
  Do NOT add a "Download Datasheet" button — no PDF exists.

CONTACT — "Let's build the future of solar."
  Two columns. Left: enquiry form — Name*, Company, Email*, Phone, Project Location,
  Estimated Capacity (MW), Message*. Inline validation with the error message directly
  beneath its field, visible labels above every input (never placeholder-only), 46px+
  input height, clear focus ring. On submit, show a success state — it is a static form,
  so make clear in the code comment that the submit handler needs wiring to a real
  endpoint; do not fake a network request.
  Right: contact details as hairline cards — both phone numbers as tel: links, the email
  as a mailto: link, and the website. NO office address, NO map — the address is unknown.
```

---

## PROMPT 5 — Floating Dock, Footer & QA Pass

```
1. FLOATING CONTACT DOCK (bottom-right, fixed):
   A single compact pill button labelled "Contact" with a plus icon. On click it expands
   upward into three pill items: WhatsApp (wa.me link to +91 95021 42303), Call
   (tel:+919502142303), Email (mailto:connect@glarenergy.com). Each 44px min-height,
   dark glass background, hairline border, cyan line icon, blue border on hover.
   The plus icon rotates 45° when open. Closes on Escape and on outside click.
   ABSOLUTELY NO large green WhatsApp bubble and no stack of coloured circles.

2. FOOTER — dark, minimal, four columns collapsing to one on mobile:
   Col 1: Glarenergy wordmark + "Energy Made Efficient." + one-line description.
   Cols 2–4: Technology / Product / Engineering / About / Specs / Contact links,
   and contact details. NO social icons — no accounts exist.
   Bottom bar: © [current year] Glarenergy. Hairline divider above.

3. FINAL QA PASS — go through the whole site and fix:
   - Any text below 4.5:1 contrast on #04060C
   - Any tap target under 44×44px
   - Any focus state that is invisible or removed
   - Any horizontal scroll at 375px, 768px, 1024px, 1440px
   - Any layout shift from unsized media
   - Any emoji used as an icon (replace with inline SVG)
   - Any animation that does not stop under prefers-reduced-motion
   - Any heading that skips a level (h1 → h3)
   - Add descriptive alt text to every meaningful SVG (role="img" + <title>)
   - Lazy-load anything below the fold
   Report what you changed.
```

---

## Notes on running this

**Lovable has no temperature setting** — it isn't exposed to users, so there's nothing to
tune there. What actually controls output quality is prompt scope and sequencing, which is
why this is split into five. Sending all of it at once reliably produces a shallower result.

- Use **Chat mode** first if you want it to plan before writing code; switch to build mode
  to execute.
- After each prompt, look at the result before continuing. Fix drift immediately —
  especially any green creeping in, or generic stock photography appearing.
- If a section comes back looking like a generic SaaS card grid, reply:
  *"This reads as a generic SaaS layout. Rebuild it with asymmetric composition, hairline
  dividers instead of filled cards, and larger typographic contrast."*
- The SVG scenes (hero array, sun-tracking diagram, terrain profile, energy curve) are the
  single biggest differentiator. If they come back weak, re-prompt that one section alone
  with more direction rather than regenerating the page.
- Keep `src/data/content.ts` as the single source of truth. If Lovable starts hardcoding
  copy into components, tell it to move it back.

**Verification note:** every number, spec and contact detail in Prompt 2 was taken from
the live glarenergy.com. The "does not exist" list is equally important — it is what keeps
the build from inventing projects, certifications or an office address.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/bf8029b5-3675-4213-9362-636d31d54094).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
