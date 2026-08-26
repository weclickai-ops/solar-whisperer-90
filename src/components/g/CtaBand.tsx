import { GButtonLink } from "./GButton";
import { Reveal } from "./Reveal";

/** The one full blue-bordered band each page ends on. */
export function CtaBand({
  heading,
  body,
  label,
  to,
}: {
  heading: string;
  body: string;
  label: string;
  to: string;
}) {
  return (
    <section className="section-g relative z-10">
      <div className="container-g">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-2xl border px-6 py-14 text-center sm:px-12"
            style={{
              borderColor: "rgba(0,127,255,.45)",
              backgroundColor: "var(--bg-elev)",
            }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(60% 90% at 50% 0%, rgba(0,127,255,.22), transparent 70%)",
              }}
            />
            <div className="relative mx-auto max-w-2xl">
              <h2>{heading}</h2>
              <p className="lede mx-auto mt-5">{body}</p>
              <div className="mt-8 flex justify-center">
                <GButtonLink to={to}>{label}</GButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
