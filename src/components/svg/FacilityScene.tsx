import { useId, type ReactNode } from "react";

import { Placeholder } from "@/components/g/Placeholder";

/**
 * Drawn scenes for the manufacturing strip, in the same line vocabulary as the
 * hero and the cutaway. These are illustrations, not photographs, and nothing
 * here claims to depict a specific plant — they stand in until Glarenergy
 * supplies its own photography, at which point setting `src` on the strip item
 * replaces them.
 */

const STROKE = "#5E98DB";
const HILITE = "#3FD4FF";
const ACCENT = "#007FFF";

const line = {
  fill: "none",
  stroke: STROKE,
  strokeOpacity: 0.75,
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Frame({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 400 300"
      role="img"
      aria-label={label}
      className="h-full w-full rounded-xl border border-[var(--line)]"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0A1122" />
          <stop offset="100%" stopColor="#04060C" />
        </linearGradient>
        <radialGradient id={`${id}-pool`} cx="50%" cy="38%">
          <stop offset="0%" stopColor={ACCENT} stopOpacity=".2" />
          <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="400" height="300" fill={`url(#${id}-bg)`} />
      <rect width="400" height="300" fill={`url(#${id}-pool)`} />

      {/* Faint shop-floor grid, so the subject sits in a space. */}
      <g stroke={STROKE} strokeOpacity=".09" strokeWidth="1">
        {[60, 120, 180, 240].map((y) => (
          <line key={y} x1="0" y1={y} x2="400" y2={y} />
        ))}
        {[80, 160, 240, 320].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="300" />
        ))}
      </g>

      <g {...line}>{children}</g>
    </svg>
  );
}

/** A drilled hole on the upper face of the tube. */
function Hole({ x }: { x: number }) {
  return <ellipse cx={x} cy="132" rx="5" ry="2.4" />;
}

/** One shelf of the stock rack: finished tube seen end-on, bore and all. */
function Shelf({
  y,
  r,
  x0,
  gap,
  n,
  o,
}: {
  y: number;
  r: number;
  x0: number;
  gap: number;
  n: number;
  o: number;
}) {
  return (
    <g strokeOpacity={o}>
      {Array.from({ length: n }, (_, i) => (
        <g key={i}>
          <circle cx={x0 + i * gap} cy={y} r={r} />
          <circle cx={x0 + i * gap} cy={y} r={r * 0.55} strokeOpacity={o * 0.55} />
        </g>
      ))}
      <line x1={x0 - r - 6} y1={y + r + 5} x2={x0 + (n - 1) * gap + r + 6} y2={y + r + 5} />
    </g>
  );
}

