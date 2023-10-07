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
        gray: "#eff0ef",
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

