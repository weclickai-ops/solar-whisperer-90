import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy URL — the datasheet now lives at /specifications. */
export const Route = createFileRoute("/specs")({
  beforeLoad: () => {
    throw redirect({ to: "/specifications", replace: true });
  },
});
