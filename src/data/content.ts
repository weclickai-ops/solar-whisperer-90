/**
 * Single source of truth for ALL Glarenergy copy and facts.
 * Every factual claim here comes from the live glarenergy.com.
 * Do NOT invent projects, clients, certifications, awards, team members,
 * addresses, founding dates or downloadable PDFs — none exist.
 */

export type SpecRow = { label: string; value: string };
export type Feature = { title: string; description: string };
export type Step = { number: string; title: string; description: string };
export type Hotspot = {
  id: string;
  number: string;
  title: string;
  description: string;
  /** position on the product SVG, in % of the frame */
  x: number;
  y: number;
};

export const identity = {
  company: "Glarenergy",
  tagline: "Energy Made Efficient",
  positioning:
    "A renewable energy company built on precision — pioneering solar power with innovative single-axis trackers, empowering solar plants to achieve superior efficiency and output.",
  mission:
    "Install 1GW of solar plants equipped with our trackers by 2030, accelerating the global shift to clean energy.",
  vision:
    "Lead as the most innovative and efficient renewable energy technology company, driving a sustainable ecosystem for future generations.",
  heroLede:
    "Glarenergy engineers precision single-axis solar tracking systems designed to increase energy yield, improve plant performance and maximise the value of every solar installation.",
} as const;

export type Figure = { value: string; label: string };

export const figures = {
  yield: { value: "15–25%", label: "More energy yield vs fixed-tilt systems" },
  wind: { value: "180 km/h", label: "Wind survival / stow rating" },
  accuracy: { value: "±2°", label: "Tracking accuracy" },
  goal: { value: "1 GW", label: "Deployment goal by 2030" },
  piles: { value: "~450", label: "Piles per MW" },
  gcr: { value: ">15%", label: "Ground coverage ratio" },
  slopeNS: { value: "10%", label: "N–S slope tolerance" },
  slopeEW: { value: "10%", label: "E–W slope tolerance" },
  tilt: { value: "±45°–±60°", label: "Tilt / rotation range" },
  length: { value: "50m–100m", label: "Tracker length" },
  modules: { value: "100", label: "Maximum modules per tracker" },
} satisfies Record<string, Figure>;

export const heroSpecRail: Figure[] = [
  { value: "15–25%", label: "More Energy Yield" },
  { value: "180 km/h", label: "Wind Rated" },
  { value: "±2°", label: "Tracking Accuracy" },
  { value: "Bifacial", label: "Ready" },
];

export const performanceStrip: Figure[] = [
  { value: "15–25%", label: "Higher Energy Yield" },
  { value: "180 km/h", label: "Wind Survival" },
  { value: "±2°", label: "Tracking Accuracy" },
  { value: "10%", label: "N–S / E–W Terrain Adaptability" },
  { value: "50–100 m", label: "Tracker Length" },
];

export const marqueeItems = [
  "15–25% MORE YIELD",
  "180 KM/H WIND RATED",
  "±2° TRACKING",
  "BIFACIAL READY",
  "ZIGBEE MESH",
  "BACKTRACKING",
];

export const product = {
  name: "2P-HSAT",
  fullName: "Horizontal Single Axis Tracker",
  description:
    "A dual-row horizontal tracker that follows the sun's east-west path with precision motorization and a low-profile design for maximum stability.",
  benefits: [
    "Increases energy output by 15–25% over fixed-tilt",
    "Wind-resistant up to 180 km/h",
    "Ideal for flat terrains and bifacial modules",
    "Cost-effective land use with shared drive systems",
  ],
  configurations: ["HSAT 2P", "TSAT 1P"],
} as const;

export const designSpecs: SpecRow[] = [
  { label: "Tracking Type", value: "HSAT 2P & TSAT 1P" },
  { label: "Drive Type", value: "Single point linear actuator" },
  { label: "Motor Type", value: "24V DC Motor" },
  { label: "Tracker Length", value: "50m – 100m" },
  { label: "Module Number", value: "Up to 100 modules" },
  { label: "Ground Coverage Ratio", value: ">15%" },
  { label: "Modules Support", value: "Commercial & Bifacial" },
  { label: "Operating Temperature", value: "-15°C to 60°C" },
  { label: "Foundation", value: "Ramming / Pre-drill / PHC" },
  { label: "Anti-Corrosion", value: "Galvanized / Mg-Zn Coated" },
];

