/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'bottom-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        'color1': '#15c1d7',
        'color2': '#2b4b63',
        'color3': '#ea827d',
        'color4':'#c490cd',
        'footerColor': '#4b4c4c',
        'footerColor1': '#54646b',
      },
    },
  },
  plugins: [],
}
