const completionSpec: Fig.Spec = {
  name: "exercism",
  description: "Solve coding exercises in your chosen programming languages",
  subcommands: [
    {
      name: ["configure", "c"],
      description: "Configure the command-line client",
      options: [
        {
          name: ["-a", "--api"],
          description: "API base url",
          args: {
            name: "url",
          },
        },
        {
          name: "--no-verify",
          description: "Skip online token authorization check",
        },
        {
          name: ["-s", "--show"],
          description: "Show the current configuration",
        },
        {
          name: ["-t", "--token"],
          description: "Auth token used to connect to the site",
          args: {
            name: "token",
          },
        },
        {
          name: ["-w", "--workspace"],
          description: "Directory for exercism exercises",
          args: {
            name: "path",
            template: "folders",
          },
        },
      ],
    },
    {
      name: ["download", "d"],
      description: "Download an exercise",
      options: [
        {
          name: ["-e", "--exercise"],
          description: "The exercise slug",
          args: {
            name: "exercise",
          },
        },
        {
          name: ["-T", "--team"],
          description: "The team slug",
          args: {
            name: "team",
          },
        },
        {
          name: ["-t", "--track"],
          description: "The track ID",
          args: {
            name: "track",
          },
        },
        {
          name: ["-u", "--uuid"],
          description: "The solution UUID",
          args: {
            name: "uuid",
          },
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
    },
    {
      name: ["open", "o"],
      description: "Open an exercise on the website",
      args: {
        name: "path",
        template: "folders",
      },
    },
    {
      name: ["prepare", "p"],
      description: "Prepare does setup for Exercism and its tracks",
    },
    {
      name: ["submit", "s"],
      description: "Submit your solution to an exercise",
      args: {
        name: "file",
        description: "The files you want to submit",
        template: "filepaths",
        isVariadic: true,
      },
    },
    {
      name: ["troubleshoot", "t", "debug"],
      description: "Troubleshoot does a diagnostic self-check",
      options: [
        {
          name: ["-f", "--full-api-key"],
          description: "Display the user's full API key",
        },
      ],
    },
    {
      name: ["upgrade", "u"],
      description: "Upgrade to the latest version of the CLI",
    },
    {
      name: ["version", "v"],
      description: "Version outputs the version of CLI",
    },
    {
      name: ["workspace", "w"],
      description: "Print out the path to your Exercism workspace",
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Help for this command",
      isPersistent: true,
    },
    {
      name: "--timeout",
      description: "Override the default HTTP timeout",
      isPersistent: true,
      args: {
        name: "value",
      },
    },
    {
      name: "--unmask-token",
      description: "Will unmask the API during a request/response dump",
      isPersistent: true,
    },
    {
      name: ["--verbose", "-v"],
      description: "Verbose output",
      isPersistent: true,
    },
  ],
};

export default completionSpec;
