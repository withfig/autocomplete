module.exports = {
  meta: {
    type: "problem",
    fixable: "code",
  },
  create: function (context) {
    return {
      Property(node) {
        const keyName = node.key.name;
        if (["options", "subcommands", "args"].includes(keyName)) {
          // This rule should not be applied to subcommands and
          // options on the root object
          if (
            node.parent.parent.parent.parent.type ===
              "ExportNamedDeclaration" &&
            keyName !== "args"
          )
            return;

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
