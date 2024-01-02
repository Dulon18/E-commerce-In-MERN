/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
     fontFamily: {
       'poppins': ['Poppins', 'sans-serif'],
       'Avenir':['Sen', 'sans-serif']
      },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
    daisyui: {
    themes: ["light"],
  },
}