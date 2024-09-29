/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px", // Customize for screens smaller than 500px
      },
    },
  },
  plugins: [],
};
