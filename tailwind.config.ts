import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1440px",
    },
    fontSize: {
      h1: "40px",
      h2: "32px",
      h3: "27px",
      h4: "22px",
      p1: "18px",
      p2: "16px",
      cta: "18px",
      h1m: "24px",
      h2m: "20px",
      h3m: "18px",
      h4m: "16px",
      p1m: "16px",
      p2m: "14px",
      ctam: "16px",
    },
    colors: {
      primary: "#003C3C",
      secondary: "#E5F0F1",
      tertiary: "#00DC82",
      primaryText: "#000000",
      secondaryText: "#838383",
      tertiaryText: "#FFFFFF",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
