const commonOptions: Fig.Option[] = [
  {
    name: "--format",
    description: "The output format (txt, xml, json, or md)",
    args: {
      suggestions: ["txt", "xml", "json", "md"],
    },
  },
  {
    name: "--raw",
    description: "To output raw command list",
  },
];

const completionSpec: Fig.Spec = {
  name: "laravel",
  description: "Laravel Installer",
  subcommands: [
    {
      name: "help",
      options: commonOptions,
    },
    {
      name: "list",
      options: commonOptions,
    },
    {
      name: "new",
      description: "Create a new Laravel application",
      args: {
        name: "name",
      },
      options: [
        {
          name: "--dev",
          description: 'Installs the latest "development" release',
        },
        {
          name: "--git",
          description: "Initialize a Git repository",
        },
        {
          name: "--branch",
          description: "The branch that should be created for a new repository",
          args: {
            name: "BRANCH",
            default: "main",
          },
        },
        {
          name: "--github",
          description: "Create a new repository on GitHub",
          args: {
            name: "GITHUB",
            isOptional: true,
            default: "false",
          },
        },
        {
          name: "--jet",
          description: "Installs the Laravel Jetstream scaffolding",
        },
        {
          name: "--stack",
          description: "The Jetstream stack that should be installed",
          args: {
            name: "STACK",
            suggestions: ["livewire", "inertia"],
          },
        },
        {
          name: "--teams",
          description:
            "Indicates whether Jetstream should be scaffolded with team support",
        },
        {
          name: "--prompt-jetstream",
          description:
            "Issues a prompt to determine if Jetstream should be installed",
        },
        {
          name: ["-f", "--force"],
          description: "Forces install even if the directory already exists",
        },
      ],
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Display the help message",
    },
    {
      name: ["-q", "--quiet"],
      description: "Do not output any message",
    },
    {
      name: ["-V", "--version"],
      description: "Display this application version",
    },
    {
      name: "--ansi",
      description: "Force ANSI output",
    },
    {
      name: "--no-ansi",
      description: "Disable ANSI output",
    },
    {
      name: ["-n", "--no-interaction"],
      description: "Do not ask any interactive question",
    },
    {
      name: ["-v", "--verbose"],
      isRepeatable: 3,
      description:
        "Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug",
    },
  ],
};

export default completionSpec;
