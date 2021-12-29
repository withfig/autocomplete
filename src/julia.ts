import { filepaths } from "@fig/autocomplete-generators";

const completionSpec: Fig.Spec = {
  name: "julia",
  description: "The Julia Programming Language",
  options: [
    {
      name: ["-v", "--version"],
      description: "Display version information",
    },
    {
      name: ["-h", "--help"],
      description: "Print help message for julia (--help-hidden for more)",
    },
    {
      name: "--help-hidden",
      description: "Uncommon options not shown by `-h`",
    },
    // startup options
    {
      name: "--project",
      description: "Set given directory as the home project/environment",
      args: {
        name: "project folder",
        description: "Julia project/environment",
        isOptional: true,
        suggestions: [
          {
            name: "@.",
            priority: 75,
            description:
              "Search through parent directories until a Project.toml or JuliaProject.toml file is found",
          },
        ],
        generators: {
          template: "folders",
        },
      },
    },
    {
      name: ["-J", "--sysimage"],
      description: "Start up with the given system image file",
      args: {
        name: "system image",
        generators: filepaths({
          extensions: ["dylib", "so", "dll"],
          editFileSuggestions: { priority: 76 },
        }),
      },
    },
    {
      name: ["-H", "--home"],
      description: "Set location of `julia` executable",
      args: {
        template: "folders",
      },
    },
    {
      name: "--startup-file",
      description: "Load `~/.julia/config/startup.jl`",
      args: {
        suggestions: [{ name: "yes" }, { name: "no" }],
      },
    },
    {
      name: "--handle-signals",
      description: "Enable or disable Julia's default signal handlers",
      args: {
        suggestions: [{ name: "yes" }, { name: "no" }],
      },
    },
    {
      name: "--sysimage-native-code",
      description: "Use native code from system image if available",
      args: {
        suggestions: [{ name: "yes" }, { name: "no" }],
      },
    },
    {
      name: "--compiled-modules",
      description: "Enable or disable incremental precompilation of modules",
      args: {
        suggestions: [{ name: "yes" }, { name: "no" }],
      },
    },
    // actions
    {
      name: ["-e", "--eval"],
      insertValue: "-e '{cursor}'",
      description: "Evaluate given expr",
      args: {
        name: "expr",
      },
    },
    {
      name: ["-E", "--print"],
      insertValue: "-E '{cursor}'",
      description: "Evaluate given expr and display the result",
      args: {
        name: "expr",
      },
    },
    {
      name: ["-L", "--load"],
      description: "Load given file immediately on all processors",
      args: {
        name: "julia script",
        generators: filepaths({
          extensions: ["jl"],
          editFileSuggestions: { priority: 76 },
        }),
      },
    },
    // parallel options
    {
      name: ["-t", "--threads"],
      description:
        'Enable N threads; "auto" sets N to the number of local CPU threads',
      args: {
        description: "Number of threads",
        suggestions: [{ name: "auto" }],
      },
    },
    {
      name: ["-p", "--procs"],
      description:
        'Integer value N launches N additional local worker processes "auto" launches as many workers as the number of local CPU threads',
      args: {
        description: "Number of additional local worker processes",
        suggestions: [{ name: "auto" }],
      },
    },
    {
      name: "--machine-file",
      description: "Run processes on hosts listed in given file",
      args: {
        template: "filepaths",
      },
    },
    // interactive options
    {
      name: "-i",
      description: "Interactive mode; REPL runs and isinteractive() is true",
    },
    {
      name: ["-q", "--quiet"],
      description: "Quiet startup: no banner, suppress REPL warnings",
    },
    {
      name: "--banner",
      description: "Enable or disable startup banner",
      args: {
        suggestions: [{ name: "yes" }, { name: "no" }, { name: "auto" }],
      },
    },
    {
      name: "--color",
      description: "Enable or disable color text",
      args: {
        suggestions: [{ name: "yes" }, { name: "no" }, { name: "auto" }],
      },
    },
    {
      name: "--history-file",
      description: "Load or save history",
      args: {
        suggestions: [{ name: "yes" }, { name: "no" }],
      },
    },
    // error and warning options
    {
      name: "--depwarn",
      description:
        'Enable or disable syntax and method deprecation warnings ("error" turns warnings into errors)',
      args: {
        suggestions: [{ name: "yes" }, { name: "no" }, { name: "error" }],
      },
    },
    {
      name: "--warn-overwrite",
      description: "Enable or disable method overwrite warnings",
      args: {
        suggestions: [{ name: "yes" }, { name: "no" }],
      },
    },
    {
      name: "--warn-scope",
      description: "Enable or disable warning for ambiguous top-level scope",
      args: {
        suggestions: [{ name: "yes" }, { name: "no" }],
      },
    },
    // code generation options
    {
      name: ["-C", "--cpu-target"],
      description:
        'Limit usage of CPU features up to <target>; set to "help" to see the available options',
      args: {},
    },
    {
      name: ["-O", "--optimize"],
      description:
        "Set the optimization level (default level is 2 if unspecified or 3 if used without a level)",
      args: {
        name: "level",
        description: "Level of optimization",
        isOptional: true,
      },
    },
    {
      name: "-g",
      description: "Enable / Set the level of debug info generation",
      args: {
        name: "level",
        description: "Level of debug info generation",
        isOptional: true,
      },
    },
    {
      name: "--inline",
      description:
        "Control whether inlining is permitted, including overriding @inline declarations",
      args: {
        suggestions: [{ name: "yes" }, { name: "no" }],
      },
    },
    {
      name: "--check-bounds",
      description:
        "Emit bounds checks always, never, or respect @inbounds declarations",
      args: {
        suggestions: [{ name: "yes" }, { name: "no" }, { name: "auto" }],
      },
    },
    {
      name: "--polly",
      description:
        "Enable or disable the polyhedral optimizer Polly (overrides @polly declaration)",
      args: {
        suggestions: [{ name: "yes" }, { name: "no" }],
      },
    },
    {
      name: "--math-mode",
      description:
        "Disallow or enable unsafe floating point optimizations (overrides @fastmath declaration)",
      args: {
        suggestions: [{ name: "ieee" }, { name: "fast" }],
      },
    },
    // instrumentation options
    {
      name: "--code-coverage",
      description:
        'Count executions of source lines (omitting setting is equivalent to "user")',
      args: {
        isOptional: true,
        suggestions: [{ name: "none" }, { name: "user" }, { name: "all" }],
      },
    },
    {
      name: "--track-allocation",
      description:
        'Count bytes allocated by each source line (omitting setting is equivalent to "user")',
      args: {
        isOptional: true,
        suggestions: [{ name: "none" }, { name: "user" }, { name: "all" }],
      },
    },
    {
      name: "--bug-report",
      description:
        "Launch a bug report session. It can be used to start a REPL, run a script, or evaluate  expressions. It first tries to use BugReporting.jl installed in current environment and fallbacks to the latest compatible BugReporting.jl if not. For more information, see --bug-report=help",
      args: { name: "KIND" },
    },
    // code generation options
    {
      name: "--compile",
      description:
        "Enable or disable JIT compiler, or request exhaustive or minimal compilation",
      args: {
        suggestions: [
          { name: "yes" },
          { name: "no" },
          { name: "all" },
          { name: "min" },
        ],
      },
    },
    // compiler output options
    {
      name: "--output-o",
      description: "Generate an object file (including system image data)",
      args: { name: "name", template: "filepaths" },
    },
    {
      name: "--output-ji",
      description: "Generate a system image data file (.ji)",
      args: { name: "name", template: "filepaths" },
    },
    // compiler debugging
    {
      name: "--output-unopt-bc",
      description: "Generate unoptimized LLVM bitcode (.bc)",
      args: { name: "name", template: "filepaths" },
    },
    {
      name: "--output-jit-bc",
      description:
        "Dump all IR generated by the frontend (not including system image)",
      args: { name: "name", template: "filepaths" },
    },
    {
      name: "--output-bc",
      description: "Generate LLVM bitcode (.bc)",
      args: { name: "name", template: "filepaths" },
    },
    {
      name: "--output-asm",
      description: "Generate an assembly file (.s)",
      args: { name: "name", template: "filepaths" },
    },
    {
      name: "--output-incremental",
      description: "Generate an incremental output file (rather than complete)",
      args: {
        suggestions: [{ name: "yes" }, { name: "no" }],
      },
    },
    {
      name: "--image-codegen",
      description: "Force generate code in imaging mode",
    },
  ],
  args: {
    name: "julia script",
    isScript: true,
    isOptional: true,
    generators: filepaths({
      extensions: ["jl"],
      editFileSuggestions: { priority: 76 },
    }),
  },
};
export default completionSpec;
