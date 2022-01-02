const helpOption: Fig.Option[] = [
  {
    name: ["-h", "--help"],
    description: "More information about command",
  },
];

const completionSpec: Fig.Spec = {
  name: "exercism",
  description: "Solve coding exercises in your chosen programming languages",
  subcommands: [
    {
      name: ["configure", "c"],
      description: "Configure the command-line client",
      options: [
        ...helpOption,
        {
          name: ["-a", "--api"],
          description: "API base url",
          args: {
            name: "url",
            isOptional: false,
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
            isOptional: false,
          },
        },
        {
          name: ["-w", "--workspace"],
          description: "Directory for exercism exercises",
          args: {
            name: "path",
            template: "folders",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: ["download", "d"],
      description: "Download an exercise",
      options: [
        ...helpOption,
        {
          name: ["-e", "--exercise"],
          description: "The exercise slug",
          args: {
            name: "exercise",
            isOptional: false,
          },
        },
        {
          name: ["-T", "--team"],
          description: "The team slug",
          args: {
            name: "team",
            isOptional: false,
          },
        },
        {
          name: ["-t", "--track"],
          description: "The track ID",
          args: {
            name: "track",
            isOptional: false,
          },
        },
        {
          name: ["-u", "--uuid"],
          description: "The solution UUID",
          args: {
            name: "uuid",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      options: [...helpOption],
    },
    {
      name: ["open", "o"],
      description: "Open an exercise on the website",
      options: [...helpOption],
      args: {
        name: "path",
        template: "folders",
        isOptional: false,
      },
    },
    {
      name: ["prepare", "p"],
      description: "Prepare does setup for Exercism and its tracks",
      options: [...helpOption],
    },
    {
      name: ["submit", "s"],
      description: "Submit your solution to an exercise",
      args: {
        name: "file",
        description: "The files you want to submit",
        template: "filepaths",
        isOptional: false,
        isVariadic: true,
      },
      options: [...helpOption],
    },
    {
      name: ["troubleshoot", "t", "debug"],
      description: "Troubleshoot does a diagnostic self-check",
      options: [
        ...helpOption,
        {
          name: ["-f", "--full-api-key"],
          description: "Display the user's full API key",
        },
      ],
    },
    {
      name: ["upgrade", "u"],
      description: "Upgrade to the latest version of the CLI",
      options: [...helpOption],
    },
    {
      name: ["version", "v"],
      description: "Version outputs the version of CLI",
      options: [...helpOption],
    },
    {
      name: ["workspace", "w"],
      description: "Print out the path to your Exercism workspace",
      options: [...helpOption],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for exercism",
    },
    {
      name: "--timeout",
      description: "Override the default HTTP timeout",
      args: {
        name: "value",
        isOptional: false,
      },
    },
    {
      name: "--unmask-token",
      description: "Will unmask the API during a request/response dump",
    },
    {
      name: ["--verbose", "-v"],
      description: "Verbose output",
    },
  ],
};
export default completionSpec;
