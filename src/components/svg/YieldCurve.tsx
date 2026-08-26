import { useEffect, useRef, useState } from "react";

/**
 * Fixed-tilt versus tracker generation across a day. The delta between the two
 * curves is the additional yield. Strokes draw once on scroll-in; under
 * prefers-reduced-motion the final state renders immediately.
 */
const fixedPath = "M60 300 C 200 300, 250 120, 330 120 C 410 120, 460 300, 600 300";
const trackPath = "M60 300 C 120 300, 130 70, 330 70 C 530 70, 540 300, 600 300";
const deltaPath = `${trackPath} L 600 300 C 460 300, 410 120, 330 120 C 250 120, 200 300, 60 300 Z`;

export function YieldCurve() {
  const ref = useRef<SVGSVGElement | null>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setDrawn(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setDrawn(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const draw = (length: number) => ({
    strokeDasharray: length,
    strokeDashoffset: drawn ? 0 : length,
    transition: "stroke-dashoffset 1400ms cubic-bezier(.16,1,.3,1)",
  });

  return (
    <svg
      ref={ref}
      viewBox="0 0 660 360"
      role="img"
      aria-labelledby="yield-curve-title"
      className="h-auto w-full"
    >
      <title id="yield-curve-title">
        A generation curve across one day. The fixed-tilt array produces a narrow peak at
        solar noon, while the tracker curve is broader from morning through afternoon; the
        shaded area between them is the additional energy captured.
      </title>

      <line x1="60" y1="300" x2="620" y2="300" stroke="var(--line-2)" />
      <line x1="60" y1="40" x2="60" y2="300" stroke="var(--line-2)" />

      <path d={deltaPath} fill="rgba(0,127,255,.16)" opacity={drawn ? 1 : 0} style={{ transition: "opacity 700ms 500ms" }} />
      <path d={fixedPath} fill="none" stroke="#7D8AA8" strokeWidth="2" strokeDasharray="6 6" opacity=".9" />
      <path d={trackPath} fill="none" stroke="#3FD4FF" strokeWidth="2.5" style={draw(900)} />

      <text x="60" y="330" fill="#7D8AA8" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="1.6">
        MORNING
      </text>
      <text x="300" y="330" fill="#7D8AA8" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="1.6">
        MIDDAY
      </text>
      <text x="530" y="330" fill="#7D8AA8" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="1.6">
        AFTERNOON
      </text>
      <text x="360" y="60" fill="#3FD4FF" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="1.6">
        TRACKER
      </text>
      <text x="360" y="150" fill="#AEB9D6" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="1.6">
        FIXED TILT
      </text>
    </svg>
  );
}
