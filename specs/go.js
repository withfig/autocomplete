var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var buildModeSuggestions = [
    {
        name: "archive",
        description: "nuild the listed non-main packages into .a files",
    },
    {
        name: "c-archive",
        description: "Build the listed main package, plus all packages it imports, into a C archive file",
    },
    {
        name: "c-shared",
        description: "Build the listed main package, plus all packages it imports, into a C shared library",
    },
    {
        name: "default",
        description: "Listed main packages are built into executables and listed non-main packages are built into .a files",
    },
    {
        name: "shared",
        description: "Combine all the listed non-main packages into a single shared library that will be used when building with the -linkshared option",
    },
    {
        name: "exe",
        description: "Build the listed main packages and everything they import into executables",
    },
    {
        name: "pie",
        description: "Build the listed main packages and everything they import into position independent executables (PIE)",
    },
    {
        name: "plugin",
        description: "Build the listed main packages, plus all packages that they import, into a Go plugin",
    },
];
var resolutionAndExecutionOptions = [
    {
        name: "-n",
        description: "print the commands but do not run them.",
    },
    {
        name: "-v",
        description: "print the names of packages as they are compiled.",
    },
    {
        name: "-x",
        description: "print the commands.",
    },
    {
        name: "-tags",
        description: "a comma-separated list of build tags to consider satisfied during the build.",
        args: {
            name: "tags",
        },
    },
    {
        name: "-toolexec",
        insertValue: "-toolexec '{cursor}'",
        description: "a program to use to invoke toolchain programs like vet and asm.",
        args: {
            name: "cmd",
        },
    },
];
var globalOptions = __spreadArray(__spreadArray([], resolutionAndExecutionOptions), [
    {
        name: "-a",
        description: "force rebuilding of packages that are already up-to-date.",
    },
    {
        name: "-p",
        description: "the number of programs, such as build commands or",
        args: {
            name: "programs",
        },
    },
    {
        name: "-race",
        description: "enable data race detection.\n    Supported only on linux/amd64, freebsd/amd64, darwin/amd64, windows/amd64,\n    linux/ppc64le and linux/arm64 (only for 48-bit VMA).",
    },
    {
        name: "-msan",
        description: "enable interoperation with memory sanitizer.\n    Supported only on linux/amd64, linux/arm64\n    and only with Clang/LLVM as the host C compiler.\n    On linux/arm64, pie build mode will be used.",
    },
    {
        name: "-work",
        description: "print the name of the temporary work directory and\n    do not delete it when exiting.",
    },
    {
        name: "-asmflags",
        insertValue: "-asmflags='{cursor}'",
        description: "arguments to pass on each go tool asm invocation.",
        args: {
            name: "flag",
            variadic: true,
        },
    },
    {
        name: "-buildmode",
        description: "build mode to use. See 'go help buildmode' for more.",
        args: {
            name: "mode",
            suggestions: buildModeSuggestions,
        },
    },
    {
        name: "-compiler",
        description: "name of compiler to use, as in runtime.Compiler (gccgo or gc).",
        args: {
            name: "name",
        },
    },
    {
        name: "-gccgoflags",
        insertValue: "--gccgoflags='{cursor}'",
        description: "arguments to pass on each gccgo compiler/linker invocation.",
        args: {
            name: "flag",
            variadic: true,
        },
    },
    {
        name: "-gcflags",
        insertValue: "-gcflags='{cursor}'",
        description: "arguments to pass on each go tool compile invocation.",
        args: {
            name: "flag",
            variadic: true,
        },
    },
    {
        name: "-installsuffix",
        description: "a suffix to use in the name of the package installation directory,",
        args: {
            name: "suffix",
        },
    },
    {
        name: "-ldflags",
        insertValue: "-ldflags='{cursor}'",
        description: "arguments to pass on each go tool link invocation..",
        args: {
            name: "flag",
            variadic: true,
        },
    },
    {
        name: "-linkshared",
        description: "build code that will be linked against shared libraries previously",
    },
    {
        name: "-mod",
        description: "module download mode to use: readonly, vendor, or mod.",
        args: {
            name: "mode",
        },
    },
    {
        name: "-modcacherw",
        description: "leave newly-created directories in the module cache read-write",
    },
    {
        name: "-modfile",
        description: "in module aware mode, read (and possibly write) an alternate go.mod file instead of the one in the module root directory.",
        args: {
            name: "file",
        },
    },
    {
        name: "-overlay",
        description: "read a JSON config file that provides an overlay for build operations.",
        args: {
            name: "file",
        },
    },
    {
        name: "-pkgdir",
        description: "install and load all packages from dir instead of the usual locations.",
        args: {
            name: "dir",
        },
    },
    {
        name: "-trimpath",
        description: "remove all file system paths from the resulting executable.",
    },
]);
var packagesArg = {
    name: "packages",
    variadic: true,
};
var completionSpec = {
    name: "go",
    description: "Go is a tool for managing Go source code.",
    posixNoncompliantFlags: true,
    subcommands: [
        {
            name: "bug",
            description: "start a bug report",
        },
        {
            name: "build",
            description: "compile packages and dependencies",
            options: __spreadArray([], globalOptions),
        },
        {
            name: "clean",
            description: "remove object files and cached files",
            options: __spreadArray(__spreadArray([], globalOptions), [
                {
                    name: "-i",
                    description: "remove the corresponding installed archive or binary",
                },
                {
                    name: "-r",
                    description: "apply recursively to all the dependencies of the packages named by the import paths.",
                },
                {
                    name: "-cache",
                    description: "remove the entire go build cache",
                },
                {
                    name: "-testcache",
                    description: "expire all test results in the go build cache.",
                },
                {
                    name: "-modcache",
                    description: "remove the entire module download cache, including unpacked source code of versioned dependencies.",
                },
            ]),
        },
        {
            name: "doc",
            description: "show documentation for package or symbol",
            options: [
                {
                    name: "-all",
                    description: "Show all the documentation for the package.",
                },
                {
                    name: "-c",
                    description: "Respect case when matching symbols.",
                },
                {
                    name: "-cmd",
                    description: "Treat a command (package main) like a regular package. Otherwise package main's exported symbols are hidden when showing the package's top-level documentation.",
                },
                {
                    name: "-short",
                    description: "One-line representation for each symbol.",
                },
                {
                    name: "-src",
                    description: "Show the full source code for the symbol.",
                },
                {
                    name: "-u",
                    description: "Show documentation for unexported as well as exported symbols, methods, and fields.",
                },
            ],
            args: {
                name: "package",
            },
        },
        {
            name: "env",
            description: "print Go environment information",
            options: [
                {
                    name: "-json",
                    description: "prints the environment in JSON format instead of as a shell script.",
                },
                {
                    name: "-u",
                    description: "unset the default setting for the named environment variables",
                    args: {
                        variadic: true,
                    },
                },
                {
                    name: "-w",
                    description: "change the default settings of the named environment variables to the given values.",
                    args: {
                        variadic: true,
                    },
                },
            ],
        },
        {
            name: "fix",
            description: "update packages to use new APIs",
            args: packagesArg,
        },
        {
            name: "fmt",
            description: "gofmt (reformat) package sources",
            options: [
                {
                    name: "-n",
                    description: "print the commands that would be executed",
                },
                {
                    name: "-x",
                    description: "print the commands as they are exectued",
                },
                {
                    name: "-mod",
                    description: "which module download modeto use",
                    args: {
                        name: "mode",
                        suggestions: [
                            {
                                name: "readonly",
                            },
                            {
                                name: "vendor",
                            },
                        ],
                    },
                },
            ],
            args: packagesArg,
        },
        {
            name: "generate",
            description: "generate Go files by processing source",
            options: __spreadArray(__spreadArray([], globalOptions), [
                {
                    name: "-run",
                    insertValue: '-run "{cursor}"',
                    description: "specifies a regular expression to select directives whose full original source text matches the expression.",
                },
            ]),
        },
        {
            name: "get",
            description: "add dependencies to current module and install them",
            options: __spreadArray(__spreadArray([], globalOptions), [
                {
                    name: "-t",
                    description: "modules needed to build tests of packages specified on the command line.",
                },
                {
                    name: "-u",
                    description: "update to newer minor or patch releases when available",
                },
                {
                    name: "-u=patch",
                    description: "update to newer patch releases",
                },
                {
                    name: "-insecure",
                    description: "permit fetching from insecure origins",
                },
                {
                    name: "-d",
                    description: "only update go.mod and download source code needed to build packages.",
                },
            ]),
            args: {
                name: "url",
            },
        },
        {
            name: "install",
            description: "compile and install packages and dependencies",
            options: __spreadArray([], globalOptions),
            args: {
                name: "packages",
                variadic: true,
            },
        },
        {
            name: "list",
            description: "list packages or modules",
            options: __spreadArray(__spreadArray([], globalOptions), [
                {
                    name: "-compiled",
                    description: "set CompiledGoFiles to the Go source files",
                },
                {
                    name: "-deps",
                    description: "terate over not just the named packages but also all their dependencies",
                },
                {
                    name: "-f",
                    insertValue: "-f '{cursor}'",
                    description: "specify an alternate format for te list",
                    args: {
                        name: "format",
                    },
                },
                {
                    name: "-e",
                    description: "processes the erroneous packages with the usual printing",
                },
                {
                    name: "-export",
                    description: "set the Export field to the name of a file containing up-to-date export information for the given package.",
                },
                {
                    name: "-find",
                    description: "identify the named packages but not resolve their dependencies",
                },
                {
                    name: "-test",
                    description: "report test binaries",
                },
                {
                    name: "-m",
                    description: "list modules instead of packages",
                },
                {
                    name: "-u",
                    description: "add information about available upgrades",
                },
                {
                    name: "-versions",
                    description: "set the Module's Versions field to a list of all known versions of that module",
                },
                {
                    name: "-retracted",
                    description: "eport information about retracted module versions",
                },
            ]),
            args: {
                isOptional: true,
            },
        },
        {
            name: "mod",
            description: "module maintenance",
            subcommands: [
                {
                    name: "download",
                    description: "download the named modules into the module cache",
                    options: [
                        {
                            name: "-json",
                            description: "print a sequence of JSON objects to standard output, describing each downloaded module (or failure)",
                        },
                        {
                            name: "-x",
                            description: " print the commands download executes to standard error.",
                        },
                    ],
                    args: {
                        name: "modules",
                        variadic: true,
                    },
                },
                {
                    name: "edit",
                    description: "edit and format go.mod files",
                    options: [
                        {
                            name: "-module",
                            description: "change the module's path",
                        },
                        {
                            name: "-go",
                            insertValue: "-go=",
                            description: "set the expected Go language version",
                            args: {
                                name: "version",
                            },
                        },
                        {
                            name: "-require",
                            insertValue: "-require=",
                            description: "add a requirement on the given module",
                            args: {
                                name: "path",
                            },
                        },
                        {
                            name: "-droprequire",
                            insertValue: "-droprequire=",
                            description: "drop a requirement on the given module",
                            args: {
                                name: "path",
                            },
                        },
                        {
                            name: "-exclude",
                            insertValue: "-exclude=",
                            description: "add an exclusion on the given module",
                            args: {
                                name: "path",
                            },
                        },
                        {
                            name: "-dropexclude",
                            insertValue: "-dropexclude=",
                            description: "drop an exclusion on the given module",
                            args: {
                                name: "path",
                            },
                        },
                        {
                            name: "-replace",
                            insertValue: "-replace=",
                            description: "add a replacement of the given module path and version pair",
                            args: {
                                name: "path",
                            },
                        },
                        {
                            name: "-dropreplace",
                            insertValue: "-dropreplace=",
                            description: "drops a replacement of the given module path and version pair",
                            args: {
                                name: "path",
                            },
                        },
                        {
                            name: "-retract",
                            insertValue: "-retract=",
                            description: "add a retraction for the given version",
                            args: {
                                name: "version",
                            },
                        },
                        {
                            name: "-dropretract",
                            insertValue: "-dropretract=",
                            description: "drop a retraction for the given version",
                            args: {
                                name: "version",
                            },
                        },
                        {
                            name: "-fmt",
                            description: "format the go.mod file without making other changes",
                        },
                        {
                            name: "-print",
                            description: "print the final go.mod in its text format instead of writing it back to disk",
                        },
                        {
                            name: "-json",
                            description: " print the final go.mod in JSON format instead of writing it back to disk in text forma",
                        },
                    ],
                },
                {
                    name: "graph",
                    description: "print the module requirement graph",
                },
                {
                    name: "init",
                    description: "initialize and write a new go.mod file in the current directory",
                    args: {
                        name: "module path",
                        isOptional: true,
                    },
                },
                {
                    name: "tidy",
                    description: "ensure that the go.mod file matches the source code in the module",
                    options: [
                        {
                            name: "-e",
                            description: "attempt to proceed despite errors encountered while loading packages",
                        },
                        {
                            name: "-v",
                            description: "print information about removed modules",
                        },
                    ],
                },
                {
                    name: "vendor",
                    description: "construct a directory named vendor in the main module's root directory",
                    options: [
                        {
                            name: "-e",
                            description: "attempt to proceed despite errors encountered while loading packages",
                        },
                        {
                            name: "-v",
                            description: "print information about removed modules",
                        },
                    ],
                },
                {
                    name: "verify",
                    description: "check that dependencies of the main module stored in the module cache have not been modified since they were downloaded",
                },
                {
                    name: "why",
                    description: "show a shortest path in the import graph from the main module to each of the listed packages",
                    options: [
                        {
                            name: "-m",
                            description: "treat its arguments as a list of modules",
                        },
                        {
                            name: "-vendor",
                            description: "ignore imports in tests of packages outside the main module ",
                        },
                    ],
                    args: {
                        name: "packages",
                        variadic: true,
                    },
                },
            ],
        },
        {
            name: "run",
            description: "compile and run Go program",
            options: __spreadArray(__spreadArray([], globalOptions), [
                {
                    name: "-exec",
                    description: "invoke the binary using xprog",
                    args: {},
                },
            ]),
            args: {
                name: "package",
            },
        },
        {
            name: "test",
            description: "test packages",
            options: __spreadArray(__spreadArray([], globalOptions), [
                {
                    name: "-args",
                    description: "pass the remainder of the command line to the test binary",
                    args: {
                        variadic: true,
                    },
                },
                {
                    name: "-c",
                    description: "compile the test binary to pkg.test but do not run it",
                },
                {
                    name: "-exec",
                    description: "invoke the binary using xprog",
                    args: {},
                },
                {
                    name: "-i",
                    description: "install packages that are dependencies of the test.",
                },
                {
                    name: "-json",
                    description: "convert test output to JSON suitable",
                },
                {
                    name: "-o",
                    description: " Compile the test binary to the named file",
                    args: {
                        name: "file",
                    },
                },
            ]),
        },
        {
            name: "tool",
            description: "run specified go tool",
            options: [
                {
                    name: "-n",
                    description: "print the command that would be executed but not execute it",
                },
            ],
            args: {
                name: "tool",
                generators: {
                    script: "go tool",
                    splitOn: "\n",
                },
            },
        },
        {
            name: "version",
            description: "print Go version",
            options: [
                {
                    name: "-m",
                    description: "print each executable's embedded module version information",
                },
                {
                    name: "-v",
                    description: "report unrecognized files",
                },
            ],
            args: {
                name: "file",
                isOptional: true,
            },
        },
        {
            name: "vet",
            description: "report likely mistakes in packages",
            options: __spreadArray(__spreadArray([], resolutionAndExecutionOptions), [
                {
                    name: "-vettool",
                    insertValue: "-vettool=",
                    description: "select a different analysis tool with alternative or additional checks",
                    args: {
                        name: "tool",
                    },
                },
            ]),
            args: {
                name: "package",
                isOptional: true,
            },
        },
    ],
};

