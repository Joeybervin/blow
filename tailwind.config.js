/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ], 
  theme: {
    extend: {},
  },
  daisyui: {
    darkMode: 'dark',
    themes: ["dark", "wireframe", "cupcake"],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('@tailwindcss/forms'),
    require("daisyui"),
  ],
}
