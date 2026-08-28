/**
 * Single source of truth for ALL Glarenergy copy and facts.
 * Every claim here is supplied by Glarenergy.
 * Nothing may be invented: there are no projects, clients, certifications,
 * awards, team members, addresses, social accounts, founding dates or PDFs.
 */

export type SpecRow = { label: string; value: string };
export type Card = { title: string; description: string };
export type Step = { number: string; title: string; description: string };
export type Figure = { value: string; label: string };
export type NavItem = { label: string; to: string };
export type LinkItem = { label: string; value: string; href: string; external?: boolean };

export const identity = {
  company: "Glarenergy",
  tagline: "Energy Made Efficient",
  description:
    "Glarenergy designs and engineers precision single-axis solar tracking systems for utility-scale solar plants.",
  mission: "Install 1 GW of solar plants equipped with our trackers by 2030.",
  vision: "Lead as the most innovative and efficient renewable energy technology company.",
} as const;

export const contact = {
  phonePrimary: "+91 95021 42303",
  phoneSecondary: "+91 73969 77130",
  email: "connect@glarenergy.com",
  whatsapp: "https://wa.me/919502142303",
  website: "www.glarenergy.com",
  websiteHref: "https://www.glarenergy.com",
} as const;

export const siteUrl = "https://solar-whisperer-90.lovable.app";

export const nav: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Product", to: "/product" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const contactRows: LinkItem[] = [
  { label: "Phone", value: contact.phonePrimary, href: "tel:+919502142303" },
  { label: "Phone", value: contact.phoneSecondary, href: "tel:+917396977130" },
  { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { label: "WhatsApp", value: "Message on WhatsApp", href: contact.whatsapp, external: true },
  { label: "Website", value: contact.website, href: contact.websiteHref, external: true },
];

/* ---------------------------------------------------------------- HOME */

export const home = {
  eyebrow: "Precision Solar Tracking Technology",
  headingLine1: "Smarter solar tracking.",
  headingLine2: "Higher energy yield.",
  lede: "Glarenergy engineers precision single-axis tracking systems that improve the efficiency and performance of utility-scale solar projects.",
  telemetry: [
    { label: "Sun Position", value: "142°" },
    { label: "Tracking Angle", value: "+38°" },
    { label: "Rotation Range", value: "±60°" },
  ],
  specRail: [
    { value: "15–25%", label: "More Energy Yield" },
    { value: "180 km/h", label: "Wind Survival" },
    { value: "±2°", label: "Tracking Accuracy" },
    { value: "Bifacial", label: "Ready" },
  ] satisfies Figure[],
  intro: {
    heading: "A renewable energy company built on precision.",
    body: "Glarenergy designs single-axis solar trackers that follow the sun through the day, enabling a plant to generate more from the same modules and the same land. Structure, drive and control are engineered as one system.",
    cta: "Learn more →",
  },
  technologyTeaser: {
    eyebrow: "Technology",
    heading: "Accuracy is a control problem, not a mechanical one.",
    lede: "A tracker returns value only if it maintains accurate orientation throughout the day under real site conditions. Every Glarenergy tracker operates its own controller.",
    cards: [
      {
        title: "One controller per tracker",
        description:
          "Each tracker carries dedicated control hardware rather than sharing a decision across a block.",
      },
      {
        title: "Astronomical + intelligent algorithm",
        description:
          "Solar position is calculated for the site, then adjusted by the control logic during operation.",
      },
      {
        title: "Held orientation",
        description: "The commanded angle is maintained to within ±2° across the operating day.",
      },
    ] satisfies Card[],
    cta: "Explore Our Technology →",
  },
  field: {
    eyebrow: "In the field",
    heading: "The tracker row, up close.",
    body: "A single 2P row carries two module rows in portrait about one torque tube, supported on piers set along its length.",
    placeholders: [
      { label: "Installed array — site photograph", dimensions: "1600×1200" },
      { label: "Drive assembly — detail", dimensions: "1600×1200" },
    ],
  },
  productTeaser: {
    eyebrow: "Product",
    heading: "One platform, two configurations.",
    cards: [
      {
        title: "2P — HSAT",
        description: "Two modules in portrait about a horizontal single axis.",
      },
      {
        title: "1P — TSAT",
        description: "One module in portrait on a tilted single axis.",
      },
    ] satisfies Card[],
    cta: "View Product →",
  },
  why: {
    eyebrow: "Why Glarenergy",
    heading: "Engineered for the conditions a plant actually meets.",
    cards: [
      {
        title: "Higher energy yield",
        description:
          "Following the sun keeps modules at a productive angle from morning through afternoon.",
      },
      {
        title: "Intelligent tracking",
        description:
          "Astronomical calculation with backtracking removes row-to-row shading at low sun angles.",
      },
      {
        title: "Terrain adaptability",
        description:
          "The structure accommodates sloping ground in both the north–south and east–west directions.",
      },
      {
        title: "Wind resilience",
        description:
          "Trackers move to a flat stow position when wind conditions require protection.",
      },
      {
        title: "Bifacial compatibility",
        description: "Commercial and bifacial modules are both supported on the same platform.",
      },
      {
        title: "Low maintenance",
        description:
          "Drive and controller hardware remain accessible, and coatings resist corrosion.",
      },
    ] satisfies Card[],
  },
  missionVision: [
    { label: "Mission", value: "1 GW installed by 2030" },
    { label: "Vision", value: "Efficiency-led renewable technology" },
  ] satisfies SpecRow[],
} as const;

