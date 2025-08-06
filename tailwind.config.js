/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
        center: true,
        padding: "1rem",
        screens: {
          "xs": "320px",
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1240px",
          "2xl": "1496px",
        },
      },
    extend: {
      colors: {
        primary: "#508c60", // background: deep green
        secondary: "#fcfffe", // btn-text: white
        inputbg: "#F3F4F6", // input: light gray
        accent: "#6B7280", // border: medium gray
        muted: "#54ab6b", // hover: light green
        dark: "#111827", // text: dark gray/black
      },
      
    },
  },
  plugins: [],
};
