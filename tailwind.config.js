/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#094984',
        'blue2': '#004aad',
        'grey': '#d9d9d9',
        'yellow': '#ffb400'
      }
    },
  },
  plugins: [],
}