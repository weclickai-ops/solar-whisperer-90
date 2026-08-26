import { createFileRoute, redirect } from "@tanstack/react-router";

/**
 * /about was folded into the home page. Kept as a 301 so indexed URLs and
 * inbound links resolve instead of 404ing.
 */
export const Route = createFileRoute("/about")({
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 301 });
  },
});
