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
            let names = [];
            switch (nameProp.value.type) {
              case "Literal":
                // e.g. name: "npm"
                names = [nameProp.value];
                break;
              case "ArrayExpression":
                // e.g. name: ["-v", "--version"]
                names = nameProp.value.elements;
                break;
              default:
                return;
            }
            names.forEach((v) => {
              if (set.has(v.value)) {
                return context.report({
                  node: v,
                  message: `Duplicate "${v.value}" ${
                    node.key.name === "options" ? "option" : "subcommand"
                  } name.`,
                });
              }
              set.add(v.value);
            });
          }
        }
      },
    };
  },
};
