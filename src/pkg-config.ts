const completionSpec: Fig.Spec = {
  name: "pkg-config",
  description: "Return metainformation about installed libraries",
  args: {
    name: "libraries...",
    isVariadic: true,
  },
  options: [
    {
      name: "--mod-version",
      description:
        "Display the version information of the libraries specified on the command line",
    },
    {
      name: "--version",
      description: "Display the version of pkg-config and terminates",
    },
    {
      name: "--atleast-pkgconfig-version",
      description: "Require at least the given version of pkg-config",
      args: {
        name: "version",
      },
    },
    {
      name: "--help",
      description: "Displays a help message and terminates",
    },
    {
      name: "--print-errors",
      description:
        "Print errors if modules cannot be found or if an error occurs in parsing a .pc file",
    },
    {
      name: "--short-errors",
      description: "Print short error messages",
    },
    {
      name: "--silence-errors",
      description:
        "Print errors if modules cannot be found or if an error occurs in parsing a .pc file",
    },
    {
      name: "--errors-to-stdout",
      description:
        "If printing errors, print them to stdout rather than the default stderr",
    },
    {
      name: "--debug",
      description: "Print debugging information",
    },
    {
      name: "--cflags",
      description:
        "Print pre-processor and compile flags required to compile the packages on the command line",
    },
    {
      name: "--cflags-only-I",
      description:
        'Print parts of "--cflags" that define the header search path',
    },
    {
      name: "--cflags-only-other",
      description: 'Print parts of "--cflags" not covered by "--cflags-only-I"',
    },
    {
      name: "--libs",
      description:
        "Print link flags required to compile the packages on the command line",
    },
    {
      name: "--libs-only-L",
      description: 'Print parts of "-libs" that define library search path',
    },
    {
      name: "--libs-only-l",
      description:
        'Print parts of "-libs" that specify which libraries to link to',
    },
    {
      name: "--libs-only-other",
      description:
        'Print parts of "-libs" not covered by "--libs-only-L" and "--libs-only-l"',
    },
    {
      name: "--variable",
      description:
        "Return the value of a variable defined in a package's .pc file",
      args: {
        name: "variable-name",
      },
    },
    {
      name: "--define-variable",
      description:
        "Set a global value for a variable, overriding the value in any .pc files",
      args: {
        name: "variable",
      },
    },
    {
      name: "--print-variables",
      description: "Return a list of all variables defined in the package",
    },
    {
      name: "--uninstalled",
      description:
        'Return successfully if any "-uninstalled" packages are being used, and return failure otherwise',
    },
    {
      name: "--exists",
      description: "Test whether the packages on the command line exist",
    },
    {
      name: "--atleast-version",
      description:
        "Test whether the packages on the command line exist and are at least the specified version",
      args: {
        name: "version",
      },
    },
    {
      name: "--exact-version",
      description:
        "Test whether the packages on the command line exist and are exactly the specified version",
      args: {
        name: "version",
      },
    },
    {
      name: "--max-version",
      description:
        "Test whether the packages on the command line exist and are at most the specified version",
      args: {
        name: "version",
      },
    },
    {
      name: "--validate",
      description: "Check the syntax of a package's .pc file for validity",
    },
    {
      name: "--msvc-syntax",
      description:
        "Output -l and -L flags in the form recognized by the Microsoft Visual C++ command-line compiler",
    },
    {
      name: "--define-prefix",
      description:
        "Use the installed location of the .pc file to determine the prefix",
    },
    {
      name: "--dont-define-prefix",
      description:
        "Use the specified prefix variable value defined in the .pc file as the prefix",
    },
    {
      name: "--prefix-variable",
      description:
        "Set the name of the variable to be overridden instead of prefix when using --define-prefix",
      args: {
        name: "variable-name",
      },
    },
    {
      name: "--static",
      description: "Output libraries suitable for static linking",
    },
    {
      name: "--list-all",
      description: "List all modules found in the pkg-config path",
    },
    {
      name: "--print-provides",
      description: "List all modules the given packages provides",
    },
    {
      name: "--print-requires",
      description: "List all modules the given packages requires",
    },
    {
      name: "--print-requires-private",
      description:
        "List all modules the given packages requires for static linking",
    },
  ],
};

export default completionSpec;
