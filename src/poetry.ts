const help: Fig.Option = {
  name: ["-h", "--help"],
  description: "Display help information",
};

const quiet: Fig.Option = {
  name: ["-q", "--quiet"],
  description: "Do not output any message",
};

const verbose: Fig.Option = {
  name: ["-v", "--verbose"],
  description: "Increase the verbosity of messages",
};

const vverbose: Fig.Option = {
  name: "-vv",
  description: "More verbose output",
};

const vvverbose: Fig.Option = {
  name: "-vvv",
  description: "Debug output",
};

const version: Fig.Option = {
  name: ["-V", "--version"],
  description: "Display this application version",
};

const ansi: Fig.Option = {
  name: "--ansi",
  description: "Force ANSI output",
};

const noAnsi: Fig.Option = {
  name: "--no-ansi",
  description: "Disable ANSI output",
};

const noInteraction: Fig.Option = {
  name: ["-n", "--no-interaction"],
  description: "Do not ask any interactive question",
};

const noPlugins: Fig.Option = {
  name: "--no-plugins",
  description: "Disables plugins",
};

const noCache: Fig.Option = {
  name: "--no-cache",
  description: "Disables poetry source caches",
};

const directory: Fig.Option = {
  name: "--directory",
  description: "The working directory for the poetry command",
  args: {
    name: "directory",
  },
};

const globalOptions: Fig.Option[] = [
  help,
  verbose,
  vverbose,
  vvverbose,
  version,
  ansi,
  noAnsi,
  noInteraction,
  noPlugins,
  noCache,
  directory,
  quiet,
];

