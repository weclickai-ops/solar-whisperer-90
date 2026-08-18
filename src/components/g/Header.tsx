import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { nav } from "@/data/content";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-20 transition-[background-color,backdrop-filter,border-color] duration-300",
        scrolled
          ? "border-b border-[var(--line)] bg-[rgba(4,6,12,0.72)] backdrop-blur-[20px]"
          : "border-b border-transparent bg-linear-to-b from-[rgba(4,6,12,0.75)] to-transparent",
      )}
    >
      <div className="container-g flex h-20 items-center justify-between gap-4">
        <Link to="/" aria-label="Glarenergy home" className="cursor-pointer">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="cursor-pointer text-sm text-[var(--text-2)] transition-colors duration-200 hover:text-text"
              activeProps={{ className: "text-white font-medium" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden min-h-11 cursor-pointer items-center gap-2 rounded-full bg-blue px-5 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-600 sm:inline-flex"
          >
            Talk to an Engineer
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[var(--line-2)] text-text lg:hidden"
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto border-t border-[var(--line)] bg-[rgba(4,6,12,0.97)] backdrop-blur-[20px] lg:hidden">
          <nav aria-label="Mobile" className="container-g flex flex-col py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-white" }}
                className="flex min-h-14 cursor-pointer items-center border-b border-[var(--line)] font-display text-2xl text-text"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-6 inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-blue px-6 text-sm font-medium text-white"
            >
              Talk to an Engineer
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