/* ---------------------------------------------------------- TECHNOLOGY */

export const technology = {
  eyebrow: "Technology",
  heading: "How the tracker follows the sun.",
  lede: "A fixed-tilt array remains in a single position and reaches peak output only briefly at solar noon. A tracker maintains a productive angle from morning through afternoon — provided its orientation remains accurate. That accuracy is determined by the controller, not by the structure.",
  steps: [
    {
      number: "01",
      title: "Calculate",
      description: "Astronomical algorithms determine solar position for the site.",
    },
    {
      number: "02",
      title: "Track",
      description: "The controller derives the tracker angle required.",
    },
    {
      number: "03",
      title: "Move",
      description: "A single-point linear actuator turns the torque tube.",
    },
    {
      number: "04",
      title: "Optimise",
      description: "Backtracking removes row-to-row shading at low sun angles.",
    },
    {
      number: "05",
      title: "Protect",
      description: "Flat stow in high wind; nighttime stow on schedule.",
    },
  ] satisfies Step[],
  yield: {
    eyebrow: "Yield",
    heading: "Where the additional yield comes from.",
    body: "The shaded area represents generation a fixed-tilt array does not capture. Over the operating life of a plant, this amounts to 15–25% more energy from the same modules.",
  },
  terrain: {
    eyebrow: "Terrain and safety",
    heading: "Built for imperfect ground.",
    body: "Sloping ground and severe weather are handled by the structure and the control system together, without a separate site-specific product.",
    rows: [
      { label: "N–S slope", value: "10%" },
      { label: "E–W slope", value: "10%" },
      { label: "Rotation range", value: "±45° to ±60°" },
      { label: "Extreme wind", value: "0° stow" },
      { label: "Wind survival", value: "180 km/h" },
      { label: "Nighttime stow", value: "Scheduled" },
      { label: "Operating temperature", value: "−15 °C to 60 °C" },
    ] satisfies SpecRow[],
  },
  communication: {
    eyebrow: "Communication",
    heading: "Three ways the fleet reports.",
    cards: [
      { title: "Zigbee mesh", description: "Wireless mesh across trackers in a block." },
      { title: "Ethernet", description: "Wired connection into plant networking." },
      { title: "RS485", description: "Serial link for controller-level integration." },
    ] satisfies Card[],
  },
} as const;

/* ------------------------------------------------------------- PRODUCT */

export type ConfigKey = "2p" | "1p";

export const productPage = {
  eyebrow: "Product",
  name: "2P-HSAT",
  fullName: "Horizontal Single Axis Tracker",
  description:
    "A dual-row horizontal tracker that follows the sun's east–west path with precision motorization and a low-profile design for maximum stability. Available in two configurations: HSAT 2P and TSAT 1P.",
  cta: "Enquire Now →",
  configs: {
    "2p": {
      key: "2p" as const,
      label: "2P — HSAT",
      rows: [
        { label: "Module arrangement", value: "Two modules in portrait" },
        { label: "Axis", value: "Horizontal single axis" },
        { label: "Slope tolerance", value: "10% N–S / 10% E–W" },
        { label: "Layout", value: "Shared drive, efficient land use" },
      ] satisfies SpecRow[],
    },
    "1p": {
      key: "1p" as const,
      label: "1P — TSAT",
      rows: [
        { label: "Module arrangement", value: "One module in portrait" },
        { label: "Axis", value: "Tilted single axis" },
        { label: "Slope tolerance", value: "10% N–S / 10% E–W" },
        { label: "Layout", value: "Single-row layout on tighter sites" },
      ] satisfies SpecRow[],
    },
  },
  assembly: {
    eyebrow: "Assembly and components",
    heading: "What the tracker is made of.",
    cards: [
      {
        title: "Single-point linear actuator",
        description: "One drive point turns the torque tube.",
      },
      { title: "24V DC motor", description: "Low-voltage motorization at the drive." },
      {
        title: "One controller per tracker",
        description: "Dedicated control hardware on every row.",
      },
      {
        title: "Ramming / pre-drill / PHC foundation",
        description: "Approximately 450 piles per MW.",
      },
      {
        title: "Galvanised / Mg-Zn coating",
        description: "Anti-corrosion protection on structure.",
      },
      { title: "Up to 100 modules", description: "Tracker length of 50–100 m." },
    ] satisfies Card[],
  },
  service: {
    eyebrow: "In service",
    heading: "The tracker on site.",
    body: "Photography of an installed Glarenergy tracker, showing the drive assembly and module arrangement in operating conditions.",
    placeholder: { label: "Installed tracker — site photograph", dimensions: "1600×1200" },
  },
  cutawayLabels: {
    foundation: "Pile foundation",
    pivot: "Torque tube pivot",
    modules: "Module plane",
    actuator: "Linear actuator",
  },
} as const;

