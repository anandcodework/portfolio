/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#121212",
        "secondary": "#e0e0e0",
        "third": "#fefefe",
        "fourth": "#00FF9C"
      },
    },
  },
  plugins: [],
}

