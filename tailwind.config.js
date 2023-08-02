/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#ddd",
        black: "#080808",
        white: "#fff",
        red: "#fc0a0a",
        gray: {
          "100": "#1c1c1c",
          "200": "rgba(28, 31, 37, 0.6)",
        },
        darkgray: {
          "100": "#a0a0a0",
          "200": "rgba(176, 176, 176, 0.1)",
        },
        darkgreen: "#006f2c",
      },
      fontFamily: {
        inter: "Inter",
        urbanist: "Urbanist",
        roboto: "Roboto",
      },
      borderRadius: {
        "9xs-8": "3.8px",
        "81xl": "100px",
        lg: "18px",
        "sm-8": "13.8px",
      },
    },
    fontSize: {
      lg: "1.13rem",
      "7xl": "1.63rem",
      "5xl": "1.5rem",
      "5xs": "0.5rem",
      xl: "1.25rem",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
