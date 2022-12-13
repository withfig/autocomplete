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
          options: [
            {
              name: "vcs-type",
              description:
                "Your VCS provider, can be either 'github' or 'bitbucket'",
              args: [
                {
                  name: "github",
                },
                {
                  name: "bitbucket",
                },
              ],
            },
            {
              name: "org-name",
              description: "The name of your organization",
              dependsOn: ["vcs-type"],
            },
            {
              name: "context-name",
              description: "The name for your context",
              dependsOn: ["org-name"],
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the named context",
          options: [
            {
              name: "vcs-type",
              description:
                "Your VCS provider, can be either 'github' or 'bitbucket'",
              args: [
                {
                  name: "github",
                },
                {
                  name: "bitbucket",
                },
              ],
            },
            {
              name: "org-name",
              description: "The name of your organization",
              dependsOn: ["vcs-type"],
            },
            {
              name: "context-name",
              description: "The name for your context",
              dependsOn: ["org-name"],
            },
          ],
        },
        {
          name: "list",
          description: "List all contexts",
          options: [
            {
              name: "vcs-type",
              description:
                "Your VCS provider, can be either 'github' or 'bitbucket'",
              args: [
                {
                  name: "github",
                },
                {
                  name: "bitbucket",
                },
              ],
            },
            {
              name: "org-name",
              description: "The name of your organization",
              dependsOn: ["vcs-type"],
            },
          ],
        },
        {
          name: "remove-secret",
          description: "Remove environment variable from a context",
          options: [
            {
              name: "vcs-type",
              description:
                "Your VCS provider, can be either 'github' or 'bitbucket'",
              args: [
                {
                  name: "github",
                },
                {
                  name: "bitbucket",
                },
              ],
            },
            {
              name: "org-name",
              description: "The name of your organization",
              dependsOn: ["vcs-type"],
            },
            {
              name: "context-name",
              description: "The name for your context",
              dependsOn: ["org-name"],
            },
            {
              name: "secret name",
              description: "The name of the env variable to remove",
              dependsOn: ["context-name"],
            },
          ],
        },
        {
          name: "show",
          description: "Show a context",
          options: [
            {
              name: "vcs-type",
              description:
                "Your VCS provider, can be either 'github' or 'bitbucket'",
              args: [
                {
                  name: "github",
                },
                {
                  name: "bitbucket",
                },
              ],
            },
            {
              name: "org-name",
              description: "The name of your organization",
              dependsOn: ["vcs-type"],
            },
            {
              name: "context-name",
              description: "The name for your context",
              dependsOn: ["org-name"],
            },
          ],
        },
        {
          name: "store-secret",
          description: "Store environment variables",
          options: [
            {
              name: "vcs-type",
              description:
                "Your VCS provider, can be either 'github' or 'bitbucket'",
              args: [
                {
                  name: "github",
                },
                {
                  name: "bitbucket",
                },
              ],
            },
            {
              name: "org-name",
              description: "The name of your organization",
              dependsOn: ["vcs-type"],
            },
            {
              name: "context-name",
              description: "The name for your context",
              dependsOn: ["org-name"],
            },
            {
              name: "secret name",
              description: "The name of the env variable to store",
              dependsOn: ["context-name"],
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
          options: [
            {
              name: "namespace/orb",
              description: "The namespace and orb to add to a category",
              isRequired: true,
            },
            {
              name: "category name",
              description:
                "The name of the category to add the orb to, in quotes",
              dependsOn: ["namespace/orb"],
              isRequired: true,
            },
          ],
        },
        {
          name: "create",
          description: "Create an orb in a namespace",
          options: [
            {
              name: "namespace/orb",
              description: "Create an orb in the specified namespace",
              isRequired: true,
            },
            {
              name: "--private",
              description:
                "Specify that this orb is for private use within your org, unlisted from the public registry",
              dependsOn: ["namespace/orb"],
            },
          ],
        },
        {
          name: "info",
          description: "Show metadata of an orb",
          options: [
            {
              name: "orb",
              description: "The namespace and orb to show metadata for",
              isRequired: true,
            },
          ],
        },
        {
          name: "init",
          description: "Initialize a new orb",
          options: [
            {
              name: "path",
              description: "The /path/to/myProject-orb",
              isRequired: true,
            },
            {
              name: "--private",
              description:
                "Specify that this orb is for private use within your org, unlisted from the public registry",
              dependsOn: ["orb"],
            },
          ],
        },
        {
          name: "list",
          description: "List orbs",
          options: [
            {
              name: "namespace",
              description: "The namespace used for the orb (i.e. circleci)",
            },
            {
              name: "--private",
              description:
                "Specify that this orb is for private use within your org, unlisted from the public registry",
              dependsOn: ["namespace"],
            },
            {
              name: "--sort string",
              description: "Specify the sorting",
              dependsOn: ["namespace"],
              args: [
                {
                  name: "builds",
                },
                {
                  name: "projects",
                },
                {
                  name: "orgs",
                },
              ],
            },
            {
              name: ["-u ", "--uncertified"],
              description: "Include uncertified orbs",
              dependsOn: ["namespace"],
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
          options: [
            {
              name: "path",
              description: "The /path/to/myProject-orb",
              isRequired: true,
            },
          ],
        },
        {
          name: "process",
          description:
            "Validate an orb and print its form after all pre-registration processing is complete",
          options: [
            {
              name: "path",
              description: "The path to your orb (use '-' for STDIN)",
              isRequired: true,
            },
          ],
        },
        {
          name: "publish",
          description: "Publish an orb to the registry",
          options: [
            {
              name: "path",
              description: "The /path/to/myProject-orb",
              isRequired: true,
            },
            {
              name: "orb",
              description:
                "A fully-qualified reference to an orb, i.e. namespace/orb@version",
              isRequired: true,
              dependsOn: ["path"],
            },
          ],
        },
        {
          name: "remove-from-category",
          description: "Remove an orb from a category",
          options: [
            {
              name: "namespace/orb",
              description: "The namespace and orb to add to a category",
              isRequired: true,
            },
            {
              name: "category name",
              description:
                "The name of the category to add the orb to, in quotes",
              dependsOn: ["namespace/orb"],
              isRequired: true,
            },
          ],
        },
        {
          name: "source",
          description: "Show source code of an orb",
          options: [
            {
              name: "orb",
              description:
                "A fully-qualified reference to an orb, i.e. namespace/orb@version",
              isRequired: true,
            },
          ],
        },
        {
          name: "unlist",
          description: "Disable/enable an orb's listing in the registry",
          options: [
            {
              name: "namespace/orb",
              description:
                "The namespace and orb to unlist/list from the registry",
              isRequired: true,
            },
            {
              name: "condition",
              description: "Use either true|false",
              isRequired: true,
              dependsOn: ["namespace/orb"],
              args: [
                {
                  name: "true",
                },
                {
                  name: "false",
                },
              ],
            },
          ],
        },
        {
          name: "validate",
          description: "Validate an orb.yml",
          options: [
            {
              name: "path",
              description: "The /path/to/myProject-orb",
              isRequired: true,
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
    },
  ],
};
export default completionSpec;
