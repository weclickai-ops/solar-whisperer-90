import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/components/g/Reveal";

const ROWS = [
  { y: 470, scale: 1.0, x: 380 },
  { y: 424, scale: 0.8, x: 392 },
  { y: 388, scale: 0.63, x: 400 },
  { y: 358, scale: 0.5, x: 406 },
  { y: 334, scale: 0.39, x: 412 },
  { y: 314, scale: 0.3, x: 416 },
  { y: 298, scale: 0.23, x: 420 },
];

/** Cinematic utility-scale tracker array, animated on a ~12s sun loop. */
export function HeroScene() {
  const reduced = usePrefersReducedMotion();
  const [t, setT] = useState(0.5);

  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    const start = performance.now();
    const loop = (now: number) => {
      const phase = ((now - start) % 12000) / 12000;
      setT((Math.sin(phase * Math.PI * 2 - Math.PI / 2) + 1) / 2);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  const tilt = Math.round((t - 0.5) * 2 * 52);
  const sunAz = Math.round(90 + t * 180);
  const gain = 15 + Math.round(Math.abs(Math.cos((t - 0.5) * Math.PI)) * 10);
  const sunX = 120 + t * 560;
  const sunY = 210 - Math.sin(t * Math.PI) * 120;

  return (
    <div className="relative">
      <svg
        viewBox="0 0 800 520"
        role="img"
        aria-label="Illustration of a utility-scale solar tracker array following the sun across a dark horizon"
        className="w-full rounded-[1.75rem] border border-[var(--line)] bg-[var(--bg-elev)]"
      >
        <title>Utility-scale 2P tracker array tracking the sun</title>
        <defs>
          <linearGradient id="skyG" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#050A16" />
            <stop offset="55%" stopColor="#061225" />
            <stop offset="100%" stopColor="#04060C" />
          </linearGradient>
          <radialGradient id="sunG">
            <stop offset="0%" stopColor="#DCF3FF" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#3FD4FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#007FFF" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="panelG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0B213C" />
            <stop offset="50%" stopColor="#123A66" />
            <stop offset="100%" stopColor="#071426" />
          </linearGradient>
          <linearGradient id="groundG" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#08101F" />
            <stop offset="100%" stopColor="#04060C" />
          </linearGradient>
          <linearGradient id="hazeG" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#007FFF" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#007FFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        <clipPath id="frameClip">
          <rect x="0" y="0" width="800" height="520" rx="26" />
        </clipPath>
        <g clipPath="url(#frameClip)">
        <rect width="800" height="520" fill="url(#skyG)" />
        <circle cx={sunX} cy={sunY} r="180" fill="url(#sunG)" />
        <circle cx={sunX} cy={sunY} r="13" fill="#EAF8FF" opacity="0.9" />

        {/* horizon haze */}
        <rect x="0" y="196" width="800" height="90" fill="url(#hazeG)" />
        <line x1="0" y1="248" x2="800" y2="248" stroke="rgba(63,212,255,0.28)" strokeWidth="1" />

        {/* ground */}
        <path d="M0 248 L800 248 L800 520 L0 520 Z" fill="url(#groundG)" />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <line
            key={i}
            x1={400 - (i - 3) * 40}
            y1="250"
            x2={400 - (i - 3) * 260}
            y2="520"
            stroke="rgba(255,255,255,0.035)"
            strokeWidth="1"
          />
        ))}

        {ROWS.slice()
          .reverse()
          .map((row, idx) => {
            const width = 560 * row.scale;
            const opacity = 0.35 + row.scale * 0.65;
            return (
              <g key={idx} opacity={opacity} transform={`translate(${row.x} ${row.y})`}>
                {/* piles */}
                {[-1, -0.5, 0, 0.5, 1].map((p) => (
                  <line
                    key={p}
                    x1={p * width * 0.36}
                    y1={0}
                    x2={p * width * 0.36}
                    y2={30 * row.scale + 8}
                    stroke="rgba(174,185,214,0.45)"
                    strokeWidth={1.2}
                  />
                ))}
                {/* torque tube */}
                <line
                  x1={-width / 2}
                  y1={0}
                  x2={width / 2}
                  y2={0}
                  stroke="rgba(174,185,214,0.5)"
                  strokeWidth={1.2}
                />
                <g
                  transform={`rotate(${tilt * 0.22}) scaleY(${Math.max(0.28, Math.cos((tilt * Math.PI) / 180))})`}
                >
                  <rect
                    x={-width / 2}
                    y={-11 * row.scale - 4}
                    width={width}
                    height={11 * row.scale + 3}
                    fill="url(#panelG)"
                    stroke="rgba(63,212,255,0.35)"
                    strokeWidth="0.8"
                  />
                  <rect
                    x={-width / 2}
                    y={2}
                    width={width}
                    height={11 * row.scale + 3}
                    fill="url(#panelG)"
                    stroke="rgba(0,127,255,0.35)"
                    strokeWidth="0.8"
                  />
                </g>
              </g>
            );
          })}
        </g>
      </svg>

      <div className="pointer-events-none absolute inset-0 flex flex-col items-start justify-start gap-2 p-4 sm:p-6">
        <Chip label="Sun Position" value={`${sunAz}°`} />
        <Chip label="Tracking Angle" value={`${tilt > 0 ? "+" : ""}${tilt}°`} />
        <Chip label="Energy Output" value={`+${gain}%`} />
      </div>
    </div>
  );
}

function Chip({ label, value }: { label: string; value: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line-blue)] bg-[rgba(4,6,12,0.72)] px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-[var(--text-2)] backdrop-blur-md">
      {label}
      <span aria-hidden="true" className="text-[var(--text-3)]">
        ·
      </span>
      <span className="text-cyan">{value}</span>
    </span>
  );
}
