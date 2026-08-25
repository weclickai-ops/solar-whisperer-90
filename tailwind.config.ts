/* ============================================================
   tailwind.config.ts  —  FILE 2 / 12
   Replace the whole file.
   ============================================================ */

import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "var(--pad)",
      screens: { "2xl": "1280px" },
    },
    extend: {
      fontFamily: {
        sans: ["Archivo", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"],
      },

      colors: {
        /* --- shadcn semantic (alpha-aware) --- */
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        /* --- border / input carry their own alpha, so no <alpha-value> --- */
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        /* --- brand, addressable as bg-brand-blue, text-brand-cyan etc. --- */
        brand: {
          bg: "#05070C",
          bg2: "#080B12",
          surface: "#0A0E16",
          surface2: "#0C121C",
          blue: "#1479FF",
          blueDark: "#0B5ED8",
          cyan: "#5CC8FF",
          mute: "#8A96A8",
          mute2: "#C3D6F5",
        },
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      spacing: {
        pad: "var(--pad)",
        sec: "var(--sec)",
      },

      maxWidth: {
        wrap: "1280px",
        lede: "54ch",
      },

      letterSpacing: {
        tightest: "-0.032em",
        eyebrow: "0.22em",
      },

      transitionTimingFunction: {
        reveal: "cubic-bezier(0.2, 0.7, 0.3, 1)",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fade: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fade: "fade 0.34s ease both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
