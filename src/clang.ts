export const stdCSuggestions: Fig.Suggestion[] = [
  {
    name: ["c89", "c90", "iso9899:1990"],
    description: "ISO C 1990",
  },
  {
    name: "iso9899:199409",
    description: "ISO C 1990 with amendment 1",
  },
  {
    name: ["gnu89", "gnu90"],
    description: "ISO C 1990 with GNU extensions",
  },
  {
    name: ["c99", "iso9899:1999"],
    description: "ISO C 1999",
  },
  {
    name: "gnu99",
    description: "ISO C 1999 with GNU extensions",
  },
  {
    name: ["c11", "iso9899:2011"],
    description: "ISO C 2011",
  },
  {
    name: "gnu11",
    description: "ISO C 2011 with GNU extensions",
  },
  {
    name: ["c17", "iso9899:2017", "c18", "iso9899:2018"],
    description: "ISO C 2017",
  },
  {
    name: ["gnu17", "gnu18"],
    description: "ISO C 2017 with GNU extensions",
  },
  {
    name: "c2x",
    description: "Working Draft for ISO C2x",
  },
  {
    name: "gnu2x",
    description: "Working Draft for ISO C2x with GNU extensions",
  },
];

export const stdCPPSuggestions: Fig.Suggestion[] = [
  {
    name: ["c++98", "c++03"],
    description: "ISO C++ 1998 with amendments",
  },
  {
    name: ["gnu++98", "gnu++03"],
    description: "ISO C++ 1998 with amendments and GNU extensions",
  },
  {
    name: "c++11",
    description: "ISO C++ 2011 with amendments",
  },
  {
    name: "gnu++11",
    description: "ISO C++ 2011 with amendments and GNU extensions",
  },
  {
    name: "c++14",
    description: "ISO C++ 2014 with amendments",
  },
  {
    name: "gnu++14",
    description: "ISO C++ 2014 with amendments and GNU extensions",
  },
  {
    name: "c++17",
    description: "ISO C++ 2017 with amendments",
  },
  {
    name: "gnu++17",
    description: "ISO C++ 2017 with amendments and GNU extensions",
  },
  {
    name: "c++20",
    description: "ISO C++ 2020 DIS",
  },
  {
    name: "gnu++20",
    description: "ISO C++ 2020 DIS with GNU extensions",
  },
  {
    name: "c++2b",
    description: "Working draft for ISO C++ 2023 DIS",
  },
  {
    name: "gnu++2b",
    description: "Working draft for ISO C++ 2023 DIS with GNU extensions",
  },
];

export const stdOpenCLSuggestions: Fig.Suggestion[] = [
  {
    name: "cl1.0",
    description: "OpenCL 1.0",
  },
  {
    name: "cl1.1",
    description: "OpenCL 1.1",
  },
  {
    name: "cl1.2",
    description: "OpenCL 1.2",
  },
  {
    name: "cl2.0",
    description: "OpenCL 2.0",
  },
  {
    name: "cl3.0",
    description: "OpenCL 3.0",
  },
];

export const stdOpenCLCPPSuggestions: Fig.Suggestion[] = [
  {
    name: ["clc++", "clc++1.0"],
    description: "C++ for OpenCL 1.0",
  },
  {
    name: "clc++2021",
    description: "C++ for OpenCL 2021",
  },
];

export const stdHLSLSuggestions: Fig.Suggestion[] = [
  {
    name: "hlsl",
    description: "High Level Shader Language",
  },
  {
    name: "hlsl2015",
    description: "High Level Shader Language 2015",
  },
  {
    name: "hlsl2016",
    description: "High Level Shader Language 2016",
  },
  {
    name: "hlsl2017",
    description: "High Level Shader Language 2017",
  },
  {
    name: "hlsl2018",
    description: "High Level Shader Language 2018",
  },
  {
    name: "hlsl2021",
    description: "High Level Shader Language 2021",
  },
  {
    name: "hlsl202x",
    description: "High Level Shader Language 202x",
  },
];

export const stdOption: Fig.Option = {
  name: "-std",
  description: "Language standard to compile for",
  args: {
    name: "value",
    suggestions: [
      ...stdCSuggestions,
      ...stdCPPSuggestions,
      ...stdOpenCLSuggestions,
      ...stdOpenCLCPPSuggestions,
      {
        name: "cuda",
        description: "NVIDIA CUDA(tm)",
      },
      {
        name: "hip",
        description: "HIP",
      },
      ...stdHLSLSuggestions,
    ],
  },
  requiresSeparator: true,
};

