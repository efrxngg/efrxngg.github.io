module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      backgroundColor: {
      },
      textColor: {
      }

    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}