/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./dist/*.html"],
  theme: {
    extend: {
      keyframes: {
        "border-spin": {
          "100%": {
            transofrm: "rotate(-360deg)",
          },
        },
      },
      animation: {
        "border-spin": "border-spin 7s linear infinite",
      },
      fontFamily: {
        "play-fair": ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
