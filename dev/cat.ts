export const completionSpec: Fig.Spec = {
    name: 'cat',
    description: 'concatenate and print files',
    args: {
        variadic: true,
        template: 'filepaths',
    },
};
