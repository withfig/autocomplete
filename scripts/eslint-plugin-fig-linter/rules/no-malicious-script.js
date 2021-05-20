const RM_RF_REGEXP = /rm \-(?:f(?:(?: \-)?r)?|r(?: \-f|f)?)/;

module.exports = {
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
};
