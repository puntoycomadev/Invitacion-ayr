/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6B725C',
        background: '#F9F7F7',
      },
      fontFamily: {
        'cormorant': ['Cormorant Garamond', 'serif'],
        'garland': ['TAN Garland', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
