/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-black-primary": "#131319",
        "background-black-secondary": "#27292D",
        "secondary-text-black": "#6B6C70",
        "grey-1": "#C5C7CA",
        "border-primary-black": "#27292D",
        "border-secondary-black": "#35373B",
      },
    },
  },
  plugins: [],
};
