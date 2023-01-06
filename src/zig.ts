const colorOption: Fig.Option = {
  name: "--color",
  description: "Enable or disable colored message",
  args: {
    suggestions: ["auto", "on", "off"],
  },
};
const cacheDirOption: Fig.Option = {
  name: "--cache-dir",
  description: "Override path to local Zig cache directory",
  args: {
    template: "folders",
  },
  priority: 20,
};
const globalCacheDirOption: Fig.Option = {
  name: "--global-cache-dir",
  description: "Override path to global Zig cache directory",
  args: {
    template: "folders",
  },
  priority: 20,
};
const stage1Option: Fig.Option = {
  name: "-fstage1",
  description: "Force using bootstrap compiler as the codegen backend",
  exclusiveOn: ["-fno-stage1"],
  priority: 20,
};
const noStage1Option: Fig.Option = {
  name: "-fno-stage1",
  description: "Prevent using bootstrap compiler as the codegen backend",
  exclusiveOn: ["-fstage1"],
  priority: 20,
};
const zigLibDirOption: Fig.Option = {
  name: "--zig-lib-dir",
  description: "Override path to Zig lib directory",
  args: {
    template: "folders",
  },
  priority: 20,
};
const referenceTraceOption: Fig.Option = {
  name: "-freference-trace",
  description:
    "How many lines of reference trace should be shown per compile error",
  insertValue: "-freference-trace={cursor}",
  exclusiveOn: ["-fno-reference-trace"],
  priority: 20,
};
const noReferenceTraceOption: Fig.Option = {
  name: "-fno-reference-trace",
  description: "Disable reference trace",
  exclusiveOn: ["-freference-trace"],
  priority: 20,
};
const helpOption: Fig.Option = {
  name: ["-h", "--help"],
  description: "Print help and exit",
};
const versionOption: Fig.Option = {
  name: ["-v", "--version"],
  description: "Display the version of this program",
};

