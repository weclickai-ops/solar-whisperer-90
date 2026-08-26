import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy URL — Mission and Vision now live on the Home page. */
export const Route = createFileRoute("/about")({
  beforeLoad: () => {
    throw redirect({ to: "/", replace: true });
  },
});
