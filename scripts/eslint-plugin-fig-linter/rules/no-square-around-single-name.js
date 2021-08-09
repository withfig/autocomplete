module.exports = {
  meta: {
    type: "problem",
    fixable: "code",
  },
  create: function (context) {
    return {
      'ObjectExpression > Property[key.name="name"]'(node) {
        if (
          node.value.type === "ArrayExpression" &&
          node.value.elements.length === 1
        ) {
          context.report({
            node: node,
            message:
              "If `name` is a single value it should not be enclosed in square brackets.",
            fix: function (fixer) {
              const [start, end] = node.value.range;
              return [
                fixer.removeRange([start, start + 1]),
                fixer.removeRange([end - 1, end]),
              ];
            },
          });
        }
      },
    };
  },
};
