/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {animation: {
      ripple: 'ripple 0.75s ease-out infinite',
    },
    keyframes: {
      ripple: {
        '0%': { transform: 'scale(1)', opacity: '1' },
        '100%': { transform: 'scale(0)', opacity: '0' },
      },
    },},
  },
  plugins: [],
}

