import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        avenir: ['var(--font-avenir)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
      colors: {
        'gold-yellow': '#FEC837',
        'gold-rose': '#E1A098',
        'gold-white': '#D9D9D9',
      },
    },
  },
  plugins: [],
};

export default config;