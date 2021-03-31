var ghGenerators = {
  listPR: {
    script: "gh pr list",
    postProcess: function (out) {
      return out.split("\n").map(function (line) {
        var _a = line.match(
            /^(?<id>[\d]+)\t(?<name>.+)\t(?<branch>.*)\t(?<status>OPEN|DRAFT)$/
          ).groups,
          id = _a.id,
          name = _a.name,
          branch = _a.branch,
          status = _a.status;
        return {
          name: id,
          displayName: name,
          description: "#" + id + " | " + branch,
          icon: status === "OPEN" ? "✅" : "☑️",
        };
      });
    },
  },
};
var completionSpec = {
  name: "gh",
  description: "Github's CLI tool",
  subcommands: [
    { name: "alias", description: "create command shortcuts" },
    { name: "api", description: "Make an authenticated GitHub API request" },
    {
      name: "auth",
      description: "Login, logout, and refresh your authentication",
    },
    { name: "completion", description: "Generate shell completion scripts" },
    { name: "config", description: "Manage configuration for gh" },
    { name: "gist", description: "Manage gists" },
    {
      name: "issue",
      description: "Manage issues",
      subcommands: [
        { name: "close", description: "Close issue" },
        { name: "create", description: "Create a new issue" },
        {
          name: "list",
          description: "List and filter issues in this repository",
        },
        { name: "reopen", description: "Reopen issue" },
        { name: "status", description: "Show status of relevant issues" },
        {
          name: "view",
          description: "View an issue",
          options: [
            {
              name: ["-R", "--repo"],
              insertValue: "-R '{cursor}'",
              description:
                "Select another repository using the OWNER/REPO format",
              args: {},
            },
          ],
        },
      ],
    },
    {
      name: "pr",
      description: "Manage pull requests",
      subcommands: [
        {
          name: "checkout",
          description: "Check out a pull request in git",
          args: {
            name: "number> | <url> | <branch",
            generators: ghGenerators.listPR,
          },
          options: [
            {
              name: ["--recurse-submodules"],
              description: "Update all active submodules (recursively)",
            },
          ],
        },
        {
          name: "checks",
          description: "Show CI status for a single pull request",
          args: {
            name: "number> | <url> | <branch",
            generators: ghGenerators.listPR,
          },
          options: [
            {
              name: ["-w", "--web"],
              description: "Open the web browser to show details about checks",
            },
          ],
        },
        {
          name: "close",
          description: "Close a pull request",
          args: {
            name: "number> | <url> | <branch",
            generators: ghGenerators.listPR,
          },
          options: [
            {
              name: ["-d", "--delete-branch"],
              description: "Delete the local and remote branch after close",
            },
          ],
        },
        {
          name: "comment",
          description: "Create a new pr comment",
          args: {
            name: "number> | <url> | <branch",
            generators: ghGenerators.listPR,
          },
          options: [
            {
              name: ["-b", "--body"],
              insertValue: "-b '{cursor}'",
              description: "Supply a body. Will prompt for one otherwise.",
              args: {
                name: "message",
              },
            },
            { name: ["-e", "--editor"], description: "Add body using editor" },
            { name: ["-w", "--web"], description: "Add body in browser" },
          ],
        },
        {
          name: "create",
          description: "Create a pull request",
          args: {
            name: "number> | <url> | <branch",
          },
          options: [
            {
              name: ["-a", "--assignee"],
              description: "Assign people by their login",
              args: {
                name: "login",
              },
            },
            {
              name: ["-B", "--base"],
              description: "The branch into which you want your code merged",
              args: {
                name: "branch",
              },
            },
            {
              name: ["-b", "--body"],
              insertValue: "-b '{cursor}'",
              description: "Body for the pull request",
              args: {
                name: "body",
              },
            },
            {
              name: ["-d", "--draft"],
              description: "Mark pull request as a draft",
            },
            {
              name: ["-f", "--fill"],
              description:
                "Do not prompt for title/body and just use commit info",
            },
            {
              name: ["-H", "--head"],
              description:
                "The branch that contains commits for your pull request (default: current branch)",
              args: {
                name: "branch",
              },
            },
            {
              name: ["-l", "--label"],
              description:
                "The branch that contains commits for your pull request (default: current branch)",
              args: {
                name: "branch",
              },
            },
            {
              name: ["-m", "--milestone"],
              description: "Add the pull request to a milestone by name",
              args: {
                name: "name",
              },
            },
            {
              name: ["--no-maintainer-edit"],
              description:
                "Disable maintainer's ability to modify pull request",
            },
            {
              name: ["-p", "--project"],
              description: "Add the pull request to projects by name",
              args: {
                name: "name",
              },
            },
            {
              name: ["-recover"],
              description: "Recover input from a failed run of create",
              args: {
                name: "string",
              },
            },
            {
              name: ["-r", "--reviewer"],
              description:
                "Request reviews from people or teams by their handle",
              args: {
                name: "handle",
              },
            },
            {
              name: ["-t", "--title"],
              description: "Title for the pull request",
              args: {
                name: "string",
              },
            },
            {
              name: ["-w", "--web"],
              description: "Open the web browser to create a pull request",
            },
          ],
        },
        {
          name: "diff",
          description: "View changes in a pull request",
          args: {
            name: "number> | <url> | <branch",
            generators: ghGenerators.listPR,
          },
          options: [
            {
              name: ["--color"],
              description: "Use color in diff output: {always|never|auto}",
              args: {
                name: "choice",
              },
            },
          ],
        },
        {
          name: "list",
          description: "List and filter pull requests in this repository",
          options: [
            {
              name: ["-a", "--assignee"],
              description: "Filter by assignee",
              args: {
                name: "string",
              },
            },
            {
              name: ["-B", "--base"],
              description: "Filter by base branch",
              args: {
                name: "string",
              },
            },
            {
              name: ["-l", "--label"],
              description: "Filter by labels",
              args: {
                name: "string",
              },
            },
            {
              name: ["-L", "--limit"],
              description: "Maximum number of items to fetch",
              args: {
                name: "int",
              },
            },
            {
              name: ["-s", "--state"],
              description: "Filter by state: {open|closed|merged|all}",
              args: {
                name: "string",
              },
            },
            {
              name: ["-w", "--web"],
              description: "Open the browser to list the pull requests",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "merge",
          description: "Merge a pull request",
          args: {
            name: "number> | <url> | <branch",
            generators: ghGenerators.listPR,
          },
          options: [
            {
              name: ["-d", "--delete-branch"],
              description: "Delete the local and remote branch after merge",
            },
            {
              name: ["-m", "--merge"],
              description: "Merge the commits with the base branch",
            },
            {
              name: ["-r", "--rebase"],
              description: "Rebase the commits onto the base branch",
            },
            {
              name: ["-s", "--squash"],
              description:
                "Squash the commits into one commit and merge it into the base branch",
            },
          ],
        },
        {
          name: "ready",
          description: "Mark a pull request as ready for review",
          args: {
            name: "number> | <url> | <branch",
            generators: ghGenerators.listPR,
          },
        },
        {
          name: "reopen",
          description: "Reopen a pull request",
          args: {
            name: "number> | <url> | <branch",
            generators: ghGenerators.listPR,
          },
        },
        {
          name: "review",
          description: "Add a review to a pull request",
          args: {
            name: "number> | <url> | <branch",
            generators: ghGenerators.listPR,
          },
          options: [
            { name: ["-a", "--approve"], description: "Approve pull request" },
            {
              name: ["-b", "--body"],
              description: "Specify the body of a review",
              args: {
                name: "string",
              },
            },
            {
              name: ["-c", "--comment"],
              description: "Comment on a pull request",
            },
            {
              name: ["-r", "--request-changes"],
              description: "Request changes on a pull request",
            },
          ],
        },
        {
          name: "status",
          description: "Show status of relevant pull requests",
        },
        {
          name: "view",
          description: "View a pull request",
          args: {
            name: "number> | <url> | <branch",
            generators: ghGenerators.listPR,
          },
          options: [
            {
              name: ["-c", "--comments"],
              description: "View pull request comments",
            },
            {
              name: ["-w", "--web"],
              description: "Open a pull request in the browser",
            },
          ],
        },
      ],
    },
    { name: "release", description: "Manage GitHub releases" },
    {
      name: "repo",
      description: "Create, clone, fork, list, and view repositories",
      subcommands: [
        {
          name: "clone",
          description: "Clone a repository locally",
          args: {
            name: "string",
          },
          options: [
            { name: ["-h", "--help"], description: "Show help for command" },
          ],
        },
        {
          name: "create",
          description: "Create a new GitHub repository",
          args: {
            name: "string",
          },
          options: [
            { name: ["-h", "--help"], description: "Show help for command" },
            {
              name: ["-y", "--confirm"],
              description: "Skip the confirmation prompt",
            },
            {
              name: ["-d", "--description"],
              description: "Description of the repository",
              args: {
                name: "string",
              },
            },
            {
              name: ["-h", "--homepage"],
              description: "repository home page URL",
              args: {
                name: "string",
              },
            },
            { name: ["--public"], description: "make the repository public" },
            { name: ["--private"], description: "make the repository private" },
            {
              name: ["--internal"],
              description: "make the repository internal",
            },
            {
              name: ["--enable-issues"],
              description: "Enable issues in the new repository {true|false}",
            },
            {
              name: ["--enable-wiki"],
              description: "Enable wiki in the new repository {true|false}",
            },
          ],
        },
        {
          name: "fork",
          description: "Create a fork of a repository",
          args: {
            name: "string",
          },
          options: [
            { name: ["-h", "--help"], description: "Show help for command" },
            { name: ["--clone"], description: "Clone the fork {true|false}" },
            {
              name: ["--remote"],
              description: "Add remote for fork {true|false}",
            },
            {
              name: ["--remote-name"],
              description:
                'Specify a name for a fork\'s new remote. (default "origin")',
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "list",
          description: "List repositories owned by user or organization",
          args: {
            name: "string",
          },
          options: [
            { name: ["-h", "--help"], description: "Show help for command" },
            {
              name: ["--archived"],
              description: "Show only archived repositories",
            },
            { name: ["--fork"], description: "Show only forked repositories" },
            {
              name: ["-l", "--fork"],
              description: "Filter by primary coding language",
            },
            {
              name: ["-L", "--limit"],
              description:
                "Maximum number of repositories to list (default 30)",
              args: {
                name: "string",
              },
            },
            {
              name: ["--no-archived"],
              description: "Omit archived repositories",
            },
            {
              name: ["--private"],
              description: "Show only private repositories",
            },
            {
              name: ["--public"],
              description: "Show only public repositories",
            },
            { name: ["--source"], description: "Show only non-forks" },
          ],
        },
        {
          name: "view",
          description: "View a repository",
          args: {
            name: "string",
          },
          options: [
            { name: ["-h", "--help"], description: "Show help for command" },
            {
              name: ["-b", "--branch"],
              description: "View a specific branch of the repository",
              args: {
                name: "string",
              },
            },
            {
              name: ["-w", "--web"],
              description: "Open a repository in the browser",
            },
          ],
        },
      ],
    },
  ],
};
