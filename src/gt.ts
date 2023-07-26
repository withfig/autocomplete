const submitOptions = [
  {
    name: ["--draft", "-d"],
    description:
      "If set, marks PR as draft. If --no-interactive is true, new PRs will be created in draft mode",
  },
  {
    name: ["--publish", "-p"],
    description:
      "If set, publishes PR. If --no-interactive is true, new PRs will be created in draft mode",
  },
  {
    name: ["--edit", "-e"],
    description:
      "Edit PR fields inline. If --no-interactive is true, this is automatically set to false",
  },
  {
    name: ["--no-edit", "-n"],
    description: "Don't edit PR fields inline. Takes precedence over --edit",
  },
  {
    name: "--dry-run",
    description:
      "Reports the PRs that would be submitted and terminates. No branches are pushed and no PRs are opened or updated",
  },
  {
    name: ["--confirm", "-c"],
    description:
      "Reports the PRs that would be submitted and asks for confirmation before pushing branches and opening/updating PRs. If either of --no-interactive or --dry-run is passed, this flag is ignored",
  },
  {
    name: ["--select", "-s"],
    description:
      "Reports the PRs that would be submitted and asks the user to select which should be updated/created. If either of --no-interactive or --dry-run is passed, this flag is ignored",
  },
  {
    name: ["--update-only", "-u"],
    description: "Only update the PRs that have been already been submitted",
  },
  {
    name: ["--force", "-f"],
    description:
      "Force push: overwrites the remote branch with your local branch. Otherwise defaults to --force-with-lease",
  },
];

