import { useState } from "react";
import { configurations } from "@/data/content";
import { ConfigDiagram } from "@/components/svg/ConfigDiagram";
import { SectionHead } from "@/components/g/SectionHead";
import { Reveal } from "@/components/g/Reveal";
import { cn } from "@/lib/utils";

export function ConfigComparator() {
  const [tab, setTab] = useState<string>(configurations[0].id);
  const cfg = configurations.find((c) => c.id === tab) ?? configurations[0];

  return (
    <section className="container-g py-20 md:py-28">
      <SectionHead
        eyebrow="Configurations"
        title="1P and 2P, one drive philosophy."
        lede="Both configurations share the same single-point drive system and control electronics. The difference is how the modules are arranged."
      />

      <Reveal delay={80} className="mt-12">
        <div
          role="tablist"
          aria-label="Tracker configuration"
          className="inline-flex rounded-full border border-[var(--line)] bg-[var(--surface)] p-1"
        >
          {configurations.map((c) => (
            <button
              key={c.id}
              role="tab"
              type="button"
              aria-selected={tab === c.id}
              onClick={() => setTab(c.id)}
              className={cn(
                "min-h-11 cursor-pointer rounded-full px-6 font-mono text-xs uppercase tracking-[0.16em] transition-colors duration-200",
                tab === c.id ? "bg-blue text-white" : "text-[var(--text-3)] hover:text-text",
              )}
            >
              {c.tab}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-8 rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-6 md:grid-cols-2 md:p-8">
          <ConfigDiagram rowsPerTracker={cfg.id === "2p" ? 2 : 1} />
          <dl className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {cfg.rows.map((r) => (
              <div key={r.label} className="grid grid-cols-1 gap-1 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-4 py-4">
                <dt className="text-sm text-[var(--text-3)]">{r.label}</dt>
                <dd className="text-right font-mono text-sm text-text">{r.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </section>
  );
}
