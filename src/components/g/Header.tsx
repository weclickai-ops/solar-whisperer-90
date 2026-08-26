import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Logo } from "./Logo";
import { nav } from "@/data/content";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="sticky top-0 z-50 border-b border-[var(--line)]"
      style={{ background: "rgba(4,6,12,.72)", backdropFilter: "blur(20px)" }}
    >
      <div className="container-g flex h-20 items-center justify-between gap-6">
        <Link to="/" aria-label="Glarenergy — home" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="text-[0.9375rem] text-[var(--text-2)] transition-colors hover:text-[var(--text)]"
              activeProps={{ style: { color: "var(--blue)" } }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center rounded-full bg-[var(--blue)] px-5 text-[0.9375rem] font-medium text-white transition-transform duration-[180ms] hover:-translate-y-px hover:bg-[var(--blue-600)]"
          >
            Talk to Our Team →
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--line-2)] lg:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" role="img" aria-hidden="true">
            {open ? (
              <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.5" />
            ) : (
              <path d="M2 5h14M2 12h14" stroke="currentColor" strokeWidth="1.5" />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className={cn(
          "border-t border-[var(--line)] bg-[var(--bg)] lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav aria-label="Mobile" className="container-g flex flex-col py-4">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="flex min-h-[44px] items-center border-b border-[var(--line)] text-[1rem] text-[var(--text-2)]"
              activeProps={{ style: { color: "var(--blue)" } }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-5 inline-flex min-h-[46px] items-center justify-center rounded-full bg-[var(--blue)] px-5 font-medium text-white"
          >
            Talk to Our Team →
          </Link>
        </nav>
      </div>
    </header>
  );
}
