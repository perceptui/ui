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
      keyframes: {
        music: {
          "0%": { transform: "scaleY(1)" },
          "50%": { transform: "scaleY(0.5)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "music-1": "music 1s 1s infinite ease-in",
        "music-2": "music 2s 2s infinite ease-in",
        "music-3": "music 3s 2s infinite ease-in",
        "music-4": "music 1s 4s infinite ease-in",
      },
    },
  },
  plugins: [],
};
