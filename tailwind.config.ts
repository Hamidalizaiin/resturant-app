import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "priamry": "#FDD207",
        "secondary": "#E32226",
        "lightgray": "#D9D9D9"

      },
    },
  },
  plugins: [],
};
export default config;
