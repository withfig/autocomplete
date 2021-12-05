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
        },
        {
          name: "delete",
          description: "Delete the named context",
        },
        {
          name: "list",
          description: "List all contexts",
        },
        {
          name: "remove-secret",
          description: "Remove environment variable from a context",
        },
        {
          name: "show",
          description: "Show a context",
        },
        {
          name: "store-secret",
          description: "Store environment variables",
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
        },
        {
          name: "create",
          description: "Create an orb in a namespace",
        },
        {
          name: "info",
          description: "Show metadata of an orb",
        },
        {
          name: "init",
          description: "Initialize a new orb",
        },
        {
          name: "list",
          description: "List orbs",
        },
        {
          name: "list-categories",
          description: "List orb categories",
        },
        {
          name: "pack",
          description: "Pack an orb with local scripts",
        },
        {
          name: "process",
          description: "Validate an orb and print its form",
        },
        {
          name: "publish",
          description: "Publish an orb to the registry",
        },
        {
          name: "remove-from-category",
          description: "Remove an orb from a category",
        },
        {
          name: "source",
          description: "Show source code of an orb",
        },
        {
          name: "unlist",
          description: "Disable/enable an orb's listing in the registry",
        },
        {
          name: "validate",
          description: "Validate an orb.yml",
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
    },
    {
      name: "--skip-update-check",
      description: "Skip update check before every command",
    },
  ],
};
export default completionSpec;
