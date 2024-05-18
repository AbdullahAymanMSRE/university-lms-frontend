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
  },
  plugins: [],
};

