
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
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#403E43",
        input: "#333333",
        ring: "#555555",
        background: "#1A1F2C",
        foreground: "#E8E9F0",
        primary: {
          DEFAULT: "#4895EF",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#FF8C4B", 
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#FF6B81",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#222233",
          foreground: "#E8E9F0",
        },
        popover: {
          DEFAULT: "rgba(34, 34, 51, 0.95)",
          foreground: "#E8E9F0",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#2A2A40",
          foreground: "#9F9EA1",
        },
        charity: {
          red: "#FF6B81",
          blue: "#4895EF",
          yellow: "#FFD452",
          light: "#E8E9F0",
          dark: "#1A1F2C",
          black: "#0F1420",
        },
        glass: { DEFAULT: "rgba(34, 34, 51, 0.55)" },
      },
      borderRadius: {
        lg: "1.25rem",
        md: "1rem",
        sm: "0.5rem",
      },
      fontFamily: {
        handwritten: ['Indie Flower', 'cursive'],
        heading: ['Inter', 'Segoe UI', 'sans-serif'],
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
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-light": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "heartbeat": {
          "0%": { transform: "scale(1)" },
          "14%": { transform: "scale(1.3)" },
          "28%": { transform: "scale(1)" },
          "42%": { transform: "scale(1.3)" },
          "70%": { transform: "scale(1)" },
        },
        "heart-pop": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.18)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-light": "pulse-light 4s ease-in-out infinite",
        "heartbeat": "heartbeat 1.5s ease-in-out infinite",
        "heart-pop": "heart-pop 1s infinite cubic-bezier(0.4, 0, 0.6, 1)",
      },
      boxShadow: {
        card: "0 2px 18px 0 rgba(0,0,0,0.25)",
        glass: "0 4px 32px 0 rgba(0,0,0,0.30)",
      },
      scale: {
        '102': '1.02',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
