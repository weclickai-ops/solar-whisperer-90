import { createFileRoute, redirect } from "@tanstack/react-router";

/**
 * The per-product detail pages were merged into /product. Anything under
 * /products/* 301s there rather than 404ing.
 */
export const Route = createFileRoute("/products/$productId")({
  beforeLoad: () => {
    throw redirect({ to: "/product", statusCode: 301 });
  },
});
