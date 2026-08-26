import { useEffect, useRef } from "react";

/**
 * Two desktop-only pointer effects, mounted once in the root layout.
 *
 * 1. One delegated pointermove listener writes --mx/--my on the nearest
 *    .card/.step/.sheet, so the clipped blue highlight inside those elements
 *    follows the cursor without a listener per element.
 * 2. A 340px page-wide glow eases toward the cursor (lerp 0.12) behind all
 *    content. Its rAF loop stops itself once the glow has caught up.
 */
export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches) return;

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const current = { ...target };
    let frame = 0;
    let running = false;

    const paint = () => {
      const el = glowRef.current;
      if (el) el.style.transform = `translate3d(${current.x - 170}px, ${current.y - 170}px, 0)`;
    };

    const tick = () => {
      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;
      paint();
      if (Math.abs(target.x - current.x) < 0.5 && Math.abs(target.y - current.y) < 0.5) {
        running = false;
        return;
      }
      frame = requestAnimationFrame(tick);
    };

    const onMove = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;

      const host = (event.target as Element | null)?.closest?.(".card, .step, .sheet") as
        | HTMLElement
        | null;
      if (host) {
        const rect = host.getBoundingClientRect();
        host.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        host.style.setProperty("--my", `${event.clientY - rect.top}px`);
      }

      if (calm.matches) {
        current.x = target.x;
        current.y = target.y;
        paint();
        return;
      }
      if (!running) {
        running = true;
        frame = requestAnimationFrame(tick);
      }
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    paint();
    return () => {
      document.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[340px] w-[340px] rounded-full md:block"
      style={{
        background: "radial-gradient(circle, rgba(0,127,255,.07), transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}
