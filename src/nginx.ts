const completionSpec: Fig.Spec = {
  name: "nginx",
  description:
    "Nginx (pronounced ``engine x'') is an HTTP and reverse proxy server, a mail proxy server, and a generic TCP/UDP proxy server.  It is known for its high performance, stability, rich feature set, simple configuration, and low resource consumption",
  args: {
    isVariadic: true,
  },
  options: [
    {
      name: "-c",
      description: "Use an alternative configuration file",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "-e",
      description:
        "Use an alternative error log file.  Special value stderr indicates that the standard error output should be used",
      args: {
        name: "file",
        suggestions: ["stderr"],
      },
    },
    {
      name: "-g",
      description: "Set global configuration directives",
      args: {
        name: "directives",
        description:
          "For all directives visit https://nginx.org/en/docs/dirindex.html",
      },
    },
    {
      name: "-p",
      description: "Set the prefix path.  The default value is %%PREFIX%%",
      args: {
        name: "prefix",
      },
    },
    {
      name: "-q",
      description: "Suppress non-error messages during configuration testing",
    },
    {
      name: "-T",
      description:
        "Same as -t, but additionally dump configuration files to standard output",
    },
    {
      name: "-t",
      description:
        "Do not run, just test the configuration file.  nginx checks the configuration file syntax and then tries to open files referenced in the configuration file",
    },
    {
      name: "-V",
      description:
        "Print the nginx version, compiler version, and configure script parameters",
    },
    {
      name: "-v",
      description: "Print the nginx version",
    },
    {
      name: ["-?", "-h"],
      description: "Print help",
    },
    {
      name: "-s",
      description:
        "Send a signal to the master process.  The argument signal can be one of: stop, quit, reopen, reload",
      args: {
        name: "signal",

        suggestions: [
          {
            name: "stop",
            description: "Sends SIGTERM",
          },
          {
            name: "quit",
            description: "Sends SIGQUIT",
          },
          {
            name: "reopen",
            description: "Sends SIGUSR1",
          },
          {
            name: "reload",
            description: "Sends SIGHUP",
          },
        ],
      },
    },
  ],
};

export default completionSpec;
