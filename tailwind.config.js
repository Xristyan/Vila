/** Build: npx tailwindcss@3 -i tailwind.input.css -o assets/css/tailwind.css --minify */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#f4f6f2",
          100: "#e4e9df",
          200: "#c8d4be",
          300: "#a8b99a",
          400: "#8a9d7a",
          500: "#6d8260",
          600: "#566a4c",
          700: "#44533d",
          800: "#384433",
          900: "#2f392c",
        },
        cream: {
          50: "#fdfcfa",
          100: "#f9f6f0",
          200: "#f3ede2",
          300: "#e8dfd0",
        },
        timber: {
          100: "#f0ebe4",
          200: "#e0d5c8",
          300: "#c9b9a5",
          400: "#b09a82",
        },
        charcoal: {
          600: "#4a4a48",
          700: "#3d3d3b",
          800: "#2e2e2c",
          900: "#1f1f1e",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
      },
    },
  },
};
