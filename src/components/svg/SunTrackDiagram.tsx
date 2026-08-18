import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/components/g/Reveal";

const STATES = [
  { id: "morning", label: "Morning", sunX: 130, sunY: 150, tilt: -45, capture: 0.42 },
  { id: "midday", label: "Midday", sunX: 350, sunY: 70, tilt: 0, capture: 0.92 },
  { id: "afternoon", label: "Afternoon", sunX: 570, sunY: 150, tilt: 45, capture: 0.44 },
];

export function SunTrackDiagram() {
  const reduced = usePrefersReducedMotion();
  const [i, setI] = useState(1);
  const [interacted, setInteracted] = useState(false);

  useEffect(() => {
    if (interacted || reduced) return;
    const id = setInterval(() => setI((v) => (v + 1) % STATES.length), 3500);
    return () => clearInterval(id);
  }, [interacted, reduced]);

  const s = STATES[i];
  const fixedCapture = i === 1 ? 0.62 : 0.3;

  return (
    <div className="flex flex-col gap-6">
      <div
        role="tablist"
        aria-label="Time of day"
        className="inline-flex w-fit rounded-full border border-[var(--line)] bg-[var(--surface)] p-1"
      >
        {STATES.map((st, idx) => (
          <button
            key={st.id}
            role="tab"
            type="button"
            aria-selected={i === idx}
            onClick={() => {
              setI(idx);
              setInteracted(true);
            }}
            className={cn(
              "min-h-11 cursor-pointer rounded-full px-5 font-mono text-xs uppercase tracking-[0.16em] transition-colors duration-200",
              i === idx ? "bg-blue text-white" : "text-[var(--text-3)] hover:text-text",
            )}
          >
            {st.label}
          </button>
        ))}
      </div>

      <svg
        viewBox="0 0 700 330"
        role="img"
        aria-label={`Diagram comparing a fixed-tilt panel with a Glarenergy tracker at ${s.label.toLowerCase()}`}
        className="w-full rounded-[1.75rem] border border-[var(--line)] bg-[var(--bg-elev)]"
      >
        <title>Fixed-tilt versus tracking panel at {s.label.toLowerCase()}</title>
        <defs>
          <radialGradient id="sun2">
            <stop offset="0%" stopColor="#EAF8FF" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#3FD4FF" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#007FFF" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g style={{ transition: reduced ? "none" : "transform 700ms cubic-bezier(.16,1,.3,1)" }}>
          <circle cx={s.sunX} cy={s.sunY} r="60" fill="url(#sun2)" />
          <circle cx={s.sunX} cy={s.sunY} r="12" fill="#EAF8FF" />
        </g>

        {/* rays */}
        {[200, 500].map((px) => (
          <line
            key={px}
            x1={s.sunX}
            y1={s.sunY + 12}
            x2={px}
            y2={244}
            stroke="rgba(63,212,255,0.35)"
            strokeWidth="1"
            strokeDasharray="5 6"
          />
        ))}

        <line x1="40" y1="260" x2="660" y2="260" stroke="var(--line-2)" strokeWidth="1" />

        {/* fixed tilt */}
        <g transform="translate(200 244)">
          <line x1="0" y1="0" x2="0" y2="16" stroke="rgba(174,185,214,0.5)" strokeWidth="2" />
          <g transform="rotate(-20)">
            <rect x="-58" y="-6" width="116" height="10" rx="2" fill="#12253F" stroke="rgba(174,185,214,0.5)" />
          </g>
        </g>
        <text x="200" y="298" textAnchor="middle" className="fill-[var(--text-3)]" fontSize="11" fontFamily="JetBrains Mono, monospace">FIXED-TILT</text>

        {/* tracker */}
        <g transform="translate(500 244)">
          <line x1="0" y1="0" x2="0" y2="16" stroke="rgba(63,212,255,0.7)" strokeWidth="2" />
          <g
            transform={`rotate(${s.tilt})`}
            style={{ transition: reduced ? "none" : "transform 700ms cubic-bezier(.16,1,.3,1)" }}
          >
            <rect x="-58" y="-6" width="116" height="10" rx="2" fill="#123A66" stroke="rgba(63,212,255,0.8)" />
          </g>
        </g>
        <text x="500" y="298" textAnchor="middle" className="fill-cyan" fontSize="11" fontFamily="JetBrains Mono, monospace">GLARENERGY TRACKER</text>

        {/* capture bars */}
        <rect x="142" y="308" width="116" height="6" rx="3" fill="rgba(255,255,255,0.08)" />
        <rect
          x="142"
          y="308"
          width={116 * fixedCapture}
          height="6"
          rx="3"
          fill="rgba(174,185,214,0.6)"
          style={{ transition: reduced ? "none" : "width 700ms cubic-bezier(.16,1,.3,1)" }}
        />
        <rect x="442" y="308" width="116" height="6" rx="3" fill="rgba(255,255,255,0.08)" />
        <rect
          x="442"
          y="308"
          width={116 * s.capture}
          height="6"
          rx="3"
          fill="#007FFF"
          style={{ transition: reduced ? "none" : "width 700ms cubic-bezier(.16,1,.3,1)" }}
        />
      </svg>

      <p className="lede">
        Fixed-tilt panels stay in one position all day. Trackers continuously adjust their
        orientation toward the sun.
      </p>
    </div>
  );
}
