import { createFileRoute, redirect } from "@tanstack/react-router";

/**
 * /projects is gone: there is no verified project data to publish, and a
 * "coming soon" case-study framework is not something a visitor should land on.
 * Enquiries are the useful destination, so this 301s to /contact.
 */
export const Route = createFileRoute("/projects")({
  beforeLoad: () => {
    throw redirect({ to: "/contact", statusCode: 301 });
  },
});