const scenes: Record<string, ReactNode> = {
  "Torque tube fabrication": (
    <>
      <line x1="0" y1="243" x2="400" y2="243" strokeOpacity=".35" />
      <path d="M30 124h340v52H30z" />
      <ellipse cx="30" cy="150" rx="9" ry="26" />
      <ellipse cx="370" cy="150" rx="9" ry="26" stroke={HILITE} strokeOpacity=".85" />
      <ellipse cx="370" cy="150" rx="5" ry="16" stroke={HILITE} strokeOpacity=".5" />
      <line x1="30" y1="150" x2="361" y2="150" strokeOpacity=".3" />
      {[70, 110, 150, 190, 230, 270, 310].map((x) => (
        <Hole key={x} x={x} />
      ))}
      {[110, 290].map((x) => (
        <g key={x}>
          <path d={`M${x - 26} 243l20-40M${x + 26} 243l-20-40`} />
          <circle cx={x} cy="196" r="7" />
        </g>
      ))}
      {/* Drill head over the next hole position. */}
      <path d="M190 62v34" stroke={HILITE} strokeOpacity=".9" />
      <path d="M182 96h16l-8 20z" stroke={HILITE} strokeOpacity=".9" />
    </>
  ),

  "Bearing housing assembly": (
    <>
      <path d="M0 150h120M280 150h120" strokeOpacity=".3" />
      <path d="M0 132h120v36H0zM280 132h120v36H280z" strokeOpacity=".45" />
      <rect x="120" y="80" width="160" height="140" rx="12" />
      <circle cx="200" cy="150" r="48" stroke={HILITE} strokeOpacity=".8" />
      <circle cx="200" cy="150" r="34" strokeOpacity=".5" />
      {[
        [143, 103],
        [257, 103],
        [143, 197],
        [257, 197],
      ].map(([cx, cy]) => (
        <g key={`${cx}-${cy}`}>
          <circle cx={cx} cy={cy} r="7" />
          <path d={`M${cx! - 4} ${cy}h8M${cx} ${cy! - 4}v8`} strokeOpacity=".5" />
        </g>
      ))}
      {/* The bolt about to go in, held above its seat. */}
      <path d="M191 26h18l5 8-5 8h-18l-5-8z" stroke={HILITE} strokeOpacity=".9" />
      <path d="M196 42h8v20h-8z" stroke={HILITE} strokeOpacity=".9" />
      <path d="M200 66v14" strokeDasharray="3 4" strokeOpacity=".5" />
    </>
  ),

  "Structural components, finished stock": (
    <>
      <Shelf y={124} r={9} x0={70} gap={22} n={11} o={0.34} />
      <Shelf y={168} r={11} x0={56} gap={26} n={11} o={0.52} />
      <Shelf y={216} r={13} x0={42} gap={30} n={11} o={0.78} />
      {/* Rack uprights. */}
      <path d="M26 104v146M374 104v146" strokeOpacity=".3" />
      <path d="M14 258h372" strokeOpacity=".4" />
    </>
  ),

  "Drive and actuator assembly": (
    <>
      <line x1="0" y1="248" x2="400" y2="248" strokeOpacity=".3" />
      {/* Motor, with cooling fins. */}
      <rect x="34" y="112" width="74" height="76" rx="6" />
      {[124, 138, 152, 166, 180].map((y) => (
        <line key={y} x1="42" y1={y} x2="100" y2={y} strokeOpacity=".35" />
      ))}
      <rect x="108" y="132" width="20" height="36" rx="3" strokeOpacity=".55" />
      {/* Cylinder and rod. */}
      <rect x="128" y="126" width="122" height="48" rx="10" stroke={HILITE} strokeOpacity=".8" />
      <line x1="128" y1="150" x2="250" y2="150" strokeOpacity=".28" />
      <rect x="250" y="142" width="72" height="16" rx="4" />
      {/* Clevis and pin. */}
      <path d="M322 132h22v36h-22" />
      <circle cx="336" cy="150" r="8" stroke={HILITE} strokeOpacity=".85" />
      {/* Mounting bracket down to the bench. */}
      <path d="M170 174l-14 74M212 174l14 74" />
      <path d="M150 248h82" />
    </>
  ),

  "Galvanised sections before dispatch": (
    <>
      {[
        { x: 34, y: 150, o: 0.75 },
        { x: 150, y: 128, o: 0.6 },
        { x: 254, y: 158, o: 0.85 },
      ].map((b) => (
        <g key={b.x} strokeOpacity={b.o}>
          {/* Front face, top and side of one bundle, drawn in isometric. */}
          <path d={`M${b.x} ${b.y}h84v62h-84z`} />
          <path d={`M${b.x} ${b.y}l24-18h84l-24 18`} />
          <path d={`M${b.x + 84} ${b.y}l24-18v62l-24 18`} />
          {/* Strapping. */}
          <path d={`M${b.x + 22} ${b.y}v62M${b.x + 62} ${b.y}v62`} strokeOpacity=".4" />
          {/* Section ends showing through the wrap. */}
          <path
            d={`M${b.x + 8} ${b.y + 14}h68M${b.x + 8} ${b.y + 32}h68M${b.x + 8} ${b.y + 50}h68`}
            strokeOpacity=".22"
          />
        </g>
      ))}
      {/* Pallet. */}
      <path d="M20 236h360M20 236v16h360v-16M60 236v16M200 236v16M340 236v16" strokeOpacity=".4" />
    </>
  ),
};

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/** A slot with no drawn scene falls back to the dashed frame naming what belongs there. */
export function FacilityScene({ name, dimensions }: { name: string; dimensions: string }) {
  // The strip renders every scene twice to make the loop seamless, so the
  // gradient ids must be per-instance or the document carries duplicates.
  const uid = useId().replace(/:/g, "");
  const body = scenes[name];
  if (!body) return <Placeholder label={name} dimensions={dimensions} ratio="4 / 3" />;
  return (
    <Frame id={`${slug(name)}-${uid}`} label={name}>
      {body}
    </Frame>
  );
}
