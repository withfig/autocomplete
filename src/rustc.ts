const completionSpec: Fig.Spec = {
  name: "rustc",
  description: "CLI for rustc",
  args: {
    name: "filepath",
    template: ["filepaths"],
  },
  options: [
    {
      name: ["-h", "--help"],
      description: "Prints out help info",
    },
    {
      name: "--cfg",
      description: "Configures compilation settings",
      args: {
        name: "Spec",
        description: `Ex: verbose' or 'feature="serde"'`,
      },
    },
    {
      name: "-L",
      description: "Adds a directory to the library search path",
      args: [
        {
          name: "kind",
          description: "The kind of search path",
          suggestions: [
            {
              name: "dependency",
              insertValue: "KIND=dependency",
              description:
                "Only search for transitive dependencies in this directory",
            },
            {
              name: "crate",
              insertValue: "KIND=crate",
              description:
                "Only search for this crate's direct dependencies in this directory",
            },
            {
              name: "native",
              insertValue: "KIND=native",
              description: "Only search for native libraries in this directory",
            },
            {
              name: "framework",
              insertValue: "KIND=framework",
              description: "Only search for macOS frameworks in this directory",
            },
            {
              name: "all",
              insertValue: "KIND=all",
              description: "Search for all library kinds in this directory",
            },
          ],
          isOptional: true,
        },
        {
          name: "path",
          description: "Path to search for external crates and libraries",
          template: "folders",
        },
      ],
    },
    {
      name: "--l",
      description: "Links the generated crate to a native library",
      args: [
        {
          name: "kind",
          description: "Kind of library",
          suggestions: [
            {
              name: "dylib",
              insertValue: "KIND=dylib",
              description: "A native dynamic library",
            },
            {
              name: "static",
              insertValue: "KIND=static",
              description: "A native static library",
            },
            {
              name: "framework",
              insertValue: "KIND=framework",
              description: "A macOS framework",
            },
          ],
          isOptional: true,
        },
        {
          name: "Name",
          description: "Native library name",
        },
      ],
    },
    {
      name: "--crate-type",
      description: "Specify types of crates for the compiler to emit",
      args: {
        name: "type",
        description: "Type of crates",
        suggestions: [
          { name: "bin", description: "A runnable executable program" },
          {
            name: "lib",
            description: "Generates a library kind preferred by the compiler",
          },
          { name: "rlib", description: "A Rust static library" },
          { name: "dylib", description: "A native dynamic library" },
          { name: "cdylib", description: "A native static library" },
          { name: "staticlib", description: "A macOS framework" },
          {
            name: "proc-macro",
            description:
              "Generates a format suitable for a procedural macro library that may be loaded by the compiler",
          },
        ],
      },
    },
    {
      name: "--crate-name",
      description: "Specify the name of the crate being built",
      args: {
        name: "Name",
      },
    },
    {
      name: "--edition",
      description: "Specify the edition to use",
      args: {
        name: "edition",
        suggestions: ["2015", "2018", "2021"],
      },
    },
    {
      name: "--emit",
      description: "Specify the types of output files to generate",
      args: {
        name: "type",
        suggestions: [
          {
            name: "asm",
            description: "Generates a file with the crate's assembly code",
          },
          {
            name: "llvm-bc",
            description: "Generates a binary file containing the LLVM bitcode",
          },
          {
            name: "llvm-ir",
            description: "Generates a file containing LLVM IR",
          },
          { name: "obj", description: "Generates a native object file" },
          {
            name: "metadata",
            description: "Generates a file containing metadata about the crate",
          },
          {
            name: "link",
            description: "Generates the crates specified by --crate-type",
          },
          {
            name: "dep-info",
            description:
              "Generates a file with Makefile syntax that indicates all the source files that were loaded to generate the crate",
          },
          {
            name: "mir",
            description:
              "Generates a file containing rustc's mid-level intermediate representation",
          },
        ],
      },
    },
    {
      name: "--print",
      description: "Prints compiler info",
      args: {
        name: "type",
        suggestions: [
          { name: "crate-name", description: "The name of the crate" },
          {
            name: "file-names",
            description: "The names of the files created by the link emit kind",
          },
          { name: "sysroot", description: "Path to the sysroot" },
          { name: "target-libdir", description: "Path to the target libdir" },
          { name: "cfg", description: "List of cfg values" },
          {
            name: "target-list",
            description:
              "List of known targets. The target may be selected with the --target flag",
          },
          {
            name: "target-cpus",
            description: "List of available CPU values for the current target",
          },
          {
            name: "target-features",
            description:
              "List of available target features for the current target",
          },
          {
            name: "relocation-models",
            description:
              "List of relocation models. Relocation models may be selected with the -C relocation-model=val flag",
          },
          { name: "code-models", description: "List of code models" },
          {
            name: "tls-models",
            description: "List of Thread Local Storage models supported",
          },
          { name: "target-spec-json" },
          {
            name: "native-static-libs",
            description:
              "This may be used when creating a staticlib crate type",
          },
        ],
      },
    },
    {
      name: "-g",
      description: "Synonym for -C debuginfo=2",
    },
    {
      name: "-O",
      description: "Synonym for -C opt-level=2",
    },
    {
      name: "-o",
      description: "Specify the filename to write output",
      args: {
        name: "filename",
      },
    },
    {
      name: "--out-dir",
      description: "Specify directory to write output",
      args: {
        name: "dir",
      },
    },
    {
      name: "--explain",
      description: "Provides a detailed explanation of an error message",
      args: {
        name: "Error Code",
      },
    },
    {
      name: "--test",
      description: "Builds a test harness",
    },
    {
      name: "--target",
      description: "Selects a target triple to build",
      args: {
        name: "Target",
      },
    },
    {
      name: ["-W", "--warn"],
      description: "Sets lint warnings",
      args: {
        name: "OPT",
      },
    },
    {
      name: ["-A", "--allow"],
      description: "Set lint allowed",
      args: {
        name: "OPT",
      },
    },
    {
      name: ["-D", "--deny"],
      description: "Set lint denied",
      args: {
        name: "OPT",
      },
    },
    {
      name: ["-F", "--forbid"],
      description: "Set lint forbid",
      args: {
        name: "Opt",
      },
    },
    {
      name: "--cap-lints",
      description: "Set the most restrictive lint level",
      args: {
        name: "Level",
      },
    },
    {
      name: ["-C", "--codegen"],
      description: "Set a codegen option",
      args: {
        name: "option",
      },
    },
    {
      name: "-Z",
      description: "Set unstable options",
      args: {
        name: "option",
        description: "Unstable options to pass to rustc",
      },
    },
    {
      name: ["-V", "--version"],
      description: "Prints version",
    },
    {
      name: ["-v", "--verbose"],
      description: "Use verbose output",
    },
    {
      name: "--extern",
      description: "Specify where an external library is located",
      args: {
        name: "Path",
        description: "Path where crate(s) can be found",
        template: "folders",
      },
    },
    {
      name: "--sysroot",
      description: "Overrides the system root",
      isDangerous: true,
      args: {
        name: "directory",
      },
    },
    {
      name: "--error-format",
      description: "Controls how errors are produced",
      args: {
        name: "format",
        suggestions: ["human", "json", "short"],
      },
    },
    {
      name: "--color",
      description: "Configures coloring of output",
      args: {
        name: "color",
        suggestions: ["auto", "always", "never"],
      },
    },
  ],
};

export default completionSpec;
