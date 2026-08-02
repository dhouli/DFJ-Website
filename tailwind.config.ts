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
        // Sampled from the DFJ logo (FinalLogoDFJTransparent-Black-background2.jpg):
        // hot pink, cyan, and purple panels, used as accents against warm, light neutrals.
        joy: {
          pink: "#E0187A",
          cyan: "#14A0C7",
          plum: "#5B1A5C",
          blush: "#FBE7F0",
          cream: "#FFFBF5",
          charcoal: "#2B2430",
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
