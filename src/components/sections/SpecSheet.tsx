import type { SpecRow } from "@/data/content";
import { Reveal } from "@/components/g/Reveal";

export function SpecSheet({
  id,
  title,
  rows,
}: {
  id: string;
  title: string;
  rows: SpecRow[];
}) {
  return (
    <Reveal>
      <section
        id={id}
        aria-labelledby={`${id}-title`}
        className="scroll-mt-28 overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface)]"
      >
        <div className="flex items-center justify-between border-b border-[var(--line)] bg-[var(--bg-elev)] px-6 py-4">
          <h2 id={`${id}-title`} className="font-mono text-xs uppercase tracking-[0.22em] text-cyan">
            {title}
          </h2>
          <span className="font-mono text-xs text-[var(--text-3)]">{rows.length} rows</span>
        </div>
        <dl>
          {rows.map((r) => (
            <div
              key={r.label}
              className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 border-b border-[var(--line)] px-6 py-4 transition-colors duration-200 last:border-b-0 hover:bg-[rgba(0,127,255,0.06)]"
            >
              <dt className="text-sm text-[var(--text-3)]">{r.label}</dt>
              <dd className="text-right font-mono text-sm text-text">{r.value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </Reveal>
  );
}
