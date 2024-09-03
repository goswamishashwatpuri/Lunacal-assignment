/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textcolor1: '#969696', // for paragraph
        textcolor2: '#A3ADB2', // for button label
        bgcolor1: '#363C43', // card bg color
        bgcolor2: '#171717', // 
        bgcolor3: '#28292F', // 
        //accent1: '#FFDB6E', // yellow accent
        //bordercolor: '#383838',
      }
    },
  },
  plugins: [],
}

