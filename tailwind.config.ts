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
        body: "#121212",
        text: "#FFF",
        primary: "#EDBFB7",
        secondary: "#F283B6",
        tertiary: "#E06C9F"
      }
    },
  },
  plugins: [],
};
export default config;
