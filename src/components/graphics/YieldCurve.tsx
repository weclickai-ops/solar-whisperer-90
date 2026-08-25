/* ============================================================
   src/components/graphics/YieldCurve.tsx  —  FILE 5b / 12
   New file. Daily generation curve: fixed-tilt bell against
   the tracker plateau, with the delta shaded. This is what
   makes the 15-25% claim legible instead of asserted.
   ============================================================ */

export default function YieldCurve() {
  return (
    <svg
      viewBox="0 0 640 250"
      className="block w-full"
      role="img"
      aria-label="Daily generation curve comparing fixed-tilt and tracked arrays"
    >
      <defs>
        <linearGradient id="yc-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1479FF" stopOpacity=".34" />
          <stop offset="1" stopColor="#1479FF" stopOpacity="0" />
        </linearGradient>
      </defs>

      <g stroke="#ffffff" strokeOpacity=".07">
        <line x1="40" y1="60" x2="610" y2="60" />
        <line x1="40" y1="120" x2="610" y2="120" />
        <line x1="40" y1="180" x2="610" y2="180" />
      </g>

      <path
        d="M40,210 C92,210 112,80 162,72 L478,72 C528,80 548,210 600,210 Z"
        fill="url(#yc-fill)"
      />
      <path
        d="M40,210 C92,210 112,80 162,72 L478,72 C528,80 548,210 600,210"
        fill="none"
        stroke="#5CC8FF"
        strokeWidth="2.5"
      />
      <path
        d="M40,210 C168,210 244,106 320,106 C396,106 472,210 600,210"
        fill="none"
        stroke="#8A96A8"
        strokeWidth="1.8"
        strokeDasharray="5 5"
      />
      <line x1="40" y1="210" x2="610" y2="210" stroke="#ffffff" strokeOpacity=".18" />

      <g fill="#8A96A8" fontFamily="Archivo, sans-serif" fontSize="11" letterSpacing="1.4">
        <text x="40" y="232">MORNING</text>
        <text x="292" y="232">MIDDAY</text>
        <text x="536" y="232">AFTERNOON</text>
      </g>
      <g fontFamily="Archivo, sans-serif" fontSize="11.5" letterSpacing="1.2">
        <text x="180" y="52" fill="#5CC8FF">GLARENERGY TRACKER</text>
        <text x="330" y="150" fill="#8A96A8">FIXED-TILT</text>
      </g>
    </svg>
  );
}
