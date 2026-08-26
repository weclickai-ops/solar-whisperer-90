import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Scroll reveal: opacity 0→1 and translateY(16px)→0 over 700ms, fired once.
 * Stagger is capped at five steps of 60ms so a long grid never crawls in.
 * Under prefers-reduced-motion the CSS renders the final state immediately.
 */
export function Reveal({
  children,
  as: Tag = "div",
  index = 0,
  className,
}: {
  children: ReactNode;
  as?: ElementType;
  index?: number;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ "--reveal-delay": `${Math.min(index, 5) * 60}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
