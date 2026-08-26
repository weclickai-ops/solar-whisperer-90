import { createFileRoute } from "@tanstack/react-router";

import { Eyebrow } from "@/components/g/Eyebrow";
import { GButtonLink } from "@/components/g/GButton";
import { GCard, GCardBody, GCardTitle } from "@/components/g/Card";
import { CtaBand } from "@/components/g/CtaBand";
import { Placeholder } from "@/components/g/Placeholder";
import { Reveal } from "@/components/g/Reveal";
import { SectionHead } from "@/components/g/SectionHead";
import { SpecTable } from "@/components/g/SpecTable";
import { HeroArray } from "@/components/svg/HeroArray";
import { RowCloseup } from "@/components/svg/RowCloseup";
import { ctas, home } from "@/data/content";
import { routeHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => routeHead("/"),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="container-g grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <Reveal>
            <Eyebrow className="mb-6">{home.eyebrow}</Eyebrow>
            <h1>
              {home.headingLine1}
              <br />
              <span className="text-cyan">{home.headingLine2}</span>
            </h1>
            <p className="lede mt-7">{home.lede}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <GButtonLink to="/technology">Explore Our Technology →</GButtonLink>
              <GButtonLink to="/contact" variant="ghost">
                Talk to Our Team
              </GButtonLink>
            </div>
          </Reveal>

          <Reveal index={1} className="relative">
            <div className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--bg-elev)]">
              <HeroArray />
            </div>
            <ul className="absolute bottom-4 left-4 space-y-2">
              {home.telemetry.map((chip) => (
                <li
                  key={chip.label}
                  className="rounded-md border px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-[var(--text-2)]"
                  style={{
                    borderColor: "var(--line-blue)",
                    background: "rgba(4,6,12,.7)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {chip.label} · <span className="text-cyan">{chip.value}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Spec rail */}
      <section aria-label="Headline performance figures" className="border-y border-[var(--line)]">
        <div className="container-g grid grid-cols-2 lg:grid-cols-4">
          {home.specRail.map((cell, i) => (
            <Reveal
              key={cell.label}
              index={i}
              className="border-[var(--line)] px-2 py-8 sm:px-6 [&:nth-child(n+3)]:border-t lg:[&:nth-child(n+3)]:border-t-0 [&:nth-child(even)]:border-l lg:[&:nth-child(n+2)]:border-l"
            >
              <p className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-none tracking-[-0.025em] text-[var(--text)]">
                {cell.value}
              </p>
              <p className="mono-label mt-3 text-[var(--text-3)]">{cell.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What is Glarenergy */}
      <section className="section-g">
        <div className="container-g grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow className="mb-5">About Glarenergy</Eyebrow>
            <h2>{home.intro.heading}</h2>
          </Reveal>
          <Reveal index={1}>
            <p className="text-[1.0625rem]">{home.intro.body}</p>
            <div className="mt-8">
              <GButtonLink to="/technology" variant="ghost">
                {home.intro.cta}
              </GButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Technology teaser */}
      <section className="section-g border-t border-[var(--line)]">
        <div className="container-g">
          <SectionHead
            eyebrow={home.technologyTeaser.eyebrow}
            heading={home.technologyTeaser.heading}
            lede={home.technologyTeaser.lede}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {home.technologyTeaser.cards.map((card, i) => (
              <Reveal key={card.title} index={i}>
                <GCard className="h-full">
                  <GCardTitle>{card.title}</GCardTitle>
                  <GCardBody>{card.description}</GCardBody>
                </GCard>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <GButtonLink to="/technology">{home.technologyTeaser.cta}</GButtonLink>
          </Reveal>
        </div>
      </section>

      {/* In the field */}
      <section className="section-g border-t border-[var(--line)]">
        <div className="container-g">
          <SectionHead
            eyebrow={home.field.eyebrow}
            heading={home.field.heading}
            lede={home.field.body}
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.7fr_1fr]">
            <Reveal className="overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg-elev)]">
              <RowCloseup />
            </Reveal>
            <div className="grid gap-5">
              {home.field.placeholders.map((item, i) => (
                <Reveal key={item.label} index={i + 1}>
                  <Placeholder label={item.label} dimensions={item.dimensions} ratio="16 / 10" />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product teaser */}
      <section className="section-g border-t border-[var(--line)]">
        <div className="container-g">
          <SectionHead
            eyebrow={home.productTeaser.eyebrow}
            heading={home.productTeaser.heading}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {home.productTeaser.cards.map((card, i) => (
              <Reveal key={card.title} index={i}>
                <GCard className="h-full">
                  <GCardTitle>{card.title}</GCardTitle>
                  <GCardBody>{card.description}</GCardBody>
                </GCard>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <GButtonLink to="/product" variant="ghost">
              {home.productTeaser.cta}
            </GButtonLink>
          </Reveal>
        </div>
      </section>

      {/* Why Glarenergy */}
      <section className="section-g border-t border-[var(--line)]">
        <div className="container-g">
          <SectionHead eyebrow={home.why.eyebrow} heading={home.why.heading} />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {home.why.cards.map((card, i) => (
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

      {/* Mission and vision */}
      <section className="section-g border-t border-[var(--line)]">
        <div className="container-g max-w-3xl">
          <SectionHead eyebrow="Direction" heading="Mission and vision." />
          <Reveal className="mt-10">
            <SpecTable rows={home.missionVision} />
          </Reveal>
        </div>
      </section>

      <CtaBand {...ctas.home} />
    </>
  );
}
