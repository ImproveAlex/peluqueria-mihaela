/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
  extend: {
  fontFamily: {
    cursive: ['"Parisienne"', 'cursive'],
    display: ['"Playfair Display"', 'serif'],
    elegant: ['"Playfair Display"', 'serif'], 
  },
}
},
  plugins: [],
}

