import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  engineeringItems,
  heroSpecRail,
  identity,
  performanceStrip,
  trackingSteps,
  whyGlarenergy,
} from "@/data/content";
import { Eyebrow } from "@/components/g/Eyebrow";
import { Reveal } from "@/components/g/Reveal";
import { SectionHead } from "@/components/g/SectionHead";
import { GLinkButton } from "@/components/g/GButton";
import { GCard } from "@/components/g/GCard";
import { CountUp } from "@/components/g/CountUp";
import { Marquee } from "@/components/g/Marquee";
import { CtaBand } from "@/components/g/CtaBand";
import { HeroScene } from "@/components/svg/HeroScene";
import { SunTrackDiagram } from "@/components/svg/SunTrackDiagram";
import { TerrainProfile } from "@/components/svg/TerrainProfile";
import { EnergyCurve } from "@/components/svg/EnergyCurve";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { ConfigComparator } from "@/components/sections/ConfigComparator";
import { TechIcon } from "@/components/svg/TechIcon";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Glarenergy — Precision Solar Tracking Technology" },
      {
        name: "description",
        content:
          "Single-axis solar trackers engineered for 15–25% more yield, 180 km/h wind survival and ±2° tracking accuracy.",
      },
      { property: "og:title", content: "Glarenergy — Precision Solar Tracking Technology" },
      {
        property: "og:description",
        content:
          "Single-axis solar trackers engineered for 15–25% more yield, 180 km/h wind survival and ±2° tracking accuracy.",
      },
    ],
  }),
  component: Home,
});

const HERO_LINES = ["ENERGY", "MADE", "EFFICIENT."];

function Home() {
  return (
    <>
      {/* 1 — HERO */}
      <section className="container-g grid min-h-[100svh] items-center gap-14 pt-32 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:pt-28">
        <div className="flex flex-col gap-8">
          <Eyebrow>Precision Solar Tracking Technology</Eyebrow>

          <h1 className="uppercase">
            {HERO_LINES.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <span
                  className="block animate-line-rise"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  {i === HERO_LINES.length - 1 ? (
                    <span className="text-gradient-cyan">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              </span>
            ))}
          </h1>

          <p className="lede">{identity.heroLede}</p>

          <div className="flex flex-wrap gap-3">
            <GLinkButton to="/technology">
              Explore the Technology
              <ArrowRight size={15} aria-hidden="true" />
            </GLinkButton>
            <GLinkButton to="/contact" variant="ghost">
              Talk to an Engineer
            </GLinkButton>
          </div>

          <dl className="mt-2 grid grid-cols-2 border-t border-[var(--line)] pt-6 sm:grid-cols-4">
            {heroSpecRail.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col gap-1 px-4 py-2 first:pl-0 ${
                  i > 0 ? "sm:border-l sm:border-[var(--line)]" : ""
                }`}
              >
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl leading-none text-text md:text-[1.75rem]">
                  {s.value}
                </dd>
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[var(--text-3)]">
                  {s.label}
                </p>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <HeroScene />
        </div>
      </section>

      {/* 2 — MARQUEE */}
      <Marquee />

      {/* 3 — PERFORMANCE STRIP */}
      <section className="container-g py-20 md:py-24" aria-label="Performance figures">
        <Reveal>
          <dl className="grid divide-y divide-[var(--line)] rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface)] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-5">
            {performanceStrip.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col gap-2 p-6 ${
                  i > 0 ? "lg:border-l lg:border-[var(--line)]" : ""
                } ${i % 2 === 1 ? "sm:border-l sm:border-[var(--line)] lg:border-l" : ""}`}
              >
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl leading-none text-text">
                  <CountUp value={s.value} />
                </dd>
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[var(--text-3)]">
                  {s.label}
                </p>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      {/* 4 — WHY TRACK THE SUN */}
      <section className="container-g py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHead
            eyebrow="The Fundamentals"
            title="The sun moves. Your panels should too."
            lede="A tracker turns through the day so the modules keep facing the sun, capturing more of the available irradiance than a panel locked in one position."
          />
          <Reveal delay={80}>
            <SunTrackDiagram />
          </Reveal>
        </div>
      </section>

      {/* 5 — PRODUCT SHOWCASE */}
      <ProductShowcase />

      {/* 6 — CONFIGURATION COMPARISON */}
      <ConfigComparator />

      {/* 7 — ENGINEERING */}
      <section className="container-g py-20 md:py-28">
        <SectionHead
          eyebrow="Engineering"
          title="Engineered for real-world solar farms."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {engineeringItems.map((item, i) => (
            <Reveal key={item.title} delay={i * 50}>
              <GCard className="h-full">
                <TechIcon name={item.title} />
                <h3 className="mt-5 font-display text-lg">{item.title}</h3>
                <p className="mt-2 text-sm">{item.description}</p>
              </GCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 8 — TERRAIN */}
      <section className="container-g py-20 md:py-28">
        <SectionHead
          eyebrow="Terrain Adaptability"
          title="Built for more than perfect terrain."
          lede="Trackers install along undulating ground with 10% north–south and 10% east–west slope tolerance, rotating ±45° to ±60° and returning to 0° stow in extreme wind."
        />
        <div className="mt-12">
          <TerrainProfile />
        </div>
      </section>

      {/* 9 — HOW GLARENERGY TRACKS THE SUN */}
      <section className="container-g py-20 md:py-28">
        <SectionHead eyebrow="Process" title="How Glarenergy tracks the sun." />
        <ol className="mt-12 border-t border-[var(--line)]">
          {trackingSteps.map((step, i) => (
            <Reveal as="li" key={step.number} delay={i * 60}>
              <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-6 border-b border-[var(--line)] px-2 py-7 transition-colors duration-200 hover:bg-[rgba(0,127,255,0.05)] md:grid-cols-[auto_16rem_minmax(0,1fr)] md:items-baseline">
                <span className="font-mono text-xs text-cyan">{step.number}</span>
                <h3 className="font-display text-xl">{step.title}</h3>
                <p className="col-span-2 text-sm md:col-span-1">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* 10 — ENERGY GAIN */}
      <section className="container-g py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionHead
            eyebrow="Energy Gain"
            title="A broader generation curve."
            lede="A fixed-tilt array peaks briefly at midday. A tracked array holds a productive angle from morning through afternoon — the shaded delta is the additional yield."
          />
          <Reveal delay={80}>
            <EnergyCurve />
          </Reveal>
        </div>
      </section>

      {/* 11 — WHY GLARENERGY */}
      <section className="container-g py-20 md:py-28">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="flex flex-col justify-between gap-8 rounded-[2rem] border border-[var(--line-blue)] bg-[var(--bg-elev)] p-8 md:p-12">
            <Eyebrow>Why Glarenergy</Eyebrow>
            <h2 className="max-w-[14ch] text-balance">
              Precision is the <span className="text-gradient-cyan">product</span>.
            </h2>
            <p className="lede">{identity.positioning}</p>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {whyGlarenergy.map((item, i) => (
              <Reveal key={item} delay={i * 40}>
                <div className="flex h-full items-center rounded-2xl border border-[var(--line)] px-5 py-4 text-sm text-[var(--text-2)] transition-colors duration-200 hover:border-[var(--line-blue)] hover:text-text">
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 12 — CTA */}
      <CtaBand />
    </>
  );
}
