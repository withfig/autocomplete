const completionSpec: Fig.Spec = {
  name: "watchman",
  description: "A file watching service",
  subcommands: [
    {
      name: "clock",
      description: "Returns the current clock value for a watched root",
      args: {
        name: "path",
        description: "The path to directory",
        template: "folders",
      },
    },
    {
      name: "find",
      description:
        "Finds all files that match the optional list of patterns under the specified dir",
      args: {
        name: "path",
        description: "The path to directory",
        isVariadic: true,
        template: "folders",
      },
    },
    {
      name: "flush-subscriptions",
      description:
        "This is designed to be used by interactive programs that have a background process or daemon maintaining a subscription to Watchman",
    },
    {
      name: "get-config",
      description: "Returns the .watchmanconfig for the root",
      subcommands: [
        {
          name: "path",
          description: "The path to root",
        },
      ],
    },
    {
      name: "get-sockname",
      description: "Get socket path",
    },
    {
      name: "list-capabilities",
      description:
        "Returns the full list of supported capabilities offered by the watchman server",
    },
    {
      name: "log",
      description: "Generates a log line in the watchman log",
      args: {
        name: "level",
        description: "The log level",
        suggestions: ["debug", "error", "off"],
      },
    },
    {
      name: "log-level",
      description:
        "Changes the log level of your connection to the watchman service",
      args: {
        name: "level",
        description: "The log level",
        suggestions: ["debug", "error", "off"],
      },
    },
    {
      name: "query",
      description: "Executes a query against the specified root",
    },
    {
      name: "shutdown-server",
      description:
        "This causes your watchman service to exit with a normal status code",
    },
    {
      name: "since",
      description:
        "Finds all files that were modified since the specified clockspec that match the optional list of patterns",
      args: {
        name: "path",
        description: "The path to directory",
        template: "folders",
      },
    },
    {
      name: "state-enter",
      description:
        "This causes a watch to be marked as being in a particular named state",
    },
    {
      name: "state-leave",
      description:
        "This causes a watch to no longer be marked as being in a particular named state",
    },
    {
      name: "subscribe",
      description:
        "Subscribes to changes against a specified root and requests that they be sent to the client via its connection",
    },
    {
      name: "trigger",
      description: "This will create or replace a trigger",
      args: {
        name: "path",
        description: "The path to directory",
        template: "folders",
      },
    },
    {
      name: "trigger-del",
      description:
        "Deletes a named trigger from the list of registered triggers",
    },
    {
      name: "trigger-list",
      description:
        "Returns the set of registered triggers associated with a root directory",
    },
    {
      name: "unsubscribe",
      description: "Cancels a named subscription against the specified root",
    },
    {
      name: "version",
      description:
        "The version and build information for the currently running watchman service",
    },
    {
      name: "watch-del",
      description: "Removes a watch and any associated triggers",
      args: {
        name: "path",
        description: "The path to directory",
        template: "folders",
      },
    },
    {
      name: "watch-del-all",
      description: "Removes all watches and associated triggers",
    },
    {
      name: "watch-list",
      description: "Returns a list of watched dirs",
    },
    {
      name: "watch-project",
      description:
        "Requests that the project containing the requested dir is watched for changes",
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for watchman",
    },
    {
      name: "--inetd",
      description: "Spawning from an inetd style supervisor",
    },
    {
      name: ["-S", "--no-site-spawner"],
      description: "Don't use the site or system spawner",
    },
    {
      name: ["-v", "--version"],
      description: "Show version number for watchman",
    },
    {
      name: "--named-pipe-path",
      description: "Specify alternate named pipe path",
      requiresSeparator: true,
      args: {
        name: "path",
        description: "The alternate named pipe path",
      },
    },
    {
      name: "-u",
      description: "Specify alternate unix domain socket path",
      args: {
        name: "path",
        description: "The alternate unix domain socket path",
      },
    },
    {
      name: "--unix-listener-path",
      description: "Specify alternate unix domain socket path",
      requiresSeparator: true,
      args: {
        name: "path",
        description: "The alernate unix domain socket path",
      },
    },
    {
      name: "-o",
      description: "Specify the path to logfile",
      args: {
        name: "path",
        description: "The path to logfile",
      },
    },
    {
      name: "--logfile",
      description: "Specify the path to logfile",
      requiresSeparator: true,
      args: {
        name: "path",
        description: "The path to logfile",
      },
    },
    {
      name: "--log-level",
      description: "Set the log level",
      args: {
        name: "level",
        description: "The log level",
        suggestions: ["0", "1", "2"],
      },
    },
    {
      name: "--pidfile",
      description: "Specify path to pidfile",
    },
    {
      name: ["-p", "--persistent"],
      description: "Persist and wait for further responses",
    },
    {
      name: ["-n", "--no-save-state"],
      description: "Don't save state between invocations",
    },
    {
      name: "--statefile",
      description: "Specify path to file to hold watch and trigger state",
      args: {
        name: "path",
        description: "The path to file to hold watch and trigger state",
      },
    },
    {
      name: ["-j", "--json-command"],
      description:
        "Instead of parsing CLI arguments, take a single json object from stdin",
    },
    {
      name: "--output-encoding",
      description: "CLI output encoding",
      requiresSeparator: true,
      args: {
        name: "encoding",
        description: "The output encoding",
        suggestions: ["json", "bser"],
      },
    },
    {
      name: "--server-encoding",
      description: "CLI<->server encoding",
      requiresSeparator: true,
      args: {
        name: "encoding",
        description: "The server encoding",
        suggestions: ["bser", "json"],
      },
    },
    {
      name: ["-f", "--foreground"],
      description: "Run the service in the foreground",
    },
    {
      name: "--no-pretty",
      description: "Don't pretty print JSON",
    },
    {
      name: "--no-spawn",
      description: "Don't try to start the service if it is not available",
    },
    {
      name: "--no-local",
      description:
        "When no-spawn is enabled, don't try to handle request in client mode if service is unavailable",
    },
  ],
};

export default completionSpec;
