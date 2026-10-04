export const oformatSuggestions: Fig.Suggestion[] = [
  {
    name: "object",
    description: "Emit a relocatable object file (same as passing -r)",
  },
  {
    name: "wasm",
    description: "Emit a WebAssembly module, with no JS glue code",
  },
  {
    name: "js",
    description: "Emit JavaScript",
  },
  {
    name: "mjs",
    description: "Emit JavaScript as an ES module",
  },
  {
    name: "html",
    description: "Emit an .html page that runs the program",
  },
  {
    name: "bare",
    description: "Emit JavaScript without the surrounding module wrapper (experimental)",
  },
];

export const targetSuggestions: Fig.Suggestion[] = [
  {
    name: "wasm32",
    description: "Alias for wasm32-unknown-emscripten",
  },
  {
    name: "wasm64",
    description: "Alias for wasm64-unknown-emscripten",
  },
  {
    name: "wasm32-unknown-emscripten",
    description: "Emit a 32-bit wasm module",
  },
  {
    name: "wasm64-unknown-emscripten",
    description: "Emit a 64-bit wasm module (MEMORY64)",
  },
];

// Common `-s` settings. `-s` accepts any emscripten setting, so the generic
// KEY=VALUE form is offered first and these are only convenience suggestions.
const settingSuggestions: Fig.Suggestion[] = [
  { name: "EXPORTED_FUNCTIONS", description: "List of exported C functions" },
  { name: "EXPORTED_RUNTIME_METHODS", description: "List of runtime methods to keep alive" },
  { name: "MODULARIZE", description: "Wrap the JS output in a factory function" },
  { name: "ENVIRONMENT", description: "Where the output runs (web, worker, node, shell)" },
  { name: "USE_PTHREADS", description: "Enable pthreads support (also enables -pthread)" },
  { name: "ALLOW_MEMORY_GROWTH", description: "Grow memory at runtime instead of failing on OOM" },
  { name: "INITIAL_MEMORY", description: "Initial size of the heap in bytes" },
  { name: "MAXIMUM_MEMORY", description: "Largest the heap may grow to, in bytes" },
  { name: "TOTAL_MEMORY", description: "Fixed total size of the heap, in bytes (legacy)" },
  { name: "ASSERTIONS", description: "Emit runtime assertions" },
  { name: "SINGLE_FILE", description: "Inline the wasm file into the JS output" },
  { name: "ASYNCIFY", description: "Enable the Asyncify transformation" },
  { name: "FILESYSTEM", description: "Include the emscripten file system layer" },
  { name: "INVOKE_RUN", description: "Call main() automatically at startup" },
  { name: "EXIT_RUNTIME", description: "Call exit() after main() returns" },
];

