import type { Config } from "tailwindcss";

const config: Config = {
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
        leaf: {
          100: "#e8f0d6",
          200: "#d0e1ad",
          300: "#b9d185",
          400: "#a1c25c",
          500: "#8ab333",
          600: "#6e8f29",
          700: "#536b1f",
          800: "#374814",
          900: "#1c240a",
        },
      },
    },
  },
  plugins: [],
};
export default config;
