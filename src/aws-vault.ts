const profilesGenerator: Fig.Generator = {
  script: ["aws-vault", "list", "--profiles"],
  postProcess(out) {
    return out.split("\n").map((name) => ({ name }));
  },
};

const subcommands: Fig.Subcommand[] = [
  {
    name: "add",
    description: "Add credentials to the secure keystore",
    args: {
      name: "profile",
      description: "The profile you want to add",
    },
  },
  {
    name: "remove",
    description: "Remove credentials from the secure keystore",
    args: {
      name: "profile",
      generators: profilesGenerator,
    },
    options: [
      {
        name: ["-f", "--force"],
        description: "Force-remove the profile without a prompt",
      },
    ],
  },
  {
    name: "list",
    description: "List profiles, along with their credentials and sessions",
    options: [
      {
        name: "--profiles",
        description: "Show only the profile names",
      },
      {
        name: "--sessions",
        description: "Show only the session names",
      },
      {
        name: "--credentials",
        description: "Show only the profiles with stored credential",
      },
    ],
  },
  {
    name: "rotate",
    description: "Rotate credentials",
    args: {
      name: "profile",
      generators: profilesGenerator,
    },
    options: [
      {
        name: ["-n", "--no-session"],
        description: "Use master credentials, no session or role used",
      },
    ],
  },
  {
    name: "exec",
    description: "Execute a command with AWS credentials",
    args: [
      {
        name: "profile",
        generators: profilesGenerator,
      },
      {
        name: "command",
        isCommand: true,
      },
    ],
    options: [
      {
        name: ["-d", "--duration"],
        description:
          "Duration of the temporary or assume-role session. Defaults to 1h",
        args: {
          name: "DURATION",
        },
      },
      {
        name: ["-n", "--no-session"],
        description: "Use master credentials, no session or role used",
      },
      {
        name: "--region",
        description: "The AWS region",
        args: {
          name: "REGION",
        },
      },
      {
        name: ["-t", "--mfa-token"],
        description: "The MFA token to use",
        args: {
          name: "MFA-TOKEN",
        },
      },
    ],
  },
  {
    name: "export",
    description: "Export AWS credentials",
    args: {
      name: "profile",
      generators: profilesGenerator,
    },
  },
  {
    name: "clear",
    description: "Clear temporary credentials from the secure keystore",
    args: {
      name: "profile",
      generators: profilesGenerator,
    },
  },
  {
    name: "login",
    description: "Generate a login link for the AWS Console",
    args: {
      name: "profile",
      generators: profilesGenerator,
    },
  },
  {
    name: "help",
    description: "Show help about the command",
    args: {
      name: "command",
      template: "help",
    },
  },
];

const completionSpec: Fig.Spec = {
  name: "aws-vault",
  description:
    "A vault for securely storing and accessing AWS credentials in development environments",
  subcommands,
  options: [
    {
      name: "--help",
      description:
        "Show context-sensitive help (also try --help-long and --help-man)",
    },
    {
      name: "--version",
      description: "Show application version",
    },
    {
      name: "--debug",
      description: "Show debugging output",
    },
  ],
};

export default completionSpec;
