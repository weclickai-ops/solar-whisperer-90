import { Placeholder } from "./Placeholder";

export type StripItem = {
  /** What the photograph shows — also the alt text once `src` is supplied. */
  label: string;
  dimensions: string;
  /** Path under /public. Until it is set, the slot renders as a dashed frame. */
  src?: string;
};

/**
 * A row of photographs scrolling sideways on its own. The list is rendered
 * twice and the track travels exactly half its width, so the loop is seamless.
 *
 * Slots without a `src` fall back to the dashed Placeholder, which lets the
 * section ship before Glarenergy has supplied photography. Hovering or
 * focusing pauses the travel; under prefers-reduced-motion the animation is
 * dropped and the row becomes an ordinary horizontal scroller.
 */
export function PhotoStrip({
  items,
  seconds = 48,
}: {
  items: readonly StripItem[];
  seconds?: number;
}) {
  const doubled = [...items, ...items];

  return (
    <div
      className="photo-strip"
      style={{ "--strip-seconds": `${seconds}s` } as React.CSSProperties}
    >
      <ul className="photo-strip__track">
        {doubled.map((item, i) => {
          const isClone = i >= items.length;
          return (
            <li
              key={`${item.label}-${i}`}
              className="photo-strip__item"
              {...(isClone ? { "aria-hidden": true } : {})}
            >
              {item.src ? (
                <img
                  src={item.src}
                  alt={isClone ? "" : item.label}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full rounded-xl border border-[var(--line)] object-cover"
                />
              ) : (
                <Placeholder label={item.label} dimensions={item.dimensions} ratio="4 / 3" />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
