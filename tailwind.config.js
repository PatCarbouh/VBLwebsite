/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "vbl-red": "#CD291E",
        "vbl-yellow": "#FDB912",
        "vbl-dark": "#2D2D2D",
        "vbl-light": "#F7F7F7",
        "vbl-grey": "#58595B",
        "vbl-blue": "#007AFF",
      }
    }
  },
  plugins: [],
} 