const completionSpec: Fig.Spec = {
  name: "locust",
  description:
    "Locust is an easy to use, scriptable and scalable Python-based performance testing tool",
  options: [
    {
      name: ["-v", "--version"],
      description: "Show program's version number and exit",
    },
    {
      name: ["-h", "--help"],
      description: "Show this help message and exit",
    },
    {
      name: ["-f", "--locustfile"],
      description: "Show program's version number and exit",
      args: {
        name: "files...",
        template: "filepaths",
        isVariadic: true,
        description:
          "Python module to import, e.g. '../other_test.py'. Either a .py file, multiple comma-separated .py files or a package directory. Defaults to 'locustfile'",
      },
    },
    {
      name: "--config",
      description: "Config file path",
      args: {
        name: "files...",
        template: "filepaths",
        isVariadic: true,
        description: "Config file path",
      },
    },
    {
      name: ["-H", "--host"],
      description:
        "Host to load test in the following format: http://10.21.32.33",
    },
    {
      name: ["-u", "--users"],
      description:
        "Peak number of concurrent Locust users. Primarily used together with --headless or --autostart",
    },
    {
      name: ["-r", "--spawn-rate"],
      description:
        "Rate to spawn users at (users per second). Primarily used together with --headless or --autostart",
    },
    {
      name: ["-t", "--run-time"],
      description:
        "Stop after the specified amount of time, e.g. (300s, 20m, 3h, 1h30m, etc.)",
    },
    {
      name: ["-l", "--list"],
      description: "Show list of possible User classes and exit",
    },
    {
      name: "--web-host",
      description:
        "Host to bind the web interface to. Defaults to '*' (all interfaces)",
    },
    {
      name: ["-P", "--web-port"],
      description: "Port on which to run web host",
    },
    {
      name: "--headless",
      description: "Disable the web interface, and start the test immediately",
    },
    {
      name: "--autostart",
      description: "Starts the test immediately (without disabling the web UI)",
    },
    {
      name: "--autoquit",
      description: "Quits Locust entirely, X seconds after the run is finished",
    },
    {
      name: "--web-auth",
      description:
        "Turn on Basic Auth for the web interface. e.g. username:password",
    },
    {
      name: "--tls-cert",
      description:
        "Optional path to TLS certificate to use to serve over HTTPS",
      args: {
        name: "tls-cert",
        description: "Optional path to TLS certificate",
        template: "filepaths",
      },
    },
    {
      name: "--tls-key",
      description:
        "Optional path to TLS private key to use to serve over HTTPS",
      args: {
        name: "tls-key",
        description: "Optional path to TLS private key",
        template: "filepaths",
      },
    },
    {
      name: "--class-picker",
      description:
        "Enable select boxes in the web interface to choose from all available User classes and Shape classes",
    },
  ],
  subcommands: [
    {
      name: "my_subcommand",
      description: "Example subcommand",
      subcommands: [
        {
          name: "my_nested_subcommand",
          description:
            "Nested subcommand, example usage: 'locust my_subcommand my_nested_subcommand'",
        },
      ],
    },
  ],
};
export default completionSpec;
