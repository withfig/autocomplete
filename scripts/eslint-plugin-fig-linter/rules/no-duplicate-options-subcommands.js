function getNameProperty(object) {
  for (const property of object.properties) {
    if (
      property.type === "Property" &&
      property.key.type === "Identifier" &&
      property.key.name === "name"
    ) {
      return property;
    }
  }
}

module.exports = {
  meta: {
    type: "problem",
  },
  create: function (context) {
    return {
      'ObjectExpression > Property[key.type="Identifier"]'(node) {
        if (node.key.name === "options" || node.key.name === "subcommands") {
          const set = new Set();
          if (node.value.type !== "ArrayExpression") return;
          for (const obj of node.value.elements) {
            if (obj.type !== "ObjectExpression") return;
            const nameProp = getNameProperty(obj);
            if (!nameProp) return;
            let nameLiterals = [];
            switch (nameProp.value.type) {
              case "Literal":
                // e.g. name: "npm"
                nameLiterals = [nameProp.value];
                break;
              case "ArrayExpression":
                // e.g. name: ["-v", "--version"]
                nameLiterals = nameProp.value.elements;
                break;
              default:
                return;
            }
            nameLiterals.forEach((nameLiteral) => {
              if (set.has(nameLiteral.value)) {
                return context.report({
                  node: nameLiteral,
                  message: `Duplicate "${nameLiteral.value}" ${
                    node.key.name === "options" ? "option" : "subcommand"
                  } name.`,
                });
              }
              set.add(nameLiteral.value);
            });
          }
        }
      },
    };
  },
};
