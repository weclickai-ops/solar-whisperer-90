import { Link } from "@tanstack/react-router";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

export function PageHeader({
  breadcrumb,
  eyebrow,
  title,
  lede,
}: {
  breadcrumb: string;
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="border-b border-[var(--line)] pt-36 pb-16 md:pt-44 md:pb-24">
      <div className="container-g flex flex-col gap-6">
        <Reveal>
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--text-3)]">
              <li>
                <Link to="/" className="cursor-pointer transition-colors hover:text-text">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-[var(--text-2)]">{breadcrumb}</li>
            </ol>
          </nav>
        </Reveal>
        <Reveal delay={60}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={110}>
          <h1 className="max-w-[16ch] text-balance">{title}</h1>
        </Reveal>
        <Reveal delay={170}>
          <p className="lede">{lede}</p>
        </Reveal>
      </div>
    </section>
  );
}
