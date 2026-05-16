const packagesGenerator: Fig.Generator = {
  script: ["pipx", "list", "--short"],
  postProcess: (out) => {
    return out.split("\n").map((line) => {
      return {
        name: line.split(" ").at(0),
        description: "Installed package",
      };
    });
  },
};

const completionSpec: Fig.Spec = {
  name: "pipx",
  description: "Install and Run Python Applications in Isolated Environments",
  subcommands: [
    {
      name: "install",
      description: "Install a package",
      options: [
        {
          name: "--include-deps",
          description: "Include apps of dependent packages",
        },
        {
          name: "--force",
          description:
            "Modify existing virtual environment and files in PIPX_BIN_DIR",
        },
        {
          name: "--suffix",
          description:
            "Optional suffix for virtual environment and executable names",
          args: {
            name: "SUFFIX",
          },
        },
        {
          name: "--python",
          description:
            "The Python executable used to create the Virtual Environment and run the associated app/apps. Must be v3.6+",
          args: {
            name: "PYTHON",
          },
        },
        {
          name: "--system-site-packages",
          description:
            "Give the virtual environment access to the system site-packages dir",
        },
        {
          name: ["--index-url", "-i"],
          description: "Base URL of Python Package Index",
          args: {
            name: "INDEX_URL",
          },
        },
        {
          name: ["--editable", "-e"],
          description: "Install a project in editable mode",
        },
        {
          name: "--pip-args",
          description:
            "Arbitrary pip arguments to pass directly to pip install/upgrade commands",
          args: {
            name: "PIP_ARGS",
          },
        },
        {
          name: "--verbose",
          description: "Show verbose output",
        },
      ],
      args: {
        name: "package_spec",
        description: "Package name or pip installation spec",
      },
    },
    {
      name: "inject",
      description:
        "Installs packages to an existing pipx-managed virtual environment",
      options: [
        {
          name: "--include-apps",
          description: "Add apps from the injected packages onto your PATH",
        },
        {
          name: "--include-deps",
          description: "Include apps of dependent packages",
        },
        {
          name: "--system-site-packages",
          description:
            "Give the virtual environment access to the system site-packages dir",
        },
        {
          name: ["--index-url", "-i"],
          description: "Base URL of Python Package Index",
          args: {
            name: "INDEX_URL",
          },
        },
        {
          name: ["--editable", "-e"],
          description: "Install a project in editable mode",
        },
        {
          name: "--pip-args",
          description:
            "Arbitrary pip arguments to pass directly to pip install/upgrade commands",
          args: {
            name: "PIP_ARGS",
          },
        },
        {
          name: ["--force", "-f"],
          description:
            "Modify existing virtual environment and files in PIPX_BIN_DIR",
        },
        {
          name: "--verbose",
          description: "Show verbose output",
        },
      ],
      args: [
        {
          name: "package",
          description:
            "Name of the existing pipx-managed Virtual Environment to inject into",
          generators: packagesGenerator,
        },
        {
          name: "dependencies",
          description:
            "The packages to inject into the Virtual Environment--either package name or pip package spec",
        },
      ],
    },
    {
      name: "upgrade",
      description:
        "Upgrade a package in a pipx-managed Virtual Environment by running 'pip install --upgrade PACKAGE'",
      options: [
        {
          name: "--include-injected",
          description:
            "Also upgrade packages injected into the main app's environment",
        },
        {
          name: ["--force", "-f"],
          description:
            "Modify existing virtual environment and files in PIPX_BIN_DIR",
        },
        {
          name: "--system-site-packages",
          description:
            "Give the virtual environment access to the system site-packages dir",
        },
        {
          name: ["--index-url", "-i"],
          description: "Base URL of Python Package Index",
          args: {
            name: "INDEX_URL",
          },
        },
        {
          name: ["--editable", "-e"],
          description: "Install a project in editable mode",
        },
        {
          name: "--pip-args",
          description:
            "Arbitrary pip arguments to pass directly to pip install/upgrade commands",
          args: {
            name: "PIP_ARGS",
          },
        },
        {
          name: "--verbose",
          description: "Show verbose output",
        },
      ],
      args: {
        name: "package",
        generators: packagesGenerator,
      },
    },
    {
      name: "upgrade-all",
      description:
        "Upgrades all packages within their virtual environments by running 'pip install --upgrade PACKAGE'",
      options: [
        {
          name: "--include-injected",
          description:
            "Also upgrade packages injected into the main app's environment",
        },
        {
          name: "--skip",
          description: "Skip these packages",
          args: {
            name: "packages to skip",
            isVariadic: true,
          },
        },
        {
          name: ["--force", "-f"],
          description:
            "Modify existing virtual environment and files in PIPX_BIN_DIR",
        },
        {
          name: "--verbose",
          description: "Show verbose output",
        },
      ],
    },
    {
      name: "uninstall",
      description:
        "Uninstalls a pipx-managed Virtual Environment by deleting it and any files that point to its apps",
      options: [
        {
          name: "--verbose",
          description: "Show verbose output",
        },
      ],
      args: {
        name: "package",
        generators: packagesGenerator,
      },
    },
    {
      name: "uninstall-all",
      description: "Uninstall all pipx-managed packages",
      options: [
        {
          name: "--verbose",
          description: "Show verbose output",
        },
      ],
    },
    {
      name: "reinstall",
      description: "Reinstalls a package",
      options: [
        {
          name: "--python",
          description:
            "The Python executable used to recreate the Virtual Environment and run the associated app/apps. Must be v3.6+",
          args: {
            name: "PYTHON",
          },
        },
        {
          name: "--verbose",
          description: "Show verbose output",
        },
      ],
      args: {
        name: "package",
        generators: packagesGenerator,
      },
    },
    {
      name: "reinstall-all",
      description: "Reinstalls all packages",
      options: [
        {
          name: "--python",
          description:
            "The Python executable used to recreate the Virtual Environment and run the associated app/apps. Must be v3.6+",
          args: {
            name: "PYTHON",
          },
        },
        {
          name: "--skip",
          description: "Skip these packages",
          args: {
            name: "packages to skip",
            isVariadic: true,
          },
        },
        {
          name: "--verbose",
          description: "Show verbose output",
        },
      ],
    },
    {
      name: "list",
      description: "List packages and apps installed with pipx",
      options: [
        {
          name: "--include-injected",
          description: "Show packages injected into the main app's environment",
        },
        {
          name: "--json",
          description: "Output rich data in json format",
        },
        {
          name: "--short",
          description: "List packages only",
        },
        {
          name: "--verbose",
          description: "Show verbose output",
        },
      ],
    },
    {
      name: "run",
      description:
        "Download the latest version of a package to a temporary virtual environment, then run an app from it",
      options: [
        {
          name: "--no-cache",
          description: "Do not re-use cached virtual environment if it exists",
        },
        {
          name: "--pypackages",
          description:
            "Require app to be run from local __pypackages__ directory",
        },
        {
          name: "--spec",
          description:
            "The package name or specific installation source passed to pip",
          args: {
            name: "SPEC",
          },
        },
        {
          name: "--python",
          description: "The Python version to run package's CLI app with",
          args: {
            name: "PYTHON",
          },
        },
        {
          name: "--system-site-packages",
          description:
            "Give the virtual environment access to the system site-packages dir",
        },
        {
          name: ["--index-url", "-i"],
          description: "Base URL of Python Package Index",
          args: {
            name: "INDEX_URL",
          },
        },
        {
          name: ["--editable", "-e"],
          description: "Install a project in editable mode",
        },
        {
          name: "--pip-args",
          description:
            "Arbitrary pip arguments to pass directly to pip install/upgrade commands",
          args: {
            name: "PIP_ARGS",
          },
        },
        {
          name: "--verbose",
          description: "Show verbose output",
        },
      ],
      args: {
        name: "app",
        description: "App/package name and any arguments to be passed to it",
        isVariadic: true,
      },
    },
    {
      name: "runpip",
      description: "Run pip in an existing pipx-managed Virtual Environment",
      options: [
        {
          name: "--verbose",
          description: "Show verbose output",
        },
      ],
      args: [
        {
          name: "package",
          description:
            "Name of the existing pipx-managed Virtual Environment to run pip in",
        },
        {
          name: "pipargs",
          description: "Arguments to forward to pip command",
          isVariadic: true,
        },
      ],
    },
    {
      name: "ensurepath",
      description:
        "Ensure directory where pipx stores apps is in your PATH environment variable",
      options: [
        {
          name: ["--force", "-f"],
          description:
            "Add text to your shell's config file even if it looks like your PATH already contains paths to pipx and pipx-install apps",
        },
      ],
    },
    {
      name: "environment",
      description: "Print a list of variables used in pipx.constants",
      options: [
        {
          name: "--value",
          description: "Print the value of the variable",
          args: {
            name: "VARIABLE",
            suggestions: [
              {
                name: "PIPX_HOME",
              },
              {
                name: "PIPX_BIN_DIR",
              },
              {
                name: "PIPX_SHARED_LIBS",
              },
              {
                name: "PIPX_LOCAL_VENVS",
              },
              {
                name: "PIPX_LOG_DIR",
              },
              {
                name: "PIPX_TRASH_DIR",
              },
              {
                name: "PIPX_VENV_CACHEDIR",
              },
            ],
          },
        },
      ],
    },
    {
      name: "completions",
      description: "Print instructions on enabling shell completions for pipx",
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for pipx",
    },
  ],
};
export default completionSpec;
