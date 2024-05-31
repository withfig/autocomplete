const completionSpec: Fig.Spec = {
  name: "dbt",
  description: "CLI for dbt - Data Build Tool",
  subcommands: [
    {
      name: "build",
      description: "Run models, test tests, snapshot snapshots, and seed seeds",
      options: [
        {
          name: "--full-refresh",
          description: "Treat incremental models as table models",
        },
        {
          name: ["-x", "--fail-fast"],
          description: "Exit immediately if a single model fails to build",
        },
        {
          name: "--profiles-dir",
          description: "Set the profiles directory",
          args: {
            name: "directory",
            description: "Directory containing profiles.yml",
            template: "folders",
            suggestions: ["profiles"],
          },
        },
        {
          name: "--profile",
          description: "Use the selected profile",
          args: {
            name: "name",
            description: "Name of profile to use when running dbt project",
            suggestions: ["default"],
          },
        },
        {
          name: "--target",
          description: "Target profile configuration i.e. prod/dev",
          args: {
            name: "profile",
            description: "Target profile configuration (dev/prod)",
            suggestions: ["dev", "prod"],
          },
        },
        {
          name: "--vars",
          description: "Variable values to override dbt_project.yml",
          args: {
            name: "variables",
            description: "A short YAML string eg. '{my_variable: my_value}'",
          },
        },
        {
          name: "--threads",
          description: "Number of concurrent database jobs",
          args: { name: "THREADS" },
        },
        {
          name: ["-s", "--select"],
          description: "Select subset of models",
          args: {
            name: "subset",
            description: "Select subset of models",
            isVariadic: true,
            suggestions: [
              "path:",
              "tag:",
              "config:",
              "test_type:",
              "test_name:",
            ],
          },
        },
        {
          name: "--exclude",
          description: "Exclude subset of models",
          args: {
            name: "subset",
            description: "Exclude subset of models",
            isVariadic: true,
            suggestions: [
              "path:",
              "tag:",
              "config:",
              "test_type:",
              "test_name:",
            ],
          },
        },
        {
          name: "--bypass-cache",
          description: "Bypass the cache",
        },
      ],
    },
    {
      name: "run",
      description: "Runs the models in a project",
      options: [
        {
          name: "--full-refresh",
          description: "Treat incremental models as table models",
        },
        {
          name: ["-x", "--fail-fast"],
          description: "Exit immediately if a single model fails to build",
        },
        {
          name: "--use-colors",
          description: "Default value -- colorize run logs",
        },
        {
          name: "--no-use-colors",
          description: "Disable log colorizing",
        },
        {
          name: "--profiles-dir",
          description: "Set the profiles directory",
          args: {
            name: "directory",
            description: "Directory containing profiles.yml",
            template: "folders",
            suggestions: ["profiles"],
          },
        },
        {
          name: "--profile",
          description: "Select the profile to use",
          args: {
            name: "name",
            description: "Name of profile to use when running dbt project",
            suggestions: ["default"],
          },
        },
        {
          name: "--target",
          description: "The target profile",
          args: {
            name: "Target profile",
            description: "Target profile configuration (dev/prod)",
            suggestions: ["dev", "prod"],
          },
        },
        {
          name: "--vars",
          description: "Variable values to override dbt_project.yml",
          args: {
            name: "variables",
            description: "A short YAML string eg. '{my_variable: my_value}'",
          },
        },
        {
          name: "--threads",
          description: "Number of concurrent database jobs",
          args: { name: "threads" },
        },
        {
          name: ["-s", "--select"],
          description: "Select subset of models",
          args: {
            name: "subset",
            description: "Select subset of models",
            isVariadic: true,
            suggestions: [
              "path:",
              "tag:",
              "config:",
              "test_type:",
              "test_name:",
            ],
          },
        },
        {
          name: "--exclude",
          description: "Exclude subset of models",
          args: {
            name: "subset",
            description: "Exclude subset of models",
            isVariadic: true,
            suggestions: [
              "path:",
              "tag:",
              "config:",
              "test_type:",
              "test_name:",
            ],
          },
        },
        {
          name: "--bypass-cache",
          description: "Bypass the cache",
        },
      ],
    },
    {
      name: "debug",
      description: "Debugs dbt connections and projects",
      options: [{ name: "--config-dir" }],
    },
    {
      name: "init",
      description: "Initializes a new dbt project",
      args: {
        name: "name",
      },
      options: [
        {
          name: "--adapter",
          description: "Add an adapter",
          args: { name: "adapter", description: "E.g. big query" },
        },
      ],
    },
    {
      name: "compile",
      description: "Compiles (but does not run) the models in a project",
      options: [
        {
          name: "--profiles-dir",
          description: "Set the profiles directory",
          args: {
            name: "directory",
            description: "Directory containing profiles.yml",
            template: "folders",
            suggestions: ["profiles"],
          },
        },
        {
          name: "--profile",
          description: "Select the profile to use",
          args: {
            name: "name",
            description: "Name of profile to use when running dbt project",
            suggestions: ["default"],
          },
        },
        {
          name: "--target",
          description: "The target profile",
          args: {
            name: "Target profile",
            description: "Target profile configuration (dev/prod)",
            suggestions: ["dev", "prod"],
          },
        },
        {
          name: "--vars",
          description: "Variable values to override dbt_project.yml",
          args: {
            name: "Variable values",
            description: "A short YAML string eg. '{my_variable: my_value}'",
          },
        },
        {
          name: "--threads",
          description: "Number of concurrent database jobs",
          args: { name: "THREADS" },
        },
        {
          name: "--select",
          description: "Select subset of models",
          args: {
            name: "Select subset",
            description: "Select subset of models",
            isVariadic: true,
            suggestions: [
              "path:",
              "tag:",
              "config:",
              "test_type:",
              "test_name:",
            ],
          },
        },
        {
          name: "--exclude",
          description: "Exclude subset of models",
          args: {
            name: "Exclude subset",
            description: "Exclude subset of models",
            isVariadic: true,
            suggestions: [
              "path:",
              "tag:",
              "config:",
              "test_type:",
              "test_name:",
            ],
          },
        },
        { name: "--bypass-cache", description: "Bypass the cache" },
        {
          name: "--selector",
          description:
            "This flag specifies one or more named selectors, defined in a <selector name>.yml file",
          args: {
            name: "YAML selector file name",
            isVariadic: true,
          },
        },
        { name: "--defer", description: "Defer" },
      ],
    },
    {
      name: "test",
      description: "Executes tests defined in a project",
      options: [
        {
          name: ["-x", "--fail-fast"],
          description: "Exit immediately if a single model fails to build",
        },
        {
          name: "--profiles-dir",
          description: "Set the profiles directory",
          args: {
            name: "directory",
            description: "Directory containing profiles.yml",
            template: "folders",
            suggestions: ["profiles"],
          },
        },
        {
          name: "--profile",
          description: "Select the profile to use",
          args: {
            name: "name",
            description: "Name of profile to use when running dbt project",
            suggestions: ["default"],
          },
        },
        {
          name: "--data",
          description: "Run only custom data tests",
        },
        {
          name: "--schema",
          description: "Run only schema tests",
        },
        {
          name: ["-s", "--select"],
          description: "Select subset of models",
          args: {
            name: "subset",
            isVariadic: true,
            suggestions: [
              "path:",
              "tag:",
              "config:",
              "test_type:",
              "test_name:",
            ],
          },
        },
        {
          name: "--exclude",
          description: "Exclude subset of models",
          args: {
            name: "subset",
            isVariadic: true,
            suggestions: [
              "path:",
              "tag:",
              "config:",
              "test_type:",
              "test_name:",
            ],
          },
        },
        { name: "--bypass-cache", description: "Bypass the cache" },
        {
          name: "--selector",
          description:
            "This flag specifies one or more named selectors, defined in a <selector name>.yml file",
          args: {
            name: "YAML selector file name",
            isVariadic: true,
          },
        },
        { name: "--defer", description: "Defer" },
      ],
    },
    { name: "deps", description: "Downloads dependencies for a project" },
    {
      name: "snapshot",
      description: "Executes 'snapshot' jobs defined in a project",
      options: [
        {
          name: "--profiles-dir",
          description: "Set the profiles directory",
          args: {
            name: "profiles directory",
            description: "Directory containing profiles.yml",
            template: "folders",
            suggestions: ["profiles"],
          },
        },
        {
          name: ["-x", "--fail-fast"],
          description: "Exit immediately if a single model fails to build",
        },
        {
          name: "--profile",
          description: "Select the profile to use",
          args: {
            name: "Profile name",
            description: "Name of profile to use when running dbt project",
            suggestions: ["default"],
          },
        },
        {
          name: "--target",
          description: "The target profile",
          args: {
            name: "Target profile",
            description: "Target profile configuration (dev/prod)",
            suggestions: ["dev", "prod"],
          },
        },
        {
          name: "--vars",
          description: "Variable values to override dbt_project.yml",
          args: {
            name: "Variable values",
            description: "A short YAML string eg. '{my_variable: my_value}'",
          },
        },
        {
          name: "--threads",
          description: "Number of concurrent database jobs",
          args: { name: "thread" },
        },
        {
          name: "--select",
          description: "Select subset of models",
          args: {
            name: "subset",
            isVariadic: true,
            suggestions: [
              "path:",
              "tag:",
              "config:",
              "test_type:",
              "test_name:",
            ],
          },
        },
        {
          name: "--exclude",
          description: "Exclude subset of models",
          args: {
            name: "Exclude subset",
            isVariadic: true,
            suggestions: [
              "path:",
              "tag:",
              "config:",
              "test_type:",
              "test_name:",
            ],
          },
        },
        { name: "--bypass-cache", description: "Bypass the cache" },
      ],
    },
    {
      name: "clean",
      description: "Deletes artifacts present in the dbt project",
    },
    {
      name: "seed",
      description: "Loads CSV files into the database",
      options: [
        {
          name: "--profiles-dir",
          description: "Set the profiles directory",
          args: {
            name: "profiles directory",
            description: "Directory containing profiles.yml",
            template: "folders",
            suggestions: ["profiles"],
          },
        },
        {
          name: "--profile",
          description: "Select the profile to use",
          args: {
            name: "Profile name",
            description: "Name of profile to use when running dbt project",
            suggestions: ["default"],
          },
        },
        {
          name: ["-x", "--fail-fast"],
          description: "Exit immediately if a single model fails to build",
        },
        {
          name: "--select",
          description: "Run specific seeds",
          args: {
            name: "Select subset",
            description: "E.g. country_codes",
            suggestions: [
              "path:",
              "tag:",
              "config:",
              "test_type:",
              "test_name:",
            ],
          },
        },
        {
          name: "--exclude",
          description: "Exclude subset of models",
          args: {
            name: "Exclude subset",
            description: "Exclude subset of models",
            isVariadic: true,
            suggestions: [
              "path:",
              "tag:",
              "config:",
              "test_type:",
              "test_name:",
            ],
          },
        },
        { name: "--bypass-cache", description: "Bypass the cache" },
        {
          name: "--selector",
          description:
            "This flag specifies one or more named selectors, defined in a <selector name>.yml file",
          args: {
            name: "YAML selector file name",
            isVariadic: true,
          },
        },
      ],
    },
    {
      name: "docs",
      description: "Generates documentation for a project",
      subcommands: [
        {
          name: "generate",
          description: "Generate your project's documentation website",
          options: [
            { name: "--no-compile", description: "Skip re-compilation" },
          ],
        },
        {
          name: "serve",
          description:
            "Serve your documentation on a local webserver (default prot 8000)",
          options: [
            {
              name: "--profiles-dir",
              description: "Skip re-compilation",
              args: {
                name: "PROFILES_DIR",
                description: "Path to profiles directory",
                template: "folders",
              },
            },
            {
              name: "--profile",
              description: "Choose a profile",
              args: {
                name: "PROFILE NAME",
              },
            },
            {
              name: "--target",
              description: "The target profile",
              args: {
                name: "Target profile",
                description: "Target profile configuration (dev/prod)",
                suggestions: ["dev", "prod"],
              },
            },
            {
              name: "--port",
              description: "Choose a port",
              args: {
                name: "port number",
                description: "Default is 8000",
              },
            },
          ],
        },
      ],
    },
    {
      name: "source",
      description:
        "Provides tools for working with source data (including validating that sources are 'fresh')",
      subcommands: [
        {
          name: "snapshot-freshness",
          options: [
            {
              name: ["-o", "--output"],
              description: "Override the destination for sources.json",
              args: {
                name: "FILEPATH",
                template: "filepaths",
              },
            },
            {
              name: "--select",
              description:
                "This flag specifies one or more selection-type arguments used to filter the nodes returned by the dbt ls command",
              args: {
                name: "Select subset",
                isVariadic: true,
                suggestions: [
                  "path:",
                  "tag:",
                  "config:",
                  "test_type:",
                  "test_name:",
                ],
              },
            },
          ],
        },
      ],
    },
    {
      name: "run-operation",
      description: "Runs arbitrary maintenance SQL against the database",
      args: {
        name: "MACRO",
        description:
          "Dbt will call this macro with the supplied arguments and then exit",
      },
      options: [
        {
          name: "--args",
          description: "Supply arguments to the macro",
          args: {
            name: "ARGS",
            description: "A short YAML string eg. '{my_variable: my_value}'",
          },
        },
      ],
    },
    {
      name: "rpc",
      description: "Runs an RPC server that clients can submit queries to",
      options: [
        {
          name: "--host",
          description: "Specify the host to listen on",
          args: {
            name: "HOST",
            description: "Default: 0.0.0.0",
          },
        },
        {
          name: "--port",
          description: "The port to use",
          args: {
            name: "PORT",
            description: "Default: 8580",
          },
        },
      ],
    },
    {
      name: ["ls", "list"],
      description: "Lists resources defined in a dbt project",
      options: [
        {
          name: "--resource-type",
          description:
            "This flag limits the 'resource types' that dbt will return in the dbt ls command. By default, the following resources are included in the results of dbt ls: models, snapshots, seeds, tests, and sources",
          args: {
            name: "resource-type",
            suggestions: [
              "source",
              "analysis",
              "model",
              "snapshot",
              "test",
              "seed",
              "default",
              "all",
            ],
          },
        },
        {
          name: ["-s", "--select"],
          description:
            "This flag specifies one or more selection-type arguments used to filter the nodes returned by the dbt ls command",
          args: {
            name: "SELECTION_ARG",
            isVariadic: true,
            suggestions: [
              "path:",
              "tag:",
              "config:",
              "test_type:",
              "test_name:",
            ],
          },
        },
        {
          name: "--exclude",
          description:
            "Specify selectors that should be excluded from the list of returned nodes",
          args: {
            name: "SELECTOR",
            isVariadic: true,
            suggestions: [
              "path:",
              "tag:",
              "config:",
              "test_type:",
              "test_name:",
            ],
          },
        },
        {
          name: "--selector",
          description:
            "This flag specifies one or more named selectors, defined in a <selector name>.yml file",
          args: {
            name: "YAML selector file name",
            isVariadic: true,
          },
        },
        {
          name: "--output",
          description:
            "This flag controls the format of output from the dbt ls command",
          args: {
            name: "output",
            suggestions: ["json", "name", "path", "selector"],
            isVariadic: true,
          },
        },
      ],
    },
    {
      name: "parse",
      description: "Parse dbt project and write detailed timing information",
    },
  ],
  options: [
    { name: "--version", description: "Currently installed version" },
    {
      name: ["-r", "--record-timing-info"],
      description: "Create a new file to record timing info",
      args: {
        name: "file name",
        description: "Create a new file to record timing info",
      },
    },
    {
      name: ["-d", "--debug"],
      description: "Redirect debug logs to standard out",
    },
    {
      name: "--log-format",
      description: "Specify how dbt's logs should be formatted",
      args: {
        name: "log format",
        suggestions: ["text", "json", "default"],
      },
    },
    {
      name: "--no-write-json",
      description:
        "Prevent dbt from writing JSOn artifacts to the 'target/' directory",
    },
    {
      name: ["-S", "--strict"],
      description:
        "Perform extra validation of dbt objects and internal consistency checks during compilation. Use only during development",
    },
    {
      name: "--warn-error",
      description: "Convert dbt warnings into errors",
    },
    {
      name: "--partial-parse",
      description: "Configure partial parsing for your project",
    },
    {
      name: "--no-partial-parse",
      description: "Turn off partial parsing for your project",
    },
    {
      name: "--use-colors",
      description: "Default value -- colorize run logs",
    },
    {
      name: "--no-use-colors",
      description: "Disable log colorizing",
    },
  ],
  // Only uncomment if dbt takes an argument
  // args: {}
};

export default completionSpec;
