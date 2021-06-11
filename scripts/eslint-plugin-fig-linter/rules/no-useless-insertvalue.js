module.exports = {
  meta: {
    type: "problem",
    fixable: "code",
  },
  create: function (context) {
    return {
      Property(node) {
        const keyName = node.key.name;
        if (keyName === "insertValue") {
          if (node.parent.type === "ObjectExpression") {
            const nameProp = node.parent.properties.find(
              (prop) => prop.key.name === "name"
            );

            if (!nameProp) return;

            const insertValue = node.value.value;
            const nameValue = nameProp.value.value;

            if (!insertValue || !nameValue) return;
            if (insertValue.trim() === nameValue.trim()) {
              context.report({
                node: node,
                message:
                  "The insertValue prop can be omitted if the value is the same as name",
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