const buildOptions: Fig.Option[] = [
  //General Options:
  helpOption,
  {
    name: "--watch",
    description: "Enable compiler REPL",
  },
  colorOption,
  {
    name: "-femit-bin",
    description: "(default) Output machine code",
    insertValue: "-femit-bin={cursor}",
    exclusiveOn: ["-fno-emit-bin"],
  },
  {
    name: "-fno-emit-bin",
    description: "Do not output machine code",
    exclusiveOn: ["-femit-bin"],
  },
  {
    name: "-femit-asm",
    description: "Output .s (assembly code)",
    insertValue: "-femit-asm={cursor}",
    exclusiveOn: ["-fno-emit-asm"],
  },
  {
    name: "-fno-emit-asm",
    description: "(default) Do not output .s (assembly code)",
    exclusiveOn: ["-femit-asm"],
  },
  {
    name: "-femit-llvm-ir",
    description: "Produce a .ll file with LLVM IR (requires LLVM extensions)",
    insertValue: "-femit-llvm-ir={cursor}",
    exclusiveOn: ["-fno-emit-llvm-ir"],
  },
  {
    name: "-fno-emit-llvm-ir",
    description: "(default) Do not produce a .ll file with LLVM IR",
    exclusiveOn: ["-femit-llvm-ir"],
  },
  {
    name: "-femit-llvm-bc",
    description:
      "Produce a LLVM module as a .bc file (requires LLVM extensions)",
    insertValue: "-femit-llvm-bc={cursor}",
    exclusiveOn: ["-fno-emit-llvm-bc"],
  },
  {
    name: "-fno-emit-llvm-bc",
    description: "(default) Do not produce a LLVM module as a .bc file",
    exclusiveOn: ["-femit-llvm-bc"],
  },
  {
    name: "-femit-h",
    description: "Generate a C header file (.h)",
    insertValue: "-femit-h={cursor}",
    exclusiveOn: ["-fno-emit-h"],
  },
  {
    name: "-fno-emit-h",
    description: "(default) Do not generate a C header file (.h)",
    exclusiveOn: ["-femit-h"],
  },
  {
    name: "-femit-docs",
    description: "Create a docs/ dir with html documentation",
    insertValue: "-femit-docs={cursor}",
    exclusiveOn: ["-fno-emit-docs"],
  },
  {
    name: "-fno-emit-docs",
    description: "(default) Do not produce docs/ dir with html documentation",
    exclusiveOn: ["-femit-docs"],
  },
  {
    name: "-femit-analysis",
    description: "Write analysis JSON file with type information",
    insertValue: "-femit-analysis={cursor}",
    exclusiveOn: ["-fno-emit-analysis"],
  },
  {
    name: "-fno-emit-analysis",
    description:
      "(default) Do not write analysis JSON file with type information",
    exclusiveOn: ["-femit-analysis"],
  },
  {
    name: "-femit-implib",
    description: "(default) Produce an import .lib when building a Windows DLL",
    insertValue: "-femit-implib={cursor}",
    exclusiveOn: ["-fno-emit-implib"],
  },
  {
    name: "-fno-emit-implib",
    description: "Do not produce an import .lib when building a Windows DLL",
    exclusiveOn: ["-femit-implib"],
  },
  {
    name: "--show-builtin",
    description: 'Output the source of @import("builtin") then exit',
  },
  cacheDirOption,
  globalCacheDirOption,
  zigLibDirOption,
  {
    name: "--enable-cache",
    description: "Output to cache directory; print path to stdout",
  },

  //Compile Options:
  {
    name: "-target",
    description: "<arch><sub>-<os>-<abi> see the targets command",
    insertValue: "-target {cursor}",
  },
  {
    name: "-mcpu",
    description: "Specify target CPU and feature set",
    insertValue: "-mcpu {cursor}",
  },
  {
    name: "-mcmodel",
    description: "Limit range of code and data virtual addresses",
    insertValue: "-mcmodel={cursor}",
    args: {
      suggestions: ["default", "tiny", "small", "kernel", "medium", "large"],
    },
  },
  {
    name: "-mred-zone",
    description: 'Force-enable the "red-zone"',
    exclusiveOn: ["-mno-red-zone"],
  },
  {
    name: "-mnored-zone",
    description: 'Force-disable the "red-zone"',
    exclusiveOn: ["-mred-zone"],
  },
  {
    name: "-fomit-frame-pointer",
    description: "Omit the stack frame pointer",
    exclusiveOn: ["-fno-omit-frame-pointer"],
  },
  {
    name: "-fno-omit-frame-pointer",
    description: "Store the stack frame pointer",
    exclusiveOn: ["-fomit-frame-pointer"],
  },
  {
    name: "-mexec-model",
    insertValue: "-mexec-model={cursor}",
    description: "(WASI) Execution model",
  },
  {
    name: "--name",
    description: "Override root name (not a file path)",
    insertValue: "--name {cursor}",
  },
  {
    name: "-O",
    description: "Choose what to optimize for",
    args: {
      name: "mode",
      suggestions: [
        {
          name: "Debug",
          description: "(default) Optimizations off, safety on",
        },
        {
          name: "ReleaseFast",
          description: "Optimizations on, safety off",
        },
        {
          name: "ReleaseSafe",
          description: "Optimizations on, safety on",
        },
        {
          name: "ReleaseSmall",
          description: "Optimize for small binary, safety off",
        },
      ],
    },
  },
  {
    name: "--pkg-begin",
    description: "Make pkg available to import and push current pkg",
    args: [
      {
        name: "name",
      },
      {
        name: "path",
      },
    ],
  },
  {
    name: "--pkg-end",
    description: "Pop current pkg",
  },
  {
    name: "--main-pkg-path",
    description: "Set the directory of the root package",
    args: {
      name: "path",
      template: "folders",
    },
  },
  {
    name: "-fPIC",
    description: "Force-enable Position Independent Code",
    exclusiveOn: ["-fno-PIC"],
  },
  {
    name: "-fno-PIC",
    description: "Force-disable Position Independent Code",
    exclusiveOn: ["-fPIC"],
  },
  {
    name: "-fPIE",
    description: "Force-enable Position Independent Executable",
    exclusiveOn: ["-fno-PIE"],
  },
  {
    name: "-fno-PIE",
    description: "Force-disable Position Independent Executable",
    exclusiveOn: ["-fPIE"],
  },
  {
    name: "-flto",
    description:
      "Force-enable Link Time Optimization (requires LLVM extensions)",
    exclusiveOn: ["-fno-lto"],
  },
  {
    name: "-fno-lto",
    description: "Force-disable Link Time Optimization",
    exclusiveOn: ["-flto"],
  },
  {
    name: "-fstack-check",
    description: "Enable stack probing in unsafe builds",
    exclusiveOn: ["-fno-stack-check"],
  },
  {
    name: "-fno-stack-check",
    description: "Disable stack probing in unsafe builds",
    exclusiveOn: ["-fstack-check"],
  },
  {
    name: "-fstack-protector",
    description: "Enable stack protection in unsafe builds",
    exclusiveOn: ["-fno-stack-protector"],
  },
  {
    name: "--fno-stack-protector",
    description: "Disable stack protection in unsafe builds",
    exclusiveOn: ["-fstack-protector"],
  },
  {
    name: "-fsanitize-c",
    description: "Enable C undefined behavior detection in unsafe builds",
    exclusiveOn: ["-fno-sanitize-c"],
  },
  {
    name: "-fno-sanitize-c",
    description: "Disable C undefined behavior detection in safe builds",
    exclusiveOn: ["-fsanitize-c"],
  },
  {
    name: "-fvalgrind",
    description: "Include valgrind client requests in release builds",
    exclusiveOn: ["-fno-valgrind"],
  },
  {
    name: "-fno-valgrind",
    description: "Omit valgrind client requests in debug builds",
    exclusiveOn: ["-fvalgrind"],
  },
  {
    name: "-fsanitize-thread",
    description: "Enable Thread Sanitizer",
    exclusiveOn: ["-fno-sanitize-thread"],
  },
  {
    name: "-fno-sanitize-thread",
    description: "Disable Thread Sanitizer",
    exclusiveOn: ["-fsanitize-thread"],
  },
  {
    name: "-fdll-export-fns",
    description: "Mark exported functions as DLL exports (Windows)",
    exclusiveOn: ["-fno-dll-export-fns"],
  },
  {
    name: "-fno-dll-export-fns",
    description: "Force-disable marking exported functions as DLL exports",
    exclusiveOn: ["-fdll-export-fns"],
  },
  {
    name: "-funwind-tables",
    description: "Always produce unwind table entries for all functions",
    exclusiveOn: ["-fno-unwind-tables"],
  },
  {
    name: "-fno-unwind-tables",
    description: "Never produce unwind table entries",
    exclusiveOn: ["-funwind-tables"],
  },
  {
    name: "-fLLVM",
    description: "Force using LLVM as the codegen backend",
    exclusiveOn: ["-fno-LLVM"],
  },
  {
    name: "-fno-LLVM",
    description: "Prevent using LLVM as the codegen backend",
    exclusiveOn: ["-fLLVM"],
  },
  {
    name: "-fClang",
    description: "Force using Clang as the C/C++ compilation backend",
    exclusiveOn: ["-fno-Clang"],
  },
  {
    name: "-fno-Clang",
    description: "Prevent using Clang as the C/C++ compilation backend",
    exclusiveOn: ["-fClang"],
  },
  stage1Option,
  noStage1Option,
  referenceTraceOption,
  noReferenceTraceOption,
  {
    name: "-fsingle-threaded",
    description: "Code assumes there is only one thread",
    exclusiveOn: ["-fno-single-threaded"],
  },
  {
    name: "-fno-single-threaded",
    description: "Code may not assume there is only one thread",
    exclusiveOn: ["-fsingle-threaded"],
  },
  {
    name: "-fbuiltin",
    description: "Enable implicit builtin knowledge of functions",
    exclusiveOn: ["-fno-builtin"],
  },
  {
    name: "-fno-builtin",
    description: "Disable implicit builtin knowledge of functions",
    exclusiveOn: ["-fbuiltin"],
  },
  {
    name: "-ffunction-sections",
    description: "Places each function in a separate section",
    exclusiveOn: ["-fno-function-sections"],
  },
  {
    name: "-fno-function-sections",
    description: "All functions go into same section",
    exclusiveOn: ["ffunction-sections"],
  },
  {
    name: "-fstrip",
    description: "Omit debug symbols",
    exclusiveOn: ["-fno-strip"],
  },
  {
    name: "-fno-strip",
    description: "Keep debug symbols",
    exclusiveOn: ["-fno-strip"],
  },
  {
    name: "-ofmt",
    insertValue: "-ofmt={cursor}",
    description: "Override target object format",
    args: {
      name: "mode",
      suggestions: [
        {
          name: "elf",
          description: "Executable and Linking Format",
        },
        {
          name: "c",
          description: "C source code",
        },
        {
          name: "wasd",
          description: "WebAssembly",
        },
        {
          name: "coff",
          description: "Common Object File Format (Windows)",
        },
        {
          name: "macho",
          description: "MacOS relocatables",
        },
        {
          name: "spirv",
          description:
            "Standard, Portable Intermediate Representation V (SPIR-V)",
        },
        {
          name: "plan9",
          description: "Plan 9 from Bell Labs object format",
        },
      ],
    },
  },
  {
    name: "-idirafter",
    description: "Add directory to AFTER include search path",
    args: {
      name: "dir",
      template: "folders",
    },
  },
  {
    name: "-isystem",
    description: "Add directory to SYSTEM include search path",
    args: {
      name: "dir",
      template: "folders",
    },
  },
  {
    name: "-I",
    description: "Add directory to include search path",
    insertValue: "-I{cursor}",
  },
  {
    name: "-D",
    description: "Define C [macro] to [value] (1 if [value] omitted)",
    insertValue: "-D{cursor}",
  },
  {
    name: "--libc",
    description: "Provide a file which specifies libc paths",
    args: {
      name: "file",
      template: "filepaths",
    },
  },
  {
    name: "-cflags",
    description: "Set extra flags for the next positional C source files",
    insertValue: "-cflags {cursor} --",
  },

  //Link Options:
  {
    name: ["-l", "--library"],
    description: "Link against system library (only if actually used)",
    args: {
      name: "lib",
    },
  },
  {
    name: ["-needed-l", "--needed-library"],
    description: "Link against system library (even if unused)",
    args: {
      name: "lib",
    },
  },
  {
    name: ["-L", "--library-directory"],
    description: "Add a directory to the library search path",
    args: {
      name: "d",
    },
  },
  {
    name: ["-T", "--script"],
    description: "Use a custom linker script",
    args: {
      name: "script",
    },
  },
  {
    name: "--version-script",
    description: "Provide a version .map file",
    insertValue: "--version-script {cursor}",
    args: {
      name: "path",
    },
  },
  {
    name: "--dynamic-linker",
    description: "Set the dynamic interpreter path (usually ld.so)",
    insertValue: "--dynamic-linker {cursor}",
    args: {
      name: "path",
    },
  },
  {
    name: "--sysroot",
    description: "Set the system root directory (usually /)",
    insertValue: "--sysroot {cursor}",
    args: {
      name: "path",
      template: "folders",
    },
  },
  {
    name: "--version",
    description: "Dynamic library semver",
    insertValue: "--version {ver}",
    args: {
      name: "ver",
    },
  },
  {
    name: "--entry",
    description: "Set the entrypoint symbol name",
    insertValue: "--entry {cursor}",
    args: {
      name: "name",
    },
  },
  {
    name: "-fsoname",
    description: "Override the default SONAME value",
    insertValue: "-fsoname={cursor}",
    exclusiveOn: ["-fno-soname"],
  },
  {
    name: "-fno-soname",
    description: "Disable emitting a SONAME",
    exclusiveOn: ["fsoname"],
  },
  {
    name: "-fLLD",
    description: "Force using LLD as the linker",
    exclusiveOn: ["-fno-LLD"],
  },
  {
    name: "-fno-LLD",
    description: "Prevent using LLD as the linker",
    exclusiveOn: ["-fLLD"],
  },
  {
    name: "-fcompiler-rt",
    description: "Always include compiler-rt symbols in output",
    exclusiveOn: ["-fno-compiler-rt"],
  },
  {
    name: "-fno-compiler-rt",
    description: "Prevent including compiler-rt symbols in output",
    exclusiveOn: ["-fcompiler-rt"],
  },
  {
    name: "-rdynamic",
    description: "Add all symbols to the dynamic symbol table",
  },
  {
    name: "-rpath",
    description: "Add directory to the runtime library search path",
    args: {
      name: "path",
      template: "folders",
    },
  },
  {
    name: "-feach-lib-rpath",
    description: "Ensure adding rpath for each used dynamic library",
    exclusiveOn: ["-fno-each-lib-rpath"],
  },
  {
    name: "-fno-each-lib-rpath",
    description: "Prevent adding rpath for each used dynamic library",
    exclusiveOn: ["-feach-lib-rpath"],
  },
  {
    name: "-fallow-shlib-undefined",
    description: "Allows undefined symbols in shared libraries",
    exclusiveOn: ["-fno-allow-shlib-undefined"],
  },
  {
    name: "-fno-allow-shlib-undefined",
    description: "Disallows undefined symbols in shared libraries",
    exclusiveOn: ["-fallow-shlib-undefined"],
  },
  {
    name: "-fbuild-id",
    description: "Helps coordinate stripped binaries with debug symbols",
    exclusiveOn: ["-fno-build-id"],
  },
  {
    name: "-fno-build-id",
    description: "(default) Saves a bit of time linking",
    exclusiveOn: ["-fbuild-id"],
  },
  {
    name: "--eh-frame-hdr",
    description:
      "Enable C++ exception handling by passing --eh-frame-hdr to linker",
  },
  {
    name: "--emit-relocs",
    description: "Enable output of relocation sections for post build tools",
  },
  {
    name: "-z",
    description: "Set linker extension flags",
    insertValue: "-z {cursor}",
    args: {
      name: "arg",
      suggestions: [
        {
          name: "nodelete",
          description:
            "Indicate that the object cannot be deleted from a process",
        },
        {
          name: "notext",
          description: "Permit read-only relocations in read-only segments",
        },
        {
          name: "defs",
          description: "Force a fatal error if any undefined symbols remain",
        },
        {
          name: "origin",
          description:
            "Indicate that the object must have its origin processed",
        },
        {
          name: "nocopyreloc",
          description: "Disable the creation of copy relocations",
        },
        {
          name: "now",
          description:
            "(default) Force all relocations to be processed on load",
        },
        {
          name: "lazy",
          description: "Don't force all relocations to be processed on load",
        },
        {
          name: "relro",
          description:
            "(default) Force all relocations to be read-only after processing",
        },
        {
          name: "norelro",
          description:
            "Don't force all relocations to be read-only after processing",
        },
      ],
    },
  },
  {
    name: "-dynamic",
    description: "Force output to be dynamically linked",
  },
  {
    name: "-static",
    description: "Force output to be statically linked",
  },
  {
    name: "-Bsymbolic",
    description: "Bind global references locally",
  },
  {
    name: "--compress-debug-sections",
    description: "Debug section compression settings",
    insertValue: "--compress-debug-sections={cursor}",
    args: {
      name: "e",
      suggestions: [
        {
          name: "none",
          description: "No compression",
        },
        {
          name: "zlib",
          description: "Compression with deflate/inflate",
        },
      ],
    },
  },
  {
    name: "--gc-sections",
    description:
      "Force removal of functions and data that are unreachable by the entry point or exported symbols",
    exclusiveOn: ["--no-gc-sections"],
  },
  {
    name: "--no-gc-sections",
    description: "Don't force removal of unreachable functions and data",
    exclusiveOn: ["--gc-sections"],
  },
  {
    name: "--subsystem",
    description: "(Windows) /SUBSYSTEM:<subsystem> to the linker",
    args: {
      name: "subsystem",
    },
  },
  {
    name: "--stack",
    description: "Override default stack size",
    args: {
      name: "size",
    },
  },
  {
    name: "--image-base",
    description: "Set base address for executable image",
    args: {
      name: "addr",
      description: "Address",
    },
  },
  {
    name: ["-weak-l", "-weak_library"],
    description:
      "(Darwin) link against system library and mark it and all referenced symbols as weak",
    args: {
      name: "lib",
    },
  },
  {
    name: "-framework",
    description: "(Darwin) link against framework",
    args: {
      name: "name",
      description: "Framework name",
    },
  },
  {
    name: "-needed_framework",
    description: "(Darwin) link against framework (even if unused)",
    args: {
      name: "name",
      description: "Framework name",
    },
  },
  {
    name: "-needed_library",
    description: "(Darwin) link against framework (even if unused)",
    args: {
      name: "lib",
      description: "Library name",
    },
  },
  {
    name: "-weak_framework",
    description:
      "(Darwin) link against framework and mark it and all referenced symbols as weak",
    args: {
      name: "name",
      description: "Framework name",
    },
  },
  {
    name: "-F",
    description: "(Darwin) add search path for frameworks",
    insertValue: "-F{cursor}",
    args: {
      name: "dir",
      template: "folders",
    },
  },
  {
    name: "-install_name",
    description: "(Darwin) add dylib's install name",
    insertValue: "-install_name={cursor}",
  },
  {
    name: "--entitlements",
    description:
      "(Darwin) add path to entitlements file for embedding in code signature",
    args: {
      name: "path",
      template: ["folders", "filepaths"],
    },
  },
  {
    name: "-pagezero_size",
    description:
      "(Darwin) size of the __PAGEZERO segment in hexadecimal notation",
    insertValue: "-pagezero_size {cursor}",
    args: {
      name: "value",
    },
  },
  {
    name: "-search_paths_first",
    description:
      "(Darwin) search each dir in library search paths for `libx.dylib` then `libx.a`",
  },
  {
    name: "-search_dylibs_first",
    description:
      "(Darwin) search `libx.dylib` in each dir in library search paths, then `libx.a`",
  },
  {
    name: "-headerpad",
    description:
      "(Darwin) set minimum space for future expansion of the load commands in hexadecimal notation",
    args: {
      name: "value",
    },
  },
  {
    name: "-headerpad_max_install_names",
    description: "(Darwin) set enough space as if all paths were MAXPATHLEN",
  },
  {
    name: "-dead_strip",
    description:
      "(Darwin) remove functions and data that are unreachable by the entry point or exported symbols",
  },
  {
    name: "-dead_strip_dylibs",
    description:
      "(Darwin) remove dylibs that are unreachable by the entry point or exported symbols",
  },
  {
    name: "--import-memory",
    description: "(WebAssembly) import memory from the environment",
  },
  {
    name: "--import-table",
    description:
      "(WebAssembly) import function table from the host environment",
  },
  {
    name: "--export-table",
    description: "(WebAssembly) export function table to the host environment",
  },
  {
    name: "--initial-memory",
    description: "(WebAssembly) initial size of the linear memory",
    insertValue: "--initial-memory={cursor}",
  },
  {
    name: "--max-memory",
    description: "(WebAssembly) maximum size of the linear memory",
    insertValue: "--max-memory={cursor}",
  },
  {
    name: "--shared-memory",
    description: "(WebAssembly) use shared linear memory",
  },
  {
    name: "--global-base",
    description: "(WebAssembly) where to start to place global data",
    insertValue: "--global-base={cursor}",
  },
  {
    name: "--export",
    description: "(WebAssembly) Force a symbol to be exported",
    insertValue: "--export={cursor}",
  },

  //Test Options
  {
    name: "--test-filter",
    description: "Skip tests that do not match filter",
    args: {
      name: "filter",
    },
  },
  {
    name: "--test-name-prefix",
    description: "Add prefix to all tests",
    args: {
      name: "text",
    },
  },
  {
    name: "--test-cmd",
    description: "Specify test execution command one arg at a time",
    args: {
      name: "arg",
    },
  },
  {
    name: "--test-cmd-bin",
    description: "Appends test binary path to test cmd args",
  },
  {
    name: "--test-evented-io",
    description: "Runs the test in evented I/O mode",
  },
  {
    name: "--test-no-exec",
    description: "Compiles test binary without running it",
  },

  //Debug Options (Zig Compiler Development)
  {
    name: "-ftime-report",
    description: "Print timing diagnostics",
  },
  {
    name: "-fstack-report",
    description: "Print stack size diagnostics",
  },
  {
    name: "--verbose-link",
    description: "Display linker invocations",
  },
  {
    name: "--verbose-cc",
    description: "Display linker invocations",
  },
  {
    name: "--verbose-air",
    description: "Enable compiler debug output for Zig AIR",
  },
  {
    name: "--verbose-llvm-ir",
    description: "Enable compiler debug output for LLVM IR",
  },
  {
    name: "--verbose-cimport",
    description: "Enable compiler debug output for C imports",
  },
  {
    name: "--verbose-llvm-cpu-features",
    description: "Enable compiler debug output for LLVM CPU features",
  },
  {
    name: "--debug-log",
    description: "Enable printing debug/info log messages for scope",
    args: {
      name: "scope",
    },
  },
  {
    name: "--debug-compile-errors",
    description: "Crash with helpful diagnostics at the first compile error",
  },
  {
    name: "--debug-link-snapshot",
    description: "Enable dumping of the linker's state in JSON format",
  },
];

