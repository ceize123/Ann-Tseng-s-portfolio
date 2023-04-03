/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      pink: '#f4cccc',
      yellow: '#fec20e',
      black: '#000',
      gray: '#222',
      'light-gray': '#555',
      white: '#fff',
    },
    extend: {
      fontFamily: {
        Poppins: ['Poppins:ital'],
        Lexend: ['Lexend+Exa'],
        Cormorant: ['Cormorant+Infant'],
      },
    },
  },
  plugins: [],
}
