module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          base: "#1DA1F2",
          dark: "hsl(203, 89%, 46%)",
          light: "hsl(203, 89%, 94%)",
        },
        gray: {
          dark: "#657786",
          light: "#AAB8C2",
          extraLight: "#E1E8ED",
          lightets: "#F5F8FA",
        },
        black: "#14171A",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
