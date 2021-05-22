var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var processWorkspaceJson = function (filterFn) { return function (out) {
    try {
        var workspace = JSON.parse(out);
        return Object.entries(workspace.projects)
            .filter(filterFn)
            .map(function (_a) {
            var projectName = _a[0];
            return projectName;
        })
            .map(function (suggestion) { return ({
            name: suggestion,
            type: "option",
        }); });
    }
    catch (err) {
        console.log(err);
        return [];
    }
}; };
var processGenerators = function (out) {
    return out
        .split("\n")
        .map(function (line) { return line.split(" ").pop(); })
        .map(function (suggestion) { return ({
        name: suggestion,
        type: "option",
    }); });
};
var oneDayCache = {
    ttl: 60 * 60 * 24,
};
var nxGenerators = {
    apps: {
        script: "cat workspace.json",
        postProcess: processWorkspaceJson(function (_a, _, projects) {
            var projectName = _a[0], project = _a[1];
            return project.projectType === "application" && !projectName.endsWith("-e2e");
        }),
    },
    e2eApps: {
        script: "cat workspace.json",
        postProcess: processWorkspaceJson(function (_a, _, projects) {
            var projectName = _a[0], project = _a[1];
            return project.projectType === "application" && projectName.endsWith("-e2e");
        }),
    },
    appsAndLibs: {
        script: "cat workspace.json",
        postProcess: processWorkspaceJson(function () { return true; }),
    },
    localSchematics: {
        script: "ls tools/schematics",
        cache: oneDayCache,
        postProcess: processGenerators,
    },
    localGenerators: {
        script: "ls tools/generators",
        cache: oneDayCache,
        postProcess: processGenerators,
    },
    installedPlugins: {
        script: "nx list",
        cache: oneDayCache,
        postProcess: function (out) {
            if (out.indexOf("Installed plugins") > -1) {
                var fullList = out.split(">");
                var plugins = fullList[1].split("\n").filter(Boolean);
                plugins.shift();
                return plugins
                    .map(function (pluginEntry) { return pluginEntry.trim().split(" ")[0]; })
                    .map(function (suggestion) { return ({
                    name: suggestion,
                    type: "option",
                }); });
            }
        },
    },
    pluginsSchematics: {
        script: function (context) {
            var argument = context.slice(-1)[0];
            if (argument.indexOf(":") > -1) {
                return "nx list " + argument.split(":")[0];
            }
            else {
                return "nx list";
            }
        },
        trigger: ":",
        cache: oneDayCache,
        postProcess: function (out, context) {
            if (out.indexOf("Installed plugins") > -1) {
                var fullList = out.split(">");
                var plugins = fullList[1].split("\n").filter(Boolean);
                plugins.shift();
                return plugins
                    .map(function (pluginEntry) { return pluginEntry.trim().split(" ")[0]; })
                    .map(function (suggestion) { return ({
                    name: suggestion,
                    type: "option",
                }); });
            }
            else if (out.indexOf("Capabilities") > -1) {
                var pluginArg_1 = context.slice(-1)[0];
                var lines = out.split("\n");
                return lines
                    .filter(function (line) { return line.trim().indexOf(" : ") > -1; })
                    .map(function (line) { return pluginArg_1 + line.trim().split(" : ")[0]; })
                    .map(function (suggestion) { return ({
                    name: suggestion,
                    type: "option",
                }); });
            }
        },
    },
};
var defaultOptions = [
    {
        name: "--help",
        description: "Show help",
    },
    {
        name: "--version",
        description: "Show version number",
    },
];
var affectedOptions = [
    {
        name: "--all",
        description: "All projects",
    },
    {
        name: "--base",
        args: {},
        description: "Base of the current branch (usually master)",
    },
    {
        name: "--configuration",
        args: {},
        description: "This is the configuration to use when performing tasks on projects",
    },
    {
        name: "--exclude",
        args: {},
        description: "Exclude certain projects from being processed",
    },
    {
        name: "--files",
        args: {},
        description: "Change the way Nx is calculating the affected command by providing directly changed files, list of files delimited by commas",
    },
    {
        name: "--head",
        args: {},
        description: "Latest commit of the current branch (usually HEAD)",
    },
    {
        name: "--maxParallel",
        args: { suggestions: ["3"] },
        description: "Max number of parallel processes. This flag is ignored if the parallel option is set to false. (default: 3)",
    },
    {
        name: "--only-failed",
        description: "Isolate projects which previously failed",
    },
    {
        name: "--parallel",
        args: { suggestions: ["false", "true"] },
        description: "Parallelize the command (default: false)",
    },
    {
        name: "--runner",
        args: {},
        description: "This is the name of the tasks runner configured in nx.json",
    },
    {
        name: "--skip-nx-cache",
        description: "Rerun the tasks even when the results are available in the cache",
    },
    {
        name: "--target",
        args: {},
        description: "Task to run for affected projects",
    },
    {
        name: "--uncommitted",
        description: "Uncommitted changes",
    },
    {
        name: "--untracked",
        description: "Untracked changes",
    },
    {
        name: "--verbose",
        description: "Print additional error stack trace on failure",
    },
];
var completionSpec = {
    name: "nx",
    description: "fig completions for Nx by Nrwl",
    subcommands: [
        {
            name: "build",
            description: "build an Nx app",
            args: {
                generators: nxGenerators.apps,
                name: "app",
            },
        },
        {
            name: "serve",
            description: "serve an Nx app",
            args: {
                generators: nxGenerators.apps,
                name: "app",
            },
            options: __spreadArray([
                {
                    name: "--allowedHosts",
                    args: {},
                    description: "This option allows you to whitelist services that are allowed to access the dev server.",
                },
                {
                    name: "--host",
                    args: { suggestions: ["localhost"] },
                    description: "Host to listen on (default: localhost)",
                },
                {
                    name: "--liveReload",
                    args: { suggestions: ["true", "false"] },
                    description: "Whether to reload the page on change, using live-reload.",
                },
                {
                    name: ["--open", "-o"],
                    description: "Open the application in the browser",
                },
                {
                    name: "--port",
                    args: { suggestions: ["4200"] },
                    description: "Port to listen on (default: 4200)",
                },
                {
                    name: "--publicHost",
                    description: "Public URL where the application will be served",
                },
                {
                    name: "--ssl",
                    args: { suggestions: ["true", "false"] },
                    description: "Serve using HTTPS.",
                },
                {
                    name: "--sslKey",
                    args: {},
                    description: "SSL key to use for serving HTTPS.",
                },
                {
                    name: "--sslCert",
                    args: {},
                    description: "SSL certificate to use for serving HTTPS.",
                },
                {
                    name: "--watch",
                    args: { suggestions: ["true", "false"] },
                    description: "Watches for changes and rebuilds application (default: true)",
                },
                {
                    name: "--buildTarget",
                    args: {},
                    description: "Target which builds the application",
                },
                {
                    name: "--memoryLimit",
                    args: {},
                    description: "Memory limit for type checking service process in MB.",
                },
                {
                    name: "--maxWorkers",
                    args: {},
                    description: "Number of workers to use for type checking.",
                }
            ], defaultOptions),
        },
        {
            name: "test",
            description: "test an Nx app or lib",
            args: {
                generators: nxGenerators.appsAndLibs,
                name: "app/lib",
            },
            options: __spreadArray([], defaultOptions),
        },
        {
            name: "e2e",
            description: "run e2e tests for an Nx app",
            args: {
                generators: nxGenerators.e2eApps,
                name: "app",
            },
            options: __spreadArray([], defaultOptions),
        },
        {
            name: "lint",
            description: "lint an Nx app or lib",
            args: {
                generators: nxGenerators.appsAndLibs,
                name: "app/lib",
            },
            options: __spreadArray([], defaultOptions),
        },
        {
            name: "workspace-schematic",
            description: "Run a workspace schematic",
            args: {
                generators: nxGenerators.localSchematics,
                name: "schematic",
            },
            options: __spreadArray([
                {
                    name: "--list-schematics",
                    description: "List the available workspace-schematics",
                }
            ], defaultOptions),
        },
        {
            name: "workspace-generator",
            description: "Run a workspace generator",
            args: {
                generators: nxGenerators.localGenerators,
                name: "generator",
            },
            options: __spreadArray([
                {
                    name: "--list-generators",
                    description: "List the available workspace-generators",
                }
            ], defaultOptions),
        },
        {
            name: "generate",
            description: "run a generator",
            args: {
                generators: nxGenerators.pluginsSchematics,
                name: "collection:generator",
            },
            options: __spreadArray([
                {
                    name: ["--defaults"],
                    args: [{ name: "true" }, { name: "false" }],
                    description: "when true, disables interactive input prompts for options with a default {true|false}",
                },
                {
                    name: ["--dryRun"],
                    args: [{ name: "true" }, { name: "false" }],
                    description: "when true, runs the generator without making actual changes {true|false}",
                },
                {
                    name: ["--force"],
                    args: [{ name: "true" }, { name: "false" }],
                    description: "when true, forces overwriting of existing files {true|false}",
                },
                {
                    name: ["--interactive"],
                    args: [{ name: "true" }, { name: "false" }],
                    description: "when false, disables interactive input prompts {true|false}",
                }
            ], defaultOptions),
        },
        {
            name: "dep-graph",
            options: __spreadArray([
                {
                    name: "--exclude",
                    args: {},
                    description: "List of projects delimited by commas to exclude from the dependency graph.",
                },
                {
                    name: "--file",
                    args: {},
                    description: "output file (e.g. --file=output.json or --file=dep-graph.html)",
                },
                {
                    name: "--focus",
                    args: {},
                    description: "Use to show the dependency graph for a particular project and every node that is either an ancestor or a descendant.",
                },
                {
                    name: "--groupByFolder",
                    description: "Group projects by folder in dependency graph",
                },
                {
                    name: "--host",
                    args: {},
                    description: "Bind the dep graph server to a specific ip address.",
                },
                {
                    name: "--port",
                    args: {},
                    description: "Bind the dep graph server to a specific port.",
                }
            ], defaultOptions),
        },
        { name: "affected", options: __spreadArray(__spreadArray([], affectedOptions), defaultOptions) },
        {
            name: "affected:build",
            options: __spreadArray(__spreadArray([], affectedOptions), defaultOptions),
        },
        {
            name: "affected:serve",
            options: __spreadArray(__spreadArray([], affectedOptions), defaultOptions),
        },
        { name: "affected:test", options: __spreadArray(__spreadArray([], affectedOptions), defaultOptions) },
        { name: "affected:e2e", options: __spreadArray(__spreadArray([], affectedOptions), defaultOptions) },
        { name: "affected:lint", options: __spreadArray(__spreadArray([], affectedOptions), defaultOptions) },
        {
            name: "affected:dep-graph",
            options: __spreadArray(__spreadArray([], affectedOptions), defaultOptions),
        },
        { name: "affected:apps", options: __spreadArray(__spreadArray([], affectedOptions), defaultOptions) },
        { name: "affected:libs", options: __spreadArray(__spreadArray([], affectedOptions), defaultOptions) },
        {
            name: "report",
            options: __spreadArray([], defaultOptions),
        },
        {
            name: "workspace-lint",
            options: __spreadArray([], defaultOptions),
        },
        {
            name: "connect-lint",
            options: __spreadArray([], defaultOptions),
        },
        {
            name: "list",
            args: {
                generators: [nxGenerators.installedPlugins],
                description: "The name of an installed plugin to query",
            },
            options: __spreadArray([], defaultOptions),
        },
    ],
};

