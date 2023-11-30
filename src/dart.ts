const dartEntryPoint: Fig.Arg = {
  name: "dart-entry-point",
  description: "The Dart file containing the main function",
};

const portOrBindAddress: Fig.Arg = {
  name: "port-or-address",
  description: "Port to observe",
};

const offline: Fig.Option = {
  name: "--offline",
  description: "Use cached packages instead of accessing the network",
  exclusiveOn: ["--no-offline"],
};

const noOffline: Fig.Option = {
  name: "--no-offline",
  description: "Do not use cached packages instead of accessing the network",
  exclusiveOn: ["--offline"],
};

const dryRun: Fig.Option = {
  name: ["-n", "--dry-run"],
  description: "Report what dependencies would change but don't change any",
};

const precompile: Fig.Option = {
  name: "--precompile",
  description: "Precompile executables in immediate dependencies",
  exclusiveOn: ["--no-precompile"],
};

const noPrecompile: Fig.Option = {
  name: "--no-precompile",
  description: "Do not precompile executables in immediate dependencies",
  exclusiveOn: ["--precompile"],
};

const enableAsserts: Fig.Option = {
  name: "--enable-asserts",
  description: "Enable assert statements",
  exclusiveOn: ["--no-enable-asserts"],
};

const noEnableAsserts: Fig.Option = {
  name: "--no-enable-asserts",
  description: "Do not enable assert statements",
  exclusiveOn: ["--enable-asserts"],
};

const define: Fig.Subcommand = {
  name: ["-D", "--define"],
  description:
    "Define an environment declaration. To specify multiple declarations, use multiple options or use commas to separate key-value pairs. For example: dart compile aot-snapshot -D a=1,b=2 main.dart",
  args: {
    name: "key-value-pairs",
    description: "Key-value pairs to define in Dart script",
    isVariadic: true,
  },
};

const verbosity: Fig.Option = {
  name: "--verbosity",
  description: "Sets the verbosity level of the compilation",
  args: {
    name: "verbosity-level",
    suggestions: [
      { name: "all", description: "Show all messages" },
      { name: "error", description: "Show only error messages" },
      {
        name: "info",
        description: "Show error, warning, and info messages",
      },
      {
        name: "warning",
        description: "Show only error and warning messages",
      },
    ],
  },
};

const globalOptions: Fig.Option[] = [
  {
    name: ["-h", "--help"],
    description: "Print this usage information",
  },
];

const compileOptions: Fig.Subcommand[] = [
  {
    name: ["-o", "--output"],
    description: "Write the output to <file-name>",
    args: { name: "dart-entry-point", template: "filepaths" },
  },
  verbosity,
];

const aotOptions: Fig.Subcommand[] = [
  define,
  {
    name: "--enable-asserts",
    description: "Enable assert statements",
  },
  {
    name: ["-p", "--packages"],
    description:
      "Get package locations from the specified file instead of .packages. <path> can be relative or absolute",
    args: {
      name: "args-path",
      description: "The path to draw packages from",
      template: "filepaths",
    },
  },
  {
    name: ["--no-sound-null-safety", "--sound-null-safety"],
    description: "Respect the nullability of types at runtime",
  },
  {
    name: ["-S", "--save-debugging-info"],
    description:
      "Remove debugging information from the output and save it separately to the specified file.. <path> can be relative or absolute",
    args: {
      name: "debug-info-path",
      description: "The path to write debugging info to",
      template: "filepaths",
    },
  },
];