export const electronicsSpecs: SpecRow[] = [
  { label: "Control System", value: "1 controller per tracker" },
  { label: "Tracking Algorithm", value: "Astronomical + intelligent" },
  { label: "Tracking Accuracy", value: "±2°" },
  { label: "Communications", value: "Zigbee mesh / Ethernet / RS485" },
  { label: "Nighttime Stow", value: "Yes" },
  { label: "Backtracking", value: "Yes (3D optional)" },
];

export const features: Feature[] = [
  { title: "10% N–S Slope", description: "Adapts to north-south terrain gradients" },
  { title: "10% E–W Slope", description: "Handles undulating east-west ground" },
  { title: "±45° to ±60° Tilt", description: "Wide rotation range for maximum capture" },
  { title: "1P & 2P Configs", description: "Single or dual-row portrait layouts" },
  { title: "180 km/h Stow", description: "0° stow position in extreme wind" },
  { title: "Backtracking", description: "Eliminates row-to-row shading (3D optional)" },
  { title: "Bifacial Compatible", description: "Captures reflected irradiance on the rear face" },
  { title: "Easy Maintenance", description: "Accessible drive and controller hardware" },
];

export const productHotspots: Hotspot[] = [
  {
    id: "drive",
    number: "01",
    title: "Drive System",
    description: "Single point linear actuator, 24V DC motor.",
    x: 50,
    y: 62,
  },
  {
    id: "structure",
    number: "02",
    title: "Structural Design",
    description: "Low-profile dual-row, galvanized / Mg-Zn coated.",
    x: 30,
    y: 40,
  },
  {
    id: "rotation",
    number: "03",
    title: "Tracker Rotation",
    description: "±45° to ±60° range, ±2° accuracy.",
    x: 72,
    y: 33,
  },
  {
    id: "modules",
    number: "04",
    title: "Module Configuration",
    description: "Up to 100 modules, commercial & bifacial.",
    x: 18,
    y: 27,
  },
  {
    id: "controller",
    number: "05",
    title: "Controller",
    description: "One controller per tracker, astronomical + intelligent algorithm.",
    x: 62,
    y: 74,
  },
  {
    id: "foundation",
    number: "06",
    title: "Foundation",
    description: "Ramming / pre-drill / PHC, ~450 piles per MW.",
    x: 40,
    y: 88,
  },
];

export const trackingSteps: Step[] = [
  {
    number: "01",
    title: "Calculate",
    description: "Astronomical algorithms determine the sun's position.",
  },
  {
    number: "02",
    title: "Track",
    description: "The controller continuously calculates the required tracker angle.",
  },
  {
    number: "03",
    title: "Move",
    description: "The single-point linear actuator adjusts the tracker structure.",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "Panels stay positioned for maximum solar capture, with backtracking to eliminate row-to-row shading.",
  },
  {
    number: "05",
    title: "Protect",
    description:
      "The system responds to high wind and enters 0° stow; nighttime stow on schedule.",
  },
];

export const engineeringItems: Feature[] = [
  { title: "Single-point linear actuator", description: "One drive point per tracker row." },
  { title: "24V DC motor", description: "Low-voltage motorization." },
  { title: "Astronomical tracking algorithm", description: "Astronomical + intelligent control." },
  { title: "±2° tracking accuracy", description: "Held across the rotation range." },
  { title: "Zigbee mesh", description: "Wireless mesh communication between trackers." },
  { title: "Ethernet", description: "Wired plant-level communication." },
  { title: "RS485", description: "Serial communication support." },
  { title: "Nighttime stow", description: "Scheduled stow position after sundown." },
  { title: "180 km/h wind survival", description: "0° stow in extreme wind." },
];

