/**
 * Utility-scale array: five rows of 2P trackers receding in perspective under a
 * low sun. Entirely static — the hero carries no looping animation.
 */
const rows = [
  { y: 262, w: 300, h: 24, o: 0.42 },
  { y: 296, w: 420, h: 32, o: 0.55 },
  { y: 344, w: 560, h: 44, o: 0.7 },
  { y: 408, w: 730, h: 60, o: 0.85 },
  { y: 492, w: 920, h: 80, o: 1 },
];

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
        A utility-scale solar plant: five rows of two-module-portrait single-axis trackers
        receding toward a low sun on the horizon.
      </title>

      <defs>
        <linearGradient id="ha-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#04060C" />
          <stop offset="55%" stopColor="#061229" />
          <stop offset="100%" stopColor="#04060C" />
        </linearGradient>
        <radialGradient id="ha-sun" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#3FD4FF" stopOpacity=".55" />
          <stop offset="45%" stopColor="#007FFF" stopOpacity=".24" />
          <stop offset="100%" stopColor="#007FFF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ha-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0B2murk" />
          <stop offset="0%" stopColor="#0B2444" />
          <stop offset="100%" stopColor="#050B18" />
        </linearGradient>
        <linearGradient id="ha-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#050A14" />
          <stop offset="100%" stopColor="#04060C" />
        </linearGradient>
      </defs>

      <rect width="800" height="620" fill="url(#ha-sky)" />
      <circle cx="560" cy="250" r="230" fill="url(#ha-sun)" />
      <circle cx="560" cy="250" r="26" fill="#3FD4FF" opacity=".22" />
      <rect y="250" width="800" height="370" fill="url(#ha-ground)" />
      <line x1="0" y1="250" x2="800" y2="250" stroke="#3FD4FF" strokeOpacity=".22" />

      {rows.map((row, i) => {
        const x = 400 - row.w / 2;
        const topInset = row.w * 0.03;
        const seam = row.y + row.h / 2;
        const cells = 12;
        const piers = [0.16, 0.5, 0.84];
        return (
          <g key={i} opacity={row.o}>
            <polygon
              points={`${x + topInset},${row.y} ${x + row.w - topInset},${row.y} ${x + row.w},${row.y + row.h} ${x},${row.y + row.h}`}
              fill="url(#ha-glass)"
              stroke="#3FD4FF"
              strokeOpacity=".38"
              strokeWidth=".8"
            />
            <line
              x1={x + topInset * 0.5}
              y1={seam}
              x2={x + row.w - topInset * 0.5}
              y2={seam}
              stroke="#3FD4FF"
              strokeOpacity=".34"
              strokeWidth=".8"
            />
            {Array.from({ length: cells - 1 }, (_, c) => {
              const t = (c + 1) / cells;
              return (
                <line
                  key={c}
                  x1={x + topInset + (row.w - topInset * 2) * t}
                  y1={row.y}
                  x2={x + row.w * t}
                  y2={row.y + row.h}
                  stroke="#7FB4FF"
                  strokeOpacity=".14"
                  strokeWidth=".6"
                />
              );
            })}
            <line
              x1={x}
              y1={row.y + row.h}
              x2={x + row.w}
              y2={row.y + row.h}
              stroke="#007FFF"
              strokeOpacity=".8"
              strokeWidth={Math.max(1, row.h * 0.05)}
            />
            {piers.map((p) => (
              <line
                key={p}
                x1={x + row.w * p}
                y1={row.y + row.h}
                x2={x + row.w * p}
                y2={row.y + row.h + row.h * 0.42}
                stroke="#5E98DB"
                strokeOpacity=".5"
                strokeWidth={Math.max(1, row.h * 0.035)}
              />
            ))}
          </g>
        );
      })}
    </svg>
  );
}
