/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        navcol:       
{
  50: '#dc354b',
  100: '#d2d6e2',
  200: '#2B3148',
  300: '#9ca0b1',
  400: '#7f8599',
  500: '#666c80',
  600: '#333338', //navbar
  650:'#1f2533', //extra navba
  700: '#373c49',
  800: '#20242f',
  900: '#050c17',
  1000:'#a5a5a5',//footer text
  1100:'#e9e8e8',//footer hover
  1200:'#515159',//svg in footer bg 
}
      }
    },
  },
  plugins: [],
}
