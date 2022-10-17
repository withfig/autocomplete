import { keyValueList } from "@fig/autocomplete-generators";

const completionSpec: Fig.Spec = {
  name: "airflow",
  description: "Subcommand",
  subcommands: [
    {
      name: "celery",
      description: "Celery components",
      subcommands: [
        {
          name: "flower",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-A", "--basic-auth"],
              description:
                "Securing Flower with Basic Authentication. Accepts user:password pairs separated by a comma. Example: flower_basic_auth = user1:password1,user2:password2",
              args: {
                name: "basic_auth",
                description:
                  "Securing Flower with Basic Authentication. Accepts user:password pairs separated by a comma. Example: flower_basic_auth = user1:password1,user2:password2",
                generators: keyValueList({
                  separator: ":",
                  keys: ["user"],
                  values: ["password"],
                  cache: true,
                }),
              },
            },
            {
              name: ["-a", "--broker-api"],
              description: "Broker API",
              args: {
                name: "broker_api",
                description: "Broker API",
              },
            },
            {
              name: ["-D", "--daemon"],
              description: "Daemonize instead of running in the foreground",
            },
            {
              name: ["-c", "--flower-conf"],
              description: "Configuration file for flower",
              args: {
                name: "flower_conf",
                description: "Configuration file for flower",
              },
            },
            {
              name: ["-H", "--hostname"],
              description: "Set the hostname on which to run the server",
              args: {
                name: "hostname",
                description: "Set the hostname on which to run the server",
              },
            },
            {
              name: ["-l", "--log-file"],
              description: "Location of the log file",
              args: {
                name: "log_file",
                description: "Location of the log file",
              },
            },
            {
              name: "--pid",
              description: "PID file location",
              args: {
                isOptional: true,
                name: "pid",
                description: "PID file location",
              },
            },
            {
              name: ["-p", "--port"],
              description: "The port on which to run the server",
              args: {
                name: "port",
                description: "The port on which to run the server",
              },
            },
            {
              name: "--stderr",
              description: "Redirect stderr to this file",
              args: {
                name: "stderr",
                description: "Redirect stderr to this file",
              },
            },
            {
              name: "--stdout",
              description: "Redirect stdout to this file",
              args: {
                name: "stdout",
                description: "Redirect stdout to this file",
              },
            },
            {
              name: ["-u", "--url-prefix"],
              description: "URL prefix for Flower",
              args: {
                name: "url_prefix",
                description: "URL prefix for Flower",
              },
            },
          ],
          description: "Start a Celery Flower",
        },
        {
          name: "stop",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: "--pid",
              description: "PID file location",
              args: {
                isOptional: true,
                name: "pid",
                description: "PID file location",
              },
            },
          ],
          description: "Stop the Celery worker gracefully",
        },
        {
          name: "worker",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-a", "--autoscale"],
              description: "Minimum and Maximum number of worker to autoscale",
              args: {
                name: "autoscale",
                description:
                  "Minimum and Maximum number of worker to autoscale",
              },
            },
            {
              name: ["-H", "--celery-hostname"],
              description:
                "Set the hostname of celery worker if you have multiple workers on a single machine",
              args: {
                name: "celery_hostname",
                description:
                  "Set the hostname of celery worker if you have multiple workers on a single machine",
              },
            },
            {
              name: ["-c", "--concurrency"],
              description: "The number of worker processes",
              args: {
                name: "concurrency",
                description: "The number of worker processes",
              },
            },
            {
              name: ["-D", "--daemon"],
              description: "Daemonize instead of running in the foreground",
            },
            {
              name: ["-l", "--log-file"],
              description: "Location of the log file",
              args: {
                name: "log_file",
                description: "Location of the log file",
              },
            },
            {
              name: "--pid",
              description: "PID file location",
              args: {
                isOptional: true,
                name: "pid",
                description: "PID file location",
              },
            },
            {
              name: ["-q", "--queues"],
              description: "Comma delimited list of queues to serve",
              args: {
                name: "queues",
                description: "Comma delimited list of queues to serve",
              },
            },
            {
              name: ["-s", "--skip-serve-logs"],
              description:
                "Don't start the serve logs process along with the workers",
            },
            {
              name: "--stderr",
              description: "Redirect stderr to this file",
              args: {
                name: "stderr",
                description: "Redirect stderr to this file",
              },
            },
            {
              name: "--stdout",
              description: "Redirect stdout to this file",
              args: {
                name: "stdout",
                description: "Redirect stdout to this file",
              },
            },
            {
              name: ["-u", "--umask"],
              description: "Set the umask of celery worker in daemon mode",
              args: {
                name: "umask",
                description: "Set the umask of celery worker in daemon mode",
              },
            },
            {
              name: "--without-gossip",
              description: "Don't subscribe to other workers events",
            },
            {
              name: "--without-mingle",
              description: "Don't synchronize with other workers at start-up",
            },
          ],
          description: "Start a Celery worker node",
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Show this help message and exit",
        },
      ],
    },
    {
      name: "cheat-sheet",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show this help message and exit",
        },
        {
          name: ["-v", "--verbose"],
          description: "Make logging output more verbose",
        },
      ],
      description: "Display cheat sheet",
    },
    {
      name: "config",
      description: "View configuration",
      subcommands: [
        {
          name: "get-value",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
          ],
          args: [
            {
              name: "section",
              description: "The section name",
            },
            {
              name: "option",
              description: "The option name",
            },
          ],
          description: "Print the value of the configuration",
        },
        {
          name: "list",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: "--color",
              description: "Do emit colored output (default: auto)",
              args: {
                name: "color",
                description: "Do emit colored output (default: auto)",
                suggestions: ["off", "auto", "on"],
              },
            },
          ],
          description: "List options for the configuration",
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Show this help message and exit",
        },
      ],
    },
    {
      name: "connections",
      description: "Manage connections",
      subcommands: [
        {
          name: "add",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: "--conn-description",
              description:
                "Connection description, optional when adding a connection",
              args: {
                name: "conn_description",
                description:
                  "Connection description, optional when adding a connection",
              },
            },
            {
              name: "--conn-extra",
              description:
                "Connection `Extra` field, optional when adding a connection",
              args: {
                name: "conn_extra",
                description:
                  "Connection `Extra` field, optional when adding a connection",
              },
            },
            {
              name: "--conn-host",
              description: "Connection host, optional when adding a connection",
              args: {
                name: "conn_host",
                description:
                  "Connection host, optional when adding a connection",
              },
            },
            {
              name: "--conn-json",
              description:
                "Connection JSON, required to add a connection using JSON representation",
              args: {
                name: "conn_json",
                description:
                  "Connection JSON, required to add a connection using JSON representation",
              },
            },
            {
              name: "--conn-login",
              description:
                "Connection login, optional when adding a connection",
              args: {
                name: "conn_login",
                description:
                  "Connection login, optional when adding a connection",
              },
            },
            {
              name: "--conn-password",
              description:
                "Connection password, optional when adding a connection",
              args: {
                name: "conn_password",
                description:
                  "Connection password, optional when adding a connection",
              },
            },
            {
              name: "--conn-port",
              description: "Connection port, optional when adding a connection",
              args: {
                name: "conn_port",
                description:
                  "Connection port, optional when adding a connection",
              },
            },
            {
              name: "--conn-schema",
              description:
                "Connection schema, optional when adding a connection",
              args: {
                name: "conn_schema",
                description:
                  "Connection schema, optional when adding a connection",
              },
            },
            {
              name: "--conn-type",
              description:
                "Connection type, required to add a connection without conn_uri",
              args: {
                name: "conn_type",
                description:
                  "Connection type, required to add a connection without conn_uri",
              },
            },
            {
              name: "--conn-uri",
              description:
                "Connection URI, required to add a connection without conn_type",
              args: {
                name: "conn_uri",
                description:
                  "Connection URI, required to add a connection without conn_type",
              },
            },
          ],
          args: {
            name: "conn_id",
            description:
              "Connection id, required to get/add/delete a connection",
          },
          description: "Add a connection",
        },
        {
          name: "delete",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: "--color",
              description: "Do emit colored output (default: auto)",
              args: {
                name: "color",
                description: "Do emit colored output (default: auto)",
                suggestions: ["off", "auto", "on"],
              },
            },
          ],
          args: {
            name: "conn_id",
            description:
              "Connection id, required to get/add/delete a connection",
          },
          description: "Delete a connection",
        },
        {
          name: "export",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: "--file-format",
              description: "File format for the export",
              args: {
                name: "file_format",
                description: "File format for the export",
                suggestions: ["json", "yaml", "env"],
              },
            },
            {
              name: "--format",
              description:
                "Deprecated -- use `--file-format` instead. File format to use for the export",
              args: {
                name: "format",
                description:
                  "Deprecated -- use `--file-format` instead. File format to use for the export",
                suggestions: ["json", "yaml", "env"],
              },
            },
            {
              name: "--serialization-format",
              description:
                "When exporting as `.env` format, defines how connections should be serialized. Default is `uri`",
              args: {
                name: "serialization_format",
                description:
                  "When exporting as `.env` format, defines how connections should be serialized. Default is `uri`",
                suggestions: ["json", "uri"],
              },
            },
          ],
          args: {
            name: "file",
            description: "Output file path for exporting the connections",
          },
          description: "Export all connections",
        },
        {
          name: "get",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: "--color",
              description: "Do emit colored output (default: auto)",
              args: {
                name: "color",
                description: "Do emit colored output (default: auto)",
                suggestions: ["off", "auto", "on"],
              },
            },
            {
              name: ["-o", "--output"],
              description:
                "Output format. Allowed values: json, yaml, plain, table (default: table)",
              args: {
                name: "(table, json, yaml, plain)",
                description:
                  "Output format. Allowed values: json, yaml, plain, table (default: table)",
                suggestions: ["table", "json", "yaml", "plain"],
              },
            },
            {
              name: ["-v", "--verbose"],
              description: "Make logging output more verbose",
            },
          ],
          args: {
            name: "conn_id",
            description:
              "Connection id, required to get/add/delete a connection",
          },
          description: "Get a connection",
        },
        {
          name: "import",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
          ],
          args: {
            name: "file",
            description: "Import connections from a file",
          },
          description: "Import connections from a file",
        },
        {
          name: "list",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: "--conn-id",
              description:
                "If passed, only items with the specified connection ID will be displayed",
              args: {
                name: "conn_id",
                description:
                  "If passed, only items with the specified connection ID will be displayed",
              },
            },
            {
              name: ["-o", "--output"],
              description:
                "Output format. Allowed values: json, yaml, plain, table (default: table)",
              args: {
                name: "(table, json, yaml, plain)",
                description:
                  "Output format. Allowed values: json, yaml, plain, table (default: table)",
                suggestions: ["table", "json", "yaml", "plain"],
              },
            },
            {
              name: ["-v", "--verbose"],
              description: "Make logging output more verbose",
            },
          ],
          description: "List connections",
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Show this help message and exit",
        },
      ],
    },
    {
      name: "dag-processor",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show this help message and exit",
        },
        {
          name: ["-D", "--daemon"],
          description: "Daemonize instead of running in the foreground",
        },
        {
          name: ["-p", "--do-pickle"],
          description:
            "Attempt to pickle the DAG object to send over to the workers, instead of letting workers run their version of the code",
        },
        {
          name: ["-l", "--log-file"],
          description: "Location of the log file",
          args: {
            name: "log_file",
            description: "Location of the log file",
          },
        },
        {
          name: ["-n", "--num-runs"],
          description: "Set the number of runs to execute before exiting",
          args: {
            name: "num_runs",
            description: "Set the number of runs to execute before exiting",
          },
        },
        {
          name: "--pid",
          description: "PID file location",
          args: {
            isOptional: true,
            name: "pid",
            description: "PID file location",
          },
        },
        {
          name: "--stderr",
          description: "Redirect stderr to this file",
          args: {
            name: "stderr",
            description: "Redirect stderr to this file",
          },
        },
        {
          name: "--stdout",
          description: "Redirect stdout to this file",
          args: {
            name: "stdout",
            description: "Redirect stdout to this file",
          },
        },
        {
          name: ["-S", "--subdir"],
          description:
            "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
          args: {
            name: "subdir",
            description:
              "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
          },
        },
      ],
      description: "Start a standalone Dag Processor instance",
    },
    {
      name: "dags",
      description: "Manage DAGs",
      subcommands: [
        {
          name: "backfill",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-c", "--conf"],
              description:
                "JSON string that gets pickled into the DagRun's conf attribute",
              args: {
                name: "conf",
                description:
                  "JSON string that gets pickled into the DagRun's conf attribute",
              },
            },
            {
              name: "--continue-on-failures",
              description:
                "If set, the backfill will keep going even if some of the tasks failed",
            },
            {
              name: "--delay-on-limit",
              description:
                "Amount of time in seconds to wait when the limit on maximum active dag runs (max_active_runs) has been reached before trying to execute a dag run again",
              args: {
                name: "delay_on_limit",
                description:
                  "Amount of time in seconds to wait when the limit on maximum active dag runs (max_active_runs) has been reached before trying to execute a dag run again",
              },
            },
            {
              name: ["-x", "--donot-pickle"],
              description:
                "Do not attempt to pickle the DAG object to send over to the workers, just tell the workers to run their version of the code",
            },
            {
              name: ["-n", "--dry-run"],
              description:
                "Perform a dry run for each task. Only renders Template Fields for each task, nothing else",
            },
            {
              name: ["-e", "--end-date"],
              description: "Override end_date YYYY-MM-DD",
              args: {
                name: "end_date",
                description: "Override end_date YYYY-MM-DD",
              },
            },
            {
              name: ["-i", "--ignore-dependencies"],
              description:
                "Skip upstream tasks, run only the tasks matching the regexp. Only works in conjunction with task_regex",
            },
            {
              name: ["-I", "--ignore-first-depends-on-past"],
              description:
                "Ignores depends_on_past dependencies for the first set of tasks only (subsequent executions in the backfill DO respect depends_on_past)",
            },
            {
              name: ["-l", "--local"],
              description: "Run the task using the LocalExecutor",
            },
            {
              name: ["-m", "--mark-success"],
              description: "Mark jobs as succeeded without running them",
            },
            {
              name: "--pool",
              description: "Resource pool to use",
              args: {
                name: "pool",
                description: "Resource pool to use",
              },
            },
            {
              name: "--rerun-failed-tasks",
              description:
                "If set, the backfill will auto-rerun all the failed tasks for the backfill date range instead of throwing exceptions",
            },
            {
              name: "--reset-dagruns",
              description:
                "If set, the backfill will delete existing backfill-related DAG runs and start anew with fresh, running DAG runs",
            },
            {
              name: ["-B", "--run-backwards"],
              description:
                "If set, the backfill will run tasks from the most recent day first.  if there are tasks that depend_on_past this option will throw an exception",
            },
            {
              name: ["-s", "--start-date"],
              description: "Override start_date YYYY-MM-DD",
              args: {
                name: "start_date",
                description: "Override start_date YYYY-MM-DD",
              },
            },
            {
              name: ["-S", "--subdir"],
              description:
                "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              args: {
                name: "subdir",
                description:
                  "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              },
            },
            {
              name: ["-t", "--task-regex"],
              description:
                "The regex to filter specific task_ids to backfill (optional)",
              args: {
                name: "task_regex",
                description:
                  "The regex to filter specific task_ids to backfill (optional)",
              },
            },
            {
              name: "--treat-dag-as-regex",
              description:
                "If set, dag_id will be treated as regex instead of an exact string",
            },
            {
              name: ["-v", "--verbose"],
              description: "Make logging output more verbose",
            },
            {
              name: ["-y", "--yes"],
              description: "Do not prompt to confirm. Use with care!",
            },
          ],
          args: {
            name: "dag_id",
            description: "The id of the dag",
          },
          description: "Run subsections of a DAG for a specified date range",
        },
        {
          name: "delete",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-y", "--yes"],
              description: "Do not prompt to confirm. Use with care!",
            },
          ],
          args: {
            name: "dag_id",
            description: "The id of the dag",
          },
          description: "Delete all DB records related to the specified DAG",
        },
        {
          name: "list",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-o", "--output"],
              description:
                "Output format. Allowed values: json, yaml, plain, table (default: table)",
              args: {
                name: "(table, json, yaml, plain)",
                description:
                  "Output format. Allowed values: json, yaml, plain, table (default: table)",
                suggestions: ["table", "json", "yaml", "plain"],
              },
            },
            {
              name: ["-S", "--subdir"],
              description:
                "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              args: {
                name: "subdir",
                description:
                  "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              },
            },
            {
              name: ["-v", "--verbose"],
              description: "Make logging output more verbose",
            },
          ],
          description: "List all the DAGs",
        },
        {
          name: "list-import-errors",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-o", "--output"],
              description:
                "Output format. Allowed values: json, yaml, plain, table (default: table)",
              args: {
                name: "(table, json, yaml, plain)",
                description:
                  "Output format. Allowed values: json, yaml, plain, table (default: table)",
                suggestions: ["table", "json", "yaml", "plain"],
              },
            },
            {
              name: ["-S", "--subdir"],
              description:
                "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              args: {
                name: "subdir",
                description:
                  "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              },
            },
            {
              name: ["-v", "--verbose"],
              description: "Make logging output more verbose",
            },
          ],
          description: "List all the DAGs that have import errors",
        },
        {
          name: "list-jobs",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-d", "--dag-id"],
              description: "The id of the dag",
              args: {
                name: "dag_id",
                description: "The id of the dag",
              },
            },
            {
              name: "--limit",
              description: "Return a limited number of records",
              args: {
                name: "limit",
                description: "Return a limited number of records",
              },
            },
            {
              name: ["-o", "--output"],
              description:
                "Output format. Allowed values: json, yaml, plain, table (default: table)",
              args: {
                name: "(table, json, yaml, plain)",
                description:
                  "Output format. Allowed values: json, yaml, plain, table (default: table)",
                suggestions: ["table", "json", "yaml", "plain"],
              },
            },
            {
              name: "--state",
              description: "Only list the dag runs corresponding to the state",
              args: {
                name: "state",
                description:
                  "Only list the dag runs corresponding to the state",
              },
            },
            {
              name: ["-v", "--verbose"],
              description: "Make logging output more verbose",
            },
          ],
          description: "List the jobs",
        },
        {
          name: "list-runs",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-d", "--dag-id"],
              description: "The id of the dag",
              args: {
                name: "dag_id",
                description: "The id of the dag",
              },
              isRequired: true,
            },
            {
              name: ["-e", "--end-date"],
              description: "Override end_date YYYY-MM-DD",
              args: {
                name: "end_date",
                description: "Override end_date YYYY-MM-DD",
              },
            },
            {
              name: "--no-backfill",
              description: "Filter all the backfill dagruns given the dag id",
            },
            {
              name: ["-o", "--output"],
              description:
                "Output format. Allowed values: json, yaml, plain, table (default: table)",
              args: {
                name: "(table, json, yaml, plain)",
                description:
                  "Output format. Allowed values: json, yaml, plain, table (default: table)",
                suggestions: ["table", "json", "yaml", "plain"],
              },
            },
            {
              name: ["-s", "--start-date"],
              description: "Override start_date YYYY-MM-DD",
              args: {
                name: "start_date",
                description: "Override start_date YYYY-MM-DD",
              },
            },
            {
              name: "--state",
              description: "Only list the dag runs corresponding to the state",
              args: {
                name: "state",
                description:
                  "Only list the dag runs corresponding to the state",
              },
            },
            {
              name: ["-v", "--verbose"],
              description: "Make logging output more verbose",
            },
          ],
          description: "List DAG runs given a DAG id",
        },
        {
          name: "next-execution",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-n", "--num-executions"],
              description: "The number of next execution datetimes to show",
              args: {
                name: "num_executions",
                description: "The number of next execution datetimes to show",
              },
            },
            {
              name: ["-S", "--subdir"],
              description:
                "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              args: {
                name: "subdir",
                description:
                  "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              },
            },
          ],
          args: {
            name: "dag_id",
            description: "The id of the dag",
          },
          description: "Get the next execution datetimes of a DAG",
        },
        {
          name: "pause",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-S", "--subdir"],
              description:
                "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              args: {
                name: "subdir",
                description:
                  "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              },
            },
          ],
          args: {
            name: "dag_id",
            description: "The id of the dag",
          },
          description: "Pause a DAG",
        },
        {
          name: "report",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-o", "--output"],
              description:
                "Output format. Allowed values: json, yaml, plain, table (default: table)",
              args: {
                name: "(table, json, yaml, plain)",
                description:
                  "Output format. Allowed values: json, yaml, plain, table (default: table)",
                suggestions: ["table", "json", "yaml", "plain"],
              },
            },
            {
              name: ["-S", "--subdir"],
              description:
                "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              args: {
                name: "subdir",
                description:
                  "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              },
            },
            {
              name: ["-v", "--verbose"],
              description: "Make logging output more verbose",
            },
          ],
          description: "Show DagBag loading report",
        },
        {
          name: "reserialize",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: "--clear-only",
              description:
                "If passed, serialized DAGs will be cleared but not reserialized",
            },
            {
              name: ["-S", "--subdir"],
              description:
                "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              args: {
                name: "subdir",
                description:
                  "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              },
            },
          ],
          description: "Reserialize all DAGs by parsing the DagBag files",
        },
        {
          name: "show",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: "--imgcat",
              description: "Displays graph using the imgcat tool",
            },
            {
              name: ["-s", "--save"],
              description: "Saves the result to the indicated file",
              args: {
                name: "save",
                description: "Saves the result to the indicated file",
              },
            },
            {
              name: ["-S", "--subdir"],
              description:
                "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              args: {
                name: "subdir",
                description:
                  "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              },
            },
          ],
          args: {
            name: "dag_id",
            description: "The id of the dag",
          },
          description: "Displays DAG's tasks with their dependencies",
        },
        {
          name: "show-dependencies",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: "--imgcat",
              description: "Displays graph using the imgcat tool",
            },
            {
              name: ["-s", "--save"],
              description: "Saves the result to the indicated file",
              args: {
                name: "save",
                description: "Saves the result to the indicated file",
              },
            },
            {
              name: ["-S", "--subdir"],
              description:
                "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              args: {
                name: "subdir",
                description:
                  "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              },
            },
          ],
          description: "Displays DAGs with their dependencies",
        },
        {
          name: "state",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-S", "--subdir"],
              description:
                "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              args: {
                name: "subdir",
                description:
                  "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              },
            },
          ],
          args: [
            {
              name: "dag_id",
              description: "The id of the dag",
            },
            {
              name: "execution_date",
              description: "The execution date of the DAG",
            },
          ],
          description: "Get the status of a dag run",
        },
        {
          name: "test",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-c", "--conf"],
              description:
                "JSON string that gets pickled into the DagRun's conf attribute",
              args: {
                name: "conf",
                description:
                  "JSON string that gets pickled into the DagRun's conf attribute",
              },
            },
            {
              name: "--imgcat-dagrun",
              description:
                "After completing the dag run, prints a diagram on the screen for the current DAG Run using the imgcat tool.\n",
            },
            {
              name: "--save-dagrun",
              description:
                "After completing the backfill, saves the diagram for current DAG Run to the indicated file.\n\n",
              args: {
                name: "save_dagrun",
                description:
                  "After completing the backfill, saves the diagram for current DAG Run to the indicated file.\n\n",
              },
            },
            {
              name: "--show-dagrun",
              description:
                "After completing the backfill, shows the diagram for current DAG Run.\n\nThe diagram is in DOT language\n",
            },
            {
              name: ["-S", "--subdir"],
              description:
                "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              args: {
                name: "subdir",
                description:
                  "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              },
            },
          ],
          args: [
            {
              name: "dag_id",
              description: "The id of the dag",
            },
            {
              isOptional: true,
              name: "execution_date",
              description: "The execution date of the DAG (optional)",
            },
          ],
          description: "Execute one single DagRun",
        },
        {
          name: "trigger",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-c", "--conf"],
              description:
                "JSON string that gets pickled into the DagRun's conf attribute",
              args: {
                name: "conf",
                description:
                  "JSON string that gets pickled into the DagRun's conf attribute",
              },
            },
            {
              name: ["-e", "--exec-date"],
              description: "The execution date of the DAG",
              args: {
                name: "exec_date",
                description: "The execution date of the DAG",
              },
            },
            {
              name: ["-r", "--run-id"],
              description: "Helps to identify this run",
              args: {
                name: "run_id",
                description: "Helps to identify this run",
              },
            },
            {
              name: ["-S", "--subdir"],
              description:
                "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              args: {
                name: "subdir",
                description:
                  "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              },
            },
          ],
          args: {
            name: "dag_id",
            description: "The id of the dag",
          },
          description: "Trigger a DAG run",
        },
        {
          name: "unpause",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-S", "--subdir"],
              description:
                "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              args: {
                name: "subdir",
                description:
                  "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              },
            },
          ],
          args: {
            name: "dag_id",
            description: "The id of the dag",
          },
          description: "Resume a paused DAG",
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Show this help message and exit",
        },
      ],
    },
    {
      name: "db",
      description: "Database operations",
      subcommands: [
        {
          name: "check",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
          ],
          description: "Check if the database can be reached",
        },
        {
          name: "check-migrations",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-t", "--migration-wait-timeout"],
              description: "Timeout to wait for db to migrate",
              args: {
                name: "migration_wait_timeout",
                description: "Timeout to wait for db to migrate",
              },
            },
          ],
          description: "Check if migration have finished",
        },
        {
          name: "clean",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: "--clean-before-timestamp",
              description:
                "The date or timestamp before which data should be purged.\nIf no timezone info is supplied then dates are assumed to be in airflow default timezone.\nExample: '2022-01-01 00:00:00+01:00'",
              args: {
                name: "clean_before_timestamp",
                description:
                  "The date or timestamp before which data should be purged.\nIf no timezone info is supplied then dates are assumed to be in airflow default timezone.\nExample: '2022-01-01 00:00:00+01:00'",
              },
              isRequired: true,
            },
            {
              name: "--dry-run",
              description: "Perform a dry run",
            },
            {
              name: "--skip-archive",
              description: "Don't preserve purged records in an archive table",
            },
            {
              name: ["-t", "--tables"],
              description:
                "Table names to perform maintenance on (use comma-separated list).\nOptions: ['callback_request', 'celery_taskmeta', 'celery_tasksetmeta', 'dag', 'dag_run', 'dataset_event', 'import_error', 'job', 'log', 'rendered_task_instance_fields', 'sla_miss', 'task_fail', 'task_instance', 'task_reschedule', 'xcom']",
              args: {
                name: "tables",
                description:
                  "Table names to perform maintenance on (use comma-separated list).\nOptions: ['callback_request', 'celery_taskmeta', 'celery_tasksetmeta', 'dag', 'dag_run', 'dataset_event', 'import_error', 'job', 'log', 'rendered_task_instance_fields', 'sla_miss', 'task_fail', 'task_instance', 'task_reschedule', 'xcom']",
              },
            },
            {
              name: ["-v", "--verbose"],
              description: "Make logging output more verbose",
            },
            {
              name: ["-y", "--yes"],
              description: "Do not prompt to confirm. Use with care!",
            },
          ],
          description: "Purge old records in metastore tables",
        },
        {
          name: "downgrade",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: "--from-revision",
              description:
                "(Optional) If generating sql, may supply a *from* Alembic revision",
              args: {
                name: "from_revision",
                description:
                  "(Optional) If generating sql, may supply a *from* Alembic revision",
              },
            },
            {
              name: "--from-version",
              description:
                "(Optional) If generating sql, may supply a *from* version",
              args: {
                name: "from_version",
                description:
                  "(Optional) If generating sql, may supply a *from* version",
              },
            },
            {
              name: ["-s", "--show-sql-only"],
              description:
                "Don't actually run migrations; just print out sql scripts for offline migration. Required if using either `--from-version` or `--from-version`",
            },
            {
              name: ["-r", "--to-revision"],
              description:
                "The Alembic revision to downgrade to. Note: must provide either `--to-revision` or `--to-version`",
              args: {
                name: "to_revision",
                description:
                  "The Alembic revision to downgrade to. Note: must provide either `--to-revision` or `--to-version`",
              },
            },
            {
              name: ["-n", "--to-version"],
              description:
                "(Optional) If provided, only run migrations up to this version",
              args: {
                name: "to_version",
                description:
                  "(Optional) If provided, only run migrations up to this version",
              },
            },
            {
              name: ["-y", "--yes"],
              description: "Do not prompt to confirm. Use with care!",
            },
          ],
          description: "Downgrade the schema of the metadata database",
        },
        {
          name: "init",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
          ],
          description: "Initialize the metadata database",
        },
        {
          name: "reset",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-s", "--skip-init"],
              description: "Only remove tables; do not perform db init",
            },
            {
              name: ["-y", "--yes"],
              description: "Do not prompt to confirm. Use with care!",
            },
          ],
          description: "Burn down and rebuild the metadata database",
        },
        {
          name: "shell",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
          ],
          description: "Runs a shell to access the database",
        },
        {
          name: "upgrade",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: "--from-revision",
              description:
                "(Optional) If generating sql, may supply a *from* Alembic revision",
              args: {
                name: "from_revision",
                description:
                  "(Optional) If generating sql, may supply a *from* Alembic revision",
              },
            },
            {
              name: "--from-version",
              description:
                "(Optional) If generating sql, may supply a *from* version",
              args: {
                name: "from_version",
                description:
                  "(Optional) If generating sql, may supply a *from* version",
              },
            },
            {
              name: ["-s", "--show-sql-only"],
              description:
                "Don't actually run migrations; just print out sql scripts for offline migration. Required if using either `--from-version` or `--from-version`",
            },
            {
              name: ["-r", "--to-revision"],
              description:
                "(Optional) If provided, only run migrations up to and including this Alembic revision",
              args: {
                name: "to_revision",
                description:
                  "(Optional) If provided, only run migrations up to and including this Alembic revision",
              },
            },
            {
              name: ["-n", "--to-version"],
              description:
                "(Optional) The airflow version to upgrade to. Note: must provide either `--to-revision` or `--to-version`",
              args: {
                name: "to_version",
                description:
                  "(Optional) The airflow version to upgrade to. Note: must provide either `--to-revision` or `--to-version`",
              },
            },
          ],
          description: "Upgrade the metadata database to latest version",
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Show this help message and exit",
        },
      ],
    },
    {
      name: "info",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show this help message and exit",
        },
        {
          name: "--anonymize",
          description:
            "Minimize any personal identifiable information. Use it when sharing output with others",
        },
        {
          name: "--file-io",
          description: "Send output to file.io service and returns link",
        },
        {
          name: ["-o", "--output"],
          description:
            "Output format. Allowed values: json, yaml, plain, table (default: table)",
          args: {
            name: "(table, json, yaml, plain)",
            description:
              "Output format. Allowed values: json, yaml, plain, table (default: table)",
            suggestions: ["table", "json", "yaml", "plain"],
          },
        },
        {
          name: ["-v", "--verbose"],
          description: "Make logging output more verbose",
        },
      ],
      description: "Show information about current Airflow and environment",
    },
    {
      name: "jobs",
      description: "Manage jobs",
      subcommands: [
        {
          name: "check",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: "--allow-multiple",
              description:
                "If passed, this command will be successful even if multiple matching alive jobs are found",
            },
            {
              name: "--hostname",
              description: "The hostname of job(s) that will be checked",
              args: {
                name: "hostname",
                description: "The hostname of job(s) that will be checked",
              },
            },
            {
              name: "--job-type",
              description: "The type of job(s) that will be checked",
              args: {
                name: "job_type",
                description: "The type of job(s) that will be checked",
                suggestions: [
                  "BackfillJob",
                  "LocalTaskJob",
                  "SchedulerJob",
                  "TriggererJob",
                ],
              },
            },
            {
              name: "--limit",
              description:
                "The number of recent jobs that will be checked. To disable limit, set 0",
              args: {
                name: "limit",
                description:
                  "The number of recent jobs that will be checked. To disable limit, set 0",
              },
            },
          ],
          description: "Checks if job(s) are still alive",
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Show this help message and exit",
        },
      ],
    },
    {
      name: "kerberos",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show this help message and exit",
        },
        {
          name: ["-D", "--daemon"],
          description: "Daemonize instead of running in the foreground",
        },
        {
          name: ["-k", "--keytab"],
          description: "Keytab",
          args: {
            isOptional: true,
            name: "keytab",
            description: "Keytab",
          },
        },
        {
          name: ["-l", "--log-file"],
          description: "Location of the log file",
          args: {
            name: "log_file",
            description: "Location of the log file",
          },
        },
        {
          name: "--pid",
          description: "PID file location",
          args: {
            isOptional: true,
            name: "pid",
            description: "PID file location",
          },
        },
        {
          name: "--stderr",
          description: "Redirect stderr to this file",
          args: {
            name: "stderr",
            description: "Redirect stderr to this file",
          },
        },
        {
          name: "--stdout",
          description: "Redirect stdout to this file",
          args: {
            name: "stdout",
            description: "Redirect stdout to this file",
          },
        },
      ],
      args: {
        isOptional: true,
        name: "principal",
        description: "Kerberos principal",
      },
      description: "Start a kerberos ticket renewer",
    },
    {
      name: "kubernetes",
      description: "Tools to help run the KubernetesExecutor",
      subcommands: [
        {
          name: "cleanup-pods",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: "--min-pending-minutes",
              description:
                "Pending pods created before the time interval are to be cleaned up, measured in minutes. Default value is 30(m). The minimum value is 5(m)",
              args: {
                name: "min_pending_minutes",
                description:
                  "Pending pods created before the time interval are to be cleaned up, measured in minutes. Default value is 30(m). The minimum value is 5(m)",
              },
            },
            {
              name: "--namespace",
              description:
                "Kubernetes Namespace. Default value is `[kubernetes] namespace` in configuration",
              args: {
                name: "namespace",
                description:
                  "Kubernetes Namespace. Default value is `[kubernetes] namespace` in configuration",
              },
            },
          ],
          description:
            "Clean up Kubernetes pods (created by KubernetesExecutor/KubernetesPodOperator) in evicted/failed/succeeded/pending states",
        },
        {
          name: "generate-dag-yaml",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-o", "--output-path"],
              description: "The output for generated yaml files",
              args: {
                name: "output_path",
                description: "The output for generated yaml files",
              },
            },
            {
              name: ["-S", "--subdir"],
              description:
                "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              args: {
                name: "subdir",
                description:
                  "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              },
            },
          ],
          args: [
            {
              name: "dag_id",
              description: "The id of the dag",
            },
            {
              name: "execution_date",
              description: "The execution date of the DAG",
            },
          ],
          description:
            "Generate YAML files for all tasks in DAG. Useful for debugging tasks without launching into a cluster",
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Show this help message and exit",
        },
      ],
    },
    {
      name: "plugins",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show this help message and exit",
        },
        {
          name: ["-o", "--output"],
          description:
            "Output format. Allowed values: json, yaml, plain, table (default: table)",
          args: {
            name: "(table, json, yaml, plain)",
            description:
              "Output format. Allowed values: json, yaml, plain, table (default: table)",
            suggestions: ["table", "json", "yaml", "plain"],
          },
        },
        {
          name: ["-v", "--verbose"],
          description: "Make logging output more verbose",
        },
      ],
      description: "Dump information about loaded plugins",
    },
    {
      name: "pools",
      description: "Manage pools",
      subcommands: [
        {
          name: "delete",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-o", "--output"],
              description:
                "Output format. Allowed values: json, yaml, plain, table (default: table)",
              args: {
                name: "(table, json, yaml, plain)",
                description:
                  "Output format. Allowed values: json, yaml, plain, table (default: table)",
                suggestions: ["table", "json", "yaml", "plain"],
              },
            },
            {
              name: ["-v", "--verbose"],
              description: "Make logging output more verbose",
            },
          ],
          args: {
            name: "NAME",
            description: "Pool name",
          },
          description: "Delete pool",
        },
        {
          name: "export",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
          ],
          args: {
            name: "FILEPATH",
            description: "Export all pools to JSON file",
          },
          description: "Export all pools",
        },
        {
          name: "get",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-o", "--output"],
              description:
                "Output format. Allowed values: json, yaml, plain, table (default: table)",
              args: {
                name: "(table, json, yaml, plain)",
                description:
                  "Output format. Allowed values: json, yaml, plain, table (default: table)",
                suggestions: ["table", "json", "yaml", "plain"],
              },
            },
            {
              name: ["-v", "--verbose"],
              description: "Make logging output more verbose",
            },
          ],
          args: {
            name: "NAME",
            description: "Pool name",
          },
          description: "Get pool size",
        },
        {
          name: "import",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-v", "--verbose"],
              description: "Make logging output more verbose",
            },
          ],
          args: {
            name: "FILEPATH",
            description:
              'Import pools from JSON file. Example format::\n\n    {\n        "pool_1": {"slots": 5, "description": ""},\n        "pool_2": {"slots": 10, "description": "test"}\n    }',
          },
          description: "Import pools",
        },
        {
          name: "list",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-o", "--output"],
              description:
                "Output format. Allowed values: json, yaml, plain, table (default: table)",
              args: {
                name: "(table, json, yaml, plain)",
                description:
                  "Output format. Allowed values: json, yaml, plain, table (default: table)",
                suggestions: ["table", "json", "yaml", "plain"],
              },
            },
            {
              name: ["-v", "--verbose"],
              description: "Make logging output more verbose",
            },
          ],
          description: "List pools",
        },
        {
          name: "set",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-o", "--output"],
              description:
                "Output format. Allowed values: json, yaml, plain, table (default: table)",
              args: {
                name: "(table, json, yaml, plain)",
                description:
                  "Output format. Allowed values: json, yaml, plain, table (default: table)",
                suggestions: ["table", "json", "yaml", "plain"],
              },
            },
            {
              name: ["-v", "--verbose"],
              description: "Make logging output more verbose",
            },
          ],
          args: [
            {
              name: "NAME",
              description: "Pool name",
            },
            {
              name: "slots",
              description: "Pool slots",
            },
            {
              name: "description",
              description: "Pool description",
            },
          ],
          description: "Configure pool",
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Show this help message and exit",
        },
      ],
    },
    {
      name: "providers",
      description: "Display providers",
      subcommands: [
        {
          name: "auth",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-o", "--output"],
              description:
                "Output format. Allowed values: json, yaml, plain, table (default: table)",
              args: {
                name: "(table, json, yaml, plain)",
                description:
                  "Output format. Allowed values: json, yaml, plain, table (default: table)",
                suggestions: ["table", "json", "yaml", "plain"],
              },
            },
            {
              name: ["-v", "--verbose"],
              description: "Make logging output more verbose",
            },
          ],
          description: "Get information about API auth backends provided",
        },
        {
          name: "behaviours",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-o", "--output"],
              description:
                "Output format. Allowed values: json, yaml, plain, table (default: table)",
              args: {
                name: "(table, json, yaml, plain)",
                description:
                  "Output format. Allowed values: json, yaml, plain, table (default: table)",
                suggestions: ["table", "json", "yaml", "plain"],
              },
            },
            {
              name: ["-v", "--verbose"],
              description: "Make logging output more verbose",
            },
          ],
          description:
            "Get information about registered connection types with custom behaviours",
        },
        {
          name: "get",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: "--color",
              description: "Do emit colored output (default: auto)",
              args: {
                name: "color",
                description: "Do emit colored output (default: auto)",
                suggestions: ["off", "auto", "on"],
              },
            },
            {
              name: ["-f", "--full"],
              description:
                "Full information about the provider, including documentation information",
            },
            {
              name: ["-o", "--output"],
              description:
                "Output format. Allowed values: json, yaml, plain, table (default: table)",
              args: {
                name: "(table, json, yaml, plain)",
                description:
                  "Output format. Allowed values: json, yaml, plain, table (default: table)",
                suggestions: ["table", "json", "yaml", "plain"],
              },
            },
            {
              name: ["-v", "--verbose"],
              description: "Make logging output more verbose",
            },
          ],
          args: {
            name: "provider_name",
            description: "Provider name, required to get provider information",
          },
          description: "Get detailed information about a provider",
        },
        {
          name: "hooks",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-o", "--output"],
              description:
                "Output format. Allowed values: json, yaml, plain, table (default: table)",
              args: {
                name: "(table, json, yaml, plain)",
                description:
                  "Output format. Allowed values: json, yaml, plain, table (default: table)",
                suggestions: ["table", "json", "yaml", "plain"],
              },
            },
            {
              name: ["-v", "--verbose"],
              description: "Make logging output more verbose",
            },
          ],
          description: "List registered provider hooks",
        },
        {
          name: "links",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-o", "--output"],
              description:
                "Output format. Allowed values: json, yaml, plain, table (default: table)",
              args: {
                name: "(table, json, yaml, plain)",
                description:
                  "Output format. Allowed values: json, yaml, plain, table (default: table)",
                suggestions: ["table", "json", "yaml", "plain"],
              },
            },
            {
              name: ["-v", "--verbose"],
              description: "Make logging output more verbose",
            },
          ],
          description: "List extra links registered by the providers",
        },
        {
          name: "list",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-o", "--output"],
              description:
                "Output format. Allowed values: json, yaml, plain, table (default: table)",
              args: {
                name: "(table, json, yaml, plain)",
                description:
                  "Output format. Allowed values: json, yaml, plain, table (default: table)",
                suggestions: ["table", "json", "yaml", "plain"],
              },
            },
            {
              name: ["-v", "--verbose"],
              description: "Make logging output more verbose",
            },
          ],
          description: "List installed providers",
        },
        {
          name: "logging",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-o", "--output"],
              description:
                "Output format. Allowed values: json, yaml, plain, table (default: table)",
              args: {
                name: "(table, json, yaml, plain)",
                description:
                  "Output format. Allowed values: json, yaml, plain, table (default: table)",
                suggestions: ["table", "json", "yaml", "plain"],
              },
            },
            {
              name: ["-v", "--verbose"],
              description: "Make logging output more verbose",
            },
          ],
          description: "Get information about task logging handlers provided",
        },
        {
          name: "secrets",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-o", "--output"],
              description:
                "Output format. Allowed values: json, yaml, plain, table (default: table)",
              args: {
                name: "(table, json, yaml, plain)",
                description:
                  "Output format. Allowed values: json, yaml, plain, table (default: table)",
                suggestions: ["table", "json", "yaml", "plain"],
              },
            },
            {
              name: ["-v", "--verbose"],
              description: "Make logging output more verbose",
            },
          ],
          description: "Get information about secrets backends provided",
        },
        {
          name: "widgets",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-o", "--output"],
              description:
                "Output format. Allowed values: json, yaml, plain, table (default: table)",
              args: {
                name: "(table, json, yaml, plain)",
                description:
                  "Output format. Allowed values: json, yaml, plain, table (default: table)",
                suggestions: ["table", "json", "yaml", "plain"],
              },
            },
            {
              name: ["-v", "--verbose"],
              description: "Make logging output more verbose",
            },
          ],
          description:
            "Get information about registered connection form widgets",
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Show this help message and exit",
        },
      ],
    },
    {
      name: "roles",
      description: "Manage roles",
      subcommands: [
        {
          name: "create",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-v", "--verbose"],
              description: "Make logging output more verbose",
            },
          ],
          args: {
            isOptional: true,
            isVariadic: true,
            name: "role",
            optionsCanBreakVariadicArg: true,
            description: "The name of a role",
          },
          description: "Create role",
        },
        {
          name: "delete",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-v", "--verbose"],
              description: "Make logging output more verbose",
            },
          ],
          args: {
            isOptional: true,
            isVariadic: true,
            name: "role",
            optionsCanBreakVariadicArg: true,
            description: "The name of a role",
          },
          description: "Delete role",
        },
        {
          name: "export",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-p", "--pretty"],
              description:
                "Format output JSON file by sorting role names and indenting by 4 spaces",
            },
            {
              name: ["-v", "--verbose"],
              description: "Make logging output more verbose",
            },
          ],
          args: {
            name: "file",
            description: "Export all roles to JSON file",
          },
          description:
            "Export roles (without permissions) from db to JSON file",
        },
        {
          name: "import",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-v", "--verbose"],
              description: "Make logging output more verbose",
            },
          ],
          args: {
            name: "file",
            description: "Import roles from JSON file",
          },
          description:
            "Import roles (without permissions) from JSON file to db",
        },
        {
          name: "list",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-o", "--output"],
              description:
                "Output format. Allowed values: json, yaml, plain, table (default: table)",
              args: {
                name: "(table, json, yaml, plain)",
                description:
                  "Output format. Allowed values: json, yaml, plain, table (default: table)",
                suggestions: ["table", "json", "yaml", "plain"],
              },
            },
            {
              name: ["-v", "--verbose"],
              description: "Make logging output more verbose",
            },
          ],
          description: "List roles",
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Show this help message and exit",
        },
      ],
    },
    {
      name: "rotate-fernet-key",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show this help message and exit",
        },
      ],
      description: "Rotate encrypted connection credentials and variables",
    },
    {
      name: "scheduler",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show this help message and exit",
        },
        {
          name: ["-D", "--daemon"],
          description: "Daemonize instead of running in the foreground",
        },
        {
          name: ["-p", "--do-pickle"],
          description:
            "Attempt to pickle the DAG object to send over to the workers, instead of letting workers run their version of the code",
        },
        {
          name: ["-l", "--log-file"],
          description: "Location of the log file",
          args: {
            name: "log_file",
            description: "Location of the log file",
          },
        },
        {
          name: ["-n", "--num-runs"],
          description: "Set the number of runs to execute before exiting",
          args: {
            name: "num_runs",
            description: "Set the number of runs to execute before exiting",
          },
        },
        {
          name: "--pid",
          description: "PID file location",
          args: {
            isOptional: true,
            name: "pid",
            description: "PID file location",
          },
        },
        {
          name: ["-s", "--skip-serve-logs"],
          description:
            "Don't start the serve logs process along with the workers",
        },
        {
          name: "--stderr",
          description: "Redirect stderr to this file",
          args: {
            name: "stderr",
            description: "Redirect stderr to this file",
          },
        },
        {
          name: "--stdout",
          description: "Redirect stdout to this file",
          args: {
            name: "stdout",
            description: "Redirect stdout to this file",
          },
        },
        {
          name: ["-S", "--subdir"],
          description:
            "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
          args: {
            name: "subdir",
            description:
              "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
          },
        },
      ],
      description: "Start a scheduler instance",
    },
    {
      name: "standalone",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show this help message and exit",
        },
      ],
      description: "Run an all-in-one copy of Airflow",
    },
    {
      name: "sync-perm",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show this help message and exit",
        },
        {
          name: "--include-dags",
          description:
            "If passed, DAG specific permissions will also be synced",
        },
      ],
      description: "Update permissions for existing roles and optionally DAGs",
    },
    {
      name: "tasks",
      description: "Manage tasks",
      subcommands: [
        {
          name: "clear",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-R", "--dag-regex"],
              description: "Search dag_id as regex instead of exact string",
            },
            {
              name: ["-d", "--downstream"],
              description: "Include downstream tasks",
            },
            {
              name: ["-e", "--end-date"],
              description: "Override end_date YYYY-MM-DD",
              args: {
                name: "end_date",
                description: "Override end_date YYYY-MM-DD",
              },
            },
            {
              name: ["-X", "--exclude-parentdag"],
              description:
                "Exclude ParentDAGS if the task cleared is a part of a SubDAG",
            },
            {
              name: ["-x", "--exclude-subdags"],
              description: "Exclude subdags",
            },
            {
              name: ["-f", "--only-failed"],
              description: "Only failed jobs",
            },
            {
              name: ["-r", "--only-running"],
              description: "Only running jobs",
            },
            {
              name: ["-s", "--start-date"],
              description: "Override start_date YYYY-MM-DD",
              args: {
                name: "start_date",
                description: "Override start_date YYYY-MM-DD",
              },
            },
            {
              name: ["-S", "--subdir"],
              description:
                "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              args: {
                name: "subdir",
                description:
                  "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              },
            },
            {
              name: ["-t", "--task-regex"],
              description:
                "The regex to filter specific task_ids to backfill (optional)",
              args: {
                name: "task_regex",
                description:
                  "The regex to filter specific task_ids to backfill (optional)",
              },
            },
            {
              name: ["-u", "--upstream"],
              description: "Include upstream tasks",
            },
            {
              name: ["-y", "--yes"],
              description: "Do not prompt to confirm. Use with care!",
            },
          ],
          args: {
            name: "dag_id",
            description: "The id of the dag",
          },
          description: "Clear a set of task instance, as if they never ran",
        },
        {
          name: "failed-deps",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: "--map-index",
              description: "Mapped task index",
              args: {
                name: "map_index",
                description: "Mapped task index",
              },
            },
            {
              name: ["-S", "--subdir"],
              description:
                "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              args: {
                name: "subdir",
                description:
                  "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              },
            },
          ],
          args: [
            {
              name: "dag_id",
              description: "The id of the dag",
            },
            {
              name: "task_id",
              description: "The id of the task",
            },
            {
              name: "execution_date_or_run_id",
              description:
                "The execution_date of the DAG or run_id of the DAGRun",
            },
          ],
          description: "Returns the unmet dependencies for a task instance",
        },
        {
          name: "list",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-S", "--subdir"],
              description:
                "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              args: {
                name: "subdir",
                description:
                  "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              },
            },
            {
              name: ["-t", "--tree"],
              description: "Tree view",
            },
            {
              name: ["-v", "--verbose"],
              description: "Make logging output more verbose",
            },
          ],
          args: {
            name: "dag_id",
            description: "The id of the dag",
          },
          description: "List the tasks within a DAG",
        },
        {
          name: "render",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: "--map-index",
              description: "Mapped task index",
              args: {
                name: "map_index",
                description: "Mapped task index",
              },
            },
            {
              name: ["-S", "--subdir"],
              description:
                "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              args: {
                name: "subdir",
                description:
                  "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              },
            },
            {
              name: ["-v", "--verbose"],
              description: "Make logging output more verbose",
            },
          ],
          args: [
            {
              name: "dag_id",
              description: "The id of the dag",
            },
            {
              name: "task_id",
              description: "The id of the task",
            },
            {
              name: "execution_date_or_run_id",
              description:
                "The execution_date of the DAG or run_id of the DAGRun",
            },
          ],
          description: "Render a task instance's template(s)",
        },
        {
          name: "run",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: "--cfg-path",
              description: "Path to config file to use instead of airflow.cfg",
              args: {
                name: "cfg_path",
                description:
                  "Path to config file to use instead of airflow.cfg",
              },
            },
            {
              name: ["-f", "--force"],
              description:
                "Ignore previous task instance state, rerun regardless if task already succeeded/failed",
            },
            {
              name: ["-A", "--ignore-all-dependencies"],
              description:
                "Ignores all non-critical dependencies, including ignore_ti_state and ignore_task_deps",
            },
            {
              name: ["-i", "--ignore-dependencies"],
              description:
                "Ignore task-specific dependencies, e.g. upstream, depends_on_past, and retry delay dependencies",
            },
            {
              name: ["-I", "--ignore-depends-on-past"],
              description:
                "Ignore depends_on_past dependencies (but respect upstream dependencies)",
            },
            {
              name: ["-N", "--interactive"],
              description:
                "Do not capture standard output and error streams (useful for interactive debugging)",
            },
            {
              name: ["-j", "--job-id"],
              hidden: true,
              args: {
                name: "job_id",
              },
            },
            {
              name: ["-l", "--local"],
              description: "Run the task using the LocalExecutor",
            },
            {
              name: "--map-index",
              description: "Mapped task index",
              args: {
                name: "map_index",
                description: "Mapped task index",
              },
            },
            {
              name: ["-m", "--mark-success"],
              description: "Mark jobs as succeeded without running them",
            },
            {
              name: "--no-shut-down-logging",
              hidden: true,
            },
            {
              name: ["-p", "--pickle"],
              description:
                "Serialized pickle object of the entire dag (used internally)",
              args: {
                name: "pickle",
                description:
                  "Serialized pickle object of the entire dag (used internally)",
              },
            },
            {
              name: "--pool",
              description: "Resource pool to use",
              args: {
                name: "pool",
                description: "Resource pool to use",
              },
            },
            {
              name: ["-r", "--raw"],
              hidden: true,
            },
            {
              name: "--ship-dag",
              description:
                "Pickles (serializes) the DAG and ships it to the worker",
            },
            {
              name: ["-S", "--subdir"],
              description:
                "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              args: {
                name: "subdir",
                description:
                  "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              },
            },
          ],
          args: [
            {
              name: "dag_id",
              description: "The id of the dag",
            },
            {
              name: "task_id",
              description: "The id of the task",
            },
            {
              name: "execution_date_or_run_id",
              description:
                "The execution_date of the DAG or run_id of the DAGRun",
            },
          ],
          description: "Run a single task instance",
        },
        {
          name: "state",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: "--map-index",
              description: "Mapped task index",
              args: {
                name: "map_index",
                description: "Mapped task index",
              },
            },
            {
              name: ["-S", "--subdir"],
              description:
                "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              args: {
                name: "subdir",
                description:
                  "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              },
            },
            {
              name: ["-v", "--verbose"],
              description: "Make logging output more verbose",
            },
          ],
          args: [
            {
              name: "dag_id",
              description: "The id of the dag",
            },
            {
              name: "task_id",
              description: "The id of the task",
            },
            {
              name: "execution_date_or_run_id",
              description:
                "The execution_date of the DAG or run_id of the DAGRun",
            },
          ],
          description: "Get the status of a task instance",
        },
        {
          name: "states-for-dag-run",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-o", "--output"],
              description:
                "Output format. Allowed values: json, yaml, plain, table (default: table)",
              args: {
                name: "(table, json, yaml, plain)",
                description:
                  "Output format. Allowed values: json, yaml, plain, table (default: table)",
                suggestions: ["table", "json", "yaml", "plain"],
              },
            },
            {
              name: ["-v", "--verbose"],
              description: "Make logging output more verbose",
            },
          ],
          args: [
            {
              name: "dag_id",
              description: "The id of the dag",
            },
            {
              name: "execution_date_or_run_id",
              description:
                "The execution_date of the DAG or run_id of the DAGRun",
            },
          ],
          description: "Get the status of all task instances in a dag run",
        },
        {
          name: "test",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-n", "--dry-run"],
              description:
                "Perform a dry run for each task. Only renders Template Fields for each task, nothing else",
            },
            {
              name: "--env-vars",
              description:
                "Set env var in both parsing time and runtime for each of entry supplied in a JSON dict",
              args: {
                name: "env_vars",
                description:
                  "Set env var in both parsing time and runtime for each of entry supplied in a JSON dict",
              },
            },
            {
              name: "--map-index",
              description: "Mapped task index",
              args: {
                name: "map_index",
                description: "Mapped task index",
              },
            },
            {
              name: ["-m", "--post-mortem"],
              description: "Open debugger on uncaught exception",
            },
            {
              name: ["-S", "--subdir"],
              description:
                "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              args: {
                name: "subdir",
                description:
                  "File location or directory from which to look for the dag. Defaults to '[AIRFLOW_HOME]/dags' where [AIRFLOW_HOME] is the value you set for 'AIRFLOW_HOME' config you set in 'airflow.cfg'",
              },
            },
            {
              name: ["-t", "--task-params"],
              description: "Sends a JSON params dict to the task",
              args: {
                name: "task_params",
                description: "Sends a JSON params dict to the task",
              },
            },
          ],
          args: [
            {
              name: "dag_id",
              description: "The id of the dag",
            },
            {
              name: "task_id",
              description: "The id of the task",
            },
            {
              isOptional: true,
              name: "execution_date_or_run_id",
              description:
                "The execution_date of the DAG or run_id of the DAGRun (optional)",
            },
          ],
          description: "Test a task instance",
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Show this help message and exit",
        },
      ],
    },
    {
      name: "triggerer",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show this help message and exit",
        },
        {
          name: "--capacity",
          description:
            "The maximum number of triggers that a Triggerer will run at one time",
          args: {
            name: "capacity",
            description:
              "The maximum number of triggers that a Triggerer will run at one time",
          },
        },
        {
          name: ["-D", "--daemon"],
          description: "Daemonize instead of running in the foreground",
        },
        {
          name: ["-l", "--log-file"],
          description: "Location of the log file",
          args: {
            name: "log_file",
            description: "Location of the log file",
          },
        },
        {
          name: "--pid",
          description: "PID file location",
          args: {
            isOptional: true,
            name: "pid",
            description: "PID file location",
          },
        },
        {
          name: "--stderr",
          description: "Redirect stderr to this file",
          args: {
            name: "stderr",
            description: "Redirect stderr to this file",
          },
        },
        {
          name: "--stdout",
          description: "Redirect stdout to this file",
          args: {
            name: "stdout",
            description: "Redirect stdout to this file",
          },
        },
      ],
      description: "Start a triggerer instance",
    },
    {
      name: "users",
      description: "Manage users",
      subcommands: [
        {
          name: "add-role",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-e", "--email"],
              description: "Email of the user",
              args: {
                name: "email",
                description: "Email of the user",
              },
            },
            {
              name: ["-r", "--role"],
              description:
                "Role of the user. Existing roles include Admin, User, Op, Viewer, and Public",
              args: {
                name: "role",
                description:
                  "Role of the user. Existing roles include Admin, User, Op, Viewer, and Public",
              },
              isRequired: true,
            },
            {
              name: ["-u", "--username"],
              description: "Username of the user",
              args: {
                name: "username",
                description: "Username of the user",
              },
            },
          ],
          description: "Add role to a user",
        },
        {
          name: "create",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-e", "--email"],
              description: "Email of the user",
              args: {
                name: "email",
                description: "Email of the user",
              },
              isRequired: true,
            },
            {
              name: ["-f", "--firstname"],
              description: "First name of the user",
              args: {
                name: "firstname",
                description: "First name of the user",
              },
              isRequired: true,
            },
            {
              name: ["-l", "--lastname"],
              description: "Last name of the user",
              args: {
                name: "lastname",
                description: "Last name of the user",
              },
              isRequired: true,
            },
            {
              name: ["-p", "--password"],
              description:
                "Password of the user, required to create a user without --use-random-password",
              args: {
                name: "password",
                description:
                  "Password of the user, required to create a user without --use-random-password",
              },
            },
            {
              name: ["-r", "--role"],
              description:
                "Role of the user. Existing roles include Admin, User, Op, Viewer, and Public",
              args: {
                name: "role",
                description:
                  "Role of the user. Existing roles include Admin, User, Op, Viewer, and Public",
              },
              isRequired: true,
            },
            {
              name: "--use-random-password",
              description:
                "Do not prompt for password. Use random string instead. Required to create a user without --password",
            },
            {
              name: ["-u", "--username"],
              description: "Username of the user",
              args: {
                name: "username",
                description: "Username of the user",
              },
              isRequired: true,
            },
          ],
          description: "Create a user",
        },
        {
          name: "delete",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-e", "--email"],
              description: "Email of the user",
              args: {
                name: "email",
                description: "Email of the user",
              },
            },
            {
              name: ["-u", "--username"],
              description: "Username of the user",
              args: {
                name: "username",
                description: "Username of the user",
              },
            },
          ],
          description: "Delete a user",
        },
        {
          name: "export",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
          ],
          args: {
            name: "FILEPATH",
            description: "Export all users to JSON file",
          },
          description: "Export all users",
        },
        {
          name: "import",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
          ],
          args: {
            name: "FILEPATH",
            description:
              'Import users from JSON file. Example format::\n\n    [\n        {\n            "email": "foo@bar.org",\n            "firstname": "Jon",\n            "lastname": "Doe",\n            "roles": ["Public"],\n            "username": "jondoe"\n        }\n    ]',
          },
          description: "Import users",
        },
        {
          name: "list",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-o", "--output"],
              description:
                "Output format. Allowed values: json, yaml, plain, table (default: table)",
              args: {
                name: "(table, json, yaml, plain)",
                description:
                  "Output format. Allowed values: json, yaml, plain, table (default: table)",
                suggestions: ["table", "json", "yaml", "plain"],
              },
            },
            {
              name: ["-v", "--verbose"],
              description: "Make logging output more verbose",
            },
          ],
          description: "List users",
        },
        {
          name: "remove-role",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-e", "--email"],
              description: "Email of the user",
              args: {
                name: "email",
                description: "Email of the user",
              },
            },
            {
              name: ["-r", "--role"],
              description:
                "Role of the user. Existing roles include Admin, User, Op, Viewer, and Public",
              args: {
                name: "role",
                description:
                  "Role of the user. Existing roles include Admin, User, Op, Viewer, and Public",
              },
              isRequired: true,
            },
            {
              name: ["-u", "--username"],
              description: "Username of the user",
              args: {
                name: "username",
                description: "Username of the user",
              },
            },
          ],
          description: "Remove role from a user",
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Show this help message and exit",
        },
      ],
    },
    {
      name: "variables",
      description: "Manage variables",
      subcommands: [
        {
          name: "delete",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
          ],
          args: {
            name: "key",
            description: "Variable key",
          },
          description: "Delete variable",
        },
        {
          name: "export",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
          ],
          args: {
            name: "file",
            description: "Export all variables to JSON file",
          },
          description: "Export all variables",
        },
        {
          name: "get",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-d", "--default"],
              description: "Default value returned if variable does not exist",
              args: {
                name: "VAL",
                description:
                  "Default value returned if variable does not exist",
              },
            },
            {
              name: ["-j", "--json"],
              description: "Deserialize JSON variable",
            },
            {
              name: ["-v", "--verbose"],
              description: "Make logging output more verbose",
            },
          ],
          args: {
            name: "key",
            description: "Variable key",
          },
          description: "Get variable",
        },
        {
          name: "import",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
          ],
          args: {
            name: "file",
            description: "Import variables from JSON file",
          },
          description: "Import variables",
        },
        {
          name: "list",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-o", "--output"],
              description:
                "Output format. Allowed values: json, yaml, plain, table (default: table)",
              args: {
                name: "(table, json, yaml, plain)",
                description:
                  "Output format. Allowed values: json, yaml, plain, table (default: table)",
                suggestions: ["table", "json", "yaml", "plain"],
              },
            },
            {
              name: ["-v", "--verbose"],
              description: "Make logging output more verbose",
            },
          ],
          description: "List variables",
        },
        {
          name: "set",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show this help message and exit",
            },
            {
              name: ["-j", "--json"],
              description: "Serialize JSON variable",
            },
          ],
          args: [
            {
              name: "key",
              description: "Variable key",
            },
            {
              name: "VALUE",
              description: "Variable value",
            },
          ],
          description: "Set variable",
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Show this help message and exit",
        },
      ],
    },
    {
      name: "version",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show this help message and exit",
        },
      ],
      description: "Show the version",
    },
    {
      name: "webserver",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show this help message and exit",
        },
        {
          name: ["-A", "--access-logfile"],
          description:
            "The logfile to store the webserver access log. Use '-' to print to stderr",
          args: {
            name: "access_logfile",
            description:
              "The logfile to store the webserver access log. Use '-' to print to stderr",
          },
        },
        {
          name: ["-L", "--access-logformat"],
          description: "The access log format for gunicorn logs",
          args: {
            name: "access_logformat",
            description: "The access log format for gunicorn logs",
          },
        },
        {
          name: ["-D", "--daemon"],
          description: "Daemonize instead of running in the foreground",
        },
        {
          name: ["-d", "--debug"],
          description: "Use the server that ships with Flask in debug mode",
        },
        {
          name: ["-E", "--error-logfile"],
          description:
            "The logfile to store the webserver error log. Use '-' to print to stderr",
          args: {
            name: "error_logfile",
            description:
              "The logfile to store the webserver error log. Use '-' to print to stderr",
          },
        },
        {
          name: ["-H", "--hostname"],
          description: "Set the hostname on which to run the web server",
          args: {
            name: "hostname",
            description: "Set the hostname on which to run the web server",
          },
        },
        {
          name: ["-l", "--log-file"],
          description: "Location of the log file",
          args: {
            name: "log_file",
            description: "Location of the log file",
          },
        },
        {
          name: "--pid",
          description: "PID file location",
          args: {
            isOptional: true,
            name: "pid",
            description: "PID file location",
          },
        },
        {
          name: ["-p", "--port"],
          description: "The port on which to run the server",
          args: {
            name: "port",
            description: "The port on which to run the server",
          },
        },
        {
          name: "--ssl-cert",
          description: "Path to the SSL certificate for the webserver",
          args: {
            name: "ssl_cert",
            description: "Path to the SSL certificate for the webserver",
          },
        },
        {
          name: "--ssl-key",
          description: "Path to the key to use with the SSL certificate",
          args: {
            name: "ssl_key",
            description: "Path to the key to use with the SSL certificate",
          },
        },
        {
          name: "--stderr",
          description: "Redirect stderr to this file",
          args: {
            name: "stderr",
            description: "Redirect stderr to this file",
          },
        },
        {
          name: "--stdout",
          description: "Redirect stdout to this file",
          args: {
            name: "stdout",
            description: "Redirect stdout to this file",
          },
        },
        {
          name: ["-t", "--worker-timeout"],
          description: "The timeout for waiting on webserver workers",
          args: {
            name: "worker_timeout",
            description: "The timeout for waiting on webserver workers",
          },
        },
        {
          name: ["-k", "--workerclass"],
          description: "The worker class to use for Gunicorn",
          args: {
            name: "workerclass",
            description: "The worker class to use for Gunicorn",
            suggestions: ["sync", "eventlet", "gevent", "tornado"],
          },
        },
        {
          name: ["-w", "--workers"],
          description: "Number of workers to run the webserver on",
          args: {
            name: "workers",
            description: "Number of workers to run the webserver on",
          },
        },
      ],
      description: "Start a Airflow webserver instance",
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Show this help message and exit",
    },
  ],
};
export default completionSpec;
