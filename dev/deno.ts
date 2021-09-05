// This file largely follows the same structure (not order) as deno/cli/flags.rs:
// https://github.com/denoland/deno/blob/main/cli/flags.rs

// All objects marked with '// requiresEquals: true' are Clap args with '.require_equals(true)'
// TODO: When fig supports this option (or something like it), uncomment the arguments.

const permissionOptions: Fig.Option[] = [
  {
    name: ["-A", "--allow-all"],
    description: "Allow all permissions",
  },
  {
    name: "--allow-env",
    description: "Allow environment access",
    // requiresEquals: true,
    // args: {
    //   name: "variable",
    //   description: "Comma-separated list of environment variables to allow",
    //   isOptional: true,
    // },
  },
  {
    name: "--allow-ffi",
    description: "Allow loading dynamic libraries",
    // requiresEquals: true,
    // args: {
    //   name: "library",
    //   description: "The path of the dynamic library to allow",
    //   isOptional: true,
    // },
  },
  {
    name: "--allow-hrtime",
    description: "Allow high resolution time measurement",
  },
  {
    name: "--allow-net",
    description: "Allow network access",
    // requiresEquals: true,
    // args: {
    //   name: "hosts",
    //   isOptional: true,
    // },
  },
  {
    name: "--allow-read",
    description: "Allow file system read access",
    // requiresEquals: true,
    // args: {
    //   name: "paths",
    //   template: "filepaths",
    //   isOptional: true,
    // },
  },
  {
    name: "--allow-run",
    description: "Allow running subprocesses",
    // requiresEquals: true,
    // args: {
    //   name: "executables",
    //   isOptional: true,
    // },
  },
  {
    name: "--allow-write",
    description: "Allow file system write access",
    // requiresEquals: true,
    // args: {
    //   name: "paths",
    //   isOptional: true,
    // },
  },
  {
    name: "--prompt",
    description: "Fallback to prompt if required permission wasn't passed",
  },
  {
    name: "--unsafely-ignore-certificate-errors",
    description: "DANGER: Disables verification of TLS certificates",
    isDangerous: true,
    // requiresEquals: true,
    // args: {
    //   name: "host names",
    //   description: "Scope ignoring certificate errors to these hosts",
    //   isOptional: true,
    // },
  },
];

const inspectorOptions: Fig.Option[] = [
  {
    name: "--inspect",
    description: "Activate inspector on host:port (default: 127.0.0.1:9229)",
    // requiresEquals: true,
    // args: {
    //   name: "host:port",
    //   description: "The host:port to activate the inspector on",
    //   isOptional: true,
    // },
  },
  {
    name: "--inspect-brk",
    description:
      "Activate inspector on host:port and break at the start of user script (default: 127.0.0.1:9229)",
    // requiresEquals: true,
    // args: {
    //   name: "host:port",
    //   description: "The host:port to activate the inspector on",
    //   isOptional: true,
    // },
  },
];

const caFileOption: Fig.Option = {
  name: "--cert",
  description: "Load certificate authority from a PEM encoded file",
  args: {
    name: "certificate file",
    description: "The certificate file to load",
    template: "filepaths",
  },
};

const configOption: Fig.Option = {
  name: ["-c", "--config"],
  description: "Load tsconfig.json configuration file",
  args: {
    name: "tsconfig file",
    description: "The tsconfig file to load",
    // TODO: if present, suggest tsconfig.json first
    template: "filepaths",
  },
};

const importMapOption: Fig.Option = {
  name: "--import-map",
  description: "Load an import map from a local file or remote URL",
  args: {
    name: "source",
    description: "The location of the import map (can be a URL)",
    // TODO: If present, suggest these first: import_map.json, import-map.json, imports.json
    template: "filepaths",
  },
};

const lockOption: Fig.Option = {
  name: "--lock",
  description: "Check the specified lock file",
  args: {
    name: "lock file",
    description: "The location of the JSON lock file",
    // TODO: If present, suggest lock.json first
    template: "filepaths",
  },
};

