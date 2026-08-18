import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "ghost";

const base =
  "inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full px-6 text-sm font-medium transition-[background-color,border-color,color,transform] duration-200 ease-out";

const variants: Record<Variant, string> = {
  primary: "bg-blue text-white hover:bg-blue-600 active:translate-y-px",
  ghost:
    "border border-[var(--line-2)] bg-[var(--surface)] text-text hover:border-[var(--line-blue)] hover:text-white active:translate-y-px",
};

export function GButton({
  variant = "primary",
  className,
  children,
  ...props
}: ComponentProps<"button"> & { variant?: Variant; children: ReactNode }) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function GLinkButton({
  to,
  variant = "primary",
  className,
  children,
}: {
  to: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link to={to} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
