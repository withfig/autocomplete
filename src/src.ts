const completionSpec: Fig.Spec = {
  name: "src",
  description: "Interact with Sourcegraph from the command line",
  subcommands: [
    {
      name: "search",
      description: "Run a code search",
      subcommands: [
        {
          name: "-display",
          description:
            "Limit the number of results that are displayed. Only supported together with stream flag. Statistics continue to report all results",
        },
        {
          name: "-dump-requests",
          description: "Log GraphQL requests and responses to stdout",
        },
        {
          name: "-explain-json",
          description: "Explain the JSON output schema and exit",
        },
        {
          name: "-get-curl",
          description:
            "Print the curl command for executing this query and exit. (WARNING: Includes printing your access token!)",
        },
        {
          name: "-insecure-skip-verify",
          description:
            "Skip validation of TLD certificates against trusted chains",
        },
        {
          name: "-json",
          description: "Whether or not to output results as JSON",
        },
        {
          name: "-less",
          description:
            "Pipe output to `less -R` (only if stdout is terminal, and not json flag)",
        },
        {
          name: "-stream",
          description:
            "Consume results as stream. Streaming search only supports a subset of flags and parameters: trace, insecure-skip-verify, display, json.	",
        },
        {
          name: "-trace",
          description: "Log the trace ID for requests",
        },
        {
          name: "-user-agent-telemetry",
          description:
            "Include the operating system and architecture in the User-Agent sent with requests to Sourcegraph",
        },
      ],
    },
    {
      name: "api",
      description: "Sourcegraph API Access",
      subcommands: [
        {
          name: "-get-curl",
          description:
            "Print the curl command for executing this query and exit (WARNING: includes printing your access token!)",
        },
        {
          name: "-dump-requests",
          description: "Log GraphQL requests and responses to stdout",
        },
        {
          name: "-insecure-skip-verify",
          description:
            "Skip validation of TLS certificates against trusted chains",
        },
        {
          name: "-query",
          description:
            "GraphQL query to execute, e.g. ‘query { currentUser { username } }’ (stdin otherwise)",
        },
        {
          name: "-trace",
          description: "Log the trace ID for requests",
        },
        {
          name: "-user-agent-telemetry",
          description:
            "Include the operating system and architecture in the User-Agent sent with requests to Sourcegraph",
        },
        {
          name: "-vars",
          description:
            "GraphQL query variables to include as JSON string, e.g. ‘{“var”: “val”, “var2”: “val2”}’",
        },
      ],
    },
    {
      name: "login",
      description:
        "'src login' helps you authenticate 'src' to access a Sourcegraph instance with your user credentials",
      subcommands: [
        {
          name: "-dump-requests",
          description: "Log GraphQL requests and responses to stdout",
        },
        {
          name: "-get-curl",
          description:
            "Print the curl command for executing this query and exit (WARNING: includes printing your access token!)",
        },
        {
          name: "-insecure-skip-verify",
          description:
            "Skip validation of TLS certificates against trusted chains",
        },
        {
          name: "-trace",
          description: "Log the trace ID for requests",
        },
        {
          name: "-user-agent-telemetry",
          description:
            "Include the operating system and architecture in the User-Agent sent with requests to Sourcegraph",
        },
      ],
    },
    {
      name: "batch",
      description:
        "'src login' helps you authenticate 'src' to access a Sourcegraph instance with your user credentials",
      subcommands: [
        {
          name: "apply",
          description: "",
        },
        {
          name: "exec",
          description: "",
        },
        {
          name: "new",
          description: "",
        },
        {
          name: "preview",
          description: "",
        },
        {
          name: "repositories",
          description: "",
        },
        {
          name: "validate",
          description: "",
        },
      ],
    },
    {
      name: "config",
      description: "'src config' helps you configure 'src'",
      subcommands: [
        {
          name: "edit",
          description: "",
        },
        {
          name: "get",
          description: "",
        },
        {
          name: "list",
          description: "",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for src",
    },
  ],
  // Only uncomment if src takes an argument
  // args: {}
};
export default completionSpec;
