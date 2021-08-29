const dartEntryPoint: Fig.Arg = {
  name: "dart-entry-point",
  description: "The Dart file containing the main function.",
};

const define: Fig.Subcommand = {
  name: ["-D", "--define"],
  description:
    "Define an environment declaration. To specify multiple declarations, use multiple options or use commas to separate key-value pairs. For example: dart compile aot-snapshot -D a=1,b=2 main.dart",
  args: {
    name: "key-value-pairs",
    description: "Key-value pairs to define in Dart script.",
    isVariadic: true,
  },
};

const globalOptions: Fig.Option[] = [
  {
    name: ["-h", "--help"],
    description: "Print this usage information.",
  },
];

const compileOptions: Fig.Subcommand[] = [
  {
    name: ["-o", "--output"],
    description: "Write the output to <file-name>.",
    args: { name: "dart-entry-point", template: "filepaths" },
  },
  {
    name: "--verbosity",
    description: "Sets the verbosity level of the compilation.",
    args: {
      name: "verbosity-level",
      suggestions: [
        { name: "all", description: "Show all messages." },
        { name: "error", description: "Show only error messages." },
        {
          name: "info",
          description: "Show error, warning, and info messages.",
        },
        {
          name: "warning",
          description: "Show only error and warning messages.",
        },
      ],
    },
  },
];

const aotOptions: Fig.Subcommand[] = [
  define,
  {
    name: "--enable-asserts",
    description: "Enable assert statements.",
  },
  {
    name: ["-p", "--packages"],
    description:
      "Get package locations from the specified file instead of .packages. <path> can be relative or absolute.",
    args: {
      name: "args-path",
      description: "The path to draw packages from.",
      template: "filepaths",
    },
  },
  {
    name: ["--no-sound-null-safety", "--sound-null-safety"],
    description: "Respect the nullability of types at runtime.",
  },
  {
    name: ["-S", "--save-debugging-info"],
    description:
      "Remove debugging information from the output and save it separately to the specified file.. <path> can be relative or absolute.",
    args: {
      name: "debug-info-path",
      description: "The path to write debugging info to.",
      template: "filepaths",
    },
  },
];

