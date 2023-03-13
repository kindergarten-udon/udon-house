/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#FFE552",
        "subMain-color": "#FFEF97",
        "btn-green-color": "#A7D803",
        "pink-color": "#FFCFD8",
        "blue-color": "#E0F1FF",
        "light-yellow-color": "#FFF5BA",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
