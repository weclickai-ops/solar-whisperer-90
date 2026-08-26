import { useEffect, useRef, useState } from "react";

import { contact } from "@/data/content";

type Pill = { label: string; href: string; external?: boolean; icon: JSX.Element };

const iconProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "var(--cyan)",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: "false" as const,
};

const pills: Pill[] = [
  {
    label: "WhatsApp",
    href: contact.whatsapp,
    external: true,
    icon: (
      <svg {...iconProps} role="img">
        <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.6-5.3A8.5 8.5 0 1 1 21 11.5Z" />
      </svg>
    ),
  },
  {
    label: "Call",
    href: "tel:+919502142303",
    icon: (
      <svg {...iconProps} role="img">
        <path d="M22 16.9v2.1a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 3.2 2 2 0 0 1 4 1h2.1a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L7.5 8.6a16 16 0 0 0 6 6l1-1a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: `mailto:${contact.email}`,
    icon: (
      <svg {...iconProps} role="img">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 6 10-6" />
      </svg>
    ),
  },
];

export function ContactDock() {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const graceRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const threshold = Math.min(520, window.innerHeight * 0.6);
    const onScroll = () => setShown(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const cancelGrace = () => {
    if (graceRef.current) {
      window.clearTimeout(graceRef.current);
      graceRef.current = null;
    }
  };

  return (
    <div
      ref={wrapRef}
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2 transition-opacity duration-300"
      style={{ opacity: shown ? 1 : 0, pointerEvents: shown ? "auto" : "none" }}
      onMouseEnter={() => {
        cancelGrace();
        setOpen(true);
      }}
      onMouseLeave={() => {
        cancelGrace();
        graceRef.current = window.setTimeout(() => setOpen(false), 260);
      }}
    >
      {open
        ? pills.map((pill, i) => (
            <a
              key={pill.label}
              href={pill.href}
              {...(pill.external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
              className="reveal is-visible inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--line-2)] px-4 text-[0.875rem] text-[var(--text)] transition-colors hover:border-[var(--line-blue)]"
              style={{
                background: "rgba(7,13,24,.86)",
                backdropFilter: "blur(14px)",
                ["--reveal-delay" as string]: `${40 + i * 40}ms`,
              }}
            >
              {pill.icon}
              {pill.label}
            </a>
          ))
        : null}

      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[var(--blue)] px-5 text-[0.9375rem] font-medium text-white transition-colors hover:bg-[var(--blue-600)]"
      >
        Contact
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          role="img"
          aria-hidden="true"
          className="transition-transform duration-200"
          style={{ transform: open ? "rotate(45deg)" : "none" }}
        >
          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
