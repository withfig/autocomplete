var generators = {

    // Commit history
    commits: {
        script: "git log --oneline",
        postProcess: function (out) {
            if (out.startsWith("fatal:")) {
                return []
            }

            return out.split('\n').map((line) => {
                return {
                    name: line.substring(0, 7),
                    icon: "fig://icon?type=node",
                    description: line.substring(7)
                }
            })
        }
    },


    // Tree-ish
    // This needs to be fleshed out properly....
    // e.g. what is difference to commit-ish?
    // Refer to this:https://stackoverflow.com/questions/23303549/what-are-commit-ish-and-tree-ish-in-git/40910185
    // https://mirrors.edge.kernel.org/pub/software/scm/git/docs/#_identifier_terminology

    treeish: {
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


    // All branches
    branches: {
        script: "git branch --no-color",
        postProcess: function (out) {
            if (out.startsWith("fatal:")) {
                return []
            }
            return out.split('\n').map((elm) => {
                return { name: elm.replace("*", "").trim(), description: "branch", icon: "fig://icon?type=git" }
            })
        }
    },

    remotes: {
        script: "git remote",
        postProcess: function (out) {
            return out.split('\n').map(remote => {
                return { name: remote, description: "remote" }
            })
        }
    },

    tags: {
        script: "git tag --list",
        splitOn: "\n"
    },

    // Files for staging
    files_for_staging: {
        script: "git status --short",
        postProcess: function (out) {
            if (out.startsWith("fatal:")) {
                return []
            }

            // out = out + " "
            var items = out.split('\n').map((file) => {
                file = file.trim()
                var arr = file.split(" ")

                return { working: arr[0], file: arr.slice(1).join(" ") }
            })

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
                    insertValue: file.includes(' ') ? `'${file}'` : file,
                    icon: `fig://icon?type=${ext}&color=ff0000&badge=${item.working}`,
                    description: "Changed file",
                    priority: 100
                }
            })
        }
    },
}


let head = {
    name: "HEAD",
    icon: "🔻",
    description: "Reset multiple commits",
}

