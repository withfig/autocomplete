type PostProcessFn = (out: string, context: string[]) => Fig.Suggestion[];

type PostProcessWorkspaceFn = (
  filterFn: (projectName: string, index: number, array: string[]) => boolean
) => PostProcessFn;

interface NxGenerators {
  apps: Fig.Generator;
  e2eApps: Fig.Generator;
  appsAndLibs: Fig.Generator;
  localSchematics: Fig.Generator;
  localGenerators: Fig.Generator;
  installedPlugins: Fig.Generator;
  pluginsSchematics: Fig.Generator;
}

const processWorkspaceJson: PostProcessWorkspaceFn = (filterFn) => (out) => {
  try {
    const workspace = JSON.parse(out);
    return Object.keys(workspace.projects)
      .filter(filterFn)
      .map((suggestion) => ({
        name: suggestion,
        type: "option",
      }));
  } catch (err) {
    return [];
  }
};

const processGenerators: PostProcessFn = function (out) {
  return out
    .split("\n")
    .map((line) => line.split(" ").pop())
    .map((suggestion) => ({
      name: suggestion,
      type: "option",
    }));
};

const oneDayCache: Fig.Cache = {
  ttl: 60 * 60 * 24,
};

const nxGenerators: NxGenerators = {
  apps: {
    script: "cat workspace.json",
    postProcess: processWorkspaceJson(
      (projectName, _, projects) =>
        projects[projectName].projectType === "application" &&
        !projectName.endsWith("-e2e")
    ),
  },
  e2eApps: {
    script: "cat workspace.json",
    postProcess: processWorkspaceJson(
      (projectName, _, projects) =>
        projects[projectName].projectType === "application" &&
        projectName.endsWith("-e2e")
    ),
  },
  appsAndLibs: {
    script: "cat workspace.json",
    postProcess: processWorkspaceJson(() => true),
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
        const fullList = out.split(">");
        const plugins = fullList[1].split("\n").filter(Boolean);
        plugins.shift();
        return plugins
          .map((pluginEntry) => pluginEntry.trim().split(" ")[0])
          .map((suggestion) => ({
            name: suggestion,
            type: "option",
          }));
      }
    },
  },
  pluginsSchematics: {
    script: (context) => {
      const argument = context.slice(-1)[0];
      if (argument.indexOf(":") > -1) {
        return `nx list ${argument.split(":")[0]}`;
      } else {
        return "nx list";
      }
    },
    trigger: ":",
    cache: oneDayCache,
    postProcess: function (out, context) {
      if (out.indexOf("Installed plugins") > -1) {
        const fullList = out.split(">");
        const plugins = fullList[1].split("\n").filter(Boolean);
        plugins.shift();
        return plugins
          .map((pluginEntry) => pluginEntry.trim().split(" ")[0])
          .map((suggestion) => ({
            name: suggestion,
            type: "option",
          }));
      } else if (out.indexOf("Capabilities") > -1) {
        const pluginArg = context.slice(-1)[0];
        const lines = out.split("\n");
        return lines
          .filter((line) => line.trim().indexOf(" : ") > -1)
          .map((line) => pluginArg + line.trim().split(" : ")[0])
          .map((suggestion) => ({
            name: suggestion,
            type: "option",
          }));
      }
    },
  },
};

const defaultOptions: Fig.Option[] = [
  {
    name: "--help",
    description: "Show help",
  },
  {
    name: "--version",
    description: "Show version number",
  },
];

