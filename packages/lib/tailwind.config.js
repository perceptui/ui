/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        "16/9": "16 / 9",
        "4/3": "4 / 3",
        "1/1": "1 / 1",
        "3/4": "3 / 4",
        "9/16": "9 / 16",
        "21/9": "21 / 9",
      },
    },
  },
  plugins: [],
};
