const sharedInstallOptions: Fig.Option[] = [
  {
    name: "--asdeps",
    description: "Install targets as non-explicit (dependency install reason)",
  },
  {
    name: "--asexplicit",
    description: "Install targets as explicit",
  },
  {
    name: "--ignore",
    description: "Skip one or more comma-separated packages during upgrade",
    args: { name: "package" },
  },
  {
    name: "--ignoregroup",
    description:
      "Skip one or more comma-separated package groups during upgrade",
    args: { name: "group" },
  },
  {
    name: "--needed",
    description: "Do not reinstall targets that are already up to date",
  },
  {
    name: "--overwrite",
    description: "Bypass file conflict checks for matching files",
    args: { name: "glob" },
  },
  {
    name: "--downloadonly",
    description: "Download targets without installing or upgrading anything",
  },
];

const completionSpec: Fig.Spec = {
  name: "pacman",
  description: "Arch Linux package manager utility",
  subcommands: [
    {
      name: ["-S", "--sync"],
      description:
        "Install packages from the repositories, or sync the local databases",
      args: { name: "package", isVariadic: true, isOptional: true },
      options: [
        {
          name: ["-c", "--clean"],
          description:
            "Remove uninstalled packages from cache (twice: all cache)",
        },
        {
          name: ["-g", "--groups"],
          description: "List members of the given package groups",
        },
        {
          name: ["-i", "--info"],
          description: "Show information for the given packages",
        },
        {
          name: ["-l", "--list"],
          description: "List all packages in the given repositories",
        },
        {
          name: ["-s", "--search"],
          description:
            "Search the sync databases for matching names or descriptions",
          args: { name: "regexp" },
        },
        {
          name: ["-u", "--sysupgrade"],
          description:
            "Upgrade all out-of-date packages (twice: allow downgrades)",
        },
        {
          name: ["-y", "--refresh"],
          description: "Download fresh package databases from the servers",
        },
        ...sharedInstallOptions,
      ],
    },
    {
      name: ["-Q", "--query"],
      description: "Query the local package database",
      args: { name: "package", isVariadic: true, isOptional: true },
      options: [
        {
          name: ["-d", "--deps"],
          description: "List packages installed as dependencies",
        },
        {
          name: ["-e", "--explicit"],
          description: "List packages explicitly installed",
        },
        {
          name: ["-g", "--groups"],
          description: "Show members of the given groups",
        },
        {
          name: ["-i", "--info"],
          description: "Show information for the given packages",
        },
        {
          name: ["-k", "--check"],
          description: "Check that files owned by the given packages exist",
        },
        {
          name: ["-l", "--list"],
          description: "List files owned by the given packages",
        },
        {
          name: ["-m", "--foreign"],
          description: "List packages not found in the sync databases",
        },
        {
          name: ["-n", "--native"],
          description: "List packages found in the sync databases",
        },
        {
          name: ["-o", "--owns"],
          description: "Search for the package that owns the given file",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: ["-p", "--file"],
          description: "Query a package file instead of the local database",
        },
        {
          name: ["-q", "--quiet"],
          description: "Show less information for query and search",
        },
        {
          name: ["-s", "--search"],
          description:
            "Search the local database for matching names or descriptions",
          args: { name: "regexp" },
        },
        {
          name: ["-t", "--unrequired"],
          description:
            "List packages no longer required by any installed package",
        },
        {
          name: ["-u", "--upgrades"],
          description: "List packages that are out-of-date on the local system",
        },
      ],
    },
    {
      name: ["-R", "--remove"],
      description: "Remove packages from the system",
      args: { name: "package", isVariadic: true },
      options: [
        {
          name: ["-c", "--cascade"],
          description: "Also remove all packages that depend on the targets",
        },
        {
          name: ["-n", "--nosave"],
          description:
            "Ignore backup files and remove them as .pacsave is not created",
        },
        {
          name: ["-s", "--recursive"],
          description:
            "Also remove dependencies no longer needed by the targets",
        },
        {
          name: ["-u", "--unneeded"],
          description: "Remove targets not required by any other package",
        },
      ],
    },
    {
      name: ["-U", "--upgrade"],
      description: "Install or upgrade packages from local files or URLs",
      args: {
        name: "package file",
        isVariadic: true,
        template: "filepaths",
      },
      options: sharedInstallOptions,
    },
    {
      name: ["-F", "--files"],
      description: "Query the files database for package file ownership",
      args: { name: "package or file", isVariadic: true, isOptional: true },
      options: [
        {
          name: ["-y", "--refresh"],
          description: "Download fresh files databases from the servers",
        },
        {
          name: ["-l", "--list"],
          description: "List the files owned by the queried package",
        },
        {
          name: ["-x", "--regex"],
          description: "Interpret the query arguments as regular expressions",
        },
        {
          name: ["-q", "--quiet"],
          description: "Show less information",
        },
        {
          name: "--machinereadable",
          description: "Output NUL-delimited matches for scripts",
        },
      ],
    },
    {
      name: ["-D", "--database"],
      description: "Modify the package database attributes of packages",
      args: { name: "package", isVariadic: true },
      options: [
        {
          name: "--asdeps",
          description: "Mark packages as dependency install reason",
        },
        {
          name: "--asexplicit",
          description: "Mark packages as explicitly installed",
        },
        {
          name: ["-k", "--check"],
          description: "Check the local database for internal consistency",
        },
      ],
    },
    {
      name: ["-T", "--deptest"],
      description: "Check dependencies; print targets that are unsatisfied",
      args: { name: "dependency", isVariadic: true },
    },
  ],
  options: [
    {
      name: ["-V", "--version"],
      description: "Display version and exit",
    },
    {
      name: ["-h", "--help"],
      description: "Show syntax for the given operation",
    },
    {
      name: ["-b", "--dbpath"],
      description: "Use an alternative database location",
      requiresSeparator: true,
      args: { name: "path", template: "folders" },
    },
    {
      name: ["-r", "--root"],
      description: "Use an alternative installation root",
      requiresSeparator: true,
      args: { name: "path", template: "folders" },
    },
    {
      name: "--config",
      description: "Use an alternate configuration file",
      requiresSeparator: true,
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "--cachedir",
      description: "Use an alternative package cache location",
      requiresSeparator: true,
      args: { name: "dir", template: "folders" },
    },
    {
      name: "--sysroot",
      description: "Operate on a mounted guest system instead of the host root",
      requiresSeparator: true,
      args: { name: "dir", template: "folders" },
    },
    {
      name: "--logfile",
      description: "Use an alternate log file",
      requiresSeparator: true,
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "--gpgdir",
      description: "Use an alternative GnuPG home directory",
      requiresSeparator: true,
      args: { name: "dir", template: "folders" },
    },
    {
      name: "--hookdir",
      description: "Use an alternative hook file directory",
      requiresSeparator: true,
      args: { name: "dir", template: "folders" },
    },
    {
      name: "--arch",
      description: "Use an alternate architecture",
      requiresSeparator: true,
      args: { name: "arch" },
    },
    {
      name: "--color",
      description: "Control when to colorize output",
      requiresSeparator: true,
      args: { name: "when", suggestions: ["always", "never", "auto"] },
    },
    {
      name: "--noconfirm",
      description: "Bypass all confirmation dialogs",
    },
    {
      name: "--confirm",
      description: "Cancel a previous --noconfirm",
    },
    {
      name: "--debug",
      description: "Display debug messages",
    },
    {
      name: "--verbose",
      description: "Display paths of Root, Conf File, DB Path and Cache Dirs",
    },
    {
      name: "--disable-download-timeout",
      description: "Use relaxed timeouts for downloads",
    },
    {
      name: "--disable-sandbox",
      description: "Disable the filesystem/sandbox used when downloading",
    },
    {
      name: "--assume-installed",
      description: "Treat the given package=version as installed",
      args: { name: "package=version" },
    },
    {
      name: "--dbonly",
      description: "Only modify database entries, not package files",
    },
    {
      name: ["-d", "--nodeps"],
      description: "Skip dependency version checks (twice: skip all checks)",
    },
    {
      name: ["-p", "--print"],
      description: "Print the targets instead of performing the operation",
    },
  ],
};

export default completionSpec;
