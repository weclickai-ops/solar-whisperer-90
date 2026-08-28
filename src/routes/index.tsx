import { createFileRoute } from "@tanstack/react-router";

import { Eyebrow } from "@/components/g/Eyebrow";
import { GButtonLink } from "@/components/g/GButton";
import { CtaBand } from "@/components/g/CtaBand";
import { Reveal } from "@/components/g/Reveal";
import { HeroArray, WideArray } from "@/components/svg/HeroArray";
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
              <GButtonLink to="/product" hash="technology">
                Explore Our Technology →
              </GButtonLink>
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

      {/* Wide array visual — full-bleed, breaking out of container-g */}
      <Reveal className="relative overflow-hidden">
        {/* Nested masks rather than mask-composite: the outer element fades the
            left and right edges into the page, the inner one fades the bottom. */}
        <div
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, #000 14%, #000 86%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, #000 14%, #000 86%, transparent 100%)",
          }}
        >
          <div
            className="aspect-[4/3] w-full md:aspect-[21/9]"
            style={{
              maskImage: "linear-gradient(to bottom, #000 62%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, #000 62%, transparent 100%)",
            }}
          >
            <WideArray />
          </div>
        </div>
      </Reveal>

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
              <GButtonLink to="/product" hash="technology" variant="ghost">
                {home.intro.cta}
              </GButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand {...ctas.home} />
    </>
  );
}
