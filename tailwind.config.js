/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'nav': '0 2px 6px rgba(0, 0, 0, 0.26)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.26)',
      },
      fontFamily: {
        circular: ['circular', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

