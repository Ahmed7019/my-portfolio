/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./dist/*.html"],
  theme: {
    extend: {
      fontFamily: {
        "play-fair": ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
