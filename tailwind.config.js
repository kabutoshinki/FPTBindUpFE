/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      inset: {
        15: "15px",
        25: "25px",
        40: "40px",
        0: "0px",
      },
      fontSize: {
        f11: "0.68rem",
        f12: "0.75rem",
        f13: "0.81rem",
        f20: "1.25rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1024px",
          },
          "@screen xl": {
            maxWidth: "1100px",
          },
        },
      });
    },
  ],
};
