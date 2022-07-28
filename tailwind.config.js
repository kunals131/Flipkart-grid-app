/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        flipkartYellow : '#FEDA00',
        flipkartBlue : '#2874F0',
        bgPrimary : {
          700 : '#33333D',
          600 : '#424250',
          500 : '#373740'
        },
        textPrimary : 'white'
      }
    },
  },
  plugins: [],
}