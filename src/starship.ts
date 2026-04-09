// Starship modules list generator
const moduleGenerator: Fig.Generator = {
  script: ["starship", "module", "-l"],
  postProcess: (out) => {
    const lines = out.split("\n");
    // Skip the header lines ("Supported modules list" and "----------------------")
    return lines
      .slice(2)
      .filter((line) => line.trim())
      .map((module) => ({
        name: module.trim(),
        description: `Starship ${module.trim()} module`,
        icon: "⭐",
      }));
  },
};

// Common options shared by multiple subcommands
const statusOption: Fig.Option = {
  name: ["-s", "--status"],
  description:
    "The status code of the previously run command as an unsigned or signed 32bit integer",
  args: {
    name: "STATUS_CODE",
  },
};

const pipestatusOption: Fig.Option = {
  name: "--pipestatus",
  description:
    "Bash, Fish and Zsh support returning codes for each process in a pipeline",
  args: {
    name: "PIPESTATUS",
  },
};

const terminalWidthOption: Fig.Option = {
  name: ["-w", "--terminal-width"],
  description: "The width of the current interactive terminal",
  args: {
    name: "TERMINAL_WIDTH",
    default: "80",
  },
};

const pathOption: Fig.Option = {
  name: ["-p", "--path"],
  description: "The path that the prompt should render for",
  args: {
    name: "PATH",
    template: "folders",
  },
};

const logicalPathOption: Fig.Option = {
  name: ["-P", "--logical-path"],
  description:
    "The logical path that the prompt should render for. This path should be a virtual/logical representation of the PATH argument",
  args: {
    name: "LOGICAL_PATH",
    template: "folders",
  },
};

const cmdDurationOption: Fig.Option = {
  name: ["-d", "--cmd-duration"],
  description: "The execution duration of the last command, in milliseconds",
  args: {
    name: "CMD_DURATION",
  },
};

const keymapOption: Fig.Option = {
  name: ["-k", "--keymap"],
  description: "The keymap of fish/zsh/cmd",
  args: {
    name: "KEYMAP",
    default: "viins",
    suggestions: ["viins", "vicmd", "main", "emacs"],
  },
};

const jobsOption: Fig.Option = {
  name: ["-j", "--jobs"],
  description: "The number of currently running jobs",
  args: {
    name: "JOBS",
    default: "0",
  },
};

const shlvlOption: Fig.Option = {
  name: "--shlvl",
  description:
    "The current value of SHLVL, for shells that mis-handle it in $()",
  args: {
    name: "SHLVL",
  },
};

// Options that are shared across explain, module, prompt, and timings subcommands
const promptContextOptions: Fig.Option[] = [
  statusOption,
  pipestatusOption,
  terminalWidthOption,
  pathOption,
  logicalPathOption,
  cmdDurationOption,
  keymapOption,
  jobsOption,
  shlvlOption,
];

const helpOption: Fig.Option = {
  name: ["-h", "--help"],
  description: "Print help",
};

const shellArg: Fig.Arg = {
  name: "SHELL",
  suggestions: ["bash", "elvish", "fish", "nushell", "powershell", "zsh"],
};

const presetNames = [
  "bracketed-segments",
  "catppuccin-powerline",
  "gruvbox-rainbow",
  "jetpack",
  "nerd-font-symbols",
  "no-empty-icons",
  "no-nerd-font",
  "no-runtime-versions",
  "pastel-powerline",
  "plain-text-symbols",
  "pure-preset",
  "tokyo-night",
];

const completionSpec: Fig.Spec = {
  name: "starship",
  description: "The cross-shell prompt for astronauts ☄🌌️",
  subcommands: [
    {
      name: "bug-report",
      description:
        "Create a pre-populated GitHub issue with information about your configuration",
      options: [helpOption],
    },
    {
      name: "completions",
      description:
        "Generate starship shell completions for your shell to stdout",
      args: {
        ...shellArg,
        suggestions: ["bash", "elvish", "fish", "nushell", "powershell", "zsh"],
      },
      options: [helpOption],
    },
    {
      name: "config",
      description: "Edit the starship configuration",
      args: [
        {
          name: "NAME",
          description: "Configuration key to edit",
          isOptional: true,
        },
        {
          name: "VALUE",
          description: "Value to place into that key",
          isOptional: true,
        },
      ],
      options: [helpOption],
    },
    {
      name: "explain",
      description: "Explains the currently showing modules",
      options: [...promptContextOptions, helpOption],
    },
    {
      name: "init",
      description: "Prints the shell function used to execute starship",
      args: shellArg,
      options: [
        {
          name: "--print-full-init",
          description: "Print the full init script",
        },
        helpOption,
      ],
    },
    {
      name: "module",
      description: "Prints a specific prompt module",
      args: {
        name: "NAME",
        description: "The name of the module to be printed",
        isOptional: true,
        generators: moduleGenerator,
      },
      options: [
        {
          name: ["-l", "--list"],
          description: "List out all supported modules",
        },
        ...promptContextOptions,
        helpOption,
      ],
    },
    {
      name: "preset",
      description: "Prints a preset config",
      args: {
        name: "NAME",
        description: "The name of preset to be printed",
        isOptional: true,
        suggestions: presetNames,
      },
      options: [
        {
          name: ["-o", "--output"],
          description: "Output the preset to a file instead of stdout",
          args: {
            name: "OUTPUT",
            template: "filepaths",
          },
        },
        {
          name: ["-l", "--list"],
          description: "List out all preset names",
        },
        helpOption,
      ],
    },
    {
      name: "print-config",
      description: "Prints the computed starship configuration",
      args: {
        name: "NAME",
        description: "Configuration keys to print",
        isOptional: true,
        isVariadic: true,
      },
      options: [
        {
          name: ["-d", "--default"],
          description: "Print the default instead of the computed config",
        },
        helpOption,
      ],
    },
    {
      name: "prompt",
      description: "Prints the full starship prompt",
      options: [
        {
          name: "--right",
          description:
            "Print the right prompt (instead of the standard left prompt)",
        },
        {
          name: "--profile",
          description:
            "Print the prompt with the specified profile name (instead of the standard left prompt)",
          args: {
            name: "PROFILE",
          },
        },
        {
          name: "--continuation",
          description:
            "Print the continuation prompt (instead of the standard left prompt)",
        },
        ...promptContextOptions,
        helpOption,
      ],
    },
    {
      name: "session",
      description: "Generate random session key",
      options: [helpOption],
    },
    {
      name: "timings",
      description: "Prints timings of all active modules",
      options: [...promptContextOptions, helpOption],
    },
    {
      name: "toggle",
      description: "Toggle a given starship module",
      args: [
        {
          name: "NAME",
          description: "The name of the module to be toggled",
          generators: moduleGenerator,
        },
        {
          name: "VALUE",
          description: "The key of the config to be toggled",
          isOptional: true,
          default: "disabled",
        },
      ],
      options: [helpOption],
    },
    {
      name: "help",
      description: "Print this message or the help of the given subcommand(s)",
      args: {
        name: "COMMAND",
        isOptional: true,
        template: "help",
      },
    },
  ],
  options: [
    helpOption,
    {
      name: ["-V", "--version"],
      description: "Print version",
    },
  ],
};

export default completionSpec;
