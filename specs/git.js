var completionSpec = {

    name: "git",
    description: "the stupid content tracker",
    subcommands: [
        {
            name: "commit",
            description: "dummy commit description!",
            args: {},
            options: [
                {
                    name: ["-m", "--message"],
                    insertValue: "-m '{cursor}'",
                    description: "use the given message as the commit message",
                    args: {},

                },
                {
                    name: ["-a", "--all"],
                    description: "stage all modified and deleted paths",
                },
                {
                    name: ["-v", "--verbose"],
                    description: "show unified diff of all file changes",
                },
            ]
        },

        {
            name: "add",
            description: "add files for staging",
            args: {
                variadic: true, // default is false
                staticSuggestions: [
                    {   
                        name:".",
                        description: "current directory",
                        insertValue: "."
                    }
                ], // these can also be objects with type, name, and value
                templateSuggestions: ["files", "folders"],
                // shellSuggestions: {
                //     cmd: "git status --porcelain",
                //     splitOn: "\n",
                //     postProcess: function (out) {
                //         if (out.startsWith("fatal:")) {
                //             return []
                //         }
                //         return out.split('\n').map((file) => { return file.substring(3) })
                //     }
                // },
                // hideSuggestions: ["."]
            },
        },
        {

            name: "status",
            description: "Show the working tree status",
        },
        {
            name: "push",
            description: "Update remote refs",
            // children: [ ],
            args: [
                {
                    shellSuggestions: {
                        cmd: "git remote",
                        splitOn: "\n"
                    }
                },
                {
                    shellSuggestions: {
                        cmd: "git branch --no-color",
                        postProcess: function (out) {
                            if (out.startsWith("fatal:")) {
                                return []
                            }
                            return out.split('\n').map((elm) => { return elm.replace("*", "").trim() })
                        }
                    }
                }
            ]
        }
    ]
}
