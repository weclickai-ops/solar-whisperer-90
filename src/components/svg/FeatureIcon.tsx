/**
 * Line glyphs for the design-feature grid, drawn in the same vocabulary as the
 * other scenes on the site: a torque tube on piers, module rows, a low sun.
 * Keyed by the feature titles in `home.why.cards` — an unmatched title falls
 * back to the tracker outline rather than rendering nothing.
 */

const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** A tracker row seen end-on: pier, torque tube and the two module halves. */
function Tracker({ x, y, tilt = 0, w = 16 }: { x: number; y: number; tilt?: number; w?: number }) {
  const dx = (w / 2) * Math.cos((tilt * Math.PI) / 180);
  const dy = (w / 2) * Math.sin((tilt * Math.PI) / 180);
  return (
    <>
      <line x1={x} y1={y} x2={x} y2={y + 7} />
      <line x1={x - dx} y1={y - dy} x2={x + dx} y2={y + dy} />
    </>
  );
}

const glyphs: Record<string, React.ReactNode> = {
  "Higher energy yield": (
    <>
      <circle cx="13" cy="13" r="4.5" />
      <line x1="13" y1="4" x2="13" y2="6" />
      <line x1="13" y1="20" x2="13" y2="22" />
      <line x1="4" y1="13" x2="6" y2="13" />
      <line x1="20" y1="13" x2="22" y2="13" />
      <line x1="6.8" y1="6.8" x2="8.2" y2="8.2" />
      <line x1="17.8" y1="17.8" x2="19.2" y2="19.2" />
      <path d="M6 40c7 0 10-11 16-13.5S38 24 42 22" />
      <path d="M37 20.5l5 1.5-1.5 5" />
    </>
  ),

  "Intelligent tracking": (
    <>
      <circle cx="38" cy="10" r="3.5" />
      {/* The sweep the row turns through, ending in an arrowhead. */}
      <path d="M9 25A17 17 0 0 1 30 12" strokeDasharray="2.5 3" />
      <path d="M26.5 11l4 1-1 4" />
      <line x1="5" y1="38" x2="43" y2="38" />
      <line x1="20" y1="38" x2="20" y2="27" />
      <line x1="11.6" y1="30.2" x2="28.4" y2="23.8" />
    </>
  ),

  "Terrain adaptability": (
    <>
      {/*
        Undulating ground, piers of three different heights, level modules on
        top. The modules must NOT run parallel to the ground or the whole
        thing reads as a ladder.
      */}
      <path d="M4 33l10 4 12-7 11 4 7-3" />
      <line x1="14" y1="37" x2="14" y2="24" />
      <line x1="8.5" y1="24" x2="19.5" y2="24" />
      <line x1="26" y1="30" x2="26" y2="22" />
      <line x1="20.5" y1="22" x2="31.5" y2="22" />
      <line x1="37" y1="34" x2="37" y2="23" />
      <line x1="31.5" y1="23" x2="42.5" y2="23" />
    </>
  ),

  "Wind resilience": (
    <>
      <path d="M4 13h12a3 3 0 1 0-3-3" />
      <path d="M4 21h20a3.5 3.5 0 1 1-3.5 3.5" />
      <path d="M4 29h9" />
      <line x1="10" y1="40" x2="42" y2="40" />
      <line x1="26" y1="40" x2="26" y2="33" />
      <line x1="17" y1="33" x2="35" y2="33" />
    </>
  ),

  "Bifacial compatibility": (
    <>
      <line x1="12" y1="20" x2="36" y2="20" />
      <line x1="6" y1="40" x2="42" y2="40" />
      <line x1="24" y1="20" x2="24" y2="40" />
      <line x1="15" y1="8" x2="15" y2="15" />
      <path d="M12.5 12.5L15 15l2.5-2.5" />
      <line x1="33" y1="8" x2="33" y2="15" />
      <path d="M30.5 12.5L33 15l2.5-2.5" />
      <line x1="15" y1="35" x2="15" y2="28" />
      <path d="M12.5 30.5L15 28l2.5 2.5" />
      <line x1="33" y1="35" x2="33" y2="28" />
      <path d="M30.5 30.5L33 28l2.5 2.5" />
    </>
  ),

  "Low maintenance": (
    /*
      A shield, for the protection the description actually describes —
      accessible hardware and coatings that resist corrosion. A gear read as a
      second sun and a spanner read as a lollipop at this size.
    */
    <>
      <path d="M24 7l14 5v12c0 8-7 13-14 16-7-3-14-8-14-16V12z" />
      <path d="M17.5 24l4.5 4.5L31 20" />
    </>
  ),
};

const fallback = (
  <>
    <line x1="6" y1="38" x2="42" y2="38" />
    <Tracker x={24} y={31} tilt={-25} w={26} />
  </>
);

export function FeatureIcon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false" className="h-12 w-12" {...common}>
      {glyphs[name] ?? fallback}
    </svg>
  );
}
