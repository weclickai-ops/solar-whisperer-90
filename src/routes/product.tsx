import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { designSpecs, product } from "@/data/content";
import { PageHeader } from "@/components/g/PageHeader";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { ConfigComparator } from "@/components/sections/ConfigComparator";
import { SpecSheet } from "@/components/sections/SpecSheet";
import { CtaBand } from "@/components/g/CtaBand";
import { GCard } from "@/components/g/GCard";
import { Reveal } from "@/components/g/Reveal";
import { SectionHead } from "@/components/g/SectionHead";

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

      <section className="container-g pb-20 md:pb-28">
        <SectionHead eyebrow="Summary" title="Design specification." className="mb-10" />
        <SpecSheet id="design" title="Design Specification" rows={designSpecs} />
        <Reveal delay={80}>
          <Link
            to="/specs"
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
