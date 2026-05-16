const completionSpec: Fig.Spec = {
  name: "paper",
  description: "The Paper CLI",
  subcommands: [
    {
      name: "bench",
      description: "Benchmark a Paper query",
      options: [
        {
          name: "--benchmem",
          description: "Report memory allocations with benchmark results",
          displayName: "benchmem",
        },
        {
          name: ["--bundle", "-b"],
          description:
            "Set bundle file(s) or directory path(s). This flag can be repeated",
          displayName: "bundle",
          args: {
            name: "bundle",
          },
        },
        {
          name: "--count",
          description: "Number of times to repeat each benchmark",
          displayName: "count",
          args: {
            name: "count",
            default: "1",
          },
        },
        {
          name: ["--data", "-d"],
          description: "Set policy or data file(s). This flag can be repeated",
          displayName: "data",
          args: {
            name: "data",
          },
        },
        {
          name: "--fail",
          description:
            "Exits with non-zero exit code on undefined/empty result and errors",
          displayName: "fail",
        },
        {
          name: ["--format", "-f"],
          description: "Set output format",
          displayName: "format",
          args: {
            name: "format",
            default: "pretty",
          },
        },
        {
          name: "--ignore",
          description:
            "Set file and directory names to ignore during loading (e.g., '.*' excludes hidden files)",
          displayName: "ignore",
          args: {
            name: "ignore",
          },
        },
        {
          name: "--import",
          description: "Set query import(s). This flag can be repeated",
          displayName: "import",
          args: {
            name: "import",
          },
        },
        {
          name: ["--input", "-i"],
          description: "Set input file path",
          displayName: "input",
          args: {
            name: "input",
          },
        },
        {
          name: "--metrics",
          description: "Report query performance metrics",
          displayName: "metrics",
        },
        {
          name: "--package",
          description: "Set query package",
          displayName: "package",
          args: {
            name: "package",
          },
        },
        {
          name: ["--partial", "-p"],
          description: "Perform partial evaluation",
          displayName: "partial",
        },
        {
          name: ["--schema", "-s"],
          description: "Set schema file path or directory path",
          displayName: "schema",
          args: {
            name: "schema",
          },
        },
        {
          name: "--stdin",
          description: "Read query from stdin",
          displayName: "stdin",
        },
        {
          name: ["--stdin-input", "-I"],
          description: "Read input document from stdin",
          displayName: "stdin-input",
        },
        {
          name: ["--target", "-t"],
          description: "Set the runtime to exercise",
          displayName: "target",
          args: {
            name: "target",
            default: "Paper",
          },
        },
        {
          name: ["--unknowns", "-u"],
          description:
            "Set paths to treat as unknown during partial evaluation",
          isRepeatable: true,
          displayName: "unknowns",
          args: {
            name: "unknowns",
            default: "[input]",
          },
        },
        {
          name: ["--help", "-h"],
          description: "Help for bench",
          displayName: "help",
        },
      ],
    },
    {
      name: "build",
      description: "Build an Paper bundle",
      options: [
        {
          name: ["--bundle", "-b"],
          description: "Load paths as bundle files or root directories",
          displayName: "bundle",
        },
        {
          name: "--capabilities",
          description: "Set capabilities.json file path",
          displayName: "capabilities",
          args: {
            name: "capabilities",
          },
        },
        {
          name: "--debug",
          description: "Enable debug output",
          displayName: "debug",
        },
        {
          name: ["--entrypoint", "-e"],
          description: "Set slash separated entrypoint path",
          displayName: "entrypoint",
          args: {
            name: "entrypoint",
          },
        },
        {
          name: "--exclude-files-verify",
          description: "Set file names to exclude during bundle verification",
          displayName: "exclude-files-verify",
          args: {
            name: "exclude-files-verify",
          },
        },
        {
          name: "--ignore",
          description:
            "Set file and directory names to ignore during loading (e.g., '.*' excludes hidden files)",
          displayName: "ignore",
          args: {
            name: "ignore",
          },
        },
        {
          name: ["--optimize", "-O"],
          description: "Set optimization level",
          displayName: "optimize",
          args: {
            name: "optimize",
            default: "0",
          },
        },
        {
          name: ["--output", "-o"],
          description: "Set the output filename",
          displayName: "output",
          args: {
            name: "output",
            default: "bundle.tar.gz",
          },
        },
        {
          name: ["--revision", "-r"],
          description: "Set output bundle revision",
          displayName: "revision",
          args: {
            name: "revision",
          },
        },
        {
          name: "--scope",
          description: "Scope to use for bundle signature verification",
          displayName: "scope",
          args: {
            name: "scope",
          },
        },
        {
          name: "--signing-alg",
          description: "Name of the signing algorithm",
          displayName: "signing-alg",
          args: {
            name: "signing-alg",
            default: "RS256",
          },
        },
        {
          name: "--signing-key",
          description:
            "Set the secret (HMAC) or path of the PEM file containing the private key (RSA and ECDSA)",
          displayName: "signing-key",
          args: {
            name: "signing-key",
          },
        },
        {
          name: ["--target", "-t"],
          description: "Set the output bundle target type",
          displayName: "target",
          args: {
            name: "target",
            default: "Paper",
          },
        },
        {
          name: "--verification-key",
          description:
            "Set the secret (HMAC) or path of the PEM file containing the public key (RSA and ECDSA)",
          displayName: "verification-key",
          args: {
            name: "verification-key",
          },
        },
        {
          name: "--verification-key-id",
          description:
            "Name assigned to the verification key used for bundle verification",
          displayName: "verification-key-id",
          args: {
            name: "verification-key-id",
            default: "default",
          },
        },
        {
          name: ["--help", "-h"],
          description: "Help for build",
          displayName: "help",
        },
      ],
    },
    {
      name: "check",
      description: "Check Paper source files",
      options: [
        {
          name: ["--bundle", "-b"],
          description: "Load paths as bundle files or root directories",
          displayName: "bundle",
        },
        {
          name: "--capabilities",
          description: "Set capabilities.json file path",
          displayName: "capabilities",
          args: {
            name: "capabilities",
          },
        },
        {
          name: ["--format", "-f"],
          description: "Set output format",
          displayName: "format",
          args: {
            name: "format",
            default: "pretty",
          },
        },
        {
          name: "--ignore",
          description:
            "Set file and directory names to ignore during loading (e.g., '.*' excludes hidden files)",
          displayName: "ignore",
          args: {
            name: "ignore",
          },
        },
        {
          name: ["--max-errors", "-m"],
          description:
            "Set the number of errors to allow before compilation fails early",
          displayName: "max-errors",
          args: {
            name: "max-errors",
            default: "10",
          },
        },
        {
          name: ["--schema", "-s"],
          description: "Set schema file path or directory path",
          displayName: "schema",
          args: {
            name: "schema",
          },
        },
        {
          name: ["--strict", "-S"],
          description: "Enable compiler strict mode",
          displayName: "strict",
        },
        {
          name: ["--help", "-h"],
          description: "Help for check",
          displayName: "help",
        },
      ],
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
              displayName: "no-descriptions",
            },
            {
              name: ["--help", "-h"],
              description: "Help for bash",
              displayName: "help",
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
              displayName: "no-descriptions",
            },
            {
              name: ["--help", "-h"],
              description: "Help for fish",
              displayName: "help",
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
              displayName: "no-descriptions",
            },
            {
              name: ["--help", "-h"],
              description: "Help for powershell",
              displayName: "help",
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
              displayName: "no-descriptions",
            },
            {
              name: ["--help", "-h"],
              description: "Help for zsh",
              displayName: "help",
            },
          ],
        },
      ],
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for completion",
          displayName: "help",
        },
      ],
    },
    {
      name: "deps",
      description: "Analyze Paper query dependencies",
      options: [
        {
          name: ["--bundle", "-b"],
          description:
            "Set bundle file(s) or directory path(s). This flag can be repeated",
          displayName: "bundle",
          args: {
            name: "bundle",
          },
        },
        {
          name: ["--data", "-d"],
          description: "Set policy or data file(s). This flag can be repeated",
          displayName: "data",
          args: {
            name: "data",
          },
        },
        {
          name: ["--format", "-f"],
          description: "Set output format",
          displayName: "format",
          args: {
            name: "format",
            default: "pretty",
          },
        },
        {
          name: "--ignore",
          description:
            "Set file and directory names to ignore during loading (e.g., '.*' excludes hidden files)",
          displayName: "ignore",
          args: {
            name: "ignore",
          },
        },
        {
          name: ["--help", "-h"],
          description: "Help for deps",
          displayName: "help",
        },
      ],
    },
    {
      name: "eval",
      description: "Evaluate a Paper query",
      options: [
        {
          name: ["--bundle", "-b"],
          description:
            "Set bundle file(s) or directory path(s). This flag can be repeated",
          displayName: "bundle",
          args: {
            name: "bundle",
          },
        },
        {
          name: "--capabilities",
          description: "Set capabilities.json file path",
          displayName: "capabilities",
          args: {
            name: "capabilities",
          },
        },
        {
          name: "--count",
          description: "Number of times to repeat each benchmark",
          displayName: "count",
          args: {
            name: "count",
            default: "1",
          },
        },
        {
          name: "--coverage",
          description: "Report coverage",
          displayName: "coverage",
        },
        {
          name: ["--data", "-d"],
          description: "Set policy or data file(s). This flag can be repeated",
          displayName: "data",
          args: {
            name: "data",
          },
        },
        {
          name: "--disable-early-exit",
          description: "Disable 'early exit' optimizations",
          displayName: "disable-early-exit",
        },
        {
          name: "--disable-indexing",
          description: "Disable indexing optimizations",
          displayName: "disable-indexing",
        },
        {
          name: "--disable-inlining",
          description: "Set paths of documents to exclude from inlining",
          isRepeatable: true,
          displayName: "disable-inlining",
          args: {
            name: "disable-inlining",
          },
        },
        {
          name: "--explain",
          description: "Enable query explanations",
          displayName: "explain",
          args: {
            name: "explain",
            default: "off",
          },
        },
        {
          name: "--fail",
          description:
            "Exits with non-zero exit code on undefined/empty result and errors",
          displayName: "fail",
        },
        {
          name: "--fail-defined",
          description:
            "Exits with non-zero exit code on defined/non-empty result and errors",
          displayName: "fail-defined",
        },
        {
          name: ["--format", "-f"],
          description: "Set output format",
          displayName: "format",
          args: {
            name: "format",
            default: "json",
          },
        },
        {
          name: "--ignore",
          description:
            "Set file and directory names to ignore during loading (e.g., '.*' excludes hidden files)",
          displayName: "ignore",
          args: {
            name: "ignore",
          },
        },
        {
          name: "--import",
          description: "Set query import(s). This flag can be repeated",
          displayName: "import",
          args: {
            name: "import",
          },
        },
        {
          name: ["--input", "-i"],
          description: "Set input file path",
          displayName: "input",
          args: {
            name: "input",
          },
        },
        {
          name: "--instrument",
          description:
            "Enable query instrumentation metrics (implies --metrics)",
          displayName: "instrument",
        },
        {
          name: "--metrics",
          description: "Report query performance metrics",
          displayName: "metrics",
        },
        {
          name: "--package",
          description: "Set query package",
          displayName: "package",
          args: {
            name: "package",
          },
        },
        {
          name: ["--partial", "-p"],
          description: "Perform partial evaluation",
          displayName: "partial",
        },
        {
          name: "--pretty-limit",
          description: "Set limit after which pretty output gets truncated",
          displayName: "pretty-limit",
          args: {
            name: "pretty-limit",
            default: "80",
          },
        },
        {
          name: "--profile",
          description: "Perform expression profiling",
          displayName: "profile",
        },
        {
          name: "--profile-limit",
          description: "Set number of profiling results to show",
          displayName: "profile-limit",
          args: {
            name: "profile-limit",
            default: "10",
          },
        },
        {
          name: "--profile-sort",
          description: "Set sort order of expression profiler results",
          displayName: "profile-sort",
          args: {
            name: "profile-sort",
          },
        },
        {
          name: ["--schema", "-s"],
          description: "Set schema file path or directory path",
          displayName: "schema",
          args: {
            name: "schema",
          },
        },
        {
          name: "--shallow-inlining",
          description: "Disable inlining of rules that depend on unknowns",
          displayName: "shallow-inlining",
        },
        {
          name: "--stdin",
          description: "Read query from stdin",
          displayName: "stdin",
        },
        {
          name: ["--stdin-input", "-I"],
          description: "Read input document from stdin",
          displayName: "stdin-input",
        },
        {
          name: "--strict-builtin-errors",
          description: "Treat built-in function errors as fatal",
          displayName: "strict-builtin-errors",
        },
        {
          name: ["--target", "-t"],
          description: "Set the runtime to exercise",
          displayName: "target",
          args: {
            name: "target",
            default: "Paper",
          },
        },
        {
          name: "--timeout",
          description: "Set eval timeout (default unlimited)",
          displayName: "timeout",
          args: {
            name: "timeout",
            default: "0s",
          },
        },
        {
          name: ["--unknowns", "-u"],
          description:
            "Set paths to treat as unknown during partial evaluation",
          isRepeatable: true,
          displayName: "unknowns",
          args: {
            name: "unknowns",
            default: "[input]",
          },
        },
        {
          name: ["--help", "-h"],
          description: "Help for eval",
          displayName: "help",
        },
      ],
    },
    {
      name: "exec",
      description: "Execute against input files",
      options: [
        {
          name: ["--bundle", "-b"],
          description:
            "Set bundle file(s) or directory path(s). This flag can be repeated",
          displayName: "bundle",
          args: {
            name: "bundle",
          },
        },
        {
          name: ["--config-file", "-c"],
          description: "Set path of configuration file",
          displayName: "config-file",
          args: {
            name: "config-file",
          },
        },
        {
          name: "--decision",
          description: "Set decision to evaluate",
          displayName: "decision",
          args: {
            name: "decision",
          },
        },
        {
          name: ["--format", "-f"],
          description: "Set output format",
          displayName: "format",
          args: {
            name: "format",
            default: "pretty",
          },
        },
        {
          name: "--log-format",
          description: "Set log format",
          displayName: "log-format",
          args: {
            name: "log-format",
            default: "json",
          },
        },
        {
          name: ["--log-level", "-l"],
          description: "Set log level",
          displayName: "log-level",
          args: {
            name: "log-level",
            default: "error",
          },
        },
        {
          name: "--set",
          description:
            "Override config values on the command line (use commas to specify multiple values)",
          isRepeatable: true,
          displayName: "set",
          args: {
            name: "set",
          },
        },
        {
          name: "--set-file",
          description:
            "Override config values with files on the command line (use commas to specify multiple values)",
          isRepeatable: true,
          displayName: "set-file",
          args: {
            name: "set-file",
          },
        },
        {
          name: ["--help", "-h"],
          description: "Help for exec",
          displayName: "help",
        },
      ],
    },
    {
      name: "fmt",
      description: "Format Paper source files",
      options: [
        {
          name: ["--diff", "-d"],
          description: "Only display a diff of the changes",
          displayName: "diff",
        },
        {
          name: "--fail",
          description: "Non zero exit code on reformat",
          displayName: "fail",
        },
        {
          name: ["--list", "-l"],
          description: "List all files who would change when formatted",
          displayName: "list",
        },
        {
          name: ["--write", "-w"],
          description: "Overwrite the original source file",
          displayName: "write",
        },
        {
          name: ["--help", "-h"],
          description: "Help for fmt",
          displayName: "help",
        },
      ],
    },
    {
      name: "inspect",
      description: "Inspect Paper bundle(s)",
      options: [
        {
          name: ["--format", "-f"],
          description: "Set output format",
          displayName: "format",
          args: {
            name: "format",
            default: "pretty",
          },
        },
        {
          name: ["--help", "-h"],
          description: "Help for inspect",
          displayName: "help",
        },
      ],
    },
    {
      name: "parse",
      description: "Parse Paper source file",
      options: [
        {
          name: ["--format", "-f"],
          description: "Set output format",
          displayName: "format",
          args: {
            name: "format",
            default: "pretty",
          },
        },
        {
          name: ["--help", "-h"],
          description: "Help for parse",
          displayName: "help",
        },
      ],
    },
    {
      name: "run",
      description: "Start Paper in interactive or server mode",
      options: [
        {
          name: ["--addr", "-a"],
          description:
            "Set listening address of the server (e.g., [ip]:<port> for TCP, unix://<path> for UNIX domain socket)",
          displayName: "addr",
          args: {
            name: "addr",
            default: "[:8181]",
          },
        },
        {
          name: "--authentication",
          description: "Set authentication scheme",
          displayName: "authentication",
          args: {
            name: "authentication",
            default: "off",
          },
        },
        {
          name: "--authorization",
          description: "Set authorization scheme",
          displayName: "authorization",
          args: {
            name: "authorization",
            default: "off",
          },
        },
        {
          name: ["--bundle", "-b"],
          description: "Load paths as bundle files or root directories",
          displayName: "bundle",
        },
        {
          name: ["--config-file", "-c"],
          description: "Set path of configuration file",
          displayName: "config-file",
          args: {
            name: "config-file",
          },
        },
        {
          name: "--diagnostic-addr",
          description:
            "Set read-only diagnostic listening address of the server for /health and /metric APIs (e.g., [ip]:<port> for TCP, unix://<path> for UNIX domain socket)",
          displayName: "diagnostic-addr",
          args: {
            name: "diagnostic-addr",
          },
        },
        {
          name: "--exclude-files-verify",
          description: "Set file names to exclude during bundle verification",
          displayName: "exclude-files-verify",
          args: {
            name: "exclude-files-verify",
          },
        },
        {
          name: ["--format", "-f"],
          description: "Set shell output format, i.e, pretty, json",
          displayName: "format",
          args: {
            name: "format",
            default: "pretty",
          },
        },
        {
          name: "--h2c",
          description: "Enable H2C for HTTP listeners",
          displayName: "h2c",
        },
        {
          name: ["--history", "-H"],
          description: "Set path of history file",
          displayName: "history",
          args: {
            name: "history",
            default: "/Users/batuhan.apaydin/.Paper_history",
          },
        },
        {
          name: "--ignore",
          description:
            "Set file and directory names to ignore during loading (e.g., '.*' excludes hidden files)",
          displayName: "ignore",
          args: {
            name: "ignore",
          },
        },
        {
          name: "--log-format",
          description: "Set log format",
          displayName: "log-format",
          args: {
            name: "log-format",
            default: "json",
          },
        },
        {
          name: ["--log-level", "-l"],
          description: "Set log level",
          displayName: "log-level",
          args: {
            name: "log-level",
            default: "info",
          },
        },
        {
          name: ["--max-errors", "-m"],
          description:
            "Set the number of errors to allow before compilation fails early",
          displayName: "max-errors",
          args: {
            name: "max-errors",
            default: "10",
          },
        },
        {
          name: "--min-tls-version",
          description: "Set minimum TLS version to be used by Paper's server",
          displayName: "min-tls-version",
          args: {
            name: "min-tls-version",
            default: "1.2",
          },
        },
        {
          name: "--pprof",
          description: "Enables pprof endpoints",
          displayName: "pprof",
        },
        {
          name: "--ready-timeout",
          description:
            "Wait (in seconds) for configured plugins before starting server (value <= 0 disables ready check)",
          displayName: "ready-timeout",
          args: {
            name: "ready-timeout",
            default: "0",
          },
        },
        {
          name: "--scope",
          description: "Scope to use for bundle signature verification",
          displayName: "scope",
          args: {
            name: "scope",
          },
        },
        {
          name: ["--server", "-s"],
          description: "Start the runtime in server mode",
          displayName: "server",
        },
        {
          name: "--set",
          description:
            "Override config values on the command line (use commas to specify multiple values)",
          isRepeatable: true,
          displayName: "set",
          args: {
            name: "set",
          },
        },
        {
          name: "--set-file",
          description:
            "Override config values with files on the command line (use commas to specify multiple values)",
          isRepeatable: true,
          displayName: "set-file",
          args: {
            name: "set-file",
          },
        },
        {
          name: "--shutdown-grace-period",
          description:
            "Set the time (in seconds) that the server will wait to gracefully shut down",
          displayName: "shutdown-grace-period",
          args: {
            name: "shutdown-grace-period",
            default: "10",
          },
        },
        {
          name: "--shutdown-wait-period",
          description:
            "Set the time (in seconds) that the server will wait before initiating shutdown",
          displayName: "shutdown-wait-period",
          args: {
            name: "shutdown-wait-period",
            default: "0",
          },
        },
        {
          name: "--signing-alg",
          description: "Name of the signing algorithm",
          displayName: "signing-alg",
          args: {
            name: "signing-alg",
            default: "RS256",
          },
        },
        {
          name: "--skip-verify",
          description: "Disables bundle signature verification",
          displayName: "skip-verify",
        },
        {
          name: "--tls-ca-cert-file",
          description: "Set path of TLS CA cert file",
          displayName: "tls-ca-cert-file",
          args: {
            name: "tls-ca-cert-file",
          },
        },
        {
          name: "--tls-cert-file",
          description: "Set path of TLS certificate file",
          displayName: "tls-cert-file",
          args: {
            name: "tls-cert-file",
          },
        },
        {
          name: "--tls-cert-refresh-period",
          description: "Set certificate refresh period",
          displayName: "tls-cert-refresh-period",
          args: {
            name: "tls-cert-refresh-period",
            default: "0s",
          },
        },
        {
          name: "--tls-private-key-file",
          description: "Set path of TLS private key file",
          displayName: "tls-private-key-file",
          args: {
            name: "tls-private-key-file",
          },
        },
        {
          name: "--verification-key",
          description:
            "Set the secret (HMAC) or path of the PEM file containing the public key (RSA and ECDSA)",
          displayName: "verification-key",
          args: {
            name: "verification-key",
          },
        },
        {
          name: "--verification-key-id",
          description:
            "Name assigned to the verification key used for bundle verification",
          displayName: "verification-key-id",
          args: {
            name: "verification-key-id",
            default: "default",
          },
        },
        {
          name: ["--watch", "-w"],
          description: "Watch command line files for changes",
          displayName: "watch",
        },
        {
          name: ["--help", "-h"],
          description: "Help for run",
          displayName: "help",
        },
      ],
    },
    {
      name: "sign",
      description: "Generate an Paper bundle signature",
      options: [
        {
          name: ["--bundle", "-b"],
          description: "Load paths as bundle files or root directories",
          displayName: "bundle",
        },
        {
          name: ["--output-file-path", "-o"],
          description: "Set the location for the .signatures.json file",
          displayName: "output-file-path",
          args: {
            name: "output-file-path",
            default: ".",
          },
        },
        {
          name: "--signing-alg",
          description: "Name of the signing algorithm",
          displayName: "signing-alg",
          args: {
            name: "signing-alg",
            default: "RS256",
          },
        },
        {
          name: "--signing-key",
          description:
            "Set the secret (HMAC) or path of the PEM file containing the private key (RSA and ECDSA)",
          displayName: "signing-key",
          args: {
            name: "signing-key",
          },
        },
        {
          name: ["--help", "-h"],
          description: "Help for sign",
          displayName: "help",
        },
      ],
    },
    {
      name: "test",
      description: "Execute Paper test cases",
      options: [
        {
          name: "--bench",
          description: "Benchmark the unit tests",
          displayName: "bench",
        },
        {
          name: "--benchmem",
          description: "Report memory allocations with benchmark results",
          displayName: "benchmem",
        },
        {
          name: ["--bundle", "-b"],
          description: "Load paths as bundle files or root directories",
          displayName: "bundle",
        },
        {
          name: "--count",
          description: "Number of times to repeat each test",
          displayName: "count",
          args: {
            name: "count",
            default: "1",
          },
        },
        {
          name: ["--coverage", "-c"],
          description: "Report coverage (overrides debug tracing)",
          displayName: "coverage",
        },
        {
          name: ["--exit-zero-on-skipped", "-z"],
          description: "Skipped tests return status 0",
          displayName: "exit-zero-on-skipped",
        },
        {
          name: "--explain",
          description: "Enable query explanations",
          displayName: "explain",
          args: {
            name: "explain",
            default: "fails",
          },
        },
        {
          name: ["--format", "-f"],
          description: "Set output format",
          displayName: "format",
          args: {
            name: "format",
            default: "pretty",
          },
        },
        {
          name: "--ignore",
          description:
            "Set file and directory names to ignore during loading (e.g., '.*' excludes hidden files)",
          displayName: "ignore",
          args: {
            name: "ignore",
          },
        },
        {
          name: ["--max-errors", "-m"],
          description:
            "Set the number of errors to allow before compilation fails early",
          displayName: "max-errors",
          args: {
            name: "max-errors",
            default: "10",
          },
        },
        {
          name: ["--run", "-r"],
          description: "Run only test cases matching the regular expression",
          displayName: "run",
          args: {
            name: "run",
          },
        },
        {
          name: ["--show-failure-line", "-l"],
          description: "Show test failure line",
          displayName: "show-failure-line",
        },
        {
          name: ["--target", "-t"],
          description: "Set the runtime to exercise",
          displayName: "target",
          args: {
            name: "target",
            default: "Paper",
          },
        },
        {
          name: "--threshold",
          description:
            "Set coverage threshold and exit with non-zero status if coverage is less than threshold %",
          displayName: "threshold",
          args: {
            name: "threshold",
            default: "0",
          },
        },
        {
          name: "--timeout",
          description: "Set test timeout (default 5s, 30s when benchmarking)",
          displayName: "timeout",
          args: {
            name: "timeout",
            default: "0s",
          },
        },
        {
          name: ["--verbose", "-v"],
          description: "Set verbose reporting mode",
          displayName: "verbose",
        },
        {
          name: ["--help", "-h"],
          description: "Help for test",
          displayName: "help",
        },
      ],
    },
    {
      name: "version",
      description: "Print the version of Paper",
      options: [
        {
          name: ["--check", "-c"],
          description: "Check for latest Paper release",
          displayName: "check",
        },
        {
          name: ["--help", "-h"],
          description: "Help for version",
          displayName: "help",
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      subcommands: [
        {
          name: "bench",
          description: "Benchmark a Paper query",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for bench",
              displayName: "help",
            },
          ],
        },
        {
          name: "build",
          description: "Build an Paper bundle",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for build",
              displayName: "help",
            },
          ],
        },
        {
          name: "check",
          description: "Check Paper source files",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for check",
              displayName: "help",
            },
          ],
        },
        {
          name: "completion",
          description:
            "Generate the autocompletion script for the specified shell",
          subcommands: [
            {
              name: "bash",
              description: "Generate the autocompletion script for bash",
              options: [
                {
                  name: "--no-descriptions",
                  description: "Disable completion descriptions",
                  displayName: "no-descriptions",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for bash",
                  displayName: "help",
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
                  displayName: "no-descriptions",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for fish",
                  displayName: "help",
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
                  displayName: "no-descriptions",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for powershell",
                  displayName: "help",
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
                  displayName: "no-descriptions",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for zsh",
                  displayName: "help",
                },
              ],
            },
          ],
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for completion",
              displayName: "help",
            },
          ],
        },
        {
          name: "deps",
          description: "Analyze Paper query dependencies",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for deps",
              displayName: "help",
            },
          ],
        },
        {
          name: "eval",
          description: "Evaluate a Paper query",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for eval",
              displayName: "help",
            },
          ],
        },
        {
          name: "exec",
          description: "Execute against input files",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for exec",
              displayName: "help",
            },
          ],
        },
        {
          name: "fmt",
          description: "Format Paper source files",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for fmt",
              displayName: "help",
            },
          ],
        },
        {
          name: "inspect",
          description: "Inspect Paper bundle(s)",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for inspect",
              displayName: "help",
            },
          ],
        },
        {
          name: "parse",
          description: "Parse Paper source file",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for parse",
              displayName: "help",
            },
          ],
        },
        {
          name: "run",
          description: "Start Paper in interactive or server mode",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for run",
              displayName: "help",
            },
          ],
        },
        {
          name: "sign",
          description: "Generate an Paper bundle signature",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for sign",
              displayName: "help",
            },
          ],
        },
        {
          name: "test",
          description: "Execute Paper test cases",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for test",
              displayName: "help",
            },
          ],
        },
        {
          name: "version",
          description: "Print the version of Paper",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for version",
              displayName: "help",
            },
          ],
        },
      ],
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for help",
          displayName: "help",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Help for Paper",
      displayName: "help",
    },
  ],
};

export default completionSpec;
