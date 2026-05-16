const commonOptions: Fig.Option[] = [
  {
    name: "--debug",
    description: "Set log level to logging.DEBUG (maximize logging output)",
  },
  { name: ["-h", "--help"], description: "Show this message" },
];

const logConfigOptions: Fig.Option[] = [
  {
    name: "--log-level",
    description: "Set the log level by value or name",
    args: {
      name: "level",
    },
  },
  {
    name: "--config",
    description: "Choose a config file",
    args: {
      name: "config",
      template: "filepaths",
    },
  },
];

const completionSpec: Fig.Spec = {
  name: "jupyter",
  description: "An interactive computing environment for notebook programming",
  subcommands: [
    {
      name: "bundlerextension",
      description: "Work with Jupyter bundler extensions",
      subcommands: [
        {
          name: "enable",
          description: "Enable a bundler extension",
        },
        {
          name: "disable",
          description: "Disable a bundler extension",
        },
        {
          name: "list",
          description: "List bundler extensions",
        },
      ],
      options: [
        ...commonOptions,
        ...logConfigOptions,
        {
          name: "--user",
          description: "Apply the operation only for the given user",
          args: {
            name: "user",
          },
        },
        {
          name: "--system",
          description: "Apply the operation system-wide",
        },
        {
          name: "--sys-prefix",
          description:
            "Use sys.prefix as the prefix for installing nbextensions (for environments, packaging)",
        },
        {
          name: ["--py", "--python"],
          description: "Install from a Python package",
        },
      ],
    },
    {
      name: "kernel",
      description: "Run a kernel locally in a subprocess",
      options: [
        ...commonOptions,
        {
          name: "--kernel",
          args: { name: "KernelApp.kernel_name" },
        },
        {
          name: "--ip",
          args: { name: "KernelManager.ip" },
        },
      ],
    },
    {
      name: "kernelspec",
      description: "Manage Jupyter kernel specifications",
      subcommands: [
        {
          name: "list",
          options: [
            {
              name: "--json",
              description: "Output spec name and location as json",
            },
          ],
        },
        {
          name: "install",
          description: "Install a kernel specification directory",
          options: [...logConfigOptions, ...commonOptions],
          args: {
            name: "kernel",
          },
        },
        {
          name: "uninstall",
          description: "Alias for remove",
          args: {
            name: "kernel",
          },
        },
        {
          name: "remove",
          description: "Remove one or more Jupyter kernelspecs by name",
          args: {
            name: "kernel",
          },
        },
      ],
    },
    {
      name: "migrate",
      description:
        "Migrate configuration and data from .ipython prior to 4.0 to Jupyter locations",
      options: [
        ...commonOptions,
        ...logConfigOptions,
        {
          name: "--generate-config",
          description: "Generate default config file",
        },
        {
          name: "-y",
          description: "Answer yes to any questions instead of prompting",
        },
      ],
    },
    {
      name: "nbconvert",
      description:
        "This application is used to convert notebook files (*.ipynb) to various other formats",
      options: [...commonOptions, ...logConfigOptions],
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "nbextension",
      description: "",
      options: [...commonOptions, ...logConfigOptions],
      subcommands: [
        {
          name: "install",
          description: "Install an nbextension",
          args: {
            name: "extension",
          },
        },
        {
          name: "uninstall",
          description: "Uninstall an nbextension",
          args: {
            name: "extension",
          },
        },
        {
          name: "enable",
          description: "Enable an nbextension",
          args: {
            name: "extension",
          },
        },
        {
          name: "disable",
          description: "Disable an nbextension",
          args: {
            name: "extension",
          },
        },
        {
          name: "list",
          description: "List nbextensions",
        },
      ],
    },
    {
      name: "notebook",
      description: "Run the Jupyter notebook server",
      subcommands: [
        {
          name: "list",
          description: "List currently running notebook servers",
        },
        {
          name: "stop",
          description: "Stop currently running notebook server",
        },
        {
          name: "password",
          description: "Set a password for the notebook server",
        },
      ],
      options: [...commonOptions, ...logConfigOptions],
    },
    {
      name: "run",
      description: "Run a notebook",
      options: [...commonOptions, ...logConfigOptions],
    },
    {
      name: "serverextension",
      description: "Manage server extensions",
      options: [...commonOptions, ...logConfigOptions],
    },
    {
      name: "troubleshoot",
      description: "Log for troubleshooting",
    },
    {
      name: "trust",
      description: "Manage trust",
      options: [...commonOptions, ...logConfigOptions],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for jupyter",
    },
    {
      name: "--version",
      description: "Show the jupyter command's version and exit",
    },
    {
      name: "--config-dir",
      description: "Show Jupyter config dir",
    },
    {
      name: "--data-dir",
      description: "Show Jupyter data dir",
    },
    {
      name: "--runtime-dir",
      description: "Show Jupyter runtime dir",
    },
    {
      name: "--paths",
      description:
        "Show all Jupyter paths. Add --json for machine-readable format",
    },
    {
      name: "--json",
      description: "Output paths as machine-readable json",
    },
    {
      name: "--debug",
      description: "Output debug information about paths",
    },
  ],
};
export default completionSpec;
