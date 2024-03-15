/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        md: "1000px",
        s: "500px",
      },
      colors: {
        accent: "#C07C47",
        "accent-bold": "#FF9D51",
        accent2: "#4A7C60",
        accent3: "#6F322E",
        "shades-blue-dark": "#052B4C",
        "neutral-dark-grey": "#1B2226",
        "dark-gray": "#1B2226",
        primary: {
          DEFAULT: "#FBC807",
        },
        secondary: {
          DEFAULT: "#707861",
        },
        green: {
          300: "#F5CC4F",
          400: "#4A7C60",
          500: "#3C674F",
          600: "#0A5E2F",
        },
        yellow: {
          DEFAULT: "#F5CC4F",
          100: "#FCF8EB",
          200: "#fee399",
          300: "#fdd566",
          400: "#fdc733",
          500: "#C89E01",
          600: "#ca9400",
          700: "#976f00",
          800: "#654a00",
          900: "#322500",
        },
        blue: {
          100: "#d1d9e2",
          200: "#a2b4c5",
          300: "#748ea7",
          400: "#45698a",
          500: "#17436d",
          600: "#123657",
          700: "#0e2841",
          800: "#091b2c",
          900: "#050d16",
        },
        gray: {
          100: "#CFD7DD",
          200: "#FAFAFA",
          300: "#E2E2E2",
          500: "#D9DBE9",
          600: "#A4A4A4",
          700: "#BCBCBC",
          800: "#ADADAD",
          900: "#D3D3D3",
        },
        black: {
          DEFAULT: "#000",
          100: "#564101",
        },
        red: {
          500: "#A9342D",
        },
      },
      gap: {
        xl: "60px",
        l: "32px",
        r: "16px",
        m: "24px",
        s: "8px",
      },
      padding: {
        xl: "60px",
        l: "32px",
        m: "24px",
        r: "16px",
      },
      margin: {
        xl: "60px",
        l: "32px",
        m: "24px",
        r: "16px",
      },

      fontSize: {
        "clamp-1": "clamp(3rem, 1.5vw, 1rem)",
      },
    },
    fontFamily: {
      display: ['"Playfair Display"', "sans-serif"],
      sans: ['"avenir"', "sans-serif"],
    },
  },
  // safelist: [
  // 	"[&>span]:text-primary"
  // ],
  plugins: [],
};
