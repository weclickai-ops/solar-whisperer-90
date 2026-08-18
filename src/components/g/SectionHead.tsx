import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

export function SectionHead({
  eyebrow,
  title,
  lede,
  align = "left",
  className,
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h2" | "h3";
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Heading className="max-w-[20ch]">{title}</Heading>
      {lede ? <p className={cn("lede", align === "center" && "mx-auto")}>{lede}</p> : null}
    </Reveal>
  );
}
