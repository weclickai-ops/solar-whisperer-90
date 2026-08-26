import type { ReactNode } from "react";

import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function SectionHead({
  eyebrow,
  heading,
  lede,
  className,
  children,
}: {
  eyebrow?: string;
  heading: string;
  lede?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      {eyebrow ? <Eyebrow className="mb-5">{eyebrow}</Eyebrow> : null}
      <h2>{heading}</h2>
      {lede ? <p className="lede mt-6">{lede}</p> : null}
      {children}
    </Reveal>
  );
}
