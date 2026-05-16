const PRIORITY_TOP_THRESHOLD = 76;
const HOUR_IN_MILLISECONDS = 3600000;

/*
 *  Generators
 */
const installedPluginNamesGenerator = (
  suggestOptions?: Partial<Fig.Suggestion>
): Fig.Generator => ({
  script: ["asdf", "plugin-list"],
  postProcess: (output) =>
    output.split("\n").map((pluginName) => ({
      name: `${pluginName}`,
      description: "Plugin name",
      priority: PRIORITY_TOP_THRESHOLD,
      icon: "fig://icon?type=package",
      ...suggestOptions,
    })),
});

const allPluginNamesGenerator = (
  suggestOptions?: Partial<Fig.Suggestion>
): Fig.Generator => ({
  // If use `asdf plugin-list-all`, it will time out, so use `ls`.
  custom: async (_, executeCommand, generatorContext) => {
    const { stdout } = await executeCommand({
      command: "ls",
      args: [
        "-1",
        `${generatorContext.environmentVariables["HOME"]}/.asdf/repository/plugins`,
      ],
    });

    return stdout.split("\n").map((pluginName) => ({
      name: `${pluginName}`,
      description: "Plugin name",
      priority: PRIORITY_TOP_THRESHOLD,
      icon: "fig://icon?type=package",
      ...suggestOptions,
    }));
  },
});

const installedPluginVersionsGenerator = (
  suggestOptions?: Partial<Fig.Suggestion>,
  generatorOptions?: Partial<Fig.Generator>
): Fig.Generator => ({
  script: (context) => {
    const pluginName = context[context.length - 2];
    return ["asdf", "list", pluginName];
  },
  postProcess: (output) =>
    output
      .split("\n")
      .reverse()
      .map((pluginVersion) => ({
        name: `${pluginVersion}`.trim(),
        description: "Plugin version",
        priority: PRIORITY_TOP_THRESHOLD,
        icon: "fig://icon?type=commit",
        ...suggestOptions,
      })),
  ...generatorOptions,
});

const allPluginVersionsGenerator = (
  suggestOptions?: Partial<Fig.Suggestion>,
  generatorOptions?: Partial<Fig.Generator>
): Fig.Generator => ({
  script: (context) => {
    const pluginName = context[context.length - 2];
    return ["asdf", "list-all", pluginName];
  },
  cache: {
    ttl: HOUR_IN_MILLISECONDS,
  },
  postProcess: (output) =>
    output
      .split("\n")
      .reverse()
      .map((pluginVersion) => ({
        name: `${pluginVersion}`.trim(),
        description: "Plugin version",
        priority: PRIORITY_TOP_THRESHOLD,
        icon: "fig://icon?type=commit",
        ...suggestOptions,
      })),
  ...generatorOptions,
});

const shimNamesGenerator = (
  suggestOptions?: Partial<Fig.Suggestion>
): Fig.Generator => ({
  // Use `ls` because there is no command to get shims in `asdf`.
  custom: async (_, executeCommand, generatorContext) => {
    const { stdout } = await executeCommand({
      command: "ls",
      args: [
        "-1",
        `${generatorContext.environmentVariables["HOME"]}/.asdf/shims`,
      ],
    });
    return stdout.split("\n").map((shimName) => ({
      name: `${shimName}`,
      description: "Shim name",
      priority: PRIORITY_TOP_THRESHOLD,
      icon: "fig://icon?type=command",
      ...suggestOptions,
    }));
  },
});

/*
 *  Reusable specs
 */
const pluginAddSpec: Omit<Fig.Subcommand, "name"> = {
  description:
    "Add a plugin from the plugin repo OR, add a Git repo as a plugin by specifying the name and repo url",
  args: [
    {
      name: "name",
      generators: allPluginNamesGenerator(),
    },
    {
      name: "git-url",
      isOptional: true,
    },
  ],
};

const pluginListAllSpec: Omit<Fig.Subcommand, "name"> = {
  description: "List plugins registered on asdf-plugins repository with URLs",
};

const pluginListSpec: Omit<Fig.Subcommand, "name"> = {
  description: "List installed plugins. Optionally show git urls and git-ref",
  options: [
    {
      name: "--urls",
      description: "Show git urls",
    },
    {
      name: "--refs",
      description: "Show git refs",
    },
  ],
  subcommands: [
    {
      name: "all",
      ...pluginListAllSpec,
    },
  ],
};

const pluginRemoveSpec: Omit<Fig.Subcommand, "name"> = {
  description: "Remove plugin and package versions",
  args: {
    name: "name",
    generators: installedPluginNamesGenerator({ isDangerous: true }),
  },
};

const pluginUpdateSpec: Omit<Fig.Subcommand, "name"> = {
  description:
    "Update a plugin to latest commit on default branch or a particular git-ref",
  args: [
    {
      name: "name",
      isOptional: true,
      isDangerous: true,
    },
    {
      name: "git-ref",
      isOptional: true,
      isDangerous: true,
    },
  ],
  options: [
    {
      name: "--all",
      description: "Update all plugins to latest commit on default branch",
      isDangerous: true,
    },
  ],
};

const listAllSpec: Omit<Fig.Subcommand, "name"> = {
  description: "List all available (remote) versions of a package",
  args: [
    {
      name: "name",
      generators: installedPluginNamesGenerator(),
    },
    {
      name: "version",
      generators: installedPluginVersionsGenerator(),
      isOptional: true,
    },
  ],
};

const shimVersionsSpec: Omit<Fig.Subcommand, "name"> = {
  description: "List for given command which plugins and versions provide it",
  args: {
    name: "command",
    generators: shimNamesGenerator(),
  },
};

/*
 *  Completion spec
 */
