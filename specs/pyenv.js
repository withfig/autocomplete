var versionList = {
    script: "pyenv install -l",
    postProcess: function (out) {
        var lines = out.split("\n");
        var versionList = [];
        for (var i = 1; i < lines.length; i++) {
            versionList.push({
                name: lines[i],
                icon: "🐍",
            });
        }
        return versionList;
    },
};
var completionSpec = {
    name: "pyenv",
    description: "pyenv",
    args: {},
    options: [
        {
            name: ["-h", "--help"],
            description: "Output usage information",
        },
    ],
    subcommands: [
        {
            name: "commands",
            description: "Lists all available pyenv commands.",
        },
        {
            name: "local",
            description: "Sets a local application-specific Python version",
            args: {
                name: "python version",
                variadic: true,
            },
            options: [
                {
                    name: ["--unset"],
                },
            ],
        },
        {
            name: "global",
            description: "Sets the global version of Python to be used in all shells",
            args: {
                name: "python version",
            },
        },
        {
            name: "shell",
            description: "Sets a shell-specific Python version",
            args: {
                name: "python version",
            },
            options: [
                {
                    name: ["--unset"],
                },
            ],
        },
        {
            name: "install",
            description: "Install a Python version",
            args: {
                name: "python version",
                generators: versionList,
            },
            options: [
                {
                    name: ["-l", "--list"],
                    description: "List all available versions",
                },
                {
                    name: ["-f", "--force"],
                    description: "Install even if the version appears to be installed already",
                },
                {
                    name: ["-s", "--skip-existing"],
                    description: "Skip the installation if the version appears to be installed already",
                },
                {
                    name: ["-k", "--keep"],
                    description: "Keep source tree in $PYENV_BUILD_ROOT after installation",
                },
                {
                    name: ["-v", "--verbose"],
                    description: "Verbose mode: print compilation status to stdout",
                },
                {
                    name: ["-p", "--patch"],
                    description: "Apply a patch from stdin before building",
                },
                {
                    name: ["-g", "--debug"],
                    description: "Build a debug version",
                },
            ],
        },
        {
            name: "uninstall",
            description: "Performs a deployment (default)",
            args: {
                name: "version",
            },
            options: [
                {
                    name: ["-f", "--force"],
                    description: "Attempt to remove the specified version without prompting for confirmation.",
                },
            ],
        },
        {
            name: "rehash",
            description: "Performs a deployment (default)",
        },
        {
            name: "version",
            description: "Displays the currently active Python version, along with information on how it was set.",
        },
        {
            name: "versions",
            description: "Lists all Python versions known to pyenv, and shows an asterisk next to the currently active version.",
        },
        {
            name: "which",
            description: "Displays the full path to the executable that pyenv will invoke when you run the given command.",
            args: {
                name: "command",
            },
        },
        {
            name: "whence",
            description: "Lists all Python versions with the given command installed.",
            args: {
                name: "command",
            },
        },
    ],
};