export const whyGlarenergy: string[] = [
  "Higher Energy Yield",
  "Intelligent Tracking",
  "Robust Engineering",
  "Terrain Adaptability",
  "Bifacial Compatibility",
  "Low Maintenance",
  "Wind Resilience",
  "Flexible Communication",
  "Backtracking",
];

export const configurations = [
  {
    id: "2p",
    tab: "2P — HSAT",
    name: "HSAT 2P",
    rows: [
      { label: "Module arrangement", value: "Two modules in portrait per row" },
      { label: "Tracker configuration", value: "Horizontal single axis tracker (HSAT)" },
      { label: "Terrain suitability", value: "Flat terrain; 10% N–S and 10% E–W slope" },
      { label: "Advantages", value: "Cost-effective land use with shared drive systems" },
    ],
  },
  {
    id: "1p",
    tab: "1P — TSAT",
    name: "TSAT 1P",
    rows: [
      { label: "Module arrangement", value: "One module in portrait per row" },
      { label: "Tracker configuration", value: "Tracker single axis tracker (TSAT)" },
      { label: "Terrain suitability", value: "Flat terrain; 10% N–S and 10% E–W slope" },
      { label: "Advantages", value: "Single-row portrait layout with the same drive system" },
    ],
  },
] as const;

export const contact = {
  phones: ["+91 95021 42303", "+91 73969 77130"],
  phoneHrefs: ["+919502142303", "+917396977130"],
  whatsapp: "919502142303",
  email: "connect@glarenergy.com",
  website: "www.glarenergy.com",
  websiteHref: "https://www.glarenergy.com",
} as const;

export const cta = {
  heading: "Let's build the future of solar.",
  body: "Have a project in mind? Talk to our team about your solar tracking requirements.",
  primary: "Talk to an Engineer",
  secondary: "Request a Technical Consultation",
  soft: "Planning a solar plant? Let's engineer the right tracking solution.",
} as const;

export const nav = [
  { label: "Home", to: "/" },
  { label: "Technology", to: "/technology" },
  { label: "Product", to: "/product" },
  { label: "Specifications", to: "/specifications" },
  { label: "Contact", to: "/contact" },
] as const;

/* ------------------------------------------------------------------ */
/* Product detail pages — only verified datasheet claims.              */
/* ------------------------------------------------------------------ */

export type ProductPageData = {
  id: string;
  name: string;
  fullName: string;
  positioning: string;
  overview: { what: string; problem: string; where: string };
  features: Feature[];
  benefits: string[];
  specs: SpecRow[];
  image: { src: string; alt: string };
};

