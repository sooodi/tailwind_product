/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    Container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#2F4786',
        primaryDark: '#1F2F59',
        primaryLight: '#92A8E3',
        secondary: '#2F8647',
        secondaryDark: '#125C27',
        secondaryLight: '#D2EBC0',
        secondarySLight: '#F2F5EF',
        black: '#020305',
        background: '#FFFFFF',
        offWhite: '#F8F8F8',
    
      },
      strokeWidth: {
        1.5: '1.5px',
      },
    },
  },
  plugins: [],
}
