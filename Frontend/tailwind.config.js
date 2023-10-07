/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0a0a0a",
        grey: "#36322D",
        blue: "#264af9",
        pink: "#ee6373"
      },

      fontFamily: {
        inter: ['Inter', 'sans'],
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

