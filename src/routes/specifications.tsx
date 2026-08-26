import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Eyebrow } from "@/components/g/Eyebrow";
import { CtaBand } from "@/components/g/CtaBand";
import { Reveal } from "@/components/g/Reveal";
import { ctas, specifications } from "@/data/content";
import { routeHead } from "@/lib/seo";

export const Route = createFileRoute("/specifications")({
  head: () => routeHead("/specifications"),
  component: SpecificationsPage,
});

function SpecificationsPage() {
  const [active, setActive] = useState(specifications.blocks[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-96px 0px -60% 0px", threshold: 0 },
    );
    specifications.blocks.forEach((block) => {
      const el = document.getElementById(block.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="container-g py-16 lg:py-24">
        <Reveal className="max-w-3xl">
          <Eyebrow className="mb-6">{specifications.eyebrow}</Eyebrow>
          <h1>{specifications.heading}</h1>
          <p className="lede mt-7">{specifications.lede}</p>
        </Reveal>
      </section>

      <section className="section-g border-t border-[var(--line)]">
        <div className="container-g grid gap-10 lg:grid-cols-[200px_1fr] lg:gap-14">
          <nav aria-label="Specification sections" className="hidden lg:block print:hidden">
            <ul className="sticky top-28 space-y-1">
              {specifications.blocks.map((block) => (
                <li key={block.id}>
                  <a
                    href={`#${block.id}`}
                    aria-current={active === block.id ? "true" : undefined}
                    className="mono-label flex min-h-11 items-center border-l px-4 transition-colors"
                    style={{
                      borderColor: active === block.id ? "var(--blue)" : "var(--line)",
                      color: active === block.id ? "var(--cyan)" : "var(--text-3)",
                    }}
                  >
                    {block.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-8">
            {specifications.blocks.map((block, i) => (
              <Reveal key={block.id} index={i}>
                <section
                  id={block.id}
                  aria-labelledby={`${block.id}-title`}
                  className="sheet scroll-mt-28 overflow-hidden rounded-xl border border-[var(--line)]"
                >
                  <div
                    className="border-b border-[var(--line)] px-5 py-3"
                    style={{ background: "rgba(255,255,255,.03)" }}
                  >
                    <h2 id={`${block.id}-title`} className="mono-label text-cyan">
                      {block.title}
                    </h2>
                  </div>
                  <dl>
                    {block.rows.map((row) => (
                      <div
                        key={row.label}
                        className="flex flex-wrap items-baseline justify-between gap-3 border-b border-[var(--line)] px-5 py-3.5 last:border-b-0 transition-colors hover:bg-[rgba(255,255,255,.025)]"
                      >
                        <dt className="text-[0.9375rem] text-[var(--text-3)]">{row.label}</dt>
                        <dd className="font-mono text-[0.875rem] text-[var(--text)]">{row.value}</dd>
                      </div>
                    ))}
                  </dl>
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand {...ctas.specifications} />
    </>
  );
}
