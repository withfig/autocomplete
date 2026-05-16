const completionSpec: Fig.Spec = {
  name: "stack",
  description: "The Haskell Tool Stack",
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for stack",
    },
    {
      name: "--version",
      description: "Show version for stack",
    },
    {
      name: "--numeric-version",
      description: "Show only the numeric version for stack",
    },
    {
      name: "--hpack-numeric-version",
      description: "Show only hpack's version number",
    },
    {
      name: "--verbosity",
      description: "Verbosity: silent, error, warn, info, debug",
    },
    {
      name: ["--verbose", "-v"],
      description: 'Enable verbose mode: verbosity level "debug"',
    },
    {
      name: "--silent",
      description: 'Enable silent mode: verbosity level "silent"',
    },
    {
      name: "--stack-root",
      description:
        "Absolute path to the global stack root directory (Overrides any STACK_ROOT environment variable)",
    },
    {
      name: "--work-dir",
      description:
        "Relative path of work directory (Overrides any STACK_WORK environment variable, default is '.stack-work')",
    },
    {
      name: "--system-ghc",
      description:
        "Enable using the system installed GHC (on the PATH) if it is available and its version matches. Disabled by default",
    },
    {
      name: "--no-system-ghc",
      description:
        "Disable using the system installed GHC (on the PATH) if it is available and its version matches. Disabled by default",
      exclusiveOn: ["--system-ghc"],
    },
    {
      name: "--install-ghc",
      description:
        "Enable downloading and installing GHC if necessary (can be done manually with stack setup). Enabled by default)",
    },
    {
      name: "--no-install-ghc",
      description:
        "Disable downloading and installing GHC if necessary (can be done manually with stack setup). Enabled by default",
      exclusiveOn: ["--install-ghc"],
    },
    {
      name: "--ghc-variant",
      description:
        "Specialized GHC variant, e.g. integersimple (incompatible with --system-ghc)",
    },
    {
      name: "--ghc-build",
      description:
        "Specialized GHC build, e.g. 'gmp4' or 'standard' (usually auto-detected)",
    },
    {
      name: ["--jobs", "-j"],
      description:
        "Number of concurrent jobs to run. Should be provied as ARGS",
    },
    {
      name: "--extra-include-dirs",
      description: "Extra directories to check for C header files",
    },
    {
      name: "--extra-lib-dir",
      description: "Extra directories to check for libraries",
    },
    {
      name: "--custom-preprocessor-extensions",
      description: "Extensions used for custom preprocessors",
    },
    {
      name: ["--color", "--colour"],
      description: "Specify when to use color in output",
      args: {
        name: "WHEN",
        suggestions: ["always", "never", "auto"],
        default: "never",
        description:
          "WHEN is 'always', 'never', or 'auto'. On Windows versions before Windows 10, for terminals that do not support color codes, the default is 'never'; color may work on terminals that support color codes",
      },
    },
    {
      name: "--compiler",
      description: "Use the specified compiler",
      args: {
        name: "COMPILER",
      },
    },
    {
      name: "--terminal",
      description:
        "Enable overriding terminal detection in the case of running in a false terminal",
    },
    {
      name: "--no-terminal",
      description:
        "Disable overriding terminal detection in the case of running in a false terminal",
      exclusiveOn: ["--teminal"],
    },
    {
      name: ["--stack-colors", "--stack-colours"],
      description: "Specify stack's output styles",
      args: {
        name: "STYLE",
        description:
          "It a colon-delimited sequence of key=value, where 'key' is a style name and 'value' is a semicolon-delimited list of 'ANSI' SGR (Select Graphic Rendition) control codes (in decimal). Use 'stack ls stack-colors --basic' to see the current sequence. In shells where a semicolon is a command separator, enclose STYLES in quotes",
      },
    },
    {
      name: "--terminal-width",
      description:
        "Specify the width of the terminal, used for pretty-print messages",
      args: {
        name: "INT",
      },
    },
    {
      name: "--stack-yaml",
      description:
        "Override project stack.yaml file (overrides any STACK_YAML environment variable)",
      args: {
        name: "STACK-YAML",
      },
    },
    {
      name: "--lock-file",
      description: "Specify how to interact with lock files",
      args: {
        name: "ARG",
        description:
          "Default: read/write. If resolver is overridden: read-only",
      },
    },
  ],
  subcommands: [
    {
      name: "build",
      description:
        "Build the package(s) in the current directory/configuration",
      options: [
        {
          name: "--resolver",
          description: "Override resolver in project file",
          args: {
            name: "RESOLVER",
          },
        },
        {
          name: "--bench",
          description: "Override resolver in project file",
        },
        {
          name: "--test",
          description: "Run complete test suite",
        },
        {
          name: "--copy-bins",
          description:
            "Enable copying any generated executables to the local bin path (default: disabled)",
        },
        {
          name: "--no-copy-bins",
          description:
            "Disable copying any generated executables to the local bin path (default: disabled)",
          exclusiveOn: ["--no-copy-bins"],
        },
        {
          name: "--haddock",
          description:
            "Enable generating Haddocks the package(s) in this directory/configuration (default: disabled)",
        },
        {
          name: "--no-haddock",
          description:
            "Disable generating Haddocks the package(s) in this directory/configuration (default: disabled)",
          exclusiveOn: ["--no-haddock"],
        },
        { name: "--open", description: "Enable opening the local Haddock" },
        { name: "--no-open", description: "Disable opening the local Haddock" },
        {
          name: "--haddock-deps",
          description:
            "Enable building Haddocks for dependencies (default: true if building Haddocks, false otherwise)",
        },
        {
          name: "--no-haddock-deps",
          description:
            "Disable building Haddocks for dependencies (default: true if building Haddocks, false otherwise)",
          exclusiveOn: ["--haddock-deps"],
        },
        {
          name: "--pedantic",
          description: "Turn on all warnings(-Wall) and errors(-Werror)",
        },
        {
          name: "--only-locals",
          description:
            "Only build packages in the local database, fail if the build plan includes the snapshot database",
        },
        {
          name: "--file-watch",
          description:
            "Watch for changes in the files used to build the project, and kick off a new build when new changes are saved",
        },
        {
          name: "--watch-all",
          description: "Watch all local files not taking targets into account",
        },
        {
          name: "-file-watch-poll",
          description:
            "Like --file-watch, but polling the filesystem instead of using events",
        },
        {
          name: "--only-snapshot",
          description:
            "Only build packages for the snapshot database, not the local database",
        },
        {
          name: "--only-configure",
          description:
            "Only perform the configure step, not any builds. Intended for tool usage, may break when used on multiple packages at once!",
        },
        {
          name: "--trace",
          description:
            "Enable profiling in libraries, executables, etc. for all expressions and generate a backtrace on exception",
        },
        {
          name: "--profile",
          description:
            "Runs profiling in libraries, executables, etc. for all expressions and generate a profiling report in tests or benchmarks",
        },
        {
          name: "--no-strip",
          description:
            "Disable DWARF debugging symbol stripping in libraries, executables, etc. for all expressions, producing larger executables but allowing the use of standard debuggers/profiling tools/other utilities that use debugging symbols",
        },
        {
          name: "--library-profiling",
          description:
            "Enable library profiling for TARGETs and all its dependencies (default: disabled)",
        },
        {
          name: "--no-library-profiling",
          description:
            "Disable library profiling for TARGETs and all its dependencies (default: disabled)",
        },
        {
          name: "--executable-profiling",
          description:
            "Enable executable profiling for TARGETs and all its dependencies (default: disabled)",
        },
        {
          name: "--no-executable-profiling",
          description:
            "Disable executable profiling for TARGETs and all its dependencies (default: disabled)",
          exclusiveOn: ["--executable-profiling"],
        },
        {
          name: "--library-stripping",
          description:
            "Enable library stripping for TARGETs and all its dependencies (default: enabled",
        },
        {
          name: "--no-library-stripping",
          description:
            "Disable library stripping for TARGETs and all its dependencies (default: enabled",
          exclusiveOn: ["--library-stripping"],
        },
        {
          name: "--executable-stripping",
          description:
            "Enable executable stripping for TARGETs and all its dependencies (default: enabled)",
        },
        {
          name: "--no-executable-stripping",
          description:
            "Disable executable stripping for TARGETs and all its dependencies (default: enabled)",
          exclusiveOn: ["--executable-stripping"],
        },
        {
          name: "--ghc-options",
          description:
            "Specify additional options passed to GHC for all local targets. Does not affect extra-dep and snapshot packages at all",
          args: {},
        },
      ],
    },
    {
      name: "install",
      description:
        "Builds the package in current directory and copies it as an executable for system wide usage. Shortcut for 'build --copy-bins",
    },
    {
      name: "test",
      description: "Shortcut for 'build --test'",
    },
    {
      name: "bench",
      description: "Shortcut for 'build --bench'",
    },
    {
      name: "haddock",
      description: "Shortcut for 'build --haddock'",
    },
    {
      name: "new",
      description:
        "Create a new project from a template. Run `stack templates' to see available templates. Note: you can also specify a local file or a remote URL as a template",
    },
    {
      name: "templates",
      description:
        "Show how to find templates available for `stack new'. `stack new' can accept a template from a remote repository (default: github), local file or remote URL. Note: this downloads the help file",
    },
    {
      name: "init",
      description:
        "Create stack project config from cabal or hpack package specifications'",
    },
    {
      name: "setup",
      description: "Get the appropriate GHC for your project",
    },
    {
      name: "path",
      description: "Print out handy path information",
    },
    {
      name: "ls",
      description:
        "List command. Supports snapshots, dependencies and stack's styles",
    },
    {
      name: "unpack",
      description: "Unpack one or more packages locally",
    },
    {
      name: "update",
      description: "Update the package index",
    },
    {
      name: "upgrade",
      description: "Upgrade to the latest stack version",
    },
    {
      name: "upload",
      description: "Upload a package to Hackage",
    },
    {
      name: "sdist",
      description: "Create source distribution tarballs",
    },
    {
      name: "dot",
      description:
        "Visualize your project's dependency graph using Graphviz dot",
    },
    {
      name: "hoogle",
      description:
        "Run hoogle, the Haskell API search engine. Use the '-- ARGUMENT(S)' syntax to pass Hoogle arguments, e.g. stack hoogle -- --count=20, or stack hoogle --server --local",
    },
    {
      name: "exec",
      description:
        "Execute a command. If the command is absent, the first of any arguments is taken as the command",
      options: [
        {
          name: "--snapshot-location-base",
          description: "The base location of LTS/Nightly snapshots",
          args: {
            name: "URL",
          },
        },
        {
          name: "--cwd",
          description:
            "Sets the working directory before executing the command",
          args: {
            name: "DIR",
          },
        },
        {
          name: "--setup-info-yaml",
          description:
            "Alternate URL or relative / absolute path for stack dependencies",
          args: {
            name: "URL",
          },
        },
        {
          name: "--ghc-package-path",
          description:
            "Enable setting the GHC_PACKAGE_PATH variable for the subprocess (default: enabled)",
        },
        {
          name: "--no-ghc-package-path",
          description:
            "Disable setting the GHC_PACKAGE_PATH variable for the subprocess (default: enabled)",
        },
        {
          name: "--package",
          description: "Additional package(s) that must be installed",
          args: {
            name: "PACKAGE(S)",
          },
        },
        {
          name: "--stack-exe",
          description:
            "Enable setting the STACK_EXE environment variable to the path for the stack executable (default: enabled)",
        },
        {
          name: "--no-stack-exe",
          description:
            "Disable setting the STACK_EXE environment variable to the path for the stack executable (default: enabled)",
        },
      ],
    },
    {
      name: "run",
      description:
        "Build and run an executable. Defaults to the first available executable if none is provided as the first argument",
    },
    { name: "repl", description: "Load a REPL" },
  ],
};
export default completionSpec;
