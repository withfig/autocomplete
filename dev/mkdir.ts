export const completionSpec: Fig.Spec = {
    name: 'mkdir',
    description: 'make directories',
    args: {
        name: 'directory name',
    },
    options: [
        {
            name: ['-m', '--mode'],
            description: 'set file mode (as in chmod), not a=rwx - umask',
            args: { name: 'MODE' },
        },
        {
            name: ['-p', '--parents'],
            description: 'no error if existing, make parent directories as needed',
        },
        {
            name: ['-v', '--verbose'],
            description: 'print a message for each created directory',
        },
        {
            name: ['-Z', '--context'],
            description: 'set the SELinux security context of each created directory to CTX',
            args: { name: 'CTX' },
        },
        { name: ['--help'], description: 'display this help and exit' },
        {
            name: ['--version'],
            description: 'output version information and exit',
        },
    ],
};
