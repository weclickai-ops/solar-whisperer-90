import { Link } from "@tanstack/react-router";
import { contact, identity } from "@/data/content";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "Home", to: "/" },
      { label: "Technology", to: "/technology" },
      { label: "Product", to: "/product" },
      { label: "Specifications", to: "/specifications" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

/*
 * Footer links sit at 17px tall, which is an awkward tap target on a phone.
 * min-h-11 (44px) gives them a comfortable hit area on small screens and is
 * dropped from md up, so the desktop footer keeps its original tight rhythm.
 */
const footerLink =
  "inline-flex min-h-11 items-center text-sm text-[var(--text-2)] transition-colors duration-200 hover:text-text cursor-pointer md:min-h-0";

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--line)] bg-[var(--bg-elev)]">
      <div className="container-g grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-4">
          <Link to="/" aria-label="Glarenergy home" className="w-fit cursor-pointer">
            <Logo />
          </Link>
          <p className="font-display text-lg text-text">{identity.tagline}.</p>
          <p className="max-w-[36ch] text-sm text-[var(--text-3)]">
            Precision single-axis solar tracking systems engineered for higher yield and
            plant performance.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-4">
            <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--text-3)]">
              {col.title}
            </h2>
            <ul className="flex flex-col gap-1 md:gap-3">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className={footerLink}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-col gap-4">
          <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--text-3)]">
            Contact
          </h2>
          <ul className="flex flex-col gap-1 md:gap-3">
            {contact.phones.map((p, i) => (
              <li key={p}>
                <a href={`tel:${contact.phoneHrefs[i]}`} className={footerLink}>
                  {p}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${contact.email}`} className={footerLink}>
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={contact.websiteHref}
                target="_blank"
                rel="noreferrer"
                className={footerLink}
              >
                {contact.website}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--line)]">
        <div className="container-g py-6">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--text-3)]">
            © {new Date().getFullYear()} {identity.company}
          </p>
        </div>
      </div>
    </footer>
  );
}
