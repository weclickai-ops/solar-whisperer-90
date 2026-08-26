import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/g/Header";
import { Footer } from "@/components/g/Footer";
import { Ambient } from "@/components/g/Ambient";
import { CursorGlow } from "@/components/g/CursorGlow";
import { ContactDock } from "@/components/g/ContactDock";
import { contact, identity, siteUrl } from "@/data/content";

const FONTSHARE =
  "https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600&f[]=general-sans@300,400,500,600&display=swap";
const GOOGLE_MONO =
  "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: identity.company,
  url: siteUrl,
  slogan: identity.tagline,
  email: contact.email,
  telephone: [contact.phonePrimary, contact.phoneSecondary],
  areaServed: "IN",
};

function NotFoundComponent() {
  return (
    <div className="container-g flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-[3rem]">Page not found</h1>
      <p className="lede mt-4">The page you requested does not exist.</p>
      <Link
        to="/"
        className="mt-8 inline-flex min-h-11 items-center rounded-full bg-[var(--blue)] px-6 font-medium text-white"
      >
        Return home
      </Link>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="container-g flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-[2.5rem]">This page did not load</h1>
      <p className="lede mt-4">Please refresh, or return to the home page.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="inline-flex min-h-11 items-center rounded-full bg-[var(--blue)] px-6 font-medium text-white"
        >
          Try again
        </button>
        <a
          href="/"
          className="inline-flex min-h-11 items-center rounded-full border border-[var(--line-2)] px-6"
        >
          Return home
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#04060C" },
      { property: "og:site_name", content: identity.company },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://api.fontshare.com" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(organizationSchema) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        {/* Webfonts load without blocking first paint; noscript keeps them for
            visitors without JavaScript. */}
        <link rel="stylesheet" href={FONTSHARE} media="print" data-font="fontshare" />
        <link rel="stylesheet" href={GOOGLE_MONO} media="print" data-font="google" />
        <noscript>
          <link rel="stylesheet" href={FONTSHARE} />
          <link rel="stylesheet" href={GOOGLE_MONO} />
        </noscript>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.querySelectorAll('link[data-font]').forEach(function(l){l.media='all'});",
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Ambient />
      <CursorGlow />
      <Header />
      <main id="main" className="relative z-10">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <Footer />
      <ContactDock />
    </QueryClientProvider>
  );
}
