export const lsCompletionSpec: Fig.Spec = {
    name: 'ls',
    description: 'list directory contents',
    args: {
        isVariadic: true,
        template: 'folders',
    },
    options: [
        {
            name: '-l',
            description: 'list in long format',
        },
        {
            name: ['-1'],
            description: 'one entry per line',
        },
        {
            name: ['-A'],
            description: 'list all entries except for . and ..',
        },
        {
            name: ['-a'],
            description: 'include directory that begin with a dot',
        },
        {
            name: ['-F'],
            description: 'Add special character for different types of files',
        },
        {
            name: ['-p'],
            description: 'Write a slash after each filename if that file is a directory.',
        },
        {
            name: ['-R'],
            description: 'Recursively list subdirectories encountered.',
        },
    ],
};
