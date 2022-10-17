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

const completionSpec: Fig.Spec = {
  name: "gem",
  description: "Ruby package manager",
  subcommands: [
    {
      name: ["install", "i"],
      description: "Install a gem into the local repository",
      args: {
        name: "GEMNAME",
        generators: gems,
        debounce: true,
      },
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
    },
  ],
};
export default completionSpec;
