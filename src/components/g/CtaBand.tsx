import { ArrowRight } from "lucide-react";
import { cta } from "@/data/content";
import { GLinkButton } from "./GButton";
import { Reveal } from "./Reveal";

export function CtaBand() {
  return (
    <section className="container-g py-20 md:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-[var(--line-blue)] bg-[var(--bg-elev)] px-6 py-16 text-center md:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 70% at 50% -10%, rgba(0,127,255,0.28), transparent 70%)",
            }}
          />
          <div className="relative flex flex-col items-center gap-6">
            <h2 className="max-w-[18ch] text-balance">{cta.heading}</h2>
            <p className="lede mx-auto text-center">{cta.body}</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <GLinkButton to="/contact">
                {cta.primary}
                <ArrowRight size={15} aria-hidden="true" />
              </GLinkButton>
              <GLinkButton to="/contact" variant="ghost">
                {cta.secondary}
              </GLinkButton>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
