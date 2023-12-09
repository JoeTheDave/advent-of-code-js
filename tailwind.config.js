/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './lib/**/*.{ts,html}', './app/**/*.{ts,html}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
