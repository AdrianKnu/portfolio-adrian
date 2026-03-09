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
        'surface-card': '#12121a',
        'border-card': '#1e1e2e',
        'text-main': '#e8e8f0',
        'text-muted': '#6b6b8a',
        'accent-1': '#7c3aed',
        'accent-2': '#0ea5e9',
        'accent-3': '#10b981',
        'accent-4': '#f59e0b',
        'accent-5': '#f43f5e',
        'accent-6': '#8b5cf6',
        'accent-7': '#06b6d4',
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
        mono: ['"Space Mono"', 'monospace'],
        sans: ['"Syne"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

