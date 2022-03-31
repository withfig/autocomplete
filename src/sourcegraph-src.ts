const completionSpec: Fig.Spec = {
  name: "sourcegraph-src",
  description: "Interact with Sourcegraph from the command line",
  subcommands: [
    {
      name: "search",
      description: "Run a code search",
      options: [
        {
          name: "-display",
          description:
            "Limit the number of results that are displayed. Only supported together with stream flag. Statistics continue to report all results",
          dependsOn: ["-stream"],
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
      options: [
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
      options: [
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
        "'Batch gives you a declarative structure for finding and modifying code across all of your repositories",
      subcommands: [
        {
          name: "apply",
          description: "Apply batch",
        },
        {
          name: "exec",
          description: "Execute batch",
        },
        {
          name: "new",
          description: "New batch",
        },
        {
          name: "preview",
          description: "Preview batch",
        },
        {
          name: "repositories",
          description: "Repositories to batch",
        },
        {
          name: "validate",
          description: "Validate batch",
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
    {
      name: "extsvc",
      description:
        "Edit or view external service configuration on the Sourcegraph instance",
      subcommands: [
        {
          name: "edit",
          description: "",
        },
        {
          name: "list",
          description: "",
        },
      ],
    },
    {
      name: "lsif",
      description: "Upload an LSIF dumps",
      subcommands: [
        {
          name: "upload",
          description: "",
        },
      ],
    },
    {
      name: "orgs",
      description: "Create, edit, view, or delete organizations and members",
      subcommands: [
        {
          name: "create",
          description: "",
        },
        {
          name: "delete",
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
        {
          name: "members",
          description: "",
        },
      ],
    },
    {
      name: "repos",
      description: "View or delete organizations",
      subcommands: [
        {
          name: "delete",
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
    {
      name: "serve-git",
      description:
        "By default 'src serve-git' will recursively serve your current directory on the address ':3434'",
      options: [
        {
          name: "-addr",
          description:
            "Address on which to server (end with : for unused port)",
        },
        {
          name: "-list",
          description: "List found repository names",
        },
      ],
    },
    {
      name: "users",
      description: "Create, edit, view, tag, or delete users",
      subcommands: [
        {
          name: "create",
          description: "Create user",
        },
        {
          name: "delete",
          description: "Delete user",
        },
        {
          name: "get",
          description: "Get user",
        },
        {
          name: "list",
          description: "List users",
        },
        {
          name: "tag",
          description: "Tag user",
        },
      ],
    },
    {
      name: "validate",
      description:
        "EXPERIMENTAL: Instance validation provides a quick way to check that a Sourcegraph instance functions properly after a fresh install or an update",
      options: [
        {
          name: "-context",
          description:
            "Comma-separated list of key=value pairs to add to the script execution context",
        },
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
          name: "-secrets",
          description:
            "Path to a file containing key=value lines. The key value pairs will be added to the script context",
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
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for src",
    },
  ],
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  // Only uncomment if src takes an argument
  // args: {}
};
export default completionSpec;
