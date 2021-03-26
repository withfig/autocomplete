module.exports = {
    meta: {
        fixable: 'code',
        type: 'problem',
    },
    create: function (context) {
        return {
            Identifier(node) {
                if (node.name === 'name') {
                    const parentValue = node.parent.value;
                    if (parentValue && parentValue.type === 'Literal') {
                        if (parentValue.value.endsWith('=')) {
                            console.log(parentValue);
                            context.report({
                                node,
                                message: 'The name property must not end with an =',
                                fix: (fixer) => {
                                    const [, end] = parentValue.range;
                                    return fixer.replaceTextRange([end - 2, end - 1], '');
                                },
                            });
                        }
                    }
                }
            },
        };
    },
};
