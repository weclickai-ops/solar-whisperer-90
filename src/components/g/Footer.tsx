import { Link } from "@tanstack/react-router";

import { Logo } from "./Logo";
import { contact, contactRows, identity, nav } from "@/data/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-[var(--line)] bg-[var(--bg-elev)]">
      <div className="container-g py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 font-mono text-[0.75rem] uppercase tracking-[0.18em] text-cyan">
              {identity.tagline}
            </p>
            <p className="mt-4 text-[0.9375rem]">{identity.description}</p>
          </div>

          <div>
            <h2 className="mono-label text-[var(--text-3)]" style={{ fontSize: "0.75rem" }}>
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="inline-flex min-h-[28px] items-center text-[0.9375rem] text-[var(--text-2)] transition-colors hover:text-[var(--text)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mono-label text-[var(--text-3)]" style={{ fontSize: "0.75rem" }}>
              Contact
            </h2>
            <ul className="mt-5 space-y-3">
              {contactRows.map((row) => (
                <li key={row.href}>
                  <a
                    href={row.href}
                    {...(row.external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                    className="inline-flex min-h-[28px] items-center text-[0.9375rem] text-[var(--text-2)] transition-colors hover:text-[var(--text)]"
                  >
                    {row.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-[var(--line)] pt-6">
          <p className="font-mono text-[0.75rem] text-[var(--text-3)]">
            © {year} {identity.company}. All rights reserved.
          </p>
        </div>
      </div>
      <span className="sr-only-hp">{contact.website}</span>
    </footer>
  );
}
