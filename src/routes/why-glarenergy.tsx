import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy URL — the value propositions now live on the Home page. */
export const Route = createFileRoute("/why-glarenergy")({
  beforeLoad: () => {
    throw redirect({ to: "/", replace: true });
  },
});
