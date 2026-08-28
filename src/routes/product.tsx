import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Eyebrow } from "@/components/g/Eyebrow";
import { GButtonLink } from "@/components/g/GButton";
import { GCard, GCardBody, GCardTitle } from "@/components/g/Card";
import { CtaBand } from "@/components/g/CtaBand";
import { Placeholder } from "@/components/g/Placeholder";
import { PhotoStrip } from "@/components/g/PhotoStrip";
import { Reveal } from "@/components/g/Reveal";
import { SectionHead } from "@/components/g/SectionHead";
import { SpecTable } from "@/components/g/SpecTable";
import { Cutaway } from "@/components/svg/Cutaway";
import { FeatureIcon } from "@/components/svg/FeatureIcon";
import { YieldCurve } from "@/components/svg/YieldCurve";
import {
  contactPage,
  contactRows,
  ctas,
  home,
  productPage,
  siteUrl,
  specifications,
  technology,
  type ConfigKey,
} from "@/data/content";
import { routeHead } from "@/lib/seo";

/**
 * The single product page. Product, technology and specifications used to be
 * three separate routes; they are one document now, in that reading order,
 * followed by contact. `/technology`, `/specifications` and `/specs` redirect
 * into the anchors below; about has its own route.
 */

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

/** The five parts of the page, in order, for the jump rail under the hero. */
const PARTS = [
  { id: "product", label: "Product" },
  { id: "technology", label: "Technology" },
  { id: "specifications", label: "Specifications" },
  { id: "contact", label: "Contact" },
] as const;

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
  const [activeBlock, setActiveBlock] = useState<string>(specifications.blocks[0]!.id);
  const active = productPage.configs[config];

  // Highlights whichever datasheet block is currently under the header.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible[0]) setActiveBlock(visible[0].target.id);
      },
      { rootMargin: "-96px 0px -60% 0px", threshold: 0 },
    );
    specifications.blocks.forEach((block) => {
      const el = document.getElementById(block.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ---------------------------------------------------------- PRODUCT */}
      <section
        id="product"
        className="container-g grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24"
      >
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

        <Reveal
          index={1}
          className="rounded-2xl border border-[var(--line)] bg-[var(--bg-elev)] p-4"
        >
          <Cutaway />
        </Reveal>
      </section>

      {/* Jump rail — five parts on one page need somewhere to be reached from. */}
      <nav
        aria-label="Sections of this page"
        className="sticky top-[calc(5rem+1px)] z-30 border-y border-[var(--line)] backdrop-blur print:hidden"
        style={{ background: "rgba(4,6,12,.82)" }}
      >
        <ul className="container-g flex gap-1 overflow-x-auto">
          {PARTS.map((part) => (
            <li key={part.id}>
              <a
                href={`#${part.id}`}
                className="mono-label flex min-h-11 items-center whitespace-nowrap px-4 text-[var(--text-3)] transition-colors hover:text-[var(--text)]"
              >
                {part.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Configuration */}
      <section className="section-g">
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

      {/* Design features */}
      <section className="section-g border-t border-[var(--line)]">
        <div className="container-g">
          <SectionHead
            eyebrow="Design features"
            heading="Built for the conditions a plant actually meets."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {home.why.cards.map((card, i) => (
              <Reveal key={card.title} index={i}>
                <div className="flex h-full flex-col rounded-xl border border-[var(--line)] bg-[var(--surface)] p-7 transition-[transform,border-color] duration-[220ms] hover:-translate-y-[3px] hover:border-[var(--line-blue)]">
                  <span className="text-cyan">
                    <FeatureIcon name={card.title} />
                  </span>
                  <h3 className="mt-6 text-[1.0625rem]">{card.title}</h3>
                  <p className="mt-3 text-[0.9375rem]">{card.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
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

      {/* Manufacturing facility */}
      <section className="section-g border-t border-[var(--line)]">
        <div className="container-g">
          <SectionHead
            eyebrow={productPage.facility.eyebrow}
            heading={productPage.facility.heading}
          />
        </div>
        <Reveal className="mt-12">
          <PhotoStrip items={productPage.facility.photos} />
        </Reveal>
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

      {/* ------------------------------------------------------- TECHNOLOGY */}
      <section id="technology" className="section-g scroll-mt-32 border-t border-[var(--line)]">
        <div className="container-g">
          <SectionHead
            eyebrow={technology.eyebrow}
            heading={technology.heading}
            lede={technology.lede}
          />
        </div>
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
          <Reveal
            index={1}
            className="rounded-xl border border-[var(--line)] bg-[var(--bg-elev)] p-4"
          >
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

      {/* --------------------------------------------------- SPECIFICATIONS */}
      <section id="specifications" className="section-g scroll-mt-32 border-t border-[var(--line)]">
        <div className="container-g">
          <SectionHead
            eyebrow={specifications.eyebrow}
            heading={specifications.heading}
            lede={specifications.lede}
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-[200px_1fr] lg:gap-14">
            <nav aria-label="Specification sections" className="hidden lg:block print:hidden">
              <ul className="sticky top-32 space-y-1">
                {specifications.blocks.map((block) => (
                  <li key={block.id}>
                    <a
                      href={`#${block.id}`}
                      aria-current={activeBlock === block.id ? "true" : undefined}
                      className="mono-label flex min-h-11 items-center border-l px-4 transition-colors"
                      style={{
                        borderColor: activeBlock === block.id ? "var(--blue)" : "var(--line)",
                        color: activeBlock === block.id ? "var(--cyan)" : "var(--text-3)",
                      }}
                    >
                      {block.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="space-y-8">
              {specifications.blocks.map((block, i) => (
                <Reveal key={block.id} index={i}>
                  <section
                    id={block.id}
                    aria-labelledby={`${block.id}-title`}
                    className="sheet scroll-mt-32 overflow-hidden rounded-xl border border-[var(--line)]"
                  >
                    <div
                      className="border-b border-[var(--line)] px-5 py-3"
                      style={{ background: "rgba(255,255,255,.03)" }}
                    >
                      <h3 id={`${block.id}-title`} className="mono-label text-cyan">
                        {block.title}
                      </h3>
                    </div>
                    <dl>
                      {block.rows.map((row) => (
                        <div
                          key={row.label}
                          className="flex flex-wrap items-baseline justify-between gap-3 border-b border-[var(--line)] px-5 py-3.5 last:border-b-0 transition-colors hover:bg-[rgba(255,255,255,.025)]"
                        >
                          <dt className="text-[0.9375rem] text-[var(--text-3)]">{row.label}</dt>
                          <dd className="font-mono text-[0.875rem] text-[var(--text)]">
                            {row.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </section>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- CONTACT */}
      <section id="contact" className="section-g scroll-mt-32 border-t border-[var(--line)]">
        <div className="container-g grid gap-12 lg:grid-cols-2">
          <SectionHead
            eyebrow={contactPage.eyebrow}
            heading={contactPage.heading}
            lede={contactPage.lede}
          >
            <div className="mt-9">
              <GButtonLink to="/contact">Open the enquiry form →</GButtonLink>
            </div>
          </SectionHead>

          <Reveal index={1}>
            <ul>
              {contactRows.map((row) => (
                <li
                  key={`${row.label}-${row.value}`}
                  className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--line)] py-4 first:border-t"
                >
                  <span className="mono-label text-[var(--text-3)]">{row.label}</span>
                  <a
                    href={row.href}
                    {...(row.external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="min-h-11 content-center text-[0.9375rem] text-[var(--text)] hover:text-cyan"
                  >
                    {row.value}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand {...ctas.product} />
    </>
  );
}
