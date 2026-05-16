const completionSpec: Fig.Spec = {
  name: "wing",
  subcommands: [
    {
      name: "run",
      description: "Runs a Wing executable in the Wing Console",
      options: [
        {
          name: ["-h", "--help"],
          description: "Display help for command",
          priority: 49,
        },
      ],
      args: { name: "executable", description: "Executable .wx file" },
    },
    {
      name: "compile",
      description: "Compiles a Wing program",
      options: [
        {
          name: ["-o", "--out-dir"],
          description: "Output directory",
          args: {
            name: "out-dir",
          },
        },
        {
          name: ["-t", "--target"],
          description: "Target platform (options: 'tf-aws', 'sim')",
          args: { name: "target", default: "tf-aws" },
        },
        {
          name: ["-h", "--help"],
          description: "Display help for command",
          priority: 49,
        },
      ],
      args: { name: "entrypoint", description: "Program .w entrypoint" },
    },
    {
      name: "upgrade",
      description: "Upgrades the Wing toolchain to the latest version",
      options: [
        {
          name: ["-h", "--help"],
          description: "Display help for command",
          priority: 49,
        },
      ],
    },
    {
      name: "help",
      description: "Display help for command",
      priority: 49,
      args: { name: "command", isOptional: true, template: "help" },
    },
  ],
};

export default completionSpec;
