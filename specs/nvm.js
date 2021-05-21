var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// args
var version = {
    name: "version",
    description: "node version",
    suggestions: [
        {
            name: "node",
            description: "the latest version of node",
        },
        {
            name: "iojs",
            description: "the latest version of io.js",
        },
        {
            name: "system",
            description: "system-installed version of node",
        },
    ],
};
var command = {
    name: "command",
    variadic: true,
};
var args = {
    name: "args",
    variadic: true,
};
var pattern = {
    name: "pattern",
};
var name = {
    name: "name",
};
var ltsName = {
    name: "LTS name",
};
var colorCodes = {
    name: "color codes",
    description: 'using format "yMeBg"',
};
// options
var noColors = {
    name: "--no-colors",
    description: "Suppress colored output",
};
var noAlias = {
    name: "--no-alias",
    description: "Suppress `nvm alias` output",
};
var silent = {
    name: "--silent",
    description: "Silences stdout/stderr output",
};
var lts = {
    name: "--lts",
    description: "Uses automatic LTS (long-term support) alias `lts/*`, if available.",
};
var ltsWithName = {
    name: "--lts",
    description: "Uses automatic alias for provided LTS line, if available.",
    args: [ltsName],
};
var completionSpec = {
    name: "nvm",
    description: "Node Package Manager",
    subcommands: [
        {
            name: "install",
            description: "Download and install a <version>. Uses .nvmrc if available and version is omitted.",
            args: [__assign(__assign({}, version), { isOptional: true })],
            options: [
                {
                    name: "-s",
                    description: "Skip binary download, install from source only.",
                },
                {
                    name: "--reinstall-packages-from",
                    description: "When installing, reinstall packages installed in <version>",
                    args: [version],
                },
                __assign(__assign({}, lts), { description: "When installing, only select from LTS (long-term support) versions" }),
                __assign(__assign({}, ltsWithName), { description: "When installing, only select from versions for a specific LTS line" }),
                {
                    name: "--skip-default-packages",
                    description: "When installing, skip the default-packages file if it exists",
                },
                {
                    name: "--latest-npm",
                    description: "After installing, attempt to upgrade to the latest working npm on the given node version",
                },
                {
                    name: "--no-progress",
                    description: "Disable the progress bar on any downloads",
                },
                {
                    name: "--alias",
                    description: "After installing, set the alias specified to the version specified. (same as: nvm alias <name> <version>)",
                    args: [name],
                },
                {
                    name: "--default",
                    description: "After installing, set default alias to the version specified. (same as: nvm alias default <version>)",
                },
            ],
        },
        {
            name: "uninstall",
            description: "Uninstall a version",
            args: [version],
            options: [
                __assign(__assign({}, lts), { description: "Uninstall using automatic LTS (long-term support) alias `lts/*`, if available." }),
                __assign(__assign({}, ltsWithName), { description: "Uninstall using automatic alias for provided LTS line, if available." }),
            ],
        },
        {
            name: "use",
            description: "Modify PATH to use <version>. Uses .nvmrc if available and version is omitted.",
            args: [__assign(__assign({}, version), { isOptional: true })],
            options: [silent, lts, ltsWithName],
        },
        {
            name: "exec",
            description: "Run <command> on <version>. Uses .nvmrc if available and version is omitted.",
            args: [__assign(__assign({}, version), { isOptional: true }), command],
            options: [silent, lts, ltsWithName],
        },
        {
            name: "run",
            description: "Run `node` on <version> with <args> as arguments. Uses .nvmrc if available and version is omitted.",
            args: [__assign(__assign({}, version), { isOptional: true }), args],
            options: [silent, lts, ltsWithName],
        },
        {
            name: "current",
            description: "Display currently activated version of Node",
        },
        {
            name: "ls",
            description: "List installed versions, matching a given <version> if provided",
            args: [version],
            options: [noColors, noAlias],
        },
        {
            name: "ls-remote",
            description: "List remote versions available for install, matching a given <version> if provided",
            args: [version],
            options: [
                __assign(__assign({}, lts), { description: "When listing, only show LTS (long-term support) versions" }),
                __assign(__assign({}, ltsWithName), { description: "When listing, only show versions for a specific LTS line" }),
                noColors,
            ],
        },
        {
            name: "version",
            description: "Resolve the given description to a single local version",
            args: [version],
        },
        {
            name: "version-remote",
            description: "Resolve the given description to a single remote version",
            args: [version],
            options: [
                __assign(__assign({}, lts), { description: "When listing, only show LTS (long-term support) versions" }),
                __assign(__assign({}, ltsWithName), { description: "When listing, only show versions for a specific LTS line" }),
            ],
        },
        {
            name: "deactivate",
            description: "Undo effects of `nvm` on current shell",
            options: [silent],
        },
        {
            name: "alias",
            description: "Show all aliases beginning with <pattern> or Set an alias named <name> pointing to <version>",
            args: [
                {
                    name: "pattern or name",
                    description: "pattern or name",
                },
                {
                    name: "version",
                    isOptional: true,
                },
            ],
        },
        {
            name: "unalias",
            description: "Deletes the alias named <name>",
            args: [name],
        },
        {
            name: "install-latest-npm",
            description: "Attempt to upgrade to the latest working `npm` on the current node version",
        },
        {
            name: "reinstall-packages",
            description: "Reinstall global `npm` packages contained in <version> to current version",
            args: [version],
        },
        {
            name: "unload",
            description: "Unload `nvm` from shell",
        },
        {
            name: "which",
            description: "Display path to installed node version. Uses .nvmrc if available and version is omitted.",
            args: [__assign(__assign({}, version), { isOptional: true })],
            subcommands: [
                {
                    name: "current",
                },
            ],
            options: [
                __assign(__assign({}, silent), { description: "Silences stdout/stderr output when a version is omitted" }),
            ],
        },
        {
            name: "cache",
            args: {
                suggestions: [
                    {
                        name: "dir",
                        description: "Display path to the cache directory for nvm",
                        type: "subcommand",
                    },
                    {
                        name: "clear",
                        description: "Empty cache directory for nvm",
                        type: "subcommand",
                    },
                ],
            },
        },
        {
            name: "set-colors",
            description: 'Set five text colors using format "yMeBg". Available when supported.',
            args: [colorCodes],
        },
    ],
    options: [
        {
            name: "--help",
            description: "Show help page",
        },
        {
            name: "--version",
            description: "Print out the installed version of nvm",
        },
        noColors,
    ],
};

