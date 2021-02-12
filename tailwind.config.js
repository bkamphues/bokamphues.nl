module.exports = {
  purge: ["./src/**/*.{js, jsx, ts, tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#083D77",
      secondary: "#F9C22E",
      "primary-light": "#6CD4FF",
      rose: "#F56476",
      "rose-dark": "#E43F6F",
    },
    fontFamily: { sans: ["Inter", "sans-serif"] },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
