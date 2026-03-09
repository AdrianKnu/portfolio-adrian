/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base-bg': '#0a0a0f',
        'surface-card': '#16161a', // Slightly lighter for Sean's style
        'border-card': 'rgba(255, 255, 255, 0.1)',
        'text-main': '#f8f8f8',
        'text-muted': '#a0a0ab',
        'accent-teal': '#4C6763', // Sean's link color
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        shine: {
          "0%": { transform: "translateX(-100%) rotate(12deg)" },
          "100%": { transform: "translateX(200%) rotate(12deg)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
        shine: "shine 1s ease-out",
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"Outfit"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

