var completionSpec = {
    name: "gh",
    description: "Github's CLI tool",
    subcommands: [
        { name: "alias", description: "create command shortcuts" },
        { name: "api", description: "Make an authenticated GitHub API request" },
        { name: "auth", description: "Login, logout, and refresh your authentication" },
        { name: "completion", description: "Generate shell completion scripts" },
        { name: "config", description: "Manage configuration for gh" },
        { name: "gist", description: "Manage gists" },
        {
            name: "issue", description: "Manage issues",
            subcommands: [

                { name: "close", description: "Close issue" },
                { name: "create", description: "Create a new issue" },
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

