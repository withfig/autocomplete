module.exports = {
    meta: {
        fixable: 'code',
        type: 'problem',
    },
    create: function (context) {
        return {
            // Identifier(node) {
            //     const parent = node.parent;
            //     if (node.name === 'subcommands' && parent.type === 'Property') {
            //         if (parent.value.type === 'ArrayExpression') {
            //             const subcommands = parent.value.elements;
            //             subcommands.map((command) => {
            //                 console.log(command.properties[0]);
            //             });
            //         }
            //     }
            // },
        };
    },
};
