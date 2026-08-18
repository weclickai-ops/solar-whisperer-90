import { productHotspots } from "@/data/content";
import { cn } from "@/lib/utils";

export function ProductCutaway({
  active,
  onSelect,
}: {
  active: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="relative">
      <svg
        viewBox="0 0 640 460"
        role="img"
        aria-label="Side view cross-section of the 2P-HSAT tracker showing torque tube, dual-row modules, linear actuator and pile foundation"
        className="w-full rounded-[1.75rem] border border-[var(--line)] bg-[var(--bg-elev)]"
      >
        <title>2P-HSAT tracker cross-section</title>
        <defs>
          <linearGradient id="modG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0C2340" />
            <stop offset="55%" stopColor="#164A80" />
            <stop offset="100%" stopColor="#08182C" />
          </linearGradient>
          <radialGradient id="glowG">
            <stop offset="0%" stopColor="rgba(0,127,255,0.22)" />
            <stop offset="100%" stopColor="rgba(0,127,255,0)" />
          </radialGradient>
        </defs>

        <circle cx="320" cy="200" r="230" fill="url(#glowG)" />

        {/* modules — dual row */}
        <g transform="translate(320 190) rotate(-16)">
          <rect x="-250" y="-16" width="240" height="16" rx="3" fill="url(#modG)" stroke="rgba(63,212,255,0.55)" />
          <rect x="10" y="-16" width="240" height="16" rx="3" fill="url(#modG)" stroke="rgba(63,212,255,0.55)" />
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1={-250 + i * 42}
              y1={-16}
              x2={-250 + i * 42}
              y2={0}
              stroke="rgba(255,255,255,0.08)"
            />
          ))}
          {/* torque tube */}
          <rect x="-6" y="-6" width="12" height="12" rx="2" fill="#0B1728" stroke="rgba(174,185,214,0.7)" />
        </g>

        {/* actuator */}
        <g stroke="rgba(174,185,214,0.7)" strokeWidth="2" fill="none">
          <line x1="320" y1="200" x2="352" y2="286" />
          <rect x="330" y="252" width="44" height="16" rx="3" transform="rotate(20 352 260)" fill="#0B1728" />
          {/* controller box */}
          <rect x="392" y="320" width="52" height="34" rx="5" fill="#0B1728" />
        </g>
        <text x="418" y="342" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" className="fill-cyan">CTRL</text>

        {/* piles + ground */}
        <line x1="40" y1="392" x2="600" y2="392" stroke="var(--line-2)" />
        {[200, 320, 440].map((x) => (
          <line key={x} x1={x} y1={x === 320 ? 200 : 300} x2={x} y2="418" stroke="rgba(174,185,214,0.55)" strokeWidth="3" />
        ))}
        <g stroke="rgba(255,255,255,0.06)">
          {Array.from({ length: 14 }).map((_, i) => (
            <line key={i} x1={40 + i * 42} y1="392" x2={20 + i * 42} y2="420" />
          ))}
        </g>
      </svg>

      {productHotspots.map((h) => {
        const isActive = h.id === active;
        return (
          <button
            key={h.id}
            type="button"
            aria-pressed={isActive}
            aria-label={`${h.number} ${h.title}`}
            onClick={() => onSelect(h.id)}
            className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            style={{ left: `${h.x}%`, top: `${h.y}%` }}
          >
            <span className="relative flex h-11 w-11 items-center justify-center">
              <span
                aria-hidden="true"
                className="absolute h-7 w-7 rounded-full border border-[var(--line-blue)]"
                style={{ animation: "g-ping-ring 2.4s cubic-bezier(0,0,.2,1) infinite" }}
              />
              <span
                className={cn(
                  "relative flex h-7 w-7 items-center justify-center rounded-full border font-mono text-[0.65rem] transition-colors duration-200",
                  isActive
                    ? "border-cyan bg-blue text-white"
                    : "border-[var(--line-2)] bg-[rgba(4,6,12,0.85)] text-[var(--text-2)]",
                )}
              >
                {h.number}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
