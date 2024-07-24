/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      fontFamily: {
        aoc: ["'Source Code Pro', monospace"],
      },
      textShadow: {
        aoc: '0 0 2px #00cc00, 0 0 5px #00cc00',
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
}
