module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#101010',
        'light': '#f4f4f4',
      },
      backgroundImage: {
        'leaves': "url('../public/bg.jpg')",
      }
    },
  },
  plugins: [],
}
