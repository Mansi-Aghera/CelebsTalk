import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: "#FF4DA6",
          "pink-light": "#FFB3D9",
          "pink-bg": "#FFF0F7",
          purple: "#C850C0",
          gradient: "#FF4DA6",
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #FF4DA6 0%, #C850C0 100%)",
        "hero-gradient": "linear-gradient(180deg, #FFF0F7 0%, #ffffff 100%)",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)"],
        display: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};

export default config;