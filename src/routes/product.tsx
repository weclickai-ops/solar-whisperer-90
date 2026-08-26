import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Eyebrow } from "@/components/g/Eyebrow";
import { GButtonLink } from "@/components/g/GButton";
import { GCard, GCardBody, GCardTitle } from "@/components/g/Card";
import { CtaBand } from "@/components/g/CtaBand";
import { Placeholder } from "@/components/g/Placeholder";
import { Reveal } from "@/components/g/Reveal";
import { SectionHead } from "@/components/g/SectionHead";
import { SpecTable } from "@/components/g/SpecTable";
import { Cutaway } from "@/components/svg/Cutaway";
import { ctas, productPage, siteUrl, type ConfigKey } from "@/data/content";
import { routeHead } from "@/lib/seo";

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: productPage.name,
  description: productPage.description,
  category: "Solar tracker",
  brand: { "@type": "Brand", name: "Glarenergy" },
  url: `${siteUrl}/product`,
  additionalProperty: [
    { "@type": "PropertyValue", name: "Tracking accuracy", value: "±2°" },
    { "@type": "PropertyValue", name: "Rotation range", value: "±45° to ±60°" },
    { "@type": "PropertyValue", name: "Wind stow", value: "0° at 180 km/h" },
    { "@type": "PropertyValue", name: "Tracker length", value: "50–100 m" },
    { "@type": "PropertyValue", name: "Module count", value: "Up to 100" },
    { "@type": "PropertyValue", name: "Operating temperature", value: "−15 °C to 60 °C" },
  ],
};

export const Route = createFileRoute("/product")({
  head: () => {
    const base = routeHead("/product");
    return {
      ...base,
      scripts: [{ type: "application/ld+json", children: JSON.stringify(productSchema) }],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const [config, setConfig] = useState<ConfigKey>("2p");
  const active = productPage.configs[config];

  return (
    <>
      {/* Product hero */}
      <section className="container-g grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <Reveal>
          <Eyebrow className="mb-6">{productPage.eyebrow}</Eyebrow>
          <h1>{productPage.name}</h1>
          <p className="mono-label mt-4 text-cyan">{productPage.fullName}</p>
          <p className="lede mt-6">{productPage.description}</p>
          <div className="mt-9">
            <GButtonLink to="/contact">{productPage.cta}</GButtonLink>
          </div>

          <div
            className="mt-10 inline-flex rounded-full border border-[var(--line-2)] p-1"
            role="group"
            aria-label="Tracker configuration"
          >
            {(Object.keys(productPage.configs) as ConfigKey[]).map((key) => {
              const selected = key === config;
              return (
                <button
                  key={key}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setConfig(key)}
                  className="min-h-11 rounded-full px-5 text-[0.875rem] font-medium transition-colors"
                  style={{
                    background: selected ? "var(--blue)" : "transparent",
                    color: selected ? "#fff" : "var(--text-2)",
                  }}
                >
                  {productPage.configs[key].label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal index={1} className="rounded-2xl border border-[var(--line)] bg-[var(--bg-elev)] p-4">
          <Cutaway />
        </Reveal>
      </section>

      {/* Configuration */}
      <section className="section-g border-t border-[var(--line)]">
        <div className="container-g grid gap-12 lg:grid-cols-2">
          <SectionHead
            eyebrow="Configuration"
            heading="One platform, two configurations."
            lede="Both configurations share the same drive, control and protection behaviour. Only the module arrangement and axis differ."
          />
          <Reveal index={1}>
            <p className="mono-label mb-4 text-cyan">{active.label}</p>
            <SpecTable rows={active.rows} />
          </Reveal>
        </div>
      </section>

      {/* Assembly and components */}
      <section className="section-g border-t border-[var(--line)]">
        <div className="container-g">
          <SectionHead
            eyebrow={productPage.assembly.eyebrow}
            heading={productPage.assembly.heading}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {productPage.assembly.cards.map((card, i) => (
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

      {/* In service */}
      <section className="section-g border-t border-[var(--line)]">
        <div className="container-g grid items-center gap-12 lg:grid-cols-2">
          <SectionHead
            eyebrow={productPage.service.eyebrow}
            heading={productPage.service.heading}
            lede={productPage.service.body}
          />
          <Reveal index={1}>
            <Placeholder
              label={productPage.service.placeholder.label}
              dimensions={productPage.service.placeholder.dimensions}
            />
          </Reveal>
        </div>
      </section>

      <CtaBand {...ctas.product} />
    </>
  );
}
