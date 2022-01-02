const commonOptions: Fig.Option[] = [
  {
    name: ["--help", "-h", "-help"],
    description: "Show help information",
  },
  {
    name: "--version",
    description: "Show the version",
  },
];

const completionSpec: Fig.Spec = {
  name: "swift",
  description: "Swift compiler",
  options: [
    {
      name: ["--help", "-h", "-help"],
      description: "Show help information",
    },
  ],
  subcommands: [
    // swift build
    {
      name: "build",
      description: "Build sources into binary products",
      options: [
        ...commonOptions,
        {
          name: "--build-tests",
          description: "Build both source and test targets",
        },
        {
          name: "--show-bin-path",
          description: "Print the binary output path",
        },
        {
          name: "--target",
          description: "Build the specified target",
          args: {
            name: "target",
            description: "The name of the target to build",
            isOptional: false,
          },
        },
        {
          name: "--product",
          description: "Build the specified product",
          args: {
            name: "product",
            description: "The name of the product to build",
            isOptional: false,
          },
        },
      ],
    },
    // swift run
    {
      name: "run",
      description: "Build and run an executable product",
      options: [
        ...commonOptions,
        {
          name: "--skip-build",
          description: "Skip building the executable product",
        },
        {
          name: "--build-tests",
          description: "Build both source and test targets",
        },
        {
          name: "--repl",
          description: "Launch Swift REPL for the package",
        },
      ],
      args: [
        {
          name: "executable",
          description: "The executable to run",
          isOptional: true,
        },
        {
          name: "arguments",
          description: "The arguments to pass to the executable",
          isOptional: true,
        },
      ],
    },
    // swift test
    {
      name: "test",
      description: "Build and run tests",
      options: [
        ...commonOptions,
        {
          name: "--skip-build",
          description: "Skip building the test target",
        },
        {
          name: "--parallel",
          description: "Run the tests in parallel",
        },
        {
          name: "--num-workers",
          description: "Number of tests to execute in parallel",
          args: {
            name: "num-workers",
            description: "Number of tests to execute in parallel",
            isOptional: false,
          },
        },
        {
          name: ["-l", "--list-tests"],
          description: "Lists test methods in specifier format",
        },
        {
          name: "--show-codecov-path",
          description: "Print the path of the exported code coverage JSON file",
        },
        {
          name: ["-s", "--specifier"],
          description: "",
        },
        {
          name: "--filter",
          description: "Run test cases matching regular expression",
          args: {
            name: "regex",
            description:
              "<test-target>.<test-case> or <test-target>.<test-case>/<test>",
            isOptional: false,
          },
        },
        {
          name: "--skip",
          description: "Skip test cases matching regular expression",
          args: {
            name: "regex",
            description:
              "<test-target>.<test-case> or <test-target>.<test-case>/<test>",
            isOptional: false,
          },
        },
        {
          name: "--xunit-output",
          description: "Path where the xUnit xml file should be generated",
          args: {
            name: "path",
            description: "Path where the xUnit xml file should be generated",
            isOptional: false,
          },
        },
        {
          name: "--test-product",
          description: "Test the specified product",
          args: {
            name: "product",
            description: "The product to be tested",
            isOptional: false,
          },
        },
      ],
    },
    // swift package
    {
      name: "package",
      description: "Perform operations on Swift packages",
      options: [
        ...commonOptions,
        {
          name: "-Xcc",
          description: "Pass a flag through to all C compiler invocations",
          args: {
            name: "flag",
            description:
              "The flag to pass through to all C compiler invocations",
            isOptional: false,
          },
        },
        {
          name: "-Xswiftc",
          description: "Pass a flag through to all Swift compiler invocations",
          args: {
            name: "flag",
            description:
              "The flag to pass through to all Swift compiler invocations",
            isOptional: false,
          },
        },
        {
          name: "-Xlinker",
          description: "Pass a flag through to all linker invocations",
          args: {
            name: "flag",
            description: "The flag to pass through to all linker invocations",
            isOptional: false,
          },
        },
        {
          name: ["-c", "--configuration"],
          description: "Build with configuration (default: debug)",
          args: {
            name: "configuration",
            description: "The build configuration",
            suggestions: ["debug", "release"],
            isOptional: false,
          },
        },
        {
          name: "--build-path",
          description: "Specify build/cache directory",
          args: {
            name: "path",
            description: "The path to a specific build/cache directory",
            isOptional: false,
          },
        },
        {
          name: "--cache-path",
          description: "Specify the shared cache directory",
          args: {
            name: "path",
            description: "The path to a specific shared cache directory",
            isOptional: false,
          },
        },
        {
          name: "--enable-repository-cache",
          description:
            "Enable the use of a shared cache when fetching repositories (default: enabled)",
          exclusiveOn: ["--disable-repository-cache"],
        },
        {
          name: "--disable-repository-cache",
          description:
            "Disable the use of a shared cache when fetching repositories (default: enabled)",
          exclusiveOn: ["--enable-repository-cache"],
        },
        {
          name: ["-C", "--chdir"],
          description:
            "The custom working directory that the tool should operate in",
          deprecated: true,
          args: {
            name: "chdir",
            description: "",
            isOptional: false,
          },
        },
        {
          name: "--package-path",
          description: "Change working directory before any other operation",
          args: {
            name: "path",
            description: "The working directory path to change to",
            isOptional: false,
          },
        },
        {
          name: "--multiroot-data-file",
          description:
            "The path to the file containing multiroot package data. This is currently Xcode's workspace file",
          args: {
            name: "multiroot-data-file",
            description: "",
            isOptional: false,
          },
        },
        {
          name: "--enable-prefetching",
          description:
            "Enable prefetching in resolver which will kick off parallel git cloning (default: enabled)",
          exclusiveOn: ["--disable-prefetching"],
        },
        {
          name: "--disable-prefetching",
          description:
            "Disable  prefetching in resolver which will kick off parallel git cloning (default: enabled)",
          exclusiveOn: ["--enable-prefetching"],
        },
        {
          name: ["-v", "--verbose"],
          description: "Increase verbosity of informational output",
        },
        {
          name: "--disable-sandbox",
          description: "Disable using the sandbox when executing subprocesses",
        },
        {
          name: "--manifest-cache",
          description: "Caching mode of Package.swift manifests",
          args: {
            name: "mode",
            description: "The caching mode",
            suggestions: ["shared", "local", "none"],
            isOptional: false,
            default: "shared",
          },
        },
        {
          name: "--destination",
          description:
            "Path to the compilation destination describing JSON file",
          args: {
            name: "path",
            description:
              "The path to the compilation destination describing JSON file",
            isOptional: false,
          },
        },
        {
          name: "--triple",
          description: "The compilation destination's target triple",
          args: {
            name: "triple",
            description: "The compilation destination's target triple",
            isOptional: false,
          },
        },
        {
          name: "--sdk",
          description: "Path to the compilation destination's SDK",
          args: {
            name: "path",
            description: "Path to the compilation destination's SDK",
            isOptional: false,
          },
        },
        {
          name: "--toolchain",
          description: "Path to the compilation destination's toolchain",
          args: {
            name: "path",
            description: "Path to the compilation destination's toolchain",
            isOptional: false,
          },
        },
        {
          name: "--static-swift-stdlib",
          description: "Link Swift stdlib statically (default: false)",
          exclusiveOn: ["--no-static-swift-stdlib"],
        },
        {
          name: "--no-static-swift-stdlib",
          description: "Don't link Swift stdlib statically (default: false)",
          exclusiveOn: ["--static-swift-stdlib"],
        },
        {
          name: "--skip-update",
          description:
            "Skip updating dependencies from their remote during a resolution",
        },
        {
          name: "--sanitize",
          description: "Turn on runtime checks for erroneous behavior",
          args: {
            name: "type",
            description: "What to sanitize",
            suggestions: ["address", "thread", "undefined", "scudo"],
            isOptional: false,
          },
        },
        {
          name: "--enable-code-coverage",
          description: "Enable code coverage (default: disabled)",
          exclusiveOn: ["--disable-code-coverage"],
        },
        {
          name: "--disable-code-coverage",
          description: "Disable code coverage (default: disabled)",
          exclusiveOn: ["--enable-code-coverage"],
        },
        {
          name: [
            "--force-resolved-versions",
            "--disable-automatic-resolution",
            "--only-use-versions-from-resolved-file",
          ],
          description:
            "Only use versions from the Package.resolved file and fail resolution if it is out-of-date",
        },
        {
          name: "--auto-index-store",
          description:
            "Enable or disable indexing-while-building feature (default: auto)",
          exclusiveOn: ["--enable-index-store", "--disable-index-store"],
        },
        {
          name: "--enable-index-store",
          description: "Enable indexing-while-building feature (default: auto)",
          exclusiveOn: ["--auto-index-store", "--disable-index-store"],
        },
        {
          name: "--disable-index-store",
          description:
            "Disable indexing-while-building feature (default: auto)",
          exclusiveOn: ["--auto-index-store", "--enable-index-store"],
        },
        {
          name: "--enable-parseable-module-interfaces",
          description:
            "Whether to enable generation of `.swiftinterface`s alongside `.swiftmodule`s",
        },
        {
          name: "--trace-resolver",
          description: "Write dependency resolver trace to a file",
        },
        {
          name: ["-j", "--jobs"],
          description:
            "The number of jobs to spawn in parallel during the build process",
          args: {
            name: "jobs",
            description:
              "The number of jobs to spawn in parallel during the build process",
            isOptional: false,
          },
        },
        {
          name: "--enable-build-manifest-caching",
          description:
            "Whether to enable llbuild manifest caching (default: enabled)",
        },
        {
          name: "--disable-build-manifest-caching",
          description:
            "Whether to disable llbuild manifest caching (default: enabled)",
        },
        {
          name: "--emit-swift-module-separately",
          description: "Emit the Swift module separately from the object files",
        },
        {
          name: "--use-integrated-swift-driver",
          description:
            "Whether to use the integrated Swift driver rather than shelling out to a separate process",
        },
        {
          name: "--experimental-explicit-module-build",
          description:
            "Whether to use the explicit module build flow (with the integrated driver)",
        },
        {
          name: "--print-manifest-job-graph",
          description:
            "Write the command graph for the build manifest as a graphviz file",
        },
        {
          name: "--build-system",
          description: "The build system to use (default: native)",
          args: {
            name: "build system",
            description: "The build system to use",
            isOptional: false,
            suggestions: ["native", "xcode"],
            default: "native",
          },
        },
        {
          name: "--netrc",
          description:
            "Whether to load .netrc files for authenticating with remote servers when downloading binary artifacts or communicating with a registry",
          args: {
            name: "bool",
            description:
              "Whether to load .netrc files for authenticating with remote servers when downloading binary artifacts or communicating with a registry",
            isOptional: false,
            default: "true",
          },
        },
        {
          name: "--netrc-file",
          description:
            "The path to the .netrc file used when `netrc` is `true`",
          args: {
            name: "path",
            description:
              "The path to the .netrc file used when `netrc` is `true`",
            isOptional: false,
          },
        },
      ],
      subcommands: [
        {
          name: "clean",
          description: "Delete build artifacts",
          options: [...commonOptions],
        },
        {
          name: "purge-cache",
          description: "Purge the global repository cache",
          options: [...commonOptions],
        },
        {
          name: "reset",
          description: "Reset the complete cache/build directory",
          options: [...commonOptions],
        },
        {
          name: "update",
          description: "Update package dependencies",
          options: [
            ...commonOptions,
            {
              name: ["-n", "-dry-run"],
              description:
                "Display the list of dependencies that can be updated",
            },
          ],
        },
        {
          name: "describe",
          description: "Describe the current package",
          options: [
            ...commonOptions,
            {
              name: "--type",
              description: "The output type",
              args: {
                name: "type",
                description: "The output type",
                isOptional: false,
                suggestions: ["json", "text"],
                default: "text",
              },
            },
          ],
        },
        {
          name: "init",
          description: "Initialize a new package",
          options: [
            ...commonOptions,
            {
              name: "--type",
              description: "The package type",
              args: {
                name: "type",
                description: "The package type",
                isOptional: false,
                suggestions: [
                  "empty",
                  "library",
                  "executable",
                  "system-module",
                  "manifest",
                ],
                default: "library",
              },
            },
            {
              name: "--name",
              description: "Provide custom package name",
              args: {
                name: "name",
                description: "The package name",
                isOptional: false,
              },
            },
          ],
        },
        {
          name: "experimental-api-diff",
          description:
            "Diagnose API-breaking changes to Swift modules in a package",
          args: {
            name: "treeish",
            description:
              "The baseline treeish to compare to (e.g. a commit hash, branch name, tag, etc.)",
            isOptional: false,
          },
          options: [
            ...commonOptions,
            {
              name: "--invert-baseline",
              description:
                "Invert the baseline which is helpful for determining API additions",
            },
          ],
        },
        {
          name: "dump-symbol-graph",
          description: "Dump Symbol Graph",
          options: [...commonOptions],
        },
        {
          name: "dump-pif",
          description: "Dump PIF",
          options: [
            ...commonOptions,
            {
              name: "--preserve-structure",
              description: "Preserve the internal structure of PIF",
            },
          ],
        },
        {
          name: "dump-package",
          description: "Print parsed Package.swift as JSON",
          options: [...commonOptions],
        },
        {
          name: "edit",
          description: "Put a package in editable mode",
          options: [
            ...commonOptions,
            {
              name: "--revision",
              description: "The revision to edit",
              args: {
                name: "revision",
                description: "The revision to edit",
                isOptional: false,
              },
            },
            {
              name: "--branch",
              description: "The branch to create",
              args: {
                name: "branch",
                description: "The branch to create",
                isOptional: false,
              },
            },
            {
              name: "--path",
              description: "Create or use the checkout at this path",
              args: {
                name: "path",
                description: "Create or use the checkout at this path",
                isOptional: false,
              },
            },
          ],
        },
        {
          name: "unedit",
          description: "Remove a package from editable mode",
          args: {
            name: "package-name",
            description: "The name of the package to unedit",
            isOptional: false,
          },
          options: [
            ...commonOptions,
            {
              name: "--force",
              description:
                "Unedit the package even if it has uncommited and unpushed changes",
            },
          ],
        },
        {
          name: "config",
          description: "Manipulate configuration of the package",
          options: [...commonOptions],
          subcommands: [
            {
              name: "set-mirror",
              description: "Set a mirror for a dependency",
              options: [
                ...commonOptions,
                {
                  name: "--package-url",
                  description: "The package dependency url",
                  args: {
                    name: "package-url",
                    description: "The package dependency url",
                    isOptional: false,
                  },
                },
                {
                  name: "--original-url",
                  description: "The original url",
                  args: {
                    name: "original-url",
                    description: "The original url",
                    isOptional: false,
                  },
                },
                {
                  name: "--mirror-url",
                  description: "The mirror url",
                  args: {
                    name: "original-url",
                    description: "The mirror url",
                    isOptional: false,
                  },
                },
              ],
            },
            {
              name: "unset-mirror",
              description: "Remove an existing mirror",
              options: [
                ...commonOptions,
                {
                  name: "--package-url",
                  description: "The package dependency url",
                  args: {
                    name: "package-url",
                    description: "The package dependency url",
                    isOptional: false,
                  },
                },
                {
                  name: "--original-url",
                  description: "The original url",
                  args: {
                    name: "original-url",
                    description: "The original url",
                    isOptional: false,
                  },
                },
                {
                  name: "--mirror-url",
                  description: "The mirror url",
                  args: {
                    name: "original-url",
                    description: "The mirror url",
                    isOptional: false,
                  },
                },
              ],
            },
            {
              name: "get-mirror",
              description:
                "Print mirror configuration for the given package dependency",
              options: [
                ...commonOptions,
                {
                  name: "--package-url",
                  description: "The package dependency url",
                  args: {
                    name: "package-url",
                    description: "The package dependency url",
                    isOptional: false,
                  },
                },
                {
                  name: "--original-url",
                  description: "The original url",
                  args: {
                    name: "original-url",
                    description: "The original url",
                    isOptional: false,
                  },
                },
              ],
            },
          ],
        },
        {
          name: "resolve",
          description: "Resolve package dependencies",
          args: {
            name: "package-name",
            description: "The name of the package to resolve",
            isOptional: false,
          },
          options: [
            {
              name: ["--help", "-h", "-help"],
              description: "Show help information",
            },
            {
              name: "--version",
              description: "Show the version",
              args: {
                name: "version",
                description: "The version to resolve at",
                isOptional: true,
              },
            },
            {
              name: "--branch",
              description: "The branch to resolve at",
              args: {
                name: "branch",
                description: "The branch to resolve at",
                isOptional: false,
              },
            },
            {
              name: "--revision",
              description: "The revision to resolve at",
              args: {
                name: "revision",
                description: "The revision to resolve at",
                isOptional: false,
              },
            },
          ],
        },
        {
          name: "show-dependencies",
          description: "Print the resolved dependency graph",
          options: [
            ...commonOptions,
            {
              name: "--format",
              description: "The format type",
              args: {
                name: "format",
                description: "The format type",
                isOptional: false,
                suggestions: ["text", "dot", "json", "flatlist"],
                default: "text",
              },
            },
          ],
        },
        {
          name: "tools-version",
          description: "Manipulate tools version of the current package",
          options: [
            ...commonOptions,
            {
              name: "--format",
              description: "The format type",
              args: {
                name: "format",
                description: "The format type",
                isOptional: false,
                suggestions: ["text", "dot", "json", "flatlist"],
                default: "text",
              },
            },
            {
              name: "--set-current",
              description:
                "Set tools version of package to the current tools version in use",
            },
            {
              name: "--set",
              description: "Set tools version of package to the given value",
              args: {
                name: "tools version",
                description: "The tools version",
                isOptional: false,
              },
            },
          ],
        },
        {
          name: "generate-xcodeproj",
          description:
            "Generates an Xcode project (this command will be deprecated soon)",
          options: [
            ...commonOptions,
            {
              name: "--xcconfig-overrides",
              description: "Path to xcconfig file",
              args: {
                name: "path",
                description: "Path to xcconfig file",
                isOptional: false,
              },
            },
            {
              name: "--output",
              description: "Path where the Xcode project should be generated",
              args: {
                name: "path",
                description: "Path where the Xcode project should be generated",
                isOptional: false,
              },
            },
            {
              name: "--legacy-scheme-generator",
              description: "Use the legacy scheme generator",
            },
            {
              name: "--watch",
              description:
                "Watch for changes to the Package manifest to regenerate the Xcode project",
            },
            {
              name: "--skip-extra-files",
              description:
                "Do not add file references for extra files to the generated Xcode project",
            },
          ],
        },
        {
          name: "compute-checksum",
          description: "Compute the checksum for a binary artifact",
          options: [...commonOptions],
        },
        {
          name: "archive-source",
          description: "Create a source archive for the package",
          options: [
            ...commonOptions,
            {
              name: ["-o", "--output"],
              description:
                "The absolute or relative path for the generated source archive",
              args: {
                name: "path",
                description:
                  "The absolute or relative path for the generated source archive",
                isOptional: false,
              },
            },
          ],
        },
        {
          name: "completion-tool",
          description: "Completion tool (for shell completions)",
          args: {
            name: "mode",
            description: "The completion tool mode",
            isOptional: false,
            suggestions: [
              "generate-bash-script",
              "generate-zsh-script",
              "generate-fish-script",
              "list-dependencies",
              "list-executables",
            ],
          },
          options: [...commonOptions],
        },
      ],
    },
  ],
};
export default completionSpec;
