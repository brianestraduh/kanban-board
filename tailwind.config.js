/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
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
      fontSize: {
        "heading-xl": ["24px", "30px"],
        "heading-l": ["18px", "23px"],
        "heading-m": ["15px", "19px"],
        "heading-s": ["12px", { lineHeight: "15px", letterSpacing: "2.4px" }],
        "body-m": ["13px", "23px"],
        "body-s": ["12px", "15px"],
      },
      fontWeight: {
        "heading-xl": "700",
        "heading-l": "700",
        "heading-m": "700",
        "heading-s": "700",
        "body-m": "500",
        "body-s": "700",
      },
    },
  },
  plugins: [],
};
