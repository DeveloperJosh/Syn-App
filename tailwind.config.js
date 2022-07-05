/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, js, ts, vue, ejs}", 
    "./src/**/*"
],
  theme: {
    extend: {},
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      "2xl": ['28px', '36px'],
      "3xl": ['32px', '40px'],
      "4xl": ['36px', '44px'],
      "5xl": ['40px', '48px'],
      "6xl": ['44px', '52px'],
      "7xl": ['48px', '56px'],
      "8xl": ['52px', '60px'],
      "9xl": ['56px', '64px'],
    },
  },
  plugins: [],
}
