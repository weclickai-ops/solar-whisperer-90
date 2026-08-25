/* ============================================================
   src/components/g/Reveal.tsx
   BUILD FIX v2 — replace the file at this exact path.

   The original module exported THREE things. Restoring all of
   them:

     Reveal                    (named + default)
     useInView                 -> CountUp, TerrainProfile
     usePrefersReducedMotion   -> CountUp, HeroScene, SunTrackDiagram

   useInView is deliberately signature-agnostic, because the
   four consumers may call it in different ways:

     const [ref, inView] = useInView();       // tuple
     const { ref, inView } = useInView();     // object
     const inView = useInView(myRef);         // pass your own ref

   All three work.
   ============================================================ */

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
  type RefObject,
} from "react";

/* ------------------------------------------------------------
   usePrefersReducedMotion
   ------------------------------------------------------------ */

export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);

    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);

    // Safari < 14 only has addListener.
    if (mq.addEventListener) {
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    }
    mq.addListener(onChange);
    return () => mq.removeListener(onChange);
  }, []);

  return reduced;
}

/* ------------------------------------------------------------
   useInView
   ------------------------------------------------------------ */

export interface InViewOptions {
  rootMargin?: string;
  threshold?: number | number[];
  /** Fire only the first time. Default true. */
  once?: boolean;
}

export type InViewResult = [RefObject<any>, boolean] & {
  ref: RefObject<any>;
  inView: boolean;
  isInView: boolean;
  entry: IntersectionObserverEntry | null;
};

function isRef(v: unknown): v is RefObject<Element> {
  return !!v && typeof v === "object" && "current" in (v as object);
}

export function useInView(externalRef: RefObject<Element>): boolean;
export function useInView(options?: InViewOptions): InViewResult;
export function useInView(
  arg?: RefObject<Element> | InViewOptions,
): boolean | InViewResult {
  const passedRef = isRef(arg) ? arg : null;
  const opts: InViewOptions = isRef(arg) ? {} : (arg ?? {});

  const internalRef = useRef<any>(null);
  const ref = (passedRef ?? internalRef) as RefObject<any>;

  const [inView, setInView] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  const { rootMargin = "0px 0px -8% 0px", threshold = 0.06, once = true } =
    opts;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          setEntry(e);
          if (e.isIntersecting) {
            setInView(true);
            if (once) io.unobserve(e.target);
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { rootMargin, threshold },
    );

    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rootMargin, JSON.stringify(threshold), once]);

  // Caller passed their own ref -> they just want the boolean.
  if (passedRef) return inView;

  // Otherwise return something that destructures as a tuple OR
  // as an object, so either calling style works.
  const result = [ref, inView] as InViewResult;
  result.ref = ref;
  result.inView = inView;
  result.isInView = inView;
  result.entry = entry;
  return result;
}

/* ------------------------------------------------------------
   Reveal
   ------------------------------------------------------------ */

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
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reduced || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          setShown(true);
          io.unobserve(e.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  const visible = shown || reduced;

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(16px)",
        transition: reduced
          ? undefined
          : "opacity 700ms cubic-bezier(.16,1,.3,1), transform 700ms cubic-bezier(.16,1,.3,1)",
        transitionDelay: reduced ? undefined : `${toMs(delay, i)}ms`,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
