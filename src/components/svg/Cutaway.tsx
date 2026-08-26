import { productPage } from "@/data/content";

/** Cross-section: pile foundation, torque tube pivot, module plane, actuator. */
export function Cutaway() {
  const labels = productPage.cutawayLabels;

  return (
    <svg viewBox="0 0 660 460" role="img" aria-labelledby="cutaway-title" className="h-auto w-full">
      <title id="cutaway-title">
        A cross-section of the tracker: a pile driven into the ground, the torque tube pivot
        above it, the tilted module plane, and the single-point linear actuator arm.
      </title>
      <defs>
        <linearGradient id="cw-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0C2A50" />
          <stop offset="100%" stopColor="#060D1C" />
        </linearGradient>
      </defs>

      <line x1="40" y1="370" x2="620" y2="370" stroke="var(--line-2)" />
      <rect x="40" y="370" width="580" height="60" fill="rgba(255,255,255,.02)" />

      {/* module plane, tilted about the pivot */}
      <g transform="rotate(-16 330 200)">
        <rect x="130" y="176" width="400" height="48" fill="url(#cw-glass)" stroke="#3FD4FF" strokeOpacity=".45" />
        {Array.from({ length: 9 }, (_, i) => (
          <line key={i} x1={130 + 40 * (i + 1)} y1="176" x2={130 + 40 * (i + 1)} y2="224" stroke="#3FD4FF" strokeOpacity=".22" />
        ))}
        <line x1="130" y1="200" x2="530" y2="200" stroke="#3FD4FF" strokeOpacity=".3" />
      </g>

      {/* pivot + pile */}
      <circle cx="330" cy="230" r="13" fill="#04060C" stroke="#007FFF" strokeWidth="2.5" />
      <circle cx="330" cy="230" r="4" fill="#3FD4FF" />
      <line x1="330" y1="243" x2="330" y2="370" stroke="#5E98DB" strokeWidth="8" />
      <line x1="330" y1="370" x2="330" y2="430" stroke="#5E98DB" strokeOpacity=".45" strokeWidth="8" strokeDasharray="7 6" />

      {/* actuator */}
      <line x1="330" y1="252" x2="430" y2="320" stroke="#007FFF" strokeWidth="7" strokeLinecap="round" />
      <line x1="430" y1="320" x2="470" y2="370" stroke="#5E98DB" strokeWidth="6" />
      <circle cx="430" cy="320" r="6" fill="#04060C" stroke="#3FD4FF" strokeWidth="1.6" />

      {/* labels */}
      <g fontFamily="var(--font-mono)" fontSize="11" letterSpacing="1.4" fill="#AEB9D6">
        <line x1="120" y1="120" x2="200" y2="150" stroke="var(--line-2)" />
        <text x="40" y="112">{labels.modules.toUpperCase()}</text>

        <line x1="330" y1="230" x2="250" y2="268" stroke="var(--line-2)" />
        <text x="96" y="284">{labels.pivot.toUpperCase()}</text>

        <line x1="470" y1="330" x2="540" y2="300" stroke="var(--line-2)" />
        <text x="500" y="292">{labels.actuator.toUpperCase()}</text>

        <line x1="330" y1="410" x2="410" y2="410" stroke="var(--line-2)" />
        <text x="418" y="414">{labels.foundation.toUpperCase()}</text>
      </g>
    </svg>
  );
}
