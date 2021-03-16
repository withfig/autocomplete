export const cargoCompletionSpec: Fig.Spec = {
  name: "cargo",
  description: "CLI Interface for Cargo",
  subcommands: [
    {
      name: "build",
      description: "compile local package and dependencies",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage info",
        },
        {
          name: ["--bins"],
          description: "build all binaries",
        },
        {
          name: ["--all-targets"],
          description: "activate all available features",
        },
        {
          name: ["--all"],
          description: "alias for workspace",
        },
        {
          name: ["-j, --jobs"],
          description: "number of CPUS",
          insertValue: "-j {cursor}",
        },
      ],
    },
    {
      name: "run",
      description: "Run a binary or example of the local package",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage info",
        },
      ],
    },
    {
      name: "init",
      description: "creates new cargo pkg in directory",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage info",
        },
        {
          name: ["--bin"],
          description: "Use a binary (application) template [default]",
        },
        {
          name: ["--offline"],
          description: "run without network",
        },
      ],
      args: {
        template: "filepaths"
      },
    }
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Overview of CLI",
    },
    {
      name: ["-V", "--version"],
      description: "The current version",
    },
    {
      name: ["-q", "--quiet"],
      description: "no output",
    },
  ],
};
