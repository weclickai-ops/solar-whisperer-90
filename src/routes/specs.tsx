import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy URL — the datasheet is a section of the Product page. */
export const Route = createFileRoute("/specs")({
  beforeLoad: () => {
    throw redirect({ to: "/product", hash: "specifications", replace: true });
  },
});
