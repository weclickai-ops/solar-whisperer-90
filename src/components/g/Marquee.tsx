import { useState } from "react";
import { marqueeItems } from "@/data/content";

export function Marquee() {
  const [paused, setPaused] = useState(false);
  const track = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div
      className="overflow-hidden border-y border-[var(--line)] py-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      tabIndex={0}
      aria-label="Key specifications: 15 to 25 percent more yield, 180 km/h wind rated, plus or minus 2 degree tracking, bifacial ready, Zigbee mesh, backtracking"
    >
      <div
        className="flex w-max gap-8 whitespace-nowrap font-mono text-xs uppercase tracking-[0.22em] text-[var(--text-2)]"
        style={{
          animation: "g-marquee 38s linear infinite",
          animationPlayState: paused ? "paused" : "running",
        }}
        aria-hidden="true"
      >
        {track.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            {item}
            <span className="text-blue">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
