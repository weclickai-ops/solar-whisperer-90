import { Link } from "@tanstack/react-router";
import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-[0.9375rem] font-medium transition-transform transition-colors duration-[180ms] hover:-translate-y-px";

const variants: Record<Variant, string> = {
  primary: "bg-[var(--blue)] text-white hover:bg-[var(--blue-600)]",
  ghost:
    "border border-[var(--line-2)] text-[var(--text)] hover:border-[var(--line-blue)] hover:text-white",
};

export function GButtonLink({
  to,
  variant = "primary",
  children,
  className,
}: {
  to: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link to={to} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}

export function GButtonAnchor({
  href,
  variant = "primary",
  children,
  className,
  external,
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className={cn(base, variants[variant], className)}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
    >
      {children}
    </a>
  );
}

export function GButton({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      className={cn(base, variants[variant], "disabled:opacity-60", className)}
      {...props}
    >
      {children}
    </button>
  );
}
