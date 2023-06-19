/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}", "./dist/**/*.{html,jsx}",],
  darkMode : 'class',
  theme: {
    extend: {
      fontFamily:{
        bebas: ['Bebas Neue'],
        montserrat : ['Montserrat'],
      },
      backgroundImage:{
        bgbi : "url('../src/assets/Project1_bi.png')",
        bgresto : "url('../src/assets/Project2_resto.png')"
      },
      animation: {
        puter: 'spin 3s liner once',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

