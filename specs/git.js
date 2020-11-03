var completionSpec = {

    name: "git",
    description: "Arguably the most useful tool in the history of software",
    subcommands: [
        {
            name: "commit",
            description: "Record changes to the repository",
            insertValue: "commit",
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
                    name: "-am",
                    insertValue: "-am '{cursor}'",
                    description: "stage all and use given text as commit message",
                },
                {
                    name: ["-v", "--verbose"],
                    description: "show unified diff of all file changes",
                },
            ]
        },
        {
            name: "config",
            description: "set author",
            insertValue: "config {cursor}",
            options: [
                {
                    name: "--local",
                    insertValue: "--local {cursor}",
                    description: "Default: write to the repository .git/config file",
                    args: {
                        variadic: true,
                        suggestions: [
                            {
                                name: "user.name",
                                description: "set config for username",
                                insertValue: "user.name '{cursor}'",
                            },
                            {
                                name: "user.email",
                                description: "set config for email",
                                insertValue: "user.email '{cursor}'",
                            }
                        ],
                    },
                },
                {
                    name: "--global",
                    insertValue: "--global {cursor}",
                    description: "For writing options: write to global ~/.gitconfig file rather than the" +
                        " repository .git/config",
                    args: {
                        variadic: true,
                        suggestions: [
                            {
                                name: "user.name",
                                description: "set config for username",
                                insertValue: "user.name '{cursor}'",
                            },
                            {
                                name: "user.email",
                                description: "set config for email",
                                insertValue: "user.email '{cursor}'",
                            }
                        ],
                    },
                }
            ],
        },
        {
            name: "rebase",
            description: "Reapply commits on top of another base tip",
            insertValue: "rebase",
            options: [
                {name: ["--continue"], description: "continue the rebasing after conflict resolution"},
                {name: ["--abort"], description: "stop rebase"},
                {
                    name: ["-i"],
                    description: "interactive"
                }
            ],
            args: {
                suggestions: [],
                generator: {
                    script: "git log --oneline",
                    postProcess: function (out) {
                        if (out.startsWith("fatal:")) {
                            return []
                        }

                        return out.split('\n').map((line) => {
                            return {
                                name: line,
                                insertValue: line.substring(0, 7),
                                icon: "🔹",
                                description: "single line commit"
                            }
                        })
                    }
                },
                templateSuggestions: ["files"]
            },
        },
        {
            name: "add",
            description: "Add file contents to the index",
            options: [
                {
                    name: ["-A", "--all", "--no-ignore-removal"],
                    description: "Add, modify, and remove index entries to match the working tree"
                },
                {
                    name: ["-f", "--force"],
                    description: "Allow adding otherwise ignored files"
                },
                {
                    name: ["-i", "--interactive"],
                    description: "Add modified contents in the working tree interactively to the index"
                },
                {
                    name: ["-n", "--dry-run"],
                    description: "Don't actually add the files(s), just show if they exist and/or will be ignored"
                },
                {
                    name: ["-p", "--patch"],
                    description: "Interactively choose hunks of patch between the index and the work tree and add" +
                        " them to the index"
                },

            ],
            args: {
                variadic: true, // default is false
                suggestions: [
                    {
                        name: ".",
                        description: "current directory",
                        insertValue: ".",
                        icon: "fig://icon?type=folder"
                    }
                ], // these can also be objects with type, name, and value
                templateSuggestions: ["files", "folders"],
                generator: {
                    script: "git status --short",
                    postProcess: function (out) {
                        if (out.startsWith("fatal:")) {
                            return []
                        }

                        var items = out.split('\n').map((file) => {
                            return {working: file.substring(1, 2), file: file.substring(3)}
                        }).slice(0, -1)

                        return items.map(item => {
                            let file = item.file
                            var ext = ""

                            try {
                                ext = file.split('.').slice(-1)[0]
                            } catch (e) {
                            }

                            if (file.endsWith('/')) {
                                ext = "folder"
                            }

                            return {
                                name: file,
                                icon: `fig://icon?type=${ext}&color=ff0000&badge=${item.working}`,
                                description: "Changed file"
                            }
                        })
                    }
                },
            },
        },
        {
            name: "status",
            description: "Show the working tree status",
        },
        {
            name: "push",
            description: "Update remote refs",
            options: [
                {
                    name: "-all",
                    description: "Push all branches to remote"
                }
            ],
            args: [
                {
                    generator: {
                        script: "git remote",
                        postProcess: function (out) {
                            return out.split('\n').map(remote => {
                                return {name: remote, description: "remote"}
                            }).slice(0, -1)
                        }
                    }
                },
                {
                    generator: {
                        script: "git branch --no-color",
                        postProcess: function (out) {
                            if (out.startsWith("fatal:")) {
                                return []
                            }
                            return out.split('\n').map((elm) => {
                                return {name: elm.replace("*", "").trim(), description: "branch"}
                            }).slice(0, -1)
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
                    generator: {
                        script: "git remote",
                        splitOn: "\n"
                    }
                },
                {
                    generator: {
                        script: "git branch --no-color",
                        postProcess: function (out) {
                            if (out.startsWith("fatal:")) {
                                return []
                            }
                            return out.split('\n').map((elm) => {
                                return elm.replace("*", "").trim()
                            })
                        }
                    }
                }
            ]
        },
        {
            name: "diff",
            description: "Show changes between commits, commit and working tree, etc",
            options: [
                {
                    name: "--staged",
                    insertValue: "--staged",
                    description: "Show difference between the files in the staging area and the latest version",
                }
            ]
        },
        {
            name: "reset",
            description: "Reset current HEAD to the specified state",
            insertValue: "reset {cursor}",
            options: [
                {
                    name: "--keep",
                    insertValue: "--keep {cursor}",
                    description: "Safe: files which are different between the current HEAD and the given" +
                        " commit. Will abort if there are uncommitted changes",
                    args: {
                        variadic: true,
                        suggestions: [
                            {
                                name: "HEAD~[insert # of commits]",
                                description: "Reset back any number of commits",
                                insertValue: "HEAD~",
                            }
                        ],
                        generator: {
                            script: "git log --oneline",
                            postProcess: function (out) {
                                if (out.startsWith("fatal:")) {
                                    return []
                                }

                                return out.split('\n').map((line) => {
                                    return {
                                        name: line,
                                        insertValue: line.substring(0, 7),
                                        icon: "🔹",
                                        description: "single line commit"
                                    }
                                })
                            }
                        },
                        templateSuggestions: ["files"]
                    }
                },
                {
                    name: "--soft",
                    insertValue: "--soft {cursor}",
                    description: "remove the last commit from the current branch, but the file changes will stay in" +
                        " your working tree",
                    args: {
                        suggestions: [
                            {
                                name: "HEAD~[insert # of commits]",
                                icon: "🔻",
                                description: "Reset multiple commits",
                                insertValue: "HEAD~",
                            }
                        ],
                        generator: {
                            script: "git log --oneline",
                            postProcess: function (out) {
                                if (out.startsWith("fatal:")) {
                                    return []
                                }

                                return out.split('\n').map((line) => {
                                    return {
                                        name: line,
                                        insertValue: line.substring(0, 7),
                                        icon: "🔹",
                                        description: "single line commit"
                                    }
                                })
                            }
                        },
                        templateSuggestions: ["files"]
                    }
                },
                {
                    name: "--hard",
                    insertValue: "--hard {cursor}",
                    description: "WARNING: you will lose all uncommitted changes in addition to the changes" +
                        " introduced in the last commit",
                    args: {
                        variadic: true,
                        suggestions: [
                            {
                                name: "HEAD~[insert # of commits]",
                                description: "Reset back to any number of commits",
                                insertValue: "HEAD~",
                            }
                        ],
                        generator: {
                            script: "git log --oneline",
                            postProcess: function (out) {
                                if (out.startsWith("fatal:")) {
                                    return []
                                }

                                return out.split('\n').map((line) => {
                                    return {
                                        name: line,
                                        insertValue: line.substring(0, 7),
                                        icon: "🔹",
                                        description: "single line commit"
                                    }
                                })
                            }
                        },
                        templateSuggestions: ["files"]
                    }
                },
                {
                    name: "--mixed",
                    insertValue: "--mixed {cursor}",
                    description: "keep the changes in your working tree but not on the index",
                    args: {
                        variadic: true,
                        suggestions: [
                            {
                                name: "HEAD~[insert # of commits]",
                                description: "Reset back any number of commits",
                                insertValue: "HEAD~",
                            }
                        ],
                        generator: {
                            script: "git log --oneline",
                            postProcess: function (out) {
                                if (out.startsWith("fatal:")) {
                                    return []
                                }

                                return out.split('\n').map((line) => {
                                    return {
                                        name: line,
                                        insertValue: line.substring(0, 7),
                                        icon: "🔹",
                                        description: "single line commit"
                                    }
                                })
                            }
                        },
                        templateSuggestions: ["files"]
                    }
                },
                {
                    name: "--merge",
                    insertValue: "--merge {cursor}",
                    description: "Resets the index and updates the files in the working tree that are different" +
                        " between 'commit' and HEAD",
                    args: {
                        variadic: true,
                        suggestions: [
                            {
                                name: "HEAD~[insert # of commits]",
                                description: "Reset back any number of commits",
                                insertValue: "HEAD~",
                            }
                        ],
                        generator: {
                            script: "git log --oneline",
                            postProcess: function (out) {
                                if (out.startsWith("fatal:")) {
                                    return []
                                }

                                return out.split('\n').map((line) => {
                                    return {
                                        name: line,
                                        insertValue: line.substring(0, 7),
                                        icon: "🔹",
                                        description: "single line commit"
                                    }
                                })
                            }
                        },
                        templateSuggestions: ["files"]
                    }
                }
            ],
            args: {
                variadic: true,
                suggestions: [],
                generator: {
                    script: "git diff --cached --name-only",
                    postProcess: function (out) {
                        if (out.startsWith("fatal:")) {
                            return []
                        }

                        return out.split('\n').map((file) => {
                            return {
                                name: file,
                                insertValue: "-- " + file,
                                icon: `fig://icon?type=file`,
                                description: "staged file"
                            }
                        })
                    }
                },
                templateSuggestions: ["files"]
            },

        },
        {
            name: "log",
            description: "Show commit logs",
            insertValue: "log",
            options: [
                {
                    name: "--follow [file]",
                    insertValue: "--follow {cursor}",
                    description: "Show history of given file",
                }
            ]
        },
        {
            name: "remote",
            description: "Manage remote repository",
            insertValue: "remote {cursor}",
            options: [
                {
                    name: "add",
                    insertValue: "add {cursor}",
                    description: "add repo ",
                },
                {
                    name: "set-head",
                    insertValue: "set-head",
                    description: "Sets or deletes the default branch",
                },
                {
                    name: "rm",
                    insertValue: "rm",
                    description: "Removes given remote [name]",
                },
                {
                    name: "get-url",
                    insertValue: "get-url",
                    description: "Retrieves the URLs for a remote",
                },
                {
                    name: "set-url",
                    insertValue: "set-url {cursor}",
                    description: "Changes the URLs for the remote",
                },
                {
                    name: "show", description: "Gives some information about the remote [name]"
                },
                {
                    name: "prune", description: "Equivalent to git fetch --prune [name], except that no new" +
                        " references will be fetched"
                }
            ],
            args:
                {
                    suggestions: [
                        {
                            name: "-f",
                            insertValue: "-f",
                            description: "Fetch after remote info is added",
                        },
                        {
                            name: "--tags",
                            insertValue: "--tags",
                            description: "Import tags from remote",
                        }
                    ]
                }
        },
        {
            name: "rm",
            description: "Remove files from the working tree and from the index",
            options:
                [
                    {
                        name: "-- [file]",
                        insertValue: "-- {cursor}",
                        description: "used to separate command-line options from the list of files",
                    },
                    {
                        name: "--cached -- [file]",
                        insertValue: "--cached -- {cursor}",
                        description: "Unstage and remove paths only from the index",
                    },
                    {
                        name: "-f",
                        insertValue: "-f",
                        description: "Uses the force to override the up-to-date check",
                    },
                    {
                        name: "-r",
                        insertValue: "-r",
                        description: "Recursive removal",
                    },
                ]
        },
        {
            name: "fetch",
            description: "Download objects and refs from another repository",
            options:
                [
                    {
                        name: "origin", description: "copies all branches from the remote"
                    }
                ]
        },
        {
            name: "stash",
            icon: "🔹",
            description: "temporarily stores all the modified tracked files",
            options: [
                {
                    name: "save",
                    icon: "🔹",
                    description: "Temporarily stores all the modified tracked files"
                },
                {
                    name: "pop",
                    icon: "🔹",
                    description: "Restores the most recently stashed files"
                },
                {
                    name: "list",
                    icon: "🔹",
                    description: "Lists all stashed changesets"
                },
                {
                    name: "drop",
                    icon: "🔹",
                    description: "discards the most recently stashed changeset"
                }
            ]
        },
        {
            name: "reflog",
            icon: "🕘",
            description: "Show history of events with hashes"
        },
        {name: "init", description: "Create a repository"},
        {name: "clone", description: "Clone a repository into a new directory"},
        {name: "init", description: "Create an empty Git repository or reinitialize an existing one"},
        {name: "mv", description: "Move or rename a file, a directory, or a symlink"},
        {name: "bisect", description: "Use binary search to find the commit that introduced a bug"},
        {name: "grep", description: "Print lines matching a pattern"},
        {name: "show", description: "Show various types of objects"},
        {name: "branch", description: "List, create, or delete branches"},
        {name: "checkout", description: "Switch branches or restore working tree files"},
        {name: "merge", description: "Joins the difference of two or more development histories together"},
        {name: "tag", description: "Create, list, delete or verify a tag object signed with GPG"},
    ]
}
