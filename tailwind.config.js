/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGray: '#E8E9DF',
        accentOrange: '#E76F00',
        lightGreen: '#22C55E',
      },
    },
  },
  plugins: [],
}

