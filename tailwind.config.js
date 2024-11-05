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
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.custom-scrollbar::-webkit-scrollbar': {
          width: '5px',           // Width of the scrollbar
          height: '5px',      // Height of the scrollbar (for horizontal scrollbars)
        },
        '.custom-scrollbar::-webkit-scrollbar-thumb': {
          backgroundColor: '#a0a0a0', // Color of the scrollbar thumb
          borderRadius: '4px',      // Border radius for thumb
        },
        '.custom-scrollbar::-webkit-scrollbar-track': {
          backgroundColor: '#f0f0f0', // Background color of the scrollbar track
        },
      });
    },
  ],
}

