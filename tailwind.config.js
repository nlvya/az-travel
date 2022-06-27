/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    minHeight: {
      300: "300px",
    },
    height: {
      33: "calc(100vh - 150px)",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
