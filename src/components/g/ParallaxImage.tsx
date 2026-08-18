import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Full-bleed cinematic photo band with a slow scale/parallax on scroll and
 * gradient fades top and bottom so it melts into the page background.
 * Motion is disabled under prefers-reduced-motion.
 */
export function ParallaxImage({
  src,
  alt,
  className,
  children,
}: {
  src: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const frame = frameRef.current;
      const img = imgRef.current;
      if (!frame || !img) return;
      const rect = frame.getBoundingClientRect();
      const progress = (rect.top + rect.height / 2) / window.innerHeight - 0.5;
      const shift = Math.max(-1, Math.min(1, progress)) * -40;
      const scale = 1.12 + Math.max(-1, Math.min(1, progress)) * 0.04;
      img.style.transform = `translate3d(0, ${shift}px, 0) scale(${scale})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={frameRef}
      className={cn("relative isolate w-full overflow-hidden", className)}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={2400}
        height={1600}
        loading="lazy"
        decoding="async"
        className="plate-media absolute inset-0 h-full w-full scale-[1.12] object-cover will-change-transform"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mix-blend-overlay"
        style={{ background: "linear-gradient(rgba(0,127,255,0.14), rgba(4,6,12,0.55))" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, var(--bg) 0%, rgba(4,6,12,0.25) 28%, rgba(4,6,12,0.45) 70%, var(--bg) 100%)",
        }}
      />
      {children}
    </div>
  );
}