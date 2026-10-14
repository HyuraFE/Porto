/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        shuukura: {
          50: "#f0f4f8",
          100: "#e2e8f0",
          200: "#c7d5ed",
          300: "#a3b8d8",
          400: "#8da2c9",
          500: "#6b8acd",
          600: "#5a78b8",
          700: "#4a6299",
          800: "#3d5280",
          900: "#1e293b",
        },
        rose: {
          soft: "#d4a0a7",
        },
      },
      fontFamily: {
        display: ['"Outfit"', "system-ui", "sans-serif"],
        body: ['"Inter Tight"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
