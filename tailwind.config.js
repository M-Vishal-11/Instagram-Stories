/** @type {import('tailwindcss').Config} */
const color = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      color:{
        fuchsia: color.fuchsia,
      },
    },
  },
  plugins: [],
}