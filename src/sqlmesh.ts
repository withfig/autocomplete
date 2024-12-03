const completionSpec: Fig.Spec = {
  name: "sqlmesh",
  description: "SQLMesh command line tool",
  options: [
    {
      name: "--paths",
      description: "Paths to SQLMesh project files",
      args: {
        name: "paths",
        template: "folders",
        isVariadic: true,
      },
    },
    {
      name: "--config",
      description: "Path to config file",
      args: {
        name: "config",
        template: "filepaths",
      },
    },
    {
      name: "--gateway",
      description: "The name of the gateway",
      args: {
        name: "gateway",
      },
    },
    {
      name: "--ignore-warnings",
      description: "Ignore warnings",
    },
    {
      name: "--debug",
      description: "Enable debug mode",
    },
    {
      name: "--log-to-stdout",
      description: "Display logs in stdout",
    },
    {
      name: "--log-file-dir",
      description: "The directory to write log files to",
      args: {
        name: "directory",
        template: "folders",
      },
    },
  ],
  subcommands: [
    {
      name: "init",
      description: "Create a new SQLMesh repository",
      options: [
        {
          name: ["-t", "--template"],
          description:
            "Project template. Supported values: airflow, dbt, dlt, default, empty",
          args: {
            name: "template",
            suggestions: ["airflow", "dbt", "dlt", "default", "empty"],
          },
        },
        {
          name: "--dlt-pipeline",
          description:
            "DLT pipeline for which to generate a SQLMesh project. Use alongside template: dlt",
          args: {
            name: "pipeline",
          },
        },
      ],
      args: {
        name: "sql_dialect",
        isOptional: true,
      },
    },
    {
      name: "render",
      description:
        "Render a model's query, optionally expanding referenced models",
      options: [
        {
          name: "--dialect",
          description: "The SQL dialect to render the query as",
          args: {
            name: "dialect",
          },
        },
        {
          name: "--no-format",
          description: "Disable fancy formatting of the query",
        },
        {
          name: "--start",
          description: "Start time for the render",
          args: {
            name: "start",
          },
        },
        {
          name: "--end",
          description: "End time for the render",
          args: {
            name: "end",
          },
        },
        {
          name: "--execution-time",
          description: "Execution time for the render",
          args: {
            name: "time",
          },
        },
        {
          name: "--expand",
          description: "Expand referenced models",
          args: {
            name: "models",
            isVariadic: true,
          },
        },
      ],
      args: {
        name: "model",
      },
    },
    {
      name: "evaluate",
      description:
        "Evaluate a model and return a dataframe with a default limit of 1000",
      options: [
        {
          name: "--start",
          description: "Start time for evaluation",
          args: {
            name: "start",
          },
        },
        {
          name: "--end",
          description: "End time for evaluation",
          args: {
            name: "end",
          },
        },
        {
          name: "--execution-time",
          description: "Execution time for evaluation",
          args: {
            name: "time",
          },
        },
        {
          name: "--limit",
          description:
            "The number of rows which the query should be limited to",
          args: {
            name: "limit",
          },
        },
      ],
      args: {
        name: "model",
      },
    },
    {
      name: "format",
      description: "Format all SQL models and audits",
      options: [
        {
          name: ["-t", "--transpile"],
          description: "Transpile project models to the specified dialect",
          args: {
            name: "dialect",
          },
        },
        {
          name: "--append-newline",
          description: "Include a newline at the end of each file",
        },
        {
          name: "--no-rewrite-casts",
          description:
            "Preserve the existing casts, without rewriting them to use the :: syntax",
        },
        {
          name: "--normalize",
          description: "Whether or not to normalize identifiers to lowercase",
        },
        {
          name: "--pad",
          description: "Determines the pad size in a formatted string",
          args: {
            name: "size",
          },
        },
        {
          name: "--indent",
          description: "Determines the indentation size in a formatted string",
          args: {
            name: "size",
          },
        },
        {
          name: "--normalize-functions",
          description: "Whether or not to normalize all function names",
          args: {
            name: "mode",
            suggestions: ["upper", "lower"],
          },
        },
        {
          name: "--leading-comma",
          description:
            "Determines whether or not the comma is leading or trailing in select expressions",
        },
        {
          name: "--max-text-width",
          description:
            "The max number of characters in a segment before creating new lines in pretty mode",
          args: {
            name: "width",
          },
        },
        {
          name: "--check",
          description:
            "Whether or not to check formatting (but not actually format anything)",
        },
      ],
      args: {
        name: "paths",
        template: "filepaths",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "diff",
      description:
        "Show the diff between the local state and the target environment",
      args: {
        name: "environment",
      },
    },
    {
      name: "plan",
      description: "Apply local changes to the target environment",
      options: [
        {
          name: "--create-from",
          description:
            "The environment to create the target environment from if it doesn't exist. Default: prod",
          args: {
            name: "environment",
          },
        },
        {
          name: "--skip-tests",
          description:
            "Skip tests prior to generating the plan if they are defined",
        },
        {
          name: "--restate-model",
          description:
            "Restate data for specified models and models downstream from the one specified",
          args: {
            name: "model",
          },
          isRepeatable: true,
        },
        {
          name: "--no-gaps",
          description:
            "Ensure that new snapshots have no data gaps when comparing to existing snapshots",
        },
        {
          name: "--skip-backfill",
          description:
            "Skip the backfill step and only create a virtual update for the plan",
        },
        {
          name: "--empty-backfill",
          description: "Produce empty backfill",
        },
        {
          name: "--forward-only",
          description: "Create a plan for forward-only changes",
        },
        {
          name: "--allow-destructive-model",
          description:
            "Allow destructive forward-only changes to models whose names match the expression",
          args: {
            name: "model",
          },
          isRepeatable: true,
        },
        {
          name: "--effective-from",
          description:
            "The effective date from which to apply forward-only changes on production",
          args: {
            name: "date",
          },
        },
        {
          name: "--no-prompts",
          description:
            "Disable interactive prompts for the backfill time range",
        },
        {
          name: "--auto-apply",
          description: "Automatically apply the new plan after creation",
        },
        {
          name: "--no-auto-categorization",
          description: "Disable automatic change categorization",
        },
        {
          name: "--include-unmodified",
          description: "Include unmodified models in the target environment",
        },
        {
          name: "--select-model",
          description:
            "Select specific model changes that should be included in the plan",
          args: {
            name: "model",
          },
          isRepeatable: true,
        },
        {
          name: "--backfill-model",
          description:
            "Backfill only the models whose names match the expression",
          args: {
            name: "model",
          },
          isRepeatable: true,
        },
        {
          name: "--no-diff",
          description: "Hide text differences for changed models",
        },
        {
          name: "--run",
          description:
            "Run latest intervals as part of the plan application (prod environment only)",
        },
        {
          name: "--enable-preview",
          description:
            "Enable preview for forward-only models when targeting a development environment",
        },
        {
          name: "--verbose",
          description: "Enable verbose output",
        },
      ],
      args: {
        name: "environment",
        isOptional: true,
      },
    },
    {
      name: "run",
      description: "Evaluate missing intervals for the target environment",
      options: [
        {
          name: "--start",
          description: "Start time for the run",
          args: {
            name: "start",
          },
        },
        {
          name: "--end",
          description: "End time for the run",
          args: {
            name: "end",
          },
        },
        {
          name: "--skip-janitor",
          description: "Skip the janitor task",
        },
        {
          name: "--ignore-cron",
          description:
            "Run for all missing intervals, ignoring individual cron schedules",
        },
        {
          name: "--select-model",
          description:
            "Select specific models to run. Note: this always includes upstream dependencies",
          args: {
            name: "model",
          },
          isRepeatable: true,
        },
        {
          name: "--exit-on-env-update",
          description:
            "Exit with specified code if the run is interrupted by an update to the target environment",
          args: {
            name: "code",
          },
        },
        {
          name: "--no-auto-upstream",
          description:
            "Do not automatically include upstream models. Only applicable when --select-model is used",
        },
      ],
      args: {
        name: "environment",
        isOptional: true,
      },
    },
    {
      name: "invalidate",
      description:
        "Invalidate the target environment, forcing its removal during the next run of the janitor process",
      options: [
        {
          name: ["-s", "--sync"],
          description:
            "Wait for the environment to be deleted before returning",
        },
      ],
      args: {
        name: "environment",
      },
    },
    {
      name: "janitor",
      description: "Run the janitor process on-demand",
      options: [
        {
          name: "--ignore-ttl",
          description:
            "Cleanup snapshots that are not referenced in any environment, regardless of when they're set to expire",
        },
      ],
    },
    {
      name: "dag",
      description: "Render the DAG as an html file",
      options: [
        {
          name: "--select-model",
          description: "Select specific models to include in the dag",
          args: {
            name: "model",
          },
          isRepeatable: true,
        },
      ],
      args: {
        name: "file",
      },
    },
    {
      name: "create_test",
      description: "Generate a unit test fixture for a given model",
      options: [
        {
          name: ["-q", "--query"],
          description:
            "Queries that will be used to generate data for the model's dependencies",
          args: [
            {
              name: "name",
            },
            {
              name: "query",
            },
          ],
          isRepeatable: true,
        },
        {
          name: ["-o", "--overwrite"],
          description:
            "When true, the fixture file will be overwritten in case it already exists",
        },
        {
          name: ["-v", "--var"],
          description:
            "Key-value pairs that will define variables needed by the model",
          args: [
            {
              name: "key",
            },
            {
              name: "value",
            },
          ],
          isRepeatable: true,
        },
        {
          name: ["-p", "--path"],
          description:
            "The file path corresponding to the fixture, relative to the test directory",
          args: {
            name: "path",
          },
        },
        {
          name: ["-n", "--name"],
          description: "The name of the test that will be created",
          args: {
            name: "name",
          },
        },
        {
          name: "--include-ctes",
          description: "When true, CTE fixtures will also be generated",
        },
      ],
      args: {
        name: "model",
      },
    },
    {
      name: "test",
      description: "Run model unit tests",
      options: [
        {
          name: ["-k", "--match-pattern"],
          description: "Only run tests matching pattern",
          args: {
            name: "pattern",
          },
          isRepeatable: true,
        },
        {
          name: "--verbose",
          description: "Enable verbose output",
        },
        {
          name: "--preserve-fixtures",
          description:
            "Preserve the fixture tables in the testing database, useful for debugging",
        },
      ],
      args: {
        name: "tests",
        isVariadic: true,
      },
    },
    {
      name: "audit",
      description: "Run audits for the target model(s)",
      options: [
        {
          name: "--model",
          description: "A model to audit",
          args: {
            name: "model",
          },
          isRepeatable: true,
        },
        {
          name: "--start",
          description: "Start time for the audit",
          args: {
            name: "start",
          },
        },
        {
          name: "--end",
          description: "End time for the audit",
          args: {
            name: "end",
          },
        },
        {
          name: "--execution-time",
          description: "Execution time for the audit",
          args: {
            name: "time",
          },
        },
      ],
    },
    {
      name: "ui",
      description: "Start a browser-based SQLMesh UI",
      options: [
        {
          name: "--host",
          description: "Bind socket to this host",
          args: {
            name: "host",
            default: "127.0.0.1",
          },
        },
        {
          name: "--port",
          description: "Bind socket to this port",
          args: {
            name: "port",
            default: "8000",
          },
        },
        {
          name: "--mode",
          description: "Mode to start the UI in",
          args: {
            name: "mode",
            suggestions: ["ide", "catalog", "docs", "plan"],
            default: "ide",
          },
        },
      ],
    },
    {
      name: "migrate",
      description: "Migrate SQLMesh to the current running version",
    },
    {
      name: "rollback",
      description: "Rollback SQLMesh to the previous migration",
    },
    {
      name: "create_external_models",
      description: "Create a schema file containing external model schemas",
      options: [
        {
          name: "--strict",
          description:
            "Raise an error if the external model is missing in the database",
        },
      ],
    },
  ],
};

export default completionSpec;
