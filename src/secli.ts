const completion: Fig.Spec = {
  name: "secli",
  description:
    "A simple CLI to store secrets locally and retrieve them via the CLI",
  subcommands: [
    {
      name: ["add", "new", "insert", "create"],
      description: "Add a secret",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: {
        name: "name",
        isOptional: true,
      },
    },
    {
      name: ["get", "read", "show"],
      description: "Get a secret",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: {
        name: "name",
        isOptional: true,
      },
    },
    {
      name: ["list", "ls"],
      description: "List all secrets",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "update",
      description: "Upate a secret",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: {
        name: "name",
        isOptional: true,
      },
    },
    {
      name: ["delete", "remove"],
      description: "Delete a secret",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
      args: {
        name: "name",
        isOptional: true,
      },
    },
    {
      name: "generate-fig-spec",
      description: "Print fig completion specs",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
      ],
    },
    {
      name: "help",
      description: "Print this message or the help of the given subcommand(s)",
      args: {
        name: "subcommand",
        isOptional: true,
      },
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Print help information",
    },
    {
      name: ["-V", "--version"],
      description: "Print version information",
    },
  ],
};

export default completion;