const lockWriteOption: Fig.Option = {
  name: "--lock-write",
  description: "Write lock file",
  dependsOn: ["--lock"],
};

const noCheckOption: Fig.Option = {
  name: "--no-check",
  description: "Skip type checking modules",
};

const noRemoteOption: Fig.Option = {
  name: "--no-remote",
  description: "Do not resolve remote modules",
};

const reloadOption: Fig.Option = {
  name: ["-r", "--reload"],
  description:
    "Reload source code cache (recompile TypeScript, download dependencies)",
  // requiresEquals: true,
  // args: {
  //   name: "cache blocklist",
  //   description: "A comma-separated list of URLs to block from the cache",
  //   isOptional: true,
  // },
};

const seedArg: Fig.Option = {
  name: "--seed",
  description: "Seed Math.random()",
  args: {
    name: "number",
    description: "The number to use as the seed for Math.random()",
  },
};

const v8FlagsOption: Fig.Option = {
  name: "--v8-flags",
  insertValue: "--v8-flags=",
  description: "Set V8 command line options (for help: --v8-flags=--help",
  // requiresEquals: true,
  args: {
    name: "V8 flags",
    description: "Flags to pass to V8",
    // TODO: Using `deno run --v8-flags=--help` to generate suggestions
  },
};

const watchOption: Fig.Option = {
  name: "--watch",
  description:
    "UNSTABLE: Watch for file changes and restart process automatically",
};

const locationOption: Fig.Option = {
  name: "--location",
  description: "Value of 'globalThis.location' used by some web APIs",
  args: {
    name: "URL",
  },
};

const cachedOnlyOption: Fig.Option = {
  name: "--cached-only",
  description: "Require that remote dependencies are already cached",
};

const globalOptions: Fig.Option[] = [
  {
    name: ["-h", "--help"],
    description: "Prints help information",
  },
  {
    name: ["-L", "--log-level"],
    description: "Set log level",
    args: {
      suggestions: ["info", "debug"],
    },
  },
  {
    name: ["-q", "--quiet"],
    description:
      "Suppress diagnostic output (restrict stderr messages to errors)",
  },
  {
    name: "--unstable",
    description: "Enable unstable features and APIs",
  },
];

const compileOptions: Fig.Option[] = [
  importMapOption,
  noRemoteOption,
  configOption,
  noCheckOption,
  reloadOption,
  lockOption,
  lockWriteOption,
  caFileOption,
];

const runtimeOptions = ({
  perms,
  inspector,
}: {
  perms: boolean;
  inspector: boolean;
}): Fig.Option[] => [
  ...compileOptions,
  ...(perms ? permissionOptions : []),
  ...(inspector ? inspectorOptions : []),
  cachedOnlyOption,
  locationOption,
  v8FlagsOption,
  seedArg,
];

const denoRun: Fig.Subcommand = {
  name: "run",
  description: "Run a JavaScript or TypeScript program",
  args: {
    name: "script",
    description: "The JavaScript or TypeScript file to run",
    template: "filepaths",
  },
  options: [
    ...runtimeOptions({ perms: true, inspector: true }),
    {
      ...watchOption,
      exclusiveOn: ["--inspect", "--inspect-brk"],
    },
  ],
};

