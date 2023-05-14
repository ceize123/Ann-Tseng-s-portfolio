/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      pink: '#f4cccc',
      yellow: '#fec20e',
      black: '#000',
      gray: '#444',
      dark: '#333',
      'light-gray': '#555',
      white: '#fff',
    },
    extend: {
      fontFamily: {
        Poppins: ['Poppins'],
        PoppinsIta: ['Poppins:ital'],
        Bodoni: ['Bodoni Moda'],
      },
      lineHeight: {
        'extra-loose': '2.5',
      },
    },
  },
  plugins: [],
};
