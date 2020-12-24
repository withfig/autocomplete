var completionSpec = {
    name: "gh",
    description: "Github's CLI tool",
    subcommands: [
        { 
            name: "alias", 
            description: "create command shortcuts",
            subcommands: [
                {
                    name: "list",
                    description: "prints all aliases gh is configured to use"
                },
                {
                    name: "delete",
                    description: "delete an alias",
                    args: [
                        {
                            name: "alias name",
                            description: "name of the alias to delete"
                        }
                    ]
                },
                {
                    name: "set",
                    description: "set an alias",
                    args: [
                        {
                            name: "alias name",
                        },
                        {
                            name: "expansion"
                        }
                    ],
                    options: [
                        {
                            name: ["-s", "--shell"],
                            description: "declare an alias to be passed through a shell interpreter"
                        }
                    ]
                }
            ]
        },
        { 
            name: "api",
            description: "Make an authenticated GitHub API request",
            args: [
                {
                    name: "endpoint",
                    description: "Either be a path of a GitHub API v3 endpoint, or 'graphql' to access the GitHub API v4."
                }
            ],
            options: [
                {
                    name: ["-F", "--field"],
                    args: {
                        name: "inferred type",
                        variadic: true
                    }
                },
                {
                    name: ["-H", "--header"],
                    args: {
                        name: "request header",
                    }
                },
                {
                    name: ["--hostname"],
                    args: {
                        name: "request header",
                    }
                },
                {
                    name: ["-i", "--include"],
                },
                {
                    name: ["--input"],
                    args: {
                        name: "file to use as body for the request",
                        template: "filepaths"
                    }
                },
                {
                    name: ["-X", "--method"],
                    args: {
                        name: "HTTP method for the request",
                    }
                },
                {
                    name: ["--paginate"]
                },
                {
                    name: ["-f", "--raw-field"],
                    args: {
                        variadic: true
                    }
                },
                {
                    name: ["--silent"]
                }
            ]
        },
        { 
            name: "auth", 
            description: "Login, logout, and refresh your authentication",
            subcommands: [
                {
                    name: "login",
                    description: "login to GitHub",
                    options: [
                        {
                            name: ["-h", "--hostname"],
                            description: "The hostname of the GitHub instance to authenticate with",
                            args: {
                                name: "hostname",
                                description: "hostname to authenticate with"
                            }
                        },
                        {
                            name: ["-s", "--scopes"],
                            description: "Additional authentication scopes for gh to have",
                            args: {
                                variadic: true
                            }
                        },
                        {
                            name: ["-w", "--web"],
                            description: "Open a browser to authenticate"
                        },
                        {
                            name: ["--with-token"],
                            description: "Read token from standard input"
                        }
                    ]
                },
                {
                    name: "logout",
                    description: "log out of a GitHub host",
                    options: [
                        {
                            name: ["-h", "--hostname"],
                            description: "The hostname of the GitHub instance to authenticate with",
                            args: {
                                name: "hostname",
                                description: "hostname to authenticate with"
                            }
                        }
                    ]
                },
                {
                    name: "refresh",
                    description: "refresh stored auth credentials",
                    options: [
                        {
                            name: ["-h", "--hostname"],
                            description: "The hostname of the GitHub instance to authenticate with",
                            args: {
                                name: "hostname",
                                description: "hostname to authenticate with"
                            }
                        },
                        {
                            name: ["-t", "--show-token"],
                            description: "additional auth scopes for gh to have",
                            args: {
                                name: "scope",
                                variadic: true
                            }
                        }
                    ]
                },
                {
                    name: "status",
                    description: "view authentication status",
                    options: [
                        {
                            name: ["-h", "--hostname"],
                            description: "Check a specific hostname's auth status",
                            args: {
                                name: "hostname",
                                description: "hostname to authenticate with"
                            }
                        },
                        {
                            name: ["-t", "--show-token"],
                            description: "Display the auth token"
                        }
                    ]
                }
            ],
        },
        { 
            name: "completion", 
            description: "Generate shell completion scripts",
            options: [
                {
                    name: ["-s", "--shell"],
                    description: "shell type",
                    suggestions: [
                        { name: "bash" },
                        { name: "zsh" },
                        { name: "fish" },
                        { name: "powershell" }
                    ]
                }
            ] 
        },
        { 
            name: "config", 
            description: "Manage configuration for gh",
            subcommands: [
                {
                    name: "get",
                    args: {
                        name: "key"
                    },
                    options: [
                        {
                            name: ["-h", "--hostname"],
                            description: "Check a specific hostname's auth status",
                            args: {
                                name: "hostname",
                                description: "hostname to authenticate with"
                            }
                        },
                    ]
                },
                {
                    name: "set",
                    args: [
                        { name: "key" },
                        { name: "value" }
                    ],
                    options: [
                        {
                            name: ["-h", "--host"],
                            description: "Set per-host setting",
                            args: {
                                name: "hostname",
                                description: "hostname to authenticate with"
                            }
                        }
                    ]
                }
            ]
        },
        { 
            name: "gist", 
            description: "Manage gists",
            subcommands: [
                {
                    name: "create",
                    description: "Create a new GitHub gist",
                    args: [
                        {
                            name: "file location",
                            description: "where to create the gist",
                            template: "filepaths"
                        }
                    ],
                    options: [
                        { name: ["-d", "--desc string"], description: "A description for this gist" },
                        { name: ["-f", "--filename string"], description: "Provide a filename to be used when reading from STDIN" },
                        { name: ["-p", "--public"], description: "List the gist publicly (default: private)" },
                        { name: ["-w", "--web"], description: "Open the web browser with created gist" }
                    ]
                },
                {
                    name: "delete",
                    description: "delete a gist",
                    args: {
                        name: "gist ID or gist URL",
                        description: "URL or ID of gist to delete"
                    }
                },
                {
                    name: "edit",
                    description: "edit one of your gists",
                    args: {
                        name: "gist ID or gist URL",
                        description: "URL or ID of gist to edit"
                    },
                    options: [
                        { 
                            name: ["-f", "--filename"], 
                            description: "a specific file to edit", 
                            args: {
                                name: "file",
                                template: "filepaths"
                            } 
                        }
                    ]
                },
                {
                    name: "list",
                    description: "list your gists",
                    options: [
                        { 
                            name: ["-L", "--limit"], 
                            description: "Maximum number of gists to fetch (default 10)",
                            args: {
                                name: "number",
                                description: "max number of gists to fetch"
                            }
                        },
                        { name: ["--public"], description: "Show only public gists" },
                        { name: ["--secret"], description: "Show only secret gists" }
                    ]
                },
                {
                    name: "view",
                    description: "view a gist",
                    args: {
                        name: "gist ID or gist URL",
                        description: "ID or URL of the gist to view"
                    },
                    options: [
                        { 
                            name: ["-f", "--filename"], 
                            description: "display a single file of the gist",
                            args: {
                                name: "gist file",
                                template: "filepaths"
                            }
                        },
                        { name: ["-r", "--raw"], description: "do not try and render markdown" },
                        { name: ["-w", "--web"], description: "open gist in browser" }
                    ]
                }
            ]
        },
        {
            name: "help",
            args: [
                {
                    name: "command",
                    description: "command to get help text on"
                }
            ]
        },
        {
            name: "issue", 
            description: "Manage issues",
            subcommands: [
                { 
                    name: "close", 
                    description: "Close issue",
                    args: [
                        {
                            name: "number or url",
                            description: "issue number or url of issue to close"
                        }
                    ]
                },
                { 
                    name: "create", 
                    description: "Create a new issue",
                    options: [
                        { 
                            name: ["-a", "--assignee"], 
                            description: "Assign people by their login",
                            args: {
                                name: "login"
                            }
                        },
                        { 
                            name: ["-b", "--body"], 
                            description: "Supply a body. Will prompt for one otherwise.",
                            args: {
                                name: "body"
                            }
                        },
                        { 
                            name: ["-l", "--label"], 
                            description: "Add labels by name",
                            args: {
                                name: "name"
                            }
                        },
                        { 
                            name: ["-m", "--milestone"], 
                            description: "Add the issue to a milestone by name",
                            args: {
                                name: "name"
                            }
                        },
                        { 
                            name: ["-p", "--project"], 
                            description: "Add the issue to projects by name",
                            args: {
                                name: "name"
                            }
                        },
                        { 
                            name: ["--recover"], 
                            description: "Recover input from a failed run of create",
                            args: {
                                name: "input to recover"
                            }
                        },
                        { 
                            name: ["-t", "--title"], 
                            description: "Supply a title. Will prompt for one otherwise.",
                            args: {
                                name: "title"
                            }
                        },
                        { name: ["-w", "--web"], description: "Open the browser to create an issue" },
                    ] 
                },
                { name: "list", description: "List and filter issues in this repository" },
                { name: "reopen", description: "Reopen issue" },
                { name: "status", description: "Show status of relevant issues" },
                {
                    name: "view", description: "View an issue",
                    options: [
                        {
                            name: ["-R", "--repo"],
                            insertValue: "-R '{cursor}'",
                            description: "Select another repository using the OWNER/REPO format",
                            args: {
                            },
                        },
                    ]
                }
            ]
        },
        { name: "pr", description: "Manage pull requests" },
        { name: "release", description: "Manage GitHub releases" },
        { name: "repo", description: "Create, clone, fork, and view repositories" },
    ]
}

