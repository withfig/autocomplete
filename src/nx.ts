// Docs - https://nx.dev/packages/nx/documents

interface NxWorkspace {
  projects: {
    [key: string]: NxProject;
  };
}

interface NxProject {
  name: string;
  targets: {
    [key: string]: {
      configurations: {
        [key: string]: unknown;
      };
    };
  };
}

interface NxGenerators {
  configuration: Fig.Generator;
  generate: Fig.Generator;
  list: Fig.Generator;
  project: Fig.Generator;
  projects: Fig.Generator;
  run: Fig.Generator;
  targets: Fig.Generator;
  workspaceGenerator: Fig.Generator;
}

interface NxOptions {
  all: Fig.Option;
  base: Fig.Option;
  commitPrefix: Fig.Option;
  configuration: Fig.Option;
  createCommits: Fig.Option;
  defaults: Fig.Option;
  dryRun: Fig.Option;
  exclude: Fig.Option;
  excludeAppliedMigrations: Fig.Option;
  file: Fig.Option;
  files: Fig.Option;
  focus: Fig.Option;
  force: Fig.Option;
  from: Fig.Option;
  graph: Fig.Option;
  groupByFolder: Fig.Option;
  head: Fig.Option;
  help: Fig.Option;
  host: Fig.Option;
  ifExists: Fig.Option;
  includeDependentProjects: Fig.Option;
  interactive: Fig.Option;
  libsAndApps: Fig.Option;
  listGenerators: Fig.Option;
  nxBail: Fig.Option;
  nxIgnoreCycles: Fig.Option;
  open: Fig.Option;
  outputStyle: Fig.Option;
  parallel: Fig.Option;
  port: Fig.Option;
  project: Fig.Option;
  projects: Fig.Option;
  runMigrations: Fig.Option;
  runner: Fig.Option;
  select: Fig.Option;
  skipNxCache: Fig.Option;
  start: Fig.Option;
  stop: Fig.Option;
  targets: Fig.Option;
  to: Fig.Option;
  type: Fig.Option;
  uncommitted: Fig.Option;
  untracked: Fig.Option;
  verbose: Fig.Option;
  version: Fig.Option;
  view: Fig.Option;
  watch: Fig.Option;
}

const oneDayCache: Fig.Cache = {
  strategy: "max-age",
  ttl: 60 * 60 * 24,
  cacheByDirectory: true,
};

let nxProjectPathCache: string[] = [];
let nxWorkspaceJsonCache: NxWorkspace;
const nxProjectPathWithJsonCache = new Map<string, NxProject>();
const nxProjectWithTargetsCache = new Map<string, string[]>();
const nxProjectTargetWithConfigurationsCache = new Map<string, string[]>();
const nxTargetWithProjectsCache = new Map<string, string[]>();

const fillProjectCaches = (projectJson: NxProject) => {
  if (!nxProjectWithTargetsCache.has(projectJson.name)) {
    const projectTargets: string[] = [];

    for (const target in projectJson.targets) {
      projectTargets.push(target);

      const projectTargetConfigurations: string[] = [];

      for (const configuration in projectJson.targets[target].configurations) {
        projectTargetConfigurations.push(configuration);
      }

      nxProjectTargetWithConfigurationsCache.set(
        `${projectJson.name}:${target}`,
        projectTargetConfigurations
      );
    }

    nxProjectWithTargetsCache.set(projectJson.name, projectTargets);

    for (const target of projectTargets) {
      const projects = nxTargetWithProjectsCache.get(target) || [];
      projects.push(projectJson.name);
      nxTargetWithProjectsCache.set(target, projects);
    }
  }
};