const completionSpec: Fig.Spec = {
  name: "gt",
  description: "Graphite.dev CLI",
  subcommands: [
    {
      name: "auth",
      description:
        "Add your auth token to enable Graphite CLI to create and update your PRs on GitHub",
      priority: 50,
    },
    {
      name: ["branch", "b"],
      description: "Commands that operate on your current branch",
      requiresSubcommand: true,
      subcommands: [
        {
          name: ["bottom", "b"],
          description:
            "Switch to the first branch from trunk in the current stack",
        },
        {
          name: ["checkout", "co"],
          description:
            "Switch to a branch. If no branch is provided, opens an interactive selector",
          args: {
            name: "branch",
            description: "Name of branch to checkout",
            isOptional: true,
          },
          options: [
            {
              name: ["--show-untracked", "-u"],
              description:
                "Include untracked branched in interactive selection",
            },
          ],
        },
        {
          name: ["create", "c"],
          description:
            "Create a new branch stacked on top of the current branch and commit staged changes. If no branch name is specified but a commit message is passed, generate a branch name from the commit message",
          args: {
            name: "name",
            description: "Branch name",
            isOptional: true,
          },
          options: [
            {
              name: ["--message", "-m"],
              description:
                "Commit staged changes on the new branch with this message",
              args: {
                name: "message",
                description: "Commit message",
              },
            },
            {
              name: ["--all", "-a"],
              description:
                "Stage all unstaged changes on the new branch with this message",
            },
            {
              name: ["--patch", "-p"],
              description: "Pick hunks to stage before committing",
            },
            {
              name: ["--insert", "-i"],
              description:
                "When true, any existing children of the current branch will become children of the new branch",
            },
          ],
        },
        {
          name: ["delete", "dl"],
          description:
            "Delete a branch and its corresponding Graphite metadata",
          args: {
            name: "name",
            description: "Branch name",
          },
          options: [
            {
              name: ["--force", "-f"],
              description:
                "Delete the branch even if it is not merged or closed",
            },
          ],
        },
        {
          name: ["down", "d"],
          description: "Switch to the parent of the current branch",
          args: {
            name: "steps",
            description: "The number of levels to traverse downstack",
            isOptional: true,
            default: "1",
          },
          options: [
            {
              name: ["--steps", "-n"],
              description: "The number of levels to traverse downstack",
              args: {
                name: "steps",
                default: "1",
              },
            },
          ],
        },
        {
          name: ["edit", "e"],
          description:
            "Run an interactive rebase on the current branch's commits and restack upstack branches",
        },
        {
          name: ["fold", "f"],
          description:
            "Fold a branch's changes into its parent, update dependencies of descendants of the new combined branch, and restack",
          options: [
            {
              name: ["--keep", "-k"],
              description:
                "Keeps the name of the current branch instead of using the name of its parent",
            },
          ],
        },
        {
          name: ["info", "i"],
          description: "Display information about the current branch",
          options: [
            {
              name: ["--patch", "-p"],
              description: "Show the changes made by each commit",
            },
            {
              name: ["--diff", "-d"],
              description:
                "Show the diff between this branch and its parent. Takes precedence over patch",
            },
            {
              name: ["--body", "-b"],
              description: "Show the PR body, if it exists",
            },
          ],
        },
        {
          name: ["rename", "rn"],
          description:
            "Rename a branch and update metadata referencing it. If no branch name is supplied, you will be prompted for a new branch name. Note that this removes any associated GitHub pull request",
          args: {
            name: "name",
            description: "Branch name",
          },
          options: [
            {
              name: ["--force", "-f"],
              description:
                "Allow renaming a branch that is already associated with an open GitHub pull request",
            },
          ],
        },
        {
          name: ["restack", "r"],
          description:
            "Ensure the current branch is based on its parent, rebasing if necessary",
        },
        {
          name: ["split", "sp"],
          description:
            "Split the current branch into multiple single-commit branches",
          options: [
            {
              name: ["--by-commit", "--commit", "-c"],
              description:
                "Split by commit - slice up the history of this branch",
            },
            {
              name: ["--by-hunk", "--hunk", "-h"],
              description:
                "Split by hunk - split into new single-commit branches",
            },
          ],
        },
        {
          name: ["squash", "sq"],
          description:
            "Squash all commits in the current branch and restack upstack branches",
          options: [
            {
              name: ["--message", "-m"],
              description: "The updated message for the commit",
              args: {
                name: "message",
                description: "Commit message",
              },
            },
            {
              name: "--edit",
              description: "Modify the existing commit message",
            },
            {
              name: ["--no-edit", "-n"],
              description:
                "Don't modify the existing commit message. Takes precedence over --edit",
            },
          ],
        },
        {
          name: ["submit", "s"],
          description:
            "Idempotently force push the current branch to GitHub, creating or updating a pull request",
          options: submitOptions,
        },
        {
          name: ["top", "t"],
          description:
            "Switch to the tip branch of the current stack. Prompts if ambiguous",
        },
        {
          name: ["track", "tr"],
          description:
            "Start tracking the current (or provided) branch with Graphite by selecting its parent. This command can also be used to fix corrupted Graphite metadata",
          args: {
            name: "branch",
            description: "Branch name",
          },
          options: [
            {
              name: ["--parent", "-p"],
              description:
                "The tracked branch's parent. If unset, prompts for a parent branch",
              args: {
                name: "parent",
                description: "Name of parent branch",
              },
            },
            {
              name: ["--force", "-f"],
              description:
                "Sets the parent to the most recent tracked ancestor of the branch being tracked. Takes precedence over `--parent`",
            },
          ],
        },
        {
          name: ["untrack", "ut"],
          description:
            "Stop tracking a branch with Graphite. If the branch has children, they will also be untracked. Default to the current branch if none is passed in",
          args: {
            name: "branch",
            description: "Branch name",
          },
          options: [
            {
              name: ["--force", "-f"],
              description:
                "Will not prompt for confirmation before untracking a branch with children",
            },
          ],
        },
        {
          name: ["up", "u"],
          description:
            "Switch to the child of the current branch. Prompts if ambiguous",
          args: {
            name: "steps",
            description: "The number of levels to traverse upstack",
            isOptional: true,
            default: "1",
          },
          options: [
            {
              name: ["--steps", "-n"],
              description: "The number of levels to traverse upstack",
              args: {
                name: "steps",
                default: "1",
              },
            },
          ],
        },
      ],
    },
    {
      name: "changelog",
      description: "Show the Graphite CLI changelog",
      priority: 50,
    },
    {
      name: ["commit", "c"],
      description: "Commands that operate on commits",
      requiresSubcommand: true,
      subcommands: [
        {
          name: ["amend", "a"],
          description:
            "Amend the most recent commit and restack upstack branches",
          options: [
            {
              name: ["--all", "-a"],
              description: "Stage all changes before committing",
            },
            {
              name: ["--message", "-m"],
              description: "The updated message for the commit",
              args: {
                name: "message",
              },
            },
            {
              name: "--edit",
              description: "Modify the existing commit message",
            },
            {
              name: ["--patch", "-p"],
              description: "Pick hunks to stage before amending",
            },
            {
              name: ["--no-edit", "-n"],
              description:
                "Don't modify the existing commit message. Takes precedence over --edit",
            },
          ],
        },
        {
          name: ["create", "c"],
          description: "Create a new commit and restack upstack branches",
          options: [
            {
              name: ["--all", "-a"],
              description: "Stage all changes before committing",
            },
            {
              name: ["--message", "-m"],
              description: "The updated message for the commit",
              args: {
                name: "message",
              },
            },
            {
              name: ["--patch", "-p"],
              description: "Pick hunks to stage before amending",
            },
          ],
        },
      ],
    },
    {
      name: "completion",
      description: "Set up bash or zsh tab completion",
    },
    {
      name: ["continue", "cont"],
      description:
        "Continues the most recent Graphite command halted by a merge conflict",
      options: [
        {
          name: ["--all", "-a"],
          description: "Stage all changes before continuing",
        },
      ],
    },
    {
      name: ["dash", "d"],
      description: "Open the web dashboard",
      subcommands: [
        {
          name: "d",
          description: "Opens your Graphite dashboard in the web",
        },
        {
          name: ["pr", "p"],
          description:
            "Opens the PR page for the current (or provided) branch (or pr number)",
          args: {
            name: "pr",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "docs",
      description: "Show the Graphite CLI docs",
    },
    {
      name: ["downstack", "ds"],
      description: "Commands that operate on a branch and its ancestors",
      requiresSubcommand: true,
      subcommands: [
        {
          name: ["edit", "e"],
          description:
            "Edit the order of the branches between trunk and the current branch, restacking all of their descendants",
        },
        {
          name: ["get", "g"],
          description:
            "Get branches from trunk to the specified branch from remote, prompting the user to resolve conflicts. If no branch is provided, get downstack from the current branch",
          args: {
            name: "branch",
            description: "Name of branch",
            isOptional: true,
          },
          options: [
            {
              name: ["--force", "-f"],
              description:
                "Overwrite all fetched branches with remote source of truth",
            },
          ],
        },
        {
          name: ["restack", "r"],
          description:
            "From trunk to the current branch, ensure each is based on its parent, rebasing if necessary",
        },
        {
          name: ["submit", "s"],
          description:
            "Idempotently force push all branches from trunk to the current branch to GitHub, creating or updating distinct pull requests for each",
          options: submitOptions,
        },
        {
          name: ["test", "t"],
          description:
            "From trunk to the current branch, run the provided command on each branch and aggregate the results",
          args: {
            name: "command",
          },
          options: [
            {
              name: ["--trunk", "-t"],
              description:
                "Run the command on the trunk branch in addition to the rest of the stack",
            },
          ],
        },
        {
          name: ["track", "tr"],
          description:
            "Track a series of untracked branches, by specifying each's parent. Starts at the current (or provided) branch and stops when you reach a tracked branch",
          args: {
            name: "branch",
            description: "Branch name",
            isOptional: true,
          },
          options: [
            {
              name: ["--force", "-f"],
              description:
                "Sets the parent of each branch to the most recent ancestor without interactive selection",
            },
          ],
        },
      ],
    },
    {
      name: "feedback",
      description: "Commands for providing feedback and debug state",
      args: {
        name: "message",
        description:
          "Post a string directly to the maintainers' Slack so they can drown in praise, factor in your feedback, laugh at your jokes, cry at your insults, or fall victim to Slack injection attacks",
        isOptional: true,
      },
      options: [
        {
          name: "--with-debug-context",
          description:
            "Include a blob of json describing your repo's state to help with debugging. Run 'gt feedback debug-context' to see what would be included",
        },
      ],
      subcommands: [
        {
          name: "debug-context",
          description:
            "Print a debug summary of your repo. Useful for creating bug report details",
          options: [
            {
              name: ["--recreate", "-r"],
              description:
                "Accepts a json block created by `gt feedback state`. Recreates a debug repo in a temp folder with a commit tree matching the state JSON",
              args: {
                name: "json",
              },
            },
            {
              name: ["--recreate-from-file", "-f"],
              description:
                "Accepts a file containing a json block created by `gt feedback state`. Recreates a debug repo in a temp folder with a commit tree matching the state JSON",
              args: {
                name: "file",
              },
            },
          ],
        },
      ],
    },
    {
      name: ["log", "l"],
      description: "Commands that log your stacks",
      options: [
        {
          name: ["--reverse", "-r"],
          description:
            "Print the log upside down. Handy when you have a lot of branches",
        },
        {
          name: ["--stack", "-s"],
          description:
            "Only show ancestors and descendants of the current branch",
        },
        {
          name: ["--steps", "-n"],
          description:
            "Only show this many levels upstack and downstack. Implies --stack",
          dependsOn: ["--stack"],
          args: {
            name: "Number of steps",
          },
        },
        {
          name: ["--show-untracked", "-u"],
          description: "Include untracked branched in interactive selection",
        },
      ],
      subcommands: [
        {
          name: "",
          description:
            "Log all branches tracked by Graphite, showing dependencies and info for each",
        },
        {
          name: "long",
          description: "Display a graph of the commit ancestry of all branches",
        },
        {
          name: "short",
          description:
            "Log all stacks tracked by Graphite, arranged to show dependencies",
        },
      ],
    },
    {
      name: ["repo", "r"],
      description:
        "Read or write Graphite's configuration settings for the current repo",
      requiresSubcommand: true,
      subcommands: [
        {
          name: ["init", "i"],
          description: "Create or regenerate a `.graphite_repo_config` file",
          options: [
            {
              name: "--trunk",
              description: "The name of your trunk branch",
              args: {
                name: "name",
              },
            },
            {
              name: "--reset",
              description: "Untrack all branches",
            },
          ],
        },
        {
          name: "name",
          description: "The current repo's name stored in Graphite",
          options: [
            {
              name: ["--set", "-s"],
              description:
                "Override the value of the repo's name in the Graphite config. This is expected to match the name of the repo on GitHub and should only be set in cases where Graphite is incorrectly inferring the repo name",
              args: {
                name: "name",
              },
            },
          ],
        },
        {
          name: "owner",
          description: "The current repo owner's name stored in Graphite",
          options: [
            {
              name: ["--set", "-s"],
              description:
                "Override the value of the repo owner's name in the Graphite config. This is expected to match the name of the repo owner on GitHub and should only be set in cases where Graphite is incorrectly inferring the repo owner's name",
              args: {
                name: "name",
              },
            },
          ],
        },
        {
          name: "pr-templates",
          description:
            "A list of your GitHub PR templates. These are used to pre-fill the bodies of your PRs created using the submit command",
        },
        {
          name: "remote",
          description:
            "Specifies the remote that graphite pushes to/pulls from (defaults to 'origin')",
          options: [
            {
              name: ["--set", "-s"],
              description:
                "Override the name of the remote repository. Only set this if you are using a remote other than 'origin'",
              args: {
                name: "name",
              },
            },
          ],
        },
        {
          name: ["sync", "s"],
          description:
            "Pull the trunk branch from remote and delete any branches that have been merged",
          options: [
            {
              name: ["--pull", "-p"],
              description: "Pull the trunk branch from remote",
            },
            {
              name: ["--delete", "-d"],
              description: "Delete branches which have been merged",
            },
            {
              name: "--show-delete-progress",
              description: "Show progress through merged branches",
            },
            {
              name: ["--force", "-f"],
              description:
                "Don't prompt for confirmation before deleting a branch",
            },
            {
              name: ["--restack", "-r"],
              description:
                "Restack the current stack and any stacks with deleted branches",
            },
          ],
        },
      ],
    },
    {
      name: ["stack", "s"],
      description: "Commands that operate on your current stack of branches",
      requiresSubcommand: true,
      subcommands: [
        {
          name: ["restack", "r", "fix", "f"],
          description:
            "Ensure each branch in the current stack is based on its parent, rebasing if necessary",
        },
        {
          name: ["submit", "s"],
          description:
            "Idempotently force push all branches in the current stack to GitHub, creating or updating distinct pull requests for each",
          options: submitOptions,
        },
        {
          name: ["test", "t"],
          description:
            "Run the provided command on each branch in the current stack and aggregate the results",
          args: {
            name: "command",
          },
          options: [
            {
              name: ["--trunk", "-t"],
              description:
                "Run the command on the trunk branch in addition to the rest of the stack",
            },
          ],
        },
      ],
    },
    {
      name: ["upstack", "us"],
      description: "Commands that operate on a branch and its descendants",
      requiresSubcommand: true,
      subcommands: [
        {
          name: ["onto", "o"],
          description:
            "Rebase the current branch onto the latest commit of the target branch and restack all of its descendants. If no branch is passed in, opens an interactive selector",
          args: {
            name: "branch",
            description: "Name of branch",
            isOptional: true,
          },
        },
        {
          name: ["restack", "r", "fix", "f"],
          description:
            "Ensure each branch in the current stack is based on its parent, rebasing if necessary",
        },
        {
          name: ["submit", "s"],
          description:
            "Idempotently force push all branches in the current stack to GitHub, creating or updating distinct pull requests for each",
          options: submitOptions,
        },
        {
          name: ["test", "t"],
          description:
            "Run the provided command on each branch in the current stack and aggregate the results",
          args: {
            name: "command",
          },
          options: [
            {
              name: ["--trunk", "-t"],
              description:
                "Run the command on the trunk branch in addition to the rest of the stack",
            },
          ],
        },
      ],
    },
    {
      name: "user",
      description: "Read or write Graphite's user configuration settings",
      requiresSubcommand: true,
      subcommands: [
        {
          name: "branch-date",
          description:
            "Toggle prepending date to auto-generated branch names on branch creation",
          options: [
            {
              name: "--enable",
              description: "Enable date in auto-generated branch names",
            },
            {
              name: "--disable",
              description: "Disable date in auto-generated branch names",
            },
          ],
        },
        {
          name: "branch-prefix",
          description:
            "The prefix which Graphite will prepend to generated branch names",
          options: [
            {
              name: ["--set", "-s"],
              description: "Set a new prefix for branch names",
              args: {
                name: "value",
              },
            },
            {
              name: ["--reset", "-r"],
              description:
                "Turn off branch prefixing. Takes precendence over --set",
            },
          ],
        },
        {
          name: "branch-replacement",
          description:
            "The character that will replace unsupported characters in generated branch names",
          options: [
            {
              name: "--set-underscore",
              description: "Use underscore (_) as the replacement character",
            },
            {
              name: "--set-dash",
              description: "Use dash (-) as the replacement character",
            },
            {
              name: "--set-empty",
              description:
                "Remove invalid characters from the branch name without replacing them",
            },
          ],
        },
        {
          name: "editor",
          description: "The editor opened by Graphite",
          options: [
            {
              name: "--set",
              description: "Set default editor for Graphite. eg --set vim",
              args: {
                name: "value",
                default: "",
                isOptional: true,
              },
            },
            {
              name: "--unset",
              description: "Unset default editor for Graphite",
            },
          ],
        },
        {
          name: "pager",
          description: "The pager opened by Graphite",
          options: [
            {
              name: "--set",
              description:
                'Set default pager for Graphite. e.g. --set "less -FRX"',
              args: {
                name: "value",
              },
            },
            {
              name: "--disable",
              description: "Disable pager for Graphite",
            },
            {
              name: "--unset",
              description:
                "Unset default pager for Graphite and default to git pager",
            },
          ],
        },
        {
          name: "restack-date",
          description:
            "Configure how committer date is handled by restack internal rebases",
          options: [
            {
              name: "--use-author-date",
              description:
                "Passes `--committer-date-is-author-date` to the internal git rebase for restack operations. Instead of using the current time as the committer date, use the author date of the commit being rebased as the committer date. To return to default behavior, pass in `--no-use-author-date`",
            },
          ],
        },
        {
          name: "submit-body",
          description: "Options for default PR descriptions",
          options: [
            {
              name: "--include-commit-messages",
              description:
                "Include commit messages in PR body by default. Disable with --no-include-commit-messages",
            },
            {
              name: "--no-include-commit-messages",
              description:
                "Disable include commit messages in PR body by default",
            },
          ],
        },
        {
          name: "tips",
          description: "Show tips while using Graphite",
          options: [
            {
              name: "--enable",
              description: "Enable tips",
            },
            {
              name: "--disable",
              description: "Disable tips",
            },
          ],
        },
      ],
    },
  ],
  options: [
    {
      name: "--version",
      description: "Show Graphite CLI version",
      priority: 0,
      isPersistent: true,
    },
    {
      name: ["--help", "-h"],
      description: "Show help for Graphite CLI",
      priority: 20,
      isPersistent: true,
    },
    {
      name: "--interactive",
      description: "Prompt the user. Disable with --no-interactive",
      priority: 10,
      isPersistent: true,
    },
    {
      name: "--no-interactive",
      description: "Run non interactive",
      priority: 10,
      isPersistent: true,
    },
    {
      name: ["--quiet", "-q"],
      description: "Minimize output to the terminal",
      priority: 10,
      isPersistent: true,
    },
    {
      name: "--verify",
      description: "Run git hooks. Disable with --no-verify",
      priority: 10,
      isPersistent: true,
    },
    {
      name: "--no-verify",
      description: "Disable git hooks",
      priority: 10,
      isPersistent: true,
    },
    {
      name: "--debug",
      description: "Display debug output",
      priority: 10,
      isPersistent: true,
    },
  ],
};

export default completionSpec;
