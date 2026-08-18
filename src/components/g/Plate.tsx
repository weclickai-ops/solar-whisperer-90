import { cn } from "@/lib/utils";

/**
 * Photographic plate. Renders an image inside a fixed aspect-ratio box
 * (zero layout shift) with the shared Glarenergy grade: desaturated, crushed
 * blacks, blue wash overlay and a gradient fade into the page background.
 *
 * Replace the files in /public/images/ with real Glarenergy site photography
 * using the same filenames — no code changes needed.
 */
export function Plate({
  src,
  alt,
  width,
  height,
  className,
  imgClassName,
  priority = false,
  fade = "both",
  rounded = true,
  overlay,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  fade?: "both" | "bottom" | "none";
  rounded?: boolean;
  overlay?: React.ReactNode;
}) {
  const mask =
    fade === "none"
      ? undefined
      : fade === "bottom"
        ? "linear-gradient(to bottom, #000 55%, transparent 100%)"
        : "linear-gradient(to bottom, transparent 0%, #000 18%, #000 82%, transparent 100%)";

  return (
    <figure
      className={cn(
        "relative isolate m-0 overflow-hidden border border-[var(--line)] bg-[var(--bg-elev)]",
        rounded && "rounded-[1.5rem]",
        className,
      )}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        {...(priority ? { fetchPriority: "high" as const } : {})}
        decoding="async"
        className={cn("plate-media h-full w-full object-cover", imgClassName)}
        style={mask ? { maskImage: mask, WebkitMaskImage: mask } : undefined}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mix-blend-overlay"
        style={{
          background: "linear-gradient(rgba(0,127,255,0.14), rgba(4,6,12,0.55))",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(4,6,12,0.25), rgba(4,6,12,0.65))",
        }}
      />
      {overlay}
    </figure>
  );
}