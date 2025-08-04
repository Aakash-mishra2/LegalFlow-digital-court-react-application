/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xss: "10px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      rotate: {
        100: "100deg",
        260: "260deg",
      },
      boxShadow: {
        "3xl": "0px 0px 10px 0px rgba(0,0,0,0.3);",
      },
      height: {
        68: "16rem",
        76: "19rem",
        84: "21rem",
        88: "22rem",
      },
      colors: {
        brown: {
          50: "#fdf8f6",
          100: "#f2e8e5",
          200: "#eaddd7",
          300: "#e0cec7",
          400: "#d2bab0",
          500: "#bfa094",
          600: "#a18072",
          700: "#977669",
          800: "#846358",
          900: "#43302b",
        },
        brand: {
          25: "#EDF5F5",
          50: "#69AEAA",
        },
        rosegold: "#FC9570",
        beige: "#FBF8EC",
        beigreen: "#F9F9F6",
        darkgreen: "#1A2E05",
      },
      keyframes: {
        fading: {
          "0%": { transform: "opacity-0 translate-y-56" },
          "100%": { transform: "opacity-100 translate-y-0" },
        },
        flower: {
          "0%": { transform: "rotate(-5deg)" },
          "100%": { transform: "rotate(5deg)" },
        },
        bgSlide: {
          "0%": { transform: "translateX(0) skewX(0)" },
          "100%": { transform: "translateX(100%) skewX(12deg)" },
        }
      },
      animation: {
        fading: "fading 1s ease-in-out",
        flower: "flower 6s ease-in-out infinite alternate",
        slide: "3s ease-in infinite bgSlide",
      },
      screens: {
        xsm: "260px",
        xsss: "320px",
        xss: "384px",
        xs: "540px",
      },
      maxWidth: {
        "8xl": "96rem",
        "9xl": "112rem",
      },
      container: {
        center: true,
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "2rem",
        "2lg": "1.5rem",
        "2xl": "3.5rem",
        full: "9999px",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-none': {
          /* Hide scrollbar for Chrome, Safari, and Opera */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          /* Hide scrollbar for IE, Edge, and Firefox */
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none', /* Firefox */
        },
      });
    },
  ],
};
