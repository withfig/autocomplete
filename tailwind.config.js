/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // the background color of the page
        shade0: "rgb(var(--shade0-color, 45 45 45) / <alpha-value>)",
        shade1: "rgb(var(--shade1-color, 57 57 57) / <alpha-value>)",
        shade2: "rgb(var(--shade2-color, 81 81 81) / <alpha-value>)",
        shade3: "rgb(var(--shade3-color, 119 119 119) / <alpha-value>)",
        shade4: "rgb(var(--shade4-color, 180 183 180) / <alpha-value>)",
        shade5: "rgb(var(--shade5-color, 204 204 204) / <alpha-value>)",
        shade6: "rgb(var(--shade6-color, 224 224 224) / <alpha-value>)",
        // the "brightest" color, used for text
        shade7: "rgb(var(--shade7-color, 255 255 255) / <alpha-value>)",
        // Typically Red
        accent0: "rgb(var(--accent0-color, 210 82 82) / <alpha-value>)",
        // Typically Orange
        accent1: "rgb(var(--accent1-color, 249 169 89) / <alpha-value>)",
        // Typically Yellow
        accent2: "rgb(var(--accent2-color, 255 198 109) / <alpha-value>)",
        // Typically Green
        accent3: "rgb(var(--accent3-color, 165 194 97) / <alpha-value>)",
        // Typically Light Blue
        accent4: "rgb(var(--accent4-color, 190 214 255) / <alpha-value>)",
        // Typically Dark Blue
        accent5: "rgb(var(--accent5-color, 108 153 187) / <alpha-value>)",
        // Typically Purple
        accent6: "rgb(var(--accent6-color, 209 151 217) / <alpha-value>)",
        // Varies,
        accent7: "rgb(var(--accent7-color, 249 115 148) / <alpha-value>)",
      },
    },
  },
};
