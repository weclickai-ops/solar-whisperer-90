import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { product, productHotspots } from "@/data/content";
import { ProductCutaway } from "@/components/svg/ProductCutaway";
import { Eyebrow } from "@/components/g/Eyebrow";
import { Reveal } from "@/components/g/Reveal";
import { cn } from "@/lib/utils";

export function ProductShowcase({ showLink = true }: { showLink?: boolean }) {
  const [active, setActive] = useState<string>(productHotspots[0]?.id ?? "");
  const current = productHotspots.find((h) => h.id === active) ?? productHotspots[0];

  return (
    <section className="container-g py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <Reveal className="lg:sticky lg:top-28">
          <ProductCutaway active={active} onSelect={setActive} />
        </Reveal>

        <Reveal delay={80} className="flex flex-col gap-8">
          <Eyebrow>The Product</Eyebrow>
          <div className="flex flex-col gap-4">
            <h2>
              {product.name}
              <span className="mt-2 block font-body text-base font-normal text-[var(--text-3)]">
                {product.fullName}
              </span>
            </h2>
            <p className="lede">{product.description}</p>
          </div>

          <ul className="flex flex-col divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {productHotspots.map((h) => (
              <li key={h.id}>
                <button
                  type="button"
                  aria-pressed={h.id === active}
                  onClick={() => setActive(h.id)}
                  className={cn(
                    "flex w-full cursor-pointer items-start gap-4 py-4 text-left transition-colors duration-200",
                    h.id === active ? "text-text" : "text-[var(--text-3)] hover:text-[var(--text-2)]",
                  )}
                >
                  <span
                    className={cn(
                      "mt-0.5 font-mono text-xs",
                      h.id === active ? "text-cyan" : "text-[var(--text-3)]",
                    )}
                  >
                    {h.number}
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="font-display text-lg">{h.title}</span>
                    {h.id === active ? (
                      <span className="text-sm text-[var(--text-2)]">{h.description}</span>
                    ) : null}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <p className="sr-only">
            Selected component: {current?.title}. {current?.description}
          </p>

          {showLink ? (
            <Link
              to="/specs"
              className="inline-flex w-fit cursor-pointer items-center gap-2 border-b border-[var(--line-blue)] pb-1 text-sm text-cyan transition-colors duration-200 hover:text-text"
            >
              View full specifications
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
