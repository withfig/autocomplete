const completionSpec: Fig.Spec = {
  name: "runn",
  description: "A tool for running operations following a scenario",
  subcommands: [
    {
      name: "help",
      description: "Help for runn",
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
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Help for runn",
    },
    {
      name: ["--version", "-v"],
      description: "Version for runn",
    },
  ],
};
export default completionSpec;
