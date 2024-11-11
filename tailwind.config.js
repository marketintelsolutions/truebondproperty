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
      },
      screens: {
        zr: "0px",
        mb: "430px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
}

