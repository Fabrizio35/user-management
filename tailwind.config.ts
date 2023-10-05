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
        foDark: "#113f67",
        foSemiDark: "#38598b",
        foSemiLight: "#a2a8d3",
        foLight: "#e7eaf6",
      },
    },
  },
  plugins: [],
};

export default config;
