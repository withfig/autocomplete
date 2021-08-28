const testList: Fig.Generator = {
  script: function (context) {
    const base = context[context.length - 1];
    // allow split by single colon so that it triggers on a::b:
    const indexIntoModPath = Math.max(base.split(/::?/).length, 1);
    // split by :: so that tokens with a single colon are allowed
    const moduleTokens = base.split("::");
    const lastModule = moduleTokens.pop();
    // check if the token has a : on the end
    const hasColon = lastModule[lastModule.length - 1] == ":" ? ":" : "";
    return `cargo t -- --list | awk '/: test$/ { print substr($1, 1, length($1) - 1) }' | awk -F "::" '{ print "${hasColon}"$${indexIntoModPath},int( NF / ${indexIntoModPath} ) }'`;
  },
  postProcess: function (out) {
    return [...new Set(out.split("\n"))].map((line) => {
      const [display, last] = line.split(" ");
      const lastModule = parseInt(last);
      const displayName = display.replaceAll(":", "");
      const name = displayName.length
        ? `${display}${lastModule ? "" : "::"}`
        : "";
      return { name, displayName };
    });
  },
  trigger: ":",
  getQueryTerm: ":",
};

const completionSpec: Fig.Spec = {
  name: "cargo",
  icon: "📦",
  description: "CLI Interface for Cargo",
  subcommands: [
    {
      name: ["build", "b"],
      description: "Compile local package and dependencies",
      icon: "📦",
      options: [
        {
          name: ["-h", "--help"],
          description: "Output usage info",
        },
        {
          name: "--bins",
          description: "Build all binaries",
        },
        {
          name: "--all-targets",
          description: "Activate all available features",
        },
        {
          name: "--all",
          description: "Alias for workspace",
        },
        {
          name: "--release",
          description: "Build in release mode, with optimizations",
        },
        {
          name: ["-j", "--jobs"],
          description: "Number of CPUs",
          insertValue: "-j {cursor}",
        },
      ],
    },
    {
      name: ["run", "r"],
      description: "Run a binary or example of the local package",
      icon: "📦",
      options: [
        {
          name: ["-h", "--help"],
          description: "Output usage info",
        },
        {
          name: "--release",
          description: "Run in release mode, with optimizations",
        },
      ],
    },
    {
      name: "init",
      description: "Creates new cargo pkg in directory",
      icon: "📦",
      options: [
        {
          name: ["-h", "--help"],
          description: "Output usage info",
        },
        {
          name: "--bin",
          description: "Use a binary (application) template [default]",
        },
        {
          name: "--offline",
          description: "Run without network",
        },
      ],
      args: {
        template: "filepaths",
      },
    },
    {
      name: ["test", "t"],
      description: "Run tests",
      icon: "📦",
      args: {
        name: "test name",
        generators: testList,
      },
      options: [
        {
          name: ["-h", "--h"],
          description: "Output usage info",
        },
        {
          name: "--release",
          description: "Test in release mode, with optimizations",
        },
      ],
    },
    {
      name: "rustc",
      description:
        "Compile a package, and pass extra options to the compiler format cargo rustc [options] -- [flags to pass]",
      subcommands: [
        {
          name: "--",
          description: "Placed before defining flags passed from rustc",
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
                      description:
                        "Only search for native libraries in this directory",
                    },
                    {
                      name: "framework",
                      insertValue: "KIND=framework",
                      description:
                        "Only search for macOS frameworks in this directory",
                    },
                    {
                      name: "all",
                      insertValue: "KIND=all",
                      description:
                        "Search for all library kinds in this directory",
                    },
                  ],
                  isOptional: true,
                },
                {
                  name: "path",
                  description:
                    "Path to search for external crates and libraries",
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
                    description:
                      "Generates a library kind preferred by the compiler",
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
                    description:
                      "Generates a file with the crate's assembly code",
                  },
                  {
                    name: "llvm-bc",
                    description:
                      "Generates a binary file containing the LLVM bitcode",
                  },
                  {
                    name: "llvm-ir",
                    description: "Generates a file containing LLVM IR",
                  },
                  {
                    name: "obj",
                    description: "Generates a native object file",
                  },
                  {
                    name: "metadata",
                    description:
                      "Generates a file containing metadata about the crate",
                  },
                  {
                    name: "link",
                    description:
                      "Generates the crates specified by --crate-type",
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
                    description:
                      "The names of the files created by the link emit kind",
                  },
                  { name: "sysroot", description: "Path to the sysroot" },
                  {
                    name: "target-libdir",
                    description: "Path to the target libdir",
                  },
                  { name: "cfg", description: "List of cfg values" },
                  {
                    name: "target-list",
                    description:
                      "List of known targets. The target may be selected with the --target flag",
                  },
                  {
                    name: "target-cpus",
                    description:
                      "List of available CPU values for the current target",
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
                    description:
                      "List of Thread Local Storage models supported",
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
              description:
                "Provides a detailed explanation of an error message",
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
        },
      ],
      options: [
        {
          name: ["-q", "--quiet"],
          description: "No output",
        },
        {
          name: ["-p", "--package"],
          description: "Package to build",
          args: {
            name: "spec",
          },
        },
        {
          name: ["-j", "--jobs"],
          description: "Number of parallel jobs, defaults to # of CPUs",
          args: {
            name: "Number",
          },
        },
        {
          name: "--lib",
          description: "Builds only this package's library",
        },
        {
          name: "--bin",
          description: "Builds only the specified binary",
          args: {
            name: "Name",
            description: "Name of the binary",
          },
        },
        {
          name: "--bins",
          description: "Builds all binaries",
        },
        {
          name: "--example",
          description: "Builds only the specified example",
          args: {
            name: "Name",
          },
        },
        {
          name: "--examples",
          description: "Builds all examples",
        },
        {
          name: "--test",
          description: "Builds only the specified test target",
          args: {
            name: "Name",
          },
        },
        {
          name: "--tests",
          description: "Builds all tests",
        },
        {
          name: "--bench",
          description: "Builds only the specified bench target",
          args: {
            name: "Name",
          },
        },
        {
          name: "--benches",
          description: "Builds all benches",
          args: {
            name: "Name",
          },
        },
        {
          name: "--all-targets",
          description: "Builds all targets",
          args: {
            name: "Name",
          },
        },
        {
          name: "--release",
          description: "Builds artifacts in release mode with optimizations",
        },
        {
          name: "--no-default-features",
          description: "Do not activate the `default` feature",
        },
        {
          name: "--target",
          description: "Target triple which compiles will be for",
          args: {
            name: "Triple",
          },
        },
        {
          name: "--print",
          description: "Outputs compiler information without compiling",
          args: {
            name: "Info",
          },
        },
        {
          name: "--target-dir",
          description: "Directory for all generated artifacts",
          args: {
            name: "Directory",
            template: "folders",
          },
        },
        {
          name: "--manifest-path",
          description: "Path to Cargo.toml",
          args: {
            name: "Path",
            template: ["folders", "filepaths"],
          },
        },
        {
          name: "--message-format",
          description: "Error format",
          args: {
            name: "Format",
            suggestions: [
              {
                name: "human",
                description: "Human readable, conflicts with short and json",
              },
              {
                name: "short",
                description:
                  "Emits shorter, human-readable text messages, conflicts with human and json",
              },
              {
                name: "json",
                description:
                  "Emits JSON messages to stdout, Conflicts with human and short",
              },
              {
                name: "json-diagnostic-short",
                description:
                  "Ensures the rendered field of JSON messages contains the 'short' rendering from rustc",
              },
              {
                name: "json-diagnostic-rendered-ansi",
                description:
                  "Ensures the rendered field of JSON messages contains embedded ANSI color codes for respecting rustc's default color scheme",
              },
              {
                name: "json-render-diagnostics",
                description:
                  "Instructs Cargo to not include rustc diagnostics in in JSON messages printed, but instead Cargo itself should render the JSON diagnostics coming from rustc",
              },
            ],
          },
        },
        {
          name: "--unit-graph",
          description: "Outputs build graph in JSON",
        },
        {
          name: "--ignore-rust-version",
          description: "Ignores `rust-version` specification in packages",
        },
        {
          name: ["-v", "--verbose"],
          description: "Use verbose output",
        },
        {
          name: "-vv",
          description: "Very verbose, aka build.rs output",
        },
        {
          name: "--future-incompat-report",
          description:
            "Ouputs a future incompatibility report at the end of the build",
        },
        {
          name: "--color",
          description: "Coloring",
          args: {
            name: "When",
            suggestions: ["auto", "always", "never"],
          },
        },
        {
          name: "--frozen",
          description: "Require Cargo.lock and cache are up to date",
        },
        {
          name: "--locked",
          description: "Require Cargo.lock is up to date",
        },
        {
          name: "--offline",
          description: "Run without accessing the network",
        },
        {
          name: "--Z",
          description: "Unstable (nightly-only) flags to Cargo",
        },
        {
          name: ["-h", "--help"],
          description: "Prints help information",
        },
      ],
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Overview of CLI",
    },
    {
      name: ["-V", "--version"],
      description: "The current version",
    },
    {
      name: ["-q", "--quiet"],
      description: "No output",
    },
  ],
};

export default completionSpec;
