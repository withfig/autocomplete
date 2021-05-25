const INVALID_REGEXP = /(<|\[).*(>|\])/;

const ERROR_MESSAGE = `The prop contains invalid characters.
If you subcommand / option takes an argument takes an argument, Fig will automatically
display this when you add a name prop to the args object.`;

module.exports = {
  meta: {
    type: "problem",
  },
  create: function (context) {
    return {
      Property(node) {
        if (node.key.name === "options" || node.key.name === "subcommand") {
          if (node.value && node.value.type === "ArrayExpression") {
            node.value.elements.forEach((element) => {
              if (element.type !== "ObjectExpression") return;

              // Look for the name property in the options object
              const nameProp = element.properties.find(
                (prop) => prop.key && prop.key.name === "name"
              );

              if (!nameProp) return;

              // Case: The name value is a string (single value)
              if (nameProp.value.type === "Literal") {
                if (INVALID_REGEXP.test(nameProp.value.value)) {
                  context.report({
                    node: nameProp,
                    message: ERROR_MESSAGE,
                  });
                }
              }
              // Case: The name value is a list of strings (array)
              if (nameProp.value.type === "ArrayExpression") {
                nameProp.value.elements.forEach((literal) => {
                  if (INVALID_REGEXP.test(nameProp.value.value)) {
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
