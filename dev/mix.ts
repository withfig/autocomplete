const constants = {
  elixir_logo_url:
    "data:image/jpeg;base64,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",
};

const completionSpec: Fig.Spec = {
  name: "mix",
  description: "Build tool for Elixir",
  subcommands: [
    {
      name: ["new"],
      hidden: false,
      description: "Creates a new Elixir project at the given path",
      priority: 64,
      args: [
        {
          isOptional: true,
          name: "name",
        },
      ],

      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: constants.elixir_logo_url,
        },
      ],
    },
    {
      name: ["help"],
      hidden: false,
      icon: constants.elixir_logo_url,
      description:
        "Prints documentation for a given task (Lists all the tasks if no task is specified)",
      priority: 64,
      args: [
        {
          isOptional: true,
          name: "task",
        },
      ],
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Shows usage information",
    },
    {
      name: ["-v", "--version"],
      description: "Shows versioning information",
    },
  ],
};

export default completionSpec;
