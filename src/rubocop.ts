const copsGenerator: Fig.Generator = {
  script: ["rubocop", "--show-cops"],
  postProcess: function (out) {
    const cops = out.split("\n\n").map((cop) => {
      const lines = cop.split("\n");
      const nameIndex = lines.findIndex((line) => !line.startsWith("#"));
      const autocorrect = lines
        .slice(0, nameIndex)
        .find((line) => line === "# Supports --autocorrect");

      const restOfLines = lines.slice(nameIndex);

      return {
        autocorrect,
        name: restOfLines[0].slice(0, -1),
        enabled:
          restOfLines
            .find((line) => line.includes("Enabled:"))
            ?.split("Enabled:")?.[1]
            ?.trim() === "true",
      };
    });

    return cops.map((cop) => ({ name: cop.name }));
  },
};

const completionSpec: Fig.Spec = {
  name: "rubocop",
  description:
    "A Ruby static code analyzer and formatter, based on the community Ruby style guide",
  icon: "https://github.com/rubocop/rubocop/blob/master/logo/rubo-logo-symbol.png?raw=true",
  args: {
    name: "file",
    template: "filepaths",
    isVariadic: true,
  },
  options: [
    // Basic Options:
    { name: ["-l", "--lint"], description: "Run only lint cops" },
    {
      name: ["-x", "--fix-layout"],
      description: "Run only layout cops, with autocorrect on",
    },
    { name: "--safe", description: "Run only safe cops" },
    {
      name: "--except",
      args: { name: "COP", isVariadic: true, generators: copsGenerator },
      description: "Exclude the given cop(s)",
    },
    {
      name: "--only",
      args: { name: "COP", isVariadic: true, generators: copsGenerator },
      description: "Run only the given cop(s)",
    },
    {
      name: "--only-guide-cops",
      description: "Run only cops for rules that link to a style guide",
    },
    {
      name: ["-F", "--fail-fast"],
      description:
        "Inspect files in order of modification time and stop after the first file containing offenses",
    },
    { name: "--disable-pending-cops", description: "Run without pending cops" },
    { name: "--enable-pending-cops", description: "Run with pending cops" },
    {
      name: "--ignore-disable-comments",
      description:
        "Run cops even when they are disabled locally by a `rubocop:disable` directive",
    },
    {
      name: "--force-exclusion",
      description:
        "Any files excluded by `Exclude` in configuration files will be excluded, even if given explicitly as arguments",
    },
    {
      name: "--only-recognized-file-types",
      description:
        "Inspect files given on the command line only if they are listed in `AllCops/Include` parameters of user configuration or default configuration",
    },
    {
      name: "--ignore-parent-exclusion",
      description:
        "Prevent from inheriting `AllCops/Exclude` from parent folders",
    },
    {
      name: "--ignore-unrecognized-cops",
      description: "Ignore unrecognized cops or departments in the config",
    },
    {
      name: "--force-default-config",
      description:
        "Use default configuration even if configuration files are present in the directory tree",
    },
    {
      name: ["--stdin", "-s"],
      args: { name: "FILE", template: "filepaths" },
      description:
        "Pipe source from STDIN, using FILE in offense reports. This is useful for editor integration",
    },
    {
      name: ["-P", "--parallel"],
      description:
        "Use available CPUs to execute inspection in parallel default true",
      exclusiveOn: ["--no-parallel"],
    },
    {
      name: "--no-parallel",
      description: "Disable parallel inspection (default: false)",
      exclusiveOn: ["-P", "--parallel"],
    },
    {
      name: "--fail-level",
      args: {
        name: "SEVERITY",
        suggestions: [
          { name: "A", displayName: "autocorrect" },
          { name: "I", displayName: "info" },
          { name: "R", displayName: "refactor" },
          { name: "C", displayName: "convention" },
          { name: "W", displayName: "warning" },
          { name: "E", displayName: "error" },
          { name: "F", displayName: "fatal" },
        ],
      },
      description: "Minimum severity for exit with error code",
    },

    // Caching:
    {
      name: ["-C", "--cache"],
      args: { name: "FLAG" },
      description:
        "Use result caching (FLAG=true) or don't (FLAG=false), default determined by configuration parameter AllCops: UseCache",
    },
    {
      name: "--cache-root",
      args: { name: "DIR", template: "folders" },
      description:
        "Set the cache root directory. Takes precedence over the configuration parameter AllCops: CacheRootDirectory and the $RUBOCOP_CACHE_ROOT environment variable",
    },

    // Server Options:
    {
      name: "--no-server",
      exclusiveOn: ["--server"],
      description: "Do not use server even if it's available",
    },
    {
      name: "--server",
      exclusiveOn: ["--no-server"],
      description:
        "If a server process has not been started yet, start the server process and execute inspection with server.  Default is true.  You can specify the server host and port with the $RUBOCOP_SERVER_HOST and the $RUBOCOP_SERVER_PORT environment variables",
    },
    { name: "--restart-server", description: "Restart server process" },
    { name: "--start-server", description: "Start server process" },
    { name: "--stop-server", description: "Stop server process" },
    { name: "--server-status", description: "Show server status" },

    // Output Options:
    {
      name: ["-f", "--format"],
      args: {
        name: "FORMATTER",
        default: "p",
        suggestions: [
          { name: "a", displayName: "[a]utogenconf" },
          { name: "c", displayName: "[c]lang" },
          { name: "e", displayName: "[e]macs" },
          { name: "fi", displayName: "[fi]les" },
          { name: "fu", displayName: "[fu]ubar" },
          { name: "g", displayName: "[g]ithub" },
          { name: "h", displayName: "[h]tml" },
          { name: "j", displayName: "[j]son" },
          { name: "ju", displayName: "[ju]nit" },
          { name: "m", displayName: "[m]arkdown" },
          { name: "o", displayName: "[o]ffenses" },
          { name: "pa", displayName: "[pa]cman" },
          { name: "p", displayName: "[p]rogress" },
          { name: "q", displayName: "[q]uiet" },
          { name: "s", displayName: "[s]imple" },
          { name: "t", displayName: "[t]ap" },
          { name: "w", displayName: "[w]orst" },
          { name: "[custom]", displayName: "custom formatter class name" },
        ],
      },
      description:
        "Choose an output formatter. This option can be specified multiple times to enable multiple formatters at the same time",
    },
    {
      name: ["-D", "--display-cop-names"],
      description: "Display cop names in offense messages.  Default is true",
      exclusiveOn: ["--no-display-cop-names"],
    },
    {
      name: "--no-display-cop-names",
      description:
        "Disable displaying cop names in offense messages. Default false",
      exclusiveOn: ["-D", "--display-cop-names"],
    },
    {
      name: ["-E", "--extra-details"],
      description: "Display extra details in offense messages",
    },
    {
      name: ["-S", "--display-style-guide"],
      description: "Display style guide URLs in offense messages",
    },
    {
      name: ["-o", "--out"],
      args: { name: "FILE", template: "filepaths" },
      description:
        "Write output to a file instead of STDOUT.  This option applies to the previously specified --format, or the default format if no format is specified",
    },
    {
      name: "--stderr",
      description:
        "Write all output to stderr except for the autocorrected source. This is especially useful when combined with --autocorrect and --stdin",
    },
    { name: "--display-time", description: "Display elapsed time in seconds" },
    {
      name: "--display-only-failed",
      description:
        "Only output offense messages. Omit passing cops. Only valid for --format junit",
    },
    {
      name: "--display-only-fail-level-offenses",
      description:
        "Only output offense messages at the specified --fail-level or above",
    },
    {
      name: "--display-only-correctable",
      description: "Only output correctable offense messages",
    },
    {
      name: "--display-only-safe-correctable",
      description:
        "Only output safe-correctable offense messages when combined with --display-only-correctable",
    },

    // Autocorrection:
    {
      name: ["-a", "--autocorrect"],
      description: "Autocorrect offenses (only when it's safe)",
    },
    {
      name: ["-A", "--autocorrect-all"],
      description: "Autocorrect offenses (safe and unsafe)",
    },
    {
      name: "--disable-uncorrectable",
      dependsOn: ["-a", "--autocorrect"],
      description:
        "Annotates any offenses that do not support autocorrect with `rubocop:todo` comments",
    },

    // Config Generation:
    {
      name: "--auto-gen-config",
      description: "Generate a configuration file acting as a TODO list",
    },
    {
      name: "--regenerate-todo",
      description:
        "Regenerate the TODO configuration file using the last configuration. If there is no existing TODO file, acts like --auto-gen-config",
    },
    {
      name: "--exclude-limit",
      args: { name: "COUNT", default: "15" },
      description:
        "Set the limit for how many files to explicitly exclude.  If there are more files than the limit, the cop will be disabled instead. Default is 15",
    },
    {
      name: "--offense-counts",
      description:
        "Include offense counts in configuration file generated by --auto-gen-config.  Default is true",
      dependsOn: ["--auto-gen-config"],
    },
    {
      name: "--auto-gen-only-exclude",
      description:
        "Generate only Exclude parameters and not Max when running --auto-gen-config, except if the number of files with offenses is bigger than exclude-limit. Default is false",
    },
    {
      name: "--auto-gen-timestamp",
      description:
        "Include the date and time when the --auto-gen-config was run in the file it generates. Default is true",
    },

    // Additional Modes:
    {
      name: ["-L", "--list-target-files"],
      description: "List all files RuboCop will inspect",
    },
    {
      name: "--show-cops",
      args: { name: "COP", isVariadic: true, generators: copsGenerator },
      description:
        "Shows the given cops, or all cops by default, and their configurations for the current directory",
    },
    {
      name: "--show-docs-url",
      args: { name: "COP", isVariadic: true, generators: copsGenerator },
      description:
        "Display url to documentation for the given cops, or base url by default",
    },

    // General Options:
    {
      name: "--init",
      description: "Generate a .rubocop.yml file in the current directory",
    },
    {
      name: ["-c", "--config"],
      args: { name: "file", template: "filepaths" },
      description: "Specify configuration file",
    },
    { name: ["-d", "--debug"], description: "Display debug info" },
    {
      name: ["-r", "--require"],
      args: { name: "file", template: "filepaths" },
      description: "Require Ruby file",
    },
    {
      name: "--no-color",
      description: "Disable color output",
      exclusiveOn: ["--color"],
    },
    {
      name: "--color",
      description: "Force color output",
      exclusiveOn: ["--no-color"],
    },
    { name: ["-v", "--version"], description: "Display version" },
    {
      name: ["-V", "--verbose-version"],
      description: "Display verbose version",
    },
  ],
};

export default completionSpec;