/* ------------------------------------------------------ SPECIFICATIONS */

export type SpecBlock = { title: string; rows: SpecRow[]; id: string };

export const specifications = {
  eyebrow: "Datasheet",
  heading: "Every parameter, one sheet.",
  lede: "Glarenergy single-axis tracker platform — HSAT 2P and TSAT 1P.",
  blocks: [
    {
      id: "mechanical",
      title: "Mechanical",
      rows: [
        { label: "Tracking type", value: "HSAT 2P & TSAT 1P" },
        { label: "Tracker length", value: "50–100 m" },
        { label: "Module number", value: "Up to 100" },
        { label: "Ground coverage ratio", value: ">15%" },
        { label: "Modules support", value: "Commercial & bifacial" },
        { label: "Operating temperature", value: "−15 °C to 60 °C" },
        { label: "Foundation", value: "Ramming / pre-drill / PHC" },
        { label: "Anti-corrosion", value: "Galvanised / Mg-Zn coated" },
      ],
    },
    {
      id: "electrical",
      title: "Electrical",
      rows: [
        { label: "Drive type", value: "Single point linear actuator" },
        { label: "Motor type", value: "24V DC motor" },
        { label: "Control system", value: "1 controller per tracker" },
      ],
    },
    {
      id: "tracking",
      title: "Tracking",
      rows: [
        { label: "Algorithm", value: "Astronomical + intelligent" },
        { label: "Accuracy", value: "±2°" },
        { label: "Rotation range", value: "±45° to ±60°" },
        { label: "Backtracking", value: "Yes (3D optional)" },
        { label: "Nighttime stow", value: "Yes" },
        { label: "Wind stow", value: "0° at 180 km/h" },
      ],
    },
    {
      id: "communication",
      title: "Communication",
      rows: [
        { label: "Zigbee", value: "Mesh" },
        { label: "Ethernet", value: "Supported" },
        { label: "RS485", value: "Supported" },
      ],
    },
  ] satisfies SpecBlock[],
} as const;

/* -------------------------------------------------------------- CONTACT */

export const contactPage = {
  eyebrow: "Contact",
  heading: "Speak with our engineering team.",
  lede: "For tracker supply, technical consultation or partnership enquiries, please use the form or contact us directly.",
  formHeading: "Enquiry form",
  requirements: ["Tracker supply", "Technical consultation", "Partnership – EPC", "Other"],
} as const;

/* ------------------------------------------------------------ CTA BANDS */

export const ctas = {
  about: {
    heading: "See the tracker.",
    body: "The 2P-HSAT platform, its tracking technology and the full specification sheet are on one page.",
    label: "View Product →",
    to: "/product" as const,
  },
  home: {
    heading: "Planning a solar plant?",
    body: "Our engineering team will recommend the appropriate tracking configuration for your site.",
    label: "Talk to Our Team →",
    to: "/contact" as const,
  },
  technology: {
    heading: "Review the product.",
    body: "The 2P-HSAT platform is available in HSAT 2P and TSAT 1P configurations.",
    label: "View Product →",
    to: "/product" as const,
  },
  product: {
    heading: "Discuss your project.",
    body: "Share your site conditions and capacity, and our engineering team will respond.",
    label: "Talk to Our Team →",
    to: "/contact" as const,
  },
  specifications: {
    heading: "Need a parameter confirmed?",
    body: "Our engineering team will confirm tracker parameters against your site requirements.",
    label: "Talk to Our Team →",
    to: "/contact" as const,
  },
} as const;

/* ----------------------------------------------------------------- SEO */

export const seo = {
  "/": {
    title: "Glarenergy | Single-Axis Solar Trackers for Utility-Scale Plants",
    description:
      "Glarenergy engineers precision single-axis solar tracking systems delivering 15–25% more energy yield, ±2° accuracy and 180 km/h wind survival.",
    path: "/",
  },
  "/technology": {
    title: "Solar Tracking Technology | Glarenergy",
    description:
      "How a Glarenergy tracker follows the sun: astronomical calculation, backtracking, flat wind stow and one controller per tracker.",
    path: "/technology",
  },
  "/product": {
    title: "2P-HSAT Solar Tracker — Product, Technology and Specifications | Glarenergy",
    description:
      "The Glarenergy 2P-HSAT horizontal single-axis tracker: configurations, tracking technology and the complete specification sheet, on one page.",
    path: "/product",
  },
  "/specifications": {
    title: "Tracker Specifications and Datasheet | Glarenergy",
    description:
      "Complete mechanical, electrical, tracking and communication specifications for the Glarenergy single-axis tracker platform.",
    path: "/specifications",
  },
  "/about": {
    title: "About Glarenergy | Precision Solar Tracking",
    description:
      "Glarenergy designs and engineers precision single-axis solar tracking systems for utility-scale solar plants.",
    path: "/about",
  },
  "/contact": {
    title: "Contact Glarenergy | Solar Tracker Enquiries",
    description:
      "Contact the Glarenergy engineering team for tracker supply, technical consultation or EPC partnership enquiries.",
    path: "/contact",
  },
} as const;
