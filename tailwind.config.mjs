/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        shuukura: {
          50: "rgb(var(--color-shuukura-50) / <alpha-value>)",
          100: "rgb(var(--color-shuukura-100) / <alpha-value>)",
          200: "rgb(var(--color-shuukura-200) / <alpha-value>)",
          300: "rgb(var(--color-shuukura-300) / <alpha-value>)",
          400: "rgb(var(--color-shuukura-400) / <alpha-value>)",
          500: "rgb(var(--color-shuukura-500) / <alpha-value>)",
          600: "rgb(var(--color-shuukura-600) / <alpha-value>)",
          700: "rgb(var(--color-shuukura-700) / <alpha-value>)",
          800: "rgb(var(--color-shuukura-800) / <alpha-value>)",
          900: "rgb(var(--color-shuukura-900) / <alpha-value>)",
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
