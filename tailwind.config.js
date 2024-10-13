/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      "purple-1": "#635FC7",
      "purple-2": "#A8A4FF",
      "grey-1": "#000112",
      "grey-2": "#20212C",
      "grey-3": "#2B2C37",
      "grey-4": "#3E3F4E",
      "grey-5": "#828FA3",
      "grey-6": "#E4EBFA",
      "grey-7": "#F4F7FD",
      "white-1": "#FFFFFF",
      "red-1": "#EA5555",
      "red-2": "#FF9898",
    },
    fontFamily: {
      sans: ['"Plus Jakarta Sans"', "sans-serif"],
    },
    extend: {
      typography: {
        "heading-xl": {
          fontWeight: "700",
          fontSize: "24px",
          lineHeight: "30px",
        },
        "heading-l": {
          fontWeight: "700",
          fontSize: "18px",
          lineHeight: "23px",
        },
        "heading-m": {
          fontWeight: "700",
          fontSize: "15px",
          lineHeight: "19px",
        },
        "heading-s": {
          fontWeight: "700",
          fontSize: "12px",
          lineHeight: "15px",
          letterSpacing: "2.4px",
        },
        "body-m": {
          fontWeight: "500",
          fontSize: "13px",
          lineHeight: "23px",
        },
        "body-s": {
          fontWeight: "700",
          fontSize: "12px",
          lineHeight: "15px",
        },
      },
    },
  },
  plugins: [],
};
