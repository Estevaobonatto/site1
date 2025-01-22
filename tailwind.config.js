/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
        }
      },
      fontFamily: {
        sans: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        'spin-once': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(180deg)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        }
      },
      animation: {
        'spin-once': 'spin-once 0.3s ease-in-out',
        'fade-in': 'fade-in 0.2s ease-in-out',
        'fade-in-up': 'fade-in-up 0.3s ease-out forwards',
        'fade-in-left': 'fade-in-left 0.4s ease-out forwards',
      }
    },
  },
  plugins: [],
}

