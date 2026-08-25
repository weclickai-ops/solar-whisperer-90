import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { figures, projectFields, projectsStatus, projectStoryFields } from "@/data/content";
import { PageHeader } from "@/components/g/PageHeader";
import { SectionHead } from "@/components/g/SectionHead";
import { Reveal } from "@/components/g/Reveal";
import { CtaBand } from "@/components/g/CtaBand";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Case Studies — Glarenergy" },
      {
        name: "description",
        content:
          "Glarenergy tracker deployments and case studies: capacity, technology, challenge, solution and measured results — published as project data is verified.",
      },
      { property: "og:title", content: "Projects & Case Studies — Glarenergy" },
      {
        property: "og:description",
        content:
          "Utility-scale solar tracker case studies, published as verified project data becomes available.",
      },
      { property: "og:url", content: "https://solar-whisperer-90.lovable.app/projects" },
    ],
    links: [
      { rel: "canonical", href: "https://solar-whisperer-90.lovable.app/projects" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Projects"
        eyebrow="Projects & Case Studies"
        title="Proof, published when it's measured."
        lede="Every Glarenergy case study follows the same structure: the requirement, the solution we delivered, and the verified result."
      />

      {/* Deployment goal */}
      <section className="container-g py-20 md:py-24" aria-label="Deployment goal">
        <Reveal>
          <div className="grid gap-8 rounded-[2rem] border border-[var(--line-blue)] bg-[var(--bg-elev)] p-8 md:grid-cols-[auto_minmax(0,1fr)] md:items-center md:p-12">
            <p className="font-display text-6xl leading-none text-gradient-cyan md:text-7xl">
              {figures.goal.value}
            </p>
            <div className="flex flex-col gap-2">
              <p className="label-sm text-[var(--text-3)]">Deployment goal by 2030</p>
              <p className="max-w-[52ch] text-sm">
                Our mission is to install 1 GW of solar plants equipped with Glarenergy trackers by
                2030 — each one a future case study on this page.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Case-study framework */}
      <section className="container-g pb-20 md:pb-28">
        <SectionHead
          eyebrow="How we report projects"
          title="Every project, the same honest structure."
          lede="No inflated claims and no placeholders presented as results. When a project is documented, it appears here in this format."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col gap-6 rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface)] p-7 md:p-9">
              <p className="label-sm text-[var(--text-3)]">The facts</p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {projectFields.map((f) => (
                  <li
                    key={f}
                    className="rounded-xl border border-[var(--line)] px-4 py-3 text-sm text-[var(--text-2)]"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="flex h-full flex-col gap-6 rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface)] p-7 md:p-9">
              <p className="label-sm text-[var(--text-3)]">The story</p>
              <ol className="flex flex-col gap-3">
                {projectStoryFields.map((f, i) => (
                  <li key={f} className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-cyan">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-[var(--text-2)]">{f}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-auto text-sm text-[var(--text-3)]">
                Results are shown only where actual project data is available.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Status */}
      <section className="container-g pb-20 md:pb-28">
        <Reveal>
          <div className="flex flex-col items-start gap-6 rounded-[1.5rem] border border-dashed border-[var(--line-2)] p-8 md:p-12">
            <p className="label-sm text-[var(--cyan)]">Status</p>
            <h2 className="max-w-[20ch]">{projectsStatus.heading}</h2>
            <p className="lede">{projectsStatus.body}</p>
            <Link
              to="/contact"
              className="label-sm inline-flex cursor-pointer items-center gap-2 border-b border-[var(--line-blue)] pb-1 text-cyan transition-colors duration-200 hover:text-text"
            >
              Have a project we should be tracking?
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
