import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { designSpecs, features, product } from "@/data/content";
import { PageHeader } from "@/components/g/PageHeader";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { ConfigComparator } from "@/components/sections/ConfigComparator";
import { SpecSheet } from "@/components/sections/SpecSheet";
import { CtaBand } from "@/components/g/CtaBand";
import { GCard } from "@/components/g/GCard";
import { Reveal } from "@/components/g/Reveal";
import { SectionHead } from "@/components/g/SectionHead";
import { Plate } from "@/components/g/Plate";

const moduleConfig = [
  { label: "Modules per tracker", value: "Up to 100 modules" },
  { label: "Module support", value: "Commercial & bifacial" },
  { label: "Arrangement", value: "Two in portrait (2P) or one in portrait (1P)" },
  { label: "Tracker length", value: "50 m – 100 m" },
  { label: "Ground coverage ratio", value: ">15%" },
];

const foundations = [
  { label: "Foundation methods", value: "Ramming / pre-drill / PHC" },
  { label: "Anti-corrosion", value: "Galvanized / Mg-Zn coated" },
  { label: "Piles per MW", value: "~450" },
  { label: "Operating temperature", value: "-15°C to 60°C" },
];

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "2P-HSAT Horizontal Single Axis Tracker — Glarenergy" },
      {
        name: "description",
        content:
          "The Glarenergy 2P-HSAT: a dual-row horizontal single axis tracker with single-point linear actuator drive and ±2° accuracy.",
      },
      { property: "og:title", content: "2P-HSAT Horizontal Single Axis Tracker — Glarenergy" },
      {
        property: "og:description",
        content:
          "Dual-row horizontal tracker with precision motorization, wind-rated to 180 km/h and bifacial ready.",
      },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Product"
        eyebrow={`${product.name} · ${product.fullName}`}
        title="A dual-row tracker built around one precise axis."
        lede={product.description}
      />

      <ProductShowcase showLink={false} />

      <section className="container-g pb-20 md:pb-28">
        <SectionHead eyebrow="Benefits" title="Why plants specify the 2P-HSAT." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {product.benefits.map((b, i) => (
            <Reveal key={b} delay={i * 50}>
              <GCard className="h-full">
                <p className="font-mono text-xs text-cyan">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-3 font-display text-lg text-text">{b}</p>
              </GCard>
            </Reveal>
          ))}
        </div>
      </section>

      <ConfigComparator />

      {/* Module configuration */}
      <section className="container-g pb-20 md:pb-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHead
              eyebrow="Module configuration"
              title="Up to 100 modules on one axis."
              lede="Commercial and bifacial modules are both supported, in single- or dual-portrait arrangement along a 50 m to 100 m tracker."
            />
          </div>
          <Reveal delay={60}>
            <dl className="divide-y divide-[var(--line)] rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface)]">
              {moduleConfig.map((r) => (
                <div key={r.label} className="grid grid-cols-1 gap-1 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-4 px-6 py-4">
                  <dt className="text-sm text-[var(--text-3)]">{r.label}</dt>
                  <dd className="text-right font-mono text-sm text-text">{r.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Foundations & corrosion */}
      <section className="container-g pb-20 md:pb-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHead
              eyebrow="Foundations & corrosion"
              title="Founded for the ground it stands on."
              lede="Ramming, pre-drill or PHC piles at roughly 450 piles per MW, with galvanized or Mg-Zn coated steel for corrosion resistance."
            />
          </div>
          <Reveal delay={60}>
            <dl className="divide-y divide-[var(--line)] rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface)]">
              {foundations.map((r) => (
                <div key={r.label} className="grid grid-cols-1 gap-1 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-4 px-6 py-4">
                  <dt className="text-sm text-[var(--text-3)]">{r.label}</dt>
                  <dd className="text-right font-mono text-sm text-text">{r.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Full feature set */}
      <section className="container-g pb-20 md:pb-28">
        <SectionHead eyebrow="Capabilities" title="The full feature set." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 40}>
              <div className="h-full rounded-2xl border border-[var(--line)] p-5 transition-colors duration-200 hover:border-[var(--line-blue)]">
                <h3 className="font-display text-base">{f.title}</h3>
                <p className="mt-2 text-sm">{f.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Plate: tracker-row.jpg — single row close up, torque tube and drive visible */}
      <section className="container-g pb-20 md:pb-28">
        <Reveal>
          <Plate
            src="/images/tracker-row.jpg"
            alt="Close-up of a single tracker row showing the torque tube and drive assembly beneath the modules"
            width={1920}
            height={1080}
          />
        </Reveal>
      </section>

      <section className="container-g pb-20 md:pb-28">
        <SectionHead eyebrow="Summary" title="Design specification." className="mb-10" />
        <SpecSheet id="design" title="Design Specification" rows={designSpecs} />
        <Reveal delay={80}>
          <Link
            to="/specifications"
            className="mt-8 inline-flex cursor-pointer items-center gap-2 border-b border-[var(--line-blue)] pb-1 text-sm text-cyan transition-colors duration-200 hover:text-text"
          >
            View the full datasheet
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
