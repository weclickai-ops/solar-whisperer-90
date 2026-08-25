import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { productPages } from "@/data/content";
import { Eyebrow } from "@/components/g/Eyebrow";
import { Reveal } from "@/components/g/Reveal";
import { SectionHead } from "@/components/g/SectionHead";
import { GCard } from "@/components/g/GCard";
import { GLinkButton } from "@/components/g/GButton";
import { Plate } from "@/components/g/Plate";
import { SpecSheet } from "@/components/sections/SpecSheet";
import { CtaBand } from "@/components/g/CtaBand";

export const Route = createFileRoute("/products/$productId")({
  loader: ({ params }) => {
    const page = productPages.find((p) => p.id === params.productId);
    if (!page) throw notFound();
    return page;
  },
  head: ({ loaderData, params }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.name} ${loaderData.fullName.split("—")[0]?.trim() ?? ""} — Glarenergy`
          : "Product — Glarenergy",
      },
      {
        name: "description",
        content: loaderData?.positioning ?? "Glarenergy single-axis solar tracker.",
      },
      {
        property: "og:title",
        content: loaderData ? `${loaderData.name} — Glarenergy` : "Product — Glarenergy",
      },
      { property: "og:description", content: loaderData?.positioning ?? "" },
      {
        property: "og:url",
        content: `https://solar-whisperer-90.lovable.app/products/${params.productId}`,
      },
    ],
    links: [
      {
        rel: "canonical",
        href: `https://solar-whisperer-90.lovable.app/products/${params.productId}`,
      },
    ],
  }),
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const page = Route.useLoaderData();

  return (
    <>
      {/* Product hero */}
      <section className="border-b border-[var(--line)] pt-36 pb-16 md:pt-44 md:pb-24">
        <div className="container-g grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6">
            <Reveal>
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--text-3)]">
                  <li>
                    <Link to="/" className="cursor-pointer transition-colors hover:text-text">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link to="/product" className="cursor-pointer transition-colors hover:text-text">
                      Products
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li className="text-[var(--text-2)]">{page.name}</li>
                </ol>
              </nav>
            </Reveal>
            <Reveal delay={60}>
              <Eyebrow>{page.fullName}</Eyebrow>
            </Reveal>
            <Reveal delay={110}>
              <h1 className="max-w-[14ch] text-balance">{page.name}</h1>
            </Reveal>
            <Reveal delay={170}>
              <p className="lede">{page.positioning}</p>
            </Reveal>
            <Reveal delay={220}>
              <div className="flex flex-wrap gap-3">
                <GLinkButton to="/contact">
                  Enquire Now
                  <ArrowRight size={15} aria-hidden="true" />
                </GLinkButton>
                <GLinkButton to="/specs" variant="ghost">
                  Full Datasheet
                </GLinkButton>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <Plate
              src={page.image.src}
              alt={page.image.alt}
              width={1920}
              height={1080}
              loading="eager"
            />
          </Reveal>
        </div>
      </section>

      {/* Overview — what / problem / where */}
      <section className="container-g py-20 md:py-28">
        <SectionHead eyebrow="Overview" title={`What the ${page.name} does.`} />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {(
            [
              { label: "What it is", text: page.overview.what },
              { label: "The problem it solves", text: page.overview.problem },
              { label: "Where it's used", text: page.overview.where },
            ] as const
          ).map((item, i) => (
            <Reveal key={item.label} delay={i * 70}>
              <div className="flex h-full flex-col gap-3 rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface)] p-7">
                <p className="label-sm text-[var(--text-3)]">{item.label}</p>
                <p className="text-sm">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Key features */}
      <section className="container-g pb-20 md:pb-28">
        <SectionHead eyebrow="Key Features" title="Engineered in, not bolted on." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {page.features.map((f, i) => (
            <Reveal key={f.title} delay={i * 50}>
              <GCard className="h-full">
                <p className="font-mono text-xs text-cyan">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-3 font-display text-lg">{f.title}</h2>
                <p className="mt-2 text-sm">{f.description}</p>
              </GCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="container-g pb-20 md:pb-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHead
            eyebrow="Benefits"
            title="The value, in plain terms."
            lede="Outcomes for your plant — not just specifications."
          />
          <ul className="flex flex-col gap-3">
            {page.benefits.map((b, i) => (
              <Reveal as="li" key={b} delay={i * 50}>
                <div className="flex items-center gap-4 rounded-2xl border border-[var(--line)] px-5 py-4 transition-colors duration-200 hover:border-[var(--line-blue)]">
                  <span className="font-mono text-xs text-cyan">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-[var(--text-2)]">{b}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Technical information */}
      <section className="container-g pb-20 md:pb-28">
        <SectionHead
          eyebrow="Technical Information"
          title="Specification."
          className="mb-10"
        />
        <SpecSheet id={`specs-${page.id}`} title={`${page.name} — Design Specification`} rows={page.specs} />
      </section>

      <CtaBand />
    </>
  );
}
