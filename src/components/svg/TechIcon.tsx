/** Thin-line technical icons drawn per engineering item. */
export function TechIcon({ name }: { name: string }) {
  const common = {
    width: 34,
    height: 34,
    viewBox: "0 0 34 34",
    fill: "none",
    stroke: "var(--cyan)",
    strokeWidth: 1.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "Single-point linear actuator":
      return (
        <svg {...common}>
          <path d="M4 22h9l6-8h11" />
          <rect x="10" y="18" width="8" height="7" rx="1.5" />
          <circle cx="13" cy="22" r="1.4" />
        </svg>
      );
    case "24V DC motor":
      return (
        <svg {...common}>
          <rect x="6" y="11" width="15" height="12" rx="2" />
          <path d="M21 14h5M21 20h5M9 11V8M18 11V8" />
        </svg>
      );
    case "Astronomical tracking algorithm":
      return (
        <svg {...common}>
          <circle cx="17" cy="17" r="5" />
          <path d="M17 5v3M17 26v3M5 17h3M26 17h3M8.6 8.6l2.1 2.1M23.3 23.3l2.1 2.1M25.4 8.6l-2.1 2.1M10.7 23.3l-2.1 2.1" />
        </svg>
      );
    case "±2° tracking accuracy":
      return (
        <svg {...common}>
          <path d="M5 25h24" />
          <path d="M8 25 22 9" />
          <path d="M8 25a17 17 0 0 1 5-11" />
          <circle cx="22" cy="9" r="1.6" />
        </svg>
      );
    case "Zigbee mesh":
      return (
        <svg {...common}>
          <circle cx="17" cy="8" r="2" />
          <circle cx="7" cy="24" r="2" />
          <circle cx="27" cy="24" r="2" />
          <circle cx="17" cy="18" r="2" />
          <path d="M17 10v6M15.4 19.3 8.6 22.7M18.6 19.3l6.8 3.4M9 23 15 9M25 23 19 9" />
        </svg>
      );
    case "Ethernet":
      return (
        <svg {...common}>
          <rect x="8" y="12" width="18" height="12" rx="2" />
          <path d="M12 12V8h10v4M12 24v2M17 24v2M22 24v2" />
        </svg>
      );
    case "RS485":
      return (
        <svg {...common}>
          <path d="M5 17h5l3-6 4 12 3-6h9" />
        </svg>
      );
    case "Nighttime stow":
      return (
        <svg {...common}>
          <path d="M22 6a10 10 0 1 0 6 12A8 8 0 0 1 22 6Z" />
          <path d="M5 28h24" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M4 26h26" />
          <path d="M6 20h6l3-5 4 8 3-4h8" />
          <path d="M9 8c3 2 6 2 9 0s6-2 9 0" />
        </svg>
      );
  }
}
