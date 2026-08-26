/**
 * Dashed frame standing in for photography that Glarenergy has not supplied.
 * The label states what belongs there and at what size — no stock imagery.
 */
export function Placeholder({
  label,
  dimensions,
  ratio = "4 / 3",
}: {
  label: string;
  dimensions: string;
  ratio?: string;
}) {
  return (
    <div
      className="flex w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-[var(--line-2)] bg-[var(--surface)] p-6 text-center"
      style={{ aspectRatio: ratio }}
    >
      <span className="mono-label text-[var(--text-2)]">{label}</span>
      <span className="font-mono text-[0.7rem] text-[var(--text-3)]">{dimensions}</span>
    </div>
  );
}
