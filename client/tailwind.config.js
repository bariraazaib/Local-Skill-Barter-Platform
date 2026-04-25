/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fa8e78',
        'skill-green': '#10b981', // Keeping this for secondary accents from screenshot
        'footer-from': '#c8f2ec',
        'footer-to': '#fed8cf',
      },
      fontFamily: {
        serif: ['"Times New Roman"', 'serif'],
      },
      backgroundImage: {
        'page-gradient': 'linear-gradient(to right bottom, rgba(11, 11, 11, 0), rgb(243, 208, 200))',
      }
    },
  },
  plugins: [],
}
