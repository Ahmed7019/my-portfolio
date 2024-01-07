/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      fontFamily: {
        "play-fair": ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