const denoTest: Fig.Subcommand = {
  name: "test",
  description: "Run tests using Deno's built-in test runner",
  args: {
    name: "paths",
    description: "The paths of tests to run",
    isOptional: true,
    isVariadic: true,
    template: "filepaths",
  },
  options: [
    ...globalOptions,
    ...runtimeOptions({ perms: true, inspector: true }),
    // TODO: Uncomment once Deno 1.14.0 is out
    // {
    //   name: "--ignore",
    //   insertValue: "--ignore=",
    //   description: "Ignore files",
    //   // requiresEquals: true,
    //   args: {
    //     name: "Files to ignore",
    //     description: "Files matching this pattern will be ignored",
    //     template: "filepaths",
    //   },
    // },
    {
      name: "--no-run",
      description: "Cache test modules, but don't run tests",
    },
    {
      name: "--doc",
      description: "UNSTABLE: Type check code blocks in documentation",
    },
    {
      name: "--fail-fast",
      description:
        "Stop after N errors (defaults to stopping after the first error)",
      // requiresEquals: true,
      // args: {
      //   name: "number",
      //   isOptional: true,
      // },
    },
    {
      name: "--allow-none",
      description: "Don't return error code if no test files are found",
    },
    {
      name: "--filter",
      description: "Run tests with this string or pattern in the test name",
      args: {
        name: "pattern",
        description: "The pattern to match against",
      },
    },
    {
      name: "--shuffle",
      description: "UNSTABLE: Shuffle the order in which tests are run",
      // requiresEquals: true,
      // args: {
      //   name: "number",
      //   isOptional: true,
      // },
    },
    {
      name: "--coverage",
      insertValue: "--coverage=",
      description: "UNSTABLE: Collect coverage profile data into the directory",
      // requiresEquals: true,
      args: {
        name: "directory",
        description: "The directory to use for coverage data",
      },
    },
    {
      name: ["-j", "--jobs"],
      description:
        "Set the number of parallel workers. With no value, the number of CPU cores. Defaults to 1 if omitted",
      args: {
        name: "number",
        description:
          "The number of parallel workers (defaults to number of CPU cores)",
        isOptional: true,
      },
    },
    {
      ...watchOption,
      exclusiveOn: ["--no-run", "--coverage"],
    },
  ],
};

const denoFmt: Fig.Subcommand = {
  name: "fmt",
  description: "Auto-format JavaScript, TypeScript, Markdown, and JSON files",
  args: {
    name: "files",
    description: "Files to format",
    isOptional: true,
    isVariadic: true,
    template: "filepaths",
  },
  options: [
    ...globalOptions,
    {
      name: "--check",
      description: "Check if the source files are formatted",
    },
    {
      name: "--ext",
      description: "Set standard input (stdin) content type",
      args: {
        name: "extension",
        description: "The extension to format input as",
        suggestions: ["ts", "tsx", "js", "jsx", "md", "json", "jsonc"],
      },
    },
    {
      name: "--ignore",
      insertValue: "--ignore=",
      description: "Ignore formatting particular source files",
      // requiresEquals: true,
      args: {
        name: "Files to ignore",
        template: "filepaths",
      },
    },
    watchOption,
  ],
};

const denoLint: Fig.Subcommand = {
  name: "lint",
  description: "Lint JavaScript and TypeScript source code",
  options: [
    ...globalOptions,
    {
      name: "--rules",
      description: "List available rules",
    },
    {
      name: "--ignore",
      description: "Ignore linting particular source files",
      // requiresEquals: true,
      // args: {
      //   name: "files",
      //   description: "The files to ignore",
      //   isOptional: true,
      // },
    },
    {
      name: "--json",
      description: "Output lint result in JSON format",
    },
  ],
};

const denoDoc: Fig.Subcommand = {
  name: "doc",
  description: "Show documentation for a module",
  args: [
    {
      name: "scope",
      description: "The scope to get documentation for",
      // `deno doc` doesn't treat --builtin as a flag, it's more like a file
      // that just happens to mean "show documentation for built-ins". From the
      // user's perspective, it's *basically* a flag, but it's actually not!
      suggestions: ["--builtin"],
      template: "filepaths",
      isOptional: true,
    },
    {
      name: "node",
      description: "The node to get documentation for (must exist in scope)",
      isOptional: true,
      // TODO: Parse `deno doc --json`'s output for the scope to suggest nodes?
      // This is challenging as the CLI expects dot-separated names (eg. Deno.test)
    },
  ],
  options: [
    ...globalOptions,
    importMapOption,
    reloadOption,
    {
      name: "--json",
      description: "Output documentation in JSON format",
    },
    {
      name: "--private",
      description: "Output private documentation",
    },
  ],
};

