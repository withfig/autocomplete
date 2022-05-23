import { filepaths } from "@fig/autocomplete-generators";
import {
  generateDocs,
  generateInstalledDenoScripts,
  generateLintRules,
  generateTasks,
  generateVersions,
} from "./deno/generators";

const completion: Fig.Spec = {
  name: "deno",
  description: "A secure JavaScript and TypeScript runtime",
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
          exclusiveOn: ["--no-config"],
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--no-check",
          description: "Skip type checking modules",
          requiresSeparator: true,
          args: {
            name: "no-check",
            isVariadic: true,
            isOptional: true,
            suggestions: [
              {
                name: "remote",
                description: "Don't check remote modules",
              },
            ],
          },
        },
        {
          name: "--check",
          description: "Type check modules",
          exclusiveOn: ["--no-check"],
          requiresSeparator: true,
          args: {
            name: "check",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          requiresSeparator: true,
          args: {
            name: "reload",
            isVariadic: true,
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
          requiresSeparator: true,
          args: {
            name: "allow-read",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--allow-write",
          description: "Allow file system write access",
          requiresSeparator: true,
          args: {
            name: "allow-write",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--allow-net",
          description: "Allow network access",
          requiresSeparator: true,
          args: {
            name: "allow-net",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--unsafely-ignore-certificate-errors",
          description: "DANGER: Disables verification of TLS certificates",
          requiresSeparator: true,
          args: {
            name: "unsafely-ignore-certificate-errors",
            description: "Scope ignoring certificate errors to these hosts",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--allow-env",
          description: "Allow environment access",
          requiresSeparator: true,
          args: {
            name: "allow-env",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--allow-run",
          description: "Allow running subprocesses",
          requiresSeparator: true,
          args: {
            name: "allow-run",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--allow-ffi",
          description: "Allow loading dynamic libraries",
          requiresSeparator: true,
          args: {
            name: "allow-ffi",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
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
          requiresSeparator: true,
          args: {
            name: "v8-flags",
            isOptional: true,
          },
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
          requiresSeparator: true,
          args: {
            name: "ignore",
            isOptional: true,
          },
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
          description:
            "UNSTABLE: Watch for file changes and restart automatically",
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
          exclusiveOn: ["--no-config"],
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--no-check",
          description: "Skip type checking modules",
          requiresSeparator: true,
          args: {
            name: "no-check",
            isVariadic: true,
            isOptional: true,
            suggestions: [
              {
                name: "remote",
                description: "Don't check remote modules",
              },
            ],
          },
        },
        {
          name: "--check",
          description: "Type check modules",
          exclusiveOn: ["--no-check"],
          requiresSeparator: true,
          args: {
            name: "check",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          requiresSeparator: true,
          args: {
            name: "reload",
            isVariadic: true,
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
          description:
            "UNSTABLE: Watch for file changes and restart automatically",
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
          exclusiveOn: ["--no-config"],
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--no-check",
          description: "Skip type checking modules",
          requiresSeparator: true,
          args: {
            name: "no-check",
            isVariadic: true,
            isOptional: true,
            suggestions: [
              {
                name: "remote",
                description: "Don't check remote modules",
              },
            ],
          },
        },
        {
          name: "--check",
          description: "Type check modules",
          exclusiveOn: ["--no-check"],
          requiresSeparator: true,
          args: {
            name: "check",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          requiresSeparator: true,
          args: {
            name: "reload",
            isVariadic: true,
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
          exclusiveOn: ["--no-config"],
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          requiresSeparator: true,
          args: {
            name: "reload",
            isVariadic: true,
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
          exclusiveOn: ["--no-config"],
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--no-check",
          description: "Skip type checking modules",
          requiresSeparator: true,
          args: {
            name: "no-check",
            isVariadic: true,
            isOptional: true,
            suggestions: [
              {
                name: "remote",
                description: "Don't check remote modules",
              },
            ],
          },
        },
        {
          name: "--check",
          description: "Type check modules",
          exclusiveOn: ["--no-check"],
          requiresSeparator: true,
          args: {
            name: "check",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          requiresSeparator: true,
          args: {
            name: "reload",
            isVariadic: true,
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
          requiresSeparator: true,
          args: {
            name: "allow-read",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--allow-write",
          description: "Allow file system write access",
          requiresSeparator: true,
          args: {
            name: "allow-write",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--allow-net",
          description: "Allow network access",
          requiresSeparator: true,
          args: {
            name: "allow-net",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--unsafely-ignore-certificate-errors",
          description: "DANGER: Disables verification of TLS certificates",
          requiresSeparator: true,
          args: {
            name: "unsafely-ignore-certificate-errors",
            description: "Scope ignoring certificate errors to these hosts",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--allow-env",
          description: "Allow environment access",
          requiresSeparator: true,
          args: {
            name: "allow-env",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--allow-run",
          description: "Allow running subprocesses",
          requiresSeparator: true,
          args: {
            name: "allow-run",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--allow-ffi",
          description: "Allow loading dynamic libraries",
          requiresSeparator: true,
          args: {
            name: "allow-ffi",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
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
          requiresSeparator: true,
          args: {
            name: "v8-flags",
            isOptional: true,
          },
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
              { name: "x86_64-unknown-linux-gnu", icon: "fig://icon?type=cpu" },
              { name: "x86_64-pc-windows-msvc", icon: "fig://icon?type=cpu" },
              { name: "x86_64-apple-darwin", icon: "fig://icon?type=cpu" },
              { name: "aarch64-apple-darwin", icon: "fig://icon?type=cpu" },
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
        template: "filepaths",
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
          requiresSeparator: true,
          args: {
            name: "ignore",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--include",
          description: "Include source files in the report",
          isRepeatable: true,
          requiresSeparator: true,
          args: {
            name: "include",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--exclude",
          description: "Exclude source files from the report",
          isRepeatable: true,
          requiresSeparator: true,
          args: {
            name: "exclude",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--output",
          description: "Output file (defaults to stdout) for lcov",
          requiresSeparator: true,
          args: {
            name: "output",
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
          requiresSeparator: true,
          args: {
            name: "reload",
            isVariadic: true,
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
          template: "filepaths",
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
          exclusiveOn: ["--no-config"],
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--no-check",
          description: "Skip type checking modules",
          requiresSeparator: true,
          args: {
            name: "no-check",
            isVariadic: true,
            isOptional: true,
            suggestions: [
              {
                name: "remote",
                description: "Don't check remote modules",
              },
            ],
          },
        },
        {
          name: "--check",
          description: "Type check modules",
          exclusiveOn: ["--no-check"],
          requiresSeparator: true,
          args: {
            name: "check",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          requiresSeparator: true,
          args: {
            name: "reload",
            isVariadic: true,
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
          requiresSeparator: true,
          args: {
            name: "inspect",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--inspect-brk",
          description:
            "Activate inspector on host:port and break at start of user script",
          requiresSeparator: true,
          args: {
            name: "inspect-brk",
            isVariadic: true,
            isOptional: true,
          },
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
          requiresSeparator: true,
          args: {
            name: "v8-flags",
            isOptional: true,
          },
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
          exclusiveOn: ["--no-config"],
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
          requiresSeparator: true,
          args: {
            name: "ignore",
            isOptional: true,
            template: "filepaths",
          },
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
          description:
            "UNSTABLE: Watch for file changes and restart automatically",
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
      },
    },
    {
      name: "info",
      description: "Show info about cache or info related to source file",
      options: [
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          requiresSeparator: true,
          args: {
            name: "reload",
            isVariadic: true,
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
          description: "Skip type checking modules",
          hidden: true,
          requiresSeparator: true,
          args: {
            name: "no-check",
            isVariadic: true,
            isOptional: true,
            suggestions: [
              {
                name: "remote",
                description: "Don't check remote modules",
              },
            ],
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
          exclusiveOn: ["--no-config"],
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--no-check",
          description: "Skip type checking modules",
          requiresSeparator: true,
          args: {
            name: "no-check",
            isVariadic: true,
            isOptional: true,
            suggestions: [
              {
                name: "remote",
                description: "Don't check remote modules",
              },
            ],
          },
        },
        {
          name: "--check",
          description: "Type check modules",
          exclusiveOn: ["--no-check"],
          requiresSeparator: true,
          args: {
            name: "check",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          requiresSeparator: true,
          args: {
            name: "reload",
            isVariadic: true,
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
          requiresSeparator: true,
          args: {
            name: "allow-read",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--allow-write",
          description: "Allow file system write access",
          requiresSeparator: true,
          args: {
            name: "allow-write",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--allow-net",
          description: "Allow network access",
          requiresSeparator: true,
          args: {
            name: "allow-net",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--unsafely-ignore-certificate-errors",
          description: "DANGER: Disables verification of TLS certificates",
          requiresSeparator: true,
          args: {
            name: "unsafely-ignore-certificate-errors",
            description: "Scope ignoring certificate errors to these hosts",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--allow-env",
          description: "Allow environment access",
          requiresSeparator: true,
          args: {
            name: "allow-env",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--allow-run",
          description: "Allow running subprocesses",
          requiresSeparator: true,
          args: {
            name: "allow-run",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--allow-ffi",
          description: "Allow loading dynamic libraries",
          requiresSeparator: true,
          args: {
            name: "allow-ffi",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--inspect",
          description:
            "Activate inspector on host:port (default: 127.0.0.1:9229)",
          requiresSeparator: true,
          args: {
            name: "inspect",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--inspect-brk",
          description:
            "Activate inspector on host:port and break at start of user script",
          requiresSeparator: true,
          args: {
            name: "inspect-brk",
            isVariadic: true,
            isOptional: true,
          },
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
          requiresSeparator: true,
          args: {
            name: "v8-flags",
            isOptional: true,
          },
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
        template: "filepaths",
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
          requiresSeparator: true,
          args: {
            name: "rules-tags",
            isOptional: true,
            generators: generateLintRules,
          },
        },
        {
          name: "--rules-include",
          description: "Include lint rules",
          exclusiveOn: ["--rules"],
          requiresSeparator: true,
          args: {
            name: "rules-include",
            isOptional: true,
            generators: generateLintRules,
          },
        },
        {
          name: "--rules-exclude",
          description: "Exclude lint rules",
          exclusiveOn: ["--rules"],
          requiresSeparator: true,
          args: {
            name: "rules-exclude",
            isOptional: true,
            generators: generateLintRules,
          },
        },
        {
          name: ["-c", "--config"],
          description: "Specify the configuration file",
          exclusiveOn: ["--no-config"],
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--ignore",
          description: "Ignore linting particular source files",
          requiresSeparator: true,
          args: {
            name: "ignore",
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
          description:
            "UNSTABLE: Watch for file changes and restart automatically",
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
          exclusiveOn: ["--no-config"],
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--no-check",
          description: "Skip type checking modules",
          requiresSeparator: true,
          args: {
            name: "no-check",
            isVariadic: true,
            isOptional: true,
            suggestions: [
              {
                name: "remote",
                description: "Don't check remote modules",
              },
            ],
          },
        },
        {
          name: "--check",
          description: "Type check modules",
          exclusiveOn: ["--no-check"],
          requiresSeparator: true,
          args: {
            name: "check",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          requiresSeparator: true,
          args: {
            name: "reload",
            isVariadic: true,
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
          requiresSeparator: true,
          args: {
            name: "inspect",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--inspect-brk",
          description:
            "Activate inspector on host:port and break at start of user script",
          requiresSeparator: true,
          args: {
            name: "inspect-brk",
            isVariadic: true,
            isOptional: true,
          },
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
          requiresSeparator: true,
          args: {
            name: "v8-flags",
            isOptional: true,
          },
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
          requiresSeparator: true,
          args: {
            name: "eval-file",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
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
          requiresSeparator: true,
          args: {
            name: "unsafely-ignore-certificate-errors",
            description: "Scope ignoring certificate errors to these hosts",
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
          exclusiveOn: ["--no-config"],
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--no-check",
          description: "Skip type checking modules",
          requiresSeparator: true,
          args: {
            name: "no-check",
            isVariadic: true,
            isOptional: true,
            suggestions: [
              {
                name: "remote",
                description: "Don't check remote modules",
              },
            ],
          },
        },
        {
          name: "--check",
          description: "Type check modules",
          exclusiveOn: ["--no-check"],
          requiresSeparator: true,
          args: {
            name: "check",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          requiresSeparator: true,
          args: {
            name: "reload",
            isVariadic: true,
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
          requiresSeparator: true,
          args: {
            name: "allow-read",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--allow-write",
          description: "Allow file system write access",
          requiresSeparator: true,
          args: {
            name: "allow-write",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--allow-net",
          description: "Allow network access",
          requiresSeparator: true,
          args: {
            name: "allow-net",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--unsafely-ignore-certificate-errors",
          description: "DANGER: Disables verification of TLS certificates",
          requiresSeparator: true,
          args: {
            name: "unsafely-ignore-certificate-errors",
            description: "Scope ignoring certificate errors to these hosts",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--allow-env",
          description: "Allow environment access",
          requiresSeparator: true,
          args: {
            name: "allow-env",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--allow-run",
          description: "Allow running subprocesses",
          requiresSeparator: true,
          args: {
            name: "allow-run",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--allow-ffi",
          description: "Allow loading dynamic libraries",
          requiresSeparator: true,
          args: {
            name: "allow-ffi",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--inspect",
          description:
            "Activate inspector on host:port (default: 127.0.0.1:9229)",
          requiresSeparator: true,
          args: {
            name: "inspect",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--inspect-brk",
          description:
            "Activate inspector on host:port and break at start of user script",
          requiresSeparator: true,
          args: {
            name: "inspect-brk",
            isVariadic: true,
            isOptional: true,
          },
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
          requiresSeparator: true,
          args: {
            name: "v8-flags",
            isOptional: true,
          },
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
          description:
            "UNSTABLE: Watch for file changes and restart automatically",
          exclusiveOn: ["--inspect", "--inspect-brk"],
          requiresSeparator: true,
          args: {
            name: "watch",
            isVariadic: true,
            isOptional: true,
            generators: {
              template: "filepaths",
              getQueryTerm: ",",
            },
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
        template: "filepaths",
      },
    },
    {
      name: "task",
      description: "Run a task defined in the configuration file",
      options: [
        {
          name: ["-c", "--config"],
          description: "Specify the configuration file",
          exclusiveOn: ["--no-config"],
          args: {
            name: "config",
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
        name: "task_name_and_args",
        isVariadic: true,
        isOptional: true,
        generators: generateTasks,
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
          exclusiveOn: ["--no-config"],
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--no-check",
          description: "Skip type checking modules",
          requiresSeparator: true,
          args: {
            name: "no-check",
            isVariadic: true,
            isOptional: true,
            suggestions: [
              {
                name: "remote",
                description: "Don't check remote modules",
              },
            ],
          },
        },
        {
          name: "--check",
          description: "Type check modules",
          exclusiveOn: ["--no-check"],
          requiresSeparator: true,
          args: {
            name: "check",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          requiresSeparator: true,
          args: {
            name: "reload",
            isVariadic: true,
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
          requiresSeparator: true,
          args: {
            name: "allow-read",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--allow-write",
          description: "Allow file system write access",
          requiresSeparator: true,
          args: {
            name: "allow-write",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--allow-net",
          description: "Allow network access",
          requiresSeparator: true,
          args: {
            name: "allow-net",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--unsafely-ignore-certificate-errors",
          description: "DANGER: Disables verification of TLS certificates",
          requiresSeparator: true,
          args: {
            name: "unsafely-ignore-certificate-errors",
            description: "Scope ignoring certificate errors to these hosts",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--allow-env",
          description: "Allow environment access",
          requiresSeparator: true,
          args: {
            name: "allow-env",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--allow-run",
          description: "Allow running subprocesses",
          requiresSeparator: true,
          args: {
            name: "allow-run",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--allow-ffi",
          description: "Allow loading dynamic libraries",
          requiresSeparator: true,
          args: {
            name: "allow-ffi",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--inspect",
          description:
            "Activate inspector on host:port (default: 127.0.0.1:9229)",
          requiresSeparator: true,
          args: {
            name: "inspect",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--inspect-brk",
          description:
            "Activate inspector on host:port and break at start of user script",
          requiresSeparator: true,
          args: {
            name: "inspect-brk",
            isVariadic: true,
            isOptional: true,
          },
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
          requiresSeparator: true,
          args: {
            name: "v8-flags",
            isOptional: true,
          },
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
          requiresSeparator: true,
          args: {
            name: "ignore",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--fail-fast",
          description:
            "Stop after N errors. Defaults to stopping after first failure",
          requiresSeparator: true,
          args: {
            name: "fail-fast",
            isVariadic: true,
            isOptional: true,
          },
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
          requiresSeparator: true,
          args: {
            name: "shuffle",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--coverage",
          description: "UNSTABLE: Collect coverage profile data into DIR",
          exclusiveOn: ["--inspect", "--inspect-brk"],
          requiresSeparator: true,
          args: {
            name: "coverage",
            isOptional: true,
          },
        },
        {
          name: ["-j", "--jobs"],
          description:
            "Number of parallel workers, defaults to # of CPUs when no value is provided. Defaults to 1 when the option is not present",
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
          description: "UNSTABLE: type check code blocks",
        },
        {
          name: "--allow-none",
          description: "Don't return error code if no test files are found",
        },
        {
          name: "--watch",
          description:
            "UNSTABLE: Watch for file changes and restart automatically",
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
          exclusiveOn: ["--no-config"],
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
          requiresSeparator: true,
          args: {
            name: "reload",
            isVariadic: true,
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
