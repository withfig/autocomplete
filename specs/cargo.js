var completionSpec = {
  name: "cargo",
  description: "CLI Interface for Cargo",
  args: {},
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
          args: {},
        },
      ],
      args: {
        template: "files",
      },
    },
    {
      name: "deploy",
      description: "deploy project to firebase server",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage info",
        },
        {
          name: ["-p", "--public"],
          insertValue: "-p {cursor}",
          description:
            "override the Hosting public directory specified in firebase.json",
          args: {},
        },
        {
          name: ["-m", "--message"],
          insertValue: "-m {cursor}",
          description: "use the message",
          args: {},
        },
        {
          name: ["-f", "--force"],
          description:
            "delete Cloud Functions missing from the current working directory without confirmation",
          args: {},
        },
        {
          name: ["--only"],
          insertValue: "--only {cursor}",
          description:
            "only serve specified targets (valid targets are: hosting, functions)",
          args: {},
        },
        {
          name: ["--except"],
          insertValue: "--except {cursor}",
          description:
            "serve all except specified targets (valid targets are: hosting, functions)",
          args: {},
        },
      ],
    },
    {
      name: "b",
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
