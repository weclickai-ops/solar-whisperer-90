/**
 * The tracker-array scene, drawn twice at two scales.
 *
 * `HeroArray` is the five-row scene that sits beside the hero copy. `WideArray`
 * is the same construction opened out to a full-bleed site view: eight rows, a
 * lateral fan so the array does not read as one row repeated, and the back of
 * the field dropping both opacity and stroke detail for atmospheric depth.
 *
 * Both are entirely static — the scene carries no looping animation.
 */

type Row = {
  /** Top edge of the panel band. */
  y: number;
  /** Panel-band width at the bottom edge. */
  w: number;
  /** Band height — the apparent thickness of the row in perspective. */
  h: number;
  /** Centre of the row; drifting this across rows is what fans the array. */
  cx: number;
  o: number;
  /** Lateral shear of the top edge. 0 leaves the row square to the viewer. */
  skew: number;
  /** Cell divisions are dropped on the far rows, which read as haze. */
  detail: boolean;
  piers: 3 | 4;
};

const PIERS = {
  3: [0.16, 0.5, 0.84],
  4: [0.12, 0.373, 0.627, 0.88],
} as const;

const CELLS = 12;

const heroRows: Row[] = [
  { y: 262, w: 300, h: 24, cx: 400, o: 0.42, skew: 0, detail: true, piers: 3 },
  { y: 296, w: 420, h: 32, cx: 400, o: 0.55, skew: 0, detail: true, piers: 3 },
  { y: 344, w: 560, h: 44, cx: 400, o: 0.7, skew: 0, detail: true, piers: 3 },
  { y: 408, w: 730, h: 60, cx: 400, o: 0.85, skew: 0, detail: true, piers: 3 },
  { y: 492, w: 920, h: 80, cx: 400, o: 1, skew: 0, detail: true, piers: 3 },
];

const wideRows: Row[] = [
  { y: 250, w: 480, h: 12, cx: 880, o: 0.26, skew: -14, detail: false, piers: 3 },
  { y: 268, w: 590, h: 16, cx: 862, o: 0.34, skew: -10, detail: false, piers: 3 },
  { y: 292, w: 720, h: 21, cx: 844, o: 0.43, skew: -5, detail: false, piers: 3 },
  { y: 322, w: 880, h: 28, cx: 826, o: 0.54, skew: 2, detail: true, piers: 3 },
  { y: 360, w: 1070, h: 37, cx: 808, o: 0.66, skew: 10, detail: true, piers: 4 },
  { y: 408, w: 1300, h: 48, cx: 790, o: 0.78, skew: 20, detail: true, piers: 4 },
  { y: 470, w: 1570, h: 62, cx: 776, o: 0.9, skew: 32, detail: true, piers: 4 },
  { y: 552, w: 1900, h: 84, cx: 764, o: 1, skew: 46, detail: true, piers: 4 },
];

/** Sky, sun glow, module glass and ground fills, namespaced so both scenes can coexist. */
function SceneDefs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#04060C" />
        <stop offset="55%" stopColor="#061229" />
        <stop offset="100%" stopColor="#04060C" />
      </linearGradient>
      <radialGradient id={`${id}-sun`} cx="50%" cy="50%">
        <stop offset="0%" stopColor="#3FD4FF" stopOpacity=".55" />
        <stop offset="45%" stopColor="#007FFF" stopOpacity=".24" />
        <stop offset="100%" stopColor="#007FFF" stopOpacity="0" />
      </radialGradient>
      <linearGradient id={`${id}-glass`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#0B2444" />
        <stop offset="100%" stopColor="#050B18" />
      </linearGradient>
      <linearGradient id={`${id}-ground`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#050A14" />
        <stop offset="100%" stopColor="#04060C" />
      </linearGradient>
    </defs>
  );
}

/**
 * One 2P tracker row: two module rows split by a centre seam, a torque tube
 * along the lower edge and piers dropping from it.
 */
