import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Hairline card with a cursor-following blue glow on hover. */
export function GCard({
  children,
  className,
  interactive = true,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  return (
    <div
      ref={ref}
      onMouseMove={
        interactive
          ? (e) => {
              const r = ref.current?.getBoundingClientRect();
              if (!r) return;
              setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
            }
          : undefined
      }
      onMouseLeave={interactive ? () => setPos(null) : undefined}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 transition-[border-color,transform] duration-200 ease-out",
        interactive && "hover:-translate-y-[3px] hover:border-[var(--line-blue)]",
        className,
      )}
    >
      {pos ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-100 transition-opacity duration-200"
          style={{
            background: `radial-gradient(220px circle at ${pos.x}px ${pos.y}px, rgba(0,127,255,0.14), transparent 70%)`,
          }}
        />
      ) : null}
      <div className="relative">{children}</div>
    </div>
  );
}
