var completionSpec = {

    name: "git",
    description: "the stupid content tracker",
    subcommands: [
        {
            name: "commit",
            description: "Record changes to the repository",
            insertValue: "commit ",
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
            description: "Add file contents to the index",
            // options:[
            //     {
            //         name: ["-A", "--all", "--no-ignore-removal"],
            //         description: "Update all files in the entire working tree"
            //     }
            // ],
            args: {
                variadic: true, // default is false
                staticSuggestions: [
                    {   
                        name:".",
                        description: "current directory",
                        insertValue: ".",
                        icon: "fig://icon?type=folder"
                    }
                ], // these can also be objects with type, name, and value
                // templateSuggestions: ["files", "folders"],
                shellSuggestions: {
                    cmd: "git status --short",
                    postProcess: function (out) {
                        if (out.startsWith("fatal:")) {
                            return []
                        }

                        var files = out.split('\n').map((file) => { return file.substring(3) }).slice(0,-1)

                        return files.map(file => {
                            var ext = ""
                            try {
                                ext = file.split('.').slice(-1)[0]
                            } catch(e){}

                            if (file.endsWith('/')) {
                                ext = "folder"
                            }

                            return { name: file, icon: `fig://icon?type=${ext}`, description: "Updated file"}
                        })
                    }
                },
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
                        postProcess: function(out) {
                            return out.split('\n').map(remote => {
                                return { name: remote, description: "remote"}
                            }).slice(0, -1)
                        }
                    }
                },
                {
                    shellSuggestions: {
                        cmd: "git branch --no-color",
                        postProcess: function (out) {
                            if (out.startsWith("fatal:")) {
                                return []
                            }
                            return out.split('\n').map((elm) => { return { name: elm.replace("*", "").trim(), description: "branch" } }).slice(0, -1)
                        }
                    }
                }
            ]
        },
        {
            name: "pull",
            description: "Integrate with another repository",
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
        },

       {name: "clone",      description: "Clone a repository into a new directory"},
       {name: "init",       description: "Create an empty Git repository or reinitialize an existing one"},
       // {name: "add",        description: "Add file contents to the index"},
       {name: "mv",         description: "Move or rename a file, a directory, or a symlink"},
       {name: "reset",      description: "Reset current HEAD to the specified state"},
       {name: "rm",         description: "Remove files from the working tree and from the index"},
       {name: "bisect",     description: "Use binary search to find the commit that introduced a bug"},
       {name: "grep",       description: "Print lines matching a pattern"},
       {name: "log",        description: "Show commit logs"},
       {name: "show",       description: "Show various types of objects"},
       // {name: "status",     description: "Show the working tree status"},
       {name: "branch",     description: "List, create, or delete branches"},
       {name: "checkout",   description: "Switch branches or restore working tree files"},
       // {name: "commit",     description: "Record changes to the repository"},
       {name: "diff",       description: "Show changes between commits, commit and working tree, etc"},
       {name: "merge",      description: "Join two or more development histories together"},
       {name: "rebase",     description: "Reapply commits on top of another base tip"},
       {name: "tag",        description: "Create, list, delete or verify a tag object signed with GPG"},
       {name: "fetch",      description: "Download objects and refs from another repository"},
       // {name: "pull",       description: "Fetch from and integrate with another repository or a local branch"},
       // {name: "push",       description: "Update remote refs along with associated objects"},
    ]
}
