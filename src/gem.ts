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
          name: ["-i", "--installed"],
          description: "Check for installed gem",
        },
        {
          name: ["-I", "--no-installed"],
          description: "Check for not installed gem",
        },
        {
          name: ["-v", "--version"],
          description:
            "Specify version of gem to list for use with --installed",
          args: {
            name: "VERSION",
            description: "The version of gem",
          },
        },
        {
          name: ["-d", "--details"],
          description: "Display detailed information of gem(s)",
        },
        {
          name: "--no-details",
          description: "Do not display detailed information of gem(s)",
        },
        {
          name: "--versions",
          description: "Display only gem names and versions",
        },
        {
          name: "--no-versions",
          description: "Display only gem names",
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
