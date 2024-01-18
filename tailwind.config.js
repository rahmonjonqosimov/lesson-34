/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./pages/*.html"],
  theme: {
    extend: {
      colors: {
        colorFirst: "#70C174",
        colorSecond: "#BEF3C0",
        colorThird: "#EFF7F2",
        colorFourth: "#0B0706",
        colorFifth: "#1D2130",
        colorSixth: "#525560",
        colorSeventh: "#EBF0F9",
        colorEighth: "#E5E5E5",
        color: "#1D2130",
      
      },
      backgroundImage: {
        "bx-x": "url('/images/bx-x.svg')",
        "bx-menu": "url('/images/bx-menu.svg')",
        "project-pattern1": "url('../images/project-img1.png')",
        "project-pattern2": "url('../images/project-img2.png')",
        "project-pattern3": "url('../images/project-img3.png')",
        "project-pattern": "url('../images/project-img.png')",
        "bg-home": "url('../images/BGhome.svg')",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    screens: {
      vr: "300px",
      sm: "480px",
      ms: "520px",
      md: "768px",
      dm: "800px",
      lg: "976px",
      xl: "1320px",
    },
  },
  plugins: [],
};
