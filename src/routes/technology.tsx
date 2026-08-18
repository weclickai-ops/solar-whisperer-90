import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageHeader } from "@/components/g/PageHeader";
import { CtaBand } from "@/components/g/CtaBand";
import { Reveal } from "@/components/g/Reveal";
import { Eyebrow } from "@/components/g/Eyebrow";
import { SunTrackDiagram } from "@/components/svg/SunTrackDiagram";
import { TerrainProfile } from "@/components/svg/TerrainProfile";
import { EnergyCurve } from "@/components/svg/EnergyCurve";
import { ConfigDiagram } from "@/components/svg/ConfigDiagram";
import { TechIcon } from "@/components/svg/TechIcon";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Tracking Technology — Glarenergy" },
      {
        name: "description",
        content:
          "Astronomical + intelligent tracking, single-point linear actuator drive, backtracking, nighttime stow and 180 km/h wind protection.",
      },
      { property: "og:title", content: "Tracking Technology — Glarenergy" },
      {
        property: "og:description",
        content:
          "How Glarenergy trackers calculate, move, optimize and protect — controls, drive, stow and communications.",
      },
    ],
  }),
  component: Technology,
});

type Block = {
  eyebrow: string;
  title: string;
  body: string[];
  visual: ReactNode;
};

const blocks: Block[] = [
  {
    eyebrow: "Control",
    title: "Astronomical, then intelligent.",
    body: [
      "The tracking algorithm is astronomical + intelligent: the sun's position is calculated, then the controller continuously derives the required tracker angle and holds it to ±2°.",
      "One controller is deployed per tracker, so each row is commanded independently rather than driven from a single plant-wide position.",
    ],
    visual: <SunTrackDiagram />,
  },
  {
    eyebrow: "Drive",
    title: "One actuator. One axis.",
    body: [
      "Motion comes from a single point linear actuator powered by a 24V DC motor, rotating the structure through a ±45° to ±60° range.",
      "The low-profile dual-row structure is galvanized or Mg-Zn coated for corrosion resistance, founded on ramming, pre-drill or PHC piles.",
    ],
    visual: <ConfigDiagram rowsPerTracker={2} />,
  },
  {
    eyebrow: "Optimization",
    title: "Backtracking removes row shading.",
    body: [
      "Backtracking is supported, with a 3D option, so early-morning and late-afternoon rows step back off their neighbours instead of shading them.",
      "Across a full day this widens the generation curve, delivering 15–25% more energy than a fixed-tilt system.",
    ],
    visual: <EnergyCurve />,
  },
  {
    eyebrow: "Protection & Terrain",
    title: "Stow, survive, and follow the ground.",
    body: [
      "In extreme wind the tracker moves to a 0° stow position, rated for survival at 180 km/h. Nighttime stow runs on schedule.",
      "Installation tolerates 10% north–south and 10% east–west slope, with a ground coverage ratio above 15% and operation from -15°C to 60°C.",
    ],
    visual: <TerrainProfile />,
  },
];

const comms = [
  { title: "Zigbee mesh", description: "Wireless mesh communication between trackers." },
  { title: "Ethernet", description: "Wired plant-level communication." },
  { title: "RS485", description: "Serial communication support." },
];

function Technology() {
  return (
    <>
      <PageHeader
        breadcrumb="Technology"
        eyebrow="Systems deep dive"
        title="The engineering behind every degree."
        lede="Tracking is a control problem, a mechanical problem and a survival problem at once. Here is how each one is solved."
      />

      {blocks.map((b, i) => (
        <section key={b.title} className="container-g py-16 md:py-24">
          <div
            className={cn(
              "grid gap-12 lg:grid-cols-2 lg:items-center",
              i % 2 === 1 && "lg:[&>*:first-child]:order-2",
            )}
          >
            <Reveal>{b.visual}</Reveal>
            <Reveal delay={80} className="flex flex-col gap-5">
              <Eyebrow>{b.eyebrow}</Eyebrow>
              <h2>{b.title}</h2>
              {b.body.map((p) => (
                <p key={p} className="lede">
                  {p}
                </p>
              ))}
            </Reveal>
          </div>
        </section>
      ))}

      <section className="container-g py-16 md:py-24">
        <Reveal className="flex flex-col gap-5">
          <Eyebrow>Communications</Eyebrow>
          <h2>Three ways to reach the tracker.</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {comms.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <div className="h-full rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 transition-colors duration-200 hover:border-[var(--line-blue)]">
                <TechIcon name={c.title} />
                <h3 className="mt-5 font-display text-lg">{c.title}</h3>
                <p className="mt-2 text-sm">{c.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
