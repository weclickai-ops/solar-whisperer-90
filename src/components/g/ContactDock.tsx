import { useEffect, useRef, useState } from "react";
import { Plus, MessageCircle, Phone, Mail } from "lucide-react";
import { contact } from "@/data/content";

const items = [
  {
    label: "WhatsApp",
    href: `https://wa.me/${contact.whatsapp}`,
    Icon: MessageCircle,
  },
  { label: "Call", href: `tel:${contact.phoneHrefs[0]}`, Icon: Phone },
  { label: "Email", href: `mailto:${contact.email}`, Icon: Mail },
];

export function ContactDock() {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (root.current && !root.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div ref={root} className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-2 sm:right-6 sm:bottom-6">
      {open
        ? items.map(({ label, href, Icon }, i) => (
            <a
              key={label}
              href={href}
              target={label === "WhatsApp" ? "_blank" : undefined}
              rel={label === "WhatsApp" ? "noreferrer" : undefined}
              className="inline-flex min-h-11 cursor-pointer items-center gap-2.5 rounded-full border border-[var(--line-2)] bg-[rgba(4,6,12,0.82)] px-4 text-sm text-text backdrop-blur-md transition-colors duration-200 hover:border-[var(--line-blue)]"
              style={{
                animation: `g-line-rise 260ms cubic-bezier(.16,1,.3,1) ${i * 45}ms both`,
              }}
            >
              <Icon size={16} className="text-cyan" aria-hidden="true" />
              {label}
            </a>
          ))
        : null}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close contact options" : "Open contact options"}
        className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-[var(--line-blue)] bg-[rgba(4,6,12,0.82)] px-4 text-sm font-medium text-text backdrop-blur-md transition-colors duration-200 hover:bg-[rgba(0,127,255,0.14)]"
      >
        Contact
        <Plus
          size={16}
          aria-hidden="true"
          className="text-cyan transition-transform duration-200"
          style={{ transform: open ? "rotate(45deg)" : "none" }}
        />
      </button>
    </div>
  );
}
