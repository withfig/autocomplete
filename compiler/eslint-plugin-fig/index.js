module.exports = {
    rules: {
        'no-malicious-script': require('./rules/no-malicious-script'),
        'no-equals-in-name': require('./rules/no-equals-in-name'),
        'no-empty-arg': require('./rules/no-empty-arg'),
    },
    configs: {
        recommended: require('./configs/recommended'),
    },
};
