const completionSpec: Fig.Spec = {
  name: "ddosify",
  description: "High-performance load testing tool, written in Golang",
  options: [
    {
      name: "-t",
      description: "Target website URL. Example: https://ddosify.com",
      isRequired: true,
      insertValue: "-t https://{cursor}",
      priority: 90,
      args: {
        name: "URL",
      },
    },
    {
      name: "-n",
      priority: 80,
      description: "Total request count. Default: 100",
      args: {
        name: "RequestCount",
        default: "100",
      },
    },
    {
      name: "-d",
      priority: 80,
      description: "Test duration in seconds. Default: 10",
      args: {
        name: "Duration",
        default: "10",
      },
    },
    {
      name: "-l",
      priority: 70,
      description: "Type of the request. Default: linear",
      args: {
        name: "RequestType",
        default: "linear",
        suggestions: [
          { name: "linear" },
          { name: "incremental" },
          { name: "waved" },
        ],
      },
    },
    {
      name: "-m",
      description: "HTTP Methods. Default: GET",
      args: {
        name: "HTTPMethod",
        default: "GET",
        suggestions: [
          { name: "GET" },
          { name: "POST" },
          { name: "PUT" },
          { name: "DELETE" },
          { name: "HEAD" },
          { name: "PATCH" },
          { name: "OPTIONS" },
        ],
      },
    },
    {
      name: "-b",
      description: "Body for the request",
      insertValue: "-b '{cursor}'",
      args: {
        name: "Body",
      },
    },
    {
      name: "-a",
      description: "Basic authentication",
      args: {
        name: "BasicAuth",
        suggestions: [{ name: "username:password" }],
      },
    },
    {
      name: "-h",
      description: "Headers of the request. You can provide multiple headers",
      insertValue: "-h '{cursor}'",
      isRepeatable: true,
      args: {
        name: "header",
        suggestions: [
          { name: "Content-Type: application/json" },
          { name: "User-Agent: DdosifyLoadGenerator/0.8.1" },
        ],
      },
    },
    {
      name: "-T",
      description: "Timeout in seconds. Default: 5",
      args: {
        name: "Timeout",
        default: "5",
      },
    },
    {
      name: "-P",
      description: "Proxy address",
      args: {
        name: "Proxy",
        suggestions: [{ name: "http://user:pass@proxy_host.com:port" }],
      },
    },
    {
      name: "-o",
      description: "Test result output format. Default: stdout",
      args: {
        name: "OutputFormat",
        default: "stdout",
        suggestions: [{ name: "stdout" }, { name: "stdout-json" }],
      },
    },
    {
      name: "--config",
      description:
        "Config file of the load test i.e example_ddosify_config.json",
      args: {
        name: "ConfigFile",
      },
    },
    {
      name: "--version",
      description: "Prints version, git commit, built date (utc)",
    },
    {
      name: "--debug",
      description:
        "Iterates the scenario once and prints curl-like verbose result",
    },
    {
      name: "--help",
      description: "Prints CLI flags",
    },
  ],
  // Only uncomment if ddosify takes an argument
  // args: {}
};
export default completionSpec;
