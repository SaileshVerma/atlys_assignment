/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-black-primary": "#131319",
        "background-black-secondary": "#27292D",
        "secondary-text-black": "#6B6C70",
      },
    },
  },
  plugins: [],
};
