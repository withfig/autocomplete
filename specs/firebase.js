var completionSpec = {
  name: "firebase",
  description: "CLI Interface for Google Firebase",
  args: {},
  subcommands: [
    {
      name: "login",
      description: "login to firebase",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage info",
        },
        {
          name: ["--reauth"],
          description: "force reauthentication even if already logged in",
        },
        {
          name: ["--no-localhost"],
          description:
            "copy and paste a code instead of starting a local server for authentication",
        },
      ],
    },
    {
      name: "init",
      description: "initialize firebase project",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage info",
        },
      ],
    },
    {
      name: "serve",
      description: "test project on local http",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage info",
        },
        {
          name: ["-p", "--port"],
          insertValue: "-p {cursor}",
          description: "use the given port",
          args: {},
        },
        {
          name: ["-o", "--host"],
          insertValue: "-o {cursor}",
          description: "use the given host",
          args: {},
        },
        {
          name: ["--only"],
          insertValue: "--only {cursor}",
          description:
            "only serve specified targets (valid targets are: hosting, functions)",
          args: {},
        },
        {
          name: ["--except"],
          insertValue: "--except {cursor}",
          description:
            "serve all except specified targets (valid targets are: hosting, functions)",
          args: {},
        },
      ],
    },
    {
      name: "deploy",
      description: "deploy project to firebase server",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage info",
        },
        {
          name: ["-p", "--public"],
          insertValue: "-p {cursor}",
          description:
            "override the Hosting public directory specified in firebase.json",
          args: {},
        },
        {
          name: ["-m", "--message"],
          insertValue: "-m {cursor}",
          description: "use the message",
          args: {},
        },
        {
          name: ["-f", "--force"],
          description:
            "delete Cloud Functions missing from the current working directory without confirmation",
          args: {},
        },
        {
          name: ["--only"],
          insertValue: "--only {cursor}",
          description:
            "only serve specified targets (valid targets are: hosting, functions)",
          args: {},
        },
        {
          name: ["--except"],
          insertValue: "--except {cursor}",
          description:
            "serve all except specified targets (valid targets are: hosting, functions)",
          args: {},
        },
      ],
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Overview of Firebase CLI",
    },
    {
      name: ["-V", "--version"],
      description: "The current Firebase version",
    },
    {
      name: ["-j", "--json"],
      description:
        "output JSON instead of text, also triggers non-interactive mode",
    },
    {
      name: ["--debug"],
      description: "print verbose debug output and keep a debug log file",
    },
  ],
};
