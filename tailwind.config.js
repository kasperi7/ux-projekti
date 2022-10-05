/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        sandbrown: "#E8CEB3",
        darkbrown: "#733D1E",
        graybrown: "#AD948F",
        lightbeige: "#E4DBCF",
        chocbrown: "#A27C62",
      },
      fontFamily: {
        roboto: "'Roboto', sans-serif",
      },
    },
  },
  plugins: [],
};
