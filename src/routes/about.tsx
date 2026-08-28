import { createFileRoute } from "@tanstack/react-router";

import { Eyebrow } from "@/components/g/Eyebrow";
import { CtaBand } from "@/components/g/CtaBand";
import { Reveal } from "@/components/g/Reveal";
import { SectionHead } from "@/components/g/SectionHead";
import { ctas, identity } from "@/data/content";
import { routeHead } from "@/lib/seo";

/**
 * About. Every claim here comes from `identity` in content.ts — the company
 * has supplied a tagline, a description, a mission and a vision, and nothing
 * else. No history, team, addresses or certifications are invented to pad it.
 */

const direction = [
  { label: "Mission", body: identity.mission },
  { label: "Vision", body: identity.vision },
] as const;

export const Route = createFileRoute("/about")({
  head: () => routeHead("/about"),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="container-g py-16 lg:py-24">
        <Reveal className="max-w-3xl">
          <Eyebrow className="mb-6">About</Eyebrow>
          <h1>{identity.tagline}</h1>
          <p className="lede mt-7">{identity.description}</p>
        </Reveal>
      </section>

      {/* Mission and vision */}
      <section className="section-g border-t border-[var(--line)]">
        <div className="container-g">
          <SectionHead eyebrow="Direction" heading="Mission and vision." />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {direction.map((item, i) => (
              <Reveal key={item.label} index={i}>
                <div className="h-full rounded-xl border border-[var(--line)] bg-[var(--surface)] p-8">
                  <p className="mono-label text-cyan">{item.label}</p>
                  <p className="mt-5 text-[1.0625rem] leading-[1.6] text-[var(--text)]">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand {...ctas.about} />
    </>
  );
}
