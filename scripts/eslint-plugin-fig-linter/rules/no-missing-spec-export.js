const SPEC_NAME = "completionSpec";

function isVariableDeclarator(node) {
  return node.type === "VariableDeclarator";
}

function isCompletionSpecExport(node) {
  if (isVariableDeclarator(node)) {
    if (node.id.type === "Identifier" && node.id.name === SPEC_NAME) {
      return true;
    }
  } /* ExportSpecifier */ else {
    if (node.exported.name === SPEC_NAME) {
      return true;
    }
  }
  return false;
}

module.exports = {
  meta: {
    type: "problem",
    fixable: true,
  },
  create(context) {
    let exports = [];

    return {
      "ExportNamedDeclaration > VariableDeclaration"(node) {
        exports.push(...node.declarations /* VariableDeclarator */);
      },
      ExportSpecifier(node) {
        exports.push(node);
      },
      "Program:exit"(node) {
        switch (exports.length) {
          case 0:
            context.report({
              node,
              message:
                "File must contain one `export const completionSpec: Fig.Spec` declaration.",
            });
            break;
          case 1:
            if (!isCompletionSpecExport(exports[0])) {
              context.report({
                node: isVariableDeclarator(exports[0])
                  ? exports[0].id
                  : exports[0].exported,
                message:
                  "The spec export of the file should be named `completionSpec`",
                fix(fixer) {
                  return isVariableDeclarator(exports[0])
                    ? fixer.replaceTextRange(
                        exports[0].id.range,
                        `${SPEC_NAME}: Fig.Spec`
                      )
                    : fixer.insertTextAfter(
                        exports[0].local,
                        ` as ${SPEC_NAME}`
                      );
                },
              });
            }
            break;
          default:
            // check if at least one of the exports is completionSpec
            if (!exports.some((_export) => isCompletionSpecExport(_export))) {
              context.report({
                node,
                message:
                  "Exactly one of the exports of the file should be named `completionSpec`",
              });
            }
        }
      },
    };
  },
};
