import {
  generateDocs,
  generateInstalledDenoScripts,
  generateLintRules,
  generateTasks,
  generateVersions,
  generateUrlScript,
} from "./deno/generators";

const completion: Fig.Spec = {
  name: "deno",
  description: "A modern JavaScript and TypeScript runtime",
  subcommands: [
    {
      name: "bench",
      description: "Run benchmarks",
      options: [
        {
          name: "--import-map",
          description: "Load import map file",
          args: {
            name: "import-map",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-c", "--config"],
          description: "Specify the configuration file",
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--no-check",
          description: "Skip type-checking modules",
          args: {
            name: "no-check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["remote"],
          },
          requiresSeparator: true,
        },
        {
          name: "--check",
          description: "Type-check modules",
          exclusiveOn: ["--no-check"],
          args: {
            name: "check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["all"],
          },
          requiresSeparator: true,
        },
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          args: {
            name: "reload",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--lock",
          description: "Check the specified lock file",
          args: {
            name: "lock",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--cert",
          description: "Load certificate authority from PEM encoded file",
          args: {
            name: "cert",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--allow-read",
          description: "Allow file system read access",
          args: {
            name: "allow-read",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-write",
          description: "Allow file system write access",
          args: {
            name: "allow-write",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-net",
          description: "Allow network access",
          args: {
            name: "allow-net",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--unsafely-ignore-certificate-errors",
          description: "DANGER: Disables verification of TLS certificates",
          args: {
            name: "unsafely-ignore-certificate-errors",
            isVariadic: true,
            isOptional: true,
            description: "Scope ignoring certificate errors to these hosts",
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-env",
          description: "Allow environment access",
          args: {
            name: "allow-env",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-run",
          description: "Allow running subprocesses",
          args: {
            name: "allow-run",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-ffi",
          description: "Allow loading dynamic libraries",
          args: {
            name: "allow-ffi",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--location",
          description: "Value of 'globalThis.location' used by some web APIs",
          args: {
            name: "location",
            isOptional: true,
          },
        },
        {
          name: "--v8-flags",
          description: "Set V8 command line options",
          args: {
            name: "v8-flags",
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--seed",
          description: "Set the random number generator seed",
          args: {
            name: "seed",
            isOptional: true,
          },
        },
        {
          name: "--ignore",
          description: "Ignore files",
          args: {
            name: "ignore",
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--filter",
          description:
            "Run benchmarks with this string or pattern in the bench name",
          args: {
            name: "filter",
            isOptional: true,
          },
        },
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: "--no-remote",
          description: "Do not resolve remote modules",
        },
        {
          name: "--no-config",
          description: "Disable automatic loading of the configuration file",
          exclusiveOn: ["-c", "--config"],
        },
        {
          name: "--lock-write",
          description: "Write lock file (use with --lock)",
        },
        {
          name: "--allow-hrtime",
          description: "Allow high resolution time measurement",
        },
        {
          name: ["-A", "--allow-all"],
          description: "Allow all permissions",
        },
        {
          name: "--prompt",
          description:
            "Deprecated: Fallback to prompt if required permission wasn't passed",
        },
        {
          name: "--no-prompt",
          description: "Always throw if required permission wasn't passed",
        },
        {
          name: "--cached-only",
          description: "Require that remote dependencies are already cached",
        },
        {
          name: "--enable-testing-features-do-not-use",
          description:
            "INTERNAL: Enable internal features used during integration testing",
        },
        {
          name: "--compat",
          description: "UNSTABLE: Node compatibility mode",
        },
        {
          name: "--watch",
          description: "Watch for file changes and restart automatically",
        },
        {
          name: "--no-clear-screen",
          description: "Do not clear terminal screen when under watch mode",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: [
        {
          name: "files",
          isVariadic: true,
          isOptional: true,
          template: "filepaths",
        },
        {
          name: "script_arg",
          isVariadic: true,
          isOptional: true,
          template: "filepaths",
        },
      ],
    },
    {
      name: "bundle",
      description: "Bundle module and dependencies into single file",
      options: [
        {
          name: "--import-map",
          description: "Load import map file",
          args: {
            name: "import-map",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-c", "--config"],
          description: "Specify the configuration file",
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--no-check",
          description: "Skip type-checking modules",
          args: {
            name: "no-check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["remote"],
          },
          requiresSeparator: true,
        },
        {
          name: "--check",
          description: "Type-check modules",
          exclusiveOn: ["--no-check"],
          args: {
            name: "check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["all"],
          },
          requiresSeparator: true,
        },
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          args: {
            name: "reload",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--lock",
          description: "Check the specified lock file",
          args: {
            name: "lock",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--cert",
          description: "Load certificate authority from PEM encoded file",
          args: {
            name: "cert",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: "--no-remote",
          description: "Do not resolve remote modules",
        },
        {
          name: "--no-config",
          description: "Disable automatic loading of the configuration file",
          exclusiveOn: ["-c", "--config"],
        },
        {
          name: "--lock-write",
          description: "Write lock file (use with --lock)",
        },
        {
          name: "--watch",
          description: "Watch for file changes and restart automatically",
        },
        {
          name: "--no-clear-screen",
          description: "Do not clear terminal screen when under watch mode",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: [
        {
          name: "source_file",
          template: "filepaths",
        },
        {
          name: "out_file",
          isOptional: true,
          template: "filepaths",
        },
      ],
    },
    {
      name: "cache",
      description: "Cache the dependencies",
      options: [
        {
          name: "--import-map",
          description: "Load import map file",
          args: {
            name: "import-map",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-c", "--config"],
          description: "Specify the configuration file",
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--no-check",
          description: "Skip type-checking modules",
          args: {
            name: "no-check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["remote"],
          },
          requiresSeparator: true,
        },
        {
          name: "--check",
          description: "Type-check modules",
          exclusiveOn: ["--no-check"],
          args: {
            name: "check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["all"],
          },
          requiresSeparator: true,
        },
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          args: {
            name: "reload",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--lock",
          description: "Check the specified lock file",
          args: {
            name: "lock",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--cert",
          description: "Load certificate authority from PEM encoded file",
          args: {
            name: "cert",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: "--no-remote",
          description: "Do not resolve remote modules",
        },
        {
          name: "--no-config",
          description: "Disable automatic loading of the configuration file",
          exclusiveOn: ["-c", "--config"],
        },
        {
          name: "--lock-write",
          description: "Write lock file (use with --lock)",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "file",
        isVariadic: true,
        template: "filepaths",
      },
    },
    {
      name: "check",
      description: "Type-check the dependencies",
      options: [
        {
          name: "--import-map",
          description: "Load import map file",
          args: {
            name: "import-map",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-c", "--config"],
          description: "Specify the configuration file",
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          args: {
            name: "reload",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--lock",
          description: "Check the specified lock file",
          args: {
            name: "lock",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--cert",
          description: "Load certificate authority from PEM encoded file",
          args: {
            name: "cert",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: "--no-remote",
          description: "Do not resolve remote modules",
        },
        {
          name: "--no-config",
          description: "Disable automatic loading of the configuration file",
          exclusiveOn: ["-c", "--config"],
        },
        {
          name: "--lock-write",
          description: "Write lock file (use with --lock)",
        },
        {
          name: "--remote",
          description: "Type-check all modules, including remote",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "file",
        isVariadic: true,
        template: "filepaths",
      },
    },
    {
      name: "compile",
      description:
        "UNSTABLE: Compile the script into a self contained executable",
      options: [
        {
          name: "--import-map",
          description: "Load import map file",
          args: {
            name: "import-map",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-c", "--config"],
          description: "Specify the configuration file",
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--no-check",
          description: "Skip type-checking modules",
          args: {
            name: "no-check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["remote"],
          },
          requiresSeparator: true,
        },
        {
          name: "--check",
          description: "Type-check modules",
          exclusiveOn: ["--no-check"],
          args: {
            name: "check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["all"],
          },
          requiresSeparator: true,
        },
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          args: {
            name: "reload",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--lock",
          description: "Check the specified lock file",
          args: {
            name: "lock",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--cert",
          description: "Load certificate authority from PEM encoded file",
          args: {
            name: "cert",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--allow-read",
          description: "Allow file system read access",
          args: {
            name: "allow-read",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-write",
          description: "Allow file system write access",
          args: {
            name: "allow-write",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-net",
          description: "Allow network access",
          args: {
            name: "allow-net",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--unsafely-ignore-certificate-errors",
          description: "DANGER: Disables verification of TLS certificates",
          args: {
            name: "unsafely-ignore-certificate-errors",
            isVariadic: true,
            isOptional: true,
            description: "Scope ignoring certificate errors to these hosts",
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-env",
          description: "Allow environment access",
          args: {
            name: "allow-env",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-run",
          description: "Allow running subprocesses",
          args: {
            name: "allow-run",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-ffi",
          description: "Allow loading dynamic libraries",
          args: {
            name: "allow-ffi",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--location",
          description: "Value of 'globalThis.location' used by some web APIs",
          args: {
            name: "location",
            isOptional: true,
          },
        },
        {
          name: "--v8-flags",
          description: "Set V8 command line options",
          args: {
            name: "v8-flags",
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--seed",
          description: "Set the random number generator seed",
          args: {
            name: "seed",
            isOptional: true,
          },
        },
        {
          name: ["-o", "--output"],
          description: "Output file (defaults to $PWD/<inferred-name>)",
          args: {
            name: "output",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--target",
          description: "Target OS architecture",
          args: {
            name: "target",
            isOptional: true,
            suggestions: [
              "x86_64-unknown-linux-gnu",
              "x86_64-pc-windows-msvc",
              "x86_64-apple-darwin",
              "aarch64-apple-darwin",
            ],
          },
        },
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: "--no-remote",
          description: "Do not resolve remote modules",
        },
        {
          name: "--no-config",
          description: "Disable automatic loading of the configuration file",
          exclusiveOn: ["-c", "--config"],
        },
        {
          name: "--lock-write",
          description: "Write lock file (use with --lock)",
        },
        {
          name: "--allow-hrtime",
          description: "Allow high resolution time measurement",
        },
        {
          name: ["-A", "--allow-all"],
          description: "Allow all permissions",
        },
        {
          name: "--prompt",
          description:
            "Deprecated: Fallback to prompt if required permission wasn't passed",
        },
        {
          name: "--no-prompt",
          description: "Always throw if required permission wasn't passed",
        },
        {
          name: "--cached-only",
          description: "Require that remote dependencies are already cached",
        },
        {
          name: "--enable-testing-features-do-not-use",
          description:
            "INTERNAL: Enable internal features used during integration testing",
        },
        {
          name: "--compat",
          description: "UNSTABLE: Node compatibility mode",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "script_arg",
        isVariadic: true,
        isScript: true,
        generators: [{ template: "filepaths" }, generateUrlScript],
      },
      parserDirectives: {
        optionsMustPrecedeArguments: true,
      },
    },
    {
      name: "completions",
      description: "Generate shell completions",
      options: [
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "shell",
        suggestions: ["bash", "fish", "powershell", "zsh", "fig"],
      },
    },
    {
      name: "coverage",
      description: "Print coverage reports",
      options: [
        {
          name: "--ignore",
          description: "Ignore coverage files",
          args: {
            name: "ignore",
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--include",
          description: "Include source files in the report",
          isRepeatable: true,
          args: {
            name: "include",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--exclude",
          description: "Exclude source files from the report",
          isRepeatable: true,
          args: {
            name: "exclude",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--output",
          description: "Output file (defaults to stdout) for lcov",
          args: {
            name: "output",
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: "--lcov",
          description: "Output coverage report in lcov format",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "files",
        isVariadic: true,
        template: "filepaths",
      },
    },
    {
      name: "doc",
      description: "Show documentation for a module",
      options: [
        {
          name: "--import-map",
          description: "Load import map file",
          args: {
            name: "import-map",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          args: {
            name: "reload",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: "--json",
          description: "Output documentation in JSON format",
        },
        {
          name: "--private",
          description: "Output private documentation",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: [
        {
          name: "source_file",
          isOptional: true,
          generators: [{ template: "filepaths" }, generateUrlScript],
          suggestions: [
            {
              name: "--builtin",
              description: "Get documentation for built-in symbols",
              icon: "fig://icon?type=option",
              type: "option",
            },
          ],
        },
        {
          name: "filter",
          isOptional: true,
          generators: generateDocs,
        },
      ],
    },
    {
      name: "eval",
      description: "Eval script",
      insertValue: "eval '{cursor}'",
      options: [
        {
          name: "--import-map",
          description: "Load import map file",
          args: {
            name: "import-map",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-c", "--config"],
          description: "Specify the configuration file",
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--no-check",
          description: "Skip type-checking modules",
          args: {
            name: "no-check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["remote"],
          },
          requiresSeparator: true,
        },
        {
          name: "--check",
          description: "Type-check modules",
          exclusiveOn: ["--no-check"],
          args: {
            name: "check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["all"],
          },
          requiresSeparator: true,
        },
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          args: {
            name: "reload",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--lock",
          description: "Check the specified lock file",
          args: {
            name: "lock",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--cert",
          description: "Load certificate authority from PEM encoded file",
          args: {
            name: "cert",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--inspect",
          description:
            "Activate inspector on host:port (default: 127.0.0.1:9229)",
          args: {
            name: "inspect",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--inspect-brk",
          description:
            "Activate inspector on host:port and break at start of user script",
          args: {
            name: "inspect-brk",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--location",
          description: "Value of 'globalThis.location' used by some web APIs",
          args: {
            name: "location",
            isOptional: true,
          },
        },
        {
          name: "--v8-flags",
          description: "Set V8 command line options",
          args: {
            name: "v8-flags",
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--seed",
          description: "Set the random number generator seed",
          args: {
            name: "seed",
            isOptional: true,
          },
        },
        {
          name: "--ext",
          description: "Set standard input (stdin) content type",
          args: {
            name: "ext",
            isOptional: true,
            suggestions: ["ts", "tsx", "js", "jsx"],
          },
        },
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: "--no-remote",
          description: "Do not resolve remote modules",
        },
        {
          name: "--no-config",
          description: "Disable automatic loading of the configuration file",
          exclusiveOn: ["-c", "--config"],
        },
        {
          name: "--lock-write",
          description: "Write lock file (use with --lock)",
        },
        {
          name: "--cached-only",
          description: "Require that remote dependencies are already cached",
        },
        {
          name: "--enable-testing-features-do-not-use",
          description:
            "INTERNAL: Enable internal features used during integration testing",
        },
        {
          name: "--compat",
          description: "UNSTABLE: Node compatibility mode",
        },
        {
          name: ["-T", "--ts"],
          description: "Treat eval input as TypeScript",
        },
        {
          name: ["-p", "--print"],
          description: "Print result to stdout",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "code_arg",
        isVariadic: true,
      },
    },
    {
      name: "fmt",
      description: "Format source files",
      options: [
        {
          name: ["-c", "--config"],
          description: "Specify the configuration file",
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--ext",
          description: "Set standard input (stdin) content type",
          args: {
            name: "ext",
            isOptional: true,
            suggestions: ["ts", "tsx", "js", "jsx", "md", "json", "jsonc"],
          },
        },
        {
          name: "--ignore",
          description: "Ignore formatting particular source files",
          args: {
            name: "ignore",
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--options-line-width",
          description: "Define maximum line width. Defaults to 80",
          args: {
            name: "options-line-width",
            isOptional: true,
          },
        },
        {
          name: "--options-indent-width",
          description: "Define indentation width. Defaults to 2",
          args: {
            name: "options-indent-width",
            isOptional: true,
          },
        },
        {
          name: "--options-prose-wrap",
          description: "Define how prose should be wrapped. Defaults to always",
          args: {
            name: "options-prose-wrap",
            isOptional: true,
            suggestions: ["always", "never", "preserve"],
          },
        },
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: "--no-config",
          description: "Disable automatic loading of the configuration file",
          exclusiveOn: ["-c", "--config"],
        },
        {
          name: "--check",
          description: "Check if the source files are formatted",
        },
        {
          name: "--watch",
          description: "Watch for file changes and restart automatically",
        },
        {
          name: "--no-clear-screen",
          description: "Do not clear terminal screen when under watch mode",
        },
        {
          name: "--options-use-tabs",
          description:
            "Use tabs instead of spaces for indentation. Defaults to false",
        },
        {
          name: "--options-single-quote",
          description: "Use single quotes. Defaults to false",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "files",
        isVariadic: true,
        isOptional: true,
        template: "filepaths",
        suggestions: [
          { name: "-", description: "Read from standard input", hidden: true },
        ],
      },
    },
    {
      name: "init",
      description: "Initialize a new project",
      options: [
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "dir",
        isOptional: true,
        template: "folders",
      },
    },
    {
      name: "info",
      description: "Show info about cache or info related to source file",
      options: [
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          args: {
            name: "reload",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--cert",
          description: "Load certificate authority from PEM encoded file",
          args: {
            name: "cert",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--location",
          description:
            "Show files used for origin bound APIs like the Web Storage API when running a script with '--location=<HREF>'",
          args: {
            name: "location",
            isOptional: true,
          },
        },
        {
          name: "--no-check",
          description: "Skip type-checking modules",
          hidden: true,
          args: {
            name: "no-check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["remote"],
          },
          requiresSeparator: true,
        },
        {
          name: ["-c", "--config"],
          description: "Specify the configuration file",
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--import-map",
          description: "Load import map file",
          args: {
            name: "import-map",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: "--no-config",
          description: "Disable automatic loading of the configuration file",
          exclusiveOn: ["-c", "--config"],
        },
        {
          name: "--json",
          description: "UNSTABLE: Outputs the information in JSON format",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "file",
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "install",
      description: "Install script as an executable",
      options: [
        {
          name: "--import-map",
          description: "Load import map file",
          args: {
            name: "import-map",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-c", "--config"],
          description: "Specify the configuration file",
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--no-check",
          description: "Skip type-checking modules",
          args: {
            name: "no-check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["remote"],
          },
          requiresSeparator: true,
        },
        {
          name: "--check",
          description: "Type-check modules",
          exclusiveOn: ["--no-check"],
          args: {
            name: "check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["all"],
          },
          requiresSeparator: true,
        },
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          args: {
            name: "reload",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--lock",
          description: "Check the specified lock file",
          args: {
            name: "lock",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--cert",
          description: "Load certificate authority from PEM encoded file",
          args: {
            name: "cert",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--allow-read",
          description: "Allow file system read access",
          args: {
            name: "allow-read",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-write",
          description: "Allow file system write access",
          args: {
            name: "allow-write",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-net",
          description: "Allow network access",
          args: {
            name: "allow-net",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--unsafely-ignore-certificate-errors",
          description: "DANGER: Disables verification of TLS certificates",
          args: {
            name: "unsafely-ignore-certificate-errors",
            isVariadic: true,
            isOptional: true,
            description: "Scope ignoring certificate errors to these hosts",
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-env",
          description: "Allow environment access",
          args: {
            name: "allow-env",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-run",
          description: "Allow running subprocesses",
          args: {
            name: "allow-run",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-ffi",
          description: "Allow loading dynamic libraries",
          args: {
            name: "allow-ffi",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--inspect",
          description:
            "Activate inspector on host:port (default: 127.0.0.1:9229)",
          args: {
            name: "inspect",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--inspect-brk",
          description:
            "Activate inspector on host:port and break at start of user script",
          args: {
            name: "inspect-brk",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--location",
          description: "Value of 'globalThis.location' used by some web APIs",
          args: {
            name: "location",
            isOptional: true,
          },
        },
        {
          name: "--v8-flags",
          description: "Set V8 command line options",
          args: {
            name: "v8-flags",
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--seed",
          description: "Set the random number generator seed",
          args: {
            name: "seed",
            isOptional: true,
          },
        },
        {
          name: ["-n", "--name"],
          description: "Executable file name",
          args: {
            name: "name",
            isOptional: true,
          },
        },
        {
          name: "--root",
          description: "Installation root",
          args: {
            name: "root",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: "--no-remote",
          description: "Do not resolve remote modules",
        },
        {
          name: "--no-config",
          description: "Disable automatic loading of the configuration file",
          exclusiveOn: ["-c", "--config"],
        },
        {
          name: "--lock-write",
          description: "Write lock file (use with --lock)",
        },
        {
          name: "--allow-hrtime",
          description: "Allow high resolution time measurement",
        },
        {
          name: ["-A", "--allow-all"],
          description: "Allow all permissions",
        },
        {
          name: "--prompt",
          description:
            "Deprecated: Fallback to prompt if required permission wasn't passed",
        },
        {
          name: "--no-prompt",
          description: "Always throw if required permission wasn't passed",
        },
        {
          name: "--cached-only",
          description: "Require that remote dependencies are already cached",
        },
        {
          name: "--enable-testing-features-do-not-use",
          description:
            "INTERNAL: Enable internal features used during integration testing",
        },
        {
          name: "--compat",
          description: "UNSTABLE: Node compatibility mode",
        },
        {
          name: ["-f", "--force"],
          description: "Forcefully overwrite existing installation",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "cmd",
        isVariadic: true,
        isScript: true,
        generators: [{ template: "filepaths" }, generateUrlScript],
      },
      parserDirectives: {
        optionsMustPrecedeArguments: true,
      },
    },
    {
      name: "uninstall",
      description: "Uninstall a script previously installed with deno install",
      options: [
        {
          name: "--root",
          description: "Installation root",
          args: {
            name: "root",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "name",
        generators: generateInstalledDenoScripts,
      },
    },
    {
      name: "lsp",
      description: "Start the language server",
      options: [
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
    },
    {
      name: "lint",
      description: "Lint source files",
      options: [
        {
          name: "--rules-tags",
          description: "Use set of rules with a tag",
          exclusiveOn: ["--rules"],
          args: {
            name: "rules-tags",
            isOptional: true,
            generators: generateLintRules,
          },
          requiresSeparator: true,
        },
        {
          name: "--rules-include",
          description: "Include lint rules",
          exclusiveOn: ["--rules"],
          args: {
            name: "rules-include",
            isOptional: true,
            generators: generateLintRules,
          },
          requiresSeparator: true,
        },
        {
          name: "--rules-exclude",
          description: "Exclude lint rules",
          exclusiveOn: ["--rules"],
          args: {
            name: "rules-exclude",
            isOptional: true,
            generators: generateLintRules,
          },
          requiresSeparator: true,
        },
        {
          name: ["-c", "--config"],
          description: "Specify the configuration file",
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--ignore",
          description: "Ignore linting particular source files",
          args: {
            name: "ignore",
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: "--rules",
          description: "List available rules",
        },
        {
          name: "--no-config",
          description: "Disable automatic loading of the configuration file",
          exclusiveOn: ["-c", "--config"],
        },
        {
          name: "--json",
          description: "Output lint result in JSON format",
        },
        {
          name: "--watch",
          description: "Watch for file changes and restart automatically",
        },
        {
          name: "--no-clear-screen",
          description: "Do not clear terminal screen when under watch mode",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "files",
        isVariadic: true,
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "repl",
      description: "Read Eval Print Loop",
      options: [
        {
          name: "--import-map",
          description: "Load import map file",
          args: {
            name: "import-map",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-c", "--config"],
          description: "Specify the configuration file",
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--no-check",
          description: "Skip type-checking modules",
          args: {
            name: "no-check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["remote"],
          },
          requiresSeparator: true,
        },
        {
          name: "--check",
          description: "Type-check modules",
          exclusiveOn: ["--no-check"],
          args: {
            name: "check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["all"],
          },
          requiresSeparator: true,
        },
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          args: {
            name: "reload",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--lock",
          description: "Check the specified lock file",
          args: {
            name: "lock",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--cert",
          description: "Load certificate authority from PEM encoded file",
          args: {
            name: "cert",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--inspect",
          description:
            "Activate inspector on host:port (default: 127.0.0.1:9229)",
          args: {
            name: "inspect",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--inspect-brk",
          description:
            "Activate inspector on host:port and break at start of user script",
          args: {
            name: "inspect-brk",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--location",
          description: "Value of 'globalThis.location' used by some web APIs",
          args: {
            name: "location",
            isOptional: true,
          },
        },
        {
          name: "--v8-flags",
          description: "Set V8 command line options",
          args: {
            name: "v8-flags",
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--seed",
          description: "Set the random number generator seed",
          args: {
            name: "seed",
            isOptional: true,
          },
        },
        {
          name: "--eval-file",
          description:
            "Evaluates the provided file(s) as scripts when the REPL starts. Accepts file paths and URLs",
          args: {
            name: "eval-file",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--eval",
          description: "Evaluates the provided code when the REPL starts",
          args: {
            name: "eval",
            isOptional: true,
          },
        },
        {
          name: "--unsafely-ignore-certificate-errors",
          description: "DANGER: Disables verification of TLS certificates",
          args: {
            name: "unsafely-ignore-certificate-errors",
            isVariadic: true,
            isOptional: true,
            description: "Scope ignoring certificate errors to these hosts",
          },
          requiresSeparator: true,
        },
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: "--no-remote",
          description: "Do not resolve remote modules",
        },
        {
          name: "--no-config",
          description: "Disable automatic loading of the configuration file",
          exclusiveOn: ["-c", "--config"],
        },
        {
          name: "--lock-write",
          description: "Write lock file (use with --lock)",
        },
        {
          name: "--cached-only",
          description: "Require that remote dependencies are already cached",
        },
        {
          name: "--enable-testing-features-do-not-use",
          description:
            "INTERNAL: Enable internal features used during integration testing",
        },
        {
          name: "--compat",
          description: "UNSTABLE: Node compatibility mode",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
    },
    {
      name: "run",
      description: "Run a JavaScript or TypeScript program",
      options: [
        {
          name: "--import-map",
          description: "Load import map file",
          args: {
            name: "import-map",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-c", "--config"],
          description: "Specify the configuration file",
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--no-check",
          description: "Skip type-checking modules",
          args: {
            name: "no-check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["remote"],
          },
          requiresSeparator: true,
        },
        {
          name: "--check",
          description: "Type-check modules",
          exclusiveOn: ["--no-check"],
          args: {
            name: "check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["all"],
          },
          requiresSeparator: true,
        },
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          args: {
            name: "reload",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--lock",
          description: "Check the specified lock file",
          args: {
            name: "lock",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--cert",
          description: "Load certificate authority from PEM encoded file",
          args: {
            name: "cert",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--allow-read",
          description: "Allow file system read access",
          args: {
            name: "allow-read",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-write",
          description: "Allow file system write access",
          args: {
            name: "allow-write",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-net",
          description: "Allow network access",
          args: {
            name: "allow-net",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--unsafely-ignore-certificate-errors",
          description: "DANGER: Disables verification of TLS certificates",
          args: {
            name: "unsafely-ignore-certificate-errors",
            isVariadic: true,
            isOptional: true,
            description: "Scope ignoring certificate errors to these hosts",
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-env",
          description: "Allow environment access",
          args: {
            name: "allow-env",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-run",
          description: "Allow running subprocesses",
          args: {
            name: "allow-run",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-ffi",
          description: "Allow loading dynamic libraries",
          args: {
            name: "allow-ffi",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--inspect",
          description:
            "Activate inspector on host:port (default: 127.0.0.1:9229)",
          args: {
            name: "inspect",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--inspect-brk",
          description:
            "Activate inspector on host:port and break at start of user script",
          args: {
            name: "inspect-brk",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--location",
          description: "Value of 'globalThis.location' used by some web APIs",
          args: {
            name: "location",
            isOptional: true,
          },
        },
        {
          name: "--v8-flags",
          description: "Set V8 command line options",
          args: {
            name: "v8-flags",
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--seed",
          description: "Set the random number generator seed",
          args: {
            name: "seed",
            isOptional: true,
          },
        },
        {
          name: "--watch",
          description: "Watch for file changes and restart automatically",
          exclusiveOn: ["--inspect", "--inspect-brk"],
          args: {
            name: "watch",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
            generators: {
              template: "filepaths",
              getQueryTerm: ",",
            },
          },
          requiresSeparator: true,
        },
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: "--no-remote",
          description: "Do not resolve remote modules",
        },
        {
          name: "--no-config",
          description: "Disable automatic loading of the configuration file",
          exclusiveOn: ["-c", "--config"],
        },
        {
          name: "--lock-write",
          description: "Write lock file (use with --lock)",
        },
        {
          name: "--allow-hrtime",
          description: "Allow high resolution time measurement",
        },
        {
          name: ["-A", "--allow-all"],
          description: "Allow all permissions",
        },
        {
          name: "--prompt",
          description:
            "Deprecated: Fallback to prompt if required permission wasn't passed",
        },
        {
          name: "--no-prompt",
          description: "Always throw if required permission wasn't passed",
        },
        {
          name: "--cached-only",
          description: "Require that remote dependencies are already cached",
        },
        {
          name: "--enable-testing-features-do-not-use",
          description:
            "INTERNAL: Enable internal features used during integration testing",
        },
        {
          name: "--compat",
          description: "UNSTABLE: Node compatibility mode",
        },
        {
          name: "--no-clear-screen",
          description: "Do not clear terminal screen when under watch mode",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "script_arg",
        isVariadic: true,
        isScript: true,
        suggestions: [
          {
            name: "-",
            description: "Read from standard input",
            hidden: true,
          },
        ],
        generators: [{ template: "filepaths" }, generateUrlScript],
      },
      parserDirectives: {
        optionsMustPrecedeArguments: true,
      },
    },
    {
      name: "task",
      description: "Run a task defined in the configuration file",
      options: [
        {
          name: ["-c", "--config"],
          description: "Specify the configuration file",
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--cwd",
          description: "Specify the directory to run the task in",
          args: {
            name: "cwd",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: [
        {
          name: "task_name",
          generators: generateTasks,
        },
        {
          name: "task_args",
          isVariadic: true,
          isOptional: true,
        },
      ],
      parserDirectives: {
        optionsMustPrecedeArguments: true,
      },
    },
    {
      name: "test",
      description: "Run tests",
      options: [
        {
          name: "--import-map",
          description: "Load import map file",
          args: {
            name: "import-map",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-c", "--config"],
          description: "Specify the configuration file",
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--no-check",
          description: "Skip type-checking modules",
          args: {
            name: "no-check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["remote"],
          },
          requiresSeparator: true,
        },
        {
          name: "--check",
          description: "Type-check modules",
          exclusiveOn: ["--no-check"],
          args: {
            name: "check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["all"],
          },
          requiresSeparator: true,
        },
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          args: {
            name: "reload",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--lock",
          description: "Check the specified lock file",
          args: {
            name: "lock",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--cert",
          description: "Load certificate authority from PEM encoded file",
          args: {
            name: "cert",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--allow-read",
          description: "Allow file system read access",
          args: {
            name: "allow-read",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-write",
          description: "Allow file system write access",
          args: {
            name: "allow-write",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-net",
          description: "Allow network access",
          args: {
            name: "allow-net",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--unsafely-ignore-certificate-errors",
          description: "DANGER: Disables verification of TLS certificates",
          args: {
            name: "unsafely-ignore-certificate-errors",
            isVariadic: true,
            isOptional: true,
            description: "Scope ignoring certificate errors to these hosts",
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-env",
          description: "Allow environment access",
          args: {
            name: "allow-env",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-run",
          description: "Allow running subprocesses",
          args: {
            name: "allow-run",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-ffi",
          description: "Allow loading dynamic libraries",
          args: {
            name: "allow-ffi",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--inspect",
          description:
            "Activate inspector on host:port (default: 127.0.0.1:9229)",
          args: {
            name: "inspect",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--inspect-brk",
          description:
            "Activate inspector on host:port and break at start of user script",
          args: {
            name: "inspect-brk",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--location",
          description: "Value of 'globalThis.location' used by some web APIs",
          args: {
            name: "location",
            isOptional: true,
          },
        },
        {
          name: "--v8-flags",
          description: "Set V8 command line options",
          args: {
            name: "v8-flags",
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--seed",
          description: "Set the random number generator seed",
          args: {
            name: "seed",
            isOptional: true,
          },
        },
        {
          name: "--ignore",
          description: "Ignore files",
          args: {
            name: "ignore",
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--fail-fast",
          description:
            "Stop after N errors. Defaults to stopping after first failure",
          args: {
            name: "fail-fast",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--filter",
          description: "Run tests with this string or pattern in the test name",
          args: {
            name: "filter",
            isOptional: true,
          },
        },
        {
          name: "--shuffle",
          description:
            "(UNSTABLE): Shuffle the order in which the tests are run",
          args: {
            name: "shuffle",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--coverage",
          description: "UNSTABLE: Collect coverage profile data into DIR",
          exclusiveOn: ["--inspect", "--inspect-brk"],
          args: {
            name: "coverage",
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: ["-j", "--jobs"],
          description:
            "Deprecated: Number of parallel workers, defaults to number of available CPUs when no value is provided. Defaults to 1 when the option is not present",
          hidden: true,
          deprecated: { description: "Use --parallel" },
          args: {
            name: "jobs",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: "--no-remote",
          description: "Do not resolve remote modules",
        },
        {
          name: "--no-config",
          description: "Disable automatic loading of the configuration file",
          exclusiveOn: ["-c", "--config"],
        },
        {
          name: "--lock-write",
          description: "Write lock file (use with --lock)",
        },
        {
          name: "--allow-hrtime",
          description: "Allow high resolution time measurement",
        },
        {
          name: ["-A", "--allow-all"],
          description: "Allow all permissions",
        },
        {
          name: "--prompt",
          description:
            "Deprecated: Fallback to prompt if required permission wasn't passed",
        },
        {
          name: "--no-prompt",
          description: "Always throw if required permission wasn't passed",
        },
        {
          name: "--cached-only",
          description: "Require that remote dependencies are already cached",
        },
        {
          name: "--enable-testing-features-do-not-use",
          description:
            "INTERNAL: Enable internal features used during integration testing",
        },
        {
          name: "--compat",
          description: "UNSTABLE: Node compatibility mode",
        },
        {
          name: "--no-run",
          description: "Cache test modules, but don't run tests",
        },
        {
          name: "--trace-ops",
          description:
            "Enable tracing of async ops. Useful when debugging leaking ops in test, but impacts test execution time",
        },
        {
          name: "--doc",
          description: "UNSTABLE: type-check code blocks",
        },
        {
          name: "--allow-none",
          description: "Don't return error code if no test files are found",
        },
        {
          name: "--parallel",
          description:
            "Run test modules in parallel. Parallelism defaults to the number of available CPUs or the value in the DENO_JOBS environment variable",
          exclusiveOn: ["-j", "--jobs"],
        },
        {
          name: "--watch",
          description: "Watch for file changes and restart automatically",
          exclusiveOn: ["--no-run", "--coverage"],
        },
        {
          name: "--no-clear-screen",
          description: "Do not clear terminal screen when under watch mode",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: [
        {
          name: "files",
          isVariadic: true,
          isOptional: true,
          template: "filepaths",
        },
        {
          name: "script_arg",
          isVariadic: true,
          isOptional: true,
          template: "filepaths",
        },
      ],
    },
    {
      name: "types",
      description: "Print runtime TypeScript declarations",
      options: [
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
    },
    {
      name: "upgrade",
      description: "Upgrade deno executable to given version",
      options: [
        {
          name: "--version",
          description: "The version to upgrade to",
          args: {
            name: "version",
            isOptional: true,
            generators: generateVersions,
          },
        },
        {
          name: "--output",
          description: "The path to output the updated version to",
          args: {
            name: "output",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--cert",
          description: "Load certificate authority from PEM encoded file",
          args: {
            name: "cert",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: "--dry-run",
          description: "Perform all checks without replacing old exe",
        },
        {
          name: ["-f", "--force"],
          description: "Replace current exe even if not out-of-date",
        },
        {
          name: "--canary",
          description: "Upgrade to canary builds",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
    },
    {
      name: "vendor",
      description: "Vendor remote modules into a local directory",
      options: [
        {
          name: "--output",
          description: "The directory to output the vendored modules to",
          args: {
            name: "output",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-c", "--config"],
          description: "Specify the configuration file",
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--import-map",
          description: "Load import map file",
          args: {
            name: "import-map",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--lock",
          description: "Check the specified lock file",
          args: {
            name: "lock",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          args: {
            name: "reload",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--cert",
          description: "Load certificate authority from PEM encoded file",
          args: {
            name: "cert",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: ["-f", "--force"],
          description:
            "Forcefully overwrite conflicting files in existing output directory",
        },
        {
          name: "--no-config",
          description: "Disable automatic loading of the configuration file",
          exclusiveOn: ["-c", "--config"],
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "specifiers",
        isVariadic: true,
        template: "filepaths",
      },
    },
    {
      name: "help",
      description: "Print this message or the help of the given subcommand(s)",
      options: [
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "subcommand",
        isOptional: true,
        template: "help",
      },
    },
  ],
  options: [
    {
      name: ["-L", "--log-level"],
      description: "Set log level",
      hidden: true,
      args: {
        name: "log-level",
        isOptional: true,
        suggestions: ["debug", "info"],
      },
    },
    {
      name: ["-h", "--help"],
      description: "Print help information",
    },
    {
      name: ["-V", "--version"],
      description: "Print version information",
    },
    {
      name: "--unstable",
      description: "Enable unstable features and APIs",
    },
    {
      name: ["-q", "--quiet"],
      description: "Suppress diagnostic output",
    },
  ],
};

export default completion;
