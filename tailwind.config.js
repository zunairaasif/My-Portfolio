/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lobster: ["Lobster", "cursive"],
      },
      colors: {
        primary: "#FF651C",
        secondary: "#313131",
        neutral: "#9ca3af",
      },
    },
  },
  plugins: [],
};
