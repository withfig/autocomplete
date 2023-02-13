const defaultOptions: Fig.Option[] = [
  {
    name: "--verbose",
    description: "Enables verbose diagnostics",
  },
  {
    name: "--quiet",
    description: "Prevents unnecessary output",
  },
  {
    name: ["-h", "--help"],
    description: "Prints help information",
  },
];

const toolArgs: Fig.Arg = {
  isVariadic: true,
  name: "tool@version",
};

const completionSpec: Fig.Spec = {
  name: "volta",
  description: "The JavaScript Launcher",
  subcommands: [
    {
      name: "fetch",
      description: "Fetches a tool to the local machine",
      args: {
        isVariadic: true,
        name: "tool | tool@version",
      },
      options: [...defaultOptions],
    },
    {
      name: "install",
      description: "Installs a tool in your toolchain",
      args: {
        ...toolArgs,
      },
      options: [...defaultOptions],
    },
    {
      name: "uninstall",
      description: "Uninstalls a tool from your toolchain",
      args: {
        name: "tool",
      },
      options: [...defaultOptions],
    },
    {
      name: "pin",
      description: "Pins your project's runtime or package manager",
      args: {
        ...toolArgs,
      },
      options: [...defaultOptions],
    },
    {
      name: "list",
      description: "Displays the current toolchain",
      args: {
        name: "tool",
      },
      options: [
        {
          name: ["-c", "--current"],
          description: "Show the currently-active tool(s)",
        },
        {
          name: ["-d", "--default"],
          description: "Show your default tool(s)",
        },
        ...defaultOptions,
        {
          name: "--format",
          description: "Specify output format",
          args: {
            name: "output format",
            suggestions: ["human", "plain"],
          },
        },
      ],
    },
    {
      name: "completions",
      description: "Generates Volta completions",
      args: {
        name: "shell",
        description: "Shell to generate completions for",
        suggestions: ["zsh", "bash", "fish", "powershell", "elivsh"],
      },
      options: [
        {
          name: ["-f", "--force"],
          description: "Write over an existing file, if any",
        },
        ...defaultOptions,
        {
          name: ["-o", "--output"],
          description: "File to write generated completions to",
          args: {
            name: "file",
          },
        },
      ],
    },
    {
      name: "which",
      description: "Locates the actual binary that will be called by Volta",
      args: {
        isVariadic: true,
        name: "binary",
        template: "filepaths",
      },
      options: [...defaultOptions],
    },
    {
      name: "setup",
      description: "Enables Volta for the current user",
      options: [...defaultOptions],
    },
    {
      name: "run",
      description: "Run a command with custom Node, npm, and/or Yarn versions",
      args: {
        name: "command",
      },
      options: [
        {
          name: "--bundle",
          description: "Forces npm to be the version bundled with Node",
        },
        {
          name: "--no-yarn",
          description: "Disables Yarn",
        },
        {
          name: "--verbose",
          description: "Enables verbose diagnostics",
        },
        {
          name: "--quiet",
          description: "Prevents unnecessary output",
        },
        {
          name: "--node",
          description: "Set the custom Node version",
          args: {
            name: "version",
          },
        },
        {
          name: "--npm",
          description: "Set the custom npm version",
          args: {
            name: "version",
          },
        },
        {
          name: "--yarn",
          description: "Set the custom Yarn version",
          args: {
            name: "version",
          },
        },
        {
          name: "--env",
          description:
            "Set an environment variable (can be used multiple times)",
          isRepeatable: true,
          args: {
            name: "NAME=value",
          },
        },
      ],
    },
    {
      name: "help",
      description: "Prints this message or the help of the given subcommand(s)",
      args: {
        name: "subcommand",
      },
    },
  ],
  options: [
    ...defaultOptions,
    {
      name: ["-v", "--version"],
      description: "Prints the current version of Volta",
    },
  ],
};

export default completionSpec;
