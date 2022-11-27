// REFERENCE: https://pipenv.pypa.io/en/stable/cli/
import { filepaths } from "@fig/autocomplete-generators";
import { packageList } from "./pip";

const completionSpec: Fig.Spec = {
  name: "pipenv",
  description: "Python package manager",
  subcommands: [
    {
      name: "check",
      description:
        "Checks for PyUp Safety security vulnerabilities and against PEP 508 markers provided in Pipfile",
      options: [
        {
          name: "--unused",
          description:
            "Given a code path, show potentially unused dependencies",
          args: {
            name: "code path",
          },
        },
        {
          name: "--db",
          description:
            "Path to a local PyUp Safety vulnerabilities database. Default: ENV PIPENV_SAFETY_DB or None",
          args: {
            name: "Database",
          },
        },
        {
          name: ["-i", "--ignore"],
          description:
            "Ignore specified vulnerability during PyUp Safety checks",
          args: {
            name: "Vulnerability ID",
          },
        },
        {
          name: "--output",
          description:
            "Translates to –json, –full-report or –bare from PyUp Safety check",
        },
        {
          name: "--key",
          description:
            "Safety API key from PyUp.io for scanning dependencies against a live vulnerabilities database. Leave blank for scanning against a database that only updates once a month",
          args: {
            name: "API key",
          },
        },
        {
          name: "--quiet",
          description: "Quiet standard output, except vulnerability report",
        },
        {
          name: "--python",
          description: "Specify which version of Python virtualenv should use",
          args: {
            name: "py_version",
          },
        },
        {
          name: "--three",
          description: "Use Python 3 when creating virtualenv",
        },
        {
          name: "--two",
          description: "Use Python 2 when creating virtualenv",
        },
        {
          name: "--clear",
          description: "Clears caches (pipenv, pip, and pip-tools)",
        },
        {
          name: ["-v", "--verbose"],
          description: "Verbose mode",
        },
        {
          name: "--pypi-mirror",
          description: "Specify a PyPI mirror",
          args: {
            name: "mirror",
          },
        },
        {
          name: "--system",
          description: "System pip management",
        },
      ],
    },
    {
      name: "clean",
      description: "Uninstalls all packages not specified in Pipfile.lock",
      options: [
        {
          name: "--bare",
          description: "Minimal output",
        },
        {
          name: "--dry-run",
          description: "Just output unneeded packages",
        },
        {
          name: "--python",
          description: "Specify which version of Python virtualenv should use",
          args: {
            name: "py_version",
          },
        },
        {
          name: "--three",
          description: "Use Python 3 when creating virtualenv",
        },
        {
          name: "--two",
          description: "Use Python 2 when creating virtualenv",
        },
        {
          name: ["-v", "--verbose"],
          description: "Verbose mode",
        },
      ],
    },
    {
      name: "graph",
      description: "Displays currently-installed dependency graph information",
      options: [
        {
          name: "--bare",
          description: "Minimal output",
        },
        {
          name: "--json",
          description: "Output JSON",
        },
        {
          name: "--json-tree",
          description: "Output JSON in nested tree",
        },
        {
          name: "--reverse",
          description: "Reversed dependency graph",
        },
      ],
    },
    {
      name: "install",
      description:
        "Initializes a package manager or installs all packages from Pipfile",
      args: {
        name: "package",
        description: "Package to install",
        isOptional: true,
        suggestions: packageList,
      },
      options: [
        {
          name: "--system",
          description: "Install a Pipfile’s contents into its parent system",
        },
        {
          name: ["-c", "--code"],
          description:
            "Install packages automatically discovered from import statements",
        },
        {
          name: "--deploy",
          description:
            "Enforce that your Pipfile.lock is up to date in deployment",
        },
        {
          name: "--site-packages",
          description:
            "Enable site-packages for the virtualenv [env var: PIPENV_SITE_PACKAGES]",
        },
        {
          name: "--no-site-packages",
          description:
            "Enable site-packages for the virtualenv [env var: PIPENV_SITE_PACKAGES]",
        },
        {
          name: "--skip-lock",
          description:
            "Skip locking mechanisms and use the Pipfile instead during operation",
        },
        {
          name: ["-e", "--editable"],
          description:
            "An editable Python package URL or path, often to a VCS repository",
          args: {
            name: "Package URL | path",
          },
        },
        {
          name: "--ignore-pipfile",
          description: "Ignore Pipfile when installing, using the Pipfile.lock",
        },
        {
          name: "--selective-upgrade",
          description: "Update specified packages",
          args: {
            name: "package",
            isVariadic: true,
          },
        },
        {
          name: ["-r", "--requirements"],
          description: "Import a requirements.txt file",
          args: {
            name: "path",
            generators: filepaths({ extensions: ["txt", "yml", "yaml"] }),
          },
        },
        {
          name: "--extra-index-url",
          description:
            "URLs to the extra PyPI compatible indexes to query for package look-ups",
          args: {
            name: "URL",
          },
        },
        {
          name: ["-i", "--index"],
          description: "Target PyPI-compatible package index url",
          args: {
            name: "URL",
          },
        },
        {
          name: "--sequential",
          description:
            "Install dependencies one-at-a-time, instead of concurrently",
        },
        {
          name: ["-d", "--dev"],
          description: "Install both develop and default packages",
        },
        {
          name: "--keep-outdated",
          description:
            "Keep out-dated dependencies from being updated in Pipfile.lock",
        },
        {
          name: "--pre",
          description: "Allow pre-releases",
        },
        {
          name: "--python",
          description: "Specify which version of Python virtualenv should use",
          args: {
            name: "py_version",
          },
        },
        {
          name: "--three",
          description: "Use Python 3 when creating virtualenv",
        },
        {
          name: "--two",
          description: "Use Python 2 when creating virtualenv",
        },
        {
          name: "--clear",
          description: "Clears caches (pipenv, pip, and pip-tools)",
        },
        {
          name: ["-v", "--verbose"],
          description: "Verbose mode",
        },
        {
          name: "--pypi-mirror",
          description:
            "If you would like to override the default PyPI index URLs with the URL for a PyPI mirror",
          args: {
            name: "mirror url",
          },
        },
      ],
    },
    {
      name: "lock",
      description: "Generates Pipfile.lock",
      args: {
        name: "> requirements.txt",
        description: "Write packages into requirements.txt",
        isOptional: true,
      },
      options: [
        {
          name: "--dev-only",
          description:
            "Generate a requirements file with only the development requirements",
        },
        {
          name: "--header",
          description: "Add header to generated requirements",
        },
        {
          name: "--no-header",
          description: "Generate requirements with no header",
        },
        {
          name: ["-r", "--requirements"],
          description: "Import a requirements.txt file",
        },
        {
          name: ["-d", "--dev"],
          description:
            "Passing --dev will include both the default and development dependencies",
        },
        {
          name: "--keep-outdated",
          description:
            "Keep out-dated dependencies from being updated in Pipfile.lock",
        },
        {
          name: "--pre",
          description: "Allow pre-releases",
        },
        {
          name: "--python",
          description: "Specify which version of Python virtualenv should use",
        },
        {
          name: "--three",
          description: "Use Python 3 when creating virtualenv",
        },
        {
          name: "--two",
          description: "Use Python 2 when creating virtualenv",
        },
        {
          name: "--clear",
          description: "Clears caches (pipenv, pip, and pip-tools)",
        },
        {
          name: ["-v", "--verbose"],
          description: "Verbose mode",
        },
        {
          name: "--pypi-mirror",
          description:
            "If you would like to override the default PyPI index URLs with the URL for a PyPI mirror",
        },
      ],
    },
    {
      name: "open",
      description: "View a given module in your editor",
      args: {
        name: "module",
      },
      options: [
        {
          name: "--python",
          description: "Specify which version of Python virtualenv should use",
        },
        {
          name: "--three",
          description: "Use Python 3 when creating virtualenv",
        },
        {
          name: "--two",
          description: "Use Python 2 when creating virtualenv",
        },
        {
          name: "--clear",
          description: "Clears caches (pipenv, pip, and pip-tools)",
        },
        {
          name: ["-v", "--verbose"],
          description: "Verbose mode",
        },
        {
          name: "--pypi-mirror",
          description:
            "If you would like to override the default PyPI index URLs with the URL for a PyPI mirror",
        },
      ],
    },
    {
      name: "run",
      description: "Spawns a command installed into the virtualenv",
      subcommands: [
        {
          name: "command",
        },
      ],
      options: [
        {
          name: "--python",
          description: "Specify which version of Python virtualenv should use",
          args: {
            name: "py_version",
          },
        },
        {
          name: "--three",
          description: "Use Python 3 when creating virtualenv",
        },
        {
          name: "--two",
          description: "Use Python 2 when creating virtualenv",
        },
        {
          name: "--clear",
          description: "Clears caches (pipenv, pip, and pip-tools)",
        },
        {
          name: ["-v", "--verbose"],
          description: "Verbose mode",
        },
        {
          name: "--pypi-mirror",
          description:
            "If you would like to override the default PyPI index URLs with the URL for a PyPI mirror",
          args: {
            name: "mirror url",
          },
        },
      ],
    },
    {
      name: "scripts",
      description: "Lists scripts in current environment config",
      options: [
        {
          name: "--python",
          description: "Specify which version of Python virtualenv should use",
          args: {
            name: "py_version",
          },
        },
        {
          name: "--three",
          description: "Use Python 3 when creating virtualenv",
        },
        {
          name: "--two",
          description: "Use Python 2 when creating virtualenv",
        },
        {
          name: "--clear",
          description: "Clears caches (pipenv, pip, and pip-tools)",
        },
        {
          name: ["-v", "--verbose"],
          description: "Verbose mode",
        },
        {
          name: "--pypi-mirror",
          description:
            "If you would like to override the default PyPI index URLs with the URL for a PyPI mirror",
          args: {
            name: "mirror url",
          },
        },
      ],
    },
    {
      name: "shell",
      description: "Start a shell within the environment",
      options: [
        {
          name: "--fancy",
          description:
            "Run in shell in fancy mode. Make sure the shell have no path manipulating scripts. Run $pipenv shell for issues with compatibility mode",
        },
        {
          name: "--python",
          description: "Specify which version of Python virtualenv should use",
          args: {
            name: "py_version",
          },
        },
        {
          name: "--three",
          description: "Use Python 3 when creating virtualenv",
        },
        {
          name: "--two",
          description: "Use Python 2 when creating virtualenv",
        },
        {
          name: "--anyway",
          description:
            "Always spawn a sub-shell, even if one is already spawned",
        },
        {
          name: "--pypi-mirror",
          description:
            "If you would like to override the default PyPI index URLs with the URL for a PyPI mirror",
          args: {
            name: "mirror url",
          },
        },
      ],
    },
    {
      name: "sync",
      description: "Installs all packages specified in Pipfile.lock",
      options: [
        {
          name: "--system",
          description: "Install a Pipfile’s contents into its parent system",
        },
        {
          name: "--bare",
          description: "Minimal output",
        },
        {
          name: "--sequential",
          description:
            "Install dependencies one-at-a-time, instead of concurrently",
        },
        {
          name: ["-d", "--dev"],
          description: "Install both develop and default packages",
        },
        {
          name: "--keep-outdated",
          description:
            "Keep out-dated dependencies from being updated in Pipfile.lock",
        },
        {
          name: "--pre",
          description: "Allow pre-releases",
        },
        {
          name: "--python",
          description: "Specify which version of Python virtualenv should use",
          args: {
            name: "py_version",
          },
        },
        {
          name: "--three",
          description: "Use Python 3 when creating virtualenv",
        },
        {
          name: "--two",
          description: "Use Python 2 when creating virtualenv",
        },
        {
          name: "--clear",
          description: "Clears caches (pipenv, pip, and pip-tools)",
        },
        {
          name: ["-v", "--verbose"],
          description: "Verbose mode",
        },
        {
          name: "--pypi-mirror",
          description:
            "If you would like to override the default PyPI index URLs with the URL for a PyPI mirror",
          args: {
            name: "mirror url",
          },
        },
      ],
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
      options: [
        {
          name: "--all-dev",
          description: "Uninstall all package from [dev-packages]",
        },
        {
          name: "--all",
          description:
            "Purge all package(s) from virtualenv. Does not edit Pipfile",
        },
        {
          name: ["-e", "--editable"],
          description:
            "An editable Python package URL or path, often to a VCS repository",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: "--skip-lock",
          description:
            "Skip locking mechanisms and use the Pipfile instead during operation",
        },
        {
          name: ["-d", "--dev"],
          description: "Install both develop and default packages",
        },
        {
          name: "--keep-outdated",
          description:
            "Keep out-dated dependencies from being updated in Pipfile.lock",
        },
        {
          name: "--pre",
          description: "Allow pre-releases",
        },
        {
          name: "--python",
          description: "Specify which version of Python virtualenv should use",
          args: {
            name: "py_version",
          },
        },
        {
          name: "--three",
          description: "Use Python 3 when creating virtualenv",
        },
        {
          name: "--two",
          description: "Use Python 2 when creating virtualenv",
        },
        {
          name: "--clear",
          description: "Clears caches (pipenv, pip, and pip-tools)",
        },
        {
          name: ["-v", "--verbose"],
          description: "Verbose mode",
        },
        {
          name: "--pypi-mirror",
          description:
            "If you would like to override the default PyPI index URLs with the URL for a PyPI mirror",
          args: {
            name: "mirror url",
          },
        },
      ],
    },
    {
      name: "update",
      description: "Runs lock, then sync",
      options: [
        {
          name: "--bare",
          description: "Minimal output",
        },
        {
          name: "--outdated",
          description: "List out-of-date dependencies",
        },
        {
          name: "--dry-run",
          description: "Just output unneeded packages",
        },
        {
          name: ["-e", "--editable"],
          description:
            "An editable Python package URL or path, often to a VCS repository",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: "--ignore-pipfile",
          description: "Ignore Pipfile when installing, using the Pipfile.lock",
        },
        {
          name: "--selective-upgrade",
          description: "Update specified packages",
          args: {
            name: "packages",
            isVariadic: true,
          },
        },
        {
          name: ["-r", "--requirements"],
          description: "Import a requirements.txt file",
        },
        {
          name: "--extra-index-url",
          description:
            "URLs to the extra PyPI compatible indexes to query for package look-ups",
          args: {
            name: "url",
            isVariadic: true,
          },
        },
        {
          name: ["-i", "--index"],
          description: "Target PyPI-compatible package index url",
          args: {
            name: "index",
          },
        },
        {
          name: "--sequential",
          description:
            "Install dependencies one-at-a-time, instead of concurrently",
        },
        {
          name: ["-d", "--dev"],
          description: "Install both develop and default packages",
        },
        {
          name: "--keep-outdated",
          description:
            "Keep out-dated dependencies from being updated in Pipfile.lock",
        },
        {
          name: "--pre",
          description: "Allow pre-releases",
        },
        {
          name: "--python",
          description: "Specify which version of Python virtualenv should use",
          args: {
            name: "py_version",
          },
        },
        {
          name: "--three",
          description: "Use Python 3 when creating virtualenv",
        },
        {
          name: "--two",
          description: "Use Python 2 when creating virtualenv",
        },
        {
          name: "--clear",
          description: "Clears caches (pipenv, pip, and pip-tools)",
        },
        {
          name: ["-v", "--verbose"],
          description: "Verbose mode",
        },
        {
          name: "--pypi-mirror",
          description:
            "If you would like to override the default PyPI index URLs with the URL for a PyPI mirror",
          args: {
            name: "mirror url",
          },
        },
      ],
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
      description: "View diagnostic information for use in GitHub issues",
    },
    {
      name: "--site-packages",
      description:
        "Enable site-packages for the virtualenv [env var: PIPENV_SITE_PACKAGES]",
    },
    {
      name: "--no-site-packages",
      description:
        "Enable site-packages for the virtualenv [env var: PIPENV_SITE_PACKAGES]",
    },
    {
      name: "--python",
      description: "Specify which version of Python virtualenv should use",
      args: {
        name: "version",
        description:
          "Specific a python version e.g --python 3.6 or --python 2.7.14",
        isOptional: true,
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
        name: "mirror",
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
