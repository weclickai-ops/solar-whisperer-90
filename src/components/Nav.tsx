/* ============================================================
   src/components/Nav.tsx  —  FILE 4a / 12
   Replace your existing header/navbar component.
   ============================================================ */

import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/technology", label: "Technology" },
  { to: "/product", label: "Product" },
  { to: "/specifications", label: "Specifications" },
  { to: "/company", label: "Company" },
  { to: "/contact", label: "Contact" },
];

function Mark({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1479FF"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.5 1.5M17.6 17.6l1.5 1.5M19.1 4.9l-1.5 1.5M6.4 17.6l-1.5 1.5" />
    </svg>
  );
}

const tabBase =
  "rounded-full px-[14px] py-[9px] text-[14px] transition-colors duration-200";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile sheet whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll while the sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        background: "rgba(5,7,12,.86)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderColor: "var(--hair)",
      }}
    >
      <div className="wrap flex h-[74px] items-center gap-4">
        <Link
          to="/"
          className="flex items-center gap-[10px] text-[19px] font-bold tracking-[-0.02em]"
        >
          <Mark />
          Glarenergy
        </Link>

        {/* desktop */}
        <nav className="mx-auto hidden md:flex md:gap-[2px]" aria-label="Main">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `${tabBase} ${
                  isActive
                    ? "bg-white/[0.06] text-white"
                    : "text-brand-mute hover:text-white"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contact" className="btn btn-p ml-auto hidden md:inline-flex">
          Talk to an Engineer →
        </Link>

        {/* mobile trigger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="ml-auto h-[38px] w-[42px] rounded-[9px] border text-white md:hidden"
          style={{ borderColor: "var(--hair2)" }}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* mobile sheet */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="absolute left-0 right-0 top-[74px] flex flex-col gap-1 border-b p-[10px] md:hidden"
          style={{ background: "var(--bg2)", borderColor: "var(--hair)" }}
        >
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `rounded-[10px] px-4 py-[14px] text-[16px] ${
                  isActive ? "bg-white/[0.06] text-white" : "text-brand-mute"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-p mt-2 justify-center">
            Talk to an Engineer →
          </Link>
        </nav>
      )}
    </header>
  );
}
