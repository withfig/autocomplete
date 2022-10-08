const completionSpec: Fig.Spec = {
  name: "k6",
  description: "Grafana k6 is an open-source load testing tool that makes performance testing easy.",
  subcommands: [
    {
      name: "archive",
      description: "Create an archive",  
      args: {
        isOptional: false,
        name: "archive",
        description: "name of a file to archive",
      },       
    },
    {
      name: "cloud",
      description: "Run a test on the cloud",  
      args: {
        isOptional: false,
        name: "cloud",
        description: "name of a script to run",
      },       
    },
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",  
      args: {
        isOptional: false,
        name: "completion",
        description: "Generate the autocompletion script for the specified shell",
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
        isOptional: false,
        name: "convert",
        description: "HAR file to convert",
      },       
    },
    {
      name: "help",
      description: "Help about any command",  
      args: {
        isOptional: false,
        name: "help",
        description: "Help about any command",
      },       
    },
    {
      name: "inspect",
      description: "Inspect a script or archive",  
      args: {
        isOptional: false,
        name: "inspect",
        description: "k6 script to inspect or archive",
      },       
    },
    {
      name: "login",
      description: "Inspect a script or archive",  
      args: {
        isOptional: false,
        name: "login",
        description: "k6 script to inspect or archive",
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
        isOptional: false,
        name: "run",
        description: "k6 script to run",
      },
      options: [
        {
          name: ["--address"],
          description: "Address of the API server",  
          args: {
            isOptional: false,
            name: "address",
            description: "Address of the API server",
          },
        },
        {
          name: ["--batch"],
          description: "max parallel batch reqs (default 20)",  
          args: {
            isOptional: false,
            name: "batch",
            description: "max parallel batch reqs (default 20)",
          },
        },
        {
          name: ["--batch-per-host"],
          description: "max parallel batch reqs per host (default 6)",  
          args: {
            isOptional: false,
            name: "batch-per-host",
            description: "max parallel batch reqs per host (default 6)",
          },
        },
        {
          name: ["--vus","-u"],
          description: "number of virtual users (default 1)",  
          args: {
            isOptional: false,
            name: "vus",
            description: "number of virtual users (default 1)",
          },
        },
        {
          name: ["--duration", "-d"],
          description: "test duration limit",  
          args: {
            isOptional: false,
            name: "duration",
            description: "test duration limit",
          },
        },
        {
          name: ["--iterations", "-i"],
          description: "script total iteration limit (among all VUs)",  
          args: {
            isOptional: false,
            name: "iterations",
            description: "script total iteration limit (among all VUs)",
          },
        },
        {
          name: ["--stage", "-s"],
          description: "add a stage, as `[duration]:[target]`",  
          args: {
            isOptional: false,
            name: "stage",
            description: "add a stage, as `[duration]:[target]`",
          },
        },
        {
          name: ["--execution-segment"],
          description: "add a stage, as `[duration]:[target]`",  
          args: {
            isOptional: false,
            name: "execution-segment",
            description: "limit execution to the specified segment, e.g. 10%, 1/3, 0.2:2/3",
          },
        },
        {
          name: ["--execution-segment-sequence", "-s"],
          description: "the execution segment sequence",  
          args: {
            isOptional: false,
            name: "execution-segment-sequence",
            description: "the execution segment sequence",
          },
        },
        {
          name: ["--paused", "-p"],
          description: "start the test in a paused state",  
          args: {
            isOptional: false,
            name: "paused",
            description: "start the test in a paused state",
          },
        },
        {
          name: ["--no-setup"],
          description: "don't run setup()",  
          args: {
            isOptional: false,
            name: "no-setup",
            description: "don't run setup()",
          },
        },
        {
          name: ["--no-teardown"],
          description: "don't run teardown()",  
          args: {
            isOptional: false,
            name: "no-teardown",
            description: "don't run teardown()",
          },
        },
        {
          name: ["--max-redirects"],
          description: "follow at most n redirects (default 10)",  
          args: {
            isOptional: false,
            name: "max-redirects",
            description: "follow at most n redirects (default 10)",
          },
        },
        {
          name: ["--rps"],
          description: "limit requests per second",  
          args: {
            isOptional: false,
            name: "rps",
            description: "limit requests per second",
          },
        },
        {
          name: ["--user-agent"],
          description: "user agent for http requests (default \"k6/0.39.0 (https://k6.io/)\")",  
          args: {
            isOptional: false,
            name: "user-agent",
            description: "user agent for http requests (default \"k6/0.39.0 (https://k6.io/)\")",
          },
        },
        {
          name: ["--http-debug"],
          description: "log all HTTP requests and responses. Excludes body by default. To include body use '--http-debug=full'",  
          args: {
            isOptional: false,
            name: "http-debug",
            description: "log all HTTP requests and responses. Excludes body by default. To include body use '--http-debug=full'",
          },
        },
        {
          name: ["--insecure-skip-tls-verify"],
          description: "skip verification of TLS certificates",  
          args: {
            isOptional: false,
            name: "insecure-skip-tls-verify",
            description: "skip verification of TLS certificates",
          },
        },
        {
          name: ["--no-connection-reuse"],
          description: "disable keep-alive connections",  
          args: {
            isOptional: false,
            name: "no-connection-reuse",
            description: "disable keep-alive connections",
          },
        },
        {
          name: ["--no-vu-connection-reuse"],
          description: "don't reuse connections between iterations",  
          args: {
            isOptional: false,
            name: "no-vu-connection-reuse",
            description: "don't reuse connections between iterations",
          },
        },
        {
          name: ["--min-iteration-duration"],
          description: "minimum amount of time k6 will take executing a single iteration",  
          args: {
            isOptional: false,
            name: "min-iteration-duration",
            description: "minimum amount of time k6 will take executing a single iteration",
          },
        },
        {
          name: ["--throw"],
          description: "throw warnings (like failed http requests) as errors",  
          args: {
            isOptional: false,
            name: "throw",
            description: "throw warnings (like failed http requests) as errors",
          },
        },
        {
          name: ["--blacklist-ip"],
          description: "blacklist an ip range from being called",  
          args: {
            isOptional: false,
            name: "blacklist-ip",
            description: "blacklist an ip range from being calledd",
          },
        },
        {
          name: ["--block-hostnames"],
          description: "block a case-insensitive hostname pattern, with optional leading wildcard, from being called",  
          args: {
            isOptional: false,
            name: "block-hostnames",
            description: "block a case-insensitive hostname pattern, with optional leading wildcard, from being called",
          },
        },
        {
          name: ["--summary-trend-stats"],
          description: "define stats for trend metrics (response times), one or more as 'avg,p(95),...' (default 'avg,min,med,max,p(90),p(95)')",  
          args: {
            isOptional: false,
            name: "summary-trend-stats",
            description: "define stats for trend metrics (response times), one or more as 'avg,p(95),...' (default 'avg,min,med,max,p(90),p(95)')",
          },
        },
        {
          name: ["--summary-time-unit"],
          description: "define the time unit used to display the trend stats. Possible units are: 's', 'ms' and 'us'",  
          args: {
            isOptional: false,
            name: "summary-time-unit",
            description: "define the time unit used to display the trend stats. Possible units are: 's', 'ms' and 'us'",
          },
        },
        {
          name: ["--system-tags"],
          description: "only include these system tags in metrics (default \"proto,subproto,status,method,url,name,group,check,error,error_code,tls_version,scenario,service,expected_response\")",  
          args: {
            isOptional: false,
            name: "system-tags",
            description: "only include these system tags in metrics (default \"proto,subproto,status,method,url,name,group,check,error,error_code,tls_version,scenario,service,expected_response\")",
          },
        },
        {
          name: ["--tag"],
          description: "add a tag to be applied to all samples, as `[name]=[value]`",  
          args: {
            isOptional: false,
            name: "tag",
            description: "add a tag to be applied to all samples, as `[name]=[value]`",
          },
        },
        {
          name: ["--console-output"],
          description: "redirects the console logging to the provided output file",  
          args: {
            isOptional: false,
            name: "console-output",
            description: "redirects the console logging to the provided output file",
          },
        },
        {
          name: ["--discard-response-bodies"],
          description: "Read but don't process or save HTTP response bodies",  
          args: {
            isOptional: false,
            name: "discard-response-bodies",
            description: "Read but don't process or save HTTP response bodies",
          },
        },
        {
          name: ["--local-ips"],
          description: "Client IP Ranges and/or CIDRs from which each VU will be making requests, e.g. '192.168.220.1,192.168.0.10-192.168.0.25', 'fd:1::0/120', etc.",  
          args: {
            isOptional: false,
            name: "local-ips",
            description: "Client IP Ranges and/or CIDRs from which each VU will be making requests, e.g. '192.168.220.1,192.168.0.10-192.168.0.25', 'fd:1::0/120', etc.",
          },
        },
        {
          name: ["--dns"],
          description: "DNS resolver configuration",  
          args: {
            isOptional: false,
            name: "dns",
            description: "DNS resolver configuration",
          },
        },
        {
          name: ["--include-system-env-vars"],
          description: "pass the real system environment variables to the runtime (default true)",  
          args: {
            isOptional: false,
            name: "include-system-env-vars",
            description: "pass the real system environment variables to the runtime (default true)",
          },
        },
        {
          name: ["--compatibility-mode"],
          description: "JavaScript compiler compatibility mode, \"extended\" or \"base\"",  
          args: {
            isOptional: false,
            name: "compatibility-mode",
            description: "JavaScript compiler compatibility mode, \"extended\" or \"base\"",
          },
        },
        {
          name: ["--type", "-t"],
          description: "override test type, \"js\" or \"archive\"",  
          args: {
            isOptional: false,
            name: "type",
            description: "override test type, \"js\" or \"archive\"",
          },
        },
        {
          name: ["--env", "-e"],
          description: "add/override environment variable with VAR=value",  
          args: {
            isOptional: false,
            name: "env",
            description: "add/override environment variable with VAR=value",
          },
        },
        {
          name: ["--no-thresholds"],
          description: "don't run thresholds",  
          args: {
            isOptional: false,
            name: "no-thresholds",
            description: "don't run thresholds",
          },
        },
        {
          name: ["--no-summary"],
          description: "don't show the summary at the end of the test",  
          args: {
            isOptional: false,
            name: "no-summary",
            description: "don't show the summary at the end of the test",
          },
        },
        {
          name: ["--summary-export"],
          description: "output the end-of-test summary report to JSON file",  
          args: {
            isOptional: false,
            name: "summary-export",
            description: "output the end-of-test summary report to JSON file",
          },
        },
        {
          name: ["--out", "-o"],
          description: "uri for an external metrics database",  
          args: {
            isOptional: false,
            name: "out",
            description: "uri for an external metrics database",
          },
        },
        {
          name: ["--linger","-l"],
          description: "keep the API server alive past test end",  
          args: {
            isOptional: false,
            name: "linger",
            description: "keep the API server alive past test end",
          },
        },
        {
          name: ["--no-usage-report"],
          description: "don't send anonymous stats to the developers",  
          args: {
            isOptional: false,
            name: "no-usage-report",
            description: "don't send anonymous stats to the developers",
          },
        },
        
      ],
    },
  ],
  options: [
    {
      name: ["-v", "--verbose"],
      description: "enable verbose logging",
    },
    {
      name: ["-q", "--quiet"],
      description: "disable progress updates",
    },
    {
      name: ["-h", "--help"],
      description: "help for k6",
    },
    {
      name: ["-a", "--address"],
      description: "address for the REST API server (default \"localhost:6565\")",
      args: {
        isOptional: false,
        name: "address",
        description: "address for the REST API server (default \"localhost:6565\")",
      },
    },
    {
      name: ["--config", "-c"],
      description: "JSON config file",  
      args: {
        isOptional: false,
        name: "config",
        description: "JSON config file",
      },
    },
    {
      name: ["--log-format"],
      description: "log output format",  
      args: {
        isOptional: false,
        name: "log-format",
        description: "log output format",
      },
    },
    {
      name: ["--log-output"],
      description: "change the output for k6 logs",  
      args: {
        isOptional: false,
        name: "log-output",
        description: "change the output for k6 logs",
      },
    },
    {
      name: ["--no-color"],
      description: "disable colored output",  
      args: {
        isOptional: false,
        name: "no-color",
        description: "disable colored output",
      },
    },
  ],
};

export default completionSpec;