/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#252c37",
        "secondary": "#e0e0e0",
        "third": "#fefefe",
        "fourth": "#06ff99"
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
      screens: {
        'ls': '1132px',
      }
      
    },
  },
  plugins: [],
}

