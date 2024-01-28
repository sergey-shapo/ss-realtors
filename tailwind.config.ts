import type { Config as TailwindConfig } from "tailwindcss";

const tailwindConfig: TailwindConfig = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        headingColor: "#0f1c38",
        primary: "#4fb7c2",
        secondary: "#F35584",
        ternary: "#6b758e",
        fourth: "#c0c4cc",
        layout: "#4fb7c2",
      },
    },
  },
  plugins: [],
};
export default tailwindConfig;
