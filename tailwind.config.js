/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Comps/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green1': '#E0F4F1',
        'green2': '#91CED1',
        'green3': '#59BEBF',
        'green4': '#38A7A1',
        'yellowx': '#FBF3AA',
      },
    },
  },
  plugins: [],
}
