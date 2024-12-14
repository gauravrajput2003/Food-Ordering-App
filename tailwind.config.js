/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",           // Matches all HTML files in the root directory
    "./src/**/*.{js,jsx}" // Matches all JS and JSX files inside the src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
