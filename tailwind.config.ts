import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Fira Sans"],
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
      animation: {
        swipe: "swipe 20000ms linear infinite",
      },
      keyframes: {
        swipe: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
