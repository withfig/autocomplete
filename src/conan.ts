const formatArg = { name: "format", isOptional: true };

const profileArg = { name: "profile", template: "filepaths" };

const remoteArg = { name: "remote" };

const commonOptions: Fig.Option[] = [
  {
    name: "-f",
    description: "Use the specified output format",
    args: formatArg,
  },
  {
    name: "--out-file",
    description: "Write the output of the command to the specified file",
    args: { name: "out_file", template: "filepaths" },
  },
  { name: "-v", description: "Verbosity level of the output" },
  {
    name: "-cc",
    description: "Core configuration, over the global.conf",
    args: { name: "core_conf" },
  },
];

const profileSubcommands: Fig.Subcommand[] = [
  {
    name: "detect",
    description: "Generate a profile using auto-detected values",
  },
  { name: "list", description: "List all profiles in the cache" },
  {
    name: "path",
    description: "Show the path where the specified profile is located",
    args: { name: "profile", template: "filepaths" },
  },
  { name: "show", description: "Show the values for the specified profile" },
];

const remoteSubcommands: Fig.Subcommand[] = [
  {
    name: "add",
    description: "Add a remote",
    args: [{ name: "remote" }, { name: "url" }],
    options: [
      {
        name: ["--insecure", "-i"],
        description: "Allow insecure server connections when using SSL",
      },
    ],
  },
  { name: "auth", description: "Authenticate in the defined remotes" },
  { name: "disable", description: "Disable/removes a remote", args: remoteArg },
  {
    name: "enable",
    description: "Enable a previously disabled remote",
    args: remoteArg,
  },
  { name: "list", description: "List the remotes and its URLs" },
  {
    name: "list-users",
    description: "List the users authenticated on a remote",
  },
  { name: "login", description: "Login into the specified remote" },
  { name: "logout", description: "Logout from the specified remote" },
  {
    name: "remove",
    description: "Remove an existing remote",
    args: remoteArg,
  },
  {
    name: "rename",
    description: "Rename an existing remote",
    args: [{ name: "remote" }, { name: "new_name" }],
  },
  {
    name: "set-user",
    description: "Associate a user to a remote",
    args: [{ name: "remote" }, { name: "user" }],
  },
  { name: "update", description: "Update an existing remote", args: remoteArg },
];

const configSubcommands: Fig.Subcommand[] = [
  {
    name: "clean",
    description: "Clean the configuration files in the Conan home folder",
  },
  { name: "home", description: "Show the Conan home folder" },
  {
    name: "install",
    description: "Install a full configuration from a local or remote zip file",
    args: { name: "url_or_path" },
  },
  {
    name: "install-pkg",
    description: "Install the configuration files from a Conan package",
    args: { name: "require" },
  },
  { name: "list", description: "Show all configuration keys and values" },
  {
    name: "show",
    description: "Show the value of the specified configuration key",
    args: { name: "key" },
  },
];

