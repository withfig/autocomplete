module.exports = {
  rules: {
    "no-malicious-script": require("./rules/no-malicious-script"),
    "no-name-equals": require("./rules/no-name-equals"),
    "no-invalid-option": require("./rules/no-invalid-option"),
    "no-invalid-name": require("./rules/no-invalid-name"),
    "no-empty-array-values": require("./rules/no-empty-array-values"),
  },
  configs: {
    recommended: {
      plugins: ["fig-linter"],
      rules: {
        "fig-linter/no-malicious-script": "error",
        "fig-linter/no-empty-array-values": "error",
        "fig-linter/no-name-equals": "error",
        // TODO: Re-Enable Rule if we got a proper flag for that
        "fig-linter/no-invalid-option": "off",
        "fig-linter/no-invalid-name": "error",
      },
    },
  },
};
