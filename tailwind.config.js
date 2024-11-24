/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": {
          "900": "#122D40",
          "700": "#1C3E56"
        },
        "gray-edit": {
          "100": "#818c96",
        },
        "green-edit": {
          "100": "#01e281",
        },
        "white-edit": {
          "100": "#F9F9FA",
        }
      },
      backgroundImage: {
        'hero': "url('/src/assets/images/bg-hero.jpg')",
      },
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif']
      },
      screens: {
        'xs': '350px'
      }
    },
  },
  plugins: [],
}