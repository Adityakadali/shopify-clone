/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      colors: {
        darkgreen: {
          50: "#f3fcf4",
          100: "#008060",
          200: "#004c3f",
          300: "#002e25",
        },
        babypink: {
          100: "#fbf7ed",
        },
      },
    },
  },
  plugins: [],
};