const preProcessProjects = async (
  executeShellCommand: Fig.ExecuteCommandFunction
) => {
  if (!nxProjectPathCache.length) {
    // get project json paths
    try {
      const { appsDir, libsDir }: { appsDir: string; libsDir: string } = {
        appsDir: "apps",
        libsDir: "libs",
        ...JSON.parse(
          (
            await executeShellCommand({
              command: "cat",
              // eslint-disable-next-line @withfig/fig-linter/no-useless-arrays
              args: ["nx.json"],
            })
          ).stdout
        ).workspaceLayout,
      };
      const searchFolders =
        appsDir === libsDir ? [appsDir] : [appsDir, libsDir];

      nxProjectPathCache = (
        await executeShellCommand({
          command: "find",
          args: [...searchFolders, "-name", "project.json"],
        })
      ).stdout
        .split("\n")
        .filter((path) => !!path);
    } catch (error) {
      console.log(error);
    }
  }

  for (const projectJsonPath of nxProjectPathCache) {
    let projectJson = nxProjectPathWithJsonCache.get(projectJsonPath);

    if (!projectJson) {
      try {
        projectJson = JSON.parse(
          (
            await executeShellCommand({
              command: "cat",
              // eslint-disable-next-line @withfig/fig-linter/no-useless-arrays
              args: [projectJsonPath],
            })
          ).stdout
        );

        nxProjectPathWithJsonCache.set(projectJsonPath, projectJson);
      } catch (error) {
        console.log(error);
      }
    }

    if (projectJson) {
      fillProjectCaches(projectJson);
    }
  }

  // fallback to workspace json if no project json paths are present
  if (!nxProjectPathCache.length) {
    try {
      nxWorkspaceJsonCache = JSON.parse(
        (
          await executeShellCommand({
            command: "cat",
            // eslint-disable-next-line @withfig/fig-linter/no-useless-arrays
            args: ["workspace.json"],
          })
        ).stdout
      );

      // fill project caches
      for (const project in nxWorkspaceJsonCache?.projects || {}) {
        fillProjectCaches({
          ...nxWorkspaceJsonCache.projects[project],
          name: project,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
};

const listMapKeysGenerator = (map: Map<string, unknown>): Fig.Generator => {
  return {
    cache: oneDayCache,
    trigger: (newToken, oldToken) =>
      newToken.split(",").length !== oldToken.split(",").length,
    getQueryTerm: (token) => token.split(",").pop(),
    custom: async (
      tokens: string[],
      executeShellCommand: Fig.ExecuteCommandFunction,
      generatorContext: Fig.GeneratorContext
    ) => {
      const suggestions: Fig.Suggestion[] = [];
      const selected = tokens[tokens.length - 1].split(",");
      await preProcessProjects(executeShellCommand);

      for (const name of map.keys()) {
        if (!selected.includes(name)) {
          suggestions.push({ name, insertValue: `${name},` });
        }
      }

      return suggestions;
    },
  };
};

const nxGenerators: NxGenerators = {
  configuration: {
    cache: oneDayCache,
    custom: async (
      tokens: string[],
      executeShellCommand: Fig.ExecuteCommandFunction
    ) => {
      const suggestions: Fig.Suggestion[] = [];

      const finalToken = [];
      const token = tokens.join(" ");
      if (token.startsWith("nx run")) {
        finalToken.push(...tokens[2].split(":"));
      } else {
        finalToken.push(tokens[2], tokens[1]);
      }

      const [project, target] = finalToken;

      // pre process projects
      await preProcessProjects(executeShellCommand);

      // push all configuration names to the suggestions
      for (const name of nxProjectTargetWithConfigurationsCache.get(
        `${project}:${target}`
      )) {
        suggestions.push({ name });
      }

      return suggestions;
    },
  },
  generate: {
    script: (context) => {
      const argument = context.slice(-1)[0];
      if (argument.indexOf(":") > -1) {
        return ["nx", "list", argument.split(":")[0]];
      } else {
        return ["nx", "list"];
      }
    },
    trigger: (newToken, oldToken) =>
      newToken.split(":").length !== oldToken.split(":").length,
    getQueryTerm: (token) => token.split(":").pop(),
    cache: oneDayCache,
    postProcess: (out) => {
      if (out.indexOf("Installed plugins") > -1) {
        const fullList = out.split(">");
        const localPlugins = fullList[1].split("\n").filter(Boolean);
        localPlugins.shift();
        const plugins = fullList[2].split("\n").filter(Boolean);
        plugins.shift();
        return [...localPlugins, ...plugins].map((pluginEntry) => {
          const name = pluginEntry.trim().split(" ")[0];
          return { name, insertValue: `${name}:` };
        });
      } else if (out.indexOf("Capabilities") > -1) {
        const lines = out.split("\n");
        return lines
          .filter((line) => line.trim().indexOf(" : ") > -1)
          .map((line) => ({ name: line.trim().split(" : ")[0] }));
      }
    },
  },
  list: {
    script: ["nx", "list"],
    cache: oneDayCache,
    postProcess: (out) => {
      if (out.indexOf("Installed plugins") > -1) {
        const fullList = out.split(">");
        const localPlugins = fullList[1].split("\n").filter(Boolean);
        localPlugins.shift();
        const plugins = fullList[2].split("\n").filter(Boolean);
        plugins.shift();
        return [...localPlugins, ...plugins].map((pluginEntry) => ({
          name: pluginEntry.trim().split(" ")[0],
        }));
      }
    },
  },
  project: {
    // set cache to one day
    cache: oneDayCache,
    // the custom generator
    custom: async (
      _: string[],
      executeShellCommand: Fig.ExecuteCommandFunction
    ) => {
      // suggestions to be returned
      const suggestions: Fig.Suggestion[] = [];

      // pre process projects
      await preProcessProjects(executeShellCommand);

      // push all project names to the suggestions
      for (const name of nxProjectWithTargetsCache.keys()) {
        suggestions.push({ name });
      }

      return suggestions;
    },
  },
  projects: listMapKeysGenerator(nxProjectWithTargetsCache),
  run: {
    // set cache to one day
    cache: oneDayCache,
    // trigger when new seperator is entered
    trigger: (newToken, oldToken) =>
      newToken.split(":").length !== oldToken.split(":").length,
    // query just the last segment
    getQueryTerm: (token) => token.split(":").pop(),
    // the custom generator
    custom: async (
      tokens: string[],
      executeShellCommand: Fig.ExecuteCommandFunction,
      generatorContext: Fig.GeneratorContext
    ) => {
      // suggestions to be returned
      const suggestions: Fig.Suggestion[] = [];

      // get the final token and split it
      const finalToken = tokens[tokens.length - 1].split(":");

      // get project and target if complete
      const project = finalToken.length > 1 ? finalToken[0] : "";
      const target = finalToken.length > 2 ? finalToken[1] : "";

      // pre process projects
      await preProcessProjects(executeShellCommand);

      // set suggestions
      if (!project) {
        // push all project names to the suggestions and append the seperator
        for (const name of nxProjectWithTargetsCache.keys()) {
          suggestions.push({ name, insertValue: `${name}:` });
        }
      } else if (!target) {
        // push all target names to the suggestions and append the seperator if configurations are present
        for (const name of nxProjectWithTargetsCache.get(project)) {
          if (
            nxProjectTargetWithConfigurationsCache.get(`${project}:${name}`)
          ) {
            suggestions.push({ name, insertValue: `${name}:` });
          } else {
            suggestions.push({ name });
          }
        }
      } else {
        // push all configuration names to the suggestions
        for (const name of nxProjectTargetWithConfigurationsCache.get(
          `${project}:${target}`
        )) {
          suggestions.push({ name });
        }
      }

      return suggestions;
    },
  },
  targets: listMapKeysGenerator(nxTargetWithProjectsCache),
  workspaceGenerator: {
    script: ["bash", "-c", "ls -d tools/generators/*/"],
    cache: oneDayCache,
    postProcess: (out) =>
      out
        .replace("tools/generators/", "")
        .replace("/", "")
        .split("\n")
        .map((line) => line.split(" ").pop())
        .map((name) => ({ name })),
  },
};

const optionsDict: NxOptions = {
  all: {
    name: "--all",
    description: "All projects",
  },
  base: {
    name: "--base",
    description: "Base of the current branch (usually main)",
    args: {},
  },
  commitPrefix: {
    name: "--commitPrefix",
    description:
      "Commit prefix to apply to the commit for each migration, when --create-commits is enabled",
    args: {},
  },
  configuration: {
    name: ["--configuration", "-c"],
    description:
      'A named builder configuration, defined in the "configurations" section of the workspace configuration file. The builder uses the named configuration to run the given target',
    args: {
      name: "configuration",
      generators: nxGenerators.configuration,
    },
  },
  createCommits: {
    name: "--createCommits",
    description: "Automatically create a git commit after each migration runs",
  },
  defaults: {
    name: "--defaults",
    description:
      "When true, disables interactive input prompts for options with a default",
  },
  dryRun: {
    name: "--dryRun",
    description: "When true, preview the changes without updating files",
  },
  exclude: {
    name: "--exclude",
    description: "Exclude certain projects from being processed",
    args: {
      name: "projects",
      generators: nxGenerators.projects,
    },
  },
  excludeAppliedMigrations: {
    name: "--excludeAppliedMigrations",
    description:
      "Exclude migrations that should have been applied on previous updates. To be used with --from",
  },
  file: {
    name: "--file",
    description:
      "Output file (e.g. --file=output.json or --file=dep-graph.html)",
    args: {},
  },
  files: {
    name: "--files",
    description:
      "Change the way Nx is calculating the affected command by providing directly changed files, list of files delimited by commas or spaces",
    args: {},
  },
  focus: {
    name: "--focus",
    description:
      "Use to show the project graph for a particular project and every node that is either an ancestor or a descendant",
    args: {
      name: "project",
      generators: nxGenerators.project,
    },
  },
  force: {
    name: "--force",
    description: "When true, forces overwriting of existing files",
  },
  from: {
    name: "--from",
    description:
      'Use the provided versions for packages instead of the ones installed in node_modules (e.g., --from="@nrwl/react@12.0.0,@nrwl/js@12.0.0")',
    args: {},
  },
  graph: {
    name: "--graph",
    description: "Show the task graph of the command",
  },
  groupByFolder: {
    name: "--groupByFolder",
    description: "Group projects by folder in the project graph",
  },
  head: {
    name: "--head",
    description: "Latest commit of the current branch (usually HEAD)",
    args: {},
  },
  help: {
    name: "--help",
    description: "Show help",
  },
  host: {
    name: "--host",
    description: "Bind the project graph server to a specific ip address",
    args: {},
  },
  ifExists: {
    name: "--ifExists",
    description:
      "Run migrations only if the migrations file exists, if not continues successfully",
  },
  includeDependentProjects: {
    name: "--includeDependentProjects",
    description:
      "When watching selected projects, include dependent projects as well",
  },
  interactive: {
    name: "--interactive",
    description: "Enable/disable prompts",
  },
  libsAndApps: {
    name: "--libs-and-apps",
    description: "Format only libraries and applications files",
  },
  listGenerators: {
    name: "--list-generators",
    description: "List the available workspace-generators",
  },
  nxBail: {
    name: "--nx-bail",
    description: "Stop command execution after the first failed task",
  },
  nxIgnoreCycles: {
    name: "--nx-ignore-cycles",
    description: "Ignore cycles in the task graph",
  },
  open: {
    name: "--open",
    description: "Open the project graph in the browser",
  },
  outputStyle: {
    name: "--output-style",
    description: "Defines how Nx emits outputs tasks logs",
    args: {
      suggestions: [
        {
          name: "dynamic",
        },
        {
          name: "static",
        },
        {
          name: "stream",
        },
        {
          name: "stream-without-prefixes",
        },
        {
          name: "compact",
        },
      ],
    },
  },
  parallel: {
    name: "--parallel",
    description: "Max number of parallel processes [default is 3]",
    args: {},
  },
  port: {
    name: "--port",
    description: "Bind the project graph server to a specific port",
    args: {},
  },
  project: {
    name: "--project",
    description: "Target project",
    args: {
      name: "project",
      generators: nxGenerators.project,
    },
  },
  projects: {
    name: "--projects",
    description: "Projects (comma/space delimited)",
    args: {
      name: "projects",
      generators: nxGenerators.projects,
    },
  },
  runMigrations: {
    name: "--runMigrations",
    description:
      "Execute migrations from a file (when the file isn't provided, execute migrations from migrations.json)",
    args: {},
  },
  runner: {
    name: "--runner",
    description: "This is the name of the tasks runner configured in nx.json",
    args: {},
  },
  select: {
    name: "--select",
    description:
      "Select the subset of the returned json document (e.g., --select=projects)",
    args: {},
  },
  skipNxCache: {
    name: "--skip-nx-cache",
    description:
      "Rerun the tasks even when the results are available in the cache",
  },
  start: {
    name: "--start",
  },
  stop: {
    name: "--stop",
  },
  targets: {
    name: "--targets",
    description: "Targets (comma/space delimited)",
    args: {
      name: "targets",
      generators: nxGenerators.targets,
    },
  },
  to: {
    name: "--to",
    description:
      'Use the provided versions for packages instead of the ones calculated by the migrator (e.g., --to="@nrwl/react@12.0.0,@nrwl/js@12.0.0")',
    args: {},
  },
  type: {
    name: "--type",
    description:
      "Select the type of projects to be returned (e.g., --type=app)",
    args: {
      suggestions: [
        {
          name: "app",
        },
        {
          name: "lib",
        },
      ],
    },
  },
  uncommitted: {
    name: "--uncommitted",
    description: "Uncommitted changes",
  },
  untracked: {
    name: "--untracked",
    description: "Untracked changes",
  },
  verbose: {
    name: "--verbose",
    description:
      "Prints additional information about the commands (e.g., stack traces)",
  },
  version: {
    name: "--version",
    description: "Show version number",
  },
  view: {
    name: "--view",
    description: "Choose whether to view the projects or task graph",
    args: {
      suggestions: [{ name: "projects" }, { name: "tasks" }],
      default: "projects",
    },
  },
  watch: {
    name: "--watch",
    description: "Watch for changes to project graph and update in-browser",
  },
};

const RUN_DERIVED_BASE_TARGETS = ["build", "e2e", "lint", "serve", "test"];
const RUN_DERIVED_BASE_TARGETS_WITH_CONFIGURATION = ["build", "serve"];
/**
 * These subcommands are derived from run - https://nx.dev/packages/nx/documents/run
 * e.g. `nx run project:target:configuration` === `nx target project -c configuration`
 */
const runDerivedSubcommands = async (
  _: string[],
  executeShellCommand: Fig.ExecuteCommandFunction
): Promise<Fig.Spec> => {
  const subcommands: Fig.Subcommand[] = [];

  // pre process projects
  await preProcessProjects(executeShellCommand);

  // iterate all targets
  for (const [target, projects] of nxTargetWithProjectsCache) {
    subcommands.push({
      name: target,
      description: `${target} target`,
      icon: RUN_DERIVED_BASE_TARGETS.includes(target)
        ? "fig://icon?type=command"
        : "fig://icon?type=asterisk",
      args: {
        name: "project",
        suggestions: projects.map((project) => ({ name: project })),
      },
      options: RUN_DERIVED_BASE_TARGETS_WITH_CONFIGURATION.includes(target)
        ? [optionsDict.configuration, optionsDict.help, optionsDict.version]
        : [optionsDict.help, optionsDict.version],
    });
  }

  return {
    name: "nx",
    subcommands,
  };
};

const completionSpec: Fig.Spec = {
  name: "nx",
  description: "Fig completions for Nx by Nrwl",
  generateSpec: runDerivedSubcommands,
  subcommands: [
    {
      name: "init",
      description: "Adds nx.json file and installs nx if not installed already",
      options: [optionsDict.help, optionsDict.version],
    },
    {
      name: "generate",
      description:
        "Runs a generator that creates and/or modifies files based on a generator from a collection",
      args: {
        name: "collection:generator",
        generators: nxGenerators.generate,
      },
      options: [
        optionsDict.defaults,
        optionsDict.dryRun,
        optionsDict.force,
        optionsDict.help,
        optionsDict.interactive,
        optionsDict.version,
      ],
    },
    {
      name: "run",
      description:
        "Runs an Architect target with an optional custom builder configuration defined in your project",
      args: {
        name: "project:target[:configuration]",
        generators: nxGenerators.run,
      },
      options: [
        optionsDict.configuration,
        optionsDict.help,
        optionsDict.version,
      ],
    },
    {
      name: "daemon",
      description:
        "Prints information about the Nx Daemon process or starts a daemon process",
      options: [
        optionsDict.help,
        optionsDict.start,
        optionsDict.stop,
        optionsDict.version,
      ],
    },
    {
      name: "graph",
      description: "Graph dependencies within workspace",
      options: [
        optionsDict.exclude,
        optionsDict.file,
        optionsDict.focus,
        optionsDict.groupByFolder,
        optionsDict.help,
        optionsDict.host,
        optionsDict.open,
        optionsDict.port,
        optionsDict.targets,
        optionsDict.version,
        optionsDict.view,
        optionsDict.watch,
      ],
    },
    {
      name: "run-many",
      description: "Run target for multiple listed projects",
      options: [
        optionsDict.all,
        optionsDict.configuration,
        optionsDict.exclude,
        optionsDict.graph,
        optionsDict.help,
        optionsDict.nxBail,
        optionsDict.nxIgnoreCycles,
        optionsDict.outputStyle,
        optionsDict.parallel,
        optionsDict.projects,
        optionsDict.runner,
        optionsDict.skipNxCache,
        optionsDict.targets,
        optionsDict.verbose,
        optionsDict.version,
      ],
    },
    {
      name: "affected",
      description: "Run target for affected projects",
      options: [
        optionsDict.all,
        optionsDict.base,
        optionsDict.configuration,
        optionsDict.exclude,
        optionsDict.files,
        optionsDict.graph,
        optionsDict.head,
        optionsDict.help,
        optionsDict.nxBail,
        optionsDict.nxIgnoreCycles,
        optionsDict.outputStyle,
        optionsDict.parallel,
        optionsDict.runner,
        optionsDict.skipNxCache,
        optionsDict.targets,
        optionsDict.uncommitted,
        optionsDict.untracked,
        optionsDict.verbose,
        optionsDict.version,
      ],
    },
    {
      name: "affected:graph",
      description: "Graph dependencies affected by changes",
      options: [
        optionsDict.all,
        optionsDict.base,
        optionsDict.exclude,
        optionsDict.file,
        optionsDict.files,
        optionsDict.focus,
        optionsDict.groupByFolder,
        optionsDict.head,
        optionsDict.help,
        optionsDict.host,
        optionsDict.open,
        optionsDict.port,
        optionsDict.targets,
        optionsDict.uncommitted,
        optionsDict.untracked,
        optionsDict.version,
        optionsDict.view,
        optionsDict.watch,
      ],
    },
    {
      name: "print-affected",
      description:
        "Prints information about the projects and targets affected by changes",
      options: [
        optionsDict.all,
        optionsDict.base,
        optionsDict.configuration,
        optionsDict.exclude,
        optionsDict.files,
        optionsDict.head,
        optionsDict.help,
        optionsDict.select,
        optionsDict.targets,
        optionsDict.type,
        optionsDict.uncommitted,
        optionsDict.untracked,
        optionsDict.version,
      ],
    },
    {
      name: "format:check",
      description: "Check for un-formatted files",
      options: [
        optionsDict.all,
        optionsDict.base,
        optionsDict.exclude,
        optionsDict.files,
        optionsDict.head,
        optionsDict.help,
        optionsDict.libsAndApps,
        optionsDict.projects,
        optionsDict.uncommitted,
        optionsDict.untracked,
        optionsDict.version,
      ],
    },
    {
      name: "format:write",
      description: "Overwrite un-formatted files",
      options: [
        optionsDict.all,
        optionsDict.base,
        optionsDict.exclude,
        optionsDict.files,
        optionsDict.head,
        optionsDict.help,
        optionsDict.libsAndApps,
        optionsDict.projects,
        optionsDict.uncommitted,
        optionsDict.untracked,
        optionsDict.version,
      ],
    },
    {
      name: "migrate",
      description:
        "Creates a migrations file or runs migrations from the migrations file",
      args: {
        name: "packageAndVersion",
        description:
          "The target package and version (e.g, @nrwl/workspace@13.0.0)",
        suggestions: [{ name: "latest" }],
        isOptional: true,
      },
      options: [
        optionsDict.commitPrefix,
        optionsDict.createCommits,
        optionsDict.excludeAppliedMigrations,
        optionsDict.from,
        optionsDict.help,
        optionsDict.ifExists,
        optionsDict.interactive,
        optionsDict.runMigrations,
        optionsDict.to,
        optionsDict.version,
      ],
    },
    {
      name: "report",
      description:
        "Reports useful version numbers to copy into the Nx issue template",
      options: [optionsDict.help, optionsDict.version],
    },
    {
      name: "list",
      args: {
        name: "plugin",
        description: "The name of an installed plugin to query",
        generators: nxGenerators.list,
      },
      options: [optionsDict.help, optionsDict.version],
    },
    {
      name: "workspace-generator",
      description:
        "Runs a workspace generator from the tools/generators directory",
      args: {
        name: "name",
        description: "The name of your generator",
        generators: nxGenerators.workspaceGenerator,
      },
      options: [
        optionsDict.help,
        optionsDict.listGenerators,
        optionsDict.version,
      ],
    },
    {
      name: "connect",
      description: "Connect workspace to Nx Cloud",
      options: [optionsDict.help, optionsDict.version],
    },
    {
      name: "reset",
      description:
        "Clears all the cached Nx artifacts and metadata about the workspace and shuts down the Nx Daemon",
      options: [optionsDict.help, optionsDict.version],
    },
    {
      name: "repair",
      description: "Repair any configuration that is no longer supported by Nx",
      options: [optionsDict.help, optionsDict.verbose, optionsDict.version],
    },
    {
      name: "exec",
      description: "Executes any command as if it was a target on the project",
      options: [
        optionsDict.configuration,
        optionsDict.exclude,
        optionsDict.graph,
        optionsDict.help,
        optionsDict.nxBail,
        optionsDict.nxIgnoreCycles,
        optionsDict.outputStyle,
        optionsDict.parallel,
        optionsDict.project,
        optionsDict.runner,
        optionsDict.skipNxCache,
        optionsDict.verbose,
        optionsDict.version,
      ],
    },
    {
      name: "watch",
      description: "Watch for changes within projects, and execute commands",
      options: [
        optionsDict.all,
        optionsDict.help,
        optionsDict.includeDependentProjects,
        optionsDict.projects,
        optionsDict.verbose,
        optionsDict.version,
      ],
    },
    {
      name: "show",
      description:
        "Show information about the workspace (e.g., list of projects)",
      args: {
        name: "object",
        description: "What to show (e.g., projects)",
        suggestions: [{ name: "projects" }],
        default: "projects",
      },
      options: [optionsDict.help, optionsDict.version],
    },
    {
      name: "view-logs",
      description:
        "Enables you to view and interact with the logs via the advanced analytic UI from Nx Cloud to help you debug your issue. To do this, Nx needs to connect your workspace to Nx Cloud and upload the most recent run details. Only the metrics are uploaded, not the artefacts",
      options: [optionsDict.help, optionsDict.version],
    },
  ],
};

export default completionSpec;
