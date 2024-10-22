/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors:{
        'primary': '#08EAFB',
        'secondary': '#A4E96A',
        'darker': '#0A0A0A',
        'greenish': '#192014',
        'dark-light': '#1B1B1B',
        'greenish-light': '#A4E96A',
        'light-color': '#FAFAFA',
        'footer-color': '#2F4021',

      },
      fontFamily:{
        poppins: ["poppins", "sans-serif"]
      },
      
    },
  },
  plugins: [],
}