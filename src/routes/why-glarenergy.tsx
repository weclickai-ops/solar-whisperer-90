import { createFileRoute, redirect } from "@tanstack/react-router";

/** /why-glarenergy was folded into the home page. 301 to keep indexed URLs alive. */
export const Route = createFileRoute("/why-glarenergy")({
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 301 });
  },
});
