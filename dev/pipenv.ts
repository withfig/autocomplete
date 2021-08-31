import { packageList } from "./pip";

const completionSpec: Fig.Spec = {
  name: "pipenv",
  description: "Python package manager",
  subcommands: [
    {
      name: "check",
      description:
        "Checks for PyUp Safety security vulnerabilities and against PEP 508 markers provided in Pipfile",
    },

    {
      name: "clean",
      description: "Uninstalls all packages not specified in Pipfile.lock",
    },

    {
      name: "graph",
      description: "Displays currently-installed dependency graph information",
    },

    {
      name: "install",
      description:
        "Initalizes a package manager or installs all packages from Pipfile",

      args: {
        name: "package",
        description: "Package to install",
        isOptional: true,
        suggestions: packageList,
      },
    },

    {
      name: "lock",
      description: "Generates Pipfile.lock",
    },

    {
      name: "open",
      description: "View a given module in your editor",
    },

    {
      name: "run",
      description: "Spawns a command installed into the virtualenv",
    },

    {
      name: "scripts",
      description: "Lists scripts in current environment config",
    },

    {
      name: "shell",
      description: "Start a shell within the environment",
    },

    {
      name: "sync",
      description: "Installs all packages specified in Pipfile.lock",
    },

    {
      name: "uninstall",
      description: "Uninstalls a provided package and removes it from Pipfile",
      args: {
        name: "package",
        description: "Package to uninstall",
        isOptional: true,
        suggestions: packageList,
      },
    },

    {
      name: "update",
      description: "Runs lock, then sync",
    },
  ],

  options: [
    {
      name: "--where",
      description: "View project home information",
    },

    {
      name: "--venv",
      description: "View virtualenv information",
    },

    {
      name: "--py",
      description: "View python interpreter information",
    },

    {
      name: "--envs",
      description: "View environment variable options",
    },

    {
      name: "--rm",
      description: "Remove the virtualenv",
    },

    {
      name: "--bare",
      description: "Minimal output",
    },

    {
      name: "--completion",
      description: "Output completion (to be executed by shell)",
    },

    {
      name: "--man",
      description: "Display manpage",
    },

    {
      name: "--support",
      description: "View diagnostic information for use in Github issues",
    },

    {
      name: ["--site-packages", "--no-site-packages"],
      description:
        "Enable site-packages for the virtualenv [env var: PIPENV_SITE_PACKAGES]",
    },

    {
      name: "--python",
      description: "Specify which version of Python virtualenv should use",
      args: {
        name: "version",
      },
    },

    {
      name: "--three",
      description: "Use python 3 when creating virtualenv",
    },

    {
      name: "--two",
      description: "Use python 2 when creating virtualenv",
    },

    {
      name: "--clear",
      description:
        "Clears caches (pipenv, pip, and pip-tools). [env var: PIPENV_CLEAR]",
    },

    {
      name: ["-v", "--verbose"],
      description: "Verbose mode",
    },

    {
      name: "--pypi-mirror",
      description: "Specify a PyPi mirror",
      args: {
        name: "TEXT",
      },
    },

    {
      name: "--version",
      description: "View your current pipenv version",
    },

    {
      name: ["-h", "--help"],
      description: "List commands",
    },
  ],
};

export default completionSpec;
