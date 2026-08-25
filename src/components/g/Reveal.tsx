/* ============================================================
   src/components/Reveal.tsx  —  FILE 3 / 12
   New file. Drives every scroll-in animation on the site.

   Usage:
     <Reveal>...</Reveal>              plain
     <Reveal i={2}>...</Reveal>        staggered (2 x 55ms)
     <Reveal as="section" className="blk">...</Reveal>
   ============================================================ */

import {
  useEffect,
  useRef,
  type ElementType,
  type ReactNode,
} from "react";

/* ------------------------------------------------------------
   One shared observer for the whole app rather than one per
   element — cheaper, and it keeps timing consistent between
   sections that enter the viewport together.
   ------------------------------------------------------------ */

type Cb = () => void;

let observer: IntersectionObserver | null = null;
const callbacks = new Map<Element, Cb>();

function getObserver(): IntersectionObserver | null {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    return null;
  }
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const cb = callbacks.get(entry.target);
          if (cb) cb();
          callbacks.delete(entry.target);
          observer?.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
    );
  }
  return observer;
}

/* ------------------------------------------------------------ */

interface RevealProps {
  children: ReactNode;
  /** Stagger index. Capped at 5 so long grids never crawl. */
  i?: number;
  className?: string;
  as?: ElementType;
}

export default function Reveal({
  children,
  i = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // No motion wanted, or no observer support: show it immediately.
    const io = getObserver();
    if (reduced || !io) {
      el.classList.add("in");
      return;
    }

    el.style.transitionDelay = `${Math.min(i, 5) * 55}ms`;
    callbacks.set(el, () => el.classList.add("in"));
    io.observe(el);

    return () => {
      callbacks.delete(el);
      io.unobserve(el);
    };
  }, [i]);

  return (
    <Tag ref={ref} className={`rv ${className}`.trim()}>
      {children}
    </Tag>
  );
}
