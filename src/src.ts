const completionSpec: Fig.Spec = {
  name: "src",
  description: "",
  subcommands: [
    {
      name: "search",
      description: "Run a code search",
      subcommands: [
        {
          name: "my_nested_subcommand",
          description:
            "Nested subcommand, example usage: 'src my_subcommand my_nested_subcommand'",
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
          description:
            "Log the trace ID for requests See https://docs.sourcegraph.com/admin/observability/tracing",
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
