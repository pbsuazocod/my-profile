/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ['"jost"', "sans-serif"],
      },
      minWidth: {
        "1/2": "50%",
      },
      fontSize: {
        "4vw": "4vw",
      },
    },
  },
  plugins: [],
};
