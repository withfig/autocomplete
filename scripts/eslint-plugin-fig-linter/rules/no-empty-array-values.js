module.exports = {
  meta: {
    type: "problem",
    fixable: "code",
  },
  create: function (context) {
    return {
      Property(node) {
        if (
          node.key.name === "options" ||
          node.key.name === "subcommands" ||
          node.key.name === "args"
        ) {
          if (node.value && node.value.type === "ArrayExpression") {
            if (node.value.elements.length === 0) {
              context.report({
                node: node,
                message:
                  "Empty arrays don't have any effect and can be omitted",
                fix: function (fixer) {
                  const [start, end] = node.range;
                  return fixer.removeRange([start, end + 1]);
                },
              });
            }
          }
        }
      },
    };
  },
};
