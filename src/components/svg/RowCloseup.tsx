/** Close view of one 2P row: twelve modules across, split into two portrait rows. */
export function RowCloseup() {
  const modules = 12;
  const x0 = 40;
  const width = 720;
  const y0 = 70;
  const height = 210;
  const seam = y0 + height / 2;
  const mw = width / modules;

  return (
    <svg
      viewBox="0 0 800 380"
      role="img"
      aria-labelledby="row-closeup-title"
      className="h-auto w-full"
    >
      <title id="row-closeup-title">
        A close view of a single two-module-portrait tracker row, showing the torque tube,
        piers, module cell divisions and the centre seam between the two module rows.
      </title>
      <defs>
        <linearGradient id="rc-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0C2A50" />
          <stop offset="100%" stopColor="#060D1C" />
        </linearGradient>
        <linearGradient id="rc-sheen" x1="0" y1="0" x2="1" y2="0.6">
          <stop offset="0%" stopColor="#3FD4FF" stopOpacity="0" />
          <stop offset="45%" stopColor="#3FD4FF" stopOpacity=".13" />
          <stop offset="100%" stopColor="#3FD4FF" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="800" height="380" fill="#04060C" />
      <rect x={x0} y={y0} width={width} height={height} fill="url(#rc-glass)" stroke="#3FD4FF" strokeOpacity=".4" />
      <rect x={x0} y={y0} width={width} height={height} fill="url(#rc-sheen)" />
      <line x1={x0} y1={seam} x2={x0 + width} y2={seam} stroke="#3FD4FF" strokeOpacity=".45" strokeWidth="1.4" />

      {Array.from({ length: modules - 1 }, (_, i) => (
        <line
          key={`m${i}`}
          x1={x0 + mw * (i + 1)}
          y1={y0}
          x2={x0 + mw * (i + 1)}
          y2={y0 + height}
          stroke="#3FD4FF"
          strokeOpacity=".3"
        />
      ))}
      {Array.from({ length: modules * 2 }, (_, i) => {
        const col = i % modules;
        const rowIndex = Math.floor(i / modules);
        const top = rowIndex === 0 ? y0 : seam;
        return Array.from({ length: 3 }, (_, c) => (
          <line
            key={`c${i}-${c}`}
            x1={x0 + col * mw + (mw / 4) * (c + 1)}
            y1={top}
            x2={x0 + col * mw + (mw / 4) * (c + 1)}
            y2={top + height / 2}
            stroke="#7FB4FF"
            strokeOpacity=".1"
            strokeWidth=".7"
          />
        ));
      })}

      <line x1={x0 - 12} y1={y0 + height} x2={x0 + width + 12} y2={y0 + height} stroke="#007FFF" strokeWidth="7" />
      {[0.12, 0.38, 0.62, 0.88].map((p) => (
        <g key={p}>
          <line
            x1={x0 + width * p}
            y1={y0 + height}
            x2={x0 + width * p}
            y2={330}
            stroke="#5E98DB"
            strokeOpacity=".6"
            strokeWidth="5"
          />
          <line x1={x0 + width * p - 14} y1={330} x2={x0 + width * p + 14} y2={330} stroke="#5E98DB" strokeOpacity=".4" strokeWidth="2" />
        </g>
      ))}
    </svg>
  );
}
