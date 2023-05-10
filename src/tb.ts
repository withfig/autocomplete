const completionSpec: Fig.Spec = {
  name: "tb",
  description: "Tinybird CLI",
  options: [
    {
      name: "--debug",
      description:
        "Prints internal representation, can be combined with any command to get more information",
      exclusiveOn: ["--no-debug"],
    },
    {
      name: "--no-debug",
      description:
        "Prints internal representation, can be combined with any command to get more information",
      exclusiveOn: ["--debug"],
    },
    {
      name: "--token",
      description:
        "Use auth token, defaults to TB_TOKEN envvar, then to the .tinyb file",
      args: {
        name: "text",
      },
    },
    {
      name: "--host",
      description:
        "Use custom host, defaults to TB_HOST envvar, then to https://api.tinybird.co",
      args: {
        name: "text",
      },
    },
    {
      name: "--gcp-project-id",
      description: "The Google Cloud project ID",
      args: {
        name: "text",
      },
    },
    {
      name: "--gcs-bucket",
      description:
        "The Google Cloud Storage bucket to write temp files when using the connectors",
      args: {
        name: "text",
      },
    },
    {
      name: "--google-application-credentials",
      description: "Set GOOGLE_APPLICATION_CREDENTIALS",
      args: {
        name: "text",
      },
    },
    {
      name: "--sf-account",
      description: "The Snowflake Account (e.g. your-domain.west-europe.azure)",
      args: {
        name: "text",
      },
    },
    {
      name: "--sf-warehouse",
      description: "The Snowflake warehouse name",
      args: {
        name: "text",
      },
    },
    {
      name: "--sf-database",
      description: "The Snowflake database name",
      args: {
        name: "text",
      },
    },
    {
      name: "--sf-schema",
      description: "The Snowflake schema name",
      args: {
        name: "text",
      },
    },
    {
      name: "--sf-role",
      description: "The Snowflake role name",
      args: {
        name: "text",
      },
    },
    {
      name: "--sf-user",
      description: "The Snowflake user name",
      args: {
        name: "text",
      },
    },
    {
      name: "--sf-password",
      description: "The Snowflake password",
      args: {
        name: "text",
      },
    },
    {
      name: "--sf-storage-integration",
      description:
        "The Snowflake GCS storage integration name (leave empty to auto-generate one)",
      args: {
        name: "text",
      },
    },
    {
      name: "--sf-stage",
      description:
        "The Snowflake GCS stage name (leave empty to auto-generate one)",
      args: {
        name: "text",
      },
    },
    {
      name: "--with-headers",
      description: "Flag to enable connector to export with headers",
    },
    {
      name: "--version-warning",
      description:
        "Don't print version warning message if there's a new available version. You can use TB_VERSION_WARNING envar",
      exclusiveOn: ["--no-version-warning"],
    },
    {
      name: "--no-version-warning",
      description:
        "Don't print version warning message if there's a new available version. You can use TB_VERSION_WARNING envar",
      exclusiveOn: ["--version-warning"],
    },
    {
      name: "--hide-tokens",
      description: "Disable the output of tokens",
    },
    {
      name: "--version",
      description: "Show the version and exit",
    },
    {
      name: "--help",
      description: "Show this message and exit",
    },
  ],
  subcommands: [
    {
      name: "check",
      description: "Check file syntax",
      options: [
        {
          name: "--debug",
          description: "Print internal representation",
        },
        {
          name: "--help",
          description: "Show this message and exit",
        },
      ],
      args: {
        name: "path",
        template: ["folders", "filepaths"],
      },
    },
    {
      name: "dependencies",
      description: "Print all data sources dependencies",
      options: [
        {
          name: "--no-deps",
          description: "Print only data sources with no pipes using them",
        },
        {
          name: "--match",
          description: "Retrieve any resource matching the pattern",
          args: {
            name: "text",
          },
        },
        {
          name: "--pipe",
          description: "Retrieve any resource used by pipe",
          args: {
            name: "text",
          },
        },
        {
          name: "--datasource",
          description: "Retrieve resources depending on this Data Source",
          args: {
            name: "text",
          },
        },
        {
          name: "--check-for-partial-replace",
          description:
            "Retrieve dependant Data Sources that will have their data replaced if a partial replace is executed in the Data Source selected",
        },
        {
          name: "--recursive",
          description: "Calculate recursive dependencies",
        },
        {
          name: "--help",
          description: "Show this message and exit",
        },
      ],
    },
    {
      name: "diff",
      description:
        "Diffs local datafiles to the corresponding remote files in the workspace",
      options: [
        {
          name: "--fmt",
          description:
            "Format files before doing the diff, default is True so both files match the format",
          exclusiveOn: ["--no-fmt"],
        },
        {
          name: "--no-fmt",
          description:
            "Format files before doing the diff, default is True so both files match the format",
          exclusiveOn: ["--fmt"],
        },
        {
          name: "--no-color",
          description: "Don't colorize diff",
        },
        {
          name: "--main",
          description:
            "Diffs local datafiles to the corresponding remote files in the main workspace. Only works when authenticated on a branch",
        },
        {
          name: "--help",
          description: "Show this message and exit",
        },
      ],
      args: {
        name: "path",
        template: ["folders", "filepaths"],
        isVariadic: true,
      },
    },
    {
      name: "drop-prefix",
      description:
        "Drop all the resources inside a project with prefix. This command is dangerous because it removes everything, use with care",
      options: [
        {
          name: "--yes",
          description: "Do not ask for confirmation",
        },
        {
          name: "--dry-run",
          description: "Run the command without removing anything",
        },
        {
          name: "--help",
          description: "Show this message and exit",
        },
      ],
      args: {
        name: "text",
      },
    },
    {
      name: "fmt",
      description:
        "Formats a .datasource, .pipe or .incl file\n\nThis command removes comments starting with # from the file, use DESCRIPTION instead.\n\nThe format command tries to parse the datafile so syntax errors might rise.\n\n.incl files must contain a NODE definition",
      options: [
        {
          name: "--line-length",
          description:
            "A number indicating the maximum characters per line in the node SQL, lines will be splitted based on the SQL syntax and the number of characters passed as a parameter",
          args: {
            name: "integer",
          },
        },
        {
          name: "--dry-run",
          description: "Don't ask to override the local file",
        },
        {
          name: "--yes",
          description:
            "Do not ask for confirmation to overwrite the local file",
        },
        {
          name: "--help",
          description: "Show this message and exit",
        },
      ],
      args: {
        name: "path",
        template: ["folders", "filepaths"],
        isVariadic: true,
      },
    },
    {
      name: "init",
      description: "Initialize folder layout",
      options: [
        {
          name: "--generate-datasources",
          description:
            "Generate datasources based on CSV, NDJSON and Parquet files in this folder",
        },
        {
          name: "--folder",
          description: "Folder where files will be placed",
          args: {
            name: "directory",
            template: ["folders"],
          },
        },
        {
          name: "--force",
          description: "Overrides existing files",
        },
        {
          name: "--help",
          description: "Show this message and exit",
        },
      ],
    },
    {
      name: "materialize",
      description:
        "[BETA] Given a local Pipe datafile path (FILENAME) and optionally a Materialized View name (TARGET_DATASOURCE), choose one of its nodes to materialize.\n\nThis command guides you to generate the Materialized View with name TARGET_DATASOURCE, the only requirement is having a valid Pipe datafile locally. Use `tb pull` to download resources from your workspace when needed.\n\nSyntax: tb materialize path/to/pipe.pipe",
      options: [
        {
          name: "--prefix",
          description: "Use prefix for all the resources",
          args: {
            name: "text",
          },
        },
        {
          name: "--push-deps",
          description: "Push dependencies, disabled by default",
        },
        {
          name: "--workspace_map",
          isRepeatable: true,
          args: [
            {
              name: "text",
            },
            {
              name: "text",
            },
          ],
        },
        {
          name: "--workspace",
          description:
            "Add a workspace path to the list of external workspaces, usage: --workspace name path/to/folder",
          isRepeatable: true,
          args: [
            {
              name: "text",
            },
            {
              name: "text",
            },
          ],
        },
        {
          name: "--no-versions",
          description:
            "When set, resource dependency versions are not used, it pushes the dependencies as-is",
        },
        {
          name: "--verbose",
          description: "Prints more log",
        },
        {
          name: "--force-populate",
          description: "Subset or full",
          args: {
            name: "text",
          },
        },
        {
          name: "--unlink-on-populate-error",
          description:
            "If the populate job fails the Materialized View is unlinked and new data won't be ingested in the Materialized View. First time a populate job fails, the Materialized View is always unlinked",
        },
        {
          name: "--override-pipe",
          description: "Override pipe if exists or prompt",
        },
        {
          name: "--override-datasource",
          description: "Override data source if exists or prompt",
        },
        {
          name: "--help",
          description: "Show this message and exit",
        },
      ],
      args: [
        {
          name: "path",
          template: ["folders", "filepaths"],
        },
        {
          name: "text",
        },
      ],
    },
    {
      name: "prompt",
      description:
        "Learn how to include info about the CLI in your shell PROMPT",
      options: [
        {
          name: "--help",
          description: "Show this message and exit",
        },
      ],
    },
    {
      name: "pull",
      description: "Retrieve latest versions for project files from Tinybird",
      options: [
        {
          name: "--folder",
          description: "Folder where files will be placed",
          args: {
            name: "directory",
            template: ["folders"],
          },
        },
        {
          name: "--auto",
          description:
            "Saves datafiles automatically into their default directories (/datasources or /pipes)",
        },
        {
          name: "--match",
          description:
            "Retrieve any resourcing matching the pattern. eg --match _test",
          args: {
            name: "text",
          },
        },
        {
          name: "--prefix",
          description: "Download only resources with this prefix",
          args: {
            name: "text",
          },
        },
        {
          name: "--force",
          description: "Override existing files",
        },
        {
          name: "--help",
          description: "Show this message and exit",
        },
      ],
    },
    {
      name: "push",
      description: "Push files to Tinybird\n",
      options: [
        {
          name: "--prefix",
          description: "Use prefix for all the resources",
          args: {
            name: "text",
          },
        },
        {
          name: "--dry-run",
          description:
            "Run the command without creating resources on the Tinybird account or any side effect",
        },
        {
          name: "--check",
          description: "Enable/Disable output checking, enabled by default",
          exclusiveOn: ["--no-check"],
        },
        {
          name: "--no-check",
          description: "Enable/Disable output checking, enabled by default",
          exclusiveOn: ["--check"],
        },
        {
          name: "--push-deps",
          description: "Push dependencies, disabled by default",
        },
        {
          name: "--debug",
          description:
            "Prints internal representation, can be combined with any command to get more information",
        },
        {
          name: ["-f", "--force"],
          description: "Override pipes when they already exist",
        },
        {
          name: "--override-datasource",
          description:
            "When pushing a pipe with a Materialized node if the target Data Source exists it will try to override it",
        },
        {
          name: "--populate",
          description: "Populate materialized nodes when pushing them",
        },
        {
          name: "--subset",
          description:
            "Populate with a subset percent of the data (limited to a maximum of 2M rows), this is useful to quickly test a materialized node with some data. The subset must be greater than 0 and lower than 0.1. A subset of 0.1 means a 10 percent of the data in the source Data Source will be used to populate the materialized view. Use it together with --populate, it has precedence over --sql-condition",
          args: {
            name: "float",
          },
        },
        {
          name: "--sql-condition",
          description:
            "Populate with a SQL condition to be applied to the trigger Data Source of the Materialized View. For instance, `--sql-condition='date == toYYYYMM(now())'` it'll populate taking all the rows from the trigger Data Source which `date` is the current month. Use it together with --populate. --sql-condition is not taken into account if the --subset param is present. Including in the ``sql_condition`` any column present in the Data Source ``engine_sorting_key`` will make the populate job process less data",
          args: {
            name: "text",
          },
        },
        {
          name: "--unlink-on-populate-error",
          description:
            "If the populate job fails the Materialized View is unlinked and new data won't be ingested in the Materialized View. First time a populate job fails, the Materialized View is always unlinked",
        },
        {
          name: "--fixtures",
          description: "Append fixtures to data sources",
        },
        {
          name: "--wait",
          description:
            "To be used along with --populate command. Waits for populate jobs to finish, showing a progress bar. Disabled by default",
        },
        {
          name: "--yes",
          description: "Do not ask for confirmation",
        },
        {
          name: "--only-response-times",
          description: "Checks only response times, when --force push a pipe",
        },
        {
          name: "--workspace_map",
          isRepeatable: true,
          args: [
            {
              name: "text",
            },
            {
              name: "text",
            },
          ],
        },
        {
          name: "--workspace",
          description:
            "Add a workspace path to the list of external workspaces, usage: --workspace name path/to/folder",
          isRepeatable: true,
          args: [
            {
              name: "text",
            },
            {
              name: "text",
            },
          ],
        },
        {
          name: "--no-versions",
          description:
            "When set, resource dependency versions are not used, it pushes the dependencies as-is",
        },
        {
          name: "--timeout",
          description: "Timeout you want to use for the job populate",
          args: {
            name: "float",
          },
        },
        {
          name: ["-l", "--limit"],
          description: "Number of requests to validate",
          args: {
            name: "integer range",
          },
        },
        {
          name: "--sample-by-params",
          description:
            "When set, we will aggregate the pipe_stats_rt requests by extractURLParameterNames(assumeNotNull(url)) and for each combination we will take a sample of N requests",
          args: {
            name: "integer range",
          },
        },
        {
          name: ["-ff", "--failfast"],
          description: "When set, the checker will exit as soon one test fails",
        },
        {
          name: "--ignore-order",
          description:
            "When set, the checker will ignore the order of list properties",
        },
        {
          name: "--validate-processed-bytes",
          description:
            "When set, the checker will validate that the new version doesn't process more than 25% than the current version",
        },
        {
          name: "--last-requests-from-main",
          description:
            "When set, the checker will get top requests requests from main",
        },
        {
          name: "--help",
          description: "Show this message and exit",
        },
      ],
      args: {
        name: "path",
        template: ["folders", "filepaths"],
        isVariadic: true,
      },
    },
    {
      name: "sql",
      description: "Run SQL query over data sources and pipes",
      options: [
        {
          name: "--rows_limit",
          description: "Max number of rows retrieved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--pipeline",
          description: "The name of the Pipe to run the SQL Query",
          args: {
            name: "text",
          },
        },
        {
          name: "--pipe",
          description:
            "The path to the .pipe file to run the SQL Query of a specific NODE",
          args: {
            name: "text",
          },
        },
        {
          name: "--node",
          description: "The NODE name",
          args: {
            name: "text",
          },
        },
        {
          name: "--format",
          description: "Output format",
          args: {
            name: "choice",
            suggestions: ["json", "csv", "human"],
          },
        },
        {
          name: "--stats",
          description: "Show query stats",
          exclusiveOn: ["--no-stats"],
        },
        {
          name: "--no-stats",
          description: "Show query stats",
          exclusiveOn: ["--stats"],
        },
        {
          name: "--help",
          description: "Show this message and exit",
        },
      ],
      args: {
        name: "text",
      },
    },
  ],
};

export default completionSpec;