var completionSpec = {

    name: "git",
    description: "the stupid content tracker",
    options: [
        {
            name: "--version",
            description: "Output version"
        },
        {
            name: "--help",
            description: "Output help"
        },
        {
            name: "-C",
            insertValue: "-C ",
            args: {
                name: "path",
                template: "folders"
            },
            description: "Run as if git was started in &lt;path&gt;"
        },
        {
            name: "-c name=value",
            insertValue: "-c ",
            description: "Pass a config parameter to the command"
        },
        {
            name: "--exec-path[=<path>]",
            insertValue: "--exec-path",
            args: {
                name: "path",
                isOptional: true,
                template: "folders",
            },
            description: "Get or set GIT_EXEC_PATH for core Git programs"
        },
        {
            name: "--html-path",
            description: "Print Git’s HTML documentation path"
        },
        {
            name: "--man-path",
            description: "Print the manpath for this version of Git"
        },
        {
            name: "--info-path",
            description: "Print the info path documenting this version of Git"
        },
        {
            name: ["-p", "--paginate"],
            description: "Pipe output into `less` or custom $PAGER"
        },
        {
            name: "--no-pager",
            description: "Do not pipe Git output into a pager"
        },
        {
            name: "--no-replace-objects",
            description: "Do not use replacement refs"
        },
        {
            name: "--bare",
            description: "Treat the repository as a bare repository"
        },
        {
            name: "--git-dir=<path>",
            insertValue: "--git-dir=",
            args: {
                name: "path",
                template: "folders"
            },
            description: "Set the path to the repository dir (`.git`)"
        },
        {
            name: "--work-tree=<path>",
            insertValue: "--work-tree=",
            args: {
                name: "path",
                template: "folders"
            },
            description: "Set working tree path"
        },
        {
            name: "--namespace=<name>",
            insertValue: "--namespace=",
            args: {
                name: "name",
            },
            description: "Set the Git namespace"
        },
    ],
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
                    args: {
                        name: "message"
                    },
                },
                {
                    name: ["-a", "--all"],
                    description: "stage all modified and deleted paths",
                },
                {
                    name: "-am",
                    insertValue: "-am '{cursor}'",
                    description: "stage all and use given text as commit message",
                    args: {
                        name: "message"
                    }
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
            options: [
                {
                    name: "--local",
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
                    description: "For writing options: write to global ~/.gitconfig file rather than the repository .git/config",
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
                { name: ["--continue"], description: "continue the rebasing after conflict resolution" },
                { name: ["--abort"], description: "stop rebase" },
                { name: ["--skip"], description: "skips a commit" },
                {
                    name: ["-i"],
                    description: "interactive"
                }
            ],
            args: {
                suggestions: [],
                generators: generators.commits,
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
                    description: "Interactively choose hunks of patch between the index and the work tree and add them to the index"
                },

            ],
            args: {
                variadic: true,

                // We have a special setting for dot in the vuejs app

                // suggestions: [
                //     {
                //         name: ".",
                //         description: "current directory",
                //         insertValue: ".",
                //         icon: "fig://icon?type=folder"
                //     }
                // ],
                generators: generators.files_for_staging
            },
        },
        {
            name: "status",
            description: "Show the working tree status",
            options: [
                {
                    name: ["-v", "--verbose"],
                    description: "be verbose"
                },
                {
                    name: ["-b", "--branch"],
                    description: "show branch information",
                },
                {
                    name: "--show-stash",
                    description: "show stash information"
                },
                {
                    name: "--ahead-behind",
                    description: "compute full ahead/behind values"
                },
                {
                    name: "--long",
                    description: "show status in long format (default)"
                },
                {
                    name: ["-z", "--null"],
                    description: "terminate entries with NUL",
                },
                {
                    name: ["-u", "--untracked-files"],
                    description: "show untracked files",
                    args: {
                        suggestions: [
                            {
                                name: "all",
                                description: "(Default)"
                            },
                            {
                                name: "normal",
                            },
                            {
                                name: "no",
                            }
                        ]
                    }
                },
                {
                    name: "--ignored",
                    description: "show ignored files",
                    args: {
                        suggestions: [
                            {
                                name: "traditional",
                                description: "(Default)"
                            },
                            {
                                name: "matching",
                            },
                            {
                                name: "no",
                            }
                        ]
                    }
                },
                {
                    name: "--no-renames",
                    description: "do not detect renames"
                },
            ]
        },
        {
            name: "push",
            description: "Update remote refs",
            options: [
                {
                    name: "-all",
                    description: "Push all branches to remote"
                },
                // { name: "--repo", description: "repository" },
                // { name: "--all", description: "push all refs" },
                // { name: "--mirror", description: "mirror all refs" },
                { name: ["-d", "--delete"], description: "delete refs" },
                { name: "--tags", description: "push tags (can't be used with --all or --mirror)" },
                // { name: ["-n", "--dry-run"], description: "dry run" },
            ],
            args: [
                {
                    name: "remote",
                    isOptional: true,
                    generators: generators.remotes
                },
                {
                    name: "branch",
                    isOptional: true,
                    generators: generators.branches
                }
            ]
        },
        {
            name: "pull",
            description: "Integrate with another repository",
            args: [
                {
                    name: "remote",
                    isOptional: true,
                    generators: generators.remotes
                },
                {
                    name: "branch",
                    isOptional: true,
                    generators: generators.branches
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
            options: [
                {
                    name: "--keep",
                    insertValue: "--keep {cursor}",
                    description: "Safe: files which are different between the current HEAD and the given commit. Will abort if there are uncommitted changes",
                    args: {
                        variadic: true,
                        suggestions: [
                            head
                        ],
                        generators: generators.commits
                    }
                },
                {
                    name: "--soft",
                    insertValue: "--soft {cursor}",
                    description: "remove the last commit from the current branch, but the file changes will stay in your working tree",
                    args: {
                        suggestions: [
                            head
                        ],
                        generators: generators.commits
                    }
                },
                {
                    name: "--hard",
                    insertValue: "--hard {cursor}",
                    description: "⚠️WARNING: you will lose all uncommitted changes in addition to the changes introduced in the last commit",
                    args: {
                        variadic: true,
                        suggestions: [
                            {
                                name: "HEAD~<N>",
                                description: "Reset back to any number of commits",
                                insertValue: "HEAD~",
                            }
                        ],
                        generators: generators.commits,
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
                        generators: generators.commits,
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
                            head
                        ],
                        generators: generators.commits,
                    }
                }
            ],
            args: {
                isOptional: true,
                variadic: true,
                suggestions: [],
                generators: generators.treeish,
            },

        },
        {
            name: "log",
            description: "Show commit logs",
            insertValue: "log",
            options: [
                {
                    name: "--follow",
                    description: "Show history of given file",
                    args: {
                        name: "file",
                        template: "filepaths"
                    }
                },
                {
                    name: ["-q", "--quiet"],
                    description: "suppress diff output"
                },
                {
                    name: "--source",
                    description: "show source"
                },
                {
                    name: "--oneline",
                    description: "show each commit as a single line "
                }
            ]
        },
        {
            name: "remote",
            description: "Manage remote repository",
            insertValue: "remote {cursor}",
            subcommands: [
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
                    name: "prune", description: "Equivalent to git fetch --prune [name], except that no new references will be fetched"
                }
            ],
            options: [
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
        },
        {
            name: "fetch",
            description: "Download objects and refs from another repository",
            options: [
                {
                    name: "--all",
                    insertValue: "--all",
                    description: "Fetch all remotes",
                },
                {
                    name: ["-a", "--append"],
                    description: "Append ref names and object names of fetched refs to the existing contents of .git/FETCH_HEAD",
                },
                {
                    name: ["--atomic"],
                    description: "Use an atomic transaction to update local refs. Either all refs are updated, or on error, no refs are updated.",
                },
                {
                    name: ["--depth"],
                    insertValue: "--depth {cursor}",
                    args: {
                        name: 'depth',
                    },
                    description: "Limit fetching to the specified number of commits from the tip of each remote branch history",
                },
                {
                    name: ["--deepen"],
                    insertValue: "--deepen {cursor}",
                    args: {
                        name: 'depth',
                    },
                    description: "Similar to --depth, except it specifies the number of commits from the current shallow boundary instead of from the tip of each remote branch history",
                },
                {
                    name: ["--shallow-since"],
                    insertValue: "--shallow-since {cursor}",
                    args: {
                        name: 'date',
                    },
                    description: "Deepen or shorten the history of a shallow repository to include all reachable commits after <date>",
                },
                {
                    name: ["--shallow-exclude"],
                    insertValue: "--shallow-exclude {cursor}",
                    args: {
                        name: 'revision',
                    },
                    description: "Deepen or shorten the history of a shallow repository to exclude commits reachable from a specified remote branch or tag. This option can be specified multiple times",
                },
                {
                    name: ["--unshallow"],
                    description: "If the source repository is shallow, fetch as much as possible so that the current repository has the same history as the source repository",
                },
                {
                    name: ["--update-shallow"],
                    description: "By default when fetching from a shallow repository, git fetch refuses refs that require updating .git/shallow",
                },
                {
                    name: ["--negotiation-tip"],
                    insertValue: "--negotiation-tip {cursor}",
                    args: {
                        name: 'commit|glob',
                        generators: generators.commits,
                    },
                    description: "By default, Git will report, to the server, commits reachable from all local refs to find common commits in an attempt to reduce the size of the to-be-received packfile",
                },
                {
                    name: ["--dry-run"],
                    description: "Show what would be done, without making any changes.",
                },
                {
                    name: ["--write-fetch-head"],
                    description: "Write the list of remote refs fetched in the FETCH_HEAD file directly under $GIT_DIR. This is the default",
                },
                {
                    name: ["--no-write-fetch-head"],
                    description: "tells Git not to write the file",
                },
                {
                    name: ["-f", "--force"],
                    description: "This option overrides that check",
                },
                {
                    name: ["-k", "--keep"],
                    description: "Keep downloaded pack.",
                },
                {
                    name: ["--multiple"],
                    description: "Allow several <repository> and <group> arguments to be specified. No <refspec>s may be specified.",
                },
                {
                    name: ["--auto-maintenance", "--auto-gc"],
                    description: "Run git maintenance run --auto at the end to perform automatic repository maintenance if",
                },
                {
                    name: ["--no-auto-maintenance", "--no-auto-gc"],
                    description: "Don't run git maintenance run --auto at the end to perform automatic repository maintenance",
                },
                {
                    name: ["--write-commit-graph"],
                    description: "Write a commit-graph after fetching. This overrides the config setting fetch.writeCommitGraph",
                },
                {
                    name: ["--no-write-commit-graph"],
                    description: "Don't write a commit-graph after fetching. This overrides the config setting fetch.writeCommitGraph",
                },
                {
                    name: ["-p", "--prune"],
                    description: "Before fetching, remove any remote-tracking references that no longer exist on the remote",
                },
                {
                    name: ["-P", "--prune-tags"],
                    description: "Before fetching, remove any local tags that no longer exist on the remote if --prune is enabled",
                },
                {
                    name: ["-n", "--no-tags"],
                    description: "By default, tags that point at objects that are downloaded from the remote repository are fetched and stored locally. This option disables this automatic tag following",
                },
                {
                    name: ["--refmap"],
                    insertValue: "--refmap {cursor}",
                    args: {
                        name: 'refspec',
                    },
                    description: "When fetching refs listed on the command line, use the specified refspec (can be given more than once) to map the refs to remote-tracking branches, instead of the values of remote.*.fetch configuration variables for the remote repository",
                },
                {
                    name: ["-t", "--tags"],
                    description: "By default, tags that point at objects that are downloaded from the remote repository are fetched and stored locally. This option disables this automatic tag following",
                },
                {
                    name: ["--recurse-submodules"],
                    insertValue: "--recurse-submodules={cursor}",
                    args: {
                        name: 'mode',
                        suggestions: [
                            'yes', 'on-demand', 'no',
                        ],
                    },
                    description: "When fetching refs listed on the command line, use the specified refspec (can be given more than once) to map the refs to remote-tracking branches, instead of the values of remote.*.fetch configuration variables for the remote repository",
                },
                {
                    name: ["-j", "jobs"],
                    args: {
                        name: 'n',
                    },
                    description: "Number of parallel children to be used for all forms of fetching.",
                },
                {
                    name: ["--no-recurse-submodules"],
                    description: "Disable recursive fetching of submodules (this has the same effect as using the --recurse-submodules=no option).",
                },
                {
                    name: ["--set-upstream"],
                    description: "If the remote is fetched successfully, add upstream (tracking) reference, used by argument-less git-pull[1] and other commands.",
                },
                {
                    name: ["--submodule-prefix"],
                    insertValue: "--submodule-prefix {cursor}",
                    args: {
                        name: 'path',
                    },
                    description: "Prepend <path> to paths printed in informative messages such as \”Fetching submodule foo\". This option is used internally when recursing over submodules.",
                },
                {
                    name: ["--recurse-submodules-default"],
                    insertValue: "--recurse-submodules-default={cursor}",
                    args: {
                        name: 'mode',
                        suggestions: [
                            'yes', 'on-demand',
                        ],
                    },
                    description: "This option is used internally to temporarily provide a non-negative default value for the --recurse-submodules option",
                },
                {
                    name: ["-u", "--update-head-ok"],
                    description: "By default git fetch refuses to update the head which corresponds to the current branch. This flag disables the check. This is purely for the internal use for git pull to communicate with git fetch, and unless you are implementing your own Porcelain you are not supposed to use it.",
                },
                {
                    name: ["--upload-pack"],
                    insertValue: "--upload-pack {cursor}",
                    args: {
                        name: 'upload-pack',
                    },
                    description: "When given, and the repository to fetch from is handled by git fetch-pack, --exec=<upload-pack> is passed to the command to specify non-default path for the command run on the other end.",
                },
                {
                    name: ["-q", "--quiet"],
                    description: "Pass --quiet to git-fetch-pack and silence any other internally used git commands. Progress is not reported to the standard error stream.",
                },
                {
                    name: ["-v", "--verbose"],
                    description: "Be verbose.",
                },
                {
                    name: ["--progress"],
                    description: "Progress status is reported on the standard error stream by default when it is attached to a terminal, unless -q is specified.",
                },
                {
                    name: ["-o", "--server-option"],
                    args: {
                        name: 'option',
                    },
                    description: "Transmit the given string to the server when communicating using protocol version 2. The given string must not contain a NUL or LF character. ",
                },
                {
                    name: ["--show-forced-updates"],
                    description: "By default, git checks if a branch is force-updated during fetch. This can be disabled through fetch.showForcedUpdates, but the --show-forced-updates option guarantees this check occurs",
                },
                {
                    name: "origin", description: "copies all branches from the remote"
                }
            ]
        },
        {
            name: "stash",
            description: "temporarily stores all the modified tracked files",
            subcommands: [
                {
                    name: "save",
                    description: "Temporarily stores all the modified tracked files"
                },
                {
                    name: "pop",
                    description: "Restores the most recently stashed files"
                },
                {
                    name: "list",
                    description: "Lists all stashed changesets"
                },
                {
                    name: "drop",
                    description: "Discards the most recently stashed changeset"
                },
                {
                    name: "clear",
                    description: " Remove all the stash entries."
                }
            ]
        },
        { name: "reflog", description: "Show history of events with hashes" },
        {
            name: "clone", description: "Clone a repository into a new directory",
            args: [{ name: "repository" }, { name: "directory", template: "filepaths" }]
        },
        { name: "init", description: "Create an empty Git repository or reinitialize an existing one" },
        { name: "mv", description: "Move or rename a file, a directory, or a symlink" },
        {
            name: "rm",
            description: "Remove files from the working tree and from the index",
            args: {
                variadic: true,
                suggestions: [
                    {
                        name: ".",
                        description: "current directory",
                        insertValue: ".",
                        icon: "fig://icon?type=folder"
                    }
                ],
                generators: generators.files_for_staging
            },
            options: [
                { name: "--", description: "used to separate command-line options from the list of files" },
                { name: "--cached", description: "only remove from the index" },
                { name: ["-f", "--force"], description: "override the up-to-date check" },
                { name: "-r", description: "allow recursive removal" },
            ]
        },
        { name: "bisect", description: "Use binary search to find the commit that introduced a bug" },
        { name: "grep", description: "Print lines matching a pattern" },
        { name: "show", description: "Show various types of objects" },
        {
            name: "branch",
            description: "List, create, or delete branches",
            options: [
                { name: ["-a", "--all"], description: "list both remote-tracking and local branches" },
                {
                    name: ["-d", "--delete"], description: "delete fully merged branch",
                    args: {
                        generators: generators.branches,
                    },
                },
                {
                    name: "-D", description: "delete branch (even if not merged)",
                    args: {
                        generators: generators.branches,
                    },
                },
                {
                    name: ["-m", "--move"], description: "move/rename a branch and its reflog",
                    args: [{
                        generators: generators.branches,
                    },
                    {
                        generators: generators.branches,
                    },
                    ]
                },
                {
                    name: "-M", description: "move/rename a branch, even if target exists",
                    args: [{
                        generators: generators.branches,
                    },
                    {
                        generators: generators.branches,
                    },
                    ]
                },
                { name: ["-c", "--copy"], description: "copy a branch and its reflog" },
                { name: "-C", description: "copy a branch, even if target exists" },
                { name: ["-l", "--list"], description: "list branch names" },
                { name: ["--create-reflog"], description: "create the branch's reflog" },
                {
                    name: ["--edit-description"], description: "edit the description for the branch",
                    args: {
                        generators: generators.branches,
                    },
                },
                { name: ["-f", "--force"], description: "force creation, move/rename, deletion" },
                { name: "--merged", description: "print only branches that are merged", args: { name: "commit" } },
                { name: "--no-merged", description: "print only branches that are not merged", args: { name: "commit" } },
                { name: "--column", description: "list branches in columns [=<style>]" },
                { name: "--sort", description: "field name to sort on", args: { name: "key" } },
                { name: "--points-at", description: "print only branches of the object", args: { name: "object" } },
                { name: ["-i", "--ignore-case"], description: "sorting and filtering are case insensitive" },
                { name: "--format", description: "format to use for the output", args: { name: "format" } }
            ]
        },
        {
            name: "checkout",
            description: "Switch branches or restore working tree files",
            options: [
                { name: "-b", description: "create and checkout a new branch", args: { name: "branch" } },
                { name: "-B", description: "create/reset and checkout a branch", args: { name: "branch" } },
                { name: "-l", description: "create reflog for new branch" },
                { name: "--detach", description: "detach HEAD at named commit" },
                { name: ["-t", "--track"], description: "set upstream info for new branch" },
                { name: "--orphan", description: "new unparented branch", args: { name: "new-branch" } },
                { name: ["-2", "--ours"], description: "checkout our version for unmerged files" },
                { name: ["-3", "--theirs"], description: "checkout their version for unmerged files" },
                { name: ["-f", "--force"], description: "force checkout (throw away local modifications)" },
                { name: ["-m", "--merge"], description: "perform a 3-way merge with the new branch" },
                { name: "--overwrite-ignore", description: "update ignored files (default)" },
                { name: "--conflict", description: "conflict style (merge or diff3)", args: { name: "style", suggestions: [{ name: "merge" }, { name: "diff3" }] } },
                { name: ["-p", "--patch"], description: "select hunks interactively" },
            ],
            args: {
                name: "branch",
                description: "branch to switch to",
                isOptional: true,
                generators: generators.branches
            }
        },
        { name: "merge", description: "Join two or more development histories together" },
        {
            name: "tag",
            description: "Create, list, delete or verify a tag object signed with GPG",
            options: [
                { name: ["-l", " --list"], description: "list tag names" },
                { name: "-n", description: "print <n> lines of each tag message", args: { name: "n", suggestions: [{ name: "1" }, { name: "2" }, { name: "3" }] } },
                { name: ["-d", "--delete"], description: "delete tags" },
                { name: ["-v", "--verify"], description: "verify tags" },
                { name: ["-a", "--annotate"], description: "annotated tag, needs a message" },
                { name: ["-m", "--message"], insertValue: "-m '{cursor}'", description: "tag message", args: { name: "message" } },
            ],
            args: {
                name: "tagname",
                description: "Select a tag",
                generators: generators.tags,
                isOptional: true,
            }
        },
    ]
}
