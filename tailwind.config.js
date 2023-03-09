/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#FFE552",
        "subMain-color": "#FFEF97",
        "btn-green-color": "#BEE735",
        "pink-color": "#FFCFD8",
        "blue-color": "#E0F1FF",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
