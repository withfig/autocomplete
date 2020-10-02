var completionSpec = {

    name: "git",
    type: "root",
    description: "the stupid content tracker",
    // arg: { },
    children: [

        {
            
            type: "subcommand",
            name: "commit",
            insertValue: "commit ",
            description: "dummy commit description!",
            arg: {

            },
            children: [
                {
                    type: "option",
                    name: ["-m", "--message"],
                    insertValue: "-m '{cursor}'",
                    description: "use the given message as the commit message",
                    arg: {
                        takesInput: true,
                    },

                },
                {
                    type: "option",
                    name: ["-a", "--all"],
                    insertValue: `-a `,
                    description: "stage all modified and deleted paths",
                },
                {
                    type: "option",
                    name: ["-v", "--verbose"],
                    insertValue: `-v `,
                    description: "show unified diff of all file changes",
                },
            ]
        },

        {
            type: "subcommand",
            name: "add",
            insertValue: "add ",
            description: "add files for staging",
            arg: {
                takesInput: true, // default is optional
                variadic: true, // default is false
                staticSuggestions: ["."], // these can also be objects with type, name, and value
                templateSuggestions: ["files", "folders"],
                shellSuggestions: {
                    cmd: "git status --porcelain",
                    splitOn: "\n",
                    postprocess: function(out) {
                        if (out.startsWith("fatal:")) {
                            return []
                        }
                        return out.split('\n').map((file) => { return file.substring(2)})
                    }
                },
                // hideSuggestions: ["."]
            },
            children: []
        },
        {
            type: "subcommand",
            name: "status",
            insertValue: "status",
            description: "Show the working tree status",
            children: []
        },
        {
            type: "subcommand",
            name: "push",
            insertValue: "push ",
            description: "Update remote refs",
            // children: [ ],
            arg: [
                {
                    takesInput: true,
                    shellSuggestions: {
                        cmd: "git remote",
                        splitOn: "\n"
                    }
                },
                {
                    takesInput: true,
                    shellSuggestions: {
                        cmd: "git branch --no-color",
                        postprocess: function(out) {
                            if (out.startsWith("fatal:")) {
                                return []
                            }
                            return out.split('\n').map((file) => { return file.replace(" *", "") })
                        }
                    }
                }
            ]
        }
    ]
}
