/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "primary": "#060616",
        "primary-light": "#2f303c",
        "primary-dark": "#000000",


        "secondary": "#beddea",
        "secondary-light": "#f1ffff",
        "secondary-dark": "#8dabb8"
        
      },
      textColor: {
        "primary": "#ffffff",
        "secondary": "#000000"
      }

    },
  },
  plugins: []
}