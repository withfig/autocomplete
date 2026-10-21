const completionSpec: Fig.Spec = {
  name: "pyright",
  description: "Static type checker for Python",
  args: {
    name: "files",
    description: "Files or directories to type check",
    isVariadic: true,
    isOptional: true,
    template: ["filepaths", "folders"],
  },
  options: [
    {
      name: "--createstub",
      description: "Create type stub file(s) for import",
      args: {
        name: "IMPORT",
      },
    },
    {
      name: "--dependencies",
      description: "Emit import dependency information",
    },
    {
      name: ["-h", "--help"],
      description: "Show this help message",
    },
    {
      name: "--ignoreexternal",
      description: "Ignore external imports for --verifytypes",
    },
    {
      name: "--level",
      description: "Minimum diagnostic level (error or warning)",
      args: {
        name: "LEVEL",
        suggestions: ["error", "warning"],
      },
    },
    {
      name: "--outputjson",
      description: "Output results in JSON format",
    },
    {
      name: ["-p", "--project"],
      description: "Use the configuration file at this location",
      args: {
        name: "FILE OR DIRECTORY",
        template: ["filepaths", "folders"],
      },
    },
    {
      name: "--pythonplatform",
      description: "Analyze for a specific platform",
      args: {
        name: "PLATFORM",
        suggestions: ["Darwin", "Linux", "Windows", "iOS", "Android"],
      },
    },
    {
      name: "--pythonpath",
      description: "Path to the Python interpreter",
      args: {
        name: "FILE",
        template: "filepaths",
      },
    },
    {
      name: "--pythonversion",
      description: "Analyze for a specific version (3.3, 3.4, etc.)",
      args: {
        name: "VERSION",
      },
    },
    {
      name: "--skipunannotated",
      description: "Skip analysis of functions with no type annotations",
    },
    {
      name: "--stats",
      description: "Print detailed performance stats",
    },
    {
      name: ["-t", "--typeshedpath"],
      description: "Use typeshed type stubs at this location",
      args: {
        name: "DIRECTORY",
        template: "folders",
      },
    },
    {
      name: "--threads",
      description: "Use separate threads to parallelize type checking",
      args: {
        name: "COUNT",
        isOptional: true,
      },
    },
    {
      name: ["-v", "--venvpath"],
      description: "Directory that contains virtual environments",
      args: {
        name: "DIRECTORY",
        template: "folders",
      },
    },
    {
      name: "--verbose",
      description: "Emit verbose diagnostics",
    },
    {
      name: "--verifytypes",
      description: "Verify type completeness of a py.typed package",
      args: {
        name: "PACKAGE",
      },
    },
    {
      name: "--version",
      description: "Print Pyright version and exit",
    },
    {
      name: "--warnings",
      description: "Use exit code of 1 if warnings are reported",
    },
    {
      name: ["-w", "--watch"],
      description: "Continue to run and watch for changes",
    },
  ],
};

export default completionSpec;
