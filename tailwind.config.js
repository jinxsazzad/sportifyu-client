/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#37BEB0",
          "secondary": "#0C6170",
          "accent": "#A4E5E0"
          // #DBF5F0
        },
      },
    ],
  },
}