const completionSpec: Fig.Spec = {
  name: "conan",
  description: "Open source package manager for C and C++ development",
  subcommands: [
    {
      name: "install",
      description:
        "Install the requirements specified in a recipe (conanfile.py or conanfile.txt)",
      args: { name: "path", template: "filepaths" },
      options: [
        ...commonOptions,
        {
          name: "-r",
          description: "Install dependencies only from that remote",
          args: remoteArg,
        },
        {
          name: "-nr",
          description: "Do not use remote, resolve exclusively in the cache",
        },
        {
          name: "-u",
          description:
            "Update dependencies, checking remotes for newer revisions",
        },
        {
          name: "-pr",
          description: "Apply the specified profile (host) for the consumer",
          args: profileArg,
        },
        {
          name: "-pr:b",
          description: "Host profile specified for the build context",
          args: profileArg,
        },
        {
          name: "-pr:h",
          description: "Profile for the host context",
          args: profileArg,
        },
        {
          name: "-pr:a",
          description: "Apply the specified profile to both contexts",
          args: profileArg,
        },
        {
          name: "-o",
          description: "Apply the specified option (host)",
          args: { name: "options" },
        },
        {
          name: "-s",
          description: "Apply the specified setting (host)",
          args: { name: "settings" },
        },
        {
          name: "-b",
          description:
            "Build missing binaries from source (missing by default)",
          args: { name: "build", isOptional: true },
        },
        {
          name: "-l",
          description: "Path to a lockfile",
          args: { name: "lockfile", template: "filepaths" },
        },
        {
          name: "--requires",
          description:
            "Directly install the specified requires instead of a recipe",
          args: { name: "requires" },
        },
        {
          name: "--build-require",
          description: "The provided require is a build require",
        },
      ],
    },
    {
      name: "create",
      description: "Create a package",
      args: { name: "path", template: "filepaths" },
      options: [
        ...commonOptions,
        {
          name: "--name",
          description: "Provide a package name",
          args: { name: "name" },
        },
        {
          name: "--version",
          description: "Provide a package version",
          args: { name: "version" },
        },
        {
          name: "--user",
          description: "Provide a user name",
          args: { name: "user" },
        },
        {
          name: "--channel",
          description: "Provide a channel",
          args: { name: "channel" },
        },
        {
          name: "-b",
          description: "Build missing binaries from source",
          args: { name: "build", isOptional: true },
        },
        {
          name: "-r",
          description:
            "Look for the in-source dependency in the specified remote",
          args: remoteArg,
        },
        {
          name: "-pr",
          description: "Apply the specified profile (host) for the consumer",
          args: profileArg,
        },
        {
          name: "-o",
          description: "Apply the specified option (host)",
          args: { name: "options" },
        },
        {
          name: "-s",
          description: "Apply the specified setting (host)",
          args: { name: "settings" },
        },
        {
          name: "-tf",
          description:
            "Using this folder as test_folder instead of test_package",
          args: { name: "test_folder", template: "folders" },
        },
      ],
    },
    {
      name: "build",
      description: "Install dependencies and call the build() method",
      args: { name: "path", template: "filepaths" },
      options: commonOptions,
    },
    {
      name: "test",
      description: "Test a package from a test_package folder",
      args: { name: "path", template: "filepaths" },
      options: commonOptions,
    },
    {
      name: "export",
      description: "Export a recipe to the Conan package cache",
      args: { name: "path", template: "filepaths" },
      options: commonOptions,
    },
    {
      name: "export-pkg",
      description: "Create a package directly from pre-compiled binaries",
      args: { name: "path", template: "filepaths" },
      options: commonOptions,
    },
    {
      name: "source",
      description: "Call the source() method",
      args: { name: "path", template: "filepaths" },
      options: commonOptions,
    },
    {
      name: "download",
      description:
        "Download (without installing) a single conan package from a remote server",
      args: { name: "pattern" },
      options: [
        ...commonOptions,
        {
          name: "-r",
          description: "Download from the specified remote",
          args: remoteArg,
        },
      ],
    },
    {
      name: "upload",
      description: "Upload packages to a remote",
      args: { name: "pattern" },
      options: [
        ...commonOptions,
        {
          name: "-r",
          description: "Upload to the specified remote",
          args: remoteArg,
        },
      ],
    },
    {
      name: "list",
      description:
        "List existing recipes, revisions, or packages in the cache (by default) or the remotes",
      args: {
        name: "pattern",
        description: "A pattern in the form 'name/version@user/channel#rrev'",
      },
      options: [
        ...commonOptions,
        {
          name: "-p",
          description: "List only matching packages based on the package query",
          args: { name: "package_query" },
        },
        {
          name: "-r",
          description: "List from the specified remote",
          args: remoteArg,
        },
        { name: "-c", description: "Search in local cache" },
      ],
    },
    {
      name: "search",
      description:
        "Search for package recipes in all the remotes (by default), or a remote",
      args: { name: "pattern" },
      options: [
        ...commonOptions,
        {
          name: "-r",
          description: "Search in the specified remote",
          args: remoteArg,
        },
      ],
    },
    {
      name: "remove",
      description: "Remove recipes or packages from local cache or a remote",
      args: { name: "pattern" },
      options: [
        ...commonOptions,
        {
          name: "-r",
          description: "Remove from the specified remote",
          args: remoteArg,
        },
        {
          name: "-c",
          description: "Confirm the removal of packages without asking",
        },
      ],
    },
    {
      name: "profile",
      description: "Manage profiles",
      subcommands: profileSubcommands,
    },
    {
      name: "remote",
      description: "Manage the remote list and the users authenticated on them",
      subcommands: remoteSubcommands,
    },
    {
      name: "config",
      description: "Manage the Conan configuration in the Conan home",
      subcommands: configSubcommands,
    },
    {
      name: "lock",
      description: "Create or manage lockfiles",
      args: { name: "path", template: "filepaths", isOptional: true },
    },
    {
      name: "graph",
      description:
        "Compute a dependency graph, without installing or building the binaries",
      args: { name: "path", template: "filepaths", isOptional: true },
      options: commonOptions,
    },
    {
      name: "inspect",
      description: "Inspect a conanfile.py to return its public fields",
      args: { name: "path", template: "filepaths" },
      options: commonOptions,
    },
    {
      name: "editable",
      description: "Allow working with a package that resides in user folder",
    },
    {
      name: "workspace",
      description:
        "Manage Conan workspaces (group of packages in editable mode)",
    },
    {
      name: "pkglist",
      description: "Several operations over package lists",
    },
    {
      name: "require",
      description: "Adds/removes requirements to/from your local conanfile",
      args: { name: "path", template: "filepaths", isOptional: true },
    },
    {
      name: "run",
      description:
        "Run a command given a set of requirements from a recipe or from command line",
      args: { name: "command", isVariadic: true },
    },
    {
      name: "cache",
      description:
        "Perform file operations in the local cache (of recipes and/or packages)",
    },
    {
      name: "version",
      description: "Give information about the Conan client version",
    },
    {
      name: "new",
      description:
        "Create a new example recipe and source files from a template",
      args: { name: "template" },
    },
    { name: "audit", description: "Find vulnerabilities in your dependencies" },
    {
      name: "report",
      description: "Gets information about the recipe and its sources",
    },
  ],
};

export default completionSpec;
