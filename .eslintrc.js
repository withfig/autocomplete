module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:fig-linter/recommended",
  ],
  plugins: ["fig-linter"],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "no-unused-vars": ["off"],
    "no-var": ["off"],
    "@typescript-eslint/no-unused-vars": ["off"],
  },
};
