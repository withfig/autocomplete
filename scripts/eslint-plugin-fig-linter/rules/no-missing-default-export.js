module.exports = {
  meta: {
    type: "problem",
  },
  create(context) {
    let hasExport = false;

    return {
      ExportDefaultDeclaration(node) {
        hasExport = true;
      },
      'ExportSpecifier[exported.name="default"]'(node) {
        hasExport = true;
      },
      "Program:exit"(node) {
        if (!hasExport) {
          context.report({
            node,
            message: "File must contain one default export.",
          });
        }
      },
    };
  },
};
