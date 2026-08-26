import { seo, siteUrl } from "@/data/content";

type RouteKey = keyof typeof seo;

/** Per-route title, description, canonical and Open Graph tags. */
export function routeHead(key: RouteKey) {
  const entry = seo[key];
  const url = `${siteUrl}${entry.path === "/" ? "" : entry.path}`;
  return {
    meta: [
      { title: entry.title },
      { name: "description", content: entry.description },
      { property: "og:title", content: entry.title },
      { property: "og:description", content: entry.description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: entry.title },
      { name: "twitter:description", content: entry.description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
