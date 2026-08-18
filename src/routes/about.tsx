import { createFileRoute } from "@tanstack/react-router";
import { identity, figures } from "@/data/content";
import { PageHeader } from "@/components/g/PageHeader";
import { CtaBand } from "@/components/g/CtaBand";
import { Reveal } from "@/components/g/Reveal";
import { Eyebrow } from "@/components/g/Eyebrow";
import { SectionHead } from "@/components/g/SectionHead";
import { GCard } from "@/components/g/GCard";
import { Plate } from "@/components/g/Plate";

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

const precision = [
  {
    value: figures.accuracy.value,
    title: "Held tracking accuracy",
    body: "The commanded angle is held to ±2° across the full ±45° to ±60° rotation range.",
  },
  {
    value: "Astronomical",
    title: "Plus intelligent control",
    body: "The sun's position is calculated astronomically, then refined continuously by one controller per tracker.",
  },
  {
    value: figures.wind.value,
    title: "Survival rating",
    body: "In extreme wind the structure moves to a 0° stow position, rated for survival at 180 km/h.",
  },
];

function About() {
  return (
    <>
      <PageHeader
        breadcrumb="About"
        eyebrow="Who we are"
        title="Building the next generation of solar infrastructure."
        lede={identity.positioning}
      />

      {/* Positioning */}
      <section className="container-g section-g">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Reveal className="flex flex-col gap-5">
            <Eyebrow>Positioning</Eyebrow>
            <p className="prose-display max-w-[22ch] text-[1.9rem] md:text-[2.6rem]">
              Precision is the product.
            </p>
          </Reveal>
          <Reveal delay={80} className="flex flex-col gap-5">
            <p className="lede">{identity.positioning}</p>
            <p className="lede">{identity.heroLede}</p>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container-g grid gap-6 pb-20 md:grid-cols-2 md:pb-28">
        {[
          { label: "Mission", body: identity.mission },
          { label: "Vision", body: identity.vision },
        ].map((panel, i) => (
          <Reveal key={panel.label} delay={i * 80}>
            <article className="flex h-full flex-col gap-6 rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-8 md:p-12">
              <Eyebrow>{panel.label}</Eyebrow>
              <p className="prose-display max-w-none text-[1.3rem] md:text-[1.55rem]">
                {panel.body}
              </p>
            </article>
          </Reveal>
        ))}
      </section>

      {/* 1 GW goal */}
      <section className="container-g pb-20 md:pb-28" aria-labelledby="goal-title">
        <Reveal>
          <div className="grid gap-10 rounded-[2rem] border border-[var(--line-blue)] bg-[var(--bg-elev)] p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
            <div className="flex flex-col gap-5">
              <Eyebrow>The goal</Eyebrow>
              <h2 id="goal-title" className="max-w-[18ch]">
                1 GW of tracker-equipped solar plants by 2030.
              </h2>
              <p className="lede">{identity.mission}</p>
            </div>
            <svg
              viewBox="0 0 220 220"
              role="img"
              aria-label="Target graphic representing the 1 GW by 2030 deployment goal"
              className="w-40 justify-self-start md:w-52 md:justify-self-end"
            >
              <title>1 GW by 2030 target</title>
              {[100, 74, 48].map((r) => (
                <circle
                  key={r}
                  cx="110"
                  cy="110"
                  r={r}
                  fill="none"
                  stroke="rgba(0,127,255,0.35)"
                  strokeWidth="1"
                />
              ))}
              <circle cx="110" cy="110" r="22" fill="none" stroke="var(--cyan)" strokeWidth="1.5" />
              <circle cx="110" cy="110" r="4" fill="var(--cyan)" />
              <line x1="110" y1="4" x2="110" y2="216" stroke="rgba(255,255,255,0.09)" />
              <line x1="4" y1="110" x2="216" y2="110" stroke="rgba(255,255,255,0.09)" />
            </svg>
          </div>
        </Reveal>
      </section>

      {/* What precision means */}
      <section className="container-g pb-20 md:pb-28">
        <SectionHead eyebrow="What precision means" title="Three numbers we design against." />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {precision.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <GCard className="h-full">
                <p className="font-display text-3xl leading-none text-text">{p.value}</p>
                <h3 className="mt-4 font-display text-lg">{p.title}</h3>
                <p className="mt-2 text-sm">{p.body}</p>
              </GCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Key figures */}
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

      {/* Plate: aerial of a utility-scale tracker plant */}
      <section className="container-g pb-20 md:pb-28">
        <Reveal>
          <Plate
            src="/images/plant-aerial.jpg"
            alt="Aerial view of a utility-scale solar plant with long parallel rows of single-axis trackers"
            width={1920}
            height={1080}
            className="max-h-[55vh]"
          />
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
