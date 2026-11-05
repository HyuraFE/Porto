/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        jetset: {
          white: "#FFFFFF",
          black: "#0A0A0A",
          blue: "#0022FF",
          amber: "#FF5500",
          muted: "#333333",
          surface: "#F5F5F5",
        },
      },
      fontFamily: {
        display: ['"Archivo"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
        body: ['"Inter"', "sans-serif"],
      },
      borderWidth: {
        thin: "1.5px",
        thick: "2px",
      },
    },
  },
  plugins: [],
};
