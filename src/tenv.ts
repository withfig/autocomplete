const versionArg: Fig.Arg = {
  name: "version",
  description:
    "Exact Semver 2.0.0 version, constraint expression, latest, latest-stable, latest-pre, latest-allowed, or min-required",
  isOptional: true,
};

const toolSharedFlags: Fig.Option[] = [
  {
    name: ["-a", "--arch"],
    description: "Specify arch for binaries downloading",
    args: { name: "arch", default: "amd64" },
  },
  {
    name: ["-f", "--force-remote"],
    description: "Force search on versions available at remote url",
  },
  {
    name: ["-k", "--key-file"],
    description:
      "Local path to PGP public key file (replace check against remote one)",
    args: {
      name: "key file",
      description: "Path to PGP public key file",
      template: "filepaths",
    },
  },
  {
    name: ["-n", "--no-install"],
    description: "Disable installation of missing version",
  },
  {
    name: ["-c", "--remote-conf"],
    description: "Path to remote configuration file (advanced settings)",
    args: {
      name: "config",
      description: "Path to remote configuration file",
      template: "filepaths",
    },
  },
  {
    name: ["-u", "--remote-url"],
    description: "Remote url to install from",
    args: { name: "url", description: "Remote url to install from" },
  },
];

const globalFlags: Fig.Option[] = [
  {
    name: ["-q", "--quiet"],
    description: "No unnecessary output (and no log)",
  },
  {
    name: ["-r", "--root-path"],
    description:
      "Local path to install versions of OpenTofu, Terraform, Terragrunt, Terramate and Atmos",
    args: { name: "path", description: "Local path to install versions" },
  },
  {
    name: ["-v", "--verbose"],
    description: "Verbose output (and set log level to Trace)",
  },
];

const toolSubcommands = (
  toolDescription: string,
  extraFlags: Fig.Option[]
): Fig.Subcommand[] => [
  {
    name: "install",
    description: `Install a version of ${toolDescription}`,
    args: versionArg,
    options: [
      {
        name: ["-t", "--github-token"],
        description: "GitHub token (increases GitHub REST API rate limits)",
        args: { name: "token", description: "GitHub token" },
      },
      ...toolSharedFlags,
      ...extraFlags,
    ],
  },
  {
    name: "use",
    description: `Switch the default ${toolDescription} version to use`,
    args: versionArg,
    options: [
      {
        name: ["-t", "--github-token"],
        description: "GitHub token (increases GitHub REST API rate limits)",
        args: { name: "token", description: "GitHub token" },
      },
      ...toolSharedFlags,
      {
        name: ["-w", "--working-dir"],
        description: "Create version file in working directory",
      },
      ...extraFlags,
    ],
  },
  {
    name: "detect",
    description: `Display ${toolDescription} current version`,
    options: [...toolSharedFlags, ...extraFlags],
  },
  {
    name: "list",
    description: "List installed versions",
    options: [
      {
        name: ["-d", "--descending"],
        description: "Sort in descending order",
      },
    ],
  },
  {
    name: "list-remote",
    description: "List installable versions available on remote",
    options: [
      {
        name: ["-d", "--descending"],
        description: "Sort in descending order",
      },
      {
        name: ["-s", "--stable"],
        description: "Display only stable version",
      },
    ],
  },
  {
    name: "uninstall",
    description: "Uninstall a specific version",
    args: versionArg,
  },
  {
    name: "reset",
    description: "Reset default version (and constraint)",
  },
  {
    name: "constraint",
    description: "Set or reset a default constraint expression",
    args: {
      name: "expression",
      description: 'Version constraint expression (e.g. "<= 1.5.7")',
      isOptional: true,
    },
  },
];

const toolSpec = (name: string, description: string): Fig.Subcommand => ({
  name,
  description,
  subcommands: toolSubcommands(description, []),
});

const completionSpec: Fig.Spec = {
  name: "tenv",
  description:
    "OpenTofu, Terraform, Terragrunt, Terramate and Atmos version manager",
  subcommands: [
    toolSpec("tofu", "OpenTofu"),
    toolSpec("tf", "Terraform"),
    toolSpec("tg", "Terragrunt"),
    toolSpec("tm", "Terramate"),
    toolSpec("atmos", "Atmos"),
    {
      name: "version",
      description: "Display tenv current version",
    },
    {
      name: "update-path",
      description:
        "Display PATH updated with tenv directory location first (writes to GITHUB_PATH when GITHUB_ACTIONS is set)",
    },
    {
      name: "completion",
      description: "Generate autocompletion script for a shell",
      args: {
        name: "shell",
        suggestions: ["bash", "fish", "powershell", "zsh"],
      },
    },
    {
      name: "help",
      description: "Help about any command",
      args: {
        name: "command",
        description: "Command to show help for",
        isOptional: true,
      },
    },
  ],
  options: globalFlags,
};

export default completionSpec;