const llvmOptions: Fig.Option[] = [
  helpOption,
  {
    name: "-###",
    description:
      "Print (but do not run) the commands to run for this compilation",
  },
  {
    name: "--amdgpu-arch-tool",
    description: "Tool used for detecting AMD GPU arch in the system",
    insertValue: "--amdgpu-arch-tool={cursor}",
    args: {
      name: "value",
    },
  },
  {
    name: "--analyzer-output",
    displayName: "Static analyzer report output format",
    args: {
      name: "value",
      suggestions: [
        "html",
        "plist",
        "plist-multi-file",
        "plist-html",
        "sarif",
        "sarif-html",
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
      template: "folders",
    },
  },
  {
    name: "-B",
    description:
      "Search $prefix$file for executables, libraries, and data files. If $prefix is a directory, search $prefix/$file",
    args: {
      name: "prefix",
    },
  },
  {
    name: "-b",
    description: "Pass -b <arg> to the linker on AIX (only)",
    args: {
      name: "arg",
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
    name: "-cl-ext",
    description:
      "OpenCL only. Enable or disable OpenCL extensions/optional features. The argument is a comma-separated sequence of one or more extension names, each prefixed by '+' or '-'",
    insertValue: "-cl-ext={cursor}",
    args: {
      name: "value",
    },
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
    name: "-cl-no-stdinc",
    description:
      "OpenCL only. Disables all standard includes containing non-native compiler types and functions",
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
    insertValue: "-cl-std={cursor}",
  },
  {
    name: "-cl-strict-aliasing",
    description:
      "OpenCL only. This option is added for compatibility with OpenCL 1.0",
  },
  {
    name: "-cl-uniform-work-group-size",
    description:
      "OpenCL only. Defines that the global work-size be a multiple of the work-group size specified to `clEnqueueNDRangeKernel`",
  },
  {
    name: "-cl-unsafe-math-optimizations",
    description:
      "OpenCL only. Allow unsafe floating-point optimizations.  Also implies `-cl-no-signed-zeros` and `-cl-mad-enable`",
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
    name: "--cuda-feature",
    description: "Manually specify the CUDA feature to use",
    insertValue: "--cuda-feature={cursor}",
    args: {
      name: "value",
    },
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
    insertValue: "--cuda-include-ptx={cursor}",
    args: {
      name: "value",
    },
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
    description: "",
    insertValue: "--cuda-path={cursor}",
    args: {
      name: "value",
      template: "folders",
    },
  },
  {
    name: "-cuid",
    description:
      "An ID for compilation unit, which should be the same for the same compilation unit but different for different compilation units. It is used to externalize device-side static variables for single source offloading languages CUDA and HIP so that they can be accessed by the host code of the same compilation unit",
    insertValue: "-cuid={cursor}",
    args: {
      name: "value",
    },
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
    name: "-darwin-target-variant-triple",
    description: "Specify the darwin target variant triple",
    args: {
      name: "value",
    },
  },
  {
    name: "-darwin-target-variant",
    description:
      "Generate code for an additional runtime variant of the deployment target",
    args: {
      name: "value",
    },
  },
  {
    name: "-dD",
    description:
      "Print macro definitions in -E mode in addition to normal output",
  },
  {
    name: "-dependency-dot",
    description: "Filename to write DOT-formatted header dependencies to",
  },
  {
    name: "-dependency-file",
    description: "Filename (or -) to write dependency output to",
  },
  {
    name: "-dI",
    description:
      "Print include directives in -E mode in addition to normal output",
  },
  {
    name: "-dM",
    description: "Print macro definitions in -E mode instead of normal output",
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
    description: "Define <macro> to <value> (or 1 if <value> omitted)",
    insertValue: "-D {cursor}=",
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
    name: "--end-no-unused-arguments",
    description: "Start emitting warnings for unused driver arguments",
  },
  {
    name: "-extract-api",
    description: "Extract API information",
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
    name: "-faddrsig",
    description: "Emit an address-significance table",
  },
  {
    name: "-faddrsig",
    description: "Emit an address-significance table",
  },
  {
    name: "--falign-loops",
    description: "Value must be a power of two. Align loops to the boundary",
    insertValue: "-falign-loops={cursor}",
    args: {
      name: "N",
      description: "N must be power of two",
    },
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
    name: "-faltivec-src-compat",
    description:
      "Source-level compatibility for Altivec vectors (for PowerPC targets)",
    insertValue: "-faltivec-src-compat={cursor}",
  },
  {
    name: "-fansi-escape-codes",
    description: "Use ANSI escape codes for diagnostics",
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
    name: "-fapprox-func",
    description:
      "Allow certain math function calls to be replaced with an approximately equivalent calculation",
  },
  {
    name: "-fasync-exceptions",
    description: "Enable EH Asynchronous exceptions",
  },
  {
    name: "-fbasic-block-sections",
    description:
      "Place each function's basic blocks in unique sections (ELF Only)",
    insertValue: "-fbasic-block-sections={cursor}",
  },
  {
    name: "-fbinutils-version",
    description:
      "Produced object files can use all ELF features supported by this binutils version and newer. If -fno-integrated-as is specified, the generated assembly will consider GNU as support. 'none' means that all ELF features can be used, regardless of binutils support. Defaults to 2.26",
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
    name: "-fbuild-session-file",
    description:
      "Use the last modification time of <file> as the build session timestamp",
    insertValue: "-fbuild-session-file={cursor}",
    args: {
      name: "file",
      template: "filepaths",
    },
  },
  {
    name: "-fbuild-session-timestamp",
    description: "Time when the current build session started",
    insertValue: "-fbuild-session-timestamp={cursor}",
    args: {
      name: "time since Epoch in seconds",
    },
  },
  {
    name: "-fbuiltin-module-map",
    description: "Load the clang builtins module map file",
  },
  {
    name: "-fc++-abi",
    description: "C++ ABI to use. This will override the target C++ ABI",
    insertValue: "-fc++-abi={cursor}",
    args: {
      name: "value",
    },
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
    name: "-fcf-protection",
    description: "Instrument control-flow architecture protection",
    insertValue: "-fcf-protection={cursor}",
    args: {
      name: "value",
    },
  },
  {
    name: "-fchar8_t",
    description: "Enable C++ builtin type char8_t",
  },
  {
    name: "-fclang-abi-compat",
    description: "Attempt to match the ABI of Clang <version>",
    insertValue: "-fclang-abi-compat={cursor}",
    args: {
      name: "version",
    },
  },
  {
    name: "-fcolor-diagnostics",
    description: "Enable colors in diagnostics",
  },
  {
    name: "-fcomment-block-commands",
    description:
      "Treat each comma separated argument in <arg> as a documentation comment block command",
    insertValue: "-fcomment-block-commands={cursor}",
    args: {
      name: "arg",
      description: "Comma separated argument",
    },
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
    name: "-fconvergent-functions",
    description: "Assume functions may be convergent",
  },
  {
    name: "-fcoroutines-ts",
    description: "Enable support for the C++ Coroutines TS",
  },
  {
    name: "-fcoverage-compilation-dir",
    description: "The compilation directory to embed in the coverage mapping",
    insertValue: "-fcoverage-compilation-dir={cursor}",
    args: {
      name: "value",
    },
  },
  {
    name: "-fcoverage-mapping",
    description: "Generate coverage mapping to enable code coverage analysis",
  },
  {
    name: "-fcoverage-prefix-map",
    description: "Remap file source paths in coverage mapping",
    insertValue: "-fcoverage-prefix-map={cursor}",
    args: {
      name: "value",
    },
  },
  {
    name: "-fcrash-diagnostics-dir",
    description: "Put crash-report files in <dir>",
    insertValue: "-fcrash-diagnostics-dir={cursor}",
    args: {
      name: "dir",
      template: "folders",
    },
  },
  {
    name: "-fcs-profile-generate",
    description:
      "Generate instrumented code to collect context sensitive execution counts into <directory>/default.profraw (overridden by LLVM_PROFILE_FILE env var)",
    insertValue: "-fcs-profile-generate={cursor}",
    args: {
      name: "directory",
    },
  },
  {
    name: "-fcuda-approx-transcendentals",
    description: "Use approximate transcendental functions",
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
    name: "-fcxx-modules",
    description: "Enable modules for C++",
  },
  {
    name: "-fdata-sections",
    description: "Place each data in its own section",
  },
  {
    name: "-fdebug-compilation-dir",
    description: "The compilation directory to embed in the debug info",
    insertValue: "-fdebug-compilation-dir={cursor}",
    args: {
      name: "value",
    },
  },
  {
    name: "-fdebug-default-version",
    description:
      "Default DWARF version to use, if a -g option caused DWARF debug info to be produced",
    insertValue: "-fdebug-default-version={cursor}",
    args: {
      name: "value",
    },
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
    insertValue: "-fdebug-prefix-map={cursor}",
    args: {
      name: "value",
    },
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
    description: "Allow `__declspec` as a keyword",
  },
  {
    name: "-fdelayed-template-parsing",
    description:
      "Parse templated function definitions at the end of the translation unit",
  },
  {
    name: "-fdelete-null-pointer-checks",
    description: "Treat usage of null pointers as undefined behavior (default)",
  },
  {
    name: "-fdiagnostics-absolute-paths",
    description: "Print absolute paths in diagnostics",
  },
  {
    name: "-fdiagnostics-hotness-threshold",
    description:
      "Prevent optimization remarks from being output if they do not have at least this profile count. Use 'auto' to apply the threshold from profile summary",
    insertValue: "-fdiagnostics-hotness-threshold={cursor}",
    args: {
      name: "value",
    },
  },
  {
    name: "-fdiagnostics-misexpect-tolerance",
    description:
      "Prevent misexpect diagnostics from being output if the profile counts are within N% of the expected",
    insertValue: "-fdiagnostics-misexpect-tolerance={cursor}",
    args: {
      name: "value",
    },
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
    name: "-fdirect-access-external-data",
    description: "Don't use GOT indirection to reference external data symbols",
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
    name: "-fdriver-only",
    description: "Only run the driver",
  },
  {
    name: "-fdwarf-exceptions",
    description: "Use DWARF style exceptions",
  },
  {
    name: "-feliminate-unused-debug-types",
    description: "Do not emit  debug info for defined but unused types",
  },
  {
    name: "-fembed-bitcode-marker",
    description: "Embed placeholder LLVM IR data as a marker",
  },
  {
    name: "-fembed-bitcode",
    description: "Embed LLVM bitcode",
    insertValue: "-fembed-bitcode={cursor}",
    args: {
      name: "option",
    },
  },
  {
    name: "-fembed-offload-object",
    description:
      "Embed Offloading device-side binary into host object file as a section",
    insertValue: "-fembed-offload-object={cursor}",
    args: {
      name: "value",
    },
  },
  {
    name: "-femit-all-decls",
    description: "Emit all declarations, even if unused",
  },
  {
    name: "-femit-dwarf-unwind",
    description: "When to emit DWARF unwind (EH frame) info",
    insertValue: "-femit-dwarf-unwind={cursor}",
    args: {
      name: "value",
    },
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
    name: "-fexceptions",
    description: "Enable support for exception handling",
  },
  {
    name: "-fexperimental-library",
    description:
      "Control whether unstable and experimental library features are enabled",
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
    name: "-fextend-arguments",
    description:
      "Controls how scalar integer arguments are extended in calls to unprototyped and varargs functions",
    insertValue: "-fextend-arguments={cursor}",
    args: {
      name: "value",
    },
  },
  {
    name: "-ffast-math",
    description: "Allow aggressive, lossy floating-point optimizations",
  },
  {
    name: "-ffile-compilation-dir",
    description:
      "The compilation directory to embed in the debug info and coverage mapping",
    insertValue: "-ffile-compilation-dir={cursor}",
    args: {
      name: "value",
    },
  },
  {
    name: "-ffile-prefix-map",
    description:
      "Remap file source paths in debug info, predefined preprocessor macros and `__builtin_FILE()`. Implies `-ffile-reproducible`",
    insertValue: "-ffile-prefix-map={cursor}",
    args: {
      name: "value",
    },
  },
  {
    name: "-ffile-reproducible",
    description:
      "Use the target's platform-specific path separator character when expanding the `__FILE__` macro",
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
    name: "-ffixed-a0",
    description: "Reserve the a0 register (M68k only)",
  },
  {
    name: "-ffixed-a1",
    description: "Reserve the a1 register (M68k only)",
  },
  {
    name: "-ffixed-a2",
    description: "Reserve the a2 register (M68k only)",
  },
  {
    name: "-ffixed-a3",
    description: "Reserve the a3 register (M68k only)",
  },
  {
    name: "-ffixed-a4",
    description: "Reserve the a4 register (M68k only)",
  },
  {
    name: "-ffixed-a5",
    description: "Reserve the a5 register (M68k only)",
  },
  {
    name: "-ffixed-a6",
    description: "Reserve the a6 register (M68k only)",
  },
  {
    name: "-ffixed-d0",
    description: "Reserve the d0 register (M68k only)",
  },
  {
    name: "-ffixed-d1",
    description: "Reserve the d1 register (M68k only)",
  },
  {
    name: "-ffixed-d2",
    description: "Reserve the d2 register (M68k only)",
  },
  {
    name: "-ffixed-d3",
    description: "Reserve the d3 register (M68k only)",
  },
  {
    name: "-ffixed-d4",
    description: "Reserve the d2 register (M68k only)",
  },
  {
    name: "-ffixed-d5",
    description: "Reserve the d3 register (M68k only)",
  },
  {
    name: "-ffixed-d6",
    description: "Reserve the d6 register (M68k only)",
  },
  {
    name: "-ffixed-d7",
    description: "Reserve the d7 register (M68k only)",
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
    name: "-ffixed-x1",
    description: "Reserve the x1 register (AArch64/RISC-V only)",
  },
  {
    name: "-ffixed-x1",
    description: "Reserve the x1 register (AArch64/RISC-V only)",
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
    insertValue: "-ffp-contract={cursor}",
    args: {
      name: "value",
    },
  },
  {
    name: "-ffp-eval-method",
    description:
      "Specifies the evaluation method to use for floating-point arithmetic",
    insertValue: "-ffp-eval-method={cursor}",
    args: {
      name: "value",
    },
  },
  {
    name: "-ffp-exception-behavior",
    description:
      "Specifies the exception behavior of floating-point operations",
    insertValue: "-ffp-exception-behavior={cursor}",
    args: {
      name: "value",
    },
  },
  {
    name: "-ffp-model",
    description: "Controls the semantics of floating-point calculations",
    insertValue: "-ffp-model={cursor}",
    args: {
      name: "value",
    },
  },
  {
    name: "-ffreestanding",
    description:
      "Assert that the compilation takes place in a freestanding environment",
  },
  {
    name: "-ffuchsia-api-level",
    description: "Set Fuchsia API level",
    insertValue: "-ffuchsia-api-level={cursor}",
    args: {
      name: "value",
    },
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
    name: "-fgnu-keywords",
    description: "Allow GNU-extension keywords regardless of language standard",
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
    insertValue: "-fgnuc-version={cursor}",
    args: {
      name: "value",
    },
  },
  {
    name: "-fgpu-allow-device-init",
    description: "Allow device side init function in HIP (experimental)",
  },
  {
    name: "-fgpu-default-stream",
    description:
      "Specify default stream. The default value is 'legacy'. (HIP only)",
    insertValue: "-fgpu-default-stream={cursor}",
    args: {
      name: "value",
    },
  },
  {
    name: "-fgpu-defer-diag", //291
    description: "Defer host/device related diagnostic messages for CUDA/HIP",
  },
  {
    name: "-fgpu-flush-denormals-to-zero",
    description:
      "Flush denormal floating point values to zero in CUDA/HIP device mode",
  },
  {
    name: "-fgpu-rdc",
    description:
      "Generate relocatable device code, also known as separate compilation mode",
  },
  {
    name: "-fgpu-sanitize",
    description: "Enable sanitizer for AMDGPU target",
  },
  {
    name: "-fhip-fp32-correctly-rounded-divide-sqrt",
    description:
      "Specify that single precision floating-point divide and sqrt used in the program source are correctly rounded (HIP device compilation only)",
  },
  {
    name: "-fhip-kernel-arg-name",
    description: "Specify that kernel argument names are preserved (HIP only)",
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
    name: "-finline-functions",
    description: "Inline suitable functions",
  },
];

const completionSpec: Fig.Spec = {
  name: "zig",
  description:
    "Zig is a general-purpose programming language and toolchain for " +
    "maintaining robust, optimal, and reusable software",
  subcommands: [
    {
      name: "build",
      description: "Build project from build.zig",
      subcommands: [
        {
          name: "install",
          description: "Copy build artifacts to prefix path",
        },
        {
          name: "uninstall",
          description: "Remove build artifacts from prefix path",
        },
        {
          name: "run",
          description: "Run the app",
        },
        {
          name: "test",
          description: "Run unit tests",
        },
      ],
      options: [
        {
          name: ["-p", "--prefix"],
          description: "Override default install prefix",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: "--prefix-lib-dir",
          description: "Override default library directory path",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: "--prefix-exe-dir",
          description: "Override default executable directory path",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: "--prefix-include-dir",
          description: "Override default include directory path",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: "--sysroot",
          description: "Set the system root directory (usually /)",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: "--search-prefix",
          description: "Add a path to look for binaries, libraries, headers",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: "--libc",
          description: "Provide a file which specifies libc paths",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          name: "-fdarling",
          description:
            "Integration with system-installed Darling to execute macOS programs on Linux hosts",
          exclusiveOn: ["-fno-fdarling"],
          priority: 25,
        },
        {
          name: "-fno-fdarling",
          description:
            "No integration with system-installed Darling to execute macOS programs on Linux hosts",
          exclusiveOn: ["-fdarling"],
          priority: 25,
        },
        {
          name: "-fqemu",
          description:
            "Integration with system-installed QEMU to execute foreign-architecture programs on Linux host",
          exclusiveOn: ["-fno-qemu"],
          priority: 25,
        },
        {
          name: "-fno-qemu",
          description:
            "No integration with system-installed QEMU to execute foreign-architecture programs on Linux host",
          exclusiveOn: ["-fqemu"],
          priority: 25,
        },
        {
          name: "--glibc-runtimes",
          description:
            "Enhances QEMU integration by providing glibc built for multiple foreign architectures",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: "-frosetta",
          description:
            "Rely on Rosetta to execute x86_64 programs on\n" +
            "                               ARM64 macOS hosts.",
          exclusiveOn: ["-fno-rosetta"],
          priority: 25,
        },
        {
          name: "-fno-rosetta",
          description:
            "Don't rely on Rosetta to execute x86_64 programs on\n" +
            "                               ARM64 macOS hosts.",
          exclusiveOn: ["-frosetta"],
          priority: 25,
        },
        {
          name: "-fwasmtime",
          description:
            "Integration with system-installed wasmtime to\n" +
            " execute WASI binaries.",
          exclusiveOn: ["-fno-wasmtime"],
          priority: 25,
        },
        {
          name: "-fno-wasmtime",
          description:
            "No integration with system-installed wasmtime to\n" +
            " execute WASI binaries.",
          exclusiveOn: ["-fwasmtime"],
          priority: 25,
        },
        {
          name: "-fwine",
          description:
            "Integration with system-installed Wine to execute\n" +
            "Windows programs on Linux hosts.",
          exclusiveOn: ["-fno-wine"],
          priority: 25,
        },
        {
          name: "-fno-wine",
          description:
            "No integration with system-installed Wine to execute\n" +
            "Windows programs on Linux hosts.",
          exclusiveOn: ["-fwine"],
          priority: 25,
        },
        helpOption,
        {
          name: "--verbose",
          description: "Print commands before executing them",
        },
        colorOption,
        {
          name: "--prominent-compile-errors",
          description: "Output compile errors formatted for a human to read",
        },
        {
          name: "-Dtarget",
          description: "The CPU architecture, OS, and ABI to build for",
          insertValue: "-Dtarget={cursor}",
        },
        {
          name: "-Dcpu",
          description: "Target CPU features to add or subtract",
          insertValue: "-Dcpu={cursor}",
        },
        {
          name: "-Drelease-safe",
          description: "Optimizations on and safety on",
          insertValue: "-Drelease-safe={cursor}",
          args: {
            suggestions: ["true", "false"],
          },
        },
        {
          name: "-Drelease-fast",
          description: "Optimizations on and safety off",
          insertValue: "-Drelease-fast={cursor}",
          args: {
            suggestions: ["true", "false"],
          },
        },
        {
          name: "-Drelease-small",
          description: "Size optimizations on and safety off",
          insertValue: "-Drelease-small={cursor}",
          args: {
            suggestions: ["true", "false"],
          },
        },
        stage1Option,
        noStage1Option,
        referenceTraceOption,
        noReferenceTraceOption,
        {
          name: "--build-file",
          description: "Override path to build.zig",
          args: {
            template: "filepaths",
          },
          priority: 20,
        },
        cacheDirOption,
        globalCacheDirOption,
        zigLibDirOption,
        {
          name: "--verbose-link",
          description: "Enable compiler debug output for linking",
          priority: 20,
        },
        {
          name: "--verbose-air",
          description: "Enable compiler debug output for Zig AIR",
          priority: 20,
        },
        {
          name: "--verbose-llvm-ir",
          description: "Enable compiler debug output for LLVM IR",
          priority: 20,
        },
        {
          name: "--verbose-cimport",
          description: "Enable compiler debug output for C imports",
          priority: 20,
        },
        {
          name: "--verbose-cc",
          description: "Enable compiler debug output for C compilation",
          priority: 20,
        },
        {
          name: "--verbose-llvm-cpu-features",
          description: "Enable compiler debug output for LLVM CPU features",
          priority: 20,
        },
      ],
    },
    {
      name: "init-exe",
      description:
        "Initializes a `zig build` project in the current working directory",
      options: [helpOption],
    },
    {
      name: "init-lib",
      description:
        "Initializes a `zig build` project in the current working directory",
      options: [helpOption],
    },
    {
      name: "ast-check",
      description:
        "Given a .zig source file, reports any compile errors that " +
        "can be ascertained on the basis of the source code alone, without target " +
        "information or type checking. If [file] is omitted, stdin is used.",
      args: {
        name: "file",
        template: "filepaths",
        isOptional: true,
      },
      options: [
        helpOption,
        colorOption,
        {
          name: "-t",
          description: "(debug option) Output ZIR in text form to stdout",
        },
      ],
    },
    {
      name: "build-exe",
      description: "Create executable from source or object files",
      options: buildOptions,
      args: {
        name: "files",
        template: "filepaths",
        isVariadic: true,
      },
    },
    {
      name: "build-lib",
      description: "Create library from source or object files",
      options: buildOptions,
      args: {
        name: "files",
        template: "filepaths",
        isVariadic: true,
      },
    },
    {
      name: "build-obj",
      description: "Create library from source or object files",
      options: buildOptions,
      args: {
        name: "files",
        template: "filepaths",
        isVariadic: true,
      },
    },
    {
      name: "fmt",
      description: "Reformat Zig source into canonical form",
      args: {
        name: "files",
        template: "filepaths",
      },
      options: [
        helpOption,
        colorOption,
        {
          name: "--stdin",
          description: "Format code from stdin; output to stdout",
        },
        {
          name: "--check",
          description:
            "Format code from stdin; output to stdout List non-conforming files and exit with an error",
        },
        {
          name: "--ast-check",
          description: "Run zig ast-check on every file",
        },
        {
          name: "--exclude",
          description: "Exclude file or directory from formatting",
          args: {
            name: "file",
            template: ["filepaths", "folders"],
          },
        },
      ],
    },
    {
      name: "run",
      description: "Create executable and run immediately",
      options: buildOptions,
      args: {
        name: "files",
        template: "filepaths",
        isVariadic: true,
      },
    },
    {
      name: "test",
      description: "Create and run a test build",
      options: buildOptions,
      args: {
        name: "files",
        template: "filepaths",
        isVariadic: true,
      },
    },
    {
      name: "translate-c",
      description: "Convert C code to Zig code",
      options: buildOptions,
      args: {
        name: "files",
        template: "filepaths",
        isVariadic: true,
      },
    },
    {
      name: "ar",
      description: "LLVM Archiver",
      options: [
        {
          name: "--format",
          description: "Archive format to create",
          insertValue: "--format={cursor}",
          args: {
            suggestions: [
              {
                name: "default",
                description: "Default",
              },
              {
                name: "gnu",
                description: "GNU",
              },
              {
                name: "darwin",
                description: "Darwin",
              },
              {
                name: "bsd",
                description: "BSD",
              },
              {
                name: "bigarchive",
                description: "Big archive (AIX OS)",
              },
            ],
          },
        },
      ],
    },
    {
      name: "cc",
      description: "Use Zig as a drop-in C compiler",
      options: llvmOptions,
      args: {
        name: "file",
        isVariadic: true,
        template: "filepaths",
      },
    },
    {
      name: "c++",
      description: "Use Zig as a drop-in C++ compiler",
      options: llvmOptions,
      args: {
        name: "file",
        isVariadic: true,
        template: "filepaths",
      },
    },
    {
      name: "dll-tool",
      description: "LLVM dll tool",
      options: [
        helpOption,
        {
          name: "-D",
          description: "Specify the input DLL Name",
          args: {
            name: "value",
          },
        },
        {
          name: "-d",
          description: "Input .def File",
          args: {
            name: "value",
            template: "filepaths",
          },
        },
        {
          name: "-f",
          description: "Assembler Flags",
          args: {
            name: "value",
          },
        },
        {
          name: "-k",
          description: "Kill @n Symbol from export",
        },
        {
          name: "-l",
          description: "Generate an import lib",
          args: {
            name: "value",
          },
        },
        {
          name: "-m",
          description: "Set target machine",
          args: {
            name: "value",
            suggestions: ["i386", "i386:x86-64", "arm", "arm64"],
          },
        },
        {
          name: "-S",
          description: "Assembler",
          args: {
            name: "value",
          },
        },
      ],
    },
    {
      name: "lib",
      description: "Use Zig as a drop-in lib.exe",
    },
    {
      name: "ranlib",
      description:
        "LLVM Ranlib : This program generates an index to speed access to archives",
      options: [
        helpOption,
        versionOption,
        {
          name: "-D",
          description: "Use zero for timestamps and uids/gids (default)",
        },
        {
          name: "-U",
          description: "Use actual timestamps and uids/gids",
        },
      ],
    },
    {
      name: "env",
      description: "Print lib path, std path, cache directory, and version",
    },
    {
      name: "help",
      description: "Print help and exit",
    },
    {
      name: "libc",
      description:
        "Detect the native libc installation and print the resulting paths to stdout",
      args: {
        name: "paths_file",
        template: "filepaths",
      },
      options: [
        helpOption,
        {
          name: "-target",
          description: "<arch><sub>-<os>-<abi> see the targets command",
          args: {
            name: "name",
          },
        },
      ],
    },
    {
      name: "targets",
      description: "List available compilation targets",
    },
    {
      name: "version",
      description: "Print version number and exit",
    },
    {
      name: "zen",
      description: "Print Zen of Zig and exit",
    },
  ],
  options: [helpOption],
  args: {
    name: "files",
    template: "filepaths",
    isOptional: true,
  },
};
export default completionSpec;