const completionSpec: Fig.Spec = {
  name: "dart",
  description: "A command-line utility for Dart development",
  options: [
    ...globalOptions,
    {
      name: ["-v", "--verbose"],
      description: "Print verbose output",
    },
    {
      name: "--version",
      description: "Current Dart version",
    },
    {
      name: "--enable-analytics",
      description: "Enables analytics",
    },
    {
      name: "--disable-analytics",
      description: "Disables analytics",
    },
  ],
  subcommands: [
    {
      name: "analyze",
      description: "Analyze Dart code in a directory",
      options: [
        ...globalOptions,
        {
          name: "--fatal-infos",
          description: "Treat info level issues as fatal",
        },
        {
          name: "--fatal-warnings",
          description: "Treat warning level issues as fatal (defaults to on)",
          exclusiveOn: ["--no-fatal-warnings"],
        },
        {
          name: "--no-fatal-warnings",
          description:
            "Do not treat warning level issues as fatal (defaults to on)",
          exclusiveOn: ["--fatal-warnings"],
        },
      ],
      args: {
        name: "directory",
        description: "Dart project directory to analyze",
        template: "folders",
      },
    },
    {
      name: "compile",
      description: "Compile Dart to various formats",
      options: [...globalOptions],
      subcommands: [
        {
          name: "aot-snapshot",
          description: "Compile Dart to an AOT snapshot",
          args: dartEntryPoint,
          options: [...globalOptions, ...compileOptions, ...aotOptions],
        },
        {
          name: "exe",
          description: "Compile Dart to a self-contained executable",
          args: dartEntryPoint,
          options: [...globalOptions, ...compileOptions, ...aotOptions],
        },
        {
          name: "jit-snapshot",
          description: "Compile Dart to a JIT snapshot",
          args: dartEntryPoint,
          options: [...globalOptions, ...compileOptions],
        },
        {
          name: "js",
          description: "Compile Dart to JavaScript",
          args: dartEntryPoint,
          options: [
            ...globalOptions,
            ...compileOptions,
            {
              name: ["-m", "--minified"],
              description: "Generate minified output",
            },
            define,
          ],
        },
        {
          name: "kernel",
          description: "Compile Dart to a kernel snapshot",
          args: dartEntryPoint,
          options: [...globalOptions, ...compileOptions],
        },
      ],
    },
    {
      name: "create",
      description: "Create a new Dart project",
      options: [
        ...globalOptions,
        {
          name: ["-t", "--template"],
          description: "The project template to use",
          args: {
            name: "template-type",
            default: "console-simple",
            suggestions: [
              {
                name: "console",
                description: "A simple command-line application",
              },
              {
                name: "package",
                description:
                  "A starting point for Dart libraries or applications",
              },
              {
                name: "server-shelf",
                description: "A web server built using package:shelf",
              },
              {
                name: "web",
                description: "A web app that uses only core Dart libraries",
              },
            ],
          },
        },
        {
          name: "--pub",
          description:
            "Run 'pub get' after the project has been created. Default to on",
          exclusiveOn: ["--no-pub"],
        },
        {
          name: "--no-pub",
          description:
            "Do not run 'pub get' after the project has been created. Default to on",
          exclusiveOn: ["--pub"],
        },
        {
          name: "--force",
          description:
            "Force project generation, even if the target directory already exists",
        },
      ],
    },
    {
      name: "fix",
      description: "Apply automated fixes to Dart source code",
      options: [
        ...globalOptions,
        {
          name: ["-n", "--dry-run"],
          description: "Preview the proposed changes but make no changes",
        },
        {
          name: "--apply",
          description: "Apply the proposed changes",
        },
      ],
    },
    {
      name: "format",
      description: "Idiomatically format Dart source code",
      options: [
        ...globalOptions,
        {
          name: ["-v", "--verbose"],
          description: "Show all options and flags with --help",
        },
        {
          name: ["-o", "--output"],
          description: "Set where to write formatted output",
          args: [
            {
              name: "json",
              description: "Print code and selection as JSON",
            },
            {
              name: "none",
              description: "Discard output",
            },
            {
              name: "show",
              description: "Print code to terminal",
            },
            {
              name: "write",
              description: "Overwrite formatted files on disk",
            },
            {
              name: "--show",
              description: "Set which filenames to print",
              suggestions: [
                {
                  name: "all",
                  description: "All visited files and directories",
                },
                {
                  name: "changed",
                  description:
                    "Nly the names of files whose formatting is changed",
                },
                {
                  name: "none",
                  description: "No file names or directories",
                },
              ],
            },
            {
              name: "--summary",
              description: "Show the specified summary after formatting",
              suggestions: [
                {
                  name: "line",
                  description: "Single-line summary",
                },
                {
                  name: "none",
                  description: "No summary",
                },
                {
                  name: "profile",
                  description: "How long it took to format each file",
                },
              ],
            },
          ],
        },
        {
          name: "--set-exit-if-changed",
          description:
            "Return exist code 1 if there are any formatting changes",
        },
        {
          name: "--fix",
          description: "Apply all style fixes",
        },
        {
          name: "--fix-doc-comments",
          description: "Use triple slash for documentation comments",
        },
        {
          name: "--fix-function-typedefs",
          description: "Use new syntax for function type typedefs",
        },
        {
          name: "--fix-named-default-separator",
          description:
            "Use '=' as the separator before named parameter default values",
        },
        {
          name: "--fix-optional-const",
          description: "Remove 'const' keyword inside constant context",
        },
        {
          name: "--fix-optional-new",
          description: "Remove 'new' keyword",
        },
        {
          name: "--fix-single-cascade-statements",
          description:
            "Remove unnecessary single cascades from expression statements",
        },
        {
          name: ["-l", "--line-length"],
          description: "Wrap lines longer than this. Defaults to 80",
          args: {
            name: "line-length",
            description: "Line length to wrap",
            suggestions: ["80", "120"],
          },
        },
        {
          name: ["-i", "--indent"],
          description: "Add this many spaces of leading indentation",
          args: { name: "number-of-spaces" },
        },
        {
          name: "--follow-links",
          description:
            "Follow links to files and directories. If unset, links will be ignored",
        },
        {
          name: "--version",
          description: "Show dart_style version",
        },
        {
          name: "--selection",
          description:
            "Track selection (given as 'start:length') through formatting",
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
        description: "The files or directories to format",
        template: ["filepaths", "folders"],
      },
    },
    {
      name: "migrate",
      description: "Perform null safety migration on a project",
      options: [
        ...globalOptions,
        {
          name: ["-v", "--verbose"],
          description: "Show additional command output",
        },
        {
          name: "--apply-changes",
          description:
            "Apply the proposed null safety changes to the files on disk",
        },
        {
          name: "--ignore-errors",
          description:
            "Attempt to perform null safety analysis even if the project has analysis errors",
        },
        {
          name: "--skip-import-check",
          description:
            "Go ahead with migration even if some imported files have not yet been migrated",
        },
        {
          name: "--web-preview",
          description:
            "Show and interactive preview of the proposed null safety changes in a browser window. (defaults to on)",
          exclusiveOn: ["--no-web-preview"],
        },
        {
          name: "--no-web-preview",
          description:
            "Do not show and interactive preview of the proposed null safety changes in a browser window. (defaults to off)",
          exclusiveOn: ["--web-preview"],
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
            "Run the preview server on the specified port. If not specified, dynamically allocate a port",
          args: {
            name: "port",
          },
        },
        {
          name: "--summary",
          description: "Output a machine-readable summary of migration changes",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--ignore-exceptions",
          description:
            "Attempt to perform null safety analysis even if exceptions occur",
        },
        {
          name: "--sdk-path",
          description: "The path to the Dart SDK",
          args: { name: "sdk-path" },
        },
      ],
    },
    {
      name: "pub",
      description: "Work with packages",
      options: [
        ...globalOptions,
        {
          name: "--trace",
          description: "Print debugging information when an error occurs",
          exclusiveOn: ["--no-trace"],
        },
        {
          name: "--no-trace",
          description:
            "Do not print debugging information when an error occurs",
          exclusiveOn: ["--trace"],
        },
        {
          name: ["-v", "--verbose"],
          description: "Shortcut for '--verbose=all",
        },
      ],
      subcommands: [
        {
          name: "add",
          description: "Add a dependency to pubspec.yaml",
          options: [
            ...globalOptions,
            {
              name: ["-d", "--dev"],
              description:
                "Adds package to the development dependencies instead",
            },
            {
              name: "--git-url",
              description: "Git URL of the package",
            },
            {
              name: "--git-ref",
              description: "Git branch or commit to be retrieved",
            },
            {
              name: "--git-path",
              description: "Path of git package in repository",
            },
            {
              name: "--hosted-url",
              description: "URL of package host server",
            },
            {
              name: "--path",
              description: "Local path",
            },
            {
              name: "--sdk",
              description: "SDK source for package",
            },
            offline,
            noOffline,
            dryRun,
            precompile,
            noPrecompile,
          ],
          args: { name: "package", description: "Dart pub package name" },
        },
        {
          name: "cache",
          description: "Work with the Pub system cache",
          options: [...globalOptions],
          subcommands: [
            {
              name: "add",
              description: "Install a package",
              options: [
                ...globalOptions,
                {
                  name: "--all",
                  description: "Install all matching versions",
                },
                {
                  name: ["-v", "--version"],
                  description: "Version constraint",
                },
              ],
              args: { name: "package" },
            },
            {
              name: "repair",
              description: "Reinstall a cached package",
              options: globalOptions,
            },
          ],
        },
        {
          name: "deps",
          description: "Print package dependencies",
          options: [
            ...globalOptions,
            {
              name: ["-s", "--style"],
              description: "How output should be displayed",
              args: {
                name: "style",
                suggestions: ["compact", "tree", "list"],
              },
            },
            {
              name: "--dev",
              description: "Include dev dependencies. (defaults to on)",
              exclusiveOn: ["--no-dev"],
            },
            {
              name: "--no-dev",
              description: "Do not include dev dependencies. (defaults to off)",
              exclusiveOn: ["--dev"],
            },
            {
              name: "--executables",
              description: "List all available executables",
            },
          ],
        },
        {
          name: "downgrade",
          description: "Downgrade packages in a Flutter project",
          options: [...globalOptions, offline, noOffline, dryRun],
        },
        {
          name: "get",
          description: "Get packages in a Flutter project",
          options: [
            ...globalOptions,
            offline,
            noOffline,
            dryRun,
            precompile,
            noPrecompile,
          ],
        },
        {
          name: "global",
          description: "Work with Pub global packages",
          options: globalOptions,
          subcommands: [
            {
              name: "activate",
              description: "Make a package's executables globally available",
              options: [
                ...globalOptions,
                {
                  name: ["-s", "--source"],
                  description: "The source used to find the package",
                  args: {
                    name: "source",
                    suggestions: ["git", "hosted", "path"],
                  },
                },
                {
                  name: "--no-executables",
                  description: "Do not put executables on PATH",
                },
                {
                  name: ["-x", "--executable"],
                  description: "Executable(s) to place on PATH",
                },
                {
                  name: "--overwrite",
                  description:
                    "Overwrite executables from other packages with the same name",
                },
                {
                  name: ["-u", "--hosted-url"],
                  description:
                    "A custom pub server URL for the package. Only applies when using the 'hosted' source",
                  args: { name: "url" },
                },
              ],
            },
            {
              name: "deactivate",
              description: "Remove a previously activated package",
              options: globalOptions,
            },
            {
              name: "list",
              description: "List globally activated packages",
              options: globalOptions,
            },
            {
              name: "run",
              description:
                "Run an executable from a globally activated package",
              options: [
                ...globalOptions,
                enableAsserts,
                noEnableAsserts,
                {
                  name: "--enable-experiment",
                  description:
                    "Runs the executable in a VM with the given experiments enabled. (Will disable snapshotting, resulting in slower startup)",
                  args: { name: "experiment" },
                },
                {
                  name: "--sound-null-safety",
                  description:
                    "Override the default null safety execution mode",
                  exclusiveOn: ["--no-sound-null-safety"],
                },
                {
                  name: "--no-sound-null-safety",
                  description:
                    "Do not override the default null safety execution mode",
                  exclusiveOn: ["--sound-null-safety"],
                },
              ],
            },
          ],
        },
        {
          name: "login",
          description: "Log into pub.dev",
          options: globalOptions,
        },
        {
          name: "logout",
          description: "Log out of pub.dev",
          options: globalOptions,
        },
        {
          name: "outdated",
          description:
            "Analyze dependencies to find which ones can be upgraded",
          options: [
            ...globalOptions,
            {
              name: "--color",
              description:
                "Color the the output. Defaults to color when connected to a terminal, and no-color otherwise",
              exclusiveOn: ["--no-color"],
            },
            {
              name: "--no-color",
              description:
                "Do not color the output. Defaults to color when connected to a terminal, and no-color otherwise",
              exclusiveOn: ["--color"],
            },
            {
              name: "--dependency-overrides",
              description:
                "Show resolutions with 'dependency_overrides'. (defaults to on)",
              exclusiveOn: ["--no-dependency-overrides"],
            },
            {
              name: "--no-dependency-overrides",
              description:
                "Do not show resolutions with 'dependency_overrides'. (defaults to on)",
              exclusiveOn: ["--dependency-overrides"],
            },
            {
              name: "--json",
              description: "Output the results sing a JSON format",
            },
            {
              name: "--mode",
              description:
                "Highlight versions with PROPERTY. Only packages missing the PROPERTY will be included unless --show-all",
              args: {
                name: "property",
                suggestions: ["outdated", "null-safety"],
              },
            },
            {
              name: "--prereleases",
              description:
                "Include prereleases in latest version. (defaults to on in --mode=null-safety)",
              exclusiveOn: ["--no-prereleases"],
            },
            {
              name: "--no-prereleases",
              description:
                "Do not include prereleases in latest version. (defaults to off in --mode=null-safety)",
              exclusiveOn: ["--prereleases"],
            },
            {
              name: "--show-all",
              description:
                "Include dependencies that are already fulfilling --mode",
              exclusiveOn: ["--no-show-all"],
            },
            {
              name: "--no-show-all",
              description:
                "Do not include dependencies that are already fulfilling --mode",
              exclusiveOn: ["--show-all"],
            },
            {
              name: ["--transitive", "--no-transitive"],
              description:
                "Show transitive dependencies. (defaults to off in --mode=null-safety",
            },
          ],
        },
        {
          name: "publish",
          description: "Publish the current package to pub.dartlang.org",
          options: [
            ...globalOptions,
            dryRun,
            {
              name: ["-f", "--force"],
              description:
                "Publish without confirmation if there are no errors",
            },
          ],
        },
        {
          name: "remove",
          description: "Removes a dependency from the current package",
          options: [
            ...globalOptions,
            offline,
            noOffline,
            dryRun,
            precompile,
            noPrecompile,
          ],
        },
        {
          name: "upgrade",
          description:
            "Upgrade the current package's dependencies to latest versions",
          options: [
            ...globalOptions,
            offline,
            noOffline,
            dryRun,
            precompile,
            noPrecompile,
            {
              name: "--null-safety",
              description:
                "Upgrade constraints in pubspec.yaml to null-safety versions",
            },
            {
              name: "--major-versions",
              description:
                "Upgrades packages to their latest resolvable versions, and updates pubspec.yaml",
            },
          ],
        },
        {
          name: "uploader",
          description: "Manage uploaders for a package on pub.dev",
          options: [
            ...globalOptions,
            {
              name: "--package",
              description:
                "The package whose uploaders will be modified. (defaults to the current package)",
            },
          ],
        },
      ],
    },
    {
      name: "run",
      description: "Run a Dart program",
      options: [
        ...globalOptions,
        {
          name: "--observe",
          description:
            "The observe flag is a convenience flag used to run a program with a set of common options. Useful for debugging",
          args: portOrBindAddress,
        },
        {
          name: "--enable-vm-service",
          description:
            "Enables the VM service and listens on the specified port for connections (default port number is 8181, default dind address is localhost)",
          args: portOrBindAddress,
        },
        {
          name: ["--pause-isolates-on-exit", "--no-pause-isolates-on-exit"],
          description:
            "Pause isolates on exit when running with --enable-vm-service",
        },
        {
          name: "--pause-isolates-on-unhandled-exceptions",
          description:
            "Pause isolates when an unhandled exception is encountered when running with --enable-vm-service",
          exclusiveOn: ["--no-pause-isolates-on-unhandled-exceptions"],
        },
        {
          name: "--no-pause-isolates-on-unhandled-exceptions",
          description:
            "Do not pause isolates when an unhandled exception is encountered when running with --enable-vm-service",
          exclusiveOn: ["--pause-isolates-on-unhandled-exceptions"],
        },
        {
          name: "--warn-on-pause-with-no-debugger",
          description:
            "Print a warning when an isolate pauses with no attahed debugger when running with --enable-vm-service",
          exclusiveOn: ["--no-warn-on-pause-with-no-debugger"],
        },
        {
          name: "--no-warn-on-pause-with-no-debugger",
          description:
            "Do not print a warning when an isolate pauses with no attahed debugger when running with --enable-vm-service",
          exclusiveOn: ["--warn-on-pause-with-no-debugger"],
        },
        {
          name: "--pause-isolates-on-start",
          description:
            "Pause isolates on start when running with --enable-vm-service",
          exclusiveOn: ["--no-pause-isolates-on-start"],
        },
        {
          name: "--no-pause-isolates-on-start",
          description:
            "Do not pause isolates on start when running with --enable-vm-service",
          exclusiveOn: ["--pause-isolates-on-start"],
        },
        enableAsserts,
        noEnableAsserts,
        verbosity,
        define,
        {
          name: "--disable-service-auth-codes",
          description:
            "Disables the requirement for an authentication code to communicate with the VM service. Authentication codes help protect against CSRF attacks, so it is not recommended to disable them unless behind a firewall on a secure device",
        },
        {
          name: "--enable-service-port-fallback",
          description:
            "When the VM service is told to bind to a particular port, fallback to 0 if it fails to bind instead of failing to start",
        },
        {
          name: "--namespace",
          description:
            "The path to a directory that dart:io calls will treat as the root of the filesystem",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: "--root-certs-file",
          description:
            "The The path to a file containing the trusted root certificates to use for secure socket connections",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          name: "--root-certs-cache",
          description:
            "The path to a cache directory containing the trusted root certificates to use for secure socket connections",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: "--trace-loading",
          description: "Enables tracing of library and script loading",
        },
        {
          name: "--enable-experiment",
          description:
            "Enable one or more experimental features (see dart.dev/go/experiments",
          args: {
            name: "experiment",
            suggestions: [
              {
                name: "const-functions",
                description:
                  "Allow more of the Dart language to be executed in const expressions",
              },
              {
                name: "extension-methods",
                description: "Extension methods (no-op - enabled by default)",
              },
              {
                name: "extension-types",
                description: "Extension types",
              },
              {
                name: "generic-metadata",
                description:
                  "Allow annotations to accept type arguments; also allow generic function types as type arguments",
              },
              {
                name: "non-nullable",
                description: "Non-nullable by default. (no-op - on by default)",
              },
              {
                name: "nonfunction-type-aliases",
                description:
                  "Type aliases define a <type>, not just <functionType>. (no-op - enabled by default)",
              },
              {
                name: "triple-shift",
                description: "Triple-shift operator",
              },
              {
                name: "value-class",
                description: "Value classes",
              },
              {
                name: "variance",
                description: "Sound variance",
              },
            ],
          },
        },
      ],
    },
    {
      name: "test",
      description: "Run tests for a project",
      options: [...globalOptions],
    },
  ],
};

export default completionSpec;
