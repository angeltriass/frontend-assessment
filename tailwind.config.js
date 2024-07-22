/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'custom-red': '#ff2c2c',
      },
      backgroundImage: {
        'hero-lg': "url('/images/1920x650.png')",
        'hero-sm': "url('/images/600x600.png')",
      },
      height: {
        '136': '40rem',
      },
    },
  },
  plugins: [],
}