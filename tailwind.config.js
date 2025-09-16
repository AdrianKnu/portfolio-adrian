/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0, transform: "translateY(20px)" },
        "100%": { opacity: 1, transform: "translateY(0)" },
      },
    },
    animation: {
      fadeIn: "fadeIn 1s ease-out forwards",
    },
  },
},

extend: {
  keyframes: {
    shine: {
      "0%": { transform: "translateX(-100%) rotate(12deg)" },
      "100%": { transform: "translateX(200%) rotate(12deg)" },
    },
    fadeIn: {
      "0%": { opacity: 0, transform: "translateY(-5px)" },
      "100%": { opacity: 1, transform: "translateY(0)" },
    },
  },
  animation: {
    shine: "shine 1s ease-out",
    fadeIn: "fadeIn 0.3s ease-out",
  },
},

  plugins: [],
}

