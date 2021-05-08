var completionSpec = {
    name: "sudo",
    description: "execute a command as the superuser or another user",
    subcommands: [],
    options: [
        {
            name: ["-g"],
            description: "run command as the specified group name or ID",
            args: {
                name: "group",
                description: "group name or ID",
            },
        },
        {
            name: ["-h"],
            description: "display help message and exit",
        },
        {
            name: ["-u"],
            description: "run command as specified user name or ID",
            args: {
                name: "user",
                description: "user name or ID",
            },
        },
    ],
    // Only uncomment if sudo takes an argument
    args: {
        name: "command",
        description: "command to run with elevated permissions",
        isCommand: true,
    },
};