const completionSpec: Fig.Spec = {
  name: "dart",
  description: "A command-line utility for Dart development.",
  options: [
    ...globalOptions,
    {
      name: ["-v", "--verbose"],
      description: "Print verbose output.",
    },
    {
      name: "--version",
      description: "Current Dart version.",
    },
    {
      name: "--enable-analytics",
      description: "Enables analytics.",
    },
    {
      name: "--disable-analytics",
      description: "Disables analytics.",
    },
  ],
  subcommands: [
    {
      name: "analyze",
      description: "Analyze Dart code in a directory.",
      options: [
        ...globalOptions,
        {
          name: "--fatal-infos",
          description: "Treat info level issues as fatal.",
        },
        {
          name: ["--fatal-warnings", "--no-fatal-warnings"],
          description: "Treat warning level issues as fatal (defaults to on).",
        },
      ],
      args: {
        name: "directory",
        description: "Dart project directoy to analyze.",
        template: "folders",
      },
    },
    {
      name: "compile",
      description: "Compile Dart to various formats.",
      options: [...globalOptions],
      subcommands: [
        {
          name: "aot-snapshot",
          description: "Compile Dart to an AOT snapshot.",
          args: dartEntryPoint,
          options: [...globalOptions, ...compileOptions, ...aotOptions],
        },
        {
          name: "exe",
          description: "Compile Dart to a self-contained executable.",
          args: dartEntryPoint,
          options: [...globalOptions, ...compileOptions, ...aotOptions],
        },
        {
          name: "jit-snapshot",
          description: "Compile Dart to a JIT snapshot.",
          args: dartEntryPoint,
          options: [...globalOptions, ...compileOptions],
        },
        {
          name: "js",
          description: "Compile Dart to JavaScript.",
          args: dartEntryPoint,
          options: [
            ...globalOptions,
            ...compileOptions,
            {
              name: ["-m", "--minified"],
              description: "Generate minified output.",
            },
            define,
          ],
        },
        {
          name: "kernel",
          description: "Compile Dart to a kernel snapshot.",
          args: dartEntryPoint,
          options: [...globalOptions, ...compileOptions],
        },
      ],
    },
    {
      name: "create",
      description: "Create a new Dart project.",
      options: [
        ...globalOptions,
        {
          name: ["-t", "--template"],
          description: "The project template to use.",
          args: {
            name: "template-type",
            default: "console-simple",
            suggestions: [
              {
                name: "console-simple",
                description: "A simple command-line application.",
              },
              {
                name: "console-full",
                description: "A command-line application sample.",
              },
              {
                name: "package-simple",
                description:
                  "A starting point for Dart libraries or applications.",
              },
              {
                name: "server-simple",
                description: "A web server built using package:shelf.",
              },
              {
                name: "web-simple",
                description: "A web app that uses only core Dart libraries.",
              },
            ],
          },
        },
        {
          name: ["--pub", "--no-pub"],
          description:
            "Whether to run 'pub get' after the project has been created. Default to on.",
        },
        {
          name: "--foce",
          description:
            "Force project generation, even if the target directory already exists.",
        },
      ],
    },
    {
      name: "fix",
      description: "pply automated fixes to Dart source code.",
      options: [
        ...globalOptions,
        {
          name: ["-n", "--dry-run"],
          description: "Preview the proposed changes but make no changes.",
        },
        {
          name: "--apply",
          description: "Apply the proposed changes.",
        },
      ],
    },
    {
      name: "format",
      description: "Idiomatically format Dart source code.",
      options: [
        ...globalOptions,
        {
          name: ["-v", "--verbose"],
          description: "Show all options and flags with --help.",
        },
        {
          name: ["-o", "--output"],
          description: "Set where to write formatted output.",
          args: [
            {
              name: "json",
              description: "Print code and selection as JSON.",
            },
            {
              name: "none",
              description: "Discard output.",
            },
            {
              name: "show",
              description: "Print code to terminal.",
            },
            {
              name: "write",
              description: "Overwrite formatted files on disk.",
            },
            {
              name: "--show",
              description: "Set which filenames to print.",
              suggestions: [
                {
                  name: "all",
                  description: "All visited files and directories.",
                },
                {
                  name: "changed",
                  description:
                    "nly the names of files whose formatting is changed.",
                },
                {
                  name: "none",
                  description: "No file names or directories.",
                },
              ],
            },
            {
              name: "--summary",
              description: "Show the specified summary after formatting.",
              suggestions: [
                {
                  name: "line",
                  description: "Single-line summary.",
                },
                {
                  name: "none",
                  description: "No summary.",
                },
                {
                  name: "profile",
                  description: "How long it took to format each file.",
                },
              ],
            },
          ],
        },
        {
          name: "--set-exit-if-changed",
          description:
            "Return exist code 1 if there are any formatting changes.",
        },
        {
          name: "--fix",
          description: "Apply all style fixes.",
        },
        {
          name: "--fix-doc-comments",
          description: "Use triple slash for documentation comments.",
        },
        {
          name: "--fix-function-typedefs",
          description: "Use new syntax for function type typedefs.",
        },
        {
          name: "--fix-named-default-separator",
          description:
            "Use '=' as the separator before named parameter default values.",
        },
        {
          name: "--fix-optional-const",
          description: "Remove 'const' keyword inside constant context.",
        },
        {
          name: "--fix-optional-new",
          description: "Remove 'new' keyword.",
        },
        {
          name: "--fix-single-cascade-statements",
          description:
            "Remove unnecessary single cascades from expression statements.",
        },
        {
          name: ["-l", "--line-length"],
          description: "Wrap lines longer than this. Defaults to 80.",
          args: {
            name: "line-length",
            description: "Line length to wrap.",
            suggestions: ["80", "120"],
          },
        },
        {
          name: ["-i", "--indent"],
          description: "Add this many spaces of leading indentation.",
          args: { name: "number-of-spaces" },
        },
        {
          name: "--follow-links",
          description:
            "Follow links to files and directories. If unset, links will be ignored.",
        },
        {
          name: "--version",
          description: "Show dart_style version.",
        },
        {
          name: "--selection",
          description:
            "Track selection (given as 'start:length') through formatting.",
        },
        {
          name: "--stdin-name",
          description:
            "Use this path in error messages when input is read from stdin. (defaults to 'stdin')",
          args: { name: "name" },
        },
      ],
      args: {
        name: "files-or-directory",
        description: "The files or directories to format.",
        template: ["filepaths", "folders"],
      },
    },
    {
      name: "migrate",
      description: "Perform null safety migration on a project.",
      options: [
        ...globalOptions,
        {
          name: ["-v", "--verbose"],
          description: "Show additional command output.",
        },
        {
          name: "--apply-changes",
          description:
            "Apply the proposed null safety changes to the files on disk.",
        },
        {
          name: "--ignore-errors",
          description:
            "Attempt to perform null safety analysis even if the project has analysis errors.",
        },
        {
          name: "--skip-import-check",
          description:
            "Go ahead with migration even if some imported files have not yet been migrated.",
        },
        {
          name: ["--web-preview", "--no-web-preview"],
          description:
            "Show and interactive preview of the proposed null safety changes in a browser window. User --no-web-preview to print proposed changes to the console. (defaults to on)",
        },
        {
          name: "--preview-hostname",
          description:
            "Run the preview server on the specified hostname. If not specified, 'localhost' is used. Use 'any' to specify IPv6.any or IPv4.any. (defaults to the 'localhost')",
          args: {
            name: "host",
          },
        },
        {
          name: "--preview-port",
          description:
            "Run the preview server on the specified port. If not specified, dynamically allocate a port.",
          args: {
            name: "port",
          },
        },
        {
          name: "--summary",
          description:
            "Output a machine-readable summary of migration changes.",
          args: { name: "path", template: "filepaths" },
        },
      ],
    },
    {
      name: "pub",
      description: "Work with packages.",
      options: [
        ...globalOptions,
        {
          name: ["--trace", "--no-trace"],
          description: "Print debugging information when an error occurs.",
        },
        {
          name: ["-v", "--verbose"],
          description: "Shortcut for '--verbose=all.",
        },
      ],
      subcommands: [
        {
          name: "add",
          description: "Add a dependency to pubspec.yaml.",
          options: [
            ...globalOptions,
            {
              name: ["-d", "--dev"],
              description:
                "Adds package to the development dependencies instead.",
            },
            {
              name: "--git-url",
              description: "Git URL of the package",
            },
            {
              name: "--",
              description: "",
            },
            {
              name: "--",
              description: "",
            },
            {
              name: "--",
              description: "",
            },
            {
              name: "--",
              description: "",
            },
            {
              name: "--",
              description: "",
            },
            {
              name: "--",
              description: "",
            },
            {
              name: "--",
              description: "",
            },
            {
              name: ["-n", "--dry-run"],
              description: "",
            },
            {
              name: "--",
              description: "",
            },
          ],
          args: { name: "package" },
        },
        {
          name: "cache",
          description: "Work with the Pub system cache.",
        },
        {
          name: "deps",
          description: "Print package dependencies.",
        },
        {
          name: "downgrade",
          description: "Downgrade packages in a Flutter project.",
        },
        {
          name: "get",
          description: "Get packages in a Flutter project.",
        },
        {
          name: "global",
          description: "Work with Pub global packages.",
        },
        {
          name: "login",
          description: "Log into pub.dev",
        },
        {
          name: "logout",
          description: "Log out of pub.dev..",
        },
        {
          name: "outdated",
          description:
            "Analyze dependencies to find which ones can be upgraded.",
        },
        {
          name: "publish",
          description: "Publish the current package to pub.dartlang.org.",
        },
        {
          name: "remove",
          description: "Removes a dependency from the current package..",
        },
        {
          name: "upgrade",
          description:
            "Upgrade the current package's dependencies to latest versions.",
        },
        {
          name: "uploader",
          description: "Manage uploaders for a package on pub.dev.",
        },
      ],
    },
    {
      name: "run",
      description: "Run a Dart program.",
      options: [...globalOptions],
    },
    {
      name: "test",
      description: "Run tests for a project.",
      options: [...globalOptions],
    },
  ],
};

export default completionSpec;
