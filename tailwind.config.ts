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
        primary: {
          DEFAULT: "#6941C6",
          light: "#f3ebff",
          dark: "#42307D",
        },
        background: "#ffffff",
        body: {
          DEFAULT: "#101828",
          light: "#667085",
        },
      },
    },
  },
  plugins: [],
};
export default config;
