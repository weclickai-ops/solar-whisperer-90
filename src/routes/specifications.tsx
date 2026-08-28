import { createFileRoute, redirect } from "@tanstack/react-router";

/** Merged into the Product page. */
export const Route = createFileRoute("/specifications")({
  beforeLoad: () => {
    throw redirect({ to: "/product", hash: "specifications", replace: true });
  },
});