function TrackerRow({ row, id }: { row: Row; id: string }) {
  const x = row.cx - row.w / 2;
  const inset = row.w * 0.03;
  const base = row.y + row.h;
  const seam = row.y + row.h / 2;
  // Top edge, sheared sideways by `skew` to fan this row against its neighbours.
  const topL = x + inset + row.skew;
  const topR = x + row.w - inset + row.skew;

  return (
    <g opacity={row.o}>
      <polygon
        points={`${topL},${row.y} ${topR},${row.y} ${x + row.w},${base} ${x},${base}`}
        fill={`url(#${id}-glass)`}
        stroke="#3FD4FF"
        strokeOpacity=".38"
        strokeWidth=".8"
      />

      <line
        x1={(topL + x) / 2}
        y1={seam}
        x2={(topR + x + row.w) / 2}
        y2={seam}
        stroke="#3FD4FF"
        strokeOpacity=".34"
        strokeWidth=".8"
      />

      {row.detail &&
        Array.from({ length: CELLS - 1 }, (_, c) => {
          const t = (c + 1) / CELLS;
          return (
            <line
              key={c}
              x1={topL + (topR - topL) * t}
              y1={row.y}
              x2={x + row.w * t}
              y2={base}
              stroke="#7FB4FF"
              strokeOpacity=".14"
              strokeWidth=".6"
            />
          );
        })}

      <line
        x1={x}
        y1={base}
        x2={x + row.w}
        y2={base}
        stroke="#007FFF"
        strokeOpacity=".8"
        strokeWidth={Math.max(1, row.h * 0.05)}
      />

      {PIERS[row.piers].map((p) => (
        <line
          key={p}
          x1={x + row.w * p}
          y1={base}
          x2={x + row.w * p}
          y2={base + row.h * 0.42}
          stroke="#5E98DB"
          strokeOpacity=".5"
          strokeWidth={Math.max(1, row.h * 0.035)}
        />
      ))}
    </g>
  );
}

export function HeroArray() {
  return (
    <svg
      viewBox="0 0 800 620"
      role="img"
      aria-labelledby="hero-array-title"
      className="h-auto w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <title id="hero-array-title">
        A utility-scale solar plant: five rows of two-module-portrait single-axis trackers receding
        toward a low sun on the horizon.
      </title>

      <SceneDefs id="ha" />

      <rect width="800" height="620" fill="url(#ha-sky)" />
      <circle cx="560" cy="250" r="230" fill="url(#ha-sun)" />
      <circle cx="560" cy="250" r="26" fill="#3FD4FF" opacity=".22" />
      <rect y="250" width="800" height="370" fill="url(#ha-ground)" />
      <line x1="0" y1="250" x2="800" y2="250" stroke="#3FD4FF" strokeOpacity=".22" />

      {heroRows.map((row) => (
        <TrackerRow key={row.y} row={row} id="ha" />
      ))}
    </svg>
  );
}

export function WideArray() {
  return (
    <svg
      viewBox="0 0 1600 686"
      role="img"
      aria-labelledby="wide-array-title"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <title id="wide-array-title">
        A wide view across a utility-scale plant: eight fanned rows of single-axis trackers receding
        into haze under a low sun.
      </title>

      <SceneDefs id="wa" />

      <rect width="1600" height="686" fill="url(#wa-sky)" />
      <circle cx="1080" cy="248" r="380" fill="url(#wa-sun)" />
      <circle cx="1080" cy="248" r="34" fill="#3FD4FF" opacity=".2" />
      <rect y="250" width="1600" height="436" fill="url(#wa-ground)" />
      <line x1="0" y1="250" x2="1600" y2="250" stroke="#3FD4FF" strokeOpacity=".18" />

      {wideRows.map((row) => (
        <TrackerRow key={row.y} row={row} id="wa" />
      ))}
    </svg>
  );
}
