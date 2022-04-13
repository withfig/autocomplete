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
          name: ["-d", "--debug"],
          description: "Debug level log",
        },
        {
          name: ["-f", "--config-file"],
          description: 'Config file (default "config.yaml")',
          args: {
            name: "file",
            generators: dtmGenerators.yamlFiles,
          },
        },
        {
          name: ["-p", "--plugin-dir"],
          description: 'Plugins directory (default ".devstream")',
          args: {
            name: "dir",
            template: "folders",
          },
        },
        {
          name: ["-y", "--yes"],
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
      isDangerous: true,
      options: [
        {
          name: ["-d", "--debug"],
          description: "Debug level log",
        },
        {
          name: ["-f", "--config-file"],
          description: 'Config file (default "config.yaml")',
          args: {
            name: "file",
            generators: dtmGenerators.yamlFiles,
          },
        },
        {
          name: ["-p", "--plugin-dir"],
          description: 'Plugins directory (default ".devstream")',
          args: {
            name: "dir",
            template: "folders",
          },
        },
        {
          name: "--force",
          description: "Force delete by config",
        },
      ],
    },
    {
      name: "destroy",
      description:
        "Destroy DevOps tools deployment according to DevStream configuration file & state file",
      isDangerous: true,
      options: [
        {
          name: ["-d", "--debug"],
          description: "Debug level log",
        },
        {
          name: ["-f", "--config-file"],
          description: 'Config file (default "config.yaml")',
          args: {
            name: "file",
            generators: dtmGenerators.yamlFiles,
          },
        },
        {
          name: ["-p", "--plugin-dir"],
          description: 'Plugins directory (default ".devstream")',
          args: {
            name: "dir",
            template: "folders",
          },
        },
      ],
    },
    {
      name: "develop",
      description: "Develop is used for develop a new plugin",
      subcommands: [
        {
          name: "create-plugin",
          description: "Create plugin",
          options: [
            {
              name: ["-n", "--name"],
              description: "Specify name with the new plugin",
              isRequired: true,
              args: {
                name: "plugin name",
                description: "Plugin name",
              },
            },
          ],
        },
      ],
    },
    {
      name: "list",
      description: "This command lists all of the plugins",
      subcommands: [
        {
          name: "plugins",
          description: "List plugin",
        },
      ],
    },
    {
      name: "show",
      description: "Show is used to print some useful information",
      subcommands: [
        {
          name: "config",
          description: "Show config",
          options: [
            {
              name: "--plugin",
              description: "Specify name with the plugin",
              // insertValue: "--plugin={cursor}",
              // requiresEquals: true,
              isRequired: true,
              args: {
                name: "plugin name",
                description: "Plugin name",
                generators: dtmGenerators.plugins,
              },
            },
          ],
        },
      ],
    },

    {
      name: "help",
      description: "Help about any command",
      args: {
        name: "command",
        template: "help",
      },
    },
    {
      name: "init",
      description: "Download needed plugins according to the config file",
      options: [
        {
          name: ["-d", "--debug"],
          description: "Debug level log",
        },
        {
          name: ["-f", "--config-file"],
          description: 'Config file (default "config.yaml")',
          args: {
            name: "file",
            generators: dtmGenerators.yamlFiles,
          },
        },
        {
          name: ["-p", "--plugin-dir"],
          description: 'Plugins directory (default ".devstream")',
          args: {
            name: "dir",
            template: "folders",
          },
        },
      ],
    },
    {
      name: "verify",
      description:
        "Verify DevOps tools according to DevStream config file and state",
      options: [
        {
          name: ["-f", "--config-file"],
          description: 'Config file (default "config.yaml")',
          args: {
            name: "file",
            generators: dtmGenerators.yamlFiles,
          },
        },
      ],
    },
    {
      name: "version",
      description: "Print the version number of DevStream",
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Help for dtm",
      isPersistent: true,
    },
  ],
  // Only uncomment if dtm takes an argument
  // args: {}
};
export default completionSpec;
