const completionSpec: Fig.Spec = {
  name: "k6",
  description:
    "Grafana k6 is an open-source load testing tool that makes performance testing easy",
  subcommands: [
    {
      name: "archive",
      description: "Create an archive",
      args: {
        name: "archive",
        description: "Name of a file to archive",
      },
    },
    {
      name: "cloud",
      description: "Run a test on the cloud",
      args: {
        name: "cloud",
        description: "Name of a script to run",
      },
    },
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      args: {
        name: "completion",
        description:
          "Generate the autocompletion script for the specified shell",
      },
      subcommands: [
        {
          name: "bash",
          description: "Generate the autocompletion script for bash",
        },
        {
          name: "fish",
          description: "Generate the autocompletion script for fish",
        },
        {
          name: "powershell",
          description: "Generate the autocompletion script for powershell",
        },
        {
          name: "zsh",
          description: "Generate the autocompletion script for zsh",
        },
      ],
    },
    {
      name: "convert",
      description: "Convert a HAR file to a k6 script",
      args: {
        name: "convert",
        description: "HAR file to convert",
      },
    },
    {
      name: "help",
      description: "Help about any command",
      args: {
        name: "help",
        description: "Help about any command",
      },
    },
    {
      name: "inspect",
      description: "Inspect a script or archive",
      args: {
        name: "inspect",
        description: "K6 script to inspect or archive",
      },
    },
    {
      name: "login",
      description: "Inspect a script or archive",
      args: {
        name: "login",
        description: "K6 script to inspect or archive",
      },
      subcommands: [
        {
          name: "cloud",
          description: "Authenticate with Load Impact",
        },
        {
          name: "influxdb",
          description: "Authenticate with InfluxDB",
        },
      ],
    },
    {
      name: "pause",
      description: "Pause a running test",
    },
    {
      name: "resume",
      description: "Resume a running test",
    },
    {
      name: "run",
      description: "Start a load test",
      args: {
        name: "run",
        description: "K6 script to run",
      },
      options: [
        {
          name: "--address",
          description: "Address of the API server",
          args: {
            name: "address",
            description: "Address of the API server",
          },
        },
        {
          name: "--batch",
          description: "Max parallel batch reqs (default 20)",
          args: {
            name: "batch",
            description: "Max parallel batch reqs (default 20)",
          },
        },
        {
          name: "--batch-per-host",
          description: "Max parallel batch reqs per host (default 6)",
          args: {
            name: "batch-per-host",
            description: "Max parallel batch reqs per host (default 6)",
          },
        },
        {
          name: ["--vus", "-u"],
          description: "Number of virtual users (default 1)",
          args: {
            name: "vus",
            description: "Number of virtual users (default 1)",
          },
        },
        {
          name: ["--duration", "-d"],
          description: "Test duration limit",
          args: {
            name: "duration",
            description: "Test duration limit",
          },
        },
        {
          name: ["--iterations", "-i"],
          description: "Script total iteration limit (among all VUs)",
          args: {
            name: "iterations",
            description: "Script total iteration limit (among all VUs)",
          },
        },
        {
          name: ["--stage", "-s"],
          description: "Add a stage, as `[duration]:[target]`",
          args: {
            name: "stage",
            description: "Add a stage, as `[duration]:[target]`",
          },
        },
        {
          name: "--execution-segment",
          description: "Add a stage, as `[duration]:[target]`",
          args: {
            name: "execution-segment",
            description:
              "Limit execution to the specified segment, e.g. 10%, 1/3, 0.2:2/3",
          },
        },
        {
          name: "--execution-segment-sequence",
          description: "The execution segment sequence",
          args: {
            name: "execution-segment-sequence",
            description: "The execution segment sequence",
          },
        },
        {
          name: ["--paused", "-p"],
          description: "Start the test in a paused state",
          args: {
            name: "paused",
            description: "Start the test in a paused state",
          },
        },
        {
          name: "--no-setup",
          description: "Don't run setup()",
          args: {
            name: "no-setup",
            description: "Don't run setup()",
          },
        },
        {
          name: "--no-teardown",
          description: "Don't run teardown()",
          args: {
            name: "no-teardown",
            description: "Don't run teardown()",
          },
        },
        {
          name: "--max-redirects",
          description: "Follow at most n redirects (default 10)",
          args: {
            name: "max-redirects",
            description: "Follow at most n redirects (default 10)",
          },
        },
        {
          name: "--rps",
          description: "Limit requests per second",
          args: {
            name: "rps",
            description: "Limit requests per second",
          },
        },
        {
          name: "--user-agent",
          description:
            'User agent for http requests (default "k6/0.39.0 (https://k6.io/)")',
          args: {
            name: "user-agent",
            description:
              'User agent for http requests (default "k6/0.39.0 (https://k6.io/)")',
          },
        },
        {
          name: "--http-debug",
          description:
            "Log all HTTP requests and responses. Excludes body by default. To include body use '--http-debug=full'",
          args: {
            name: "http-debug",
            description:
              "Log all HTTP requests and responses. Excludes body by default. To include body use '--http-debug=full'",
          },
        },
        {
          name: "--insecure-skip-tls-verify",
          description: "Skip verification of TLS certificates",
          args: {
            name: "insecure-skip-tls-verify",
            description: "Skip verification of TLS certificates",
          },
        },
        {
          name: "--no-connection-reuse",
          description: "Disable keep-alive connections",
          args: {
            name: "no-connection-reuse",
            description: "Disable keep-alive connections",
          },
        },
        {
          name: "--no-vu-connection-reuse",
          description: "Don't reuse connections between iterations",
          args: {
            name: "no-vu-connection-reuse",
            description: "Don't reuse connections between iterations",
          },
        },
        {
          name: "--min-iteration-duration",
          description:
            "Minimum amount of time k6 will take executing a single iteration",
          args: {
            name: "min-iteration-duration",
            description:
              "Minimum amount of time k6 will take executing a single iteration",
          },
        },
        {
          name: "--throw",
          description: "Throw warnings (like failed http requests) as errors",
          args: {
            name: "throw",
            description: "Throw warnings (like failed http requests) as errors",
          },
        },
        {
          name: "--blacklist-ip",
          description: "Blacklist an ip range from being called",
          args: {
            name: "blacklist-ip",
            description: "Blacklist an ip range from being calledd",
          },
        },
        {
          name: "--block-hostnames",
          description:
            "Block a case-insensitive hostname pattern, with optional leading wildcard, from being called",
          args: {
            name: "block-hostnames",
            description:
              "Block a case-insensitive hostname pattern, with optional leading wildcard, from being called",
          },
        },
        {
          name: "--summary-trend-stats",
          description:
            "Define stats for trend metrics (response times), one or more as 'avg,p(95),...' (default 'avg,min,med,max,p(90),p(95)')",
          args: {
            name: "summary-trend-stats",
            description:
              "Define stats for trend metrics (response times), one or more as 'avg,p(95),...' (default 'avg,min,med,max,p(90),p(95)')",
          },
        },
        {
          name: "--summary-time-unit",
          description:
            "Define the time unit used to display the trend stats. Possible units are: 's', 'ms' and 'us'",
          args: {
            name: "summary-time-unit",
            description:
              "Define the time unit used to display the trend stats. Possible units are: 's', 'ms' and 'us'",
          },
        },
        {
          name: "--system-tags",
          description:
            'Only include these system tags in metrics (default "proto,subproto,status,method,url,name,group,check,error,error_code,tls_version,scenario,service,expected_response")',
          args: {
            name: "system-tags",
            description:
              'Only include these system tags in metrics (default "proto,subproto,status,method,url,name,group,check,error,error_code,tls_version,scenario,service,expected_response")',
          },
        },
        {
          name: "--tag",
          description:
            "Add a tag to be applied to all samples, as `[name]=[value]`",
          args: {
            name: "tag",
            description:
              "Add a tag to be applied to all samples, as `[name]=[value]`",
          },
        },
        {
          name: "--console-output",
          description:
            "Redirects the console logging to the provided output file",
          args: {
            name: "console-output",
            description:
              "Redirects the console logging to the provided output file",
          },
        },
        {
          name: "--discard-response-bodies",
          description: "Read but don't process or save HTTP response bodies",
          args: {
            name: "discard-response-bodies",
            description: "Read but don't process or save HTTP response bodies",
          },
        },
        {
          name: "--local-ips",
          description:
            "Client IP Ranges and/or CIDRs from which each VU will be making requests, e.g. '192.168.220.1,192.168.0.10-192.168.0.25', 'fd:1::0/120', etc",
          args: {
            name: "local-ips",
            description:
              "Client IP Ranges and/or CIDRs from which each VU will be making requests, e.g. '192.168.220.1,192.168.0.10-192.168.0.25', 'fd:1::0/120', etc",
          },
        },
        {
          name: "--dns",
          description: "DNS resolver configuration",
          args: {
            name: "dns",
            description: "DNS resolver configuration",
          },
        },
        {
          name: "--include-system-env-vars",
          description:
            "Pass the real system environment variables to the runtime (default true)",
          args: {
            name: "include-system-env-vars",
            description:
              "Pass the real system environment variables to the runtime (default true)",
          },
        },
        {
          name: "--compatibility-mode",
          description:
            'JavaScript compiler compatibility mode, "extended" or "base"',
          args: {
            name: "compatibility-mode",
            description:
              'JavaScript compiler compatibility mode, "extended" or "base"',
          },
        },
        {
          name: ["--type", "-t"],
          description: 'Override test type, "js" or "archive"',
          args: {
            name: "type",
            description: 'Override test type, "js" or "archive"',
          },
        },
        {
          name: ["--env", "-e"],
          description: "Add/override environment variable with VAR=value",
          args: {
            name: "env",
            description: "Add/override environment variable with VAR=value",
          },
        },
        {
          name: "--no-thresholds",
          description: "Don't run thresholds",
          args: {
            name: "no-thresholds",
            description: "Don't run thresholds",
          },
        },
        {
          name: "--no-summary",
          description: "Don't show the summary at the end of the test",
          args: {
            name: "no-summary",
            description: "Don't show the summary at the end of the test",
          },
        },
        {
          name: "--summary-export",
          description: "Output the end-of-test summary report to JSON file",
          args: {
            name: "summary-export",
            description: "Output the end-of-test summary report to JSON file",
          },
        },
        {
          name: ["--out", "-o"],
          description: "Uri for an external metrics database",
          args: {
            name: "out",
            description: "Uri for an external metrics database",
          },
        },
        {
          name: ["--linger", "-l"],
          description: "Keep the API server alive past test end",
          args: {
            name: "linger",
            description: "Keep the API server alive past test end",
          },
        },
        {
          name: "--no-usage-report",
          description: "Don't send anonymous stats to the developers",
          args: {
            name: "no-usage-report",
            description: "Don't send anonymous stats to the developers",
          },
        },
      ],
    },
    {
      name: "scale",
      description: "Scale a running test",
      options: [
        {
          name: ["-h", "--help"],
          description: "Help for scale",
        },
        {
          name: ["-m", "--max"],
          description: "Max available virtual users",
          args: {
            name: "max",
            description: "Max available virtual users",
          },
        },
        {
          name: ["-u", "--vus"],
          description: "Number of virtual users (default 1)",
          args: {
            name: "vus",
            description: "Number of virtual users (default 1)",
          },
        },
      ],
    },
    {
      name: "stats",
      description: "Show test metrics",
      options: [
        {
          name: ["-h", "--help"],
          description: "Help for stats",
        },
      ],
    },
    {
      name: "status",
      description: "Show test status",
      options: [
        {
          name: ["-h", "--help"],
          description: "Help for status",
        },
      ],
    },
    {
      name: "version",
      description: "Show the application version and exit",
      options: [
        {
          name: ["-h", "--help"],
          description: "Help for version",
        },
      ],
    },
  ],
  options: [
    {
      name: ["-v", "--verbose"],
      description: "Enable verbose logging",
    },
    {
      name: ["-q", "--quiet"],
      description: "Disable progress updates",
    },
    {
      name: ["-h", "--help"],
      description: "Help for k6",
    },
    {
      name: ["-a", "--address"],
      description: 'Address for the REST API server (default "localhost:6565")',
      args: {
        name: "address",
        description:
          'Address for the REST API server (default "localhost:6565")',
      },
    },
    {
      name: ["--config", "-c"],
      description: "JSON config file",
      args: {
        name: "config",
        description: "JSON config file",
      },
    },
    {
      name: "--log-format",
      description: "Log output format",
      args: {
        name: "log-format",
        description: "Log output format",
      },
    },
    {
      name: "--log-output",
      description: "Change the output for k6 logs",
      args: {
        name: "log-output",
        description: "Change the output for k6 logs",
      },
    },
    {
      name: "--no-color",
      description: "Disable colored output",
      args: {
        name: "no-color",
        description: "Disable colored output",
      },
    },
  ],
};

export default completionSpec;
