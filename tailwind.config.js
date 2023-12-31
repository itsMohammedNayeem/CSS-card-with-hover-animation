/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // black: "#000000",
        neutral: {
          100: "#ffffff",
          900: "#13171b",
        },
        accent: {
          400: "#42f584",
        },
        firstGrad: "hsl(0 0% 0% / 0)",
        secondGrad: "hsl(20 0% 0% / 0.3)",
        lastGrad: "hsl(0 0% 0% / 1)",
        buttonColor: "hsl(207 19% 9%)",
      },
    },
  },
  plugins: [],
};