const denoInstall: Fig.Subcommand = {
  name: "install",
  description: "Install a script as an executable",
  args: [
    {
      name: "source",
      description: "A local or remote JavaScript or TypeScript file",
      template: "filepaths",
    },
    {
      name: "args",
      description: "Arguments that will be provided automatically when run",
      isVariadic: true,
      isOptional: true,
    },
  ],
  options: [
    ...globalOptions,
    ...runtimeOptions({ perms: true, inspector: true }),
    {
      name: ["-n", "--name"],
      description: "Name of the executable",
      args: {
        name: "name",
        description: "The name the executable will have",
      },
    },
    {
      name: ["-f", "--force"],
      description: "Forcefully overwrite an existing installation",
    },
    {
      name: "--root",
      description: "The installation root",
      args: {
        name: "directory",
        description: "The directory that the script will be installed to",
        template: "folders",
      },
    },
  ],
};

const denoLsp: Fig.Subcommand = {
  name: "lsp",
  description: "Start the language server",
  options: globalOptions,
};

const denoTypes: Fig.Subcommand = {
  name: "types",
  description: "Print Deno's runtime TypeScript declarations",
  options: globalOptions,
};

const denoUpgrade: Fig.Subcommand = {
  name: "upgrade",
  description: "Upgrade the deno executable",
  options: [
    ...globalOptions,
    {
      name: "--version",
      description: "The version to upgrade to",
      args: {
        name: "version",
        // TODO: Suggest Deno versions, ordered most to least recent
        // This can be gathered by querying the GitHub API
      },
    },
    {
      name: "--output",
      description: "The path to output the updated version to",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "--dry-run",
      description: "Perform all checks without replacing the old version",
    },
    {
      name: "--canary",
      description: "Upgrade to a canary build",
    },
    caFileOption,
  ],
};

const denoEval: Fig.Subcommand = {
  name: "eval",
  insertValue: "eval '{cursor}'",
  description: "Evaluate JavaScript from the command line",
  options: [
    ...globalOptions,
    ...runtimeOptions({ perms: false, inspector: true }),
    {
      name: "--ext",
      description: "Set standard input (stdin) content type",
      args: {
        name: "extension",
        description: "The file extension to use to interpret stdin",
        default: "ts",
        suggestions: ["ts", "tsx", "js", "jsx"],
      },
    },
    {
      name: ["-p", "--print"],
      description: "Print the result to stdout",
    },
  ],
  args: {
    name: "code",
    isVariadic: true,
  },
};

const denoCompletions: Fig.Subcommand = {
  name: "completions",
  description: "Generate shell completions",
  args: {
    name: "shell",
    description: "Name of the shell to generate completions for",
    // TODO: Suggest shells
  },
  options: globalOptions,
};

const denoCoverage: Fig.Subcommand = {
  name: "coverage",
  description: "Print coverage reports from coverage profiles",
  options: [
    ...globalOptions,
    {
      name: "--ignore",
      insertValue: "--ignore=",
      description: "Ignore coverage files",
      // requiresEquals: true,
      args: {
        name: "pattern",
        description: "Ignore files matching this regex pattern",
        template: "filepaths",
      },
    },
    {
      name: "--include",
      insertValue: "--include=",
      description: "Include source files in the report",
      isRepeatable: true,
      // requiresEquals: true,
      args: {
        name: "pattern",
        description: "Include files matching this regex pattern",
        template: "filepaths",
      },
    },
    {
      name: "--exclude",
      insertValue: "--exclude=",
      description: "Exclude source files from the report",
      isRepeatable: true,
      // requiresEquals: true,
      args: {
        name: "pattern",
        description: "Exclude files matching this regex pattern",
        template: "filepaths",
      },
    },
    {
      name: "--lcov",
      description: "Output coverage in the lcov format",
    },
  ],
  args: {
    name: "coverage directory",
    isVariadic: true,
    template: "folders",
  },
};

