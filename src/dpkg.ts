const completionSpec: Fig.Spec = {
  name: "dpkg",
  description: "Debian package management system",
  subcommands: [
    {
      name: "query",
      description: "Query the dpkg database",
      options: [
        {
          name: ["-l", "--list"],
          description: "List packages matching a pattern",
          args: { name: "pattern" },
        },
        {
          name: ["-s", "--status"],
          description: "Display the status of available packages",
          args: { name: "package" },
        },
        {
          name: ["-L", "--listfiles"],
          description: "List files in a package",
          args: { name: "package" },
        },
        {
          name: ["-S", "--search"],
          description: "Search for a package owning a file",
          args: { name: "file" },
        },
        {
          name: ["-p", "--print-avail"],
          description: "Display details about a package in the dpkg database",
          args: { name: "package" },
        },
        {
          name: ["-W", "--show"],
          description: "Show a package in the dpkg database",
          args: { name: "package" },
        },
      ],
    },
    {
      name: "install",
      description: "Install or upgrade packages",
      args: { name: "package" },
      options: [
        {
          name: ["-R", "--recursive"],
          description: "Recursively handle packages",
        },
        {
          name: ["-B", "--auto-deconfigure"],
          description: "Uninstall packages that depend on the target package",
        },
        {
          name: "--skip-same-version",
          description: "Don't upgrade if the same version is already installed",
        },
        {
          name: "--force-depends",
          description: "Ignore dependency problems",
        },
        {
          name: "--force-confnew",
          description: "Always install the new version of configuration files",
        },
        {
          name: "--force-confold",
          description: "Always install the old version of configuration files",
        },
        {
          name: "--force-confdef",
          description:
            "Always install the default version of configuration files",
        },
        {
          name: "--force-confmiss",
          description: "Always install missing configuration files",
        },
        {
          name: "--no-triggers",
          description: "Skip processing triggers",
        },
        {
          name: "--no-act",
          description: "Simulate the action, but don't execute",
        },
      ],
    },
    {
      name: "remove",
      description: "Remove packages",
      args: { name: "package" },
      options: [
        {
          name: ["-R", "--recursive"],
          description: "Recursively remove packages",
        },
        {
          name: ["-B", "--auto-deconfigure"],
          description: "Uninstall packages that depend on the target package",
        },
        {
          name: "--no-act",
          description: "Simulate the action, but don't execute",
        },
      ],
    },
    {
      name: "purge",
      description: "Remove packages and their configuration files",
      args: { name: "package" },
      options: [
        {
          name: ["-R", "--recursive"],
          description: "Recursively remove packages",
        },
        {
          name: "--no-act",
          description: "Simulate the action, but don't execute",
        },
      ],
    },
    {
      name: "configure",
      description: "Configure a package after installation",
      args: { name: "package" },
      options: [
        {
          name: "--pending",
          description: "Configure all unconfigured packages",
        },
        {
          name: "--no-triggers",
          description: "Skip processing triggers",
        },
        {
          name: "--no-act",
          description: "Simulate the action, but don't execute",
        },
      ],
    },
    {
      name: "reconfigure",
      description: "Reconfigure a package",
      args: { name: "package" },
      options: [
        {
          name: "--no-triggers",
          description: "Skip processing triggers",
        },
        {
          name: "--no-act",
          description: "Simulate the action, but don't execute",
        },
      ],
    },
    {
      name: "list",
      description: "List packages in the dpkg database",
      options: [
        {
          name: ["-l", "--list"],
          description: "List packages matching a pattern",
          args: { name: "pattern" },
        },
        {
          name: ["-s", "--status"],
          description: "Display the status of available packages",
          args: { name: "package" },
        },
        {
          name: ["-L", "--listfiles"],
          description: "List files in a package",
          args: { name: "package" },
        },
        {
          name: ["-S", "--search"],
          description: "Search for a package owning a file",
          args: { name: "file" },
        },
        {
          name: ["-p", "--print-avail"],
          description: "Display details about a package in the dpkg database",
          args: { name: "package" },
        },
        {
          name: ["-W", "--show"],
          description: "Show a package in the dpkg database",
          args: { name: "package" },
        },
        {
          name: "--installed",
          description: "List installed packages",
        },
        {
          name: "--avail",
          description: "List available packages",
        },
        {
          name: "--hold",
          description: "List packages on hold",
        },
        {
          name: "--deferred",
          description: "List deferred packages",
        },
      ],
    },
    {
      name: "builddeb",
      description: "Build Debian package files from sources",
      args: { name: "directory" },
      options: [
        {
          name: ["-us", "--unsigned"],
          description: "Build unsigned .changes and .dsc files",
        },
        {
          name: ["-uc", "--unsigned-changes"],
          description: "Build unsigned .changes file",
        },
        {
          name: ["-sa", "--source"],
          description: "Build source package",
        },
        {
          name: "-rfakeroot",
          description: "Use fakeroot when building the package",
        },
        {
          name: ["-b", "--binary"],
          description: "Build binary package from source",
        },
        {
          name: "--force-sign",
          description: "Force signing of changes file",
        },
        {
          name: ["-m", "--maintainer"],
          description: "Specify the package maintainer",
          args: { name: "email" },
        },
        {
          name: ["-c", "--changes"],
          description: "Specify the changes file to use",
          args: { name: "file" },
        },
        {
          name: ["-v", "--version"],
          description: "Specify the version to use",
          args: { name: "version" },
        },
        {
          name: "--increment",
          description: "Increment the version number in the changelog",
        },
      ],
    },
    {
      name: "check",
      description: "Check the dependencies of packages",
      args: {
        name: "package",
        isOptional: true,
      },
      options: [
        {
          name: ["-a", "--all"],
          description: "Check all installed packages",
        },
        {
          name: ["-d", "--unmet"],
          description: "Check for unmet dependencies",
        },
        {
          name: ["-i", "--check-installed"],
          description: "Check installed packages",
        },
        {
          name: ["-U", "--check-unpacked"],
          description: "Check unpacked packages",
        },
        {
          name: ["-c", "--nocheck"],
          description: "Skip checking for broken dependencies",
        },
        {
          name: ["-r", "--reverse"],
          description: "Check reverse dependencies",
        },
      ],
    },
    {
      name: "compare-versions",
      description: "Compare package versions",
      args: [
        { name: "version1" },
        {
          name: "relation",
          isOptional: true,
          suggestions: ["lt", "le", "eq", "ne", "gt", "ge"],
        },
        { name: "version2" },
      ],
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Help for dpkg",
    },
  ],
};

export default completionSpec;
