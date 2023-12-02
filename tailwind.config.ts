import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: ["bg-fungi", "bg-capricciosa"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url(/images/photos/pizza_image.jpg)",
        fungi: "url(/images/recipes/fungi.jpg)",
        capricciosa: "url(/images/recipes/capricciosa.jpg)",
      },
      colors: {
        primary: "#DC2626",
      },
      keyframes: {
        appear: {
          "0%": { transform: "opacity: 0" },
          "100%": { transform: "opacity: 100" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
