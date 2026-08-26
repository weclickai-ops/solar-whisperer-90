import { createFileRoute } from "@tanstack/react-router";

import { Eyebrow } from "@/components/g/Eyebrow";
import { GCard, GCardBody, GCardTitle } from "@/components/g/Card";
import { CtaBand } from "@/components/g/CtaBand";
import { Reveal } from "@/components/g/Reveal";
import { SectionHead } from "@/components/g/SectionHead";
import { SpecTable } from "@/components/g/SpecTable";
import { YieldCurve } from "@/components/svg/YieldCurve";
import { ctas, technology } from "@/data/content";
import { routeHead } from "@/lib/seo";

export const Route = createFileRoute("/technology")({
  head: () => routeHead("/technology"),
  component: TechnologyPage,
});

function TechnologyPage() {
  return (
    <>
      <section className="container-g py-16 lg:py-24">
        <Reveal className="max-w-4xl">
          <Eyebrow className="mb-6">{technology.eyebrow}</Eyebrow>
          <h1>{technology.heading}</h1>
          <p className="lede mt-7">{technology.lede}</p>
        </Reveal>
      </section>

      {/* Control sequence */}
      <section className="section-g border-t border-[var(--line)]">
        <div className="container-g">
          <SectionHead eyebrow="Control sequence" heading="Five operations, repeated all day." />
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {technology.steps.map((step, i) => (
              <Reveal as="li" key={step.number} index={i}>
                <div className="step h-full rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6 transition-[transform,border-color] duration-[220ms] hover:-translate-y-[3px] hover:border-[var(--line-blue)]">
                  <span className="font-mono text-[0.75rem] tracking-[0.22em] text-cyan">
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-[1.0625rem]">{step.title}</h3>
                  <p className="mt-3 text-[0.9375rem]">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Yield */}
      <section className="section-g border-t border-[var(--line)]">
        <div className="container-g grid items-center gap-12 lg:grid-cols-2">
          <SectionHead
            eyebrow={technology.yield.eyebrow}
            heading={technology.yield.heading}
            lede={technology.yield.body}
          />
          <Reveal index={1} className="rounded-xl border border-[var(--line)] bg-[var(--bg-elev)] p-4">
            <YieldCurve />
          </Reveal>
        </div>
      </section>

      {/* Terrain and safety */}
      <section className="section-g border-t border-[var(--line)]">
        <div className="container-g grid gap-12 lg:grid-cols-2">
          <SectionHead
            eyebrow={technology.terrain.eyebrow}
            heading={technology.terrain.heading}
            lede={technology.terrain.body}
          />
          <Reveal index={1}>
            <SpecTable rows={technology.terrain.rows} />
          </Reveal>
        </div>
      </section>

      {/* Communication */}
      <section className="section-g border-t border-[var(--line)]">
        <div className="container-g">
          <SectionHead
            eyebrow={technology.communication.eyebrow}
            heading={technology.communication.heading}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {technology.communication.cards.map((card, i) => (
              <Reveal key={card.title} index={i}>
                <GCard className="h-full">
                  <GCardTitle>{card.title}</GCardTitle>
                  <GCardBody>{card.description}</GCardBody>
                </GCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand {...ctas.technology} />
    </>
  );
}
