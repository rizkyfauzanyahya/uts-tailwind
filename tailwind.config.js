/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        f1: "#31A0FE",
        f2: "#23856D",
        f3: "#EC5C2E",
        f4: "#E154FF",
        df1: "#252B42",
        df2: "#394264",
        bgc1: "#5DE2E7",
        bgc2: "#E4080A",
      },
      backgroundImage: {
        bg1: "url('../img/cp-bg.png')",
        bg2: "url('../img/cp-bg-2.png')",
        dbg1: "url('../img/bg-dark-header.png')",
        dbg2: "url('../img/bg-dark-content.png')",
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}