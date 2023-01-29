const gems: Fig.Generator = {
  trigger: () => true,
  custom: async (tokens, executeShellCommand) => {
    const searchTerm = tokens[tokens.length - 1];
    const out = await executeShellCommand(
      `gem search --both --no-versions --no-details --quiet --norc '${searchTerm.replace(
        "'",
        `'"'"'`
      )}'`
    );
    return out
      .trim()
      .split("\n")
      .filter((line) => line && !line.startsWith("*"))
      .map((name) => ({ name }));
  },
};

const httpProxyOptions: Fig.Option[] = [
  {
    name: ["-p", "--http-proxy"],
    description: "Use HTTP proxy for remote operations",
    args: {
      name: "URL",
      description: "The URL",
      isOptional: true,
    },
  },
  {
    name: "--no-http-proxy",
    description: "Do not use HTTP proxy for remote operations",
    args: {
      name: "URL",
      description: "The URL",
      isOptional: true,
    },
  },
];

const localRemoteOptions: Fig.Option[] = [
  {
    name: ["-l", "--local"],
    description: "Restrict operations to the LOCAL domain",
  },
  {
    name: ["-r", "--remote"],
    description: "Restrict operations to the REMOTE domain",
  },
  {
    name: ["-b", "--both"],
    description: "Allow LOCAL and REMOTE operations",
  },
  {
    name: ["-B", "--bulk-threshold"],
    description:
      "Threshold for switching to bulk synchronization (default 1000)",
    args: {
      name: "COUNT",
      description: "The threshold",
    },
  },
  {
    name: "--clear-sources",
    description: "Clear the gem sources",
  },
  {
    name: ["-s", "--source"],
    description: "Append URL to list of remote gem sources",
    args: {
      name: "URL",
      description: "The URL",
    },
  },
  ...httpProxyOptions,
];

const installedOptions: Fig.Option[] = [
  {
    name: ["-i", "--installed"],
    description: "Check for installed gem",
  },
  {
    name: ["-I", "--no-installed"],
    description: "Check for not installed gem",
  },
  {
    name: ["-v", "--version"],
    description: "Specify version of gem to list for use with --installed",
    args: {
      name: "VERSION",
      description: "The version of gem",
    },
  },
];

const versionsOptions: Fig.Option[] = [
  {
    name: "--versions",
    description: "Display only gem names",
  },
  {
    name: "--no-versions",
    description: "Display not only gem names",
  },
];

const AuthenticationOptions: Fig.Option[] = [
  {
    name: "--host",
    description:
      "Use another gemcutter-compatible host (e.g. https://rubygems.org)",
    args: {
      name: "HOST",
      description: "The host",
    },
  },
  {
    name: ["-k", "--key"],
    description: "Use the given API key",
    args: {
      name: "KEYNAME",
      description: "The API key",
    },
  },
  {
    name: "--otp",
    description:
      "Digit code for multifactor authentication You can also use the environment variable GEM_HOST_OTP_CODE",
    args: {
      name: "CODE",
      description: "The GEM host otp code",
    },
  },
];