const affectedOptions: Fig.Option[] = [
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
    description:
      "This is the configuration to use when performing tasks on projects",
  },
  {
    name: "--exclude",
    args: {},
    description: "Exclude certain projects from being processed",
  },
  {
    name: "--files",
    args: {},
    description:
      "Change the way Nx is calculating the affected command by providing directly changed files, list of files delimited by commas",
  },
  {
    name: "--head",
    args: {},
    description: "Latest commit of the current branch (usually HEAD)",
  },
  {
    name: "--maxParallel",
    args: { suggestions: ["3"] },
    description:
      "Max number of parallel processes. This flag is ignored if the parallel option is set to false. (default: 3)",
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
    description:
      "Rerun the tasks even when the results are available in the cache",
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

export const completionSpec: Fig.Spec = {
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
      options: [
        {
          name: "--allowedHosts",
          args: {},
          description:
            "This option allows you to whitelist services that are allowed to access the dev server.",
        },
        {
          name: "--host",
          args: { suggestions: ["localhost"] },
          description: "Host to listen on (default: localhost)",
        },
        {
          name: "--liveReload",
          args: { suggestions: ["true", "false"] },
          description:
            "Whether to reload the page on change, using live-reload.",
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
          description:
            "Watches for changes and rebuilds application (default: true)",
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
        },
        ...defaultOptions,
      ],
    },
    {
      name: "test",
      description: "test an Nx app or lib",
      args: {
        generators: nxGenerators.appsAndLibs,
        name: "app/lib",
      },
      options: [...defaultOptions],
    },
    {
      name: "e2e",
      description: "run e2e tests for an Nx app",
      args: {
        generators: nxGenerators.e2eApps,
        name: "app",
      },
      options: [...defaultOptions],
    },
    {
      name: "lint",
      description: "lint an Nx app or lib",
      args: {
        generators: nxGenerators.appsAndLibs,
        name: "app/lib",
      },
      options: [...defaultOptions],
    },
    {
      name: "workspace-schematic",
      description: "Run a workspace schematic",
      args: {
        generators: nxGenerators.localSchematics,
        name: "schematic",
      },
      options: [
        {
          name: "--list-schematics",
          description: "List the available workspace-schematics",
        },
        ...defaultOptions,
      ],
    },
    {
      name: "workspace-generator",
      description: "Run a workspace generator",
      args: {
        generators: nxGenerators.localGenerators,
        name: "generator",
      },
      options: [
        {
          name: "--list-generators",
          description: "List the available workspace-generators",
        },
        ...defaultOptions,
      ],
    },
    {
      name: "generate",
      description: "run a generator",
      args: {
        generators: nxGenerators.pluginsSchematics,
        name: "collection:generator",
      },
      options: [
        {
          name: ["--defaults"],
          args: [{ name: "true" }, { name: "false" }],
          description:
            "when true, disables interactive input prompts for options with a default {true|false}",
        },
        {
          name: ["--dryRun"],
          args: [{ name: "true" }, { name: "false" }],
          description:
            "when true, runs the generator without making actual changes {true|false}",
        },
        {
          name: ["--force"],
          args: [{ name: "true" }, { name: "false" }],
          description:
            "when true, forces overwriting of existing files {true|false}",
        },
        {
          name: ["--interactive"],
          args: [{ name: "true" }, { name: "false" }],
          description:
            "when false, disables interactive input prompts {true|false}",
        },
        ...defaultOptions,
      ],
    },
    {
      name: "dep-graph",
      options: [
        {
          name: "--exclude",
          args: {},
          description:
            "List of projects delimited by commas to exclude from the dependency graph.",
        },
        {
          name: "--file",
          args: {},
          description:
            "output file (e.g. --file=output.json or --file=dep-graph.html)",
        },
        {
          name: "--focus",
          args: {},
          description:
            "Use to show the dependency graph for a particular project and every node that is either an ancestor or a descendant.",
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
        },
        ...defaultOptions,
      ],
    },
    { name: "affected", options: [...affectedOptions, ...defaultOptions] },
    {
      name: "affected:build",
      options: [...affectedOptions, ...defaultOptions],
    },
    {
      name: "affected:serve",
      options: [...affectedOptions, ...defaultOptions],
    },
    { name: "affected:test", options: [...affectedOptions, ...defaultOptions] },
    { name: "affected:e2e", options: [...affectedOptions, ...defaultOptions] },
    { name: "affected:lint", options: [...affectedOptions, ...defaultOptions] },
    {
      name: "affected:dep-graph",
      options: [...affectedOptions, ...defaultOptions],
    },
    { name: "affected:apps", options: [...affectedOptions, ...defaultOptions] },
    { name: "affected:libs", options: [...affectedOptions, ...defaultOptions] },
    {
      name: "report",
      options: [...defaultOptions],
    },
    {
      name: "workspace-lint",
      options: [...defaultOptions],
    },
    {
      name: "connect-lint",
      options: [...defaultOptions],
    },
    {
      name: "list",
      args: {
        generators: [nxGenerators.installedPlugins],
        description: "The name of an installed plugin to query",
      },
      options: [...defaultOptions],
    },
  ],
};
