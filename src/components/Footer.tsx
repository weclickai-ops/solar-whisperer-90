/* ============================================================
   src/components/Footer.tsx  —  FILE 4b / 12
   Replace your existing footer component.
   ============================================================ */

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="border-t py-11"
      style={{ background: "var(--bg2)", borderColor: "var(--hair)" }}
    >
      <div className="wrap flex flex-wrap items-center justify-between gap-5 text-[14px] text-brand-mute">
        <div>
          <Link
            to="/"
            className="mb-2 flex items-center gap-[10px] text-[19px] font-bold tracking-[-0.02em] text-white"
          >
            <svg
              width="20"
              height="20"
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
            Glarenergy
          </Link>
          Energy made efficient.
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            href="tel:+919502142303"
            className="transition-colors hover:text-white"
          >
            +91 95021 42303
          </a>
          <a
            href="mailto:connect@glarenergy.com"
            className="transition-colors hover:text-white"
          >
            connect@glarenergy.com
          </a>
        </div>

        <div>© {new Date().getFullYear()} Glarenergy</div>
      </div>
    </footer>
  );
}
