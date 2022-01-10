module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      lightpuple: "#7b85a6",
      purple: "#404d73",
      grey: "#b8c3d9",
      yellow: "#f2d272",
      yellowhite: "#f2dfbb",
      white: "#fff",
      black: "#000",
      "gry-dark": "#273444",
      "graay-light": "#d3dce6",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
