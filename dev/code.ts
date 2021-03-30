export const completionSpec: Fig.Spec = {
    name: 'code',
    description: 'Visual Studio Code',
    args: {
        template: 'filepaths',
    },
    options: [
        {
            name: ['-d', '--diff'],
            description: 'Compare two files with each other.',
            args: [
                {
                    template: 'filepaths',
                },
                {
                    template: 'filepaths',
                },
            ],
        },
        {
            name: ['-a', '--add'],
            description: 'Add folder(s) to the last active window',
            args: {
                template: 'folders',
            },
        },
        {
            name: ['-n', '--new-window'],
            description: 'Force to open a new window.',
            args: [
                {
                    template: 'filepaths',
                },
                {
                    template: 'filepaths',
                },
            ],
        },
    ],
};
