import { cn } from "@/lib/utils";

/** Mono eyebrow in cyan, preceded by a 28px blue rule. */
export function Eyebrow({ children, className }: { children: string; className?: string }) {
  return (
    <p className={cn("flex items-center gap-3", className)} style={{ maxWidth: "none" }}>
      <span aria-hidden="true" className="block h-px w-7 shrink-0 bg-[var(--blue)]" />
      <span
        className="font-mono text-cyan"
        style={{
          fontSize: "0.75rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          fontWeight: 500,
        }}
      >
        {children}
      </span>
    </p>
  );
}
