/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "src/input.css", "./dist/*.html"],
  theme: {
    extend: {
      keyframes: {
        "border-Spin": {
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
      },
      animation: {
        "border-spin": "border-Spin 7s linear infinite",
      },
      fontFamily: {
        "play-fair": ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
