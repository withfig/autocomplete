/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-bg": "var(--main-bg-color, rgb(48, 48, 48))",
        "main-text": "var(--main-text-color, rgb(180, 180, 180))",
        "description-text": "var(--description-text-color, rgb(180, 180, 180))",
        "description-border":
          "var(--description-border-color, rgb(65, 65, 65))",
        "selected-bg": "var(--selected-bg-color, rgb(30, 90, 199))",
        "selected-text": "var(--selected-text-color, rgb(253, 253, 253))",
        "matching-bg": "var(--matching-bg-color, rgb(95, 89, 56))",
        "selected-matching-bg":
          "var(--selected-matching-bg-color, rgb(106, 142, 218))",
      },
    },
  },
};
