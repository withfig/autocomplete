import { filepaths } from "@fig/autocomplete-generators";

const PRIORITY_TOP_THRESHOLD = 76;

const generateGlobalFlags = (subcommandName: string): Fig.Option[] => [
  {
    name: ["-h", "--help"],
    description: `Help for ${subcommandName}`,
  },
  {
    name: "--debug",
    description: "Debug mode",
  },
];

const instanceNameGenerator = (
  suggestOptions?: Partial<Fig.Suggestion>
): Fig.Generator => ({
  script: ["limactl", "list", "--quiet"],
  postProcess: (output) =>
    output.split("\n").map((instanceName) => ({
      name: `${instanceName}`,
      description: "Instance name",
      priority: PRIORITY_TOP_THRESHOLD,
      ...suggestOptions,
    })),
});

const yamlFilepathsGenerator = filepaths({
  extensions: ["yaml", "yml"],
  editFileSuggestions: { priority: PRIORITY_TOP_THRESHOLD },
});

const completionSpec: Fig.Spec = {
  name: "limactl",
  description: "Control the Lima(Linux virtual machines)",
  subcommands: [
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      subcommands: ["bash", "fish", "powershell", "zsh"].map(
        (subcommandName) => ({
          name: subcommandName,
          description: `Generate the autocompletion script for ${subcommandName}`,
          options: [
            ...generateGlobalFlags(subcommandName),
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        })
      ),
      options: [...generateGlobalFlags("completion")],
    },
    {
      name: ["copy", "cp"],
      description: "Copy files between host and guest",
      args: [
        {
          name: "SOURCE",
          isVariadic: true,
          generators: [
            instanceNameGenerator({ isDangerous: true }),
            { template: "filepaths" },
          ],
        },
        {
          name: "TARGET",
          generators: [instanceNameGenerator(), { template: "filepaths" }],
        },
      ],
      options: [
        ...generateGlobalFlags("copy"),
        {
          name: ["-r", "--recursive"],
          description: "Copy directories recursively",
        },
      ],
    },
    {
      name: ["delete", "remove", "rm"],
      description: "Delete an instance of Lima",
      args: {
        name: "INSTANCE",
        isVariadic: true,
        generators: instanceNameGenerator({ isDangerous: true }),
      },
      options: [
        ...generateGlobalFlags("delete"),
        {
          name: ["-f", "--force"],
          description: "Forcibly kill the processes",
          isDangerous: true,
        },
      ],
    },
    {
      name: "info",
      description: "Show diagnostic information",
      options: [...generateGlobalFlags("info")],
    },
    {
      name: ["list", "ls"],
      description: "List instances of Lima",
      options: [
        ...generateGlobalFlags("list"),
        {
          name: "--json",
          description: "JSONify output",
        },
        {
          name: ["-q", "--quiet"],
          description: "Only show names",
        },
      ],
    },
    {
      name: "prune",
      description: "Prune garbage objects",
      isDangerous: true,
      options: [...generateGlobalFlags("prune")],
    },
    {
      name: "shell",
      description:
        'Lima command is provided as an alias for limactl shell $LIMA_INSTANCE. $LIMA_INSTANCE defaults to "default"',
      args: [
        {
          name: "INSTANCE",
          generators: instanceNameGenerator({ isDangerous: true }),
        },
        {
          name: "COMMAND",
          isVariadic: true,
          isOptional: true,
          isCommand: true,
        },
      ],
      options: [
        ...generateGlobalFlags("shell"),
        {
          name: "--workdir",
          description: "Working directory",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "show-ssh",
      description: "Show the ssh command line",
      args: {
        name: "INSTANCE",
        generators: instanceNameGenerator(),
      },
      options: [
        ...generateGlobalFlags("show-ssh"),
        {
          name: ["-f", "--format"],
          description: 'Format: cmd, args, options, config (default "cmd")',
          args: {
            name: "string",
            default: "cmd",
            suggestions: [
              {
                name: "cmd",
                description: "Full ssh command line",
              },
              {
                name: "args",
                description:
                  'Similar to the cmd format but omits "ssh" and the destination address',
              },
              { name: "options", description: "Ssh option key value pairs" },
              { name: "config", description: "~/.ssh/config format" },
            ],
          },
        },
      ],
    },
    {
      name: "start",
      description:
        'Start an instance of Lima. If the instance does not exist, open an editor for creating new one, with name "default"',
      args: {
        name: "NAME|FILE.yaml|URL",
        generators: [instanceNameGenerator(), yamlFilepathsGenerator],
      },
      options: [
        ...generateGlobalFlags("start"),
        {
          name: "--tty",
          description:
            "Enable TUI interactions such as opening an editor, defaults to true when stdout is a terminal (default true)",
        },
      ],
    },
    {
      name: "stop",
      description: "Stop an instance",
      isDangerous: true,
      args: {
        name: "INSTANCE",
        generators: instanceNameGenerator({ isDangerous: true }),
      },
      options: [
        ...generateGlobalFlags("stop"),
        {
          name: ["-f", "--force"],
          description: "Force stop the instance",
          isDangerous: true,
        },
      ],
    },
    {
      name: "sudoers",
      description:
        "Generate /etc/sudoers.d/lima file for enabling vmnet.framework support. See /usr/local/share/doc/lima/docs/network.md for the usage",
      args: {
        name: "SUDORSFILE",
        isOptional: true,
        template: "filepaths",
      },
      options: [
        ...generateGlobalFlags("sudoers"),
        {
          name: "--check",
          description:
            'Check that the sudoers file is up-to-date with "~/.lima/_config/networks.yaml"',
        },
      ],
    },
    {
      name: "validate",
      description: "Validate YAML files",
      args: {
        name: "FILE.yaml",
        isVariadic: true,
        generators: yamlFilepathsGenerator,
      },
      options: [...generateGlobalFlags("validate")],
    },
  ],
  options: [
    ...generateGlobalFlags("limactl"),
    {
      name: ["-v", "--version"],
      description: "Version for limactl",
    },
  ],
};

const HELP_COMMAND_DESCRIPTION =
  "Help provides help for any command in the application";
completionSpec.subcommands.push({
  name: "help",
  description: HELP_COMMAND_DESCRIPTION,
  args: {
    name: "command",
    isOptional: true,
    suggestions: [
      ...completionSpec.subcommands.map(
        (subcommand): Fig.Suggestion => ({
          name: subcommand.name,
          description: subcommand.description,
          type: "subcommand",
        })
      ),
      {
        name: "help",
        description: HELP_COMMAND_DESCRIPTION,
        type: "subcommand",
      },
    ],
  },
});

export default completionSpec;
