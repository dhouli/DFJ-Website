import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm, welcoming palette — placeholder values, swap once brand colors are finalized
        joy: {
          blush: "#F7E6E0",
          rose: "#E8A0A0",
          plum: "#7A4B5C",
          cream: "#FFFAF3",
          gold: "#E3B23C",
          charcoal: "#2E2A28",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [],
};
export default config;
