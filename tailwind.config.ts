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
        foDark: "#222831",
        foSemiDark: "#393e46",
        foBlue: "#0092ca",
        foLight: "#eeeeee",
      },
    },
  },
  plugins: [],
};

export default config;
