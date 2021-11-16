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
        description:
          "WHEN is 'always', 'never', or 'auto'. On Windows versions before Windows 10, for terminals that do not support color codes, the default is 'never'; color may work on terminals that support color codes",
      },
    },
  ],
};
export default completionSpec;
