const semverRegex =
  /((([0-9]+)\.([0-9]+)\.([0-9]+)(?:-([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?)(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?)/gm;

const globalOptions: Fig.Option[] = [
  {
    name: ["-h", "--help"],
    description: "Print this usage information",
  },
];

const completionSpec: Fig.Spec = {
  name: "fvm",
  description:
    "Flutter Version Management: A cli to manage Flutter SDK versions",
  options: [
    ...globalOptions,
    {
      name: "--verbose",
      description: "Print verbose output",
    },
    {
      name: "--version",
      description: "Current FVM version",
    },
  ],
  subcommands: [
    {
      name: "config",
      description: "Set configuration for FVM",
      options: [
        ...globalOptions,
        {
          name: ["-c", "--cache-path"],
          description:
            "Set the path which FVM will cache the version. Priority over FVM_HOME",
          args: {
            name: "path",
            description: "Path to the Flutter versions cache",
            template: "filepaths",
          },
        },
        {
          name: ["-s", "--skip-setup", "--no-skip-setup"],
          description: "Skip setup after a version install",
        },
        {
          name: ["-g", "--git-cache", "--no-git-cache"],
          description:
            "ADVANCED: Will cache a local version of Flutter repo for faster version install",
        },
      ],
    },
    {
      name: "dart",
      description: "Proxies Dart commands",
    },
    {
      name: "doctor",
      description:
        "Shows information about environment, and project configuration",
    },
    {
      name: "flavor",
      description: "Switches between different project flavors",
      args: {
        name: "flavor-name",
        description: "The flavor to switch to",
      },
    },
    {
      name: "flutter",
      description: "Proxies Flutter commands",
      loadSpec: "flutter",
    },
    {
      name: "global",
      description: "Sets Flutter SDK version as global",
      args: {
        name: "version",
        description: "Flutter SDK to set for global flutter command",
      },
    },
    {
      name: "install",
      description: "Installs Flutter SDK version",
      args: {
        name: "version",
        suggestions: [
          {
            name: "stable",
            description: "Latest stable release of Flutter",
            priority: 100,
          },
          {
            name: "beta",
            description: "Latest beta release of Flutter",
            priority: 99,
          },
          {
            name: "dev",
            description: "Latest dev release of Flutter (master)",
            priority: 98,
          },
        ],
        generators: {
          script: ["fvm", "releases"],
          postProcess: function (out): Fig.Suggestion[] {
            const matches = out.match(semverRegex);
            const matchesSet = [...new Set(matches)];
            return matchesSet.map((match) => ({ name: match })).reverse();
          },
        },
      },
      options: [
        ...globalOptions,
        {
          name: ["-s", "--skip-setup"],
          description: "Skips Flutter setup after install",
        },
      ],
    },
    {
      name: "list",
      description: "Lists installed Flutter SDK versions",
      options: [...globalOptions],
    },
    {
      name: "releases",
      description: "View all Flutter SDK releases available for install",
      options: [...globalOptions],
    },
    {
      name: "remove",
      description: "Removes Flutter SDK version",
      args: {
        name: "version",
        description: "The installed Flutter version to remove",
      },
      options: [
        ...globalOptions,
        {
          name: "--force",
          description: "Skips version global check",
        },
      ],
    },
    {
      name: "spawn",
      description: "Spawn a Flutter SDK version command",
      args: {
        name: "version",
        description: "The Flutter version from which to spawn a command",
      },
    },
    {
      name: "use",
      description: "Sets a Flutter SDK version to be used in a project",
      args: {
        name: "version",
        description: "The Flutter SDK version to use",
      },
      options: [
        ...globalOptions,
        {
          name: ["-f", "--force"],
          description: "Skips command guards that does Flutter project checks",
        },
        {
          name: ["-p", "--pin"],
          description:
            "If version provided is a channel. Will pin the latest release of the channel",
        },
        {
          name: "--flavor",
          description: "Sets version for a project flavor",
        },
      ],
    },
  ],
};

export default completionSpec;