export const productPages: ProductPageData[] = [
  {
    id: "2p-hsat",
    name: "2P HSAT",
    fullName: "Horizontal Single Axis Tracker — two modules in portrait",
    positioning:
      "A dual-row horizontal tracker with precision motorization and a low-profile design for maximum stability.",
    overview: {
      what: "A horizontal single-axis tracker carrying two modules in portrait per row, driven by a single-point linear actuator and one controller per tracker.",
      problem:
        "Fixed-tilt arrays peak briefly at midday. Tracking the sun's east–west path captures more of the available irradiance across the whole day.",
      where:
        "Utility-scale solar plants on flat or undulating terrain — 10% N–S and 10% E–W slope tolerance — including bifacial module layouts.",
    },
    features: [
      { title: "Intelligent tracking control", description: "Astronomical + intelligent algorithm, one controller per tracker." },
      { title: "Accurate positioning", description: "±2° tracking accuracy across a ±45° to ±60° rotation range." },
      { title: "Reliable operation", description: "180 km/h wind survival with 0° stow; -15°C to 60°C operating range." },
      { title: "System integration", description: "Zigbee mesh, Ethernet and RS485 communications." },
      { title: "Utility-scale design", description: "50 m – 100 m trackers carrying up to 100 modules." },
      { title: "Backtracking", description: "Eliminates row-to-row shading (3D backtracking optional)." },
    ],
    benefits: [
      "Increases energy output by 15–25% over fixed-tilt",
      "Wind-resistant up to 180 km/h",
      "Ideal for flat terrains and bifacial modules",
      "Cost-effective land use with shared drive systems",
    ],
    specs: designSpecs,
    image: {
      src: "/images/tracker-row.jpg",
      alt: "Close-up of a 2P HSAT tracker row showing the torque tube and drive assembly beneath the modules",
    },
  },
  {
    id: "1p-tsat",
    name: "1P TSAT",
    fullName: "Tracker Single Axis Tracker — one module in portrait",
    positioning:
      "A single-row portrait tracker built on the same precision drive and control platform.",
    overview: {
      what: "A horizontal single-axis tracker carrying one module in portrait per row, using the same single-point linear actuator and per-tracker controller.",
      problem:
        "Some sites and module strategies call for a single-row portrait layout — without giving up tracking accuracy or wind resilience.",
      where:
        "Utility-scale plants on flat terrain with 10% N–S and 10% E–W slope tolerance, supporting commercial and bifacial modules.",
    },
    features: [
      { title: "Intelligent tracking control", description: "Astronomical + intelligent algorithm, one controller per tracker." },
      { title: "Accurate positioning", description: "±2° tracking accuracy across a ±45° to ±60° rotation range." },
      { title: "Reliable operation", description: "180 km/h wind survival with 0° stow; -15°C to 60°C operating range." },
      { title: "System integration", description: "Zigbee mesh, Ethernet and RS485 communications." },
      { title: "Single-row portrait", description: "One module in portrait per row on the shared drive platform." },
      { title: "Backtracking", description: "Eliminates row-to-row shading (3D backtracking optional)." },
    ],
    benefits: [
      "Single-row portrait layout with the same drive system",
      "Tracking-grade yield uplift over fixed-tilt",
      "Wind-resistant up to 180 km/h",
      "Bifacial module support",
    ],
    specs: designSpecs,
    image: {
      src: "/images/actuator-detail.jpg",
      alt: "Detail of the single-point linear actuator drive used on the 1P TSAT tracker",
    },
  },
];

/* ------------------------------------------------------------------ */
/* Why Glarenergy — six concise value propositions.                    */
/* ------------------------------------------------------------------ */

export const whyCards: Feature[] = [
  {
    title: "Technology",
    description: "Intelligent tracker-controller solutions: astronomical + intelligent algorithms with ±2° accuracy.",
  },
  {
    title: "Engineering",
    description: "Single-point linear actuator drive and low-voltage 24V DC motorization, designed for utility scale.",
  },
  {
    title: "Efficiency",
    description: "15–25% more energy yield than fixed-tilt, with backtracking to remove row-to-row shading.",
  },
  {
    title: "Reliability",
    description: "180 km/h wind survival with 0° stow, operating from -15°C to 60°C in real-world conditions.",
  },
  {
    title: "Indian Capability",
    description: "India-based engineering and support, close to some of the world's fastest-growing solar markets.",
  },
  {
    title: "Partnership",
    description: "Built to work with EPCs, developers and project owners from design through deployment.",
  },
];

/* ------------------------------------------------------------------ */
/* Projects — no verified project data yet.                            */
/* CONTENT REQUIRED FROM GLARENERGY: project name, location, capacity, */
/* technology, application, challenge, solution, measured results.     */
/* Until supplied, the Projects page shows the case-study framework    */
/* marked "coming soon" rather than fictional numbers.                 */
/* ------------------------------------------------------------------ */

export const projectFields = [
  "Project name",
  "Location",
  "Capacity",
  "Technology",
  "Application",
] as const;

export const projectStoryFields = ["Challenge", "Solution", "Result"] as const;

export const projectsStatus = {
  heading: "Project case studies are on the way.",
  body: "We publish project proof only when the data is verified. Detailed case studies — capacity, technology, challenge, solution and measured results — will appear here as projects are documented.",
} as const;
