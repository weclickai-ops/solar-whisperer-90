export function ConfigDiagram({ rowsPerTracker }: { rowsPerTracker: 1 | 2 }) {
  return (
    <svg
      viewBox="0 0 420 180"
      role="img"
      aria-label={
        rowsPerTracker === 2
          ? "Diagram of a dual-row portrait module arrangement on one torque tube"
          : "Diagram of a single-row portrait module arrangement on one torque tube"
      }
      className="w-full rounded-2xl border border-[var(--line)] bg-[var(--surface)]"
    >
      <title>{rowsPerTracker === 2 ? "2P module arrangement" : "1P module arrangement"}</title>
      <line x1="30" y1="120" x2="390" y2="120" stroke="rgba(174,185,214,0.5)" strokeWidth="2" />
      {[70, 210, 350].map((x) => (
        <line key={x} x1={x} y1="120" x2={x} y2="152" stroke="rgba(174,185,214,0.45)" strokeWidth="2" />
      ))}
      <g transform="translate(210 120) rotate(-14)">
        {rowsPerTracker === 2 ? (
          <>
            <rect x="-170" y="-30" width="164" height="26" rx="2" fill="#123A66" stroke="rgba(63,212,255,0.6)" />
            <rect x="6" y="-30" width="164" height="26" rx="2" fill="#123A66" stroke="rgba(63,212,255,0.6)" />
          </>
        ) : (
          <rect x="-90" y="-30" width="180" height="26" rx="2" fill="#123A66" stroke="rgba(63,212,255,0.6)" />
        )}
      </g>
      <line x1="30" y1="152" x2="390" y2="152" stroke="var(--line)" />
    </svg>
  );
}
