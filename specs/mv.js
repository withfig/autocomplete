var completionSpec = {
    name: 'mv',
    description: 'move & rename files and folders',
    args: [
        {
            template: 'filepaths',
        },
        {
            template: 'folders',
        },
    ],
    options: [
        {
            name: ['-R'],
            description: 'recursive',
        },
        {
            name: '-P',
            description: "Don't follow symbolic links",
        },
    ],
};

