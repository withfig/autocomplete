var completionSpec = {
    name: "node",
    description: "Run the node interpretor",
    args: {
        name: "node script",
        isScript: true,
        generators: {
            template: "filepaths",
            filterTemplateSuggestions: function (paths) {
                return paths.filter(function (file) {
                    if (typeof file.name === "string") {
                        return file.name.endsWith(".js") || file.name.endsWith("/");
                    }
                    return false;
                });
            },
        },
    },
    options: [
        {
            name: ["-e", "--eval=..."],
            insertValue: "-e '{cursor}'",
            description: "evaluate script",
            args: {},
        },
        {
            name: ["-p", "--print"],
            description: "evaluate script and print result",
        },
        {
            name: ["-c", "--check"],
            description: "syntax check script without executing",
        },
        {
            name: ["-v", "--version"],
            description: "print Node.js version",
        },
        {
            name: ["-i", "--interactive"],
            description: "always enter the REPL even if stdin does not appear to be a terminal",
        },
    ],
};

