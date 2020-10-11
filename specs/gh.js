var completionSpec = {
    name: "gh",
    type: "root",
    description: "Github's CLI tool",
    // arg: { }      
    children: [
        { type: "subcommand", name: "alias", insertValue: "alias ", description: "create command shortcuts" },
        { type: "subcommand", name: "api", insertValue: "api ", description: "Make an authenticated GitHub API request" },
        { type: "subcommand", name: "auth", insertValue: "auth ", description: "Login, logout, and refresh your authentication" },
        { type: "subcommand", name: "completion", insertValue: "completion ", description: "Generate shell completion scripts" },
        { type: "subcommand", name: "config", insertValue: "config ", description: "Manage configuration for gh" },
        { type: "subcommand", name: "gist", insertValue: "gist ", description: "Manage gists" },
        {
            type: "subcommand", name: "issue", insertValue: "issue ", description: "Manage issues", children: [

                { type: "subcommand", name: "close", insertValue: "close ", description: "Close issue" },
                { type: "subcommand", name: "create", insertValue: "create ", description: "Create a new issue" },
                { type: "subcommand", name: "list", insertValue: "list ", description: "List and filter issues in this repository" },
                { type: "subcommand", name: "reopen", insertValue: "reopen ", description: "Reopen issue" },
                { type: "subcommand", name: "status", insertValue: "status ", description: "Show status of relevant issues" },
                {
                    type: "subcommand", name: "view", insertValue: "view ", description: "View an issue", children: [
                        {
                            type: "option",
                            name: ["-R", "--repo"],
                            insertValue: "-R '{cursor}'",
                            description: "Select another repository using the OWNER/REPO format",
                            arg: {
                                takesInput: true,
                            },
                        },
                    ]
                }
            ]
        },
        { type: "subcommand", name: "pr", insertValue: "pr ", description: "Manage pull requests" },
        { type: "subcommand", name: "release", insertValue: "release ", description: "Manage GitHub releases" },
        { type: "subcommand", name: "repo", insertValue: "repo ", description: "Create, clone, fork, and view repositories" },
    ]
}