const completionSpec: Fig.Spec = {
  name: "poetry",
  description:
    "Poetry is a tool for dependency management and packaging in Python",
  subcommands: [
    {
      name: "about",
      description: "Shows information about poetry",
      options: [...globalOptions],
    },
    {
      name: "add",
      description: "Adds a new dependency to pyproject.toml",
      options: [
        ...globalOptions,
        { name: "--group", description: "The group to add the dependency to" },
        {
          name: "--dev",
          description:
            "Add as a development dependency. (Deprecated) Use --group=dev instead",
        },
        {
          name: "--editable",
          description: "Add vcs/path dependencies as editable",
        },
        {
          name: "--extras",
          description: "Extras to activate for the dependency",
        },
        { name: "--optional", description: "Add as an optional dependency" },
        {
          name: "--python",
          description:
            "Python version for which the dependency must be installed",
        },
        {
          name: "--platform",
          description: "Platforms for which the dependency must be installed",
        },
        {
          name: "--source",
          description: "Name of the source to use to install the package",
        },
        { name: "--allow-prereleases", description: "Accept prereleases" },
        {
          name: "--dry-run",
          description:
            "Output the operations but do not execute anything (implicitly enables --verbose)",
        },
        {
          name: "--lock",
          description: "Do not perform operations (only update the lockfile)",
        },
      ],
      args: { name: "name", description: "The packages to add" },
    },
    {
      name: "build",
      description: "Builds a package, as a tarball and a wheel by default",
      options: [
        ...globalOptions,
        {
          name: "--format",
          description: "Limit the format to either sdist or wheel",
        },
      ],
    },
    {
      name: "cache",
      description:
        "The cache command regroups sub commands to interact with poetry's cache",
      subcommands: [
        {
          name: "clear",
          description: "Clears a poetry cache by name",
          options: [
            ...globalOptions,
            { name: "--all", description: "Clear all entries in the cache" },
          ],
          args: {
            name: "cache",
            description: "The name of the cache to clear",
          },
        },
        {
          name: "list",
          description: "List poetry's caches",
          options: [...globalOptions],
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
        { name: "--list", description: "List configuration settings" },
        { name: "--unset", description: "Unset configuration setting" },
        {
          name: "--local",
          description: "Set/Get from the project's local configuration",
        },
      ],
      args: [
        { name: "key", description: "Setting key" },
        { name: "value", description: "Setting value" },
      ],
    },
    {
      name: "debug",
      description:
        "The debug command regroups sub commands to interact with debug session",
      subcommands: [
        {
          name: "info",
          description: "Shows debug information",
          options: [...globalOptions],
        },
        {
          name: "resolve",
          description: "Debugs dependency resolution",
          options: [
            ...globalOptions,
            {
              name: "--extras",
              description: "Extras to activate for the dependency",
            },
            {
              name: "--python",
              description: "Python version(s) to use for resolution",
            },
            { name: "--tree", description: "Display the dependency tree" },
            {
              name: "--install",
              description:
                "Show what would be installed for the current system",
            },
          ],
          args: { name: "package", description: "The packages to resolve" },
        },
      ],
    },
    {
      name: "env",
      description:
        "The env command regroups sub commands to interact with the virtualenvs associated with a specific project",
      subcommands: [
        {
          name: "info",
          description: "Displays information about the current environment",
          options: [
            ...globalOptions,
            {
              name: "--path",
              description: "Only display the environment's path",
            },
            {
              name: "--executable",
              description:
                "Only display the environment's python executable path",
            },
          ],
        },
        {
          name: "list",
          description:
            "Lists all virtualenvs associated with the current project",
          options: [
            ...globalOptions,
            {
              name: "--full-path",
              description: "Output the full paths of the virtualenvs",
            },
          ],
        },
        {
          name: "remove",
          description:
            "Remove virtual environments associated with the project",
          options: [
            ...globalOptions,
            {
              name: "--all",
              description:
                "Remove all managed virtual environments associated with the project",
            },
          ],
          args: {
            name: "python",
            description:
              "The python executables associated with, or names of the virtual environments which are to be removed",
          },
        },
        {
          name: "use",
          description:
            "Activates or creates a new virtualenv for the current project",
          options: [...globalOptions],
          args: { name: "python", description: "The python executable to use" },
        },
      ],
    },
    {
      name: "init",
      description:
        "Creates a basic pyproject.toml file in the current directory",
      options: [
        ...globalOptions,
        { name: "--name", description: "Name of the package" },
        { name: "--description", description: "Description of the package" },
        { name: "--author", description: "Author name of the package" },
        { name: "--python", description: "Compatible Python versions" },
        {
          name: "--dependency",
          description:
            "Package to require, with an optional version constraint, e.g. requests:^2.10.0 or requests=2.11.1",
        },
        {
          name: "--dev-dependency",
          description:
            "Package to require for development, with an optional version constraint, e.g. requests:^2.10.0 or requests=2.11.1",
        },
        { name: "--license", description: "License of the package" },
      ],
    },
    {
      name: "install",
      description: "Installs the project dependencies",
      options: [
        ...globalOptions,
        { name: "--without", description: "The dependency groups to ignore" },
        {
          name: "--with",
          description: "The optional dependency groups to include",
        },
        {
          name: "--only",
          description: "The only dependency groups to include",
        },
        {
          name: "--no-dev",
          description:
            "Do not install the development dependencies. (Deprecated)",
        },
        {
          name: "--sync",
          description:
            "Synchronize the environment with the locked packages and the specified groups",
        },
        {
          name: "--no-root",
          description: "Do not install the root package (the current project)",
        },
        {
          name: "--no-directory",
          description:
            "Do not install any directory path dependencies; useful to install dependencies without source code, e.g. for caching of Docker layers)",
        },
        {
          name: "--dry-run",
          description:
            "Output the operations but do not execute anything (implicitly enables --verbose)",
        },
        {
          name: "--remove-untracked",
          description:
            "Removes packages not present in the lock file. (Deprecated)",
        },
        {
          name: "--extras",
          description: "Extra sets of dependencies to install",
        },
        { name: "--all-extras", description: "Install all extra dependencies" },
        { name: "--only-root", description: "Exclude all dependencies" },
        {
          name: "--compile",
          description:
            "Compile Python source files to bytecode. (This option has no effect if modern-installation is disabled because the old installer always compiles.)",
        },
      ],
    },
    {
      name: "lock",
      description: "Locks the project dependencies",
      options: [
        ...globalOptions,
        {
          name: "--no-update",
          description: "Do not update locked versions, only refresh lock file",
        },
        {
          name: "--check",
          description:
            "Check that the poetry.lock file corresponds to the current version of pyproject.toml",
        },
      ],
    },
    {
      name: "new",
      description: "Creates a new Python project at <path>",
      options: [
        ...globalOptions,
        { name: "--name", description: "Set the resulting package name" },
        { name: "--src", description: "Use the src layout for the project" },
        {
          name: "--readme",
          description:
            "Specify the readme file format. One of md (default) or rst",
        },
      ],
      args: { name: "path", description: "The path to create the project at" },
    },
    {
      name: "publish",
      description: "Publishes a package to a remote repository",
      options: [
        ...globalOptions,
        {
          name: "--repository",
          description: "The repository to publish the package to",
        },
        {
          name: "--username",
          description: "The username to access the repository",
        },
        {
          name: "--password",
          description: "The password to access the repository",
        },
        {
          name: "--cert",
          description: "Certificate authority to access the repository",
        },
        {
          name: "--client-cert",
          description: "Client certificate to access the repository",
        },
        { name: "--build", description: "Build the package before publishing" },
        {
          name: "--dry-run",
          description: "Perform all actions except upload the package",
        },
        {
          name: "--skip-existing",
          description:
            "Ignore errors from files already existing in the repository",
        },
      ],
    },
    {
      name: "remove",
      description: "Removes a package from the project dependencies",
      options: [
        ...globalOptions,
        {
          name: "--group",
          description: "The group to remove the dependency from",
        },
        {
          name: "--dev",
          description:
            "Remove a package from the development dependencies. (Deprecated) Use --group=dev instead",
        },
        {
          name: "--dry-run",
          description:
            "Output the operations but do not execute anything (implicitly enables --verbose)",
        },
        {
          name: "--lock",
          description: "Do not perform operations (only update the lockfile)",
        },
      ],
      args: { name: "packages", description: "The packages to remove" },
    },
    {
      name: "run",
      description: "Runs a command in the appropriate environment",
      options: [...globalOptions],
      args: {
        name: "args",
        description: "The command and arguments/options to run",
      },
    },
    {
      name: "search",
      description: "Searches for packages on remote repositories",
      options: [...globalOptions],
      args: { name: "tokens", description: "The tokens to search for" },
    },
    {
      name: "self",
      description:
        "The self namespace regroups sub commands to manage the poetry installation itself",
      subcommands: [
        {
          name: "add",
          description:
            "Add additional packages to poetry's runtime environment",
          options: [
            ...globalOptions,
            {
              name: "--editable",
              description: "Add vcs/path dependencies as editable",
            },
            {
              name: "--extras",
              description: "Extras to activate for the dependency",
            },
            {
              name: "--source",
              description: "Name of the source to use to install the package",
            },
            { name: "--allow-prereleases", description: "Accept prereleases" },
            {
              name: "--dry-run",
              description:
                "Output the operations but do not execute anything (implicitly enables --verbose)",
            },
          ],
          args: { name: "name", description: "The packages to add" },
        },
        {
          name: "install",
          description:
            "Install locked packages (incl. addons) required by this poetry installation",
          options: [
            ...globalOptions,
            {
              name: "--sync",
              description:
                "Synchronize the environment with the locked packages and the specified groups",
            },
            {
              name: "--dry-run",
              description:
                "Output the operations but do not execute anything (implicitly enables --verbose)",
            },
          ],
        },
        {
          name: "lock",
          description: "Lock the poetry installation's system requirements",
          options: [
            ...globalOptions,
            {
              name: "--no-update",
              description:
                "Do not update locked versions, only refresh lock file",
            },
            {
              name: "--check",
              description:
                "Check that the poetry.lock file corresponds to the current version of pyproject.toml",
            },
          ],
        },
        {
          name: "remove",
          description:
            "Remove additional packages from poetry's runtime environment",
          options: [
            ...globalOptions,
            {
              name: "--dry-run",
              description:
                "Output the operations but do not execute anything (implicitly enables --verbose)",
            },
          ],
          args: { name: "packages", description: "The packages to remove" },
        },
        {
          name: "show",
          description: "Show packages from poetry's runtime environment",
          options: [
            ...globalOptions,
            {
              name: "--addons",
              description: "List only add-on packages installed",
            },
            { name: "--tree", description: "List the dependencies as a tree" },
            { name: "--latest", description: "Show the latest version" },
            {
              name: "--outdated",
              description:
                "Show the latest version but only for packages that are outdated",
            },
          ],
          args: { name: "package", description: "The package to inspect" },
        },
        {
          name: "update",
          description: "Updates poetry to the latest version",
          options: [
            ...globalOptions,
            {
              name: "--preview",
              description: "Allow the installation of pre-release versions",
            },
            {
              name: "--dry-run",
              description:
                "Output the operations but do not execute anything (implicitly enables --verbose)",
            },
          ],
          args: { name: "version", description: "The version to update to" },
        },
      ],
    },
    {
      name: "shell",
      description: "Spawns a shell within the virtual environment",
      options: [...globalOptions],
    },
    {
      name: "show",
      description: "Shows information about packages",
      options: [
        ...globalOptions,
        { name: "--without", description: "The dependency groups to ignore" },
        {
          name: "--with",
          description: "The optional dependency groups to include",
        },
        {
          name: "--only",
          description: "The only dependency groups to include",
        },
        {
          name: "--no-dev",
          description: "Do not list the development dependencies. (Deprecated)",
        },
        { name: "--tree", description: "List the dependencies as a tree" },
        {
          name: "--why",
          description:
            "When showing the full list, or a --tree for a single package, also display why it's included",
        },
        { name: "--latest", description: "Show the latest version" },
        {
          name: "--outdated",
          description:
            "Show the latest version but only for packages that are outdated",
        },
        {
          name: "--all",
          description:
            "Show all packages (even those not compatible with current system)",
        },
        {
          name: "--top-level",
          description: "Show only top-level dependencies",
        },
      ],
      args: { name: "package", description: "The package to inspect" },
    },
    {
      name: "source",
      description:
        "The source namespace regroups sub commands to manage repository sources for a poetry project",
      subcommands: [
        {
          name: "add",
          description: "Add source configuration for project",
          options: [
            ...globalOptions,
            {
              name: "--default",
              description:
                "Set this source as the default (disable PyPI). A default source will also be the fallback source if you add other sources. (Deprecated, use --priority)",
            },
            {
              name: "--secondary",
              description:
                "Set this source as secondary. (Deprecated, use --priority)",
            },
            {
              name: "--priority",
              description:
                "Set the priority of this source. One of: default, primary, secondary, supplemental, explicit. Defaults to primary",
            },
          ],
          args: [
            { name: "name", description: "Source repository name" },
            {
              name: "url",
              description:
                "Source repository URL. Required, except for PyPI, for which it is not allowed",
            },
          ],
        },
        {
          name: "remove",
          description: "Remove source configured for the project",
          options: [...globalOptions],
          args: { name: "name", description: "Source repository name" },
        },
        {
          name: "show",
          description:
            "Show information about sources configured for the project",
          options: [...globalOptions],
          args: {
            name: "source",
            description:
              "Source(s) to show information for. Defaults to showing all sources",
          },
        },
      ],
    },
    {
      name: "update",
      description:
        "Update the dependencies as according to the pyproject.toml file",
      options: [
        ...globalOptions,
        { name: "--without", description: "The dependency groups to ignore" },
        {
          name: "--with",
          description: "The optional dependency groups to include",
        },
        {
          name: "--only",
          description: "The only dependency groups to include",
        },
        {
          name: "--no-dev",
          description:
            "Do not update the development dependencies. (Deprecated)",
        },
        {
          name: "--dry-run",
          description:
            "Output the operations but do not execute anything (implicitly enables --verbose)",
        },
        {
          name: "--lock",
          description: "Do not perform operations (only update the lockfile)",
        },
      ],
      args: { name: "packages", description: "The packages to update" },
    },
    {
      name: "version",
      description:
        "Shows the version of the project or bumps it when a valid bump rule is provided",
      options: [
        ...globalOptions,
        { name: "--short", description: "Output the version number only" },
        { name: "--dry-run", description: "Do not update pyproject.toml file" },
      ],
      args: {
        name: "version",
        description: "The version number or the rule to update the version",
      },
    },
  ],
  options: [...globalOptions],
  // Only uncomment if poetry takes an argument
  // args: {}
};

export default completionSpec;
