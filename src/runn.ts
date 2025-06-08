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

const helpOption = (target: string): Fig.Option => ({
  name: ["-h", "--help"],
  description: `Help for ${target}`,
});

const options: { [key: string]: Fig.Option } = {
  andRun: {
    name: "--and-run",
    description: "Run created runbook and capture the response for test",
  },
  attach: {
    name: "--attach",
    description: "Attach to runn process",
  },
  cacheDir: {
    name: "--cache-dir",
    description: "Specify cache directory for remote runbooks",
    args: {
      template: "folders",
    },
  },
  capture: {
    name: "--capture",
    description: "Destination of runbook run capture results",
    args: {
      template: "folders",
    },
  },
  concurrent: {
    name: "--concurrent",
    description: 'Run runbooks concurrently (default "off")',
    args: {
      suggestions: ["off", "on", "N"],
    },
  },
  debug: {
    name: "--debug",
    description: "Debug",
  },
  depth: {
    name: "--depth",
    description: "Depth of profile (default 4)",
    args: {
      name: "depth",
    },
  },
  desc: {
    name: "--desc",
    description: "Description of runbook",
    args: {
      name: "description",
    },
  },
  duration: {
    name: "--duration",
    description: 'Load test running duration (default "10sec")',
    args: {
      name: "duration",
    },
  },
  envFile: {
    name: "--env-file",
    description: "Load environment variables from a file",
    args: {
      template: "filepaths",
    },
  },
  failFast: {
    name: "--fail-fast",
    description: "Fail fast",
  },
  forceColor: {
    name: "--force--color",
    description: "Force colorized output even in non-tty output streams",
  },
  format: {
    name: "--format",
    description: "Format of result output",
    args: {
      suggestions: ["json", "none"],
    },
  },
  grpcBugConfig: {
    name: "--grpc-buf-config",
    description: "Set the path to buf.yaml for gRPC runners",
    args: {
      template: "filepaths",
    },
  },
  grpcBufDir: {
    name: "--grpc-buf-dir",
    description: "Set the path to the buf directory for gRPC runners",
    args: {
      template: "folders",
    },
  },
  grpcBufLock: {
    name: "--grpc-buf-lock",
    description: "Set the path to buf.lock for gRPC runners",
    args: {
      template: "filepaths",
    },
  },
  grpcBufModule: {
    name: "--grpc-buf-module",
    description:
      'Set the buf modules for gRPC runners ("buf.build/owner/repository" or "buf.build/owner/repository/tree/branch-or-commit")',
    args: {
      name: "buf modules",
    },
  },
  grpcImportPath: {
    name: "--grpc-import-path",
    description:
      "Set the path to the directory where proto sources can be imported for gRPC runners",
    args: {
      template: "filepaths",
    },
  },
  grpcNoTls: {
    name: "--grpc-no-tls",
    description: "Disable TLS use in all gRPC runners",
  },
  grpcProto: {
    name: "--grpc-proto",
    description: "Set the name of proto source for gRPC runners",
    args: {
      name: "proto source",
    },
  },
  hostRules: {
    name: "--host-rules",
    description: 'Host rules for runn. ("host rule,host rule,...")',
    args: {
      name: "host rules",
    },
  },
  httpOpenapi3: {
    name: "--http-openapi3",
    description:
      'Set the path to the OpenAPI v3 document for HTTP runners ("path/to/spec.yml" or "key:path/to/spec.yml")',
    args: {
      name: "filepaths",
    },
  },
  id: {
    name: "--id",
    description:
      "Run the matching runbooks in order if there is only one runbook with a forward matching ID",
    args: {
      name: "id",
    },
  },
  label: {
    name: "--label",
    description: "Run all runbooks matching the label specification",
    args: {
      name: "label",
    },
  },
  loadConcurrent: {
    name: "--load-concurrent",
    description:
      "Number of concurrent load test runs. 0 means unlimited (default 1)",
    args: {
      name: "number",
    },
  },
  long: {
    name: ["-l", "--long"],
    description: "Long format",
  },
  maxRps: {
    name: "--max-rps",
    description:
      "Max RunN per second for load test. 0 means unlimited (default 1)",
    args: {
      name: "number",
    },
  },
  out: {
    name: "--out",
    description: "Target path of runbook",
    args: {
      template: "folders",
    },
  },
  overlay: {
    name: "--overlay",
    description: "Overlay values on the runbook",
    args: {
      name: "values",
    },
  },
  profile: {
    name: "--profile",
    description: "Profile runs of runbooks",
  },
  profileOut: {
    name: "--profile--out",
    description: 'Profile output path (default "runn.prof")',
    args: {
      template: "filepaths",
    },
  },
  random: {
    name: "--random",
    description: "Run the specified number of runbooks at random",
    args: {
      name: "specified number",
    },
  },
  retainCacheDir: {
    name: "--retain-cache-dir",
    description: "Retain cache directory for remote runbooks",
  },
  run: {
    name: "--run",
    description:
      "Run all runbooks with a matching file path, treating the value passed to the option as an unanchored regular expression",
    args: {
      name: "path regex",
    },
  },
  runner: {
    name: "--runner",
    description: 'Set runner to runbook("key:dsn")',
    args: {
      name: "runner",
    },
  },
  sample: {
    name: "--sample",
    description: "Sample the specified number of runbooks",
    args: {
      name: "specified number",
    },
  },
  shardIndex: {
    name: "--shard-index",
    description: "Index of distributed runbooks",
    args: {
      name: "index",
    },
  },
  shardN: {
    name: "--shard-n",
    description: "Number of shards for distributing runbooks",
    args: {
      name: "number",
    },
  },
  shuffle: {
    name: "--shuffle",
    description: 'Randomize the order of running runbooks (default "off")',
    args: {
      suggestions: ["off", "on", "N"],
    },
  },
  skipIncluded: {
    name: "--skip-included",
    description: "Skip running the included runbook by itself",
  },
  skipTest: {
    name: "--skip-test",
    description: 'Skip "test:" section',
  },
  sort: {
    name: "--sort",
    description: "Sort order",
    args: {
      suggestions: ["elapsed", "started-at", "stopped-at"],
    },
  },
  threshold: {
    name: "--threshold",
    description:
      "If this threshold condition is not met, loadt command returns exit status 1 (EXIT_FAILURE)",
    args: {
      name: "threshold",
    },
  },
  underlay: {
    name: "--underlay",
    description: "Lay values under the runbook",
    args: {
      name: "values",
    },
  },
  unit: {
    name: "--unit",
    description: 'Time unit(default "ms")',
    args: {
      suggestions: ["ns", "us", "ms", "s", "m"],
    },
  },
  var: {
    name: "--var",
    description: 'Set var to runbook("key:value")',
    args: {
      name: "value",
    },
  },
  verbose: {
    name: "--verbose",
    description: "Verbose",
  },
  waitTimeout: {
    name: "--wait-timeout",
    description:
      'Timeout for waiting for cleanup process after running runbooks (default "10sec")',
    args: {
      name: "timeout",
    },
  },
  warmUp: {
    name: "--warm-up",
    description: 'Warn-up time for load test (default "5sec")',
    args: {
      name: "time",
    },
  },
};

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
        options.cacheDir,
        options.debug,
        options.envFile,
        options.format,
        options.grpcBugConfig,
        options.grpcBufDir,
        options.grpcBufLock,
        options.grpcBufModule,
        options.grpcImportPath,
        options.grpcNoTls,
        options.grpcProto,
        helpOption("coverage"),
        options.httpOpenapi3,
        options.id,
        options.label,
        options.long,
        options.overlay,
        options.retainCacheDir,
        options.run,
        options.runner,
        options.skipIncluded,
        options.underlay,
        options.var,
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
        options.cacheDir,
        options.envFile,
        helpOption("list"),
        options.id,
        options.label,
        options.long,
        options.overlay,
        options.random,
        options.retainCacheDir,
        options.run,
        options.runner,
        options.sample,
        options.shardIndex,
        options.shardN,
        options.shuffle,
        options.skipIncluded,
        options.underlay,
        options.var,
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
        options.cacheDir,
        options.capture,
        options.concurrent,
        options.debug,
        options.duration,
        options.envFile,
        options.failFast,
        options.grpcBugConfig,
        options.grpcBufDir,
        options.grpcBufLock,
        options.grpcBufModule,
        options.grpcImportPath,
        options.grpcNoTls,
        options.grpcProto,
        helpOption("loadt"),
        options.hostRules,
        options.httpOpenapi3,
        options.id,
        options.label,
        options.loadConcurrent,
        options.maxRps,
        options.overlay,
        options.random,
        options.retainCacheDir,
        options.run,
        options.runner,
        options.sample,
        options.shardIndex,
        options.shardN,
        options.shuffle,
        options.skipIncluded,
        options.skipTest,
        options.threshold,
        options.underlay,
        options.var,
        options.waitTimeout,
        options.warmUp,
      ],
    },
    {
      name: ["new", "append"],
      description: "Create new runbook or append step to runbook",
      options: [
        ...globalFlags,
        options.andRun,
        options.desc,
        options.grpcImportPath,
        options.grpcNoTls,
        options.grpcProto,
        helpOption("new"),
        options.out,
      ],
    },
    {
      name: ["rprof", "rrprof", "rrrprof", "prof"],
      description: "Read the runbook run profile",
      args: {
        template: "filepaths",
      },
      options: [
        ...globalFlags,
        options.depth,
        helpOption("rprof"),
        options.sort,
        options.unit,
      ],
    },
    {
      name: "run",
      description: "Run scenarios of runbooks",
      args: {
        template: "filepaths",
      },
      options: [
        ...globalFlags,
        options.attach,
        options.cacheDir,
        options.capture,
        options.concurrent,
        options.debug,
        options.envFile,
        options.failFast,
        options.forceColor,
        options.format,
        options.grpcBugConfig,
        options.grpcBufDir,
        options.grpcBufLock,
        options.grpcBufModule,
        options.grpcImportPath,
        options.grpcNoTls,
        options.grpcProto,
        helpOption("run"),
        options.hostRules,
        options.httpOpenapi3,
        options.id,
        options.label,
        options.overlay,
        options.profile,
        options.profileOut,
        options.random,
        options.retainCacheDir,
        options.run,
        options.runner,
        options.sample,
        options.shardIndex,
        options.shardN,
        options.shuffle,
        options.skipIncluded,
        options.skipTest,
        options.underlay,
        options.var,
        options.verbose,
        options.waitTimeout,
      ],
    },
  ],
  options: [
    helpOption("runn"),
    {
      name: ["--version", "-v"],
      description: "Version for runn",
    },
  ],
};
export default completionSpec;
