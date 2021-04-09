var completionSpec = {
    name: "rbenv",
    description: "",
    subcommands: [
        {
            name: "commands",
            description: "List all available rbenv commands",
            options: [
                {
                    name: ["--sh"],
                },
                {
                    name: ["--no-sh"],
                },
            ],
            subcommands: [],
        },
        {
            name: "global",
            description: "Set or show the global Ruby version",
            options: [],
            subcommands: [],
            args: {},
        },
        {
            name: "install",
            description: "Install a Ruby version using ruby-build",
            options: [
                {
                    name: ["--version"],
                    description: "Show version of ruby-build ",
                    args: {},
                },
            ],
            subcommands: [],
        },
        {
            name: "local",
            description: "Set or show the local application-specific Ruby version",
            options: [],
            subcommands: [],
        },
        {
            name: "rehash",
            description: "Rehash rbenv shims (run this after installing executables)",
            options: [],
            subcommands: [],
        },
        {
            name: "shell",
            description: "Set or show the shell-specific Ruby version",
            subcommands: [],
        },
        {
            name: "uninstall",
            description: "Uninstall a specific Ruby version",
            options: [
                {
                    name: ["-f"],
                    description: "If the version does not exist, do not display an error message. ",
                    args: {},
                },
            ],
            subcommands: [],
        },
        {
            name: "versions",
            description: "List installed Ruby versions",
            options: [],
            subcommands: [],
        },
        {
            name: "whence",
            description: "List all Ruby versions that contain the given executable",
            options: [],
            subcommands: [],
        },
        {
            name: "which",
            description: "Display the full path to an executable",
            options: [],
            subcommands: [],
            args: [{ name: "command" }],
        },
    ],
};

