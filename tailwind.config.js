/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter-Regular", "sans-serif"],
        "inter-light": ["Inter-Light", "sans-serif"],
        "inter-medium": ["Inter-Medium", "sans-serif"],
        "inter-semibold": ["Inter-SemiBold", "sans-serif"],
        "inter-bold": ["Inter-Bold", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#0B8FAC0A",
          200: "#0B8FAC1A",
          300: "#0B8FAC",
        },
        secondary: {
          100: "#7BC1B70A",
          200: "#7BC1B71A",
          300: "#7BC1B7",
        },
        accent: {
          100: "#FBFBFD",
        },
        black: {
          DEFAULT: "#000000",
          100: "#8C8E98",
          200: "#666876",
          300: "#191D31",
        },
        danger: "#F30000",
      },
    },
  },
  plugins: [],
};
