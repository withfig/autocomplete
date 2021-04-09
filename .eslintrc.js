module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:fig-linter/recommended",
  ],
  plugins: ["fig-linter"],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "prettier/prettier": [
      "error",
      {
        // Optional Prettier config changes
        trailingComma: "es5",
        printWidth: 80,
      },
    ],
    "no-unused-vars": ["off"],
    "@typescript-eslint/no-unused-vars": ["off"],
  },
};
