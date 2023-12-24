const installVersionsGenerator: Fig.Generator = {
  script: ["rbenv", "install", "-L"],
  postProcess: function (out) {
    return out.split("\n").map((name) => ({ name }));
  },
};

const installedVersionsGenerator: Fig.Generator = {
  script: ["rbenv", "versions", "--bare"],
  postProcess: function (out) {
    return out.split("\n").map((name) => ({ name }));
  },
};

const versionArg = (generator?: Fig.Generator, required = false): Fig.Arg => ({
  name: "version",
  isOptional: !required,
  generators: generator,
});

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
      args: versionArg(installedVersionsGenerator),
      options: versionOptions,
    },
    {
      name: "install",
      description: "Install a Ruby version using ruby-build",
      args: versionArg(installVersionsGenerator, true),
      options: [
        {
          name: "--version",
          description: "Show version of ruby-build",
          args: versionArg(),
        },
      ],
    },
    {
      name: "local",
      description: "Set or show the local application-specific Ruby version",
      args: versionArg(installedVersionsGenerator),
      options: versionOptions,
    },
    {
      name: "rehash",
      description: "Rehash rbenv shims (run this after installing executables)",
    },
    {
      name: "shell",
      description: "Set or show the shell-specific Ruby version",
      args: versionArg(installedVersionsGenerator),
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
