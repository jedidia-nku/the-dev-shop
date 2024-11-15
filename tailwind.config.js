/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slide-down': 'slide-down 0.5s ease-in-out',
      },
      keyframes: {
        'slide-down': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
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
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceOnHover: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        slideIn: 'slideIn 1s ease-out',
        zoomIn: 'zoomIn 0.8s ease-out',
        bounceOnHover: 'bounceOnHover 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
}
