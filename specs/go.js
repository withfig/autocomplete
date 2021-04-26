var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var globalOptions = [
    {
        name: "-a",
        description: "force rebuilding of packages that are already up-to-date.",
    },
    {
        name: "-n",
        description: "print the commands but do not run them.",
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
        name: "-v",
        description: "print the names of packages as they are compiled.",
    },
    {
        name: "-work",
        description: "print the name of the temporary work directory and\n    do not delete it when exiting.",
    },
    {
        name: "-x",
        description: "print the commands.",
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
        name: "-pkgdir dir",
        description: "install and load all packages from dir instead of the usual locations.",
        args: {
            name: "dir",
        },
    },
    {
        name: "-tags",
        description: "a comma-separated list of build tags to consider satisfied during the build.",
        args: {
            name: "tags",
        },
    },
    {
        name: "-trimpath",
        description: "remove all file system paths from the resulting executable.",
    },
    {
        name: "-toolexec 'cmd args'",
        insertValue: "-toolexec '{cursor}'",
        description: "a program to use to invoke toolchain programs like vet and asm.",
        args: {
            name: "cmd",
        },
    },
];
var packagesArg = {
    name: "packages",
    variadic: true,
};
var completionSpec = {
    name: "go",
    description: "Go is a tool for managing Go source code.",
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
        },
        {
            name: "get",
            description: "add dependencies to current module and install them",
            options: __spreadArray([], globalOptions),
        },
        {
            name: "install",
            description: "compile and install packages and dependencies",
            options: __spreadArray([], globalOptions),
        },
        {
            name: "list",
            description: "list packages or modules",
            options: __spreadArray([], globalOptions),
        },
        {
            name: "mod",
            description: "module maintenance",
        },
        {
            name: "run",
            description: "compile and run Go program",
            options: __spreadArray([], globalOptions),
        },
        {
            name: "test",
            description: "test packages",
        },
        {
            name: "tool",
            description: "run specified go tool",
        },
        {
            name: "version",
            description: "print Go version",
        },
        {
            name: "vet",
            description: "report likely mistakes in packages",
        },
    ],
};