const completionSpec: Fig.Spec = {
  name: "emcc",
  description: "The Emscripten compiler front-end: compiles C/C++ to WebAssembly",
  args: {
    name: "input file",
    description: "C or C++ source, object, or archive file",
    template: "filepaths",
  },
  options: [
    {
      name: "-o",
      description: "Write the output to this file (also accepts -o<file> with no space)",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "--oformat",
      description: "Output format to emit",
      args: { name: "format", suggestions: oformatSuggestions },
    },
    {
      name: "-s",
      description: "Set an emscripten setting, as KEY=VALUE",
      isRepeatable: true,
      args: {
        name: "KEY=VALUE",
        description: "Emscripten setting, e.g. -sMODULARIZE=1",
        suggestions: settingSuggestions,
        debounce: true,
      },
    },
    {
      name: "-O",
      description: "Optimization level. With no level given, this means -O2",
      args: {
        name: "level",
        description: "Optimization level (bare -O means -O2)",
        isOptional: true,
        suggestions: ["0", "1", "2", "3", "4", "s", "z", "g"],
      },
    },
    {
      name: "-g",
      description: "Emit debug information. With no level given, this means -g3",
      isRepeatable: true,
      args: {
        name: "level",
        description: "Debug level (bare -g means -g3)",
        isOptional: true,
        suggestions: ["0", "1", "2", "3", "4"],
      },
    },
    {
      name: "-c",
      description: "Compile to an object file only, do not link",
    },
    {
      name: "--precompile",
      description: "Compile to an object file only, do not link (same as -c)",
    },
    {
      name: "-S",
      description: "Stop after assembly, do not link",
    },
    {
      name: "-E",
      description: "Run only the preprocessor",
    },
    {
      name: "-r",
      description: "Emit a relocatable object file",
    },
    {
      name: "--target",
      description: "Compilation target triple",
      args: { name: "target", suggestions: targetSuggestions },
    },
    {
      name: "-m64",
      description: "Compile for MEMORY64 (a 64-bit wasm heap)",
    },
    {
      name: "-m32",
      description: "Compile for a 32-bit wasm heap",
    },
    {
      name: "-pthread",
      description: "Enable pthreads support",
    },
    {
      name: "-fopenmp",
      description: "Enable OpenMP support (implies pthreads)",
    },
    {
      name: "-frtti",
      description: "Enable C++ runtime type information",
    },
    {
      name: "-fno-rtti",
      description: "Disable C++ runtime type information",
    },
    {
      name: "-ffast-math",
      description: "Enable unsafe, non-IEEE-compliant math optimizations",
    },
    {
      name: "-I",
      description: "Add <dir> to the header search path",
      isRepeatable: true,
      args: { name: "dir", template: "folders" },
    },
    {
      name: "-L",
      description: "Add <dir> to the library search path",
      isRepeatable: true,
      args: { name: "dir", template: "folders" },
    },
    {
      name: "-l",
      description: "Link against the named library",
      isRepeatable: true,
      args: { name: "library", description: "Library name, without the lib prefix" },
    },
    {
      name: "-D",
      description: "= <macro> Define a preprocessor macro, or MACRO=value",
      isRepeatable: true,
      args: { name: "macro", description: "Macro, or MACRO=value" },
    },
    {
      name: "-U",
      description: "Undefine a preprocessor macro",
      isRepeatable: true,
      args: { name: "macro" },
    },
    {
      name: "-Wall",
      description: "Enable all warnings",
    },
    {
      name: "-Wextra",
      description: "Enable extra warnings not enabled by -Wall",
    },
    {
      name: "-Werror",
      description: "Turn every warning into an error",
    },
    {
      name: "-Wno-",
      description: "Disable the named warning",
      isRepeatable: true,
      args: { name: "warning", description: "Warning to disable, e.g. -Wno-unused-variable" },
    },
    {
      name: "-x",
      description: "Treat subsequent input files as having <language>",
      args: {
        name: "language",
        suggestions: ["c", "c++", "c-header", "c++-header", "assembler"],
      },
    },
    {
      name: "-shared",
      description: "Emit a shared library",
    },
    {
      name: "-v",
      description: "Print the subcommands emcc runs",
    },
    {
      name: "-###",
      description: "Print the subcommands emcc would run, without running them",
    },
    {
      name: "--version",
      description: "Print the emcc / clang / emscripten version string",
    },
    {
      name: "--help",
      description: "Print the help text",
    },
    // --- emcc-specific options ---
    {
      name: "--pre-js",
      description: "Add a JS file to the beginning of the program's JS output",
      isRepeatable: true,
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "--post-js",
      description: "Add a JS file to the end of the program's JS output",
      isRepeatable: true,
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "--extern-pre-js",
      description: "Emit a JS file that defines the program's exported symbols",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "--extern-post-js",
      description: "Emit a JS file that modifies the program's exported symbols",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "--js-transform",
      description: "Transform the generated JS with a Node.js command",
      args: { name: "command" },
    },
    {
      name: "--closure",
      description: "Run the Google Closure Compiler on the generated JS",
      args: {
        name: "level",
        description: "Closure aggressiveness (0 disables the compiler)",
        isOptional: true,
        suggestions: ["0", "1", "2"],
      },
    },
    {
      name: "--closure-args",
      description: "Extra arguments passed on to the Closure Compiler",
      args: { name: "args", description: "Additional Closure Compiler arguments" },
    },
    {
      name: "--minify",
      description: "Minify the generated JS and wasm (only 0 is accepted; 1 is deprecated)",
      args: {
        name: "value",
        suggestions: ["0"],
      },
    },
    {
      name: "--emit-minification-map",
      description: "Emit a minification map to this file",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "--emit-tsd",
      description: "Emit a TypeScript declaration file for the exported API",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "--emit-symbol-map",
      description: "Emit a symbol map alongside the wasm output",
    },
    {
      name: "--shell-file",
      description: "Use this file as the HTML shell page",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "--source-map-base",
      description: "Base URL to which source map URLs are prefixed",
      args: { name: "url" },
    },
    {
      name: "--embed-file",
      description: "Embed <path> into the generated output (readable from the file system API)",
      isRepeatable: true,
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "--preload-file",
      description: "Package <path> into a .data file to be loaded at runtime",
      isRepeatable: true,
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "--exclude-file",
      description: "Exclude <path> from a --preload-file bundle",
      isRepeatable: true,
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "--use-preload-cache",
      description: "Use the browser HTTP cache for preloaded .data files",
    },
    {
      name: "--use-preload-plugins",
      description: "Preload the webidl_binder / browser plugins",
    },
    {
      name: "--cache",
      description: "Set the emscripten cache directory",
      args: { name: "dir", template: "folders" },
    },
    {
      name: "--clear-cache",
      description: "Manually clear the emscripten cache",
    },
    {
      name: "--use-port",
      description: "Build and use the named contrib port",
      isRepeatable: true,
      args: {
        name: "port",
        description: "Contrib port name, e.g. sdl2",
        suggestions: ["sdl2", "sdl2-image", "sdl2-mixer", "sdl2-ttf", "boost_headers"],
      },
    },
    {
      name: "--show-ports",
      description: "List the available contrib ports",
    },
    {
      name: "--clear-ports",
      description: "Remove all built contrib ports from the cache",
    },
    {
      name: "--valid-abspath",
      description: "Allow absolute paths that are not under the project root",
      isRepeatable: true,
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "--compiler-wrapper",
      description: "Program used to wrap the clang compiler",
      args: { name: "command" },
    },
    {
      name: "--reproduce",
      description: "Write a script that reproduces this exact compiler invocation",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "--emrun",
      description: "Enable emrun's browser-launching support in the output",
    },
    {
      name: "--no-entry",
      description: "Do not emit a main() entry point",
    },
    {
      name: "--profiling",
      description: "Emit names in the wasm so profiles are readable",
    },
    {
      name: "--profiling-funcs",
      description: "Emit names for exported functions only",
    },
    {
      name: "--cpuprofiler",
      description: "Emit CPU profiler data in the output",
    },
    {
      name: "--threadprofiler",
      description: "Emit thread profiler data (requires pthreads)",
    },
    {
      name: "--memoryprofiler",
      description: "Emit allocations in the memory profiler",
    },
    {
      name: "--tracing",
      description: "Emit emscripten tracing calls",
    },
    {
      name: "--post-link",
      description: "Run only the link stage (experimental, requires --oformat=bare)",
    },
    {
      name: "--ignore-dynamic-linking",
      description: "Ignore dynamic linking options in the input",
    },
    {
      name: "--check",
      description: "Run the emscripten test suite",
    },
    {
      name: "--output-eol",
      description: "Line ending style to use in the generated files",
      args: {
        name: "style",
        suggestions: ["windows", "linux"],
      },
    },
  ],
};

export default completionSpec;
