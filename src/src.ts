// See https://github.com/sourcegraph/src-cli

const icon = "https://sourcegraph.com/.assets/img/sourcegraph-mark.svg";

const completionSpec: Fig.Spec = {
  name: "src",
  description: "Interact with Sourcegraph from the command line",
  subcommands: [
    {
      name: "search",
      icon,
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
            "Consume results as stream. Streaming search only supports a subset of flags and parameters: trace, insecure-skip-verify, display, json",
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
      icon,
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
      icon,
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
      icon,
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
      icon,
      description: "'src config' helps you configure 'src'",
      subcommands: [
        {
          name: "edit",
          description: "Edit config",
        },
        {
          name: "get",
          description: "Get configs",
        },
        {
          name: "list",
          description: "List configs",
        },
      ],
    },
    {
      name: "extsvc",
      icon,
      description:
        "Edit or view external service configuration on the Sourcegraph instance",
      subcommands: [
        {
          name: "edit",
          description: "Edit external service configuration",
        },
        {
          name: "list",
          description: "List external service configurations",
        },
      ],
    },
    {
      name: "lsif",
      icon,
      description: "Upload an LSIF dumps",
      subcommands: [
        {
          name: "upload",
          description: "Upload LSIF dump",
        },
      ],
    },
    {
      name: "orgs",
      icon,
      description: "Create, edit, view, or delete organizations and members",
      subcommands: [
        {
          name: "create",
          description: "Create an organization",
        },
        {
          name: "delete",
          description: "Delete an organization",
        },
        {
          name: "get",
          description: "Get an organization",
        },
        {
          name: "list",
          description: "List organizations",
        },
        {
          name: "members",
          description: "List organization members",
        },
      ],
    },
    {
      name: "repos",
      icon,
      description: "View or delete repositories",
      subcommands: [
        {
          name: "delete",
          description: "Delete repository",
        },
        {
          name: "get",
          description: "Get repository",
        },
        {
          name: "list",
          description: "List repositories",
        },
      ],
    },
    {
      name: "serve-git",
      icon,
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
      icon,
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
      icon,
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