export const clangBase: Fig.Spec = {
  name: "clang",
  description: "Clang LLVM compiler",
  args: {
    name: "file",
    isVariadic: true,
    template: "filepaths",
  },
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  options: [
    {
      name: "-###",
      description:
        "Print (but do not run) the commands to run for this compilation",
    },
    {
      name: "--analyzer-output",
      description: "Static analyzer report output format",
      args: {
        name: "value",
        suggestions: [
          "html",
          "plist",
          "plist-multi-file",
          "plist-html",
          "sarif",
          "text",
        ],
      },
    },
    {
      name: "--analyze",
      description: "Run the static analyzer",
    },
    {
      name: "-arcmt-migrate-emit-errors",
      description: "Emit ARC errors even if the migrator can fix them",
    },
    {
      name: "-arcmt-migrate-report-output",
      description: "Output path for the plist report",
      args: {
        name: "value",
      },
    },
    {
      name: "-B",
      description:
        "Add <dir> to search path for binaries and object files used implicitly",
      args: {
        name: "dir",
        template: "folders",
      },
    },
    {
      name: "-CC",
      description: "Include comments from within macros in preprocessed output",
    },
    {
      name: "-cl-denorms-are-zero",
      description: "OpenCL only. Allow denormals to be flushed to zero",
    },
    {
      name: "-cl-fast-relaxed-math",
      description:
        "OpenCL only. Sets -cl-finite-math-only and -cl-unsafe-math-optimizations, and defines __FAST_RELAXED_MATH__",
    },
    {
      name: "-cl-finite-math-only",
      description:
        "OpenCL only. Allow floating-point optimizations that assume arguments and results are not NaNs or +-Inf",
    },
    {
      name: "-cl-fp32-correctly-rounded-divide-sqrt",
      description:
        "OpenCL only. Specify that single precision floating-point divide and sqrt used in the program source are correctly rounded",
    },
    {
      name: "-cl-kernel-arg-info",
      description: "OpenCL only. Generate kernel argument metadata",
    },
    {
      name: "-cl-mad-enable",
      description:
        "OpenCL only. Allow use of less precise MAD computations in the generated binary",
    },
    {
      name: "-cl-no-signed-zeros",
      description:
        "OpenCL only. Allow use of less precise no signed zeros computations in the generated binary",
    },
    {
      name: "-cl-opt-disable",
      description:
        "OpenCL only. This option disables all optimizations. By default optimizations are enabled",
    },
    {
      name: "-cl-single-precision-constant",
      description:
        "OpenCL only. Treat double precision floating-point constant as single precision constant",
    },
    {
      name: "-cl-std",
      description: "OpenCL language standard to compile for",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-cl-strict-aliasing",
      description:
        "OpenCL only. This option is added for compatibility with OpenCL 1.0",
    },
    {
      name: "-cl-uniform-work-group-size",
      description:
        "OpenCL only. Defines that the global work-size be a multiple of the work-group size specified to clEnqueueNDRangeKernel",
    },
    {
      name: "-cl-unsafe-math-optimizations",
      description:
        "OpenCL only. Allow unsafe floating-point optimizations. Also implies -cl-no-signed-zeros and -cl-mad-enable",
    },
    {
      name: "--config",
      description: "Specifies configuration file",
      args: {
        name: "value",
      },
    },
    {
      name: "--cuda-compile-host-device",
      description:
        "Compile CUDA code for both host and device (default). Has no effect on non-CUDA compilations",
    },
    {
      name: "--cuda-device-only",
      description: "Compile CUDA code for device only",
    },
    {
      name: "--cuda-host-only",
      description:
        "Compile CUDA code for host only. Has no effect on non-CUDA compilations",
    },
    {
      name: "--cuda-include-ptx",
      description:
        "Include PTX for the following GPU architecture (e.g. sm_35) or 'all'. May be specified more than once",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "--cuda-noopt-device-debug",
      description:
        "Enable device-side debug info generation. Disables ptxas optimizations",
    },
    {
      name: "--cuda-path-ignore-env",
      description: "Ignore environment variables to detect CUDA installation",
    },
    {
      name: "--cuda-path",
      description: "CUDA installation path",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-cxx-isystem",
      description: "Add directory to the C++ SYSTEM include search path",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: "-C",
      description: "Include comments in preprocessed output",
    },
    {
      name: "-c",
      description: "Only run preprocess, compile, and assemble steps",
    },
    {
      name: "-dD",
      description:
        "Print macro definitions in -E mode in addition to normal output",
    },
    {
      name: "-dependency-dot",
      description: "Filename to write DOT-formatted header dependencies to",
      args: {
        name: "value",
      },
    },
    {
      name: "-dependency-file",
      description: "Filename (or -) to write dependency output to",
      args: {
        name: "value",
      },
    },
    {
      name: "-dI",
      description:
        "Print include directives in -E mode in addition to normal output",
    },
    {
      name: "-dM",
      description:
        "Print macro definitions in -E mode instead of normal output",
    },
    {
      name: "-dsym-dir",
      description: "Directory to output dSYM's (if any) to",
      args: {
        name: "dir",
        template: "folders",
      },
    },
    {
      name: "-D",
      description:
        "=<value> Define <macro> to <value> (or 1 if <value> omitted)",
      args: {
        name: "macro",
      },
    },
    {
      name: "-emit-ast",
      description: "Emit Clang AST files for source inputs",
    },
    {
      name: "-emit-interface-stubs",
      description: "Generate Interface Stub Files",
    },
    {
      name: "-emit-llvm",
      description: "Use the LLVM representation for assembler and object files",
    },
    {
      name: "-emit-merged-ifs",
      description: "Generate Interface Stub Files, emit merged text not binary",
    },
    {
      name: "--emit-static-lib",
      description: "Enable linker job to emit a static library",
    },
    {
      name: "-enable-trivial-auto-var-init-zero-knowing-it-will-be-removed-from-clang",
      description:
        "Trivial automatic variable initialization to zero is only here for benchmarks, it'll eventually be removed, and I'm OK with that because I'm only using it to benchmark",
    },
    {
      name: "-E",
      description: "Only run the preprocessor",
    },
    {
      name: "-faapcs-bitfield-load",
      description:
        "Follows the AAPCS standard that all volatile bit-field write generates at least one load. (ARM only)",
    },
    {
      name: "-faapcs-bitfield-width",
      description:
        "Follow the AAPCS standard requirement stating that volatile bit-field width is dictated by the field container type. (ARM only)",
    },
    {
      name: "-faccess-control",
    },
    {
      name: "-faddrsig",
      description: "Emit an address-significance table",
    },
    {
      name: "-faligned-allocation",
      description: "Enable C++17 aligned allocation functions",
    },
    {
      name: "-fallow-editor-placeholders",
      description: "Treat editor placeholders as valid source code",
    },
    {
      name: "-fansi-escape-codes",
      description: "Use ANSI escape codes for diagnostics",
    },
    {
      name: "-fapinotes-cache-path",
      description:
        "Does nothing; API notes are no longer cached separately from modules",
      args: {
        name: "directory",
        template: "folders",
      },
      requiresSeparator: true,
    },
    {
      name: "-fapinotes-modules",
      description: "Enable module-based external API notes support",
    },
    {
      name: "-fapinotes-swift-version",
      description: "Specify the Swift version to use when filtering API notes",
      args: {
        name: "version",
      },
      requiresSeparator: true,
    },
    {
      name: "-fapinotes",
      description: "Enable external API notes support",
    },
    {
      name: "-fapple-kext",
      description: "Use Apple's kernel extensions ABI",
    },
    {
      name: "-fapple-link-rtlib",
      description: "Force linking the clang builtins runtime library",
    },
    {
      name: "-fapple-pragma-pack",
      description: "Enable Apple gcc-compatible #pragma pack handling",
    },
    {
      name: "-fapplication-extension",
      description: "Restrict code to those available for App Extensions",
    },
    {
      name: "-fasm-blocks",
    },
    {
      name: "-fautolink",
    },
    {
      name: "-fbasic-block-sections",
      description:
        "Place each function's basic blocks in unique sections (ELF Only) : all | labels | none | list=<file>",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fblocks",
      description: "Enable the 'blocks' language feature",
    },
    {
      name: "-fborland-extensions",
      description:
        "Accept non-standard constructs supported by the Borland compiler",
    },
    {
      name: "-fbranch-target-identification",
      description:
        "Emit branch target identification instructions for indirect branch destinations",
    },
    {
      name: "-fbuild-session-file",
      description:
        "Use the last modification time of <file> as the build session timestamp",
      args: {
        name: "file",
      },
      requiresSeparator: true,
    },
    {
      name: "-fbuild-session-timestamp",
      description: "Time when the current build session started",
      args: {
        name: "timesinceEpochinseconds",
      },
      requiresSeparator: true,
    },
    {
      name: "-fbuiltin-module-map",
      description: "Load the clang builtins module map file",
    },
    {
      name: "-fc++-static-destructors",
    },
    {
      name: "-fcall-saved-x10",
      description: "Make the x10 register call-saved (AArch64 only)",
    },
    {
      name: "-fcall-saved-x11",
      description: "Make the x11 register call-saved (AArch64 only)",
    },
    {
      name: "-fcall-saved-x12",
      description: "Make the x12 register call-saved (AArch64 only)",
    },
    {
      name: "-fcall-saved-x13",
      description: "Make the x13 register call-saved (AArch64 only)",
    },
    {
      name: "-fcall-saved-x14",
      description: "Make the x14 register call-saved (AArch64 only)",
    },
    {
      name: "-fcall-saved-x15",
      description: "Make the x15 register call-saved (AArch64 only)",
    },
    {
      name: "-fcall-saved-x18",
      description: "Make the x18 register call-saved (AArch64 only)",
    },
    {
      name: "-fcall-saved-x8",
      description: "Make the x8 register call-saved (AArch64 only)",
    },
    {
      name: "-fcall-saved-x9",
      description: "Make the x9 register call-saved (AArch64 only)",
    },
    {
      name: "-fcaret-diagnostics",
    },
    {
      name: "-fcf-protection",
      description: "Instrument control-flow architecture protection",
      args: {
        name: "value",
        isOptional: true,
        suggestions: ["return", "branch", "full", "none"],
        default: "full",
      },
      requiresSeparator: true,
    },
    {
      name: "-fchar8_t",
      description: "Enable C++ builtin type char8_t",
    },
    {
      name: "-fclang-abi-compat",
      description: "Attempt to match the ABI of Clang <version>",
      args: {
        name: "version",
      },
      requiresSeparator: true,
    },
    {
      name: "-fcolor-diagnostics",
      description: "Enable colors in diagnostics",
    },
    {
      name: "-fcomment-block-commands",
      description:
        "Treat each comma separated argument in <arg> as a documentation comment block command",
      args: {
        name: "arg",
      },
      requiresSeparator: true,
    },
    {
      name: "-fcommon",
      description: "Place uninitialized global variables in a common block",
    },
    {
      name: "-fcomplete-member-pointers",
      description:
        "Require member pointer base types to be complete if they would be significant under the Microsoft ABI",
    },
    {
      name: "-fconstant-cfstrings",
    },
    {
      name: "-fconvergent-functions",
      description: "Assume functions may be convergent",
    },
    {
      name: "-fcoroutines-ts",
      description: "Enable support for the C++ Coroutines TS",
    },
    {
      name: "-fcoverage-mapping",
      description: "Generate coverage mapping to enable code coverage analysis",
    },
    {
      name: "-fcs-profile-generate",
      description:
        "Generate instrumented code to collect context sensitive execution counts into <directory>/default.profraw (overridden by LLVM_PROFILE_FILE env var)",
      args: {
        name: "directory",
        template: "folders",
        isOptional: true,
      },
      requiresSeparator: true,
    },
    {
      name: "-fcuda-approx-transcendentals",
      description: "Use approximate transcendental functions",
    },
    {
      name: "-fcuda-flush-denormals-to-zero",
      description:
        "Flush denormal floating point values to zero in CUDA device mode",
    },
    {
      name: "-fcuda-short-ptr",
      description:
        "Use 32-bit pointers for accessing const/local/shared address spaces",
    },
    {
      name: "-fcxx-exceptions",
      description: "Enable C++ exceptions",
    },
    {
      name: "-fdata-sections",
      description: "Place each data in its own section",
    },
    {
      name: "-fdebug-compilation-dir",
      description: "The compilation directory to embed in the debug info",
      args: {
        name: "value",
      },
    },
    {
      name: "-fdebug-default-version",
      description:
        "Default DWARF version to use, if a -g option caused DWARF debug info to be produced",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fdebug-info-for-profiling",
      description: "Emit extra debug info to make sample profile more accurate",
    },
    {
      name: "-fdebug-macro",
      description: "Emit macro debug information",
    },
    {
      name: "-fdebug-prefix-map",
      description: "Remap file source paths in debug info",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fdebug-ranges-base-address",
      description: "Use DWARF base address selection entries in .debug_ranges",
    },
    {
      name: "-fdebug-types-section",
      description: "Place debug types in their own section (ELF Only)",
    },
    {
      name: "-fdeclspec",
      description: "Allow __declspec as a keyword",
    },
    {
      name: "-fdelayed-template-parsing",
      description:
        "Parse templated function definitions at the end of the translation unit",
    },
    {
      name: "-fdelete-null-pointer-checks",
      description:
        "Treat usage of null pointers as undefined behavior (default)",
    },
    {
      name: "-fdiagnostics-absolute-paths",
      description: "Print absolute paths in diagnostics",
    },
    {
      name: "-fdiagnostics-hotness-threshold",
      description:
        "Prevent optimization remarks from being output if they do not have at least this profile count. Use 'auto' to apply the threshold from profile summary",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fdiagnostics-parseable-fixits",
      description: "Print fix-its in machine parseable form",
    },
    {
      name: "-fdiagnostics-print-source-range-info",
      description: "Print source range spans in numeric form",
    },
    {
      name: "-fdiagnostics-show-hotness",
      description: "Enable profile hotness information in diagnostic line",
    },
    {
      name: "-fdiagnostics-show-note-include-stack",
      description: "Display include stacks for diagnostic notes",
    },
    {
      name: "-fdiagnostics-show-option",
      description: "Print option name with mappable diagnostics",
    },
    {
      name: "-fdiagnostics-show-template-tree",
      description: "Print a template comparison tree for differing templates",
    },
    {
      name: "-fdigraphs",
      description:
        "Enable alternative token representations '<:', ':>', '<%', '%>', '%:', '%:%:' (default)",
    },
    {
      name: "-fdiscard-value-names",
      description: "Discard value names in LLVM IR",
    },
    {
      name: "-fdollars-in-identifiers",
      description: "Allow '$' in identifiers",
    },
    {
      name: "-fdouble-square-bracket-attributes",
      description: "Enable '[[]]' attributes in all C and C++ language modes",
    },
    {
      name: "-fdwarf-directory-asm",
    },
    {
      name: "-fdwarf-exceptions",
      description: "Use DWARF style exceptions",
    },
    {
      name: "-felide-constructors",
    },
    {
      name: "-feliminate-unused-debug-types",
      description: "Do not emit debug info for defined but unused types",
    },
    {
      name: "-fembed-bitcode-marker",
      description: "Embed placeholder LLVM IR data as a marker",
    },
    {
      name: "-fembed-bitcode",
      description: "Embed LLVM bitcode",
      args: {
        name: "option",
        suggestions: ["off", "all", "bitcode", "marker"],
        isOptional: true,
      },
      requiresSeparator: true,
    },
    {
      name: "-femit-all-decls",
      description: "Emit all declarations, even if unused",
    },
    {
      name: "-femulated-tls",
      description: "Use emutls functions to access thread_local variables",
    },
    {
      name: "-fenable-matrix",
      description: "Enable matrix data type and related builtin functions",
    },
    {
      name: "-fescaping-block-tail-calls",
    },
    {
      name: "-fexceptions",
      description: "Enable support for exception handling",
    },
    {
      name: "-fexperimental-new-constant-interpreter",
      description: "Enable the experimental new constant interpreter",
    },
    {
      name: "-fexperimental-relative-c++-abi-vtables",
      description:
        "Use the experimental C++ class ABI for classes with virtual tables",
    },
    {
      name: "-fexperimental-strict-floating-point",
      description: "Enables experimental strict floating point in LLVM",
    },
    {
      name: "-ffast-math",
      description: "Allow aggressive, lossy floating-point optimizations",
    },
    {
      name: "-ffile-prefix-map",
      description:
        "Remap file source paths in debug info and predefined preprocessor macros",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-ffine-grained-bitfield-accesses",
      description:
        "Use separate accesses for consecutive bitfield runs with legal widths and alignments",
    },
    {
      name: "-ffinite-loops",
      description: "Assume all loops are finite",
    },
    {
      name: "-ffinite-math-only",
    },
    {
      name: "-ffixed-point",
      description: "Enable fixed point types",
    },
    {
      name: "-ffixed-r19",
      description: "Reserve register r19 (Hexagon only)",
    },
    {
      name: "-ffixed-r9",
      description: "Reserve the r9 register (ARM only)",
    },
    {
      name: "-ffixed-x10",
      description: "Reserve the x10 register (AArch64/RISC-V only)",
    },
    {
      name: "-ffixed-x11",
      description: "Reserve the x11 register (AArch64/RISC-V only)",
    },
    {
      name: "-ffixed-x12",
      description: "Reserve the x12 register (AArch64/RISC-V only)",
    },
    {
      name: "-ffixed-x13",
      description: "Reserve the x13 register (AArch64/RISC-V only)",
    },
    {
      name: "-ffixed-x14",
      description: "Reserve the x14 register (AArch64/RISC-V only)",
    },
    {
      name: "-ffixed-x15",
      description: "Reserve the x15 register (AArch64/RISC-V only)",
    },
    {
      name: "-ffixed-x16",
      description: "Reserve the x16 register (AArch64/RISC-V only)",
    },
    {
      name: "-ffixed-x17",
      description: "Reserve the x17 register (AArch64/RISC-V only)",
    },
    {
      name: "-ffixed-x18",
      description: "Reserve the x18 register (AArch64/RISC-V only)",
    },
    {
      name: "-ffixed-x19",
      description: "Reserve the x19 register (AArch64/RISC-V only)",
    },
    {
      name: "-ffixed-x1",
      description: "Reserve the x1 register (AArch64/RISC-V only)",
    },
    {
      name: "-ffixed-x20",
      description: "Reserve the x20 register (AArch64/RISC-V only)",
    },
    {
      name: "-ffixed-x21",
      description: "Reserve the x21 register (AArch64/RISC-V only)",
    },
    {
      name: "-ffixed-x22",
      description: "Reserve the x22 register (AArch64/RISC-V only)",
    },
    {
      name: "-ffixed-x23",
      description: "Reserve the x23 register (AArch64/RISC-V only)",
    },
    {
      name: "-ffixed-x24",
      description: "Reserve the x24 register (AArch64/RISC-V only)",
    },
    {
      name: "-ffixed-x25",
      description: "Reserve the x25 register (AArch64/RISC-V only)",
    },
    {
      name: "-ffixed-x26",
      description: "Reserve the x26 register (AArch64/RISC-V only)",
    },
    {
      name: "-ffixed-x27",
      description: "Reserve the x27 register (AArch64/RISC-V only)",
    },
    {
      name: "-ffixed-x28",
      description: "Reserve the x28 register (AArch64/RISC-V only)",
    },
    {
      name: "-ffixed-x29",
      description: "Reserve the x29 register (AArch64/RISC-V only)",
    },
    {
      name: "-ffixed-x2",
      description: "Reserve the x2 register (AArch64/RISC-V only)",
    },
    {
      name: "-ffixed-x30",
      description: "Reserve the x30 register (AArch64/RISC-V only)",
    },
    {
      name: "-ffixed-x31",
      description: "Reserve the x31 register (AArch64/RISC-V only)",
    },
    {
      name: "-ffixed-x3",
      description: "Reserve the x3 register (AArch64/RISC-V only)",
    },
    {
      name: "-ffixed-x4",
      description: "Reserve the x4 register (AArch64/RISC-V only)",
    },
    {
      name: "-ffixed-x5",
      description: "Reserve the x5 register (AArch64/RISC-V only)",
    },
    {
      name: "-ffixed-x6",
      description: "Reserve the x6 register (AArch64/RISC-V only)",
    },
    {
      name: "-ffixed-x7",
      description: "Reserve the x7 register (AArch64/RISC-V only)",
    },
    {
      name: "-ffixed-x8",
      description: "Reserve the x8 register (AArch64/RISC-V only)",
    },
    {
      name: "-ffixed-x9",
      description: "Reserve the x9 register (AArch64/RISC-V only)",
    },
    {
      name: "-fforce-dwarf-frame",
      description: "Always emit a debug frame section",
    },
    {
      name: "-fforce-emit-vtables",
      description: "Emits more virtual tables to improve devirtualization",
    },
    {
      name: "-fforce-enable-int128",
      description: "Enable support for int128_t type",
    },
    {
      name: "-ffp-contract",
      description:
        "Form fused FP ops (e.g. FMAs): fast (fuses across statements disregarding pragmas) | on (only fuses in the same statement unless dictated by pragmas) | off (never fuses) | fast-honor-pragmas (fuses across statements unless diectated by pragmas). Default is 'fast' for CUDA, 'fast-honor-pragmas' for HIP, and 'on' otherwise",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-ffp-exception-behavior",
      description:
        "Specifies the exception behavior of floating-point operations",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-ffp-model",
      description: "Controls the semantics of floating-point calculations",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-ffreestanding",
      description:
        "Assert that the compilation takes place in a freestanding environment",
    },
    {
      name: "-ffunction-sections",
      description: "Place each function in its own section",
    },
    {
      name: "-fglobal-isel",
      description: "Enables the global instruction selector",
    },
    {
      name: "-fgnu-inline-asm",
    },
    {
      name: "-fgnu-keywords",
      description:
        "Allow GNU-extension keywords regardless of language standard",
    },
    {
      name: "-fgnu-runtime",
      description:
        "Generate output compatible with the standard GNU Objective-C runtime",
    },
    {
      name: "-fgnu89-inline",
      description: "Use the gnu89 inline semantics",
    },
    {
      name: "-fgnuc-version",
      description:
        "Sets various macros to claim compatibility with the given GCC version (default is 4.2.1)",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fgpu-allow-device-init",
      description: "Allow device side init function in HIP",
    },
    {
      name: "-fgpu-defer-diag",
      description: "Defer host/device related diagnostic messages for CUDA/HIP",
    },
    {
      name: "-fgpu-rdc",
      description:
        "Generate relocatable device code, also known as separate compilation mode",
    },
    {
      name: "-fhip-new-launch-api",
      description: "Use new kernel launching API for HIP",
    },
    {
      name: "-fignore-exceptions",
      description: "Enable support for ignoring exception handling constructs",
    },
    {
      name: "-fimplicit-module-maps",
      description: "Implicitly search the file system for module map files",
    },
    {
      name: "-fimplicit-modules",
    },
    {
      name: "-finline-functions",
      description: "Inline suitable functions",
    },
    {
      name: "-finline-hint-functions",
      description:
        "Inline functions which are (explicitly or implicitly) marked inline",
    },
    {
      name: "-finstrument-function-entry-bare",
      description:
        "Instrument function entry only, after inlining, without arguments to the instrumentation call",
    },
    {
      name: "-finstrument-functions-after-inlining",
      description:
        "Like -finstrument-functions, but insert the calls after inlining",
    },
    {
      name: "-finstrument-functions",
      description: "Generate calls to instrument function entry and exit",
    },
    {
      name: "-fintegrated-as",
      description: "Enable the integrated assembler",
    },
    {
      name: "-fintegrated-cc1",
      description: "Run cc1 in-process",
    },
    {
      name: "-fjump-tables",
      description: "Use jump tables for lowering switches",
    },
    {
      name: "-fkeep-static-consts",
      description: "Keep static const variables if unused",
    },
    {
      name: "-flax-vector-conversions",
      description: "Enable implicit vector bit-casts",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-flegacy-pass-manager",
      description: "Use the legacy pass manager in LLVM",
    },
    {
      name: "-flto-jobs",
      description:
        "Controls the backend parallelism of -flto=thin (default of 0 means the number of threads will be derived from the number of CPUs detected)",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-flto",
      description: "Set LTO mode to either 'full' or 'thin'",
      args: {
        name: "value",
        suggestions: ["full", "thin"],
        isOptional: true,
        default: "full",
      },
      requiresSeparator: true,
    },
    {
      name: "-fmacro-prefix-map",
      description: "Remap file source paths in predefined preprocessor macros",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fmath-errno",
      description: "Require math functions to indicate errors by setting errno",
    },
    {
      name: "-fmax-tokens",
      description: "Max total number of preprocessed tokens for -Wmax-tokens",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fmax-type-align",
      description:
        "Specify the maximum alignment to enforce on pointers lacking an explicit alignment",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fmemory-profile",
      description:
        "Enable heap memory profiling and dump results into <directory>",
      args: {
        name: "directory",
        isOptional: true,
      },
      requiresSeparator: true,
    },
    {
      name: "-fmerge-all-constants",
      description: "Allow merging of constants",
    },
    {
      name: "-fmessage-length",
      description:
        "Format message diagnostics so that they fit within N columns",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fmodule-file",
      description:
        "[<name>=]<file> Specify the mapping of module name to precompiled module file, or load a module file if name is omitted",
      requiresSeparator: true,
    },
    {
      name: "-fmodule-map-file",
      description: "Load this module map file",
      args: {
        name: "file",
      },
      requiresSeparator: true,
    },
    {
      name: "-fmodule-name",
      description: "Specify the name of the module to build",
      args: {
        name: "name",
      },
      requiresSeparator: true,
    },
    {
      name: "-fmodules-cache-path",
      description: "Specify the module cache path",
      args: {
        name: "directory",
        template: "folders",
      },
      requiresSeparator: true,
    },
    {
      name: "-fmodules-decluse",
      description: "Require declaration of modules used within a module",
    },
    {
      name: "-fmodules-disable-diagnostic-validation",
      description:
        "Disable validation of the diagnostic options when loading the module",
    },
    {
      name: "-fmodules-ignore-macro",
      description:
        "Ignore the definition of the given macro when building and loading modules",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fmodules-prune-after",
      description:
        "Specify the interval (in seconds) after which a module file will be considered unused",
      args: {
        name: "seconds",
      },
      requiresSeparator: true,
    },
    {
      name: "-fmodules-prune-interval",
      description:
        "Specify the interval (in seconds) between attempts to prune the module cache",
      args: {
        name: "seconds",
      },
      requiresSeparator: true,
    },
    {
      name: "-fmodules-search-all",
      description: "Search even non-imported modules to resolve references",
    },
    {
      name: "-fmodules-strict-decluse",
      description:
        "Like -fmodules-decluse but requires all headers to be in modules",
    },
    {
      name: "-fmodules-ts",
      description: "Enable support for the C++ Modules TS",
    },
    {
      name: "-fmodules-user-build-path",
      description: "Specify the module user build path",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: "-fmodules-validate-input-files-content",
      description: "Validate PCM input files based on content if mtime differs",
    },
    {
      name: "-fmodules-validate-once-per-build-session",
      description:
        "Don't verify input files for the modules if the module has been successfully validated or loaded during this build session",
    },
    {
      name: "-fmodules-validate-system-headers",
      description:
        "Validate the system headers that a module depends on when loading the module",
    },
    {
      name: "-fmodules",
      description: "Enable the 'modules' language feature",
    },
    {
      name: "-fms-compatibility-version",
      description:
        "Dot-separated value representing the Microsoft compiler version number to report in _MSC_VER (0 = don't define it (default))",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fms-compatibility",
      description: "Enable full Microsoft Visual C++ compatibility",
    },
    {
      name: "-fms-extensions",
      description:
        "Accept some non-standard constructs supported by the Microsoft compiler",
    },
    {
      name: "-fmsc-version",
      description:
        "Microsoft compiler version number to report in _MSC_VER (0 = don't define it (default))",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fnew-alignment",
      description:
        "Specifies the largest alignment guaranteed by '::operator new(size_t)'",
      args: {
        name: "align",
      },
      requiresSeparator: true,
    },
    {
      name: "-fno-aapcs-bitfield-width",
      description:
        "Do not follow the AAPCS standard requirement stating that volatile bit-field width is dictated by the field container type. (ARM only)",
    },
    {
      name: "-fno-access-control",
      description: "Disable C++ access control",
    },
    {
      name: "-fno-addrsig",
      description: "Don't emit an address-significance table",
    },
    {
      name: "-fno-allow-editor-placeholders",
    },
    {
      name: "-fno-apinotes-modules",
      description: "Disable module-based external API notes support",
    },
    {
      name: "-fno-apinotes",
      description: "Disable external API notes support",
    },
    {
      name: "-fno-apple-pragma-pack",
    },
    {
      name: "-fno-application-extension",
    },
    {
      name: "-fno-asm-blocks",
    },
    {
      name: "-fno-assume-sane-operator-new",
      description:
        "Don't assume that C++'s global operator new can't alias any pointer",
    },
    {
      name: "-fno-autolink",
      description:
        "Disable generation of linker directives for automatic library linking",
    },
    {
      name: "-fno-blocks",
    },
    {
      name: "-fno-borland-extensions",
    },
    {
      name: "-fno-builtin-value",
      description: "Disable implicit builtin knowledge of a specific function",
      args: {
        name: "",
      },
    },
    {
      name: "-fno-builtin",
      description: "Disable implicit builtin knowledge of functions",
    },
    {
      name: "-fno-c++-static-destructors",
      description: "Disable C++ static destructor registration",
    },
    {
      name: "-fno-caret-diagnostics",
    },
    {
      name: "-fno-char8_t",
      description: "Disable C++ builtin type char8_t",
    },
    {
      name: "-fno-color-diagnostics",
      description: "Disable colors in diagnostics",
    },
    {
      name: "-fno-common",
      description: "Compile common globals like normal definitions",
    },
    {
      name: "-fno-complete-member-pointers",
      description:
        "Do not require member pointer base types to be complete if they would be significant under the Microsoft ABI",
    },
    {
      name: "-fno-constant-cfstrings",
      description: "Disable creation of CodeFoundation-type constant strings",
    },
    {
      name: "-fno-constant-nsarray-literals",
      description:
        "Disable creation of CodeFoundation-type constant initializer `NSArray`s from array literals",
    },
    {
      name: "-fno-constant-nsdictionary-literals",
      description:
        "Disable creation of CodeFoundation-type constant initializer `NSDictionary`s from dictionary literals",
    },
    {
      name: "-fno-constant-nsnumber-literals",
      description:
        "Disable creation of CodeFoundation-type constant initializer `NSNumber`s from number literals",
    },
    {
      name: "-fno-coroutines-ts",
    },
    {
      name: "-fno-coverage-mapping",
      description: "Disable code coverage analysis",
    },
    {
      name: "-fno-crash-diagnostics",
      description:
        "Disable auto-generation of preprocessed source files and a script for reproduction during a clang crash",
    },
    {
      name: "-fno-cuda-approx-transcendentals",
      description: "Don't use approximate transcendental functions",
    },
    {
      name: "-fno-cuda-short-ptr",
    },
    {
      name: "-fno-cxx-exceptions",
    },
    {
      name: "-fno-cxx-modules",
      description: "Disable modules for C++",
    },
    {
      name: "-fno-data-sections",
    },
    {
      name: "-fno-debug-info-for-profiling",
    },
    {
      name: "-fno-debug-macro",
      description: "Do not emit macro debug information",
    },
    {
      name: "-fno-debug-ranges-base-address",
    },
    {
      name: "-fno-declspec",
      description: "Disallow __declspec as a keyword",
    },
    {
      name: "-fno-delayed-template-parsing",
      description: "Disable delayed template parsing",
    },
    {
      name: "-fno-delete-null-pointer-checks",
      description: "Do not treat usage of null pointers as undefined behavior",
    },
    {
      name: "-fno-diagnostics-fixit-info",
      description: "Do not include fixit information in diagnostics",
    },
    {
      name: "-fno-diagnostics-show-hotness",
    },
    {
      name: "-fno-digraphs",
      description:
        "Disallow alternative token representations '<:', ':>', '<%', '%>', '%:', '%:%:'",
    },
    {
      name: "-fno-discard-value-names",
      description: "Do not discard value names in LLVM IR",
    },
    {
      name: "-fno-dollars-in-identifiers",
      description: "Disallow '$' in identifiers",
    },
    {
      name: "-fno-double-square-bracket-attributes",
      description: "Disable '[[]]' attributes in all C and C++ language modes",
    },
    {
      name: "-fno-dwarf-directory-asm",
    },
    {
      name: "-fno-elide-constructors",
      description: "Disable C++ copy constructor elision",
    },
    {
      name: "-fno-elide-type",
      description: "Do not elide types when printing diagnostics",
    },
    {
      name: "-fno-eliminate-unused-debug-types",
      description: "Emit debug info for defined but unused types",
    },
    {
      name: "-fno-escaping-block-tail-calls",
    },
    {
      name: "-fno-exceptions",
      description: "Disable support for exception handling",
    },
    {
      name: "-fno-experimental-relative-c++-abi-vtables",
      description:
        "Do not use the experimental C++ class ABI for classes with virtual tables",
    },
    {
      name: "-fno-fast-math",
    },
    {
      name: "-fno-fine-grained-bitfield-accesses",
      description: "Use large-integer access for consecutive bitfield runs",
    },
    {
      name: "-fno-finite-loops",
      description: "Do not assume that any loop is finite",
    },
    {
      name: "-fno-finite-math-only",
    },
    {
      name: "-fno-fixed-point",
      description: "Disable fixed point types",
    },
    {
      name: "-fno-force-dwarf-frame",
    },
    {
      name: "-fno-force-emit-vtables",
    },
    {
      name: "-fno-force-enable-int128",
      description: "Disable support for int128_t type",
    },
    {
      name: "-fno-function-sections",
    },
    {
      name: "-fno-global-isel",
      description: "Disables the global instruction selector",
    },
    {
      name: "-fno-gnu-inline-asm",
      description: "Disable GNU style inline asm",
    },
    {
      name: "-fno-gnu89-inline",
    },
    {
      name: "-fno-gpu-allow-device-init",
      description: "Don't allow device side init function in HIP",
    },
    {
      name: "-fno-gpu-defer-diag",
      description:
        "Don't defer host/device related diagnostic messages for CUDA/HIP",
    },
    {
      name: "-fno-gpu-rdc",
    },
    {
      name: "-fno-hip-new-launch-api",
      description: "Don't use new kernel launching API for HIP",
    },
    {
      name: "-fno-implicit-modules",
    },
    {
      name: "-fno-integrated-as",
      description: "Disable the integrated assembler",
    },
    {
      name: "-fno-integrated-cc1",
      description: "Spawn a separate process for each cc1",
    },
    {
      name: "-fno-jump-tables",
      description: "Do not use jump tables for lowering switches",
    },
    {
      name: "-fno-keep-static-consts",
      description: "Don't keep static const variables if unused",
    },
    {
      name: "-fno-legacy-pass-manager",
      description: "Use the new pass manager in LLVM",
    },
    {
      name: "-fno-lto",
      description: "Disable LTO mode (default)",
    },
    {
      name: "-fno-math-errno",
    },
    {
      name: "-fno-memory-profile",
      description: "Disable heap memory profiling",
    },
    {
      name: "-fno-merge-all-constants",
      description: "Disallow merging of constants",
    },
    {
      name: "-fno-modules-validate-system-headers",
    },
    {
      name: "-fno-objc-arc-exceptions",
    },
    {
      name: "-fno-objc-convert-messages-to-runtime-calls",
    },
    {
      name: "-fno-objc-encode-cxx-class-template-spec",
    },
    {
      name: "-fno-objc-exceptions",
    },
    {
      name: "-fno-objc-infer-related-result-type",
      description:
        "Do not infer Objective-C related result type based on method family",
    },
    {
      name: "-fno-operator-names",
      description:
        "Do not treat C++ operator name keywords as synonyms for operators",
    },
    {
      name: "-fno-pascal-strings",
    },
    {
      name: "-fno-pch-codegen",
      description:
        "Do not generate code for uses of this PCH that assumes an explicit object file will be built for the PCH",
    },
    {
      name: "-fno-pch-debuginfo",
      description:
        "Do not generate debug info for types in an object file built from this PCH and do not generate them elsewhere",
    },
    {
      name: "-fno-pch-instantiate-templates",
    },
    {
      name: "-fno-plt",
      description:
        "Use GOT indirection instead of PLT to make external function calls (x86 only)",
    },
    {
      name: "-fno-prebuilt-implicit-modules",
    },
    {
      name: "-fno-preserve-as-comments",
      description: "Do not preserve comments in inline assembly",
    },
    {
      name: "-fno-profile-arcs",
    },
    {
      name: "-fno-profile-generate",
      description: "Disable generation of profile instrumentation",
    },
    {
      name: "-fno-profile-instr-generate",
      description: "Disable generation of profile instrumentation",
    },
    {
      name: "-fno-profile-instr-use",
      description:
        "Disable using instrumentation data for profile-guided optimization",
    },
    {
      name: "-fno-pseudo-probe-for-profiling",
      description: "Do not emit pseudo probes for sample profiler",
    },
    {
      name: "-fno-ptrauth-abi-version",
      description: "Disable Pointer Authentication ABI versioning",
    },
    {
      name: "-fno-ptrauth-kernel-abi-version",
      description: "Disable Pointer Authentication kernel ABI versioning",
    },
    {
      name: "-fno-reciprocal-math",
    },
    {
      name: "-fno-register-global-dtors-with-atexit",
      description:
        "Don't use atexit or __cxa_atexit to register global destructors",
    },
    {
      name: "-fno-relaxed-template-template-args",
    },
    {
      name: "-fno-reroll-loops",
    },
    {
      name: "-fno-rewrite-imports",
    },
    {
      name: "-fno-rewrite-includes",
    },
    {
      name: "-fno-ropi",
    },
    {
      name: "-fno-rtlib-add-rpath",
      description:
        "Do not add -rpath with architecture-specific resource directory to the linker flags",
    },
    {
      name: "-fno-rtti-data",
      description: "Disable generation of RTTI data",
    },
    {
      name: "-fno-rtti",
      description: "Disable generation of rtti information",
    },
    {
      name: "-fno-rwpi",
    },
    {
      name: "-fno-sanitize-address-poison-custom-array-cookie",
      description:
        "Disable poisoning array cookies when using custom operator new[] in AddressSanitizer",
    },
    {
      name: "-fno-sanitize-address-use-after-scope",
      description: "Disable use-after-scope detection in AddressSanitizer",
    },
    {
      name: "-fno-sanitize-address-use-odr-indicator",
      description: "Disable ODR indicator globals",
    },
    {
      name: "-fno-sanitize-blacklist",
      description: "Don't use blacklist file for sanitizers",
    },
    {
      name: "-fno-sanitize-cfi-canonical-jump-tables",
      description:
        "Do not make the jump table addresses canonical in the symbol table",
    },
    {
      name: "-fno-sanitize-cfi-cross-dso",
      description:
        "Disable control flow integrity (CFI) checks for cross-DSO calls",
    },
    {
      name: "-fno-sanitize-coverage",
      description:
        "Disable specified features of coverage instrumentation for Sanitizers",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fno-sanitize-memory-track-origins",
      description: "Disable origins tracking in MemorySanitizer",
    },
    {
      name: "-fno-sanitize-memory-use-after-dtor",
      description: "Disable use-after-destroy detection in MemorySanitizer",
    },
    {
      name: "-fno-sanitize-minimal-runtime",
    },
    {
      name: "-fno-sanitize-recover",
      description: "Disable recovery for specified sanitizers",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fno-sanitize-stats",
      description: "Disable sanitizer statistics gathering",
    },
    {
      name: "-fno-sanitize-thread-atomics",
      description:
        "Disable atomic operations instrumentation in ThreadSanitizer",
    },
    {
      name: "-fno-sanitize-thread-func-entry-exit",
      description:
        "Disable function entry/exit instrumentation in ThreadSanitizer",
    },
    {
      name: "-fno-sanitize-thread-memory-access",
      description: "Disable memory access instrumentation in ThreadSanitizer",
    },
    {
      name: "-fno-sanitize-trap",
      description: "Disable trapping for sanitizers",
      args: {
        name: "value",
        isOptional: true,
      },
      requiresSeparator: true,
    },
    {
      name: "-fno-semantic-interposition",
    },
    {
      name: "-fno-short-enums",
    },
    {
      name: "-fno-short-wchar",
      description: "Force wchar_t to be an unsigned int",
    },
    {
      name: "-fno-show-column",
      description: "Do not include column number on diagnostics",
    },
    {
      name: "-fno-show-source-location",
      description:
        "Do not include source location information with diagnostics",
    },
    {
      name: "-fno-signed-char",
      description: "Char is unsigned",
    },
    {
      name: "-fno-signed-zeros",
      description:
        "Allow optimizations that ignore the sign of floating point zeros",
    },
    {
      name: "-fno-sized-deallocation",
    },
    {
      name: "-fno-spell-checking",
      description: "Disable spell-checking",
    },
    {
      name: "-fno-split-dwarf-inlining",
    },
    {
      name: "-fno-split-lto-unit",
    },
    {
      name: "-fno-split-machine-functions",
      description:
        "Disable late function splitting using profile information (x86 ELF)",
    },
    {
      name: "-fno-stack-check",
      description: "Disable stack checking",
    },
    {
      name: "-fno-stack-clash-protection",
      description: "Disable stack clash protection",
    },
    {
      name: "-fno-stack-protector",
      description: "Disable the use of stack protectors",
    },
    {
      name: "-fno-stack-size-section",
    },
    {
      name: "-fno-standalone-debug",
      description:
        "Limit debug information produced to reduce size of debug binary",
    },
    {
      name: "-fno-strict-float-cast-overflow",
      description:
        "Relax language rules and try to match the behavior of the target's native float-to-int conversion instructions",
    },
    {
      name: "-fno-strict-return",
      description:
        "Don't treat control flow paths that fall off the end of a non-void function as unreachable",
    },
    {
      name: "-fno-strict-vtable-pointers",
    },
    {
      name: "-fno-sycl",
      description: "Disable SYCL kernels compilation for device",
    },
    {
      name: "-fno-temp-file",
      description:
        "Directly create compilation output files. This may lead to incorrect incremental builds if the compiler crashes",
    },
    {
      name: "-fno-test-coverage",
    },
    {
      name: "-fno-threadsafe-statics",
      description:
        "Do not emit code to make initialization of local statics thread safe",
    },
    {
      name: "-fno-trigraphs",
      description: "Do not process trigraph sequences",
    },
    {
      name: "-fno-unique-basic-block-section-names",
    },
    {
      name: "-fno-unique-internal-linkage-names",
    },
    {
      name: "-fno-unique-section-names",
      description: "Don't use unique names for text and data sections",
    },
    {
      name: "-fno-unroll-loops",
      description: "Turn off loop unroller",
    },
    {
      name: "-fno-use-cxa-atexit",
      description: "Don't use __cxa_atexit for calling destructors",
    },
    {
      name: "-fno-use-init-array",
      description: "Use .ctors/.dtors instead of .init_array/.fini_array",
    },
    {
      name: "-fno-use-line-directives",
    },
    {
      name: "-fno-virtual-function-elimination",
    },
    {
      name: "-fno-visibility-from-dllstorageclass",
    },
    {
      name: "-fno-visibility-inlines-hidden-static-local-var",
      description:
        "Disables -fvisibility-inlines-hidden-static-local-var (this is the default on non-darwin targets)",
    },
    {
      name: "-fno-whole-program-vtables",
    },
    {
      name: "-fno-xray-always-emit-customevents",
    },
    {
      name: "-fno-xray-always-emit-typedevents",
    },
    {
      name: "-fno-xray-function-index",
      description:
        "Omit function index section at the expense of single-function patching performance",
    },
    {
      name: "-fno-xray-ignore-loops",
    },
    {
      name: "-fno-xray-instrument",
    },
    {
      name: "-fno-zero-initialized-in-bss",
      description: "Don't place zero initialized data in BSS",
    },
    {
      name: "-fno-zvector",
    },
    {
      name: "-fobjc-arc-exceptions",
      description:
        "Use EH-safe code when synthesizing retains and releases in -fobjc-arc",
    },
    {
      name: "-fobjc-arc",
      description:
        "Synthesize retain and release calls for Objective-C pointers",
    },
    {
      name: "-fobjc-convert-messages-to-runtime-calls",
    },
    {
      name: "-fobjc-disable-direct-methods-for-testing",
      description:
        "Ignore attribute objc_direct so that direct methods can be tested",
    },
    {
      name: "-fobjc-encode-cxx-class-template-spec",
      description: "Fully encode c++ class template specialization",
    },
    {
      name: "-fobjc-exceptions",
      description: "Enable Objective-C exceptions",
    },
    {
      name: "-fobjc-infer-related-result-type",
    },
    {
      name: "-fobjc-relative-method-lists",
      description: "Enable relative method lists",
    },
    {
      name: "-fobjc-runtime",
      description: "Specify the target Objective-C runtime kind and version",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fobjc-weak",
      description: "Enable ARC-style weak references in Objective-C",
    },
    {
      name: "-fopenmp-simd",
      description: "Emit OpenMP code only for SIMD-based constructs",
    },
    {
      name: "-fopenmp-targets",
      description:
        "Specify comma-separated list of triples OpenMP offloading targets to be supported",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fopenmp",
      description: "Parse OpenMP pragmas and generate parallel code",
    },
    {
      name: "-foptimization-record-file",
      description:
        "Specify the output name of the file containing the optimization remarks. Implies -fsave-optimization-record. On Darwin platforms, this cannot be used with multiple -arch <arch> options",
      args: {
        name: "file",
      },
      requiresSeparator: true,
    },
    {
      name: "-foptimization-record-passes",
      description:
        "Only include passes which match a specified regular expression in the generated optimization record (by default, include all passes)",
      args: {
        name: "regex",
      },
      requiresSeparator: true,
    },
    {
      name: "-forder-file-instrumentation",
      description:
        "Generate instrumented code to collect order file into default.profraw file (overridden by '=' form of option or LLVM_PROFILE_FILE env var)",
    },
    {
      name: "-fpack-struct",
      description: "Specify the default maximum struct packing alignment",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fpascal-strings",
      description: "Recognize and construct Pascal-style string literals",
    },
    {
      name: "-fpass-plugin",
      description:
        "Load pass plugin from a dynamic shared object file (only with new pass manager)",
      args: {
        name: "dsopath",
      },
      requiresSeparator: true,
    },
    {
      name: "-fpatchable-function-entry",
      description:
        "Generate M NOPs before function entry and N-M NOPs after function entry",
      args: {
        name: "N,M",
      },
      requiresSeparator: true,
    },
    {
      name: "-fpcc-struct-return",
      description:
        "Override the default ABI to return all structs on the stack",
    },
    {
      name: "-fpch-codegen",
      description:
        "Generate code for uses of this PCH that assumes an explicit object file will be built for the PCH",
    },
    {
      name: "-fpch-debuginfo",
      description:
        "Generate debug info for types in an object file built from this PCH and do not generate them elsewhere",
    },
    {
      name: "-fpch-instantiate-templates",
      description: "Instantiate templates already while building a PCH",
    },
    {
      name: "-fpch-validate-input-files-content",
      description: "Validate PCH input files based on content if mtime differs",
    },
    {
      name: "-fplt",
    },
    {
      name: "-fplugin",
      description: "Load the named plugin (dynamic shared object)",
      args: {
        name: "dsopath",
      },
      requiresSeparator: true,
    },
    {
      name: "-fprebuilt-implicit-modules",
      description: "Look up implicit modules in the prebuilt module path",
    },
    {
      name: "-fprebuilt-module-path",
      description: "Specify the prebuilt module path",
      args: {
        name: "directory",
        template: "folders",
      },
      requiresSeparator: true,
    },
    {
      name: "-fpreserve-as-comments",
    },
    {
      name: "-fproc-stat-report",
      description: "Save subprocess statistics to the given file",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fproc-stat-reportvalue",
      description: "Print subprocess statistics",
      args: {
        name: "",
      },
    },
    {
      name: "-fprofile-arcs",
    },
    {
      name: "-fprofile-exclude-files",
      description:
        "Instrument only functions from files where names don't match all the regexes separated by a semi-colon",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fprofile-filter-files",
      description:
        "Instrument only functions from files where names match any regex separated by a semi-colon",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fprofile-generate",
      description:
        "Generate instrumented code to collect execution counts into <directory>/default.profraw (overridden by LLVM_PROFILE_FILE env var)",
      args: {
        name: "directory",
        isOptional: true,
      },
      requiresSeparator: true,
    },
    {
      name: "-fprofile-instr-generate",
      description:
        "Generate instrumented code to collect execution counts into <file> (overridden by LLVM_PROFILE_FILE env var)",
      args: {
        name: "file",
        isOptional: true,
        template: "filepaths",
      },
      requiresSeparator: true,
    },
    {
      name: "-fprofile-instr-use",
      description: "Use instrumentation data for profile-guided optimization",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fprofile-remapping-file",
      description:
        "Use the remappings described in <file> to match the profile data against names in the program",
      args: {
        name: "file",
      },
      requiresSeparator: true,
    },
    {
      name: "-fprofile-sample-accurate",
      description: "Specifies that the sample profile is accurate",
    },
    {
      name: "-fprofile-sample-use",
      description: "Enable sample-based profile guided optimizations",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fprofile-update",
      description:
        "Set update method of profile counters (atomic,prefer-atomic,single)",
      args: {
        name: "method",
      },
      requiresSeparator: true,
    },
    {
      name: "-fprofile-use",
      description:
        "Use instrumentation data for profile-guided optimization. If pathname is a directory, it reads from <pathname>/default.profdata. Otherwise, it reads from file <pathname>",
      args: {
        name: "pathname",
      },
      requiresSeparator: true,
    },
    {
      name: "-fpseudo-probe-for-profiling",
      description: "Emit pseudo probes for sample profiler",
    },
    {
      name: "-fptrauth-abi-version",
      description: "Pointer Authentication ABI version",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fptrauth-auth-traps",
      description: "Enable traps on authentication failures",
    },
    {
      name: "-fptrauth-block-descriptor-pointers",
      description: "Enable signing block descriptors",
    },
    {
      name: "-fptrauth-calls",
      description: "Enable signing and authentication of all indirect calls",
    },
    {
      name: "-fptrauth-function-pointer-type-discrimination",
      description: "Enabling type discrimination on C function pointers",
    },
    {
      name: "-fptrauth-indirect-gotos",
      description: "Enable signing and authentication of indirect goto targets",
    },
    {
      name: "-fptrauth-intrinsics",
      description: "Enable pointer-authentication intrinsics",
    },
    {
      name: "-fptrauth-kernel-abi-version",
      description: "Enable Pointer Authentication kernel ABI version",
    },
    {
      name: "-fptrauth-objc-isa-masking",
      description:
        "Pre- and post-authentication masking mode of objective-c isa pointers",
    },
    {
      name: "-fptrauth-objc-isa-mode",
      description:
        "Authentication mode for ObjC isa field. Full auth if unspecified",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fptrauth-objc-isa",
      description:
        "Enable signing and authentication of Objective-C object's 'isa' field",
    },
    {
      name: "-fptrauth-returns",
      description: "Enable signing and authentication of return addresses",
    },
    {
      name: "-fptrauth-soft",
      description: "Enable software lowering of pointer authentication",
    },
    {
      name: "-fptrauth-vtable-pointer-address-discrimination",
      description: "Enable address discrimination of vtable pointers",
    },
    {
      name: "-fptrauth-vtable-pointer-type-discrimination",
      description: "Enable type discrimination of vtable pointers",
    },
    {
      name: "-freciprocal-math",
      description: "Allow division operations to be reassociated",
    },
    {
      name: "-freg-struct-return",
      description:
        "Override the default ABI to return small structs in registers",
    },
    {
      name: "-fregister-global-dtors-with-atexit",
      description: "Use atexit or __cxa_atexit to register global destructors",
    },
    {
      name: "-frelaxed-template-template-args",
      description: "Enable C++17 relaxed template template argument matching",
    },
    {
      name: "-freroll-loops",
      description: "Turn on loop reroller",
    },
    {
      name: "-frewrite-imports",
    },
    {
      name: "-frewrite-includes",
    },
    {
      name: "-fropi",
      description: "Generate read-only position independent code (ARM only)",
    },
    {
      name: "-frtlib-add-rpath",
      description:
        "Add -rpath with architecture-specific resource directory to the linker flags",
    },
    {
      name: "-frtti-data",
    },
    {
      name: "-frtti",
    },
    {
      name: "-frwpi",
      description: "Generate read-write position independent code (ARM only)",
    },
    {
      name: "-fsanitize-address-field-padding",
      description: "Level of field padding for AddressSanitizer",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fsanitize-address-globals-dead-stripping",
      description:
        "Enable linker dead stripping of globals in AddressSanitizer",
    },
    {
      name: "-fsanitize-address-poison-custom-array-cookie",
      description:
        "Enable poisoning array cookies when using custom operator new[] in AddressSanitizer",
    },
    {
      name: "-fsanitize-address-use-after-scope",
      description: "Enable use-after-scope detection in AddressSanitizer",
    },
    {
      name: "-fsanitize-address-use-odr-indicator",
      description:
        "Enable ODR indicator globals to avoid false ODR violation reports in partially sanitized programs at the cost of an increase in binary size",
    },
    {
      name: "-fsanitize-blacklist",
      description: "Path to blacklist file for sanitizers",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fsanitize-cfi-canonical-jump-tables",
      description:
        "Make the jump table addresses canonical in the symbol table",
    },
    {
      name: "-fsanitize-cfi-cross-dso",
      description:
        "Enable control flow integrity (CFI) checks for cross-DSO calls",
    },
    {
      name: "-fsanitize-cfi-icall-generalize-pointers",
      description:
        "Generalize pointers in CFI indirect call type signature checks",
    },
    {
      name: "-fsanitize-coverage-allowlist",
      description:
        "Restrict sanitizer coverage instrumentation exclusively to modules and functions that match the provided special case list, except the blocked ones",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fsanitize-coverage-blacklist",
      description: "Deprecated, use -fsanitize-coverage-blocklist= instead",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fsanitize-coverage-blocklist",
      description:
        "Disable sanitizer coverage instrumentation for modules and functions that match the provided special case list, even the allowed ones",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fsanitize-coverage-whitelist",
      description: "Deprecated, use -fsanitize-coverage-allowlist= instead",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fsanitize-coverage",
      description:
        "Specify the type of coverage instrumentation for Sanitizers",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fsanitize-hwaddress-abi",
      description:
        "Select the HWAddressSanitizer ABI to target (interceptor or platform, default interceptor). This option is currently unused",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fsanitize-memory-track-origins",
      description: "Enable origins tracking in MemorySanitizer",
      args: {
        name: "value",
        isOptional: true,
      },
      requiresSeparator: true,
    },
    {
      name: "-fsanitize-memory-use-after-dtor",
      description: "Enable use-after-destroy detection in MemorySanitizer",
    },
    {
      name: "-fsanitize-minimal-runtime",
    },
    {
      name: "-fsanitize-recover",
      description: "Enable recovery for specified sanitizers",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fsanitize-stats",
      description: "Enable sanitizer statistics gathering",
    },
    {
      name: "-fsanitize-system-blacklist",
      description: "Path to system blacklist file for sanitizers",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fsanitize-thread-atomics",
      description:
        "Enable atomic operations instrumentation in ThreadSanitizer (default)",
    },
    {
      name: "-fsanitize-thread-func-entry-exit",
      description:
        "Enable function entry/exit instrumentation in ThreadSanitizer (default)",
    },
    {
      name: "-fsanitize-thread-memory-access",
      description:
        "Enable memory access instrumentation in ThreadSanitizer (default)",
    },
    {
      name: "-fsanitize-trap",
      description: "Enable trapping for sanitizers",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fsanitize-undefined-strip-path-components",
      description:
        "Strip (or keep only, if negative) a given number of path components when emitting check metadata",
      args: {
        name: "number",
      },
      requiresSeparator: true,
    },
    {
      name: "-fsanitize",
      description:
        "Turn on runtime checks for various forms of undefined or suspicious behavior. See user manual for available checks",
      args: {
        name: "check",
      },
      requiresSeparator: true,
    },
    {
      name: "-fsave-optimization-record",
      description: "Generate an optimization record file in a specific format",
      args: {
        name: "format",
        default: "YAML",
        isOptional: true,
      },
      requiresSeparator: true,
    },
    {
      name: "-fseh-exceptions",
      description: "Use SEH style exceptions",
    },
    {
      name: "-fsemantic-interposition",
    },
    {
      name: "-fshort-enums",
      description:
        "Allocate to an enum type only as many bytes as it needs for the declared range of possible values",
    },
    {
      name: "-fshort-wchar",
      description: "Force wchar_t to be a short unsigned int",
    },
    {
      name: "-fshow-column",
    },
    {
      name: "-fshow-overloads",
      description:
        "Which overload candidates to show when overload resolution fails: best|all; defaults to all",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fsigned-char",
      description: "Char is signed",
    },
    {
      name: "-fsigned-zeros",
    },
    {
      name: "-fsized-deallocation",
      description: "Enable C++14 sized global deallocation functions",
    },
    {
      name: "-fsjlj-exceptions",
      description: "Use SjLj style exceptions",
    },
    {
      name: "-fslp-vectorize",
      description:
        "Enable the superword-level parallelism vectorization passes",
    },
    {
      name: "-fsmall-block-descriptors",
      description: "Enable small block descriptors",
    },
    {
      name: "-fspell-checking",
    },
    {
      name: "-fsplit-dwarf-inlining",
      description:
        "Provide minimal debug info in the object/executable to facilitate online symbolication/stack traces in the absence of .dwo/.dwp files when using Split DWARF",
    },
    {
      name: "-fsplit-lto-unit",
      description: "Enables splitting of the LTO unit",
    },
    {
      name: "-fsplit-machine-functions",
      description:
        "Enable late function splitting using profile information (x86 ELF)",
    },
    {
      name: "-fstack-check",
      description: "Enable stack checking",
    },
    {
      name: "-fstack-clash-protection",
      description: "Enable stack clash protection",
    },
    {
      name: "-fstack-protector-all",
      description: "Enable stack protectors for all functions",
    },
    {
      name: "-fstack-protector-strong",
      description:
        "Enable stack protectors for some functions vulnerable to stack smashing. Compared to -fstack-protector, this uses a stronger heuristic that includes functions containing arrays of any size (and any type), as well as any calls to alloca or the taking of an address from a local variable",
    },
    {
      name: "-fstack-protector",
      description:
        "Enable stack protectors for some functions vulnerable to stack smashing. This uses a loose heuristic which considers functions vulnerable if they contain a char (or 8bit integer) array or constant sized calls to alloca , which are of greater size than ssp-buffer-size (default: 8 bytes). All variable sized calls to alloca are considered vulnerable. A function with a stack protector has a guard value added to the stack frame that is checked on function exit. The guard value must be positioned in the stack frame such that a buffer overflow from a vulnerable variable will overwrite the guard value before overwriting the function's return address. The reference stack guard value is stored in a global variable",
    },
    {
      name: "-fstack-size-section",
      description: "Emit section containing metadata on function stack sizes",
    },
    {
      name: "-fstandalone-debug",
      description: "Emit full debug info for all types used by the program",
    },
    {
      name: "-fstrict-enums",
      description:
        "Enable optimizations based on the strict definition of an enum's value range",
    },
    {
      name: "-fstrict-float-cast-overflow",
      description:
        "Assume that overflowing float-to-int casts are undefined (default)",
    },
    {
      name: "-fstrict-return",
    },
    {
      name: "-fstrict-vtable-pointers",
      description:
        "Enable optimizations based on the strict rules for overwriting polymorphic C++ objects",
    },
    {
      name: "-fsycl",
      description: "Enable SYCL kernels compilation for device",
    },
    {
      name: "-fsystem-module",
      description:
        "Build this module as a system module. Only used with -emit-module",
    },
    {
      name: "-ftarget-variant-availability-checks",
      description: "Enable availability checks for the target variant platform",
    },
    {
      name: "-ftest-coverage",
    },
    {
      name: "-fthin-link-bitcode",
      description:
        "Write minimized bitcode to <file> for the ThinLTO thin link only",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fthinlto-index",
      description:
        "Perform ThinLTO importing using provided function summary index",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fthreadsafe-statics",
    },
    {
      name: "-ftime-report",
      description:
        '(For new pass manager) "per-pass": one report for each pass; "per-pass-run": one report for each pass invocation',
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-ftime-trace-granularity",
      description:
        "Minimum time granularity (in microseconds) traced by time profiler",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-ftime-trace",
      description:
        "Turn on time profiler. Generates JSON file based on output filename",
    },
    {
      name: "-ftrap-function",
      description:
        "Issue call to specified function rather than a trap instruction",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-ftrapv-handler",
      description: "Specify the function to be called on overflow",
      args: {
        name: "functionname",
      },
      requiresSeparator: true,
    },
    {
      name: "-ftrapv",
      description: "Trap on integer overflow",
    },
    {
      name: "-ftrigraphs",
      description: "Process trigraph sequences",
    },
    {
      name: "-ftrivial-auto-var-init-stop-after",
      description:
        "Stop initializing trivial automatic stack variables after the specified number of instances",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-ftrivial-auto-var-init",
      description:
        "Initialize trivial automatic stack variables: uninitialized (default) | pattern",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-funique-basic-block-section-names",
      description: "Use unique names for basic block sections (ELF Only)",
    },
    {
      name: "-funique-internal-linkage-names",
      description:
        "Uniqueify Internal Linkage Symbol Names by appending the MD5 hash of the module path",
    },
    {
      name: "-funique-section-names",
    },
    {
      name: "-funroll-loops",
      description: "Turn on loop unroller",
    },
    {
      name: "-fuse-cxa-atexit",
    },
    {
      name: "-fuse-init-array",
    },
    {
      name: "-fuse-line-directives",
      description: "Use #line in preprocessed output",
    },
    {
      name: "-fvalidate-ast-input-files-content",
      description:
        "Compute and store the hash of input files used to build an AST. Files with mismatching mtime's are considered valid if both contents is identical",
    },
    {
      name: "-fveclib",
      description: "Use the given vector functions library",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fvectorize",
      description: "Enable the loop vectorization passes",
    },
    {
      name: "-fverbose-asm",
      description: "Generate verbose assembly output",
    },
    {
      name: "-fvirtual-function-elimination",
      description:
        "Enables dead virtual function elimination optimization. Requires -flto=full",
    },
    {
      name: "-fvisibility-dllexport",
      description:
        "The visibility for dllexport definitions [-fvisibility-from-dllstorageclass]",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fvisibility-externs-dllimport",
      description:
        "The visibility for dllimport external declarations [-fvisibility-from-dllstorageclass]",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fvisibility-externs-nodllstorageclass",
      description:
        "The visibility for external declarations without an explicit DLL dllstorageclass [-fvisibility-from-dllstorageclass]",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fvisibility-from-dllstorageclass",
      description:
        "Set the visibility of symbols in the generated code from their DLL storage class",
    },
    {
      name: "-fvisibility-global-new-delete-hidden",
      description:
        "Give global C++ operator new and delete declarations hidden visibility",
    },
    {
      name: "-fvisibility-inlines-hidden-static-local-var",
      description:
        "When -fvisibility-inlines-hidden is enabled, static variables in inline C++ member functions will also be given hidden visibility by default",
    },
    {
      name: "-fvisibility-inlines-hidden",
      description:
        "Give inline C++ member functions hidden visibility by default",
    },
    {
      name: "-fvisibility-ms-compat",
      description:
        "Give global types 'default' visibility and global functions and variables 'hidden' visibility by default",
    },
    {
      name: "-fvisibility-nodllstorageclass",
      description:
        "The visibility for defintiions without an explicit DLL export class [-fvisibility-from-dllstorageclass]",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fvisibility",
      description:
        "Set the default symbol visibility for all global declarations",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fwasm-exceptions",
      description: "Use WebAssembly style exceptions",
    },
    {
      name: "-fwhole-program-vtables",
      description: "Enables whole-program vtable optimization. Requires -flto",
    },
    {
      name: "-fwrapv",
      description: "Treat signed integer overflow as two's complement",
    },
    {
      name: "-fwritable-strings",
      description: "Store string literals as writable data",
    },
    {
      name: "-fxray-always-emit-customevents",
      description:
        "Always emit __xray_customevent(...) calls even if the containing function is not always instrumented",
    },
    {
      name: "-fxray-always-emit-typedevents",
      description:
        "Always emit __xray_typedevent(...) calls even if the containing function is not always instrumented",
    },
    {
      name: "-fxray-always-instrument",
      description:
        "DEPRECATED: Filename defining the whitelist for imbuing the 'always instrument' XRay attribute",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fxray-attr-list",
      description:
        "Filename defining the list of functions/types for imbuing XRay attributes",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fxray-function-groups",
      description: "Only instrument 1 of N groups",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fxray-function-index",
    },
    {
      name: "-fxray-ignore-loops",
      description:
        "Don't instrument functions with loops unless they also meet the minimum function size",
    },
    {
      name: "-fxray-instruction-threshold",
      description: "Sets the minimum function size to instrument with XRay",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fxray-instrumentation-bundle",
      description:
        "Select which XRay instrumentation points to emit. Options: all, none, function-entry, function-exit, function, custom. Default is 'all'. 'function' includes both 'function-entry' and 'function-exit'",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fxray-instrument",
      description:
        "Generate XRay instrumentation sleds on function entry and exit",
    },
    {
      name: "-fxray-link-deps",
      description: "Tells clang to add the link dependencies for XRay",
    },
    {
      name: "-fxray-modes",
      description:
        "List of modes to link in by default into XRay instrumented binaries",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fxray-never-instrument",
      description:
        "DEPRECATED: Filename defining the whitelist for imbuing the 'never instrument' XRay attribute",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fxray-selected-function-group",
      description:
        "When using -fxray-function-groups, select which group of functions to instrument. Valid range is 0 to fxray-function-groups - 1",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-fzero-initialized-in-bss",
    },
    {
      name: "-fzvector",
      description: "Enable System z vector language extension",
    },
    {
      name: "-F",
      description: "Add directory to framework include search path",
      args: {
        name: "value",
      },
    },
    {
      name: "--gcc-toolchain",
      description: "Use the gcc toolchain at the given directory",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-gcodeview-ghash",
      description: "Emit type record hashes in a .debug$H section",
    },
    {
      name: "-gcodeview",
      description: "Generate CodeView debug information",
    },
    {
      name: "-gcolumn-info",
    },
    {
      name: "-gdwarf-2",
      description:
        "Generate source-level debug information with dwarf version 2",
    },
    {
      name: "-gdwarf-3",
      description:
        "Generate source-level debug information with dwarf version 3",
    },
    {
      name: "-gdwarf-4",
      description:
        "Generate source-level debug information with dwarf version 4",
    },
    {
      name: "-gdwarf-5",
      description:
        "Generate source-level debug information with dwarf version 5",
    },
    {
      name: "-gdwarf",
      description:
        "Generate source-level debug information with the default dwarf version",
    },
    {
      name: "-gembed-source",
      description: "Embed source text in DWARF debug sections",
    },
    {
      name: "-ginline-line-tables",
    },
    {
      name: "-gline-directives-only",
      description: "Emit debug line info directives only",
    },
    {
      name: "-gline-tables-only",
      description: "Emit debug line number tables only",
    },
    {
      name: "-gmodules",
      description:
        "Generate debug info with external references to clang modules or precompiled headers",
    },
    {
      name: "-gno-codeview-ghash",
    },
    {
      name: "-gno-column-info",
    },
    {
      name: "-gno-embed-source",
      description:
        "Restore the default behavior of not embedding source text in DWARF debug sections",
    },
    {
      name: "-gno-inline-line-tables",
      description: "Don't emit inline line tables",
    },
    {
      name: "--gpu-instrument-lib",
      description:
        "Instrument device library for HIP, which is a LLVM bitcode containing __cyg_profile_func_enter and __cyg_profile_func_exit",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "--gpu-max-threads-per-block",
      description:
        "Default max threads per block for kernel launch bounds for HIP",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-gsplit-dwarf",
      description: "Set DWARF fission mode to either 'split' or 'single'",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-gz",
      description: "DWARF debug sections compression type",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-G",
      description:
        "Put objects of at most <size> bytes into small data section (MIPS / Hexagon)",
      args: {
        name: "size",
      },
    },
    {
      name: "-g",
      description: "Generate source-level debug information",
    },
    {
      name: "--help-hidden",
      description: "Display help for hidden options",
    },
    {
      name: "-help",
      description: "Display available options",
    },
    {
      name: "--hip-device-lib",
      description: "HIP device library",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "--hip-link",
      description: "Link clang-offload-bundler bundles for HIP",
    },
    {
      name: "--hip-version",
      description: "HIP version in the format of major.minor.patch",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-H",
      description: "Show header includes and nesting depth",
    },
    {
      name: "-I-",
      description:
        "Restrict all prior -I flags to double-quoted inclusion and remove current directory from include path",
    },
    {
      name: "-iapinotes-modules",
      description:
        "Add directory to the API notes search path referenced by module name",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: "-ibuiltininc",
      description:
        "Enable builtin #include directories even when -nostdinc is used before or after -ibuiltininc. Using -nobuiltininc after the option disables it",
    },
    {
      name: "-idirafter",
      description: "Add directory to AFTER include search path",
      args: {
        name: "value",
      },
    },
    {
      name: "-iframeworkwithsysroot",
      description:
        "Add directory to SYSTEM framework search path, absolute paths are relative to -isysroot",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: "-iframework",
      description: "Add directory to SYSTEM framework search path",
      args: {
        name: "value",
      },
    },
    {
      name: "-imacros",
      description: "Include macros from file before parsing",
      args: {
        name: "file",
      },
    },
    {
      name: "-include-pch",
      description: "Include precompiled header file",
      args: {
        name: "file",
      },
    },
    {
      name: "-include",
      description: "Include file before parsing",
      args: {
        name: "file",
      },
    },
    {
      name: "-index-header-map",
      description:
        "Make the next included directory (-I or -F) an indexer header map",
    },
    {
      name: "-index-ignore-macros",
      description: "Ignore macros during indexing",
    },
    {
      name: "-index-ignore-system-symbols",
      description: "Ignore symbols from system headers",
    },
    {
      name: "-index-record-codegen-name",
      description: "Record the codegen name for symbols",
    },
    {
      name: "-index-store-path",
      description: "Enable indexing with the specified data store path",
      args: {
        name: "value",
      },
    },
    {
      name: "-index-unit-output-path",
      description:
        "Use <path> as the output path for this compilation unit in the index unit file",
      args: {
        name: "path",
      },
    },
    {
      name: "-iprefix",
      description: "Set the -iwithprefix/-iwithprefixbefore prefix",
      args: {
        name: "dir",
        template: "folders",
      },
    },
    {
      name: "-iquote",
      description: "Add directory to QUOTE include search path",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: "-isysroot",
      description: "Set the system root directory (usually /)",
      args: {
        name: "dir",
        template: "folders",
      },
    },
    {
      name: "-isystem-after",
      description: "Add directory to end of the SYSTEM include search path",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: "-isystem",
      description: "Add directory to SYSTEM include search path",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: "-ivfsoverlay",
      description:
        "Overlay the virtual filesystem described by file over the real file system",
      args: {
        name: "value",
      },
    },
    {
      name: "-iwithprefixbefore",
      description: "Set directory to include search path with prefix",
      args: {
        name: "dir",
        template: "folders",
      },
    },
    {
      name: "-iwithprefix",
      description: "Set directory to SYSTEM include search path with prefix",
      args: {
        name: "dir",
        template: "folders",
      },
    },
    {
      name: "-iwithsysroot",
      description:
        "Add directory to SYSTEM include search path, absolute paths are relative to -isysroot",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: "-I",
      description:
        "Add directory to include search path. If there are multiple -I options, these directories are searched in the order they are given before the standard system directories are searched. If the same directory is in the SYSTEM include search paths, for example if also specified with -isystem, the -I option will be ignored",
      args: {
        name: "dir",
        template: "folders",
      },
    },
    {
      name: "--libomptarget-nvptx-path",
      description: "Path to libomptarget-nvptx libraries",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-L",
      description: "Add directory to library search path",
      args: {
        name: "dir",
        template: "folders",
      },
    },
    {
      name: "-mabi",
      args: {
        suggestions: [
          {
            name: "vec-default",
            description:
              "Enable the default Altivec ABI on AIX (AIX only). Uses only volatile vector registers",
          },
          {
            name: "vec-extabi",
            description:
              "Enable the extended Altivec ABI on AIX (AIX only). Uses volatile and nonvolatile vector registers",
          },
        ],
      },
      requiresSeparator: true,
    },
    {
      name: "-mabicalls",
      description: "Enable SVR4-style position-independent code (Mips only)",
    },
    {
      name: "-maix-struct-return",
      description: "Return all structs in memory (PPC32 only)",
    },
    {
      name: "-malign-branch-boundary",
      description: "Specify the boundary's size to align branches",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-malign-branch",
      description: "Specify types of branches to align",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-malign-double",
      description: "Align doubles to two words in structs (x86 only)",
    },
    {
      name: "-mbackchain",
      description: "Link stack frames through backchain on System Z",
    },
    {
      name: "-mbranch-protection",
      description: "Enforce targets of indirect branches and function returns",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-mbranches-within-32B-boundaries",
      description:
        "Align selected branches (fused, jcc, jmp) within 32-byte boundary",
    },
    {
      name: "-mcmodel",
      args: {
        suggestions: ["small", "medium", "medany", "medlow"],
      },
      requiresSeparator: true,
    },
    {
      name: "-mcmse",
      description: "Allow use of CMSE (Armv8-M Security Extensions)",
    },
    {
      name: "-mcode-object-v3",
      description:
        "Legacy option to specify code object ABI V2 (-mnocode-object-v3) or V3 (-mcode-object-v3) (AMDGPU only)",
    },
    {
      name: "-mcode-object-version",
      description:
        "Specify code object ABI version. Defaults to 3. (AMDGPU only)",
      args: {
        name: "version",
      },
      requiresSeparator: true,
    },
    {
      name: "-mcrc",
      description: "Allow use of CRC instructions (ARM/Mips only)",
    },
    {
      name: "-mcumode",
      description:
        "Specify CU (-mcumode) or WGP (-mno-cumode) wavefront execution mode (AMDGPU only)",
    },
    {
      name: "-mdouble",
      description: "Force double to be 32 bits or 64 bits",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-MD",
      description: "Write a depfile containing user and system headers",
    },
    {
      name: "-meabi",
      description:
        "Set EABI type, e.g. 4, 5 or gnu (default depends on triple)",
      args: {
        name: "value",
      },
    },
    {
      name: "-membedded-data",
      description:
        "Place constants in the .rodata section instead of the .sdata section even if they meet the -G <size> threshold (MIPS)",
    },
    {
      name: "-menable-experimental-extensions",
      description: "Enable use of experimental RISC-V extensions",
    },
    {
      name: "-menable-unsafe-fp-math",
      description:
        "Allow unsafe floating-point math optimizations which may decrease precision",
    },
    {
      name: "-mexec-model",
      description: "Execution model (WebAssembly only)",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-mexecute-only",
      description:
        "Disallow generation of data access to code sections (ARM only)",
    },
    {
      name: "-mextern-sdata",
      description:
        "Assume that externally defined data is in the small data if it meets the -G <size> threshold (MIPS)",
    },
    {
      name: "-mfentry",
      description:
        "Insert calls to fentry at function entry (x86/SystemZ only)",
    },
    {
      name: "-mfix-cortex-a53-835769",
      description: "Workaround Cortex-A53 erratum 835769 (AArch64 only)",
    },
    {
      name: "-mfp32",
      description: "Use 32-bit floating point registers (MIPS only)",
    },
    {
      name: "-mfp64",
      description: "Use 64-bit floating point registers (MIPS only)",
    },
    {
      name: "-MF",
      description: "Write depfile output from -MMD, -MD, -MM, or -M to <file>",
      args: {
        name: "file",
      },
    },
    {
      name: "-mgeneral-regs-only",
      description:
        "Generate code which only uses the general purpose registers (AArch64 only)",
    },
    {
      name: "-mglobal-merge",
      description: "Enable merging of globals",
    },
    {
      name: "-mgpopt",
      description:
        "Use GP relative accesses for symbols known to be in a small data section (MIPS)",
    },
    {
      name: "-MG",
      description: "Add missing headers to depfile",
    },
    {
      name: "-mharden-sls",
      description: "Select straight-line speculation hardening scope",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-mhvx-length",
      description: "Set Hexagon Vector Length",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-mhvx",
      description: "Enable Hexagon Vector eXtensions",
      args: {
        name: "value",
        isOptional: true,
      },
      requiresSeparator: true,
    },
    {
      name: "-miamcu",
      description: "Use Intel MCU ABI",
    },
    {
      name: "-mignore-xcoff-visibility",
      description:
        "Not emit the visibility attribute for asm in AIX OS or give all symbols 'unspecified' visibility in XCOFF object file",
    },
    {
      name: "--migrate",
      description: "Run the migrator",
    },
    {
      name: "-mincremental-linker-compatible",
      description:
        "(integrated-as) Emit an object file which can be used with an incremental linker",
    },
    {
      name: "-mindirect-jump",
      description: "Change indirect jump instructions to inhibit speculation",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-mios-version-min",
      description: "Set iOS deployment target",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-MJ",
      description: "Write a compilation database entry per input",
      args: {
        name: "value",
      },
    },
    {
      name: "-mllvm",
      description:
        "Additional arguments to forward to LLVM's option processing",
      args: {
        name: "value",
      },
    },
    {
      name: "-mlocal-sdata",
      description: "Extend the -G behaviour to object local data (MIPS)",
    },
    {
      name: "-mlong-calls",
      description:
        "Generate branches with extended addressability, usually via indirect jumps",
    },
    {
      name: "-mlong-double-128",
      description: "Force long double to be 128 bits",
    },
    {
      name: "-mlong-double-64",
      description: "Force long double to be 64 bits",
    },
    {
      name: "-mlong-double-80",
      description:
        "Force long double to be 80 bits, padded to 128 bits for storage",
    },
    {
      name: "-mlvi-cfi",
      description:
        "Enable only control-flow mitigations for Load Value Injection (LVI)",
    },
    {
      name: "-mlvi-hardening",
      description: "Enable all mitigations for Load Value Injection (LVI)",
    },
    {
      name: "-mmacosx-version-min",
      description: "Set Mac OS X deployment target",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-mmadd4",
      description:
        "Enable the generation of 4-operand madd.s, madd.d and related instructions",
    },
    {
      name: "-mmark-bti-property",
      description:
        "Add .note.gnu.property with BTI to assembly files (AArch64 only)",
    },
    {
      name: "-MMD",
      description: "Write a depfile containing user headers",
    },
    {
      name: "-mmemops",
      description: "Enable generation of memop instructions",
    },
    {
      name: "-mms-bitfields",
      description:
        "Set the default structure layout to be compatible with the Microsoft compiler standard",
    },
    {
      name: "-mmsa",
      description: "Enable MSA ASE (MIPS only)",
    },
    {
      name: "-mmt",
      description: "Enable MT ASE (MIPS only)",
    },
    {
      name: "-MM",
      description:
        "Like -MMD, but also implies -E and writes to stdout by default",
    },
    {
      name: "-mno-abicalls",
      description: "Disable SVR4-style position-independent code (Mips only)",
    },
    {
      name: "-mno-backchain",
    },
    {
      name: "-mno-crc",
      description: "Disallow use of CRC instructions (Mips only)",
    },
    {
      name: "-mno-embedded-data",
      description:
        "Do not place constants in the .rodata section instead of the .sdata if they meet the -G <size> threshold (MIPS)",
    },
    {
      name: "-mno-execute-only",
      description:
        "Allow generation of data access to code sections (ARM only)",
    },
    {
      name: "-mno-extern-sdata",
      description:
        "Do not assume that externally defined data is in the small data if it meets the -G <size> threshold (MIPS)",
    },
    {
      name: "-mno-fix-cortex-a53-835769",
      description: "Don't workaround Cortex-A53 erratum 835769 (AArch64 only)",
    },
    {
      name: "-mno-global-merge",
      description: "Disable merging of globals",
    },
    {
      name: "-mno-gpopt",
      description:
        "Do not use GP relative accesses for symbols known to be in a small data section (MIPS)",
    },
    {
      name: "-mno-hvx",
      description: "Disable Hexagon Vector eXtensions",
    },
    {
      name: "-mno-implicit-float",
      description: "Don't generate implicit floating point instructions",
    },
    {
      name: "-mno-incremental-linker-compatible",
      description:
        "(integrated-as) Emit an object file which cannot be used with an incremental linker",
    },
    {
      name: "-mno-local-sdata",
      description: "Do not extend the -G behaviour to object local data (MIPS)",
    },
    {
      name: "-mno-long-calls",
      description: "Restore the default behaviour of not generating long calls",
    },
    {
      name: "-mno-lvi-cfi",
      description:
        "Disable control-flow mitigations for Load Value Injection (LVI)",
    },
    {
      name: "-mno-lvi-hardening",
      description: "Disable mitigations for Load Value Injection (LVI)",
    },
    {
      name: "-mno-madd4",
      description:
        "Disable the generation of 4-operand madd.s, madd.d and related instructions",
    },
    {
      name: "-mno-memops",
      description: "Disable generation of memop instructions",
    },
    {
      name: "-mno-movt",
      description: "Disallow use of movt/movw pairs (ARM only)",
    },
    {
      name: "-mno-ms-bitfields",
      description:
        "Do not set the default structure layout to be compatible with the Microsoft compiler standard",
    },
    {
      name: "-mno-msa",
      description: "Disable MSA ASE (MIPS only)",
    },
    {
      name: "-mno-mt",
      description: "Disable MT ASE (MIPS only)",
    },
    {
      name: "-mno-neg-immediates",
      description:
        "Disallow converting instructions with negative immediates to their negation or inversion",
    },
    {
      name: "-mno-nvj",
      description: "Disable generation of new-value jumps",
    },
    {
      name: "-mno-nvs",
      description: "Disable generation of new-value stores",
    },
    {
      name: "-mno-outline-atomics",
      description:
        "Don't generate local calls to out-of-line atomic operations",
    },
    {
      name: "-mno-outline",
      description: "Disable function outlining (AArch64 only)",
    },
    {
      name: "-mno-packets",
      description: "Disable generation of instruction packets",
    },
    {
      name: "-mno-pie-copy-relocations",
    },
    {
      name: "-mno-relax",
      description: "Disable linker relaxation",
    },
    {
      name: "-mno-restrict-it",
      description:
        "Allow generation of deprecated IT blocks for ARMv8. It is off by default for ARMv8 Thumb mode",
    },
    {
      name: "-mno-save-restore",
      description: "Disable using library calls for save and restore",
    },
    {
      name: "-mno-seses",
      description:
        "Disable speculative execution side effect suppression (SESES)",
    },
    {
      name: "-mno-speculative-load-hardening",
    },
    {
      name: "-mno-stack-arg-probe",
      description: "Disable stack probes which are enabled by default",
    },
    {
      name: "-mno-tls-direct-seg-refs",
      description: "Disable direct TLS access through segment registers",
    },
    {
      name: "-mno-unaligned-access",
      description:
        "Force all memory accesses to be aligned (AArch32/AArch64 only)",
    },
    {
      name: "-mno-wavefrontsize64",
      description: "Specify wavefront size 32 mode (AMDGPU only)",
    },
    {
      name: "-mnocrc",
      description: "Disallow use of CRC instructions (ARM only)",
    },
    {
      name: "-mnop-mcount",
      description:
        "Generate mcount/__fentry__ calls as nops. To activate they need to be patched in",
    },
    {
      name: "-mnvj",
      description: "Enable generation of new-value jumps",
    },
    {
      name: "-mnvs",
      description: "Enable generation of new-value stores",
    },
    {
      name: "-module-dependency-dir",
      description: "Directory to dump module dependencies to",
      args: {
        name: "value",
      },
    },
    {
      name: "-module-file-info",
      description: "Provide information about a particular module file",
    },
    {
      name: "-momit-leaf-frame-pointer",
      description: "Omit frame pointer setup for leaf functions",
    },
    {
      name: "-moutline-atomics",
      description: "Generate local calls to out-of-line atomic operations",
    },
    {
      name: "-moutline",
      description: "Enable function outlining (AArch64 only)",
    },
    {
      name: "-mpacked-stack",
      description: "Use packed stack layout (SystemZ only)",
    },
    {
      name: "-mpackets",
      description: "Enable generation of instruction packets",
    },
    {
      name: "-mpad-max-prefix-size",
      description: "Specify maximum number of prefixes to use for padding",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-mpie-copy-relocations",
      description: "Use copy relocations support for PIE builds",
    },
    {
      name: "-mprefer-vector-width",
      description:
        "Specifies preferred vector width for auto-vectorization. Defaults to 'none' which allows target specific decisions",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-MP",
      description:
        "Create phony target for each dependency (other than main file)",
    },
    {
      name: "-mqdsp6-compat",
      description: "Enable hexagon-qdsp6 backward compatibility",
    },
    {
      name: "-MQ",
      description: "Specify name of main file output to quote in depfile",
      args: {
        name: "value",
      },
    },
    {
      name: "-mrecord-mcount",
      description:
        "Generate a __mcount_loc section entry for each __fentry__ call",
    },
    {
      name: "-mrelax-all",
      description: "(integrated-as) Relax all machine instructions",
    },
    {
      name: "-mrelax",
      description: "Enable linker relaxation",
    },
    {
      name: "-mrestrict-it",
      description:
        "Disallow generation of deprecated IT blocks for ARMv8. It is on by default for ARMv8 Thumb mode",
    },
    {
      name: "-mrtd",
      description: "Make StdCall calling convention the default",
    },
    {
      name: "-msave-restore",
      description: "Enable using library calls for save and restore",
    },
    {
      name: "-mseses",
      description:
        "Enable speculative execution side effect suppression (SESES). Includes LVI control flow integrity mitigations",
    },
    {
      name: "-msign-return-address",
      description: "Select return address signing scope",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-msmall-data-limit",
      description:
        "Put global and static data smaller than the limit into a special section",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-msoft-float",
      description: "Use software floating point",
    },
    {
      name: "-mspeculative-load-hardening",
    },
    {
      name: "-mstack-alignment",
      description: "Set the stack alignment",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-mstack-arg-probe",
      description: "Enable stack probes",
    },
    {
      name: "-mstack-probe-size",
      description: "Set the stack probe size",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-mstack-protector-guard-offset",
      description:
        "Use the given offset for addressing the stack-protector guard",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-mstack-protector-guard-reg",
      description: "Use the given reg for addressing the stack-protector guard",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-mstack-protector-guard",
      description:
        "Use the given guard (global, tls) for addressing the stack-protector guard",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-mstackrealign",
      description: "Force realign the stack at entry to every function",
    },
    {
      name: "-msve-vector-bits",
      description:
        'Specify the size in bits of an SVE vector register. Defaults to the vector length agnostic value of "scalable". (AArch64 only)',
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-msvr4-struct-return",
      description: "Return small structs in registers (PPC32 only)",
    },
    {
      name: "-mthread-model",
      description:
        "The thread model to use, e.g. posix, single (posix by default)",
      args: {
        name: "value",
      },
    },
    {
      name: "-mtls-direct-seg-refs",
      description:
        "Enable direct TLS access through segment registers (default)",
    },
    {
      name: "-mtls-size",
      description:
        "Specify bit size of immediate TLS offsets (AArch64 ELF only): 12 (for 4KB) | 24 (for 16MB, default) | 32 (for 4GB) | 48 (for 256TB, needs -mcmodel=large)",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-mtp",
      description: "Thread pointer access method (AArch32/AArch64 only)",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-mtune",
      description:
        "Only supported on X86 and RISC-V. Otherwise accepted for compatibility with GCC",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-MT",
      description: "Specify name of main file output in depfile",
      args: {
        name: "value",
      },
    },
    {
      name: "-munaligned-access",
      description:
        "Allow memory accesses to be unaligned (AArch32/AArch64 only)",
    },
    {
      name: "-munsafe-fp-atomics",
      description:
        "Enable unsafe floating point atomic instructions (AMDGPU only)",
    },
    {
      name: "-MV",
      description: "Use NMake/Jom format for the depfile",
    },
    {
      name: "-mwavefrontsize64",
      description: "Specify wavefront size 64 mode (AMDGPU only)",
    },
    {
      name: "-M",
      description:
        "Like -MD, but also implies -E and writes to stdout by default",
    },
    {
      name: "--no-cuda-include-ptx",
      description:
        "Do not include PTX for the following GPU architecture (e.g. sm_35) or 'all'. May be specified more than once",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "--no-cuda-version-check",
      description:
        "Don't error out if the detected version of the CUDA install is too low for the requested CUDA gpu architecture",
    },
    {
      name: "--no-offload-arch",
      description:
        "Remove CUDA/HIP offloading device architecture (e.g. sm_35, gfx906) from the list of devices to compile for. 'all' resets the list to its default value",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-no-pthread",
    },
    {
      name: "--no-system-header-prefix",
      description:
        "Treat all #include paths starting with <prefix> as not including a system header",
      args: {
        name: "prefix",
      },
      requiresSeparator: true,
    },
    {
      name: "-nobuiltininc",
      description: "Disable builtin #include directories",
    },
    {
      name: "-nogpuinc",
      description:
        "Do not add include paths for CUDA/HIP and do not include the default CUDA/HIP wrapper headers",
    },
    {
      name: "-nogpulib",
      description: "Do not link device library for CUDA/HIP device compilation",
    },
    {
      name: "-nostdinc++",
      description:
        "Disable standard #include directories for the C++ standard library",
    },
    {
      name: "-ObjC++",
      description: "Treat source input files as Objective-C++ inputs",
    },
    {
      name: "-objcmt-atomic-property",
      description: "Make migration to 'atomic' properties",
    },
    {
      name: "-objcmt-migrate-all",
      description: "Enable migration to modern ObjC",
    },
    {
      name: "-objcmt-migrate-annotation",
      description: "Enable migration to property and method annotations",
    },
    {
      name: "-objcmt-migrate-designated-init",
      description:
        "Enable migration to infer NS_DESIGNATED_INITIALIZER for initializer methods",
    },
    {
      name: "-objcmt-migrate-instancetype",
      description:
        "Enable migration to infer instancetype for method result type",
    },
    {
      name: "-objcmt-migrate-literals",
      description: "Enable migration to modern ObjC literals",
    },
    {
      name: "-objcmt-migrate-ns-macros",
      description: "Enable migration to NS_ENUM/NS_OPTIONS macros",
    },
    {
      name: "-objcmt-migrate-property-dot-syntax",
      description:
        "Enable migration of setter/getter messages to property-dot syntax",
    },
    {
      name: "-objcmt-migrate-property",
      description: "Enable migration to modern ObjC property",
    },
    {
      name: "-objcmt-migrate-protocol-conformance",
      description: "Enable migration to add protocol conformance on classes",
    },
    {
      name: "-objcmt-migrate-readonly-property",
      description: "Enable migration to modern ObjC readonly property",
    },
    {
      name: "-objcmt-migrate-readwrite-property",
      description: "Enable migration to modern ObjC readwrite property",
    },
    {
      name: "-objcmt-migrate-subscripting",
      description: "Enable migration to modern ObjC subscripting",
    },
    {
      name: "-objcmt-ns-nonatomic-iosonly",
      description:
        "Enable migration to use NS_NONATOMIC_IOSONLY macro for setting property's 'atomic' attribute",
    },
    {
      name: "-objcmt-returns-innerpointer-property",
      description:
        "Enable migration to annotate property with NS_RETURNS_INNER_POINTER",
    },
    {
      name: "-objcmt-whitelist-dir-path",
      description:
        "Only modify files with a filename contained in the provided directory path",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-ObjC",
      description: "Treat source input files as Objective-C inputs",
    },
    {
      name: "--offload-arch",
      description:
        "CUDA offloading device architecture (e.g. sm_35), or HIP offloading target ID in the form of a device architecture followed by target ID features delimited by a colon. Each target ID feature is a pre-defined string followed by a plus or minus sign (e.g. gfx908:xnack+:sramecc-). May be specified more than once",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-o",
      description: "Write output to <file>",
      args: {
        name: "file",
      },
    },
    {
      name: "-pg",
      description: "Enable mcount instrumentation",
    },
    {
      name: "-pipe",
      description: "Use pipes between commands, when possible",
    },
    {
      name: "--precompile",
      description: "Only precompile the input",
    },
    {
      name: "-print-effective-triple",
      description: "Print the effective target triple",
    },
    {
      name: "-print-file-name",
      description: "Print the full library path of <file>",
      args: {
        name: "file",
      },
      requiresSeparator: true,
    },
    {
      name: "-print-ivar-layout",
      description: "Enable Objective-C Ivar layout bitmap print trace",
    },
    {
      name: "-print-libgcc-file-name",
      description:
        'Print the library path for the currently used compiler runtime library ("libgcc.a" or "libclang_rt.builtins.*.a")',
    },
    {
      name: "-print-prog-name",
      description: "Print the full program path of <name>",
      args: {
        name: "name",
      },
      requiresSeparator: true,
    },
    {
      name: "-print-resource-dir",
      description: "Print the resource directory pathname",
    },
    {
      name: "-print-search-dirs",
      description: "Print the paths used for finding libraries and programs",
    },
    {
      name: "-print-supported-cpus",
      description:
        "Print supported cpu models for the given target (if target is not specified, it will print the supported cpus for the default target)",
    },
    {
      name: "-print-target-triple",
      description: "Print the normalized target triple",
    },
    {
      name: "-print-targets",
      description: "Print the registered targets",
    },
    {
      name: "-pthread",
      description: "Support POSIX threads in generated code",
    },
    {
      name: "--ptxas-path",
      description: "Path to ptxas (used for compiling CUDA code)",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-P",
      description: "Disable linemarker output in -E mode",
    },
    {
      name: "-Qn",
      description: "Do not emit metadata containing compiler name and version",
    },
    {
      name: "-Qunused-arguments",
      description: "Don't emit warning for unused driver arguments",
    },
    {
      name: "-Qy",
      description: "Emit metadata containing compiler name and version",
    },
    {
      name: "-relocatable-pch",
      description: "Whether to build a relocatable precompiled header",
    },
    {
      name: "-rewrite-legacy-objc",
      description: "Rewrite Legacy Objective-C source to C++",
    },
    {
      name: "-rewrite-objc",
      description: "Rewrite Objective-C source to C++",
    },
    {
      name: "--rocm-device-lib-path",
      description: "ROCm device library path. Alternative to rocm-path",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "--rocm-path",
      description:
        "ROCm installation path, used for finding and automatically linking required bitcode libraries",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-Rpass-analysis",
      description:
        "Report transformation analysis from optimization passes whose name matches the given POSIX regular expression",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-Rpass-missed",
      description:
        "Report missed transformations by optimization passes whose name matches the given POSIX regular expression",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-Rpass",
      description:
        "Report transformations performed by optimization passes whose name matches the given POSIX regular expression",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-rtlib",
      description: "Compiler runtime library to use",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-Rremark",
      description: "Enable the specified remark",
      args: {
        name: "",
      },
    },
    {
      name: "-save-stats",
      description: "Save llvm statistics",
      args: {
        name: "value",
        isOptional: true,
      },
      requiresSeparator: true,
    },
    {
      name: "-save-temps",
      description: "Save intermediate compilation results",
      args: {
        name: "value",
        isOptional: true,
      },
      requiresSeparator: true,
    },
    {
      name: "-serialize-diagnostics",
      description: "Serialize compiler diagnostics to a file",
      args: {
        name: "value",
      },
    },
    {
      name: "-shared-libsan",
      description: "Dynamically link the sanitizer runtime",
    },
    {
      name: "-static-libsan",
      description: "Statically link the sanitizer runtime",
    },
    {
      name: "-static-openmp",
      description: "Use the static host OpenMP runtime while linking",
    },
    {
      name: "-stdlib++-isystem",
      description: "Use directory as the C++ standard library include path",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: "-stdlib",
      description: "C++ standard library to use",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-sycl-std",
      description: "SYCL language standard to compile for",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "--system-header-prefix",
      description:
        "Treat all #include paths starting with <prefix> as including a system header",
      args: {
        name: "prefix",
      },
      requiresSeparator: true,
    },
    {
      name: "-S",
      description: "Only run preprocess and compilation steps",
    },
    {
      name: "-target-variant",
      description:
        "Generate code that may run on a particular variant of the deployment target",
      args: {
        name: "value",
      },
    },
    {
      name: "--target",
      description: "Generate code for the given target",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-Tbss",
      description: "Set starting address of BSS to <addr>",
      args: {
        name: "addr",
      },
    },
    {
      name: "-Tdata",
      description: "Set starting address of DATA to <addr>",
      args: {
        name: "addr",
      },
    },
    {
      name: "-time",
      description: "Time individual commands",
    },
    {
      name: "-traditional-cpp",
      description: "Enable some traditional CPP emulation",
    },
    {
      name: "-trigraphs",
      description: "Process trigraph sequences",
    },
    {
      name: "-Ttext",
      description: "Set starting address of TEXT to <addr>",
      args: {
        name: "addr",
      },
    },
    {
      name: "-T",
      description: "Specify <script> as linker script",
      args: {
        name: "script",
      },
    },
    {
      name: "-undef",
      description: "Undef all system defines",
    },
    {
      name: "-unwindlib",
      description: "Unwind library to use",
      args: {
        name: "value",
      },
      requiresSeparator: true,
    },
    {
      name: "-U",
      description: "Undefine macro <macro>",
      args: {
        name: "macro",
      },
    },
    {
      name: "--verify-debug-info",
      description: "Verify the binary representation of debug output",
    },
    {
      name: "-verify-pch",
      description:
        "Load and verify that a pre-compiled header file is not stale",
    },
    {
      name: "--version",
      description: "Print version information",
    },
    {
      name: "-v",
      description: "Show commands to run and use verbose output",
    },
    {
      name: "-Wa",
      description:
        "Pass the comma separated arguments in <arg> to the assembler",
      args: {
        name: "arg",
      },
    },
    {
      name: "-Wdeprecated",
      description:
        "Enable warnings for deprecated constructs and define __DEPRECATED",
    },
    {
      name: "-Wl",
      description: "Pass the comma separated arguments in <arg> to the linker",
      args: {
        name: "arg",
      },
    },
    {
      name: "-working-directory",
      description: "Resolve file paths relative to the specified directory",
      args: {
        name: "value",
      },
    },
    {
      name: "-Wp",
      description:
        "Pass the comma separated arguments in <arg> to the preprocessor",
      args: {
        name: "arg",
      },
    },
    {
      name: "-Wwarning",
      description: "Enable the specified warning",
      args: {
        name: "",
      },
    },
    {
      name: "-w",
      description: "Suppress all warnings",
    },
    {
      name: "-Xanalyzer",
      description: "Pass <arg> to the static analyzer",
      args: {
        name: "arg",
      },
    },
    {
      name: "-Xarch_device",
      description: "Pass <arg> to the CUDA/HIP device compilation",
      args: {
        name: "arg",
      },
    },
    {
      name: "-Xarch_host",
      description: "Pass <arg> to the CUDA/HIP host compilation",
      args: {
        name: "arg",
      },
    },
    {
      name: "-Xassembler",
      description: "Pass <arg> to the assembler",
      args: {
        name: "arg",
      },
    },
    {
      name: "-Xclang",
      description: "Pass <arg> to the clang compiler",
      args: {
        name: "arg",
      },
    },
    {
      name: "-Xcuda-fatbinary",
      description: "Pass <arg> to fatbinary invocation",
      args: {
        name: "arg",
      },
    },
    {
      name: "-Xcuda-ptxas",
      description: "Pass <arg> to the ptxas assembler",
      args: {
        name: "arg",
      },
    },
    {
      name: "-Xlinker",
      description: "Pass <arg> to the linker",
      args: {
        name: "arg",
      },
    },
    {
      name: "-Xopenmp-target",
      description:
        "Pass <arg> to the target offloading toolchain identified by <triple>",
      args: [
        {
          name: "triple",
          isOptional: true,
        },
        {
          name: "arg",
        },
      ],
    },
    {
      name: "-Xpreprocessor",
      description: "Pass <arg> to the preprocessor",
      args: {
        name: "arg",
      },
    },
    {
      name: "-x",
      description: "Treat subsequent input files as having type <language>",
      args: {
        name: "language",
      },
    },
    {
      name: "-z",
      description: "Pass -z <arg> to the linker",
      args: {
        name: "arg",
      },
    },
  ],
};

const completionSpec: Fig.Spec = {
  ...clangBase,
  options: [...clangBase.options, stdOption],
};
export default completionSpec;
