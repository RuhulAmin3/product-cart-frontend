/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FA541C",
        primary_text: "#919EAB",
        primary_bg: "#161C24",
        form_bg: "#212B36",
        white: "#fff",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      fontSize: {
        sm: [
          "14px",
          {
            lineHeight: "26px",
            fontWeight: "400",
          },
        ],
        xl: [
          "36px",
          {
            lineHeight: "54px",
            fontWeight: "700",
          },
        ],
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "form-shadow": "-24px 24px 72px -8px rgba(0, 0, 0, 0.24)",
        "header-shadow": "0 0 8px 0 rgba(0,0,0,.4)",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1290px",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}

