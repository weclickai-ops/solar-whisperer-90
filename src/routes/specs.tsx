import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { SpecRow } from "@/data/content";
import { PageHeader } from "@/components/g/PageHeader";
import { SpecSheet } from "@/components/sections/SpecSheet";
import { CtaBand } from "@/components/g/CtaBand";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/specs")({
  head: () => ({
    meta: [
      { title: "Tracker Datasheet & Specifications — Glarenergy" },
      {
        name: "description",
        content:
          "Full Glarenergy tracker specifications: mechanical, electrical, tracking and communication parameters.",
      },
      { property: "og:title", content: "Tracker Datasheet & Specifications — Glarenergy" },
      {
        property: "og:description",
        content:
          "Mechanical, electrical, tracking and communication specifications for the Glarenergy HSAT 2P and TSAT 1P trackers.",
      },
    ],
  }),
  component: Specs,
});

const mechanical: SpecRow[] = [
  { label: "Tracker Length", value: "50m – 100m" },
  { label: "Module Number", value: "Up to 100 modules" },
  { label: "Ground Coverage Ratio", value: ">15%" },
  { label: "Modules Support", value: "Commercial & Bifacial" },
  { label: "Operating Temperature", value: "-15°C to 60°C" },
  { label: "Foundation", value: "Ramming / Pre-drill / PHC" },
  { label: "Anti-Corrosion", value: "Galvanized / Mg-Zn Coated" },
  { label: "Tracking Type", value: "HSAT 2P & TSAT 1P" },
];

const electrical: SpecRow[] = [
  { label: "Motor Type", value: "24V DC Motor" },
  { label: "Drive Type", value: "Single point linear actuator" },
  { label: "Control System", value: "1 controller per tracker" },
];

const tracking: SpecRow[] = [
  { label: "Tracking Algorithm", value: "Astronomical + intelligent" },
  { label: "Tracking Accuracy", value: "±2°" },
  { label: "Rotation Range", value: "±45° to ±60°" },
  { label: "Backtracking", value: "Yes (3D optional)" },
  { label: "Nighttime Stow", value: "Yes" },
];

const communication: SpecRow[] = [
  { label: "Zigbee mesh", value: "Supported" },
  { label: "Ethernet", value: "Supported" },
  { label: "RS485", value: "Supported" },
];

const sheets = [
  { id: "mechanical", title: "Mechanical", rows: mechanical },
  { id: "electrical", title: "Electrical", rows: electrical },
  { id: "tracking", title: "Tracking", rows: tracking },
  { id: "communication", title: "Communication", rows: communication },
];

function Specs() {
  const [active, setActive] = useState(sheets[0]!.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );
    for (const s of sheets) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PageHeader
        breadcrumb="Specs"
        eyebrow="Datasheet"
        title="Every parameter, on one sheet."
        lede="Mechanical, electrical, tracking and communication specifications for the Glarenergy single-axis tracker platform."
      />

      <section className="container-g grid gap-10 py-20 md:py-28 lg:grid-cols-[14rem_minmax(0,1fr)]">
        <nav aria-label="Specification categories" className="hidden lg:block">
          <ul className="sticky top-28 flex flex-col gap-1 border-l border-[var(--line)]">
            {sheets.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={active === s.id ? "true" : undefined}
                  className={cn(
                    "-ml-px flex min-h-11 cursor-pointer items-center border-l pl-4 font-mono text-xs uppercase tracking-[0.18em] transition-colors duration-200 hover:border-blue hover:text-text",
                    active === s.id
                      ? "border-cyan text-text"
                      : "border-transparent text-[var(--text-3)]",
                  )}
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-6">
          {sheets.map((s) => (
            <SpecSheet key={s.id} id={s.id} title={s.title} rows={s.rows} />
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
