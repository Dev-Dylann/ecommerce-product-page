/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: "hsl(26, 100%, 55%)",
          pale: "hsl(25, 100%, 94%)",
        },
        blue: {
          dark: "hsl(220, 13%, 13%)",
          gray: "hsl(220, 14%, 75%)",
          darkGray: "hsl(219, 9%, 45%)",
          lightGray: "hsl(223, 64%, 98%)",
        },
        transBlack: "hsla(0, 0%, 0%, 0.75)",
      },
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans"],
      },
    },
  },
  plugins: [],
};
