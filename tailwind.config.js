/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#0066FF",
                secondary: "#31bf94",
                text: "#A3AED0",
                customBlue: "#707EAE",
                darkenedBlue: "#2B3674",
                darkenedBlue2: "#1D2555",
                pageColor: "#F4F7FE",
            },
            keyframes: {
                shine: {
                    "0%": { transform: "translateX(0) rotate(6deg)" },
                    "100%": { transform: "translateX(-1000px) rotate(6deg)" },
                },
            },
            animation: {
                shine: "shine 0.5s ease-in-out",
            },
        },
    },
    plugins: [],
};
