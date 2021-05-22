var completionSpec = {
    name: "sudo",
    description: "execute a command as the superuser or another user",
    options: [
        {
            name: ["-g", "--group"],
            description: "run command as the specified group name or ID",
            args: {
                name: "group",
                description: "group name or ID",
            },
        },
        {
            name: ["-h", "--help"],
            description: "display help message and exit",
        },
        {
            name: ["-u", "--user"],
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

