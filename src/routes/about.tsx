import { createFileRoute } from "@tanstack/react-router";
import { identity, figures } from "@/data/content";
import { PageHeader } from "@/components/g/PageHeader";
import { CtaBand } from "@/components/g/CtaBand";
import { Reveal } from "@/components/g/Reveal";
import { Eyebrow } from "@/components/g/Eyebrow";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Glarenergy — Precision Solar Infrastructure" },
      {
        name: "description",
        content:
          "Glarenergy is a renewable energy company built on precision, targeting 1 GW of tracker-equipped solar plants by 2030.",
      },
      { property: "og:title", content: "About Glarenergy — Precision Solar Infrastructure" },
      {
        property: "og:description",
        content:
          "A renewable energy company built on precision, pioneering solar power with innovative single-axis trackers.",
      },
    ],
  }),
  component: About,
});

const stats = [figures.goal, figures.yield, figures.wind];

function About() {
  return (
    <>
      <PageHeader
        breadcrumb="About"
        eyebrow="Who we are"
        title="Building the next generation of solar infrastructure."
        lede={identity.positioning}
      />

      <section className="container-g grid gap-6 py-20 md:grid-cols-2 md:py-28">
        {[
          { label: "Mission", body: identity.mission },
          { label: "Vision", body: identity.vision },
        ].map((panel, i) => (
          <Reveal key={panel.label} delay={i * 80}>
            <article className="flex h-full flex-col gap-6 rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-8 md:p-12">
              <Eyebrow>{panel.label}</Eyebrow>
              <h2 className="font-display text-[1.75rem] leading-tight md:text-[2.1rem]">
                {panel.body}
              </h2>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="container-g pb-20 md:pb-28" aria-label="Key figures">
        <Reveal>
          <dl className="grid divide-y divide-[var(--line)] rounded-[1.5rem] border border-[var(--line)] bg-[var(--bg-elev)] md:grid-cols-3 md:divide-x md:divide-y-0">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-2 p-8">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-4xl leading-none">{s.value}</dd>
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[var(--text-3)]">
                  {s.label}
                </p>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
