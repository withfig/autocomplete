import { filepaths } from "@fig/autocomplete-generators";

const dtmGenerators: Record<string, Fig.Generator> = {
  plugins: {
    script: "dtm list plugins",
    postProcess: (output) => {
      if (output.startsWith("fatal:")) {
        return [];
      }
      return output.split("\n").map((plugin) => {
        return { name: plugin.trim(), description: "Plugin" };
      });
    },
  },

  yamlFiles: filepaths({ extensions: ["yaml", "yml"] }),
};

const completionSpec: Fig.Spec = {
  name: "dtm",
  description: "DevStream is an open-source DevOps toolchain manager",
  subcommands: [
    {
      name: "apply",
      description:
        "Create or update DevOps tools according to DevStream configuration file",
      options: [
        {
          name: ["--config-file", "-f"],
          description: "Config file",
          args: {
            name: "config-file",
            default: "config.yaml",
            generators: dtmGenerators.yamlFiles,
          },
        },
        {
          name: ["--plugin-dir", "-d"],
          description: "Plugins directory",
          args: { name: "plugin-dir", default: ".devstream" },
        },
        {
          name: ["--yes", "-y"],
          description: "Apply directly without confirmation",
        },
      ],
    },
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      subcommands: [
        {
          name: "bash",
          description: "Generate the autocompletion script for bash",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "fish",
          description: "Generate the autocompletion script for fish",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "powershell",
          description: "Generate the autocompletion script for powershell",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "zsh",
          description: "Generate the autocompletion script for zsh",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
      ],
    },
    {
      name: "delete",
      description:
        "Delete DevOps tools according to DevStream configuration file",
      options: [
        {
          name: ["--config-file", "-f"],
          description: "Config file",
          args: {
            name: "config-file",
            default: "config.yaml",
            generators: dtmGenerators.yamlFiles,
          },
        },
        { name: "--force", description: "Force delete by config" },
        {
          name: ["--plugin-dir", "-d"],
          description: "Plugins directory",
          args: { name: "plugin-dir", default: ".devstream" },
        },
        {
          name: ["--yes", "-y"],
          description: "Delete directly without confirmation",
        },
      ],
    },
    {
      name: "destroy",
      description:
        "Destroy DevOps tools deployment according to DevStream configuration file & state file",
      options: [
        {
          name: ["--config-file", "-f"],
          description: "Config file",
          args: {
            name: "config-file",
            default: "config.yaml",
            generators: dtmGenerators.yamlFiles,
          },
        },
        {
          name: ["--yes", "-y"],
          description: "Destroy directly without confirmation",
        },
      ],
    },
    {
      name: "develop",
      description: "Develop is used for develop a new plugin",
      subcommands: [
        {
          name: "create-plugin",
          description: "Create a new plugin",
          options: [
            {
              name: ["--name", "-n"],
              description: "Specify name with the new plugin",
              isPersistent: true,
              args: { name: "name" },
            },
          ],
        },
        {
          name: "validate-plugin",
          description: "Validate a plugin",
          options: [
            {
              name: ["--all", "-a"],
              description: "Validate all plugins",
              isPersistent: true,
            },
            {
              name: ["--name", "-n"],
              description: "Specify name with the new plugin",
              isPersistent: true,
              args: { name: "name" },
            },
          ],
        },
      ],
    },
    {
      name: "init",
      description: "Download needed plugins according to the config file",
      options: [
        {
          name: ["--config-file", "-f"],
          description: "Config file",
          args: {
            name: "config-file",
            default: "config.yaml",
            generators: dtmGenerators.yamlFiles,
          },
        },
        {
          name: ["--plugin-dir", "-d"],
          description: "Plugins directory",
          args: { name: "plugin-dir", default: ".devstream" },
        },
      ],
    },
    {
      name: "list",
      description: "This command only supports listing plugins now",
      subcommands: [
        {
          name: "plugins",
          description: "List all plugins",
          options: [
            {
              name: ["--filter", "-r"],
              description: "Filter plugin by regex",
              isPersistent: true,
              args: { name: "filter" },
            },
          ],
        },
      ],
    },
    {
      name: "show",
      description: "Show is used to print some useful information",
      subcommands: [
        {
          name: "config",
          description: "Show configuration information",
          options: [
            {
              name: ["--plugin", "-p"],
              description: "Specify name with the plugin",
              args: { name: "plugin", generators: dtmGenerators.plugins },
            },
          ],
        },
        {
          name: "status",
          description: "Show status information",
          options: [
            {
              name: ["--all", "-a"],
              description: "Show all instances of all plugins status",
            },
            {
              name: ["--config-file", "-f"],
              description: "Config file",
              args: { name: "config-file", default: "config.yaml" },
            },
            {
              name: ["--id", "-i"],
              description: "Specify id with the plugin instance",
              args: { name: "id" },
            },
            {
              name: ["--plugin", "-p"],
              description: "Specify name with the plugin",
              args: { name: "plugin" },
            },
            {
              name: ["--plugin-dir", "-d"],
              description: "Plugins directory",
              args: { name: "plugin-dir", default: ".devstream" },
            },
          ],
        },
      ],
    },
    {
      name: "verify",
      description:
        "Verify DevOps tools according to DevStream config file and state",
      options: [
        {
          name: ["--config-file", "-f"],
          description: "Config file",
          args: {
            name: "config-file",
            default: "config.yaml",
            generators: dtmGenerators.yamlFiles,
          },
        },
        {
          name: ["--plugin-dir", "-d"],
          description: "Plugins directory",
          args: { name: "plugin-dir", default: ".devstream" },
        },
      ],
    },
    { name: "version", description: "Print the version number of DevStream" },
    {
      name: "help",
      description: "Help about any command",
      subcommands: [
        {
          name: "apply",
          description:
            "Create or update DevOps tools according to DevStream configuration file",
        },
        {
          name: "completion",
          description:
            "Generate the autocompletion script for the specified shell",
          subcommands: [
            {
              name: "bash",
              description: "Generate the autocompletion script for bash",
            },
            {
              name: "fish",
              description: "Generate the autocompletion script for fish",
            },
            {
              name: "powershell",
              description: "Generate the autocompletion script for powershell",
            },
            {
              name: "zsh",
              description: "Generate the autocompletion script for zsh",
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete DevOps tools according to DevStream configuration file",
        },
        {
          name: "destroy",
          description:
            "Destroy DevOps tools deployment according to DevStream configuration file & state file",
        },
        {
          name: "develop",
          description: "Develop is used for develop a new plugin",
          subcommands: [
            { name: "create-plugin", description: "Create a new plugin" },
            { name: "validate-plugin", description: "Validate a plugin" },
          ],
        },
        {
          name: "init",
          description: "Download needed plugins according to the config file",
        },
        {
          name: "list",
          description: "This command only supports listing plugins now",
          subcommands: [{ name: "plugins", description: "List all plugins" }],
        },
        {
          name: "show",
          description: "Show is used to print some useful information",
          subcommands: [
            { name: "config", description: "Show configuration information" },
            { name: "status", description: "Show status information" },
          ],
        },
        {
          name: "verify",
          description:
            "Verify DevOps tools according to DevStream config file and state",
        },
        {
          name: "version",
          description: "Print the version number of DevStream",
        },
      ],
    },
  ],
  options: [
    { name: "--debug", description: "Debug level log", isPersistent: true },
    { name: ["--help", "-h"], description: "Display help", isPersistent: true },
  ],
};
export default completionSpec;
