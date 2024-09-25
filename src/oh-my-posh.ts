const config: Fig.Option = {
  name: ["--config", "-c"],
  description: "The config file to use",
  isPersistent: true,
  args: {
    name: "CONFIG",
    description: "The configuration to use",
    template: ["filepaths", "history"],
  },
};

const format: Fig.Option = {
  name: ["--format", "-f"],
  description: "The file format to use",
  args: {
    name: "FORMAT",
    description: "The export format",
    suggestions: ["json", "yaml", "toml"],
  },
};

const completionSpec: Fig.Spec = {
  name: "oh-my-posh",
  description: "",
  subcommands: [
    {
      name: "init",
      description: "Initialize oh-my-posh for your shell",
      args: {
        name: "SHELL",
        suggestions: [
          {
            name: "zsh",
          },
          {
            name: "fish",
          },
          {
            name: "pwsh",
          },
          {
            name: "powershell",
          },
          {
            name: "cmd",
          },
          {
            name: "bash",
          },
          {
            name: "shell",
          },
        ],
      },
      options: [
        config,
        {
          name: ["--print", "-p"],
          description: "Print the init script",
        },
      ],
    },
    {
      name: "get",
      description: "Get oh-my-posh values",
      args: {
        name: "VALUE",
        suggestions: [
          {
            name: "millis",
            description:
              "Get the current timestamp in milliseconds, example usage: 'oh-my-posh get millis'",
          },
          {
            name: "shell",
            description:
              "Get the current shell, example usage: 'oh-my-posh get shell'",
          },
        ],
      },
    },
    {
      name: "debug",
      description: "Debug oh-my-posh, example usage: 'oh-my-posh debug'",
      options: [config],
    },
    {
      name: "config",
      description: "Interact with the oh-my-posh configuration",
      subcommands: [
        {
          name: "edit",
          description:
            "Edit the config file, example usage: 'oh-my-posh config edit'",
        },
        {
          name: "migrate",
          description:
            "Migrate the config file, example usage: 'oh-my-posh config migrate --config ~/.config.omp.json'",
          options: [
            {
              name: ["--write", "-w"],
              description:
                "Write the migrated config to the configuration file, example usage: 'oh-my-posh config migrate --write'",
            },
            format,
          ],
        },
        {
          name: "export",
          description:
            "Export the config file, example usage: 'oh-my-posh config export --config ~/.config.omp.toml'",
          options: [
            {
              name: ["--output", "-o"],
              description:
                "The file to output the migrated config to, example usage: 'oh-my-posh config export --output ~/.config.omp.json'",
              args: {
                name: "OUTPUT",
                description: "The file to write to",
                template: ["filepaths"],
              },
            },
            format,
          ],
        },
      ],
      options: [config],
    },
    {
      name: "print",
      description: "Print a prompt",
      args: {
        name: "PROMPT",
        suggestions: [
          {
            name: "primary",
          },
          {
            name: "secondary",
          },
          {
            name: "right",
          },
          {
            name: "transient",
          },
          {
            name: "tooltip",
          },
          {
            name: "valid",
          },
          {
            name: "error",
          },
        ],
      },
      options: [
        config,
        {
          name: ["--terminal-width", "-w"],
          description:
            "The terminal width, example usage: 'oh-my-posh print primary --terminal-width 200'",
          args: {
            name: "WIDTH",
            description: "The terminal width",
            default: "0",
          },
        },
        {
          name: "--command",
          description:
            "The current command for tooltips, example usage: 'oh-my-posh print tooltip --command az'",
          args: {
            name: "COMMAND",
            description: "The tooltip command",
          },
        },
        {
          name: ["--error", "-e"],
          description:
            "The last exit code, example usage: 'oh-my-posh print primary --error 127'",
          args: {
            name: "ERROR CODE",
            description: "The last error code",
            default: "0",
          },
        },
        {
          name: "--eval",
          description:
            "Use eval to render the prompt, example usage: 'oh-my-posh print primary --eval'",
        },
        {
          name: "--execution-time",
          description:
            "Use last command execution time in millis, example usage: 'oh-my-posh print primary --execution-time 200'",
          args: {
            name: "EXECUTION TIME",
            description: "The last command's execution time",
            default: "0",
          },
        },
        {
          name: ["--plain", "-p"],
          description:
            "Print a prompt without ASNI codes, example usage: 'oh-my-posh print primary --plain'",
        },
        {
          name: "--pswd",
          description:
            "The current working directory according to PowerShell, example usage: 'oh-my-posh print primary --pswd C:\\Users\\user\\Documents'",
          args: {
            name: "POWERSHELL WORKING DIRECTORY",
            description: "The working directory according to PowerShell",
            template: ["filepaths"],
          },
        },
        {
          name: "--pwd",
          description:
            "The current working directory, example usage: 'oh-my-posh print primary --pwd /home/user/Documents'",
          args: {
            name: "WORKING DIRECTORY",
            description: "The working directory",
            template: ["filepaths"],
          },
        },
        {
          name: "--shell",
          description:
            "The current shell, example usage: 'oh-my-posh print primary --shell fish'",
          args: {
            name: "SHELL",
            description: "The shell used",
            suggestions: [
              "zsh",
              "fish",
              "pwsh",
              "powershell",
              "cmd",
              "bash",
              "shell",
            ],
          },
        },
        {
          name: "--stack-count",
          description:
            "The directory stack count, example usage: 'oh-my-posh print primary --stack-count 1'",
          args: {
            name: "NUM",
            description: "The number of stacks",
            default: "0",
          },
        },
      ],
    },
    {
      name: "version",
      description:
        "Display the oh-my-posh version, example usage: 'oh-my-posh version'",
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for oh-my-posh",
      isPersistent: true,
    },
  ],
};
export default completionSpec;
