/* ============================================================
   src/components/g/Reveal.tsx
   BUILD FIX — replace the file at this exact path.

   Your 21 build errors were all the same thing: 21 route files
   do `import { Reveal } from "@/components/g/Reveal"` — a NAMED
   import — and the version I gave you only had a default export.

   This file exports BOTH, so every existing import keeps working
   and nothing else in the repo has to change.

   It is also self-contained: the styles are inline, so it does
   not depend on a `.rv` class existing in index.css.
   ============================================================ */

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Stagger index — multiplied by 55ms. Capped at 5. */
  i?: number;
  /** Delay. Accepts seconds (0.24) or milliseconds (240). */
  delay?: number;
  as?: ElementType;
}

function toMs(delay?: number, i?: number): number {
  if (typeof delay === "number") {
    // Values under 20 are almost certainly seconds, not ms.
    return delay < 20 ? delay * 1000 : delay;
  }
  return Math.min(i ?? 0, 5) * 55;
}

export function Reveal({
  children,
  className = "",
  style,
  i,
  delay,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setShown(true);
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const ms = toMs(delay, i);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(16px)",
        transition:
          "opacity 700ms cubic-bezier(.16,1,.3,1), transform 700ms cubic-bezier(.16,1,.3,1)",
        transitionDelay: `${ms}ms`,
        willChange: shown ? undefined : "opacity, transform",
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
