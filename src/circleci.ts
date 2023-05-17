// Fig autocomplete spec for the CircleCI CLI.
// The full spec can be found at https://circleci-public.github.io/circleci-cli/index.html
const completionSpec: Fig.Spec = {
  name: "circleci",
  description: "CircleCI CLI",
  subcommands: [
    {
      name: "completion",
      description: "Generate shell completion scripts",
      subcommands: [
        {
          name: "bash",
          description: "Generate bash completion scripts",
        },
        {
          name: "zsh",
          description: "Generate zsh completion scripts",
        },
      ],
    },
    {
      name: "config",
      description: "Operate on build config files",
      subcommands: [
        {
          name: "pack",
          description: "Pack CircleCI config files into a single file",
        },
        {
          name: "process",
          description: "Validate and display extended config",
        },
        {
          name: "validate",
          description: "Checks that config is valid",
        },
      ],
    },
    {
      name: "context",
      description: "Secure and share environment variables across projects",
      subcommands: [
        {
          name: "create",
          description: "Create a new context",
          args: [
            {
              name: "vcs-type",
              description:
                "Your VCS provider, can be either 'github' or 'bitbucket'",
              suggestions: ["github", "bitbucket"],
              isOptional: true,
            },
            {
              name: "org-name",
              description: "The name of your organization",
              isOptional: true,
            },
            {
              // TODO: add generator from `circleci context list` output
              name: "context-name",
              description: "The name for your context",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the named context",
          args: [
            {
              name: "vcs-type",
              description:
                "Your VCS provider, can be either 'github' or 'bitbucket'",
              suggestions: ["github", "bitbucket"],
            },
            {
              name: "org-name",
              description: "The name of your organization",
            },
            {
              name: "context-name",
              description: "The name for your context",
            },
          ],
        },
        {
          name: "list",
          description: "List all contexts",
          args: [
            {
              name: "vcs-type",
              description:
                "Your VCS provider, can be either 'github' or 'bitbucket'",
              suggestions: ["github", "bitbucket"],
            },
            {
              name: "org-name",
              description: "The name of your organization",
            },
          ],
        },
        {
          name: "remove-secret",
          description: "Remove environment variable from a context",
          args: [
            {
              name: "vcs-type",
              description:
                "Your VCS provider, can be either 'github' or 'bitbucket'",
              suggestions: ["github", "bitbucket"],
            },
            {
              name: "org-name",
              description: "The name of your organization",
            },
            {
              name: "context-name",
              description: "The name for your context",
            },
            {
              name: "secret name",
              description: "The name of the env variable to remove",
            },
          ],
        },
        {
          name: "show",
          description: "Show a context",
          args: [
            {
              name: "vcs-type",
              description:
                "Your VCS provider, can be either 'github' or 'bitbucket'",
              suggestions: ["github", "bitbucket"],
            },
            {
              name: "org-name",
              description: "The name of your organization",
            },
            {
              name: "context-name",
              description: "The name for your context",
            },
          ],
        },
        {
          name: "store-secret",
          description: "Store environment variables",
          args: [
            {
              name: "vcs-type",
              description:
                "Your VCS provider, can be either 'github' or 'bitbucket'",
              suggestions: ["github", "bitbucket"],
            },
            {
              name: "org-name",
              description: "The name of your organization",
            },
            {
              name: "context-name",
              description: "The name for your context",
            },
            {
              name: "secret name",
              description: "The name of the env variable to store",
            },
          ],
        },
      ],
    },
    {
      name: "diagnostic",
      description: "Check the status of your CircleCI CLI",
    },
    {
      name: "follow",
      description: "Attempt to follow the project for the current git repo",
    },
    {
      name: "help",
      description: "Help about any command",
    },
    {
      name: "local",
      description: "Debug jobs on the local machine",
      subcommands: [
        {
          name: "execute",
          description: "Run a job in a container on the local machine",
        },
      ],
    },
    {
      name: "namespace",
      description: "Operate on namespaces",
      subcommands: [
        {
          name: "create",
          description: "Create a namespace",
        },
      ],
    },
    {
      name: "open",
      description: "Open the current project in the browser",
    },
    {
      name: "orb",
      description: "Operate on orbs",
      subcommands: [
        {
          name: "add-to-category",
          description: "Add an orb to a category",
          args: [
            {
              name: "namespace/orb",
              description: "The namespace and orb to add to a category",
            },
            {
              name: "category name",
              description:
                "The name of the category to add the orb to, in quotes",
            },
          ],
        },
        {
          name: "create",
          description: "Create an orb in a namespace",
          args: {
            name: "namespace/orb",
            description: "Create an orb in the specified namespace",
          },
          options: [
            {
              name: "--private",
              description:
                "Specify that this orb is for private use within your org, unlisted from the public registry",
            },
          ],
        },
        {
          name: "info",
          description: "Show metadata of an orb",
          args: {
            name: "orb",
            description: "The namespace and orb to show metadata for",
          },
        },
        {
          name: "init",
          description: "Initialize a new orb",
          args: {
            name: "path",
            description: "The /path/to/myProject-orb",
          },
          options: [
            {
              name: "--private",
              description:
                "Specify that this orb is for private use within your org, unlisted from the public registry",
            },
          ],
        },
        {
          name: "list",
          description: "List orbs",
          args: {
            name: "namespace",
            description: "The namespace used for the orb (i.e. circleci)",
          },
          options: [
            {
              name: "--private",
              description:
                "Specify that this orb is for private use within your org, unlisted from the public registry",
            },
            {
              name: "--sort",
              description: "Specify the sorting",
              args: {
                suggestions: ["builds", "projects", "orgs"],
              },
            },
            {
              name: ["-u", "--uncertified"],
              description: "Include uncertified orbs",
            },
          ],
        },
        {
          name: "list-categories",
          description: "List orb categories",
        },
        {
          name: "pack",
          description: "Pack an orb with local scripts",
          args: {
            name: "path",
            description: "The /path/to/myProject-orb",
          },
        },
        {
          name: "process",
          description:
            "Validate an orb and print its form after all pre-registration processing is complete",
          args: {
            name: "path",
            description: "The path to your orb (use '-' for STDIN)",
          },
        },
        {
          name: "publish",
          description: "Publish an orb to the registry",
          args: [
            {
              name: "path",
              description: "The /path/to/myProject-orb",
            },
            {
              name: "orb",
              description:
                "A fully-qualified reference to an orb, i.e. namespace/orb@version",
            },
          ],
        },
        {
          name: "remove-from-category",
          description: "Remove an orb from a category",
          args: [
            {
              name: "namespace/orb",
              description: "The namespace and orb to add to a category",
            },
            {
              name: "category name",
              description:
                "The name of the category to add the orb to, in quotes",
            },
          ],
        },
        {
          name: "source",
          description: "Show source code of an orb",
          args: {
            name: "orb",
            description:
              "A fully-qualified reference to an orb, i.e. namespace/orb@version",
          },
        },
        {
          name: "unlist",
          description: "Disable/enable an orb's listing in the registry",
          args: [
            {
              name: "namespace/orb",
              description:
                "The namespace and orb to unlist/list from the registry",
            },
            {
              name: "condition",
              description: "Use either true|false",
              suggestions: ["true", "false"],
            },
          ],
        },
        {
          name: "validate",
          description: "Validate an orb.yml",
          args: {
            name: "path",
            description: "The /path/to/myProject-orb",
          },
        },
      ],
    },
    {
      name: "policy",
      description: "Manage security policies",
      subcommands: [
        {
          name: "decide",
          description: "Make a decision",
          args: {
            name: "path",
            description: "Policy file or directory path",
          },
          options: [
            {
              name: "--input",
              description: "Path to input file, i.e. ./.circleci/config.yml",
              args: {
                name: "string",
              },
            },
            {
              name: "--metafile",
              description: "Path to decision metadata file",
              args: {
                name: "string",
              },
            },
            {
              name: "--owner-id",
              description: "The id of the policy's owner",
              args: {
                name: "string",
              },
            },
            {
              name: "--strict",
              description:
                "Return non-zero status code for decision resulting in HARD_FAIL",
            },
            {
              name: "--context",
              description: "Policy context for decision, default is 'config'",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "diff",
          description: "Get diff between local and remote policy bundles",
          args: {
            name: "policy_dir_path",
            description: "Policy file or directory path",
          },
          options: [
            {
              name: "--context",
              description: "Policy context for decision, default is 'config'",
              args: {
                name: "string",
              },
            },
            {
              name: "--owner-id",
              description: "The id of the policy's owner",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "eval",
          description: "Perform raw opa evaluation locally",
          args: {
            name: "policy_dir_path",
            description: "Policy file or directory path",
          },
          options: [
            {
              name: "--input",
              description: "Path to input file, i.e. ./.circleci/config.yml",
              args: {
                name: "string",
              },
            },
            {
              name: "--metafile",
              description: "Path to decision metadata file",
              args: {
                name: "string",
              },
            },
            {
              name: "--query",
              description: "Policy decision query, default is 'data'",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "fetch",
          description: "Fetch policy bundle (or a single policy)",
          args: {
            name: "policy name",
            description: "Name of policy to fetch",
          },
          options: [
            {
              name: "--context",
              description: "Policy context for decision, default is 'config'",
              args: {
                name: "string",
              },
            },
            {
              name: "--owner-id",
              description: "The id of the policy's owner",
            },
          ],
        },
        {
          name: "logs",
          description:
            "Get policy decision logs / decision log (or policy bundle) by decision ID",
          args: {
            name: "decision ID",
            description: "Decision ID to get logs for",
          },
          options: [
            {
              name: "--after",
              description: "Filter decision logs triggered AFTER this datetime",
              args: {
                name: "string",
              },
            },
            {
              name: "--before",
              description:
                "Filter decision logs triggered BEFORE this datetime",
              args: {
                name: "string",
              },
            },
            {
              name: "--branch",
              description: "Filter decision logs based on branch name",
              args: {
                name: "string",
              },
            },
            {
              name: "--context",
              description: "Policy context for decision, default is 'config'",
              args: {
                name: "string",
              },
            },
            {
              name: "--owner-id",
              description: "The id of the policy's owner",
              args: {
                name: "string",
              },
            },
            {
              name: "--out",
              description: "Specify output file name",
              args: {
                name: "string",
              },
            },
            {
              name: "--policy-bundle",
              description: "Get only the policy bundle for given decisionID",
            },
            {
              name: "--project-id",
              description: "Filter decision logs based on project-id",
              args: {
                name: "string",
              },
            },
            {
              name: "--status",
              description: "Filter decision logs based on their status",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "push",
          description: "Push policy bundle (or a single policy)",
          args: {
            name: "policy_dir_path",
            description: "Policy file or directory path",
          },
          options: [
            {
              name: "--context",
              description: "Policy context for decision, default is 'config'",
              args: {
                name: "string",
              },
            },
            {
              name: "--owner-id",
              description: "The id of the policy's owner",
              args: {
                name: "string",
              },
            },
            {
              name: "--no-prompt",
              description: "Removes the prompt",
            },
          ],
        },
        {
          name: "settings",
          description:
            "Get/set policy decision settings (To read settings: run command without any settings flags)",
          options: [
            {
              name: "--context",
              description: "Policy context for decision, default is 'config'",
            },
            {
              name: "--enabled",
              requiresSeparator: true,
              description:
                "Enable/disable policy decision evaluation in build pipeline",
              args: {
                name: "boolean",
                isOptional: true,
                suggestions: ["true", "false"],
              },
            },
            {
              name: "--owner-id",
              description: "The id of the policy's owner",
              args: {
                name: "string",
              },
            },
          ],
        },
      ],
    },
    {
      name: "runner",
      description: "Operate on runners",
      subcommands: [
        {
          name: "instance",
          description: "Operate on runner instances",
        },
        {
          name: "resource-class",
          description: "Operate on runner resource-classes",
        },
        {
          name: "token",
          description: "Operate on runner tokens",
        },
      ],
    },
    {
      name: "setup",
      description: "Setup CLI with your credentials",
    },
    {
      name: "update",
      description: "Update and switch to new CLI version",
      subcommands: [
        {
          name: "check",
          description: "Check for new CLI version",
        },
        {
          name: "install",
          description: "Install new CLI version",
        },
      ],
    },
    {
      name: "version",
      description: "Display CircleCI CLI version",
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for CircleCI",
      isPersistent: true,
    },
    {
      name: "--skip-update-check",
      description: "Skip update check before every command",
      isPersistent: true,
    },
  ],
};
export default completionSpec;
