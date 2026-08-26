import type { SpecRow } from "@/data/content";

/** Hairline label/value table used for terrain, configuration and mission rows. */
export function SpecTable({ rows }: { rows: readonly SpecRow[] }) {
  return (
    <dl className="sheet rounded-xl border border-[var(--line)]">
      {rows.map((row, i) => (
        <div
          key={row.label}
          className="flex items-center justify-between gap-6 px-5 py-4 transition-colors hover:bg-white/[.03]"
          style={{ borderTop: i === 0 ? "none" : "1px solid var(--line)" }}
        >
          <dt className="text-[0.9375rem] text-[var(--text-3)]">{row.label}</dt>
          <dd className="text-right font-mono text-[0.8125rem] text-[var(--text)]">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
