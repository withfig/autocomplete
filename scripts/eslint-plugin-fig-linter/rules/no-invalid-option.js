const DASH_CHAR = "-";

const ERROR_MESSAGE = `
1. Each individual option should be listed separately in the array of option objects e.g. "-am" should have an option for -a" and an option for "-m"

2. If you would like to provide custom suggestions for common flag sequences, please list them as Suggestion objects using the additionalSuggestions prop with type: shortcut`;

function getDashAmount(string) {
  let count = 0;
  if (string.length === 0) return 0;
  if (string[0] === DASH_CHAR) {
    count++;
  }
  if (string[1] === DASH_CHAR) {
    count++;
  }
  return count;
}

function checkIsInvalidName(name) {
  const dashAmount = getDashAmount(name);
  const lengthWithoutDashes = name.slice(dashAmount).length;
  return (
    (dashAmount === 1 && lengthWithoutDashes > 1) ||
    (dashAmount === 2 && lengthWithoutDashes === 1)
  );
}

module.exports = {
  meta: {
    type: "problem",
  },
  create: function (context) {
    return {
      Property(node) {
        if (node.key.name === "options") {
          if (node.value && node.value.type === "ArrayExpression") {
            node.value.elements.forEach((element) => {
              if (element.type !== "ObjectExpression") return;

              // Look for the name property in the options object
              const nameProp = element.properties.find(
                (prop) => prop.key.name === "name"
              );

              // Case: The name value is a string (single value)
              if (nameProp.value.type === "Literal") {
                const isInvalid = checkIsInvalidName(nameProp.value.value);
                if (isInvalid) {
                  context.report({
                    node: element,
                    message: ERROR_MESSAGE,
                  });
                }
              }
              // Case: The name value is a list of strings (array)
              if (nameProp.value.type === "ArrayExpression") {
                nameProp.value.elements.forEach((literal) => {
                  const isInvalid = checkIsInvalidName(literal.value);
                  if (isInvalid) {
                    context.report({
                      node: literal,
                      message: ERROR_MESSAGE,
                    });
                  }
                });
              }
            });
          }
        }
      },
    };
  },
};