const completionSpec: Fig.Spec = {
  name: "asdf",
  description:
    "Extendable version manager with support for Ruby, Node.js, Elixir, Erlang & more",
  subcommands: [
    {
      name: "plugin",
      description: "Plugin management sub-commands",
      subcommands: [
        {
          name: "add",
          ...pluginAddSpec,
        },
        {
          name: "list",
          ...pluginListSpec,
        },
        {
          name: "remove",
          ...pluginRemoveSpec,
        },
        {
          name: "update",
          ...pluginUpdateSpec,
        },
      ],
    },
    {
      name: "plugin-add",
      ...pluginAddSpec,
    },
    {
      name: "plugin-list",
      ...pluginListSpec,
    },
    {
      name: "plugin-list-all",
      ...pluginListAllSpec,
    },
    {
      name: "plugin-remove",
      ...pluginRemoveSpec,
    },
    {
      name: "plugin-update",
      ...pluginUpdateSpec,
    },
    {
      name: "install",
      description:
        "Install plugin at stated version, or all from .tools-versions",
      args: [
        {
          name: "name",
          generators: installedPluginNamesGenerator(),
          isOptional: true,
        },
        {
          name: "version",
          suggestions: [
            {
              name: "latest",
              isDangerous: true,
            },
          ],
          generators: allPluginVersionsGenerator(undefined, {
            getQueryTerm: (token) => {
              if (token.includes("latest")) {
                return token.slice(token.indexOf(":") + 1);
              }
              return token;
            },
          }),
          isOptional: true,
        },
      ],
    },
    {
      name: "uninstall",
      description: "Remove a specific version of a package",
      args: [
        {
          name: "name",
          generators: installedPluginNamesGenerator({ isDangerous: true }),
        },
        {
          name: "version",
          generators: installedPluginVersionsGenerator({ isDangerous: true }),
          isOptional: true,
        },
      ],
    },
    {
      name: "current",
      description: "Display current versions for named package (else all)",
      args: {
        name: "name",
        isOptional: true,
        generators: installedPluginNamesGenerator(),
      },
    },
    {
      name: "where",
      description:
        "Display install path for given package at optional specified version",
      args: [
        {
          name: "name",
          generators: installedPluginNamesGenerator(),
        },
        {
          name: "version",
          generators: installedPluginVersionsGenerator(),
          isOptional: true,
        },
      ],
    },
    {
      name: "which",
      description: "Display path to an executable",
      args: {
        name: "command",
        generators: shimNamesGenerator(),
      },
    },
    {
      name: "local",
      description: "Set package local version",
      args: [
        {
          name: "name",
          generators: installedPluginNamesGenerator(),
        },
        {
          name: "version",
          generators: installedPluginVersionsGenerator(),
        },
      ],
    },
    {
      name: "global",
      description: "Set package global version",
      args: [
        {
          name: "name",
          generators: installedPluginNamesGenerator(),
        },
        {
          name: "version",
          generators: installedPluginVersionsGenerator(),
        },
      ],
    },
    {
      name: "shell",
      description:
        "Set the package version to ASDF_${LANG}_VERSION` in the current shell",
      args: [
        {
          name: "name",
          generators: installedPluginNamesGenerator(),
        },
        {
          name: "version",
          generators: installedPluginVersionsGenerator(),
        },
      ],
    },
    {
      name: "latest",
      description:
        "Display latest version available to install for a named package",
      args: [
        {
          name: "name",
          generators: installedPluginNamesGenerator(),
        },
        {
          name: "version",
          generators: installedPluginVersionsGenerator(),
          isOptional: true,
        },
      ],
    },
    {
      name: "list",
      description: "List installed versions of a package",
      args: {
        name: "name",
        generators: installedPluginNamesGenerator(),
      },
      subcommands: [
        {
          name: "all",
          priority: PRIORITY_TOP_THRESHOLD + 1,
          ...listAllSpec,
        },
      ],
    },
    {
      name: "list-all",
      ...listAllSpec,
    },
    {
      name: "help",
      description: "Output documentation for plugin and tool",
      args: [
        {
          name: "name",
          generators: installedPluginNamesGenerator(),
        },
        {
          name: "version",
          generators: installedPluginVersionsGenerator(),
          isOptional: true,
        },
      ],
    },
    {
      name: "exec",
      description: "Executes the command shim for the current version",
      args: {
        name: "command",
        generators: shimNamesGenerator(),
        isCommand: true,
      },
    },
    {
      name: "env",
      description: "Prints or runs an executable under a command environment",
      args: {
        name: "command",
        generators: shimNamesGenerator(),
      },
    },
    {
      name: "info",
      description: "Print os, shell and asdf debug information",
    },
    {
      name: "reshim",
      description: "Recreate shims for version of a package",
      args: [
        {
          name: "name",
          generators: installedPluginNamesGenerator(),
          isOptional: true,
        },
        {
          name: "version",
          generators: installedPluginVersionsGenerator(),
          isOptional: true,
        },
      ],
    },
    {
      name: "shim",
      description: "Shim management sub-commands",
      subcommands: [
        {
          name: "versions",
          ...shimVersionsSpec,
        },
      ],
    },
    {
      name: "shim-versions",
      ...shimVersionsSpec,
    },
    {
      name: "update",
      description: "Update ASDF to the latest stable release (unless --head)",
      options: [
        {
          name: "--head",
          description: "Using HEAD commit",
          isDangerous: true,
        },
      ],
    },
    {
      name: "version",
      description: "Version for asdf",
    },
  ],
  options: [
    {
      name: "--version",
      description: "Version for asdf",
    },
    {
      name: ["-h", "--help"],
      description: "Help for asdf",
    },
  ],
};

export default completionSpec;
