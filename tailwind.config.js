/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        '3xl': '6px 6px 3px -1px rgba(0,0,0,0.80)',

      }
    },
  },
  plugins: [],
}

