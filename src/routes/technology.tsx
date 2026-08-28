import { createFileRoute, redirect } from "@tanstack/react-router";

/** Merged into the Product page. */
export const Route = createFileRoute("/technology")({
  beforeLoad: () => {
    throw redirect({ to: "/product", hash: "technology", replace: true });
  },
});
