/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1440px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: '#5FB4A2',
        'primary-darker' : '#203A4C',
        'primary-grayish': '#33323D',
        secondary: '#FAFAFA',
        'secondary-dark': '#EAEAEB',
        error: '#F43030'
      }
    },
  },
  plugins: [],
}