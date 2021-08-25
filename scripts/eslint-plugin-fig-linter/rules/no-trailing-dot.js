module.exports = {
  meta: {
    type: "problem",
    fixable: "code",
  },
  create: function (context) {
    return {
      'ObjectExpression > Property[key.name="description"]'(node) {
        const propValue = node.value;
        if (
          propValue.type === "Literal" &&
          typeof propValue.value === "string" &&
          propValue.value.slice(-1) === "."
        ) {
          context.report({
            node: propValue,
            message: `Trailing dot is not allowed in descriptions.`,
            fix: function (fixer) {
              const [, end] = propValue.range;
              return fixer.removeRange([end - 2, end - 1]);
            },
          });
        }
      },
    };
  },
};
