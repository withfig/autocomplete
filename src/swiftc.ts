const inputFileArgs: Fig.Arg[] = [
  {
    name: "input-file",
    description: "Swift source file to compile",
    isVariadic: true,
    template: ["filepaths"],
  },
];

const completionSpec: Fig.Spec = {
  name: "swiftc",
  description: "Swift compiler driver",
  args: inputFileArgs,
  options: [
    {
      name: "-dump-ast",
      description: "Parse and type-check input file(s) and dump AST(s)",
    },
    {
      name: "-dump-parse",
      description: "Parse input file(s) and dump AST(s)",
    },
    {
      name: "-dump-pcm",
      description:
        "Dump debugging information about a precompiled Clang module",
    },
    {
      name: "-dump-scope-maps",
      description: "Parse and type-check input file(s) and dump scope map(s)",
      args: { name: "expanded-or-list-of-line:column" },
    },
    {
      name: "-dump-type-info",
      description:
        "Output YAML dump of fixed-size types from all imported modules",
    },
    {
      name: "-emit-assembly",
      description: "Emit assembly file(s) (-S)",
    },
    {
      name: "-emit-bc",
      description: "Emit LLVM BC file(s)",
    },
    {
      name: "-emit-executable",
      description: "Emit a linked executable",
    },
    {
      name: "-emit-imported-modules",
      description: "Emit a list of the imported modules",
    },
    {
      name: "-emit-irgen",
      description: "Emit LLVM IR file(s) before LLVM optimizations",
    },
    {
      name: "-emit-ir",
      description: "Emit LLVM IR file(s) after LLVM optimizations",
    },
    {
      name: "-emit-library",
      description: "Emit a linked library",
    },
    {
      name: "-emit-module",
      description: "Emit an importable module",
    },
    {
      name: "-emit-lowered-sil",
      description: "Emit lowered SIL file(s)",
    },
    {
      name: "-emit-object",
      description: "Emit object file(s) (-c)",
    },
    {
      name: "-emit-pcm",
      description: "Emit a precompiled Clang module from a module map",
    },
    {
      name: "-emit-sibgen",
      description: "Emit serialized AST + raw SIL file(s)",
    },
    {
      name: "-emit-sib",
      description: "Emit serialized AST + canonical SIL file(s)",
    },
    {
      name: "-emit-silgen",
      description: "Emit raw SIL file(s)",
    },
    {
      name: "-emit-sil",
      description: "Emit canonical SIL file(s)",
    },
    {
      name: "-emit-supported-arguments",
      description:
        "Emit a JSON file including all supported compiler arguments",
    },
    {
      name: "-index-file",
      description: "Produce index data for a source file",
    },
    {
      name: "-parse",
      description: "Parse input file(s)",
    },
    {
      name: "-print-ast-decl",
      description:
        "Parse and type-check input file(s) and pretty print declarations",
    },
    {
      name: "-print-ast",
      description: "Parse and type-check input file(s) and pretty print AST(s)",
    },
    {
      name: "-resolve-imports",
      description: "Parse and resolve imports in input file(s)",
    },
    {
      name: "-scan-dependencies",
      description: "Scan dependencies of the given Swift sources",
    },
    {
      name: "-typecheck",
      description: "Parse and type-check input file(s)",
    },
    // Common compiler options
    {
      name: "-o",
      description: "Write output to <file>",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "-module-name",
      description: "Name of the module to build",
      args: { name: "module-name" },
    },
    {
      name: "-emit-module-path",
      description: "Where to place the emitted module",
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "-emit-dependencies",
      description: "Emit basic Make-compatible dependencies files",
    },
    {
      name: "-sdk",
      description: "Compile against <sdk>",
      args: { name: "sdk", template: "folders" },
    },
    {
      name: "-target",
      description:
        "Generate code for the given target triple, such as x86_64-apple-macos10.9",
      args: { name: "triple" },
    },
    {
      name: "-swift-version",
      description:
        "Interpret input according to a specific Swift language version",
      args: {
        name: "version",
        suggestions: [
          { name: "6", description: "Swift 6 language mode" },
          { name: "5", description: "Swift 5 language mode" },
          { name: "4.2", description: "Swift 4.2 language mode" },
          { name: "4", description: "Swift 4 language mode" },
        ],
      },
    },
    {
      name: "-language-mode",
      description:
        "Interpret input according to a specific Swift language mode",
      args: {
        name: "mode",
        suggestions: [
          { name: "6", description: "Swift 6 language mode" },
          { name: "5", description: "Swift 5 language mode" },
          { name: "4.2", description: "Swift 4.2 language mode" },
          { name: "4", description: "Swift 4 language mode" },
        ],
      },
    },
    {
      name: "-O",
      description: "Compile with optimizations",
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
      name: "-g",
      description: "Emit debug info (preferred for LLDB debugging)",
    },
    {
      name: "-gnone",
      description: "Don't emit debug info",
    },
    {
      name: "-gline-tables-only",
      description: "Emit minimal debug info for backtraces only",
    },
    {
      name: "-gdwarf-types",
      description: "Emit full DWARF type info",
    },
    {
      name: "-D",
      description: "Marks a conditional compilation flag as true",
      args: { name: "condition" },
    },
    {
      name: "-I",
      description: "Add directory to the import search path",
      args: { name: "directory", template: "folders" },
    },
    {
      name: "-F",
      description: "Add directory to framework search path",
      args: { name: "directory", template: "folders" },
    },
    {
      name: "-L",
      description: "Add directory to library link search path",
      args: { name: "directory", template: "folders" },
    },
    {
      name: "-l",
      description: "Specify a library which should be linked against",
      args: { name: "library" },
    },
    {
      name: "-index-store-path",
      description: "Where to place the index store",
      args: { name: "path", template: "folders" },
    },
    {
      name: "-num-threads",
      description: "Enable multi-threading and specify number of threads",
      args: { name: "n" },
    },
    {
      name: "-j",
      description: "Number of commands to execute in parallel",
      args: { name: "n" },
    },
    {
      name: "-output-file-map",
      description: "A file which specifies the location of outputs",
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "-embed-bitcode",
      description: "Embed LLVM IR bitcode as data",
    },
    {
      name: "-color-diagnostics",
      description: "Print diagnostics in color",
    },
    {
      name: "-no-color-diagnostics",
      description: "Do not print diagnostics in color",
    },
    {
      name: "-help",
      description: "Display available options",
    },
    {
      name: "-version",
      description: "Print version information and exit",
    },
    {
      name: "-parse-as-library",
      description: "Parse the input file(s) as libraries, not scripts",
    },
    {
      name: "-enable-testing",
      description: "Compile for testing (enables @testable import)",
    },
    {
      name: "-static",
      description:
        "Make this module statically linkable; emit a static library with " +
        "-emit-library",
    },
    {
      name: "-static-stdlib",
      description: "Statically link the Swift standard library",
    },
    {
      name: "-static-executable",
      description: "Statically link the executable",
    },
    {
      name: "-whole-module-optimization",
      description: "Optimize whole modules instead of per-file",
    },
    {
      name: "-suppress-warnings",
      description: "Suppress all warnings",
    },
    {
      name: "-warnings-as-errors",
      description: "Treat warnings as errors",
    },
    {
      name: "-v",
      description: "Show commands to run and use verbose output",
    },
  ],
};

export default completionSpec;
