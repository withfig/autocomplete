import { keyValue } from "@fig/autocomplete-generators";

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
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  options: [
    ...commonOptions,
    {
      name: "-access-notes-path",
      description:
        "Specify YAML file to override attributes on Swift declarations in this module",
      args: {
        name: "path",
        description:
          "Specify YAML file to override attributes on Swift declarations in this module",
      },
    },
    {
      name: "-assert-config",
      description: "Specify the assert_configuration replacement",
      args: {
        name: "configuration",
        description: "The assert_configuration replacement",
        suggestions: ["Debug", "Release", "Unchecked", "DisableReplacement"],
      },
    },
    {
      name: "-async-main",
      description:
        "Resolve main function as if it were called from an asynchronous context",
    },
    {
      name: "-clang-target",
      description:
        "Separately set the target we should use for internal Clang instance",
      args: {
        name: "target",
        description: "The target we should use for internal Clang instance",
      },
    },
    {
      name: "-color-diagnostics",
      description: "Print diagnostics in color",
    },
    {
      name: "-continue-building-after-errors",
      description: "Continue building, even after errors are encountered",
    },
    {
      name: "-coverage-prefix-map",
      description: "Remap source paths in coverage info",
      args: {
        name: "prefix",
        description: "The remap source paths in coverage info",
        generators: keyValue({
          separator: "=",
        }),
      },
    },
    {
      name: "-debug-info-format",
      description: "Specify the debug info format type",
      dependsOn: ["-g"],
      requiresSeparator: true,
      args: {
        name: "type",
        description: "The debug info format type",
        suggestions: ["dwarf", "codeview"],
      },
    },
    {
      name: "-debug-info-store-invocation",
      description: "Emit the compiler invocation in the debug info",
    },
    {
      name: "-debug-prefix-map",
      description: "Remap source paths in debug info",
      args: {
        name: "prefix=replacement",
        description: "The remap source paths in debug info",
        generators: keyValue({
          separator: "=",
        }),
      },
    },
    {
      name: "-diagnostic-style",
      description: "The formatting style used when printing diagnostics",
      args: {
        name: "style",
        description: "The formatting style used when printing diagnostics",
        suggestions: ["swift", "llvm"],
      },
    },
    {
      name: "-disable-actor-data-race-checks",
      description: "Disable runtime checks for actor data races",
    },
    {
      name: "-disable-autolinking-runtime-compatibility-concurrency",
      description:
        "Do not use autolinking for the concurrency runtime compatibility library",
    },
    {
      name: "-disable-autolinking-runtime-compatibility-dynamic-replacements",
      description:
        "Do not use autolinking for the dynamic replacement runtime compatibility library",
    },
    {
      name: "-disable-autolinking-runtime-compatibility",
      description: "Do not use autolinking for runtime compatibility libraries",
    },
    {
      name: "-disable-clang-target",
      description:
        "Disable a separately specified target triple for Clang instance to use",
    },
    {
      name: "-disable-incremental-imports",
      description:
        "Disable cross-module incremental build metadata and driver scheduling for Swift modules",
    },
    {
      name: "-disable-only-one-dependency-file",
      description:
        "Disables incremental build optimization that only produces one dependencies file",
    },
    {
      name: "-disallow-use-new-driver",
      description: "Disable using new swift-driver",
    },
    {
      name: "-D",
      description: "Marks a conditional compilation flag as true",
      args: {
        name: "flag",
        description: "The conditional compilation flag to mark as true",
      },
    },
    {
      name: "-embed-tbd-for-module",
      description: "Embed symbols from the module in the emitted tbd file",
      args: {
        name: "module",
        description: "Embed symbols from the module in the emitted tbd file",
      },
    },
    {
      name: "-enable-actor-data-race-checks",
      description: "Emit runtime checks for actor data races",
    },
    {
      name: "-enable-bare-slash-regex",
      description:
        "Enable the use of forward slash regular-expression literal syntax",
    },
    {
      name: "-enable-experimental-additive-arithmetic-derivation",
      description:
        "Enable experimental 'AdditiveArithmetic' derived conformances",
    },
    {
      name: "-enable-experimental-concise-pound-file",
      description: "Enable experimental concise '#file' identifier",
    },
    {
      name: "-enable-experimental-cxx-interop",
      description:
        "Allow importing C++ modules into Swift (experimental feature)",
    },
    {
      name: "-enable-experimental-forward-mode-differentiation",
      description: "Enable experimental forward mode differentiation",
    },
    {
      name: "-enable-incremental-imports",
      description:
        "Enable cross-module incremental build metadata and driver scheduling for Swift modules",
    },
    {
      name: "-enable-library-evolution",
      description:
        "Build the module to allow binary-compatible library evolution",
    },
    {
      name: "-enable-only-one-dependency-file",
      description:
        "Enables incremental build optimization that only produces one dependencies file",
    },
    {
      name: "-enforce-exclusivity",
      description: "Enforce law of exclusivity",
      requiresSeparator: true,
      args: {
        name: "enforcement",
        description: "Enforce law of exclusivity",
      },
    },
    {
      name: "-experimental-cxx-stdlib",
      description:
        "C++ standard library to use; forwarded to Clang's -std lib flag",
      args: {
        name: "stdlib",
        description:
          "C++ standard library to use; forwarded to Clang's -std lib flag",
      },
    },
    {
      name: "-file-compilation-dir",
      description:
        "The compilation directory to embed in the debug info. Coverage mapping is not supported yet",
      args: {
        name: "path",
        description: "The compilation directory to embed in the debug info",
      },
    },
    {
      name: "-file-prefix-map",
      description: "Remap source paths in debug, coverage, and index info",
      args: {
        name: "prefix",
        description:
          "The remap source paths in debug, coverage, and index info",
        generators: keyValue({
          separator: "=",
        }),
      },
    },
    {
      name: "-framework",
      description: "Specifies a framework which should be linked against",
      args: {
        name: "framework",
        description: "The framework which should be linked against",
      },
    },
    {
      name: "-Fsystem",
      description: "Add directory to system framework search path",
      args: {
        name: "directory",
        description: "The directory to add to the system framework search path",
      },
    },
    {
      name: "-F",
      description: "Add directory to framework search path",
      args: {
        name: "directory",
        description: "The directory to add to the framework search path",
      },
    },
    {
      name: "-gdwarf-types",
      description: "Emit full DWARF type info",
    },
    {
      name: "-gline-tables-only",
      description: "Emit minimal debug info for backtraces only",
    },
    {
      name: "-gnone",
      description: "Don't emit debug info",
    },
    {
      name: "-g",
      description:
        "Emit debug info. This is the preferred setting for debugging with LLDB",
    },
    {
      name: "-index-ignore-clang-modules",
      description: "Avoid indexing clang modules (pcms)",
    },
    {
      name: "-index-store-path",
      description: "Store indexing data to path",
      args: {
        name: "path",
        description: "The path to store indexing data to",
      },
    },
    {
      name: "-index-unit-output-path",
      description:
        "Use the specified path as the output path in the produced index data",
      args: {
        name: "path",
        description:
          "The specified path as the output path in the produced index data",
      },
    },
    {
      name: "-I",
      description: "Add directory to the import search path",
      args: {
        name: "directory",
        description: "The directory to add to the import search path",
      },
    },
    {
      name: "-j",
      description: "Number of commands to execute in parallel",
      args: {
        name: "value",
        description: "The number of commands to execute in parallel",
      },
    },
    {
      name: "-libc",
      description: "The libc runtime library to use",
      args: {
        name: "runtime",
        description: "The libc runtime library to use",
      },
    },
    {
      name: "-locale",
      description: "Choose a language for diagnostic messages",
      args: {
        name: "code",
        description: "The locale code",
      },
    },
    {
      name: "-localization-path",
      description: "Path to localized diagnostic messages directory",
      args: {
        name: "path",
        description: "The path to localized diagnostic messages directory",
      },
    },
    {
      name: "-L",
      description: "Add directory to library link search path",
      args: {
        name: "directory",
        description: "The directory to add to the library link search path",
      },
    },
    {
      name: "-l",
      description: "Specifies a library which should be linked against",
      args: {
        name: "path",
        description: "Specifies a library which should be linked against",
      },
    },
    {
      name: "-module-abi-name",
      description: "ABI name to use for the contents of this module",
      args: {
        name: "name",
        description: "The ABI name to use for the contents of this module",
      },
    },
    {
      name: "-module-alias",
      description:
        "If a source file imports or references module <alias_name>, the <underlying_name> is used for the contents of the file",
      args: {
        name: "alias",
        description: "The module alias and the contents of the file to be used",
        generators: keyValue({
          separator: "=",
        }),
      },
    },
    {
      name: "-module-cache-path",
      description: "Specifies the Clang module cache path",
      args: {
        name: "path",
        description: "Specifies the Clang module cache path",
      },
    },
    {
      name: "-module-link-name",
      description: "Library to link against when using this module",
      args: {
        name: "name",
        description: "Library to link against when using this module",
      },
    },
    {
      name: "-module-name",
      description: "Name of the module to build",
      args: {
        name: "name",
        description: "Name of the module to build",
      },
    },
    {
      name: "-no-color-diagnostics",
      description: "Do not print diagnostics in color",
    },
    {
      name: "-no-warnings-as-errors",
      description: "Don't treat warnings as error",
    },
    {
      name: "-nostdimport",
      description: "Don't search the standard library import path for modules",
    },
    {
      name: "-num-threads",
      description: "Enable multi-threading and specify number of threads",
      args: {
        name: "value",
        description: "The number of threads",
      },
    },
    {
      name: "-Onone",
      description: "Compile without any optimization",
    },
    {
      name: "-Osize",
      description: "Compile with optimizations and target small code size",
    },
    {
      name: "-Ounchecked",
      description:
        "Compile with optimizations and remove runtime safety checks",
    },
    {
      name: "-O",
      description: "Compile with optimizations",
    },
    {
      name: "-prefix-serialized-debugging-options",
      description:
        "Apply debug prefix mappings to serialized debug info in Swiftmodule files",
    },
    {
      name: "-pretty-print",
      description: "Pretty-print the output JSON",
    },
    {
      name: "-print-educational-notes",
      description:
        "Include educational notes in printed diagnostic output, if available",
    },
    {
      name: "-print-target-info",
      description:
        "Print target information for the given target <triple>, such as x86_64-apple-macos10.9",
    },
    {
      name: "-Rcross-import",
      description: "Emit a remark if a cross-import of a module is triggered",
    },
    {
      name: "-remove-runtime-asserts",
      description: "Remove runtime safety checks",
    },
    {
      name: "-requirement-machine-abstract-signatures",
      description:
        "Control usage of experimental generic signature minimization",
      requiresSeparator: true,
      args: {
        name: "value",
        description:
          "The control usage of experimental generic signature minimization",
        suggestions: ["on", "off", "verify", "check"],
      },
    },
    {
      name: "-requirement-machine-inferred-signatures",
      description:
        "Control usage of experimental generic signature minimization",
      requiresSeparator: true,
      args: {
        name: "value",
        description:
          "The control usage of experimental generic signature minimization",
        suggestions: ["on", "off", "verify", "check"],
      },
    },
    {
      name: "-requirement-machine-protocol-signatures",
      description:
        "Control usage of experimental protocol requirement signature minimization",
      requiresSeparator: true,
      args: {
        name: "value",
        description:
          "The control usage of experimental protocol requirement signature minimization",
        suggestions: ["on", "off", "verify", "check"],
      },
    },
    {
      name: "-Rmodule-loading",
      description: "Emit a remark and file path of each loaded module",
    },
    {
      name: "-Rpass-missed",
      description:
        "Report missed transformations by optimization passes whose name matches the given POSIX regular expression",
      requiresSeparator: true,
      args: {
        name: "regex",
        description: "Regex to match missed transformations",
      },
    },
    {
      name: "-Rpass",
      description:
        "Report performed transformations by optimization passes whose name matches the given POSIX regular expression",
      requiresSeparator: true,
      args: {
        name: "regex",
        description: "Regex to match performed transformations",
      },
    },
    {
      name: "-runtime-compatibility-version",
      description:
        "Link compatibility library for Swift runtime version, or 'none'",
      args: {
        name: "version",
        description: "Swift runtime version, or 'none'",
      },
    },
    {
      name: "-save-optimization-record-passes",
      description:
        "Only include passes which match a specified regular expression in the generated optimization record (by default, include all passes)",
      args: {
        name: "regex",
        description:
          "Regex to specify passes to be included in the optimization record",
      },
    },
    {
      name: "-save-optimization-record-path",
      description: "Specify the file name of any generated optimization record",
      args: {
        name: "filename",
        description: "The file name of any generated optimization record",
      },
    },
    {
      name: "-save-optimization-record",
      description: "Generate an optimization record file in a specific format",
      requiresSeparator: true,
      args: {
        name: "format",
        description: "The format",
        default: "YAML",
      },
    },
    {
      name: "-save-optimization-record",
      description: "Generate a YAML optimization record file",
    },
    {
      name: "-sdk",
      description: "Compile against a specific SDK",
      args: {
        name: "sdk",
        description: "The SDK to compile against",
      },
    },
    {
      name: "-serialize-diagnostics-path",
      description: "Emit a serialized diagnostics file",
      args: {
        name: "path",
        description: "The path to write the file to",
      },
    },
    {
      name: "-static-executable",
      description: "Statically link the executable",
    },
    {
      name: "-static-stdlib",
      description: "Statically link the Swift standard library",
    },
    {
      name: "-strict-concurrency",
      description: "Specify the how strict concurrency checking will be",
      requiresSeparator: true,
      args: {
        name: "concurrency",
        description: "The concurrency",
        suggestions: ["minimal", "targeted", "complete"],
      },
    },
    {
      name: "-suppress-warnings",
      description: "Suppress all warnings",
    },
    {
      name: "-swift-isa-ptrauth-mode",
      description: "Mode for staging isa/super signing",
      args: {
        name: "mode",
        description: "Mode for staging isa/super signing",
        suggestions: ["LegacyAndStrip", "NewAndStrip", "NewAndAuth"],
      },
    },
    {
      name: "-swift-ptrauth-mode",
      description: "Mode for staging pointer authentication",
      args: {
        name: "mode",
        description: "Mode for staging pointer authentication",
        suggestions: ["LegacyAndStrip", "NewAndStrip", "NewAndAuth"],
      },
    },
    {
      name: "-swift-version",
      description:
        "Interpret input according to a specific Swift language version number",
      args: {
        name: "version",
        description: "Swift language version number",
      },
    },
    {
      name: "-target-cpu",
      description: "Generate code for a particular CPU variant",
      args: {
        name: "cpu",
        description: "The CPU variant",
      },
    },
    {
      name: "-target-min-inlining-version",
      description:
        "Require inlinable code with no '@available' attribute to back-deploy to this version of the '-target' OS",
      args: {
        name: "version",
        description: "The target version",
      },
    },
    {
      name: "-target-variant",
      description:
        "Generate 'zippered' code for macCatalyst that can run on the specified variant target triple in addition to the main -target triple",
      args: {
        name: "variant",
        description: "The target variant",
      },
    },
    {
      name: "-target",
      description:
        "Generate code for the given target <triple>, such as x86_64-apple-macos10.9",
      args: {
        name: "triple",
        description: "The target triple",
      },
    },
    {
      name: "-use-ld",
      description: "Specifies the linker to be used",
      requiresSeparator: true,
      args: {
        name: "linker",
        description: "The linker to be used",
      },
    },
    {
      name: "-user-module-version",
      description: "Module version specified from Swift module authors",
      args: {
        name: "module",
        description: "The module version",
      },
    },
    {
      name: "-vfsoverlay",
      description: "Add directory to VFS overlay file",
      args: {
        name: "directory",
        description: "The directory to the VFS overlay file",
      },
    },
    {
      name: "-v",
      description: "Show commands to run and use verbose output",
    },
    {
      name: "-warn-concurrency",
      description:
        "Warn about code that is unsafe according to the Swift Concurrency model and will become ill-formed in a future language version",
    },
    {
      name: "-warn-implicit-overrides",
      description: "Warn about implicit overrides of protocol members",
    },
    {
      name: "-warn-swift3-objc-inference-complete",
      description:
        "Warn about deprecated @objc inference in Swift 3 for every declaration that will no longer be inferred as @objc in Swift 4",
    },
    {
      name: "-warn-swift3-objc-inference-minimal",
      description:
        "Warn about deprecated @objc inference in Swift 3 based on direct uses of the Objective-C entrypoint",
    },
    {
      name: "-warnings-as-errors",
      description: "Treat warnings as errors",
    },
    {
      name: "-working-directory",
      description: "Resolve file paths relative to the specified directory",
      args: {
        name: "directory",
        description: "Resolve file paths relative to the specified directory",
      },
    },
    {
      name: "-Xcc",
      description: "Pass <arg> to the C/C++/Objective-C compiler",
      args: {
        name: "arg",
        description: "Argument to pass to the C/C++/Objective-C compiler",
      },
    },
    {
      name: "-Xlinker",
      description: "Specifies an option which should be passed to the linker",
      args: {
        name: "arg",
        description: "Option to be passed to the linker",
      },
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
          },
        },
        {
          name: "--product",
          description: "Build the specified product",
          args: {
            name: "product",
            description: "The name of the product to build",
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
          },
        },
        {
          name: "--skip",
          description: "Skip test cases matching regular expression",
          args: {
            name: "regex",
            description:
              "<test-target>.<test-case> or <test-target>.<test-case>/<test>",
          },
        },
        {
          name: "--xunit-output",
          description: "Path where the xUnit xml file should be generated",
          args: {
            name: "path",
            description: "Path where the xUnit xml file should be generated",
          },
        },
        {
          name: "--test-product",
          description: "Test the specified product",
          args: {
            name: "product",
            description: "The product to be tested",
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
          },
        },
        {
          name: "-Xswiftc",
          description: "Pass a flag through to all Swift compiler invocations",
          args: {
            name: "flag",
            description:
              "The flag to pass through to all Swift compiler invocations",
          },
        },
        {
          name: "-Xlinker",
          description: "Pass a flag through to all linker invocations",
          args: {
            name: "flag",
            description: "The flag to pass through to all linker invocations",
          },
        },
        {
          name: ["-c", "--configuration"],
          description: "Build with configuration (default: debug)",
          args: {
            name: "configuration",
            description: "The build configuration",
            suggestions: ["debug", "release"],
          },
        },
        {
          name: "--build-path",
          description: "Specify build/cache directory",
          args: {
            name: "path",
            description: "The path to a specific build/cache directory",
          },
        },
        {
          name: "--cache-path",
          description: "Specify the shared cache directory",
          args: {
            name: "path",
            description: "The path to a specific shared cache directory",
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
          },
        },
        {
          name: "--package-path",
          description: "Change working directory before any other operation",
          args: {
            name: "path",
            description: "The working directory path to change to",
          },
        },
        {
          name: "--multiroot-data-file",
          description:
            "The path to the file containing multiroot package data. This is currently Xcode's workspace file",
          args: {
            name: "multiroot-data-file",
            description: "",
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
          },
        },
        {
          name: "--triple",
          description: "The compilation destination's target triple",
          args: {
            name: "triple",
            description: "The compilation destination's target triple",
          },
        },
        {
          name: "--sdk",
          description: "Path to the compilation destination's SDK",
          args: {
            name: "path",
            description: "Path to the compilation destination's SDK",
          },
        },
        {
          name: "--toolchain",
          description: "Path to the compilation destination's toolchain",
          args: {
            name: "path",
            description: "Path to the compilation destination's toolchain",
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
              },
            },
            {
              name: "--branch",
              description: "The branch to create",
              args: {
                name: "branch",
                description: "The branch to create",
              },
            },
            {
              name: "--path",
              description: "Create or use the checkout at this path",
              args: {
                name: "path",
                description: "Create or use the checkout at this path",
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
          },
          options: [
            ...commonOptions,
            {
              name: "--force",
              description:
                "Unedit the package even if it has uncommitted and unpushed changes",
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
                  },
                },
                {
                  name: "--original-url",
                  description: "The original url",
                  args: {
                    name: "original-url",
                    description: "The original url",
                  },
                },
                {
                  name: "--mirror-url",
                  description: "The mirror url",
                  args: {
                    name: "original-url",
                    description: "The mirror url",
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
                  },
                },
                {
                  name: "--original-url",
                  description: "The original url",
                  args: {
                    name: "original-url",
                    description: "The original url",
                  },
                },
                {
                  name: "--mirror-url",
                  description: "The mirror url",
                  args: {
                    name: "original-url",
                    description: "The mirror url",
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
                  },
                },
                {
                  name: "--original-url",
                  description: "The original url",
                  args: {
                    name: "original-url",
                    description: "The original url",
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
              },
            },
            {
              name: "--revision",
              description: "The revision to resolve at",
              args: {
                name: "revision",
                description: "The revision to resolve at",
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
              },
            },
            {
              name: "--output",
              description: "Path where the Xcode project should be generated",
              args: {
                name: "path",
                description: "Path where the Xcode project should be generated",
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
