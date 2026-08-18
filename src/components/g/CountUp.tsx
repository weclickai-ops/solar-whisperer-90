import { useEffect, useState } from "react";
import { useInView, usePrefersReducedMotion } from "./Reveal";

/**
 * Animates the numeric parts of a value string (e.g. "15–25%", "180 km/h")
 * from zero when scrolled into view. Shows the final value instantly under
 * prefers-reduced-motion.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [p, setP] = useState(0);

  useEffect(() => {
    if (!inView || reduced) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const k = Math.min(1, (now - start) / 1200);
      setP(1 - Math.pow(1 - k, 3));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced]);

  const shown =
    reduced || p >= 1
      ? value
      : value.replace(/\d+/g, (m) => String(Math.round(Number(m) * p)));

  return (
    <span ref={ref} className={className}>
      {shown}
    </span>
  );
}
