const completionSpec: Fig.Spec = {
  name: "hx",
  description: "A post-modern text editor",
  parserDirectives: {
    // Technically the flags _are_ posix compliant, but `-g` cannot be used
    // as -gfetch or -gbuild, so this has to be enabled.
    flagsArePosixNoncompliant: true,
  },
  args: {
    name: "files",
    template: ["filepaths", "folders"],
    isVariadic: true,
  },
  options: [
    {
      name: ["-h", "--help"],
      description: "Show help",
    },
    {
      name: "--tutor",
      description: "Open the tutorial",
    },
    {
      name: "--health",
      description: "Check for errors in editor setup",
      args: {
        name: "language",
        isOptional: true,
      },
    },
    {
      name: "-v",
      description: "Increases logging verbosity",
      isRepeatable: true,
    },
    {
      name: ["-g", "--grammar"],
      description: "Fetch or build tree-sitter grammars",
      args: {
        name: "action",
        suggestions: [
          { name: "fetch", icon: "fig://icon?type=command" },
          { name: "build", icon: "fig://icon?type=command" },
        ],
      },
    },
    {
      name: ["-V", "--version"],
      description: "Print version information",
    },
  ],
};

export default completionSpec;
