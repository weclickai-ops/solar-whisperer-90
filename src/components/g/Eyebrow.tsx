import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span aria-hidden="true" className="h-px w-7 shrink-0 bg-blue" />
      <span className="font-mono text-xs uppercase tracking-[0.22em] text-cyan">{children}</span>
    </span>
  );
}
