import { useInView, usePrefersReducedMotion } from "@/components/g/Reveal";

const FIXED = "M60,230 C160,215 220,120 350,112 C480,120 540,215 640,230";
const TRACK = "M60,225 C120,120 200,64 350,60 C500,64 580,120 640,225";
const AREA = `${TRACK} L640,230 C540,215 480,120 350,112 C220,120 160,215 60,230 Z`;

export function EnergyCurve() {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>();
  const draw = reduced || inView;

  return (
    <div ref={ref}>
      <svg
        viewBox="0 0 700 300"
        role="img"
        aria-label="Line chart comparing daily generation of a fixed-tilt system with a Glarenergy tracker, showing 15 to 25 percent higher energy yield"
        className="w-full rounded-[1.75rem] border border-[var(--line)] bg-[var(--bg-elev)]"
      >
        <title>Daily generation curve: fixed-tilt versus tracker</title>
        <defs>
          <linearGradient id="deltaG" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#007FFF" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#007FFF" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        <line x1="60" y1="230" x2="640" y2="230" stroke="var(--line-2)" />
        <line x1="60" y1="40" x2="60" y2="230" stroke="var(--line)" />

        <path d={AREA} fill="url(#deltaG)" opacity={draw ? 1 : 0} style={{ transition: "opacity 900ms ease 500ms" }} />

        <path
          d={FIXED}
          fill="none"
          stroke="rgba(174,185,214,0.65)"
          strokeWidth="2"
          strokeDasharray="1200"
          strokeDashoffset={draw ? 0 : 1200}
          style={{ transition: reduced ? "none" : "stroke-dashoffset 1400ms cubic-bezier(.16,1,.3,1)" }}
        />
        <path
          d={TRACK}
          fill="none"
          stroke="#3FD4FF"
          strokeWidth="2.4"
          strokeDasharray="1200"
          strokeDashoffset={draw ? 0 : 1200}
          style={{ transition: reduced ? "none" : "stroke-dashoffset 1400ms cubic-bezier(.16,1,.3,1) 180ms" }}
        />

        <g fontFamily="JetBrains Mono, monospace" fontSize="11" className="uppercase">
          <text x="60" y="254" className="fill-[var(--text-3)]">Morning</text>
          <text x="350" y="254" textAnchor="middle" className="fill-[var(--text-3)]">Midday</text>
          <text x="640" y="254" textAnchor="end" className="fill-[var(--text-3)]">Afternoon</text>
          <text x="350" y="96" textAnchor="middle" className="fill-cyan">15–25% higher energy yield</text>
          <text x="150" y="212" className="fill-[var(--text-3)]">Fixed-tilt</text>
          <text x="470" y="86" className="fill-[var(--text-2)]">Glarenergy tracker</text>
        </g>
      </svg>
    </div>
  );
}
