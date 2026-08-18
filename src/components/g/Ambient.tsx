/** Fixed atmospheric background: two soft washes + a masked technical grid. */
export function Ambient() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(70vw 45vh at 82% -12%, rgba(0,127,255,0.16), transparent 62%), radial-gradient(55vw 40vh at -8% 108%, rgba(63,212,255,0.08), transparent 62%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.028) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.028) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(120vw 90vh at 50% 0%, #000 12%, transparent 72%)",
          WebkitMaskImage: "radial-gradient(120vw 90vh at 50% 0%, #000 12%, transparent 72%)",
        }}
      />
    </div>
  );
}
