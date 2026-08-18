export function Logo({ className }: { className?: string }) {
  return (
    <span className={className}>
      <span className="flex items-center gap-2.5">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="shrink-0"
        >
          <circle cx="12" cy="12" r="4.2" stroke="var(--cyan)" strokeWidth="1.3" />
          <path
            d="M12 1.6v3.2M12 19.2v3.2M1.6 12h3.2M19.2 12h3.2M4.7 4.7l2.3 2.3M17 17l2.3 2.3M19.3 4.7 17 7M7 17l-2.3 2.3"
            stroke="var(--blue)"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
        <span className="font-display text-[1.05rem] font-semibold tracking-[-0.02em] text-text">
          Glarenergy
        </span>
      </span>
    </span>
  );
}
