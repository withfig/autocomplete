const globalFlags: Fig.Option[] = [
  {
    name: "--scopes",
    description: "Additional scopes for runn",
    args: {
      suggestions: [
        {
          name: "read:parent",
          description: "Required for reading files above the working directory",
        },
        {
          name: "read:remote",
          description: "Required for reading remote files",
        },
        {
          name: "run:exec",
          description: "Required for running Exec runner",
        },
      ],
    },
  },
];
const completionSpec: Fig.Spec = {
  name: "runn",
  description: "A tool for running operations following a scenario",
  subcommands: [
    {
      name: "help",
      description: "Help for runn",
      options: [...globalFlags],
    },
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      subcommands: [
        {
          name: "bash",
          description: "Generate the autocompletion script for bash",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "fish",
          description: "Generate the autocompletion script for fish",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "powershell",
          description: "Generate the autocompletion script for powershell",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "zsh",
          description: "Generate the autocompletion script for zsh",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
      ],
      options: [...globalFlags],
    },
    {
      name: "coverage",
      description:
        "Show coverage for paths/operations of OpenAPI spec and methods of protocol buffers",
      options: [
        ...globalFlags,
        {
          name: "--cache-dir",
          description: "Specify cache directory for remote runbooks",
          args: {
            template: "folders",
          },
        },
        {
          name: "--debug",
          description: "Debug",
        },
        {
          name: "--env-file",
          description: "Load environment variables from a file",
          args: {
            template: "filepaths",
          },
        },
        {
          name: "--format",
          description: "Format of result output",
          args: {
            suggestions: ["json", "none"],
          },
        },
        {
          name: "--grpc-buf-config",
          description: "Set the path to buf.yaml for gRPC runners",
          args: {
            template: "filepaths",
          },
        },
        {
          name: "--grpc-buf-dir",
          description: "Set the path to the buf directory for gRPC runners",
          args: {
            template: "folders",
          },
        },
        {
          name: "--grpc-buf-lock",
          description: "Set the path to buf.lock for gRPC runners",
          args: {
            template: "filepaths",
          },
        },
        {
          name: "--grpc-buf-module",
          description:
            'Set the buf modules for gRPC runners ("buf.build/owner/repository" or "buf.build/owner/repository/tree/branch-or-commit")',
          args: {
            name: "buf modules",
          },
        },
        {
          name: "--grpc-import-path",
          description:
            "Set the path to the directory where proto sources can be imported for gRPC runners",
          args: {
            template: "filepaths",
          },
        },
        {
          name: "--grpc-no-tls",
          description: "Disable TLS use in all gRPC runners",
        },
        {
          name: "--grpc-proto",
          description: "Set the name of proto source for gRPC runners",
          args: {
            name: "proto source",
          },
        },
        {
          name: ["-h", "--help"],
          description: "Help for coverage",
        },
        {
          name: "--http-openapi3",
          description:
            'Set the path to the OpenAPI v3 document for HTTP runners ("path/to/spec.yml" or "key:path/to/spec.yml")',
          args: {
            name: "filepaths",
          },
        },
        {
          name: "--id",
          description:
            "Run the matching runbooks in order if there is only one runbook with a forward matching ID",
          args: {
            name: "id",
          },
        },
        {
          name: "--label",
          description: "Run all runbooks matching the label specification",
          args: {
            name: "label",
          },
        },
        {
          name: ["-l", "-long"],
          description: "Long format",
        },
        {
          name: "--overlay",
          description: "Overlay values on the runbook",
          args: {
            name: "values",
          },
        },
        {
          name: "--retain-cache-dir",
          description: "Retain cache directory for remote runbooks",
        },
        {
          name: "--run",
          description:
            "Run all runbooks with a matching file path, treating the value passed to the option as an unanchored regular expression",
          args: {
            name: "path regex",
          },
        },
        {
          name: "--runner",
          description: 'Set runner to runbook("key:dsn")',
          args: {
            name: "runner",
          },
        },
        {
          name: "--skip-included",
          description: "Skip running the included runbook by itself",
        },
        {
          name: "--underlay",
          description: "Lay values under the runbook",
          args: {
            name: "values",
          },
        },
        {
          name: "--var",
          description: 'Set var to runbook("key:value")',
          args: {
            name: "value",
          },
        },
      ],
    },
    {
      name: ["list", "ls"],
      description: "List runbooks",
      args: {
        template: "filepaths",
      },
      options: [
        ...globalFlags,
        {
          name: "--cache-dir",
          description: "Specify cache directory for remote runbooks",
          args: {
            template: "folders",
          },
        },
        {
          name: "--env-file",
          description: "Load environment variables from a file",
          args: {
            template: "filepaths",
          },
        },
        {
          name: ["-h", "--help"],
          description: "Help for list",
        },
        {
          name: "--id",
          description:
            "Run the matching runbooks in order if there is only one runbook with a forward matching ID",
          args: {
            name: "id",
          },
        },
        {
          name: "--label",
          description: "Run all runbooks matching the label specification",
          args: {
            name: "label",
          },
        },
        {
          name: ["-l", "-long"],
          description: "Long format",
        },
        {
          name: "--overlay",
          description: "Overlay values on the runbook",
          args: {
            name: "values",
          },
        },
        {
          name: "--random",
          description: "Run the specified number of runbooks at random",
          args: {
            name: "specified number",
          },
        },
        {
          name: "--retain-cache-dir",
          description: "Retain cache directory for remote runbooks",
        },
        {
          name: "--run",
          description:
            "Run all runbooks with a matching file path, treating the value passed to the option as an unanchored regular expression",
          args: {
            name: "path regex",
          },
        },
        {
          name: "--runner",
          description: 'Set runner to runbook("key:dsn")',
          args: {
            name: "runner",
          },
        },
        {
          name: "--sample",
          description: "Sample the specified number of runbooks",
          args: {
            name: "specified number",
          },
        },
        {
          name: "--shard-index",
          description: "Index of distributed runbooks",
          args: {
            name: "index",
          },
        },
        {
          name: "--shard-n",
          description: "Number of shards for distributing runbooks",
          args: {
            name: "number",
          },
        },
        {
          name: "--shuffle",
          description: "Randomize the order of running runbooks",
          args: {
            isOptional: true,
            suggestions: [
              {
                name: '"off"',
                description: "(Default)",
              },
              {
                name: '"on"',
              },
              {
                name: "N",
              },
            ],
          },
        },
        {
          name: "--skip-included",
          description: "Skip running the included runbook by itself",
        },
        {
          name: "--underlay",
          description: "Lay values under the runbook",
          args: {
            name: "values",
          },
        },
        {
          name: "--var",
          description: 'Set var to runbook("key:value")',
          args: {
            name: "value",
          },
        },
      ],
    },
    {
      name: ["loadt", "loadtest"],
      description: "Run load test using runbooks",
      args: {
        template: "filepaths",
      },
      options: [
        ...globalFlags,
        {
          name: "--cache-dir",
          description: "Specify cache directory for remote runbooks",
          args: {
            template: "folders",
          },
        },
        {
          name: "--capture",
          description: "Destination of runbook run capture results",
          args: {
            template: "folders",
          },
        },
        {
          name: "--concurrent",
          description: "Run runbooks concurrently",
          args: {
            isOptional: true,
            suggestions: [
              {
                name: '"off"',
                description: "(Default)",
              },
              {
                name: '"on"',
              },
              {
                name: "N",
              },
            ],
          },
        },
        {
          name: "--debug",
          description: "Debug",
        },
        {
          name: "--duration",
          description: 'Load test running duration (default "10sec")',
          args: {
            name: "duration",
          },
        },
        {
          name: "--env-file",
          description: "Load environment variables from a file",
          args: {
            template: "filepaths",
          },
        },
        {
          name: "fail-fast",
          description: "Fail fast",
        },
        {
          name: "--grpc-buf-config",
          description: "Set the path to buf.yaml for gRPC runners",
          args: {
            template: "filepaths",
          },
        },
        {
          name: "--grpc-buf-dir",
          description: "Set the path to the buf directory for gRPC runners",
          args: {
            template: "folders",
          },
        },
        {
          name: "--grpc-buf-lock",
          description: "Set the path to buf.lock for gRPC runners",
          args: {
            template: "filepaths",
          },
        },
        {
          name: "--grpc-buf-module",
          description:
            'Set the buf modules for gRPC runners ("buf.build/owner/repository" or "buf.build/owner/repository/tree/branch-or-commit")',
          args: {
            name: "buf modules",
          },
        },
        {
          name: "--grpc-import-path",
          description:
            "Set the path to the directory where proto sources can be imported for gRPC runners",
          args: {
            template: "filepaths",
          },
        },
        {
          name: "--grpc-no-tls",
          description: "Disable TLS use in all gRPC runners",
        },
        {
          name: "--grpc-proto",
          description: "Set the name of proto source for gRPC runners",
          args: {
            name: "proto source",
          },
        },
        {
          name: ["-h", "--help"],
          description: "Help for coverage",
        },
        {
          name: "--host-rules",
          description: 'Host rules for runn. ("host rule,host rule,...")',
          args: {
            name: "host rules",
          },
        },
        {
          name: "--http-openapi3",
          description:
            'Set the path to the OpenAPI v3 document for HTTP runners ("path/to/spec.yml" or "key:path/to/spec.yml")',
          args: {
            name: "filepaths",
          },
        },
        {
          name: "--id",
          description:
            "Run the matching runbooks in order if there is only one runbook with a forward matching ID",
          args: {
            name: "id",
          },
        },
        {
          name: "--label",
          description: "Run all runbooks matching the label specification",
          args: {
            name: "label",
          },
        },
        {
          name: "--load-concurrent",
          description:
            "Number of concurrent load test runs. 0 means unlimited (default 1)",
          args: {
            name: "number",
          },
        },
        {
          name: "--max-rps",
          description:
            "Max RunN per second for load test. 0 means unlimited (default 1)",
          args: {
            name: "number",
          },
        },
        {
          name: "--overlay",
          description: "Overlay values on the runbook",
          args: {
            name: "values",
          },
        },
        {
          name: "--random",
          description: "Run the specified number of runbooks at random",
          args: {
            name: "specified number",
          },
        },
        {
          name: "--retain-cache-dir",
          description: "Retain cache directory for remote runbooks",
        },
        {
          name: "--run",
          description:
            "Run all runbooks with a matching file path, treating the value passed to the option as an unanchored regular expression",
          args: {
            name: "path regex",
          },
        },
        {
          name: "--runner",
          description: 'Set runner to runbook("key:dsn")',
          args: {
            name: "runner",
          },
        },
        {
          name: "--sample",
          description: "Sample the specified number of runbooks",
          args: {
            name: "specified number",
          },
        },
        {
          name: "--shard-index",
          description: "Index of distributed runbooks",
          args: {
            name: "index",
          },
        },
        {
          name: "--shard-n",
          description: "Number of shards for distributing runbooks",
          args: {
            name: "number",
          },
        },
        {
          name: "--shuffle",
          description: "Randomize the order of running runbooks",
          args: {
            isOptional: true,
            suggestions: [
              {
                name: '"off"',
                description: "(Default)",
              },
              {
                name: '"on"',
              },
              {
                name: "N",
              },
            ],
          },
        },
        {
          name: "--skip-included",
          description: "Skip running the included runbook by itself",
        },
        {
          name: "--skip-test",
          description: 'Skip "test:" section',
        },
        {
          name: "--threshold",
          description:
            "If this threshold condition is not met, loadt command returns exit status 1 (EXIT_FAILURE)",
          args: {
            name: "threshold",
          },
        },
        {
          name: "--underlay",
          description: "Lay values under the runbook",
          args: {
            name: "values",
          },
        },
        {
          name: "--var",
          description: 'Set var to runbook("key:value")',
          args: {
            name: "value",
          },
        },
        {
          name: "--wait-timeout",
          description:
            'Timeout for waiting for cleanup process after running runbooks (default "10sec")',
          args: {
            name: "timeout",
          },
        },
        {
          name: "--warm-up",
          description: 'Warn-up time for load test (default "5sec")',
          args: {
            name: "time",
          },
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Help for runn",
    },
    {
      name: ["--version", "-v"],
      description: "Version for runn",
    },
  ],
};
export default completionSpec;

// debug, env-file, --cache-dir
