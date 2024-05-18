/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0066FF",
        secondary: "#30E0AB",
        text: "#A3AED0",
        customBlue: "#707EAE",
        darkenedBlue: "#2B3674",
        darkenedBlue2: "#1D2555",
        pageColor: "#F4F7FE",
      },
    },
    screens: {
      '2xl': { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      'xl': { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      'lg': { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      'md': { max: "767px" },
      // => @media (max-width: 767px) { ... }

      'sm': { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};

