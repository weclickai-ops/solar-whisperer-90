import { createFileRoute } from "@tanstack/react-router";
import { performanceStrip, whyCards } from "@/data/content";
import { PageHeader } from "@/components/g/PageHeader";
import { SectionHead } from "@/components/g/SectionHead";
import { Reveal } from "@/components/g/Reveal";
import { GCard } from "@/components/g/GCard";
import { TechIcon } from "@/components/svg/TechIcon";
import { CtaBand } from "@/components/g/CtaBand";

export const Route = createFileRoute("/why-glarenergy")({
  head: () => ({
    meta: [
      { title: "Why Glarenergy — Technology, Engineering, Reliability" },
      {
        name: "description",
        content:
          "Six reasons EPCs, developers and project owners choose Glarenergy: intelligent tracking, utility-scale engineering, verified performance figures.",
      },
      { property: "og:title", content: "Why Glarenergy — Technology, Engineering, Reliability" },
      {
        property: "og:description",
        content:
          "Intelligent tracker-controller solutions engineered for real-world utility-scale solar plants.",
      },
      { property: "og:url", content: "https://solar-whisperer-90.lovable.app/why-glarenergy" },
    ],
    links: [
      { rel: "canonical", href: "https://solar-whisperer-90.lovable.app/why-glarenergy" },
    ],
  }),
  component: WhyGlarenergyPage,
});

function WhyGlarenergyPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Why Glarenergy"
        eyebrow="Why Glarenergy"
        title="Built for the people who build solar."
        lede="Six reasons EPCs, developers, project owners and technology partners work with Glarenergy — each one backed by the datasheet, not adjectives."
      />

      {/* Value propositions */}
      <section className="container-g py-20 md:py-28">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 60}>
              <GCard className="h-full">
                <TechIcon name={card.title} />
                <h2 className="mt-5 font-display text-xl">{card.title}</h2>
                <p className="mt-2 text-sm">{card.description}</p>
              </GCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Proof strip */}
      <section className="container-g pb-20 md:pb-28" aria-label="Verified figures">
        <SectionHead
          eyebrow="Proof points"
          title="Claims we can stand behind."
          lede="Every number below comes straight from the Glarenergy datasheet."
        />
        <Reveal>
          <dl className="mt-12 grid divide-y divide-[var(--line)] rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface)] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-5">
            {performanceStrip.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col gap-2 p-6 ${
                  i > 0 ? "lg:border-l lg:border-[var(--line)]" : ""
                } ${i % 2 === 1 ? "sm:border-l sm:border-[var(--line)] lg:border-l" : ""}`}
              >
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl leading-none text-text">{s.value}</dd>
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
