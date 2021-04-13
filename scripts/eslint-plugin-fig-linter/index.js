module.exports = {
  rules: {
    "no-malicious-script": require("./rules/no-malicious-script"),
    "no-name-equals": require("./rules/no-name-equals"),
    "no-invalid-option": require("./rules/no-invalid-option"),
    "no-invalid-name": require("./rules/no-invalid-name"),
  },
  configs: {
    recommended: {
      plugins: ["fig-linter"],
      rules: {
        "fig-linter/no-malicious-script": "error",
        "fig-linter/no-name-equals": "error",
        "fig-linter/no-invalid-option": "error",
        "fig-linter/no-invalid-name": "error",
      },
    },
  },
};