const denoInfo: Fig.Subcommand = {
  name: "info",
  description: "Show info about the cache or info related to a source file",
  options: [
    ...globalOptions,
    reloadOption,
    caFileOption,
    importMapOption,
    {
      name: "--location",
      description: "Show files used for origin-bound APIs (like Web Storage)",
      args: {
        name: "URL",
        description: "Show files used for this location",
      },
    },
    {
      name: "--json",
      description: "UNSTABLE: Output information as JSON",
    },
  ],
  args: {
    name: "file",
    description: "The source file to show information for",
    isOptional: true,
  },
};

const denoRepl: Fig.Subcommand = {
  name: "repl",
  description: "Open an interactive read-eval-print loop",
  options: [
    ...globalOptions,
    ...runtimeOptions({ perms: false, inspector: true }),
    {
      name: "--eval",
      insertValue: "--eval '{cursor}'",
      description: "Evaluate this code when the REPL starts",
      args: {
        name: "code",
        description: "The code to evaluate",
      },
    },
  ],
};

const denoCompile: Fig.Subcommand = {
  name: "compile",
  description: "UNSTABLE: Compile the script into a self-contained executable",
  args: [
    {
      name: "script",
      description: "The source to be compiled",
      template: "filepaths",
    },
    {
      name: "arguments",
      description: "Arguments to be provided to the script",
      isOptional: true,
      isVariadic: true,
    },
  ],
  options: [
    ...globalOptions,
    ...runtimeOptions({ perms: true, inspector: false }),
    {
      name: ["-o", "--output"],
      description: "Location of the output binary (default: ./<inferred-name>)",
      args: {
        name: "destination",
        // Using folders because users probably don't want to select
        // the name of a pre-existing file
        template: "folders",
      },
    },
    {
      name: "--target",
      description: "The target OS architecture",
      args: {
        name: "arch",
        // TODO: Maybe use a fun CPU icon for these? Something like this:
        // https://github.com/elementary/icons/blob/master/mimes/128/application-x-firmware.svg
        suggestions: [
          "x86_64-unknown-linux-gnu",
          "x86_64-pc-windows-msvc",
          "x86_64-apple-darwin",
          "aarch64-apple-darwin",
        ],
      },
    },
  ],
};

const denoCache: Fig.Subcommand = {
  name: "cache",
  description: "Cache and compile remote dependencies, recursively",
  args: {
    name: "script",
    description: "The script(s) to cache",
    template: "filepaths",
    isVariadic: true,
  },
  options: [...globalOptions, ...compileOptions],
};

const denoBundle: Fig.Subcommand = {
  name: "bundle",
  description: "Bundle module and dependencies into a single file",
  args: [
    {
      name: "source",
      description: "The source file to bundle",
      template: "filepaths",
    },
    {
      name: "output",
      description: "The output file",
      template: "folders",
      isOptional: true,
    },
  ],
  options: [...globalOptions, ...compileOptions],
};

const subcommands: Fig.Subcommand[] = [
  denoBundle,
  denoCache,
  denoCompile,
  denoCompletions,
  denoCoverage,
  denoDoc,
  denoEval,
  denoFmt,
  denoInfo,
  denoInstall,
  denoLint,
  denoLsp,
  denoRepl,
  denoRun,
  denoTest,
  denoTypes,
  denoUpgrade,
];

const completionSpec: Fig.Spec = {
  name: "deno",
  description: "A secure JavaScript and TypeScript runtime",
  subcommands: [
    ...subcommands,
    {
      name: "help",
      description: "Print help information for the CLI or a subcommand",
      args: {
        name: "subcommand",
        description: "The subcommand to get help with",
        isOptional: true,
        // Fig.Subcommand can be assigned to Fig.Suggestion
        suggestions: subcommands,
      },
    },
  ],
  options: [
    ...globalOptions,
    {
      name: "--version",
      description: "Prints version information, including TypeScript and V8",
    },
    {
      name: "-V",
      description: "Prints Deno's version",
    },
  ],
};

export default completionSpec;
