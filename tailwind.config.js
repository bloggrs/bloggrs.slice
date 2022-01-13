module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      // },
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
