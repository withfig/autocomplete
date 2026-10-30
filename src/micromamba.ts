const globalOptions: Fig.Option[] = [
  { name: "-n", description: "Name of the target prefix", args: { name: "name" } },
  {
    name: "-p",
    description: "Path to the target prefix",
    args: { name: "prefix", template: "folders" },
  },
  {
    name: "-r",
    description: "Path to the root prefix",
    args: { name: "root_prefix", template: "folders" },
  },
  {
    name: "-v",
    description: "Set verbosity (higher verbosity with multiple -v, e.g. -vvv)",
  },
  { name: "-q", description: "Set quiet mode (print less output)" },
  {
    name: "-y",
    description: "Automatically answer yes on prompted questions",
  },
  { name: "--json", description: "Report all output as json" },
  { name: "--offline", description: "Force use cached repodata" },
  { name: "--dry-run", description: "Only display what would have been done" },
  {
    name: "--rc-file",
    description: "Paths to the configuration files to use",
    args: { name: "file", template: "filepaths", isVariadic: true },
  },
  { name: "--no-rc", description: "Disable the use of configuration files" },
  {
    name: "--no-env",
    description: "Disable the use of environment variables",
  },
];

const packageArg = {
  name: "packages",
  description: "Packages to install or manage in the target environment",
  isVariadic: true,
};

const completionSpec: Fig.Spec = {
  name: "micromamba",
  description: "The fast cross-platform package manager (lightweight conda)",
  args: { name: "subcommand", isOptional: true },
  options: [
    { name: ["-h", "--help"], description: "Print this help message and exit" },
    { name: "--version", description: "Display program version information and exit" },
    ...globalOptions,
  ],
  subcommands: [
    {
      name: "create",
      description: "Create new environment",
      args: packageArg,
      options: globalOptions,
    },
    {
      name: "install",
      description: "Install packages in active environment",
      args: packageArg,
      options: globalOptions,
    },
    {
      name: "update",
      description: "Update packages in active environment",
      args: packageArg,
      options: globalOptions,
    },
    {
      name: "repoquery",
      description:
        "Find and analyze packages in active environment or channels",
      args: packageArg,
      options: globalOptions,
    },
    {
      name: "search",
      description:
        "Find packages in active environment or channels (equivalent to `repoquery search`)",
      args: packageArg,
      options: globalOptions,
    },
    {
      name: ["remove", "uninstall"],
      description: "Remove packages from active environment",
      args: packageArg,
      options: globalOptions,
    },
    {
      name: "list",
      description: "List packages in active environment",
      options: globalOptions,
    },
    {
      name: "package",
      description: "Extract a package or bundle files into an archive",
    },
    {
      name: "clean",
      description: "Clean package cache",
      options: globalOptions,
    },
    {
      name: "config",
      description: "Configuration of micromamba",
      options: globalOptions,
      subcommands: [
        { name: "list", description: "List configuration values" },
        { name: "sources", description: "Show configuration sources" },
        {
          name: "describe",
          description: "Describe given configuration parameters",
        },
        {
          name: "prepend",
          description: "Add one configuration value to the beginning of a list key",
        },
        {
          name: "append",
          description: "Add one configuration value to the end of a list key",
        },
        {
          name: "remove-key",
          description: "Remove a configuration key and its values",
        },
        {
          name: "remove",
          description: "Remove a configuration value from a list key",
        },
        { name: "set", description: "Set a configuration value" },
        { name: "get", description: "Get a configuration value" },
      ],
    },
    { name: "info", description: "Information about micromamba" },
    {
      name: "constructor",
      description:
        "Commands to support using micromamba in constructor",
    },
    {
      name: "env",
      description: "Manage environments",
      options: globalOptions,
      subcommands: [
        { name: "list", description: "List known environments" },
        {
          name: "create",
          description:
            "Create new environment (pre-commit.com compatibility alias for 'micromamba create')",
        },
        { name: "export", description: "Export environment" },
        { name: "remove", description: "Remove an environment" },
        { name: "update", description: "Update an environment" },
      ],
    },
    {
      name: "activate",
      description: "Activate an environment",
      args: { name: "name" },
    },
    {
      name: "deactivate",
      description: "Deactivate the active environment",
    },
    {
      name: "run",
      description: "Run an executable in an environment",
      args: { name: "command", isVariadic: true },
    },
    {
      name: "ps",
      description: "Show, inspect or kill running processes",
    },
    {
      name: "auth",
      description: "Login or logout of a given host",
      args: { name: "host", isOptional: true },
    },
    {
      name: "shell",
      description: "Generate shell init scripts",
    },
  ],
};

export default completionSpec;
