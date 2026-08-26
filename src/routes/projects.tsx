import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy URL — no project case studies are published; route enquiries to contact. */
export const Route = createFileRoute("/projects")({
  beforeLoad: () => {
    throw redirect({ to: "/contact", replace: true });
  },
});
