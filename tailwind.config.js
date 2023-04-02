/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
        "2xl": "1400px",
        "xl": "1200px",
        "lg": "1001px",
        "md": "768px",
        "sm": "576px",
        "xs": "480px"
      },
    },
  },
  plugins: [],
}
