/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f8ff',
          100: '#e8f0fe',
          200: '#d7e3fc',
          300: '#bfd2ff',
          400: '#93b5ff',
          500: '#5a86ff',
          600: '#3d66f5',
          700: '#2e4fd1',
          800: '#273fa3',
          900: '#1e2e73',
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem',
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(0,0,0,0.2)'
      }
    },
  },
  plugins: [],
};
