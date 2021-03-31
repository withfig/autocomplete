var completionSpec = {
    name: 'tar',
    description: 'Manipulating archive files',
    args: {
        variadic: true,
        template: 'folders',
    },
    options: [
        {
            name: ['-c', '--create'],
            description: 'Create a new archive',
            args: {
                variadic: true,
                template: 'folders',
            },
        },
        {
            name: ['-t', '--list'],
            description: 'List archive contents',
            args: {
                generators: {
                    script: "ls -1 | grep '.tar'",
                    splitOn: '\n',
                },
            },
        },
        {
            name: ['-x', '--extract'],
            description: 'Extract to disk',
            args: {
                generators: {
                    script: "ls -1 | grep '.tar'",
                    splitOn: '\n',
                },
            },
        },
        { name: ['-h', '--help'], description: 'Help' },
        { name: ['--version'], description: 'Version' },
        { name: ['--wildcards'], args: { name: 'pattern', description: 'ex: *.html' } },
    ],
};

