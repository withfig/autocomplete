const completionSpec: Fig.Spec = {
  name: "@withfig/autocomplete-tools",
  description: "Dev tools for fig's autocomplete",
  icon: "https://fig.io/icons/fig-light.png",
  subcommands: [
    {
      name: "init",
      description: "Install one or more packages",
    },
    {
      name: "create-spec",
      description: "Create a new spec in the src/ folder",
      args: {
        name: "name",
        description: "The name of the new spec",
      },
    },
    {
      name: "compile",
      description: "Compile specs in the current directory",
    },
    {
      name: "dev",
      description:
        "Compile specs in the current directory and watch for changes",
    },
    {
      name: "merge",
      description: "Deep merge new spec into old spec",
      args: [
        {
          name: "oldspec",
          description: "The path to the spec in which deep merge the new one",
          template: "filepaths",
        },
        {
          name: "newspec",
          description: "The path of the new spec",
          template: "filepaths",
        },
      ],
      options: [
        {
          name: ["-p", "--preset"],
          description: "Use the preset of a given integration tool",
          args: {
            name: "name",
            suggestions: ["commander", "oclif", "cobra", "clap"],
          },
          priority: 76,
          exclusiveOn: [
            "--ignore-props",
            "--ignore-command-props",
            "--ignore-option-props",
            "--ignore-arg-props",
          ],
        },
        {
          name: ["-i", "--ignore-props"],
          description: "A comma separated list of props not to be preserved",
          args: {
            name: "props",
          },
          exclusiveOn: ["--preset"],
        },
        {
          name: "--ignore-command-props",
          description: "The command props that should always be overridden",
          args: {
            name: "props",
          },
          exclusiveOn: ["--preset"],
        },
        {
          name: "--ignore-option-props",
          description: "The option props that should always be overridden",
          args: {
            name: "props",
          },
          exclusiveOn: ["--preset"],
        },
        {
          name: "--ignore-arg-props",
          description: "The arg props that should always be overridden",
          args: {
            name: "props",
          },
          exclusiveOn: ["--preset"],
        },
        {
          name: ["-n", "--new-file"],
          description: "Create a new spec file instead of updating the old one",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
