const completionSpec: Fig.Spec = {
  name: "dnf",
  description:
    "DNF: the RPM-based package manager for Fedora and related distributions",
  subcommands: [
    {
      name: "install",
      description:
        "Install the given packages and their dependencies (also local RPM files, URLs, groups, modules)",
      args: { name: "package spec", isVariadic: true },
    },
    {
      name: "upgrade",
      description:
        "Update packages to the newest available and resolvable version",
      args: { name: "package spec", isVariadic: true, isOptional: true },
    },
    {
      name: "remove",
      description:
        "Remove the given packages along with anything that depends on them",
      args: { name: "package spec", isVariadic: true },
    },
    {
      name: "autoremove",
      description:
        "Remove packages installed as dependencies that are no longer needed",
    },
    {
      name: "search",
      description: "Search package names and summaries for keywords",
      args: { name: "keyword", isVariadic: true },
    },
    {
      name: "info",
      description: "Show description and summary of packages",
      args: { name: "package spec", isVariadic: true, isOptional: true },
    },
    {
      name: "list",
      description: "List packages by relation to the system",
      args: {
        name: "spec",
        isVariadic: true,
        isOptional: true,
        description:
          "Optionally prefixed with installed, available, extras, obsoletes, upgrades, recent, or autoremove",
      },
    },
    {
      name: "clean",
      description: "Remove cached data",
      args: {
        name: "target",
        isVariadic: true,
        suggestions: ["all", "metadata", "packages", "dbcache", "expire-cache"],
      },
    },
    {
      name: "makecache",
      description: "Download and cache metadata for enabled repositories",
    },
    {
      name: "repolist",
      description: "List software repositories",
      args: {
        name: "filter",
        isOptional: true,
        suggestions: ["enabled", "disabled", "all"],
      },
    },
    {
      name: "check-update",
      description:
        "Check for available updates; exits 100 if updates exist, 0 otherwise",
    },
    {
      name: "downgrade",
      description:
        "Downgrade packages to the highest installable lower version",
      args: { name: "package spec", isVariadic: true },
    },
    {
      name: "reinstall",
      description: "Reinstall the given packages",
      args: { name: "package spec", isVariadic: true },
    },
    {
      name: "provides",
      description: "Find packages providing the given capability or file",
      args: { name: "capability or file", isVariadic: true },
    },
    {
      name: "group",
      description: "Manage package groups",
      subcommands: [
        {
          name: "summary",
          description: "Show an overview of groups",
        },
        {
          name: "info",
          description: "Show details of a group",
          args: { name: "group" },
        },
        {
          name: "install",
          description: "Install a group with its packages",
          args: { name: "group" },
        },
        {
          name: "remove",
          description: "Remove a group's packages",
          args: { name: "group" },
        },
        {
          name: "upgrade",
          description: "Upgrade a group's packages",
          args: { name: "group" },
        },
        {
          name: "list",
          description: "List groups",
        },
        {
          name: "mark",
          description: "Mark or unmark a group as installed",
          args: { name: "group" },
        },
      ],
    },
    {
      name: "history",
      description: "View and manipulate past transactions",
      subcommands: [
        {
          name: "list",
          description: "List transactions",
        },
        {
          name: "info",
          description: "Show details of a transaction",
          args: { name: "transaction id" },
        },
        {
          name: "undo",
          description: "Undo a transaction",
          args: { name: "transaction id" },
        },
        {
          name: "redo",
          description: "Redo a transaction",
          args: { name: "transaction id" },
        },
        {
          name: "rollback",
          description: "Undo all transactions after the given one",
          args: { name: "transaction id" },
        },
        {
          name: "replay",
          description: "Replay a stored transaction",
          args: { name: "file" },
        },
        {
          name: "store",
          description: "Store a transaction for later replay",
          args: { name: "transaction id" },
        },
      ],
    },
    {
      name: "distro-sync",
      description:
        "Upgrade or downgrade installed packages to match the repositories",
      args: { name: "package spec", isVariadic: true, isOptional: true },
    },
    {
      name: "swap",
      description:
        "Remove one spec and install another in a single transaction",
      args: [{ name: "remove spec" }, { name: "install spec" }],
    },
    {
      name: "repoquery",
      description:
        "Search the repositories for packages and display their info",
      args: { name: "package spec", isVariadic: true, isOptional: true },
    },
    {
      name: "module",
      description: "Manage modular streams (deprecated in favor of DNF5)",
      subcommands: [
        {
          name: "list",
          description: "List modules and their streams",
        },
        {
          name: "install",
          description: "Install a module stream",
          args: { name: "module spec" },
        },
        {
          name: "enable",
          description: "Enable a module stream",
          args: { name: "module spec" },
        },
        {
          name: "disable",
          description: "Disable a module stream",
          args: { name: "module spec" },
        },
        {
          name: "reset",
          description: "Reset a module to its default state",
          args: { name: "module spec" },
        },
      ],
    },
    {
      name: "config-manager",
      description:
        "Persistently enable or disable repositories (dnf-plugins-core)",
      options: [
        {
          name: "--set-enabled",
          description: "Enable the given repositories",
          args: { name: "repoid", isVariadic: true },
        },
        {
          name: "--set-disabled",
          description: "Disable the given repositories",
          args: { name: "repoid", isVariadic: true },
        },
      ],
    },
    {
      name: "check",
      description: "Check the local rpm database for problems",
      args: {
        name: "check",
        isVariadic: true,
        isOptional: true,
        suggestions: ["dependencies", "duplicates", "obsoleted", "provides"],
      },
    },
  ],
  options: [
    {
      name: ["-y", "--assumeyes"],
      description: "Answer yes automatically to all questions",
    },
    {
      name: "--assumeno",
      description: "Answer no automatically to all questions",
    },
    {
      name: ["-q", "--quiet"],
      description: "Show only relevant output, suppress status messages",
    },
    {
      name: ["-v", "--verbose"],
      description: "Show debug messages",
    },
    {
      name: "--setopt",
      description: "Override a configuration option for this run",
      requiresSeparator: true,
      args: { name: "option=value" },
    },
    {
      name: "--enablerepo",
      description: "Temporarily enable repositories (ids or globs)",
      requiresSeparator: true,
      args: { name: "repoid" },
    },
    {
      name: "--disablerepo",
      description: "Temporarily disable active repositories",
      requiresSeparator: true,
      args: { name: "repoid" },
    },
    {
      name: "--installroot",
      description: "Install into an alternative root directory",
      requiresSeparator: true,
      args: { name: "path", template: "folders" },
    },
    {
      name: ["-C", "--cacheonly"],
      description: "Run entirely from system cache, without updating it",
    },
    {
      name: "--downloadonly",
      description: "Download packages without running the transaction",
    },
    {
      name: "--downloaddir",
      description: "Redirect downloaded packages to a directory",
      requiresSeparator: true,
      args: { name: "dir", template: "folders" },
    },
    {
      name: ["-x", "--exclude"],
      description: "Exclude matching packages from the operation",
      requiresSeparator: true,
      args: { name: "spec" },
    },
    {
      name: ["-b", "--best"],
      description: "Restrict the transaction to the best candidates",
    },
    {
      name: "--nobest",
      description: "Allow non-best candidates when best ones are unavailable",
    },
    {
      name: "--color",
      description: "Control colorized output",
      requiresSeparator: true,
      args: { name: "when", suggestions: ["always", "never", "auto"] },
    },
    {
      name: "--showduplicates",
      description: "Show duplicate versions in list and search",
    },
    {
      name: "--releasever",
      description: "Override the distribution release",
      requiresSeparator: true,
      args: { name: "release" },
    },
    {
      name: "-4",
      description: "Resolve to IPv4 addresses only",
    },
    {
      name: "-6",
      description: "Resolve to IPv6 addresses only",
    },
    {
      name: "--version",
      description: "Show the dnf version and exit",
    },
    {
      name: "--help",
      description: "Show help",
    },
  ],
};

export default completionSpec;
