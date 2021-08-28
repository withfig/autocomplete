import * as Fig from "../schemas";

const versionArg: Fig.Arg = {
  name: "version",
  isOptional: true,
};

const versionOptions: Fig.Option[] = [
  {
    name: "--unset",
  },
];

const completionSpec: Fig.Spec = {
  name: "rbenv",
  description:
    "Pick a Ruby version for your application and guarantee that your development environment matches production",
  subcommands: [
    {
      name: "commands",
      description: "List all available rbenv commands",
      options: [
        {
          name: "--sh",
        },
        {
          name: "--no-sh",
        },
      ],
    },
    {
      name: "global",
      description: "Set or show the global Ruby version",
      args: versionArg,
      options: versionOptions,
    },
    {
      name: "install",
      description: "Install a Ruby version using ruby-build",
      options: [
        {
          name: "--version",
          description: "Show version of ruby-build",
          args: versionArg,
        },
      ],
    },
    {
      name: "local",
      description: "Set or show the local application-specific Ruby version",
      args: versionArg,
      options: versionOptions,
    },
    {
      name: "rehash",
      description: "Rehash rbenv shims (run this after installing executables)",
    },
    {
      name: "shell",
      description: "Set or show the shell-specific Ruby version",
      args: versionArg,
    },
    {
      name: "uninstall",
      description: "Uninstall a specific Ruby version",
      options: [
        {
          name: "-f",
          description:
            "If the version does not exist, do not display an error message",
          args: {},
        },
      ],
    },
    {
      name: "versions",
      description: "List installed Ruby versions",
    },
    {
      name: "whence",
      description: "List all Ruby versions that contain the given executable",
    },
    {
      name: "which",
      description: "Display the full path to an executable",
      args: { name: "command" },
    },
  ],
};

export default completionSpec;
