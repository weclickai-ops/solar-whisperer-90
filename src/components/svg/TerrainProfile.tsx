import { useInView } from "@/components/g/Reveal";

const marks = [
  { x: 130, y: 96, label: "10% N–S SLOPE" },
  { x: 330, y: 60, label: "±45°–±60° TILT" },
  { x: 520, y: 118, label: "10% E–W SLOPE" },
  { x: 618, y: 176, label: "0° STOW POSITION" },
];

export function TerrainProfile() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref}>
      <svg
        viewBox="0 0 700 300"
        role="img"
        aria-label="Cross-section of trackers installed along undulating terrain, annotated with slope tolerances, tilt range and stow position"
        className="w-full rounded-[1.75rem] border border-[var(--line)] bg-[var(--bg-elev)]"
      >
        <title>Terrain adaptability cross-section</title>
        <defs>
          <linearGradient id="terrainG" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(0,127,255,0.14)" />
            <stop offset="100%" stopColor="rgba(5,10,22,0)" />
          </linearGradient>
        </defs>

        <path
          d="M0 230 C120 206 180 250 280 228 C380 206 450 252 560 232 C630 220 670 236 700 226 L700 300 L0 300 Z"
          fill="url(#terrainG)"
          stroke="var(--line-2)"
        />

        {[
          { x: 90, y: 222, tilt: -34 },
          { x: 230, y: 236, tilt: -14 },
          { x: 370, y: 214, tilt: 12 },
          { x: 510, y: 240, tilt: 34 },
          { x: 630, y: 230, tilt: 0 },
        ].map((tr, i) => (
          <g key={i} transform={`translate(${tr.x} ${tr.y})`}>
            <line x1="0" y1="0" x2="0" y2="18" stroke="rgba(174,185,214,0.5)" strokeWidth="1.6" />
            <g transform={`rotate(${tr.tilt})`}>
              <rect x="-34" y="-5" width="68" height="8" rx="2" fill="#123A66" stroke="rgba(63,212,255,0.6)" />
            </g>
          </g>
        ))}

        {marks.map((m, i) => (
          <g
            key={m.label}
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(10px)",
              transition: `opacity 600ms ease ${i * 140}ms, transform 600ms cubic-bezier(.16,1,.3,1) ${i * 140}ms`,
            }}
          >
            <line x1={m.x} y1={m.y + 8} x2={m.x} y2={m.y + 46} stroke="rgba(0,127,255,0.5)" strokeDasharray="3 4" />
            <text
              x={m.x}
              y={m.y}
              textAnchor="middle"
              fontFamily="JetBrains Mono, monospace"
              fontSize="10.5"
              className="fill-cyan"
              letterSpacing="1.6"
            >
              {m.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
