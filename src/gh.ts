const ghGenerators: Record<string, Fig.Generator> = {
  listPR: {
    script: "gh pr list",
    postProcess: (out) =>
      out.split("\n").map((line) => {
        const { id, name, branch, status } = line.match(
          /^(?<id>[\d]+)\t(?<name>.+)\t(?<branch>.*)\t(?<status>OPEN|DRAFT)$/
        ).groups;
        return {
          name: id,
          displayName: name,
          description: `#${id} | ${branch}`,
          icon: status === "OPEN" ? "✅" : "☑️",
        };
      }),
  },
  listAlias: {
    script: "gh alias list",
    postProcess: (out) => {
      const aliases = out.split("\n").map((line) => {
        const [name, content] = line.split(":");

        return { name: name.trim(), content: content.trim() };
      });

      return aliases.map(({ name, content }) => ({
        name,
        description: content,
        icon: "fig://icon?type=command",
      }));
    },
  },
};

const ghOptions: Record<string, Fig.Option> = {
  help: { name: "--help", description: "Show help for command" },
};

const completionSpec: Fig.Spec = {
  name: "gh",
  description: "GitHub's CLI tool",
  subcommands: [
    {
      name: "alias",
      description: "Create command shortcuts",
      options: [ghOptions.help],
      subcommands: [
        {
          name: "delete",
          description: "Delete an alias",
          args: {
            name: "alias",
            generators: ghGenerators.listAlias,
          },
          options: [ghOptions.help],
        },
      ],
    },
    { name: "api", description: "Make an authenticated GitHub API request" },
    {
      name: "auth",
      description: "Login, logout, and refresh your authentication",
      options: [ghOptions.help],
      subcommands: [
        {
          name: "login",
          description: "Authenticate with a GitHub host",
          options: [
            ghOptions.help,
            {
              name: ["-h", "--hostname"],
              description:
                "The hostname of the GitHub instance to authenticate with",
              args: { name: "hostname" },
            },
            {
              name: ["-s", "--scopes"],
              description: "Additional authentication scopes for gh to have",
              args: { name: "scopes" },
            },
            {
              name: ["-w", "--web"],
              description: "Open a browser to authenticate",
            },
            {
              name: "--with-token",
              description: "Read token from standard input",
              args: { name: "token" },
            },
          ],
        },
      ],
    },
    {
      name: "completion",
      description: "Generate shell completion scripts",
      options: [
        ghOptions.help,
        {
          name: ["-s", "--shell"],
          args: {
            name: "shell",
            suggestions: ["bash", "zsh", "fish", "powershell"],
          },
        },
      ],
    },
    {
      name: "config",
      description: "Manage configuration for gh",
      options: [ghOptions.help],
      subcommands: [
        {
          name: "get",
          description: "Print the value of a given configuration key",
          args: {
            name: "key",
            suggestions: [
              "git_protocol",
              "editor",
              "prompt",
              "pager",
              "http_unix_socket",
            ],
          },
          options: [
            ghOptions.help,
            {
              name: ["-h", "--host"],
              args: { name: "host" },
              description: "Get per-host setting",
            },
          ],
        },
        {
          name: "set",
          description: "Update configuration with a value for the given key",
          subcommands: [
            {
              name: "git_protocol",
              description:
                "The protocol to use for git clone and push operations",
              args: {
                name: "option",
                suggestions: ["https", "ssh"],
              },
            },
            {
              name: "editor",
              description: "The text editor program to use for authoring text",
              args: { name: "editor", suggestions: ["vim", "nano"] },
            },
            {
              name: "prompt",

              description: "Toggle interactive prompting in the terminal",
              args: {
                name: "value",
                suggestions: ["enable", "disable"],
              },
            },
            {
              name: "pager",
              insertValue: "pager {cursor}",
              description:
                "The terminal pager program to send standard output to",
              args: { name: "value" },
            },
            {
              name: "http_unix_socket",
              description:
                "The path to a unix socket through which to make HTTP connection",
              args: { name: "path" },
            },
          ],
          options: [
            ghOptions.help,
            {
              name: ["-h", "--host"],
              args: { name: "host" },
              description: "Get per-host setting",
            },
          ],
        },
      ],
    },
    {
      name: "gist",
      description: "Manage gists",
      options: [ghOptions.help],
      subcommands: [
        {
          name: "clone",
          description: "Clone a gist locally",
          options: [ghOptions.help],
          args: [
            { name: "gist", description: "Gist ID or URL" },
            { name: "directory", isOptional: true, template: "folders" },
          ],
        },
        {
          name: "create",
          description: "Create a new gist",
          args: {
            name: "filename",
            template: "filepaths",
          },
          options: [
            ghOptions.help,
            {
              name: ["-d", "--desc"],
              description: "A description for this gist",
              insertValue: "-d '{cursor}'",
              args: { name: "description" },
            },
            {
              name: ["-f", "--filename"],
              description:
                "Provide a filename to be used when reading from STDIN",
              args: { name: "filename", template: "filepaths" },
            },
            {
              name: ["-p", "--public"],
              description: "List the gist publicly (default: secret)",
            },
            {
              name: ["-w", "--web"],
              description: "Open the web browser with created gist",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a gist",
          options: [ghOptions.help],
          args: { name: "gist", description: "Gist ID or URL" },
        },
        {
          name: "edit",
          description: "Edit one of your gists",
          args: { name: "gist", description: "Gist ID or URL" },
          options: [
            ghOptions.help,
            {
              name: ["-a", "--add"],
              description: "Add a new file to the gist",
              args: { name: "filename", template: "filepaths" },
            },
            {
              name: ["-f", "--filename"],
              description: "Select a file to edit",
            },
          ],
        },
        {
          name: "list",
          description: "List your gists",
          options: [
            ghOptions.help,
            {
              name: ["-L", "--limit"],
              displayName: "-L, --limit",
              description: "Maximum number of gists to fetch (default 10)",
              args: { name: "int" },
            },
            {
              name: "--public",
              description: "Show only public gists",
            },
            {
              name: "--secret",
              description: "Show only secret gists",
            },
          ],
        },
        {
          name: "view",
          description: "View a gist",
          args: { name: "gist", description: "Gist ID or URL" },
          options: [
            ghOptions.help,
            {
              name: ["-f", "--filename"],
              description: "Display a single file from the gist",
            },
            {
              name: "--files",
              description: "List file names from the gist",
            },
            {
              name: ["-r", "--raw"],
              description: "Print raw instead of rendered gist contents",
            },
            {
              name: ["-w", "--web"],
              description: "Open gist in the browser",
            },
          ],
        },
      ],
    },
    {
      name: "issue",
      description: "Manage issues",
      options: [ghOptions.help],
      subcommands: [
        {
          name: "close",
          description: "Close issue",
          args: { name: "issue", description: "Number or URL" },
          options: [
            ghOptions.help,
            {
              name: ["-R", "--repo"],
              insertValue: "-R '{cursor}'",
              description:
                "Select another repository using the [HOST/]OWNER/REPO format",
              args: { name: "repo" },
            },
          ],
        },
        {
          name: "comment",
          description: "Create a new issue comment",
          args: { name: "issue", description: "Number or URL" },
          options: [
            ghOptions.help,
            {
              name: ["-R", "--repo"],
              insertValue: "-R '{cursor}'",
              description:
                "Select another repository using the [HOST/]OWNER/REPO format",
              args: { name: "repo" },
            },
            {
              name: ["-b", "--body"],
              insertValue: "-b '{cursor}'",
              description: "Supply a body. Will prompt for one otherwise",
              args: { name: "string" },
            },
            {
              name: ["-F", "--body-file"],
              description: "Read body text from file",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: ["-e", "--editor"],
              description: "Add body using editor",
              args: { name: "editor" },
            },
            {
              name: ["-w", "--web"],
              description: "Add body in browser",
            },
          ],
        },
        {
          name: "create",
          description: "Create a new issue",
          options: [
            ghOptions.help,
            {
              name: ["-R", "--repo"],
              insertValue: "-R '{cursor}'",
              description:
                "Select another repository using the [HOST/]OWNER/REPO format",
              args: { name: "repo" },
            },
            {
              name: ["-a", "--assignee"],
              description:
                'Assign people by their login. Use "@me" to self-assign',
              args: { name: "login" },
            },
            {
              name: ["-b", "--body"],
              insertValue: "-b '{cursor}'",
              description: "Supply a body. Will prompt for one otherwise",
              args: { name: "string" },
            },
            {
              name: ["-F", "--body-file"],
              description: "Read body text from file",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: ["-l", "--label"],
              insertValue: "-l '{cursor}'",
              description: "Add labels by name",
              args: { name: "name" },
            },
            {
              name: ["-m", "--milestone"],
              description: "Add the issue to a milestone by name",
              args: { name: "name" },
            },
            {
              name: ["-p", "--project"],
              insertValue: "-p '{cursor}'",
              description: "Add the issue to projects by name",
              args: { name: "name" },
            },
            {
              name: "--recover",
              insertValue: "--recover '{cursor}'",
              description: "Recover input from a failed run of create",
              args: { name: "string" },
            },
            {
              name: ["-t", "--title"],
              description: "Supply a title. Will prompt for one otherwise",
              insertValue: "-t '{cursor}'",
              args: { name: "string" },
            },
            {
              name: ["-w", "--web"],
              description: "Open the browser to create an issue",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete issue",
          options: [
            ghOptions.help,
            {
              name: ["-R", "--repo"],
              insertValue: "-R '{cursor}'",
              description:
                "Select another repository using the [HOST/]OWNER/REPO format",
              args: { name: "repo" },
            },
          ],
        },
        {
          name: "edit",
          description: "Edit an issue",
          args: { name: "issue", description: "Number or URL" },
          options: [
            ghOptions.help,
            {
              name: ["-R", "--repo"],
              insertValue: "-R '{cursor}'",
              description:
                "Select another repository using the [HOST/]OWNER/REPO format",
              args: { name: "repo" },
            },
            {
              name: "--add-assignee",
              description:
                'Add assigned users by their login. Use "@me" to assign yourself',
              args: { name: "login" },
            },
            {
              name: "--add-label",
              description: "Add labels by name",
              args: { name: "name" },
            },
            {
              name: ["-b", "--body"],
              insertValue: "-b '{cursor}'",
              description: "Set the new body",
              args: { name: "string" },
            },
            {
              name: ["-F", "--body-file"],
              description: "Read body text from file",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: ["-m", "--milestone"],
              description: "Edit the milestone the issue belongs to by name",
              args: { name: "name" },
            },
            {
              name: "--remove-assignee",
              description:
                'Remove assigned users by their login. Use "@me" to unassign yourself',
              args: { name: "login" },
            },
            {
              name: "--remove-label",
              description: "Remove labels by name",
              args: { name: "name" },
            },
            {
              name: "--remove-project",
              description: "Remove the issue from projects by name",
              args: { name: "name" },
            },
            {
              name: ["-t", "--title"],
              description: "Set the new title",
              insertValue: "-t '{cursor}'",
              args: { name: "string" },
            },
          ],
        },
        {
          name: "list",
          description: "List and filter issues in this repository",
          options: [
            ghOptions.help,
            {
              name: ["-R", "--repo"],
              insertValue: "-R '{cursor}'",
              description:
                "Select another repository using the [HOST/]OWNER/REPO format",
              args: { name: "repo" },
            },
            {
              name: ["-a", "--assignee"],
              description: "Filter by assignee",
              args: { name: "string" },
            },
            {
              name: ["-A", "--author"],
              description: "Filter by author",
              args: { name: "string" },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: { name: "fields" },
            },
            {
              name: ["-l", "--label"],
              insertValue: "-l '{cursor}'",
              description: "Filter by labels",
              args: { name: "string" },
            },
            {
              name: ["-L", "--limit"],
              description: "Maximum number of issues to fetch (default 30)",
              args: { name: "int" },
            },
            {
              name: "--mention",
              description: "Filter by mention",
              args: { name: "string" },
            },
            {
              name: ["-m", "--milestone"],
              insertValue: "-m '{cursor}'",
              description: "Filter by milestone number or `title`",
              args: { name: "number", description: "Number or Title" },
            },
            {
              name: ["-S", "--search"],
              insertValue: "--search '{cursor}'",
              description: "Search issues with query",
              args: { name: "query" },
            },
            {
              name: ["-s", "--state"],
              description: 'Filter by state (default "open")',
              args: {
                name: "state",
                suggestions: ["open", "closed", "all"],
                default: "open",
                description: '(default "open")',
              },
            },
            {
              name: ["-t", "--template"],
              description: "Format JSON output using a Go template",
              args: { name: "string" },
            },
            {
              name: ["-w", "--web"],
              description: "Open the browser to list the issue(s)",
            },
          ],
        },
        {
          name: "reopen",
          description: "Reopen issue",
          options: [
            ghOptions.help,
            {
              name: ["-R", "--repo"],
              insertValue: "-R '{cursor}'",
              description:
                "Select another repository using the [HOST/]OWNER/REPO format",
              args: { name: "repo" },
            },
          ],
        },
        {
          name: "status",
          description: "Show status of relevant issues",
          options: [
            ghOptions.help,
            {
              name: ["-R", "--repo"],
              insertValue: "-R '{cursor}'",
              description:
                "Select another repository using the [HOST/]OWNER/REPO format",
              args: { name: "repo" },
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: { name: "fields" },
            },
            {
              name: ["-t", "--template"],
              description: "Format JSON output using a Go template",
              args: { name: "string" },
            },
          ],
        },
        {
          name: "transfer",
          description: "Transfer issue to another repository",
          args: [
            { name: "issue", description: "Number or URL" },
            { name: "destination-repo" },
          ],
          options: [
            ghOptions.help,
            {
              name: ["-R", "--repo"],
              insertValue: "-R '{cursor}'",
              description:
                "Select another repository using the [HOST/]OWNER/REPO format",
              args: { name: "repo" },
            },
          ],
        },
        {
          name: "view",
          description: "View an issue",
          args: { name: "issue", description: "Number or URL" },
          options: [
            ghOptions.help,
            {
              name: ["-R", "--repo"],
              insertValue: "-R '{cursor}'",
              description:
                "Select another repository using the [HOST/]OWNER/REPO format",
              args: { name: "repo" },
            },
            {
              name: ["-c", "--comments"],
              description: "View issue comments",
            },
            {
              name: ["-q", "--jq"],
              description: "Filter JSON output using a jq expression",
              args: { name: "expression" },
            },
            {
              name: "--json",
              description: "Output JSON with the specified fields",
              args: { name: "fields" },
            },
            {
              name: ["-t", "--template"],
              description: "Format JSON output using a Go template",
              args: { name: "string" },
            },
            {
              name: ["-w", "--web"],
              description: "Open an issue in the browser",
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
              name: "--recurse-submodules",
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
              description: "Supply a body. Will prompt for one otherwise",
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
              name: "--no-maintainer-edit",
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
              name: "-recover",
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
              name: "--color",
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
            { name: "--help", description: "Show help for command" },
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
              description: "Repository home page URL",
              args: {
                name: "string",
              },
            },
            { name: "--public", description: "Make the repository public" },
            { name: "--private", description: "Make the repository private" },
            {
              name: "--internal",
              description: "Make the repository internal",
            },
            {
              name: "--enable-issues",
              description: "Enable issues in the new repository {true|false}",
            },
            {
              name: "--enable-wiki",
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
            { name: "--clone", description: "Clone the fork {true|false}" },
            {
              name: "--remote",
              description: "Add remote for fork {true|false}",
            },
            {
              name: "--remote-name",
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
              name: "--archived",
              description: "Show only archived repositories",
            },
            { name: "--fork", description: "Show only forked repositories" },
            {
              name: ["-l", "--language"],
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
              name: "--no-archived",
              description: "Omit archived repositories",
            },
            {
              name: "--private",
              description: "Show only private repositories",
            },
            {
              name: "--public",
              description: "Show only public repositories",
            },
            { name: "--source", description: "Show only non-forks" },
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

export default completionSpec;
