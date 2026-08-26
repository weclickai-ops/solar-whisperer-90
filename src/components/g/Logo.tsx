import { identity } from "@/data/content";

export function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        role="img"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="12" cy="12" r="5" fill="var(--blue)" />
        <circle cx="12" cy="12" r="8.2" fill="none" stroke="var(--cyan)" strokeWidth="1" opacity=".55" />
      </svg>
      <span className="font-display text-[1.0625rem] font-semibold tracking-[-0.02em] text-[var(--text)]">
        {identity.company}
      </span>
    </span>
  );
}
