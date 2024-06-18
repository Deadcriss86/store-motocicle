/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customColors: {
          light: "#FFECB3",
          DEFAULT: "#FFC107",
          darkGray: "#0d0d0d",
        },
      },
    },
  },

  plugins: [daisyui],
  daisyui: {
    themes: [],
  },
};
