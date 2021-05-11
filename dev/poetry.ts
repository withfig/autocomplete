const help = {
  name: ["-h", "--help"],
  description: "Display this help message",
};

const quiet = {
  name: ["-q", "--quiet"],
  description: "Do not output any message",
};

const verbose = {
  name: ["-v", "--verbose"],
  description: "Increase the verbosity of messages",
};

const vverbose = {
  name: ["-vv"],
  description: "More verbose output",
};

const vvverbose = {
  name: ["-vvv"],
  description: "Most verbose output for debug",
};

const version = {
  name: ["-V", "--version"],
  description: "Display this application version",
};

const ansi = {
  name: ["--ansi"],
  description: "Force ANSI output",
};

const noAnsi = {
  name: ["--no-ansi"],
  description: "Disable ANSI output",
};

const noInteraction = {
  name: ["-n", "--no-interaction"],
  description: "Do not ask any interactive question",
};

const globalOptions = [
  help,
  verbose,
  vverbose,
  vvverbose,
  version,
  ansi,
  noAnsi,
  noInteraction,
];

export const completion: Fig.Spec = {
  name: "poetry",
  description: "Python package manager",
  subcommands: [
    {
      name: "about",
      description: "Show information about Poetry",
      options: [...globalOptions],
    },
    {
      name: "add",
      description: "Adds a new dependency to pyproject.toml",
      args: {
        name: "dependency",
        description: "Package to add",
      },
      options: [
        ...globalOptions,
        {
          name: ["-D", "--dev"],
          description: "Add as a development dependency",
        },
        {
          name: ["-E", "--extras"],
          description: "Extras to activate for the dependency",
          args: {
            name: "extras",
            description: "Extras",
          },
        },
        {
          name: ["--optional"],
          description: "Add as an optional dependency",
        },
        {
          name: ["--dry-run"],
          description:
            "Output the operations but do not execute anything (implicitly enables --verbose)",
        },
        {
          name: ["--lock"],
          description: "Do not perform operations (only update the lockfile)",
        },
      ],
    },
    {
      name: "build",
      description: "Builds a package, as a tarball and a wheel by default",
      options: [
        ...globalOptions,
        {
          name: ["-f", "--format"],
          description: "Limit the format to either sdist or wheel",
          args: [
            {
              name: "format",
              suggestions: [
                {
                  name: "sdist",
                  description: "Use sdist format",
                },
                {
                  name: "wheel",
                  description: "Use wheel format",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "check",
      description: "Checks the validity of the pyproject.toml file",
      options: [...globalOptions],
    },
    {
      name: "config",
      description: "Manages configuration settings",
      options: [
        ...globalOptions,
        {
          name: ["--list"],
          description: "List configuration settings",
        },
        {
          name: ["--unset"],
          description: "Unset configuration setting",
          args: {
            name: "key",
            description: "Setting key to remove",
          },
        },
        {
          name: ["--local"],
          description: "Set/Get from the project's local configuration",
        },
      ],
      args: [
        {
          name: "key",
          description: "Setting key",
          suggestions: [
            {
              name: "cache-dir",
              description: "The path to the cache directory used by Poetry",
            },
            {
              name: "virtualenvs.create",
              description:
                "Create a new virtualenv if one doesn't already exist",
            },
            {
              name: "virtualenvs.in-project",
              description:
                "Create the virtualenv inside the project's root directory",
            },
            {
              name: "virtualenvs.path",
              description:
                "Directory where virtual environments will be created",
            },
            {
              name: "repositories.{name}",
              description: "Set a new alternative repository",
              insertValue: "repositories.",
            },
          ],
        },
        {
          name: "value",
          description: "Setting value",
        },
      ],
    },
  ],
  options: [...globalOptions],
  // Only uncomment if poetry takes an argument
  // args: {}
};