const completionSpec: Fig.Spec = {
  name: "gem",
  description: "Ruby package manager",
  subcommands: [
    {
      name: "help",
      description: "Help about any command",
      args: { name: "command", isOptional: true, template: "help" },
    },
    {
      name: ["install", "i"],
      description: "Install a gem into the local repository",
      args: {
        name: "GEMNAME",
        generators: gems,
        debounce: true,
      },
      options: [
        {
          name: "--platform",
          description: "Specify the platform of gem to install",
          args: {
            name: "PLATFORM",
            description: "The platform of gem",
          },
        },
      ],
    },
    {
      name: "cert",
      description: "Manage RubyGems certificates and signing settings",
      options: [
        {
          name: ["-a", "--add"],
          description: "Add a trusted certificate",
          args: {
            name: "CERT",
            description: "The trusted certificate",
            template: "filepaths",
          },
        },
        {
          name: ["-l", "--list"],
          description:
            "List trusted certificates where the subject contains FILTER",
          args: {
            name: "FILTER",
            description: "The filter",
            isOptional: true,
          },
        },
        {
          name: ["-r", "--remove"],
          description:
            "Remove trusted certificates where the subject contains FILTER",
          args: {
            name: "FILTER",
            description: "The filter",
          },
        },
        {
          name: ["-b", "--build"],
          description:
            "Build private key and self-signed certificate for EMAIL_ADDR",
          args: {
            name: "EMAIL_ADDR",
            description: "The email address",
          },
        },
        {
          name: ["-C", "--certificate"],
          description: "Signing certificate for --sign",
          args: {
            name: "CERT",
            description: "The certificate",
            template: "filepaths",
          },
        },
        {
          name: ["-K", "--private-key"],
          description: "Key for --sign or --build",
          args: {
            name: "KEY",
            description: "The key",
            template: "filepaths",
          },
        },
        {
          name: ["-A", "--key-algorithm"],
          description: "Select which key algorithm to use for --build",
          args: {
            name: "ALGORITHM",
            description: "The algorithm",
          },
        },
        {
          name: ["-s", "--sign"],
          description:
            "Signs CERT with the key from -K and the certificate from -C",
          args: {
            name: "CERT",
            description: "The certificate",
            template: "filepaths",
          },
        },
        {
          name: ["-d", "--days"],
          description: "Days before the certificate expires",
          args: {
            name: "NUMBER_OF_DAYS",
            description: "The number of days",
          },
        },
        {
          name: ["-R", "--re-sign"],
          description: "Re-signs the certificate from -C with the key from -K",
        },
      ],
    },
    {
      name: "check",
      description: "Check a gem repository for added or missing files",
      args: {
        name: "GEMNAME",
        generators: gems,
        debounce: true,
        isOptional: true,
      },
      options: [
        {
          name: ["-a", "--alien"],
          description:
            "Report 'unmanaged' or rogue files in the gem repository",
        },
        {
          name: "--no-alien",
          description: "Report 'managed' or rogue files in the gem repository",
        },
        {
          name: "--doctor",
          description: "Clean up uninstalled gems and broken specifications",
        },
        {
          name: "--no-doctor",
          description:
            "Do not clean up uninstalled gems and broken specifications",
        },
        {
          name: "--dry-run",
          description: "Do not remove files, only report what would be removed",
        },
        {
          name: "--no-dry-run",
          description: "Remove files",
        },
        {
          name: "--gems",
          description: "Check installed gems for problems",
        },
        {
          name: "--no-gems",
          description: "Check not installed gems for problems",
        },
        {
          name: ["-v", "--version"],
          description: "Specify version of gem to check",
          args: {
            name: "VERSION",
            description: "The version of the gem",
          },
        },
      ],
    },
    {
      name: "cleanup",
      description: "Clean up old versions of installed gems",
      args: {
        name: "GEMNAME",
        description: "Name of gem to cleanup",
        generators: gems,
        debounce: true,
        isOptional: true,
      },
      options: [
        {
          name: ["-n", "-d", "--dry-run"],
          description: "Do not uninstall gems",
        },
        {
          name: ["-D", "--check-development"],
          description:
            "Check development dependencies while uninstalling (default: true)",
        },
        {
          name: "--no-check-development",
          description:
            "Do not check development dependencies while uninstalling",
        },
        {
          name: "--user-install",
          description: "Cleanup in user’s home directory instead of GEM_HOME",
        },
        {
          name: "--no-user-install",
          description: "Cleanup in GEM_HOME instead of user’s home directory",
        },
      ],
    },
    {
      name: "contents",
      description: "Display the contents of the installed gems",
      args: {
        name: "GEMNAME",
        description: "Name of gem to list contents for",
        generators: gems,
        debounce: true,
      },
      options: [
        {
          name: ["-v", "--version"],
          description: "Specify version of gem to contents",
          args: {
            name: "VERSION",
            description: "The version of the gem",
          },
        },
        {
          name: "--all",
          description: "Contents for all gems",
        },
        {
          name: ["-s", "--spec-dir"],
          description: "Search for gems under specific paths",
          args: {
            name: "DIR",
            template: "filepaths",
          },
        },
        {
          name: ["-l", "--lib-only"],
          description: "Only return files in the Gem’s lib_dirs",
        },
        {
          name: "--no-lib-only",
          description: "Not only return files in the Gem’s lib_dirs",
        },
        {
          name: "--prefix",
          description: "Don’t include installed path prefix",
        },
        {
          name: "--no-prefix",
          description: "Include installed path prefix",
        },
        {
          name: "--show-install-dir",
          description: "Show only the gem install dir",
        },
        {
          name: "--no-show-install-dir",
          description: "Do not show only the gem install dir",
        },
      ],
    },
    {
      name: "dependency",
      description: "Show the dependencies of an installed gem",
      args: {
        name: "REGEXP",
        description: "Show dependencies for gems whose names start with REGEXP",
      },
      options: [
        {
          name: ["-v", "--version"],
          description: "Specify version of gem to dependency",
          args: {
            name: "VERSION",
            description: "The version of gem",
          },
        },
        {
          name: "platform",
          description: "Specify the platform of gem to dependency",
          args: {
            name: "PLATFORM",
            description: "The platform of gem",
          },
        },
        {
          name: "--prerelease",
          description: "Allow prerelease versions of a gem",
        },
        {
          name: "--no-prerelease",
          description: "Do not allow prerelease versions of a gem",
        },
        {
          name: ["-R", "--reverse-dependencies"],
          description: "Include reverse dependencies in the output",
        },
        {
          name: "--no-reverse-dependencies",
          description: "Do not include reverse dependencies in the output",
        },
        {
          name: "--pipe",
          description: "Pipe Format (name --version ver)",
        },
        ...localRemoteOptions,
      ],
    },
    {
      name: "environment",
      description: "Display information about the RubyGems environment",
      args: {
        suggestions: [
          {
            name: "home",
            description:
              "Display the path where gems are installed. Aliases: gemhome, gemdir, GEM_HOME",
          },
          {
            name: "path",
            description:
              "Display path used to search for gems. Aliases: gempath, GEM_PATH",
          },
          {
            name: "user_gemhome",
            description:
              "Display the path where gems are installed when --user-install is given. Aliases: user_gemdir",
          },
          {
            name: "version",
            description: "Display the gem format version",
          },
          {
            name: "remotesources",
            description: "Display the remote gem servers",
          },
          {
            name: "platform",
            description: "Display the supported gem platforms",
          },
        ],
        isOptional: true,
      },
    },
    {
      name: "fetch",
      description: "Download a gem and place it in the current directory",
      args: {
        name: "GEMNAME",
        description: "Name of gem to download",
        generators: gems,
        debounce: true,
      },
      options: [
        {
          name: ["-v", "--version"],
          description: "Specify version of gem to fetch",
          args: {
            name: "VERSION",
            description: "The version of the gem",
          },
        },
        {
          name: "platform",
          description: "Specify the platform of gem to fetch",
          args: {
            name: "PLATFORM",
            description: "The platform of gem",
          },
        },
        {
          name: "--prerelease",
          description: "Allow prerelease versions of a gem",
        },
        {
          name: "--no-prerelease",
          description: "Do not allow prerelease versions of a gem",
        },
        {
          name: "--suggestions",
          description: "Suggest alternates when gems are not found",
        },
        {
          name: "--no-suggestions",
          description: "Do not suggest alternates when gems are not found",
        },
        {
          name: ["-B", "--bulk-threshold"],
          description:
            "Threshold for switching to bulk synchronization (default 1000)",
          args: {
            name: "COUNT",
            description: "The threshold",
          },
        },
        {
          name: ["-s", "--source"],
          description: "Append URL to list of remote gem sources",
          args: {
            name: "URL",
            description: "The URL",
          },
        },
        {
          name: "--clear-sources",
          description: "Clear the gem sources",
        },
        ...httpProxyOptions,
      ],
    },
    {
      name: "generate_index",
      description: "Generates the index files for a gem server directory",
      options: [
        {
          name: ["-d", "--directory"],
          description: "Repository base dir containing gems subdir",
          args: {
            name: "DIRNAME",
            template: "folders",
            filterStrategy: "fuzzy",
          },
        },
        {
          name: "--modern",
          description: "Generate indexes for RubyGems (always true)",
        },
        {
          name: "--no-modern",
          description: "Do not generate indexes for RubyGems",
        },
        {
          name: "--update",
          description:
            "Update modern indexes with gems added since the last update",
        },
      ],
    },
    {
      name: "info",
      description: "Show information for the given gem",
      args: {
        name: "GEMNAME",
        description: "Name of the gem to print information about",
        generators: gems,
        debounce: true,
      },
      options: [
        {
          name: "-I",
          description: "Equivalent to --no-installed",
        },
        {
          name: ["-a", "--all"],
          description: "Display all gem versions",
        },
        {
          name: ["-e", "--exact"],
          description: "Name of gem(s) to query on matches the provided STRING",
        },
        {
          name: "--prerelease",
          description: "Allow prerelease versions of a gem",
        },
        {
          name: "--no-prerelease",
          description: "Do not allow prerelease versions of a gem",
        },
        ...installedOptions,
        ...versionsOptions,
      ],
    },
    {
      name: "lock",
      description: "Generate a lockdown list of gems",
      args: {
        name: "GEMNAME-VERSION",
        description: "Name and the version of gem to lock, ex: rails-1.0.0",
      },
      options: [
        {
          name: ["-s", "--strict"],
          description: "Fail if unable to satisfy a dependency",
        },
        {
          name: "--no-strict",
          description: "Do not fail if unable to satisfy a dependency",
        },
      ],
    },
    {
      name: "mirror",
      description: "Mirror all gem files (requires rubygems-mirror)",
    },
    {
      name: "open",
      description: "Open gem sources in editor",
      args: {
        name: "GEMNAME",
        description: "Name of the gem to print information about",
        generators: gems,
        debounce: true,
      },
      options: [
        {
          name: ["-e", "--editor"],
          description:
            "Prepends COMMAND to gem path. Could be used to specify editor",
          args: {
            name: "COMMAND",
            description: "The prepends command to gem path",
          },
        },
        {
          name: ["-v", "--version"],
          description: "Opens specific gem version",
          args: {
            name: "VERSION",
            description: "The specify version of gem",
          },
        },
      ],
    },
    {
      name: "uninstall",
      description: "Uninstall gems from the local repository",
      args: {
        name: "GEMNAME",
        generators: gems,
        debounce: true,
      },
      options: [
        {
          name: ["-a", "--all"],
          description: "Uninstall all matching versions",
        },
        {
          name: ["-I", "--ignore-dependencies"],
          description: "Ignore dependency requirements while uninstalling",
        },
        {
          name: ["-D", "--check-development"],
          description:
            "Check development dependencies while uninstalling (default: false)",
        },
        {
          name: ["-x", "--executables"],
          description: "Uninstall applicable executables without confirmation",
        },
        {
          name: ["-i", "--install-dir"],
          description: "Directory to uninstall gem from",
          args: {
            name: "DIR",
            template: "folders",
            filterStrategy: "fuzzy",
          },
        },
        {
          name: ["-n", "--bindir"],
          description: "Directory to remove executables from",
          args: {
            name: "DIR",
            template: "folders",
            filterStrategy: "fuzzy",
          },
        },
        {
          name: "--user-install",
          description:
            "Uninstall from user’s home directory in addition to GEM_HOME",
        },
        {
          name: "--format-executable",
          description: "Assume executable names match Ruby’s prefix and suffix",
        },
        {
          name: "--force",
          description:
            "Uninstall all versions of the named gems ignoring dependencies",
        },
        {
          name: "--abort-on-dependent",
          description:
            "Prevent uninstalling gems that are depended on by other gems",
        },
        {
          name: ["-v", "--version"],
          description: "Specify version of gem to uninstall",
          args: {
            name: "VERSION",
            description: "The specify version of gem",
          },
        },
        {
          name: "--platform",
          description: "Specify the platform of gem to uninstall",
          args: {
            name: "PLATFORM",
            description: "The platform of gem",
          },
        },
        {
          name: "--vendor",
          description:
            "Uninstall gem from the vendor directory. Only for use by gem repackagers",
        },
      ],
    },
    {
      name: "list",
      description: "Display local gems whose name matches REGEXP",
      args: {
        name: "REGEXP",
        description: "Regexp to look for in gem name",
        isOptional: true,
      },
      options: [
        {
          name: ["-d", "--details"],
          description: "Display detailed information of gem(s)",
        },
        {
          name: "--no-details",
          description: "Do not display detailed information of gem(s)",
        },
        {
          name: ["-a", "--all"],
          description: "Display all gem versions",
        },
        {
          name: ["-e", "--exact"],
          description: "Name of gem(s) to query on matches the provided STRING",
        },
        {
          name: "--prerelease",
          description: "Display prerelease versions",
        },
        {
          name: "--no-prerelease",
          description: "Do not display prerelease versions",
        },
        {
          name: ["-u", "--update-sources"],
          description: "[Deprecated] Update local source cache",
        },
        {
          name: "--no-update-sources",
          description: "[Deprecated] Do not update local source cache",
        },
        ...installedOptions,
        ...versionsOptions,
        ...localRemoteOptions,
      ],
    },
    {
      name: "build",
      description: "Build a gem from a gemspec",
      args: {
        name: "GEMSPEC_FILE",
        description: "Gemspec file name to build a gem for",
      },
      options: [
        {
          name: "--platform",
          description: "Specify the platform of gem to build",
          args: {
            name: "PLATFORM",
            description: "The platform of gem",
          },
        },
        {
          name: "--force",
          description: "Skip validation of the spec",
        },
        {
          name: "--strict",
          description: "Consider warnings as errors when validating the spec",
        },
        {
          name: ["-o", "--output"],
          description: "Output gem with the given filename",
          args: {
            name: "FILE",
            description: "The filename",
          },
        },
        {
          name: "-C",
          description:
            "Run as if gem build was started in <PATH> instead of the current working directory",
          args: {
            name: "PATH",
            description: "The filename",
            template: "folders",
          },
        },
      ],
    },
    {
      name: "push",
      description: "Push a gem up to the gem server",
      args: {
        name: "GEM",
        description: "Built gem to push up",
      },
      options: [...AuthenticationOptions, ...httpProxyOptions],
    },
    {
      name: "server",
      description:
        "Starts up a web server that hosts the RDoc (requires rubygems-server)",
    },
    {
      name: "owner",
      description: "Manage gem owners of a gem on the push server",
      args: {
        name: "GEMNAME",
        generators: gems,
        debounce: true,
      },
      options: [
        {
          name: ["-a", "--add"],
          description: "Add an owner by user identifier",
          args: {
            name: "NEW_OWNER",
            description: "The new owner",
          },
        },
        {
          name: ["-r", "--remove"],
          description: "Remove an owner by user identifier",
          args: {
            name: "OLD_OWNER",
            description: "The old owner",
          },
        },
        ...AuthenticationOptions,
      ],
    },
    {
      name: "which",
      description: "Find the location of a library file you can require",
      args: {
        name: "FILE",
        template: "filepaths",
      },
      options: [
        {
          name: ["-a", "--all"],
          description: "Show all matching files",
        },
        {
          name: ["-g", "--gems-first"],
          description: "Search gems before non-gems",
        },
      ],
    },
    {
      name: "outdated",
      description: "Display all gems that need updates",
      options: [
        {
          name: "--platform",
          description: "Specify the platform of gem to outdated",
          args: {
            name: "PLATFORM",
            isVariadic: true,
          },
        },
      ],
    },
    {
      name: "update",
      description: "Update installed gems to the latest version",
      args: {
        name: "GEMNAME",
        description: "The gem(s) you want to update",
        isVariadic: true,
        isOptional: true,
      },
      options: [
        {
          name: "--system",
          description: "Update the RubyGems system software",
          args: {
            name: "VERSION",
            isOptional: true,
          },
        },
        {
          name: "--platform",
          description: "Update the RubyGems system software",
          args: {
            name: "PLATFORM",
          },
        },
        {
          name: "--prerelease",
          description: "Allow prerelease versions of a gem as update targets",
        },
        {
          name: ["--install-dir", "-i"],
          description: "Gem repository directory to get installed gems",
          args: {
            name: "DIR",
            template: "folders",
          },
        },
        {
          name: ["--bindir", "-n"],
          description:
            "Directory where executables will be placed when the gem is installed",
          args: {
            name: "DIR",
            template: "folders",
          },
        },
        {
          name: "--document",
          description: "Generate documentation for installed gems",
          args: {
            name: "TYPES",
            suggestions: ["rdoc", "ri"],
          },
        },
        {
          name: "--build-root",
          description:
            "Temporary installation root. Useful for building packages. Do not use this when installing remote gems",
          args: {
            name: "DIR",
            template: "folders",
          },
        },
        {
          name: "--vendor",
          description:
            "Install gem into the vendor directory. Only for use by gem repackagers",
        },
        {
          name: ["--no-document", "-N"],
          description: "Disable documentation generation",
        },
        {
          name: ["--env-shebang", "-E"],
          description:
            "Rewrite the shebang line on installed scripts to use /usr/bin/env",
        },
        {
          name: ["--force", "-f"],
          description: "Force gem to install, bypassing dependency checks",
        },
        {
          name: ["--wrappers", "-w"],
          description:
            "Use bin wrappers for executables. Not available on dosish platforms",
        },
        {
          name: ["--trust-policy", "-P"],
          description: "Specify gem trust policy",
          args: {
            name: "POLICY",
          },
        },
        {
          name: "--ignore-dependencies",
          description: "Do not install any required dependent gems",
        },
        {
          name: "--format-executable",
          description: "Make installed executable names match Ruby",
        },
        {
          name: "--user-install",
          description: "Install in user's home directory instead of GEM_HOME",
        },
        {
          name: "--development",
          description: "Install additional development dependencies",
        },
        {
          name: "--development-all",
          description:
            "Install development dependencies for all gems (including dev deps themselves)",
        },
        {
          name: "--conservative",
          description:
            "Don't attempt to upgrade gems already meeting version requirement",
        },
        {
          name: "--minimal-deps",
          description:
            "Don't upgrade any dependencies that already meet version requirements",
        },
        {
          name: "--post-install-message",
          description: "Print post install message",
        },
        {
          name: ["--file", "-g"],
          description:
            "Read from a gem dependencies API file and install the listed gems",
          args: {
            name: "FILE",
            template: "filepaths",
          },
        },
        {
          name: "--without",
          description:
            "Omit the named groups (comma separated) when installing from a gem dependencies file",
          args: {
            name: "GROUPS",
          },
        },
        {
          name: "--default",
          description:
            "Add the gem's full specification to specifications/default and extract only its bin",
        },
        {
          name: "--explain",
          description:
            "Rather than install the gems, indicate which would be installed",
        },
        {
          name: "--lock",
          description: "Create a lock file (when used with -g/--file)",
        },
        {
          name: "--suggestions",
          description: "Suggest alternates when gems are not found",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for gem",
      isPersistent: true,
    },
    {
      name: ["-V", "--verbose"],
      description: "Set the verbose level of output",
      isPersistent: true,
    },
    {
      name: "--no-verbose",
      description: "Do not set the verbose level of output",
      isPersistent: true,
    },
    {
      name: ["-q", "--quiet"],
      description: "Silence command progress meter",
      isPersistent: true,
    },
    {
      name: "--silent",
      description: "Silence RubyGems output",
      isPersistent: true,
    },
    {
      name: "-config-file",
      description: "Use this config file instead of default",
      args: {
        name: "FILE",
        description: "The config file",
        template: "filepaths",
      },
      isPersistent: true,
    },
    {
      name: "--backtrace",
      description: "Show stack backtrace on errors",
      isPersistent: true,
    },
    {
      name: "--debug",
      description: "Turn on Ruby debugging",
      isPersistent: true,
    },
    {
      name: "--norc",
      description: "Avoid loading any .gemrc file",
      isPersistent: true,
    },
    {
      name: ["-v", "--version"],
      description: "Show the gem version",
    },
  ],
};
export default completionSpec;
