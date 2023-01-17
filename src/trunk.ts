const checkAndFormatSharedOptions: Fig.Option[] = [
  {
    name: ["-a", "--all"],
    description: "Run on all files instead of only changed files",
  },
  {
    name: ["-n", "--no-fix"],
    description: "Don't automatically apply fixes",
  },
  {
    name: "--include-existing-autofixes",
    description: "Show autofixes for existing issues",
  },
  {
    name: "--force",
    description: "Run on all files, even if ignored",
  },
  {
    name: "--diff",
    description: "Diff printing mode",
    args: {
      name: "mode",
      suggestions: ["none", "compact", "full"],
    },
  },
  {
    name: "--filter",
    description:
      "Filter the set of executed linters and/or the returned codes; use a leading '-' to exclude a linter or code",
    args: {
      name: "linter or code",
      isVariadic: true,
    },
  },
  {
    name: "--exclude",
    description: "Shorthand for an inverse --filter",
    args: {
      name: "linter or code",
      isVariadic: true,
    },
  },
  {
    name: ["-j", "--jobs"],
    description:
      "Number of concurrent jobs (does not affect background linting)",
    args: {
      name: "number",
    },
  },
  {
    name: "--sample",
    description:
      "Run each linter on N files (implies --no-fix and --all if no paths are given)",
    args: [
      {
        name: "N",
      },
      {
        name: "paths",
        isOptional: true,
        isVariadic: true,
        template: "filepaths",
      },
    ],
  },
  {
    name: "--upstream",
    description:
      "Upstream branch used to compute changed files (autodetected by default)",
    args: {
      name: "branch",
    },
  },
];

const completionSpec: Fig.Spec = {
  name: "trunk",
  description:
    "An all-in-one tool for scalably checking, formatting, and monitoring code",
  subcommands: [
    {
      name: "init",
      description: "Setup trunk in this repo",
      options: [
        {
          name: "--lock",
          description: "Add sha256s to trunk.yaml for additional verification",
        },
        {
          name: "--check-sample",
          description: "Run `trunk check sample` without prompting",
          exclusiveOn: ["--nocheck-sample"],
        },
        {
          name: "--nocheck-sample",
          description: "Do not run `trunk check sample` post-init",
          exclusiveOn: ["--check-sample"],
        },
        {
          name: "--force",
          description: "Overwrite existing trunk.yaml",
        },
      ],
    },
    {
      name: "check",
      description: "Universal code checker",
      options: [
        {
          name: ["-y", "--fix"],
          description: "Automatically apply all fixes without prompting",
        },
        ...checkAndFormatSharedOptions,
      ],
      subcommands: [
        {
          name: "upgrade",
          description: "Upgrade all linters to latest versions",
          args: {
            name: "linters",
            description:
              "Linter(s) to upgrade (upgrades all if none specified)",
            isVariadic: true,
          },
        },
        {
          name: "download",
          description: "Download all files needed for trunk to work offline",
          args: {
            name: "tools",
            description:
              "Tool(s) to download (if omitted, downloads all configured tools)",
            isVariadic: true,
          },
        },
        {
          name: "enable",
          description: "Enable linters",
          args: {
            name: "linters",
            description: "Linter(s) to enable",
            isVariadic: true,
          },
        },
        {
          name: "disable",
          description: "Disable linters",
          args: {
            name: "linters",
            description: "Linter(s) to disable",
            isVariadic: true,
          },
        },
      ],
      args: {
        name: "paths",
        isVariadic: true,
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "fmt",
      description: "Universal code formatter",
      options: checkAndFormatSharedOptions,
      args: {
        name: "paths",
        isVariadic: true,
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "upgrade",
      description: "Upgrade trunk to the latest release",
    },
    {
      name: "git-hooks",
      description: "Git hooks",
      subcommands: [
        {
          name: "install",
          description: "Install trunk git hooks",
        },
      ],
    },
    {
      name: "cache",
      description: "Cache management",
      subcommands: [
        {
          name: "clean",
          description: "Clean the cache",
          options: [
            {
              name: "--all",
              description: "Delete all files (including results cache)",
            },
            {
              name: ["-n", "--dry-run"],
              description:
                "Print all directories that would be cleaned out without running deletion",
            },
          ],
        },
      ],
    },
    {
      name: "print-config",
      description: "Print the resolved trunk config",
    },
    {
      name: "daemon",
      description: "Daemon management",
      subcommands: [
        {
          name: "launch",
          description: "Start the trunk daemon if its not already running",
        },
        {
          name: "shutdown",
          description: "Shutdown the trunk daemon if it is running",
        },
        {
          name: "status",
          description: "Report daemon status",
        },
      ],
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Usage information",
      isPersistent: true,
    },
    {
      name: "--version",
      description: "The version",
      isPersistent: true,
    },
    {
      name: ["-m", "--monitor"],
      description:
        "Enable the trunk daemon to monitor file changes in your repo",
      isPersistent: true,
      args: {
        name: "value",
        suggestions: ["true", "false"],
      },
    },
    {
      name: "--ci",
      description: "Run in continuous integration mode",
      isPersistent: true,
    },
    {
      name: ["-o", "--output"],
      description: "Output format",
      isPersistent: true,
      args: {
        name: "format",
        suggestions: ["text", "json"],
      },
    },
    {
      name: "--no-progress",
      description: "Don't show progress updates",
      isPersistent: true,
      exclusiveOn: ["--ci-progress"],
    },
    {
      name: "--ci-progress",
      description:
        "Show updates every 30 seconds without clearing terminal screen (implicit with --ci)",
      isPersistent: true,
      exclusiveOn: ["--no-progress"],
    },
    {
      name: "--action_timeout",
      description:
        "How long actions (downloads, lint runs, etc.) have to time out, with units (s, ms, etc)",
      isPersistent: true,
      args: {
        name: "timeout",
      },
    },
    {
      name: ["-v", "--verbose"],
      description: "Output details about what's happening under the hood",
      isPersistent: true,
    },
  ],
};
export default completionSpec;
