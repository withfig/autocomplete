function getNameProperty(object) {
  for (const property of object.properties) {
    if (
      property.type === "Property" && 
      property.key.type === "Identifier" && 
      property.key.name === "name"
    ) {
      return property
    }
  }
}

module.exports = {
  meta: {
    type: "problem",
  },
  create: function (context) {
    function checkName(node, set) {
      if (set.has(node.value)) {
        return context.report({
          node: node,
          message: `Duplicate "${node.value}" name.`
        })
      }
      set.add(node.value)
    }
    return {
      'ObjectExpression > Property[key.type="Identifier"]'(node) {
        if (node.key.name === "options" || node.key.name === "subcommands") {
          const set = new Set()
          if (node.value.type === "ArrayExpression") {
            for (const obj of node.value.elements) {
              if (obj.type === "ObjectExpression") {
                const nameProp = getNameProperty(obj)
                if (nameProp) {
                  if (nameProp.value.type === "Literal") {
                    checkName(nameProp.value, set)
                  } else if (nameProp.value.type === "ArrayExpression") {
                    nameProp.value.elements.forEach(v => checkName(v, set))
                  }
                }
              }
            }
          }
        }
      }
    };
  },
};

