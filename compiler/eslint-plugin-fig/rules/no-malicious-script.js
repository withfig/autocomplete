const maliciousCodeRegex = /rm -[r,f]*/;

module.exports = {
    meta: {
        fixable: 'code',
        type: 'problem',
    },
    create: function (context) {
        return {
            Identifier(node) {
                if (node.name === 'script') {
                    if (maliciousCodeRegex.test(node.parent.value.value)) {
                        context.report({
                            node,
                            message: 'Scripts should not include malicious code',
                        });
                    }
                }
            },
        };
    },
};
