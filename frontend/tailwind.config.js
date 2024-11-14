/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': '#000000',
        'custom-darkblue': '#14213D',
        'custom-yellow': '#FFD100',
        'custom-lightgray': '#E5E5E5',
        'custom-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}

