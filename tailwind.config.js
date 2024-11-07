/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#091d35',
        primaryRed: '#e50e0b'
      },
      maxWidth: {
        max: '1300px'
      },
      fontFamily: {
        roboto: "Roboto",
        oswald: "Oswald"
      }
    },
  },
  plugins: [],
}

