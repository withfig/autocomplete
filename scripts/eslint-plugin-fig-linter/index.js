const RM_RF_REGEXP = /rm \-(?:f(?:(?: \-)?r)?|r(?: \-f|f)?)/;

module.exports = {
  rules: {
    "no-malicious-script": {
      meta: {
        type: "problem",
      },
      create: function (context) {
        return {
          Property(node) {
            if (node.key.name === "script") {
              const scriptValue = node.value.value;
              if (RM_RF_REGEXP.test(scriptValue)) {
                context.report({
                  node,
                  message: "No Malicious Script allowed",
                });
              }
            }
          },
        };
      },
    },
    "no-name-equals": {
      meta: {
        type: "problem",
        fixable: "code",
      },
      create: function (context) {
        return {
          Property(node) {
            if (node.key.name === "name") {
              const currentNode = node.value;
              if (
                currentNode.type === "Literal" &&
                currentNode.value.endsWith("=")
              ) {
                context.report({
                  node,
                  message: "The name property must not include `=`",
                  fix: function (fixer) {
                    const [, end] = currentNode.range;
                    return fixer.replaceTextRange([end - 2, end - 1], "");
                  },
                });
              }
            }
          },
        };
      },
    },
  },
  configs: {
    recommended: {
      plugins: ["fig-linter"],
      rules: {
        "fig-linter/no-malicious-script": "error",
        "fig-linter/no-name-equals": "error",
      },
    },
  },
};
