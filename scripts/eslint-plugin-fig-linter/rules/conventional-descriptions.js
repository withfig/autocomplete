const PROBLEMES = {
  trailingDot: "no trailing dot",
  leadingWhitespaces: "no leading whitespaces",
  trailingWhitespaces: "no trailing whitespaces",
  uncapitalized: "first letter capitalized"
};

module.exports = {
  meta: {
    type: "problem",
    fixable: "code"
  },
  create: function (context) {
    return {
      'ObjectExpression > Property[key.name="description"]'(node) {
        const propValue = node.value;
        if (propValue.type === "Literal" && typeof propValue.value === "string") {
          let problems = [];
          let newString = propValue.raw.slice(1, -1); // exclude the StringLiteral op but keep escapes
          if (newString.startsWith(" ")) {
            problems.push(PROBLEMES.leadingWhitespaces);
            newString = newString.trimStart();
          }
          if (newString.endsWith(" ")) {
            problems.push(PROBLEMES.trailingWhitespaces);
            newString = newString.trimEnd();
          }
          if (newString.charAt(0) !== newString.charAt(0).toUpperCase()) {
            problems.push(PROBLEMES.uncapitalized);
            newString = newString.charAt(0).toUpperCase() + newString.slice(1);
          }
          if (newString.endsWith(".")) {
            problems.push(PROBLEMES.trailingDot);
            newString = newString.slice(0, -1);
          }
          if (problems.length) {
            context.report({
              node: propValue,
              message: `Descriptions should have: ${problems.join(", ")}.`,
              fix: function (fixer) {
                const d = propValue.raw.slice(0, 1) // keep the original StringLiteral op
                return fixer.replaceText(propValue, d + newString + d);
              }
            });
          }
        }
      }
    };
  }
};

