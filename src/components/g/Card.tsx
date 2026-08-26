import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Hairline card. The `card` class supplies the pointer-following blue glow,
 * which is driven by the single delegated listener in CursorGlow.
 */
export function GCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "card rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6 transition-[transform,border-color] duration-[220ms] hover:-translate-y-[3px] hover:border-[var(--line-blue)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function GCardTitle({ children }: { children: ReactNode }) {
  return <h3 className="text-[1.0625rem] leading-tight">{children}</h3>;
}

export function GCardBody({ children }: { children: ReactNode }) {
  return <p className="mt-3 text-[0.9375rem]">{children}</p>;
}
