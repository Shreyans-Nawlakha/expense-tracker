/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        code:"#c1dadf",
        bgd: "#050f24",
        primary: "#27496d",
        secondary: "#0C7B93",
        accent: "#00FFF2",
      },
    },
  },
  plugins: [],
};
