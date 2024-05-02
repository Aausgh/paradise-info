/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'sHeaderText': '#8a98ae',
        'sMainText': '#d9e4ee',
        'darkBg': '#1b222d',
        'darkBox': '#25303e'
      }
    }
  },
  plugins: [],
};
