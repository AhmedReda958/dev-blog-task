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
      boxShadow: {
        card: "0px 4px 6px -2px #10182808, 0px 12px 16px -4px #10182814",
      },
    },
  },
  plugins: [],
};
export default config;
