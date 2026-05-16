import sshSpec from "./ssh";

const globalOptions: Fig.Option[] = [
  { name: ["-l", "--login"], description: "Remote host login" },
  {
    name: "--proxy",
    description: "SSH proxy address",
    args: {
      name: "Teleport proxy address",
      generators: {
        script: ["tsh", "clusters", "--format=json"],
        postProcess: (out) => JSON.parse(out).map((elm) => elm.cluster_name),
      },
    },
  },
  {
    name: "--user",
    description: "SSH proxy user",
    args: {
      name: "user",
      generators: {
        script: ["tsh", "status", "--format", "json"],
        postProcess: (out) => [JSON.parse(out).active.username],
      },
    },
  },
  {
    name: "--ttl",
    description: "Minutes to live for a SSH session",
    args: { name: "time" },
  },
  {
    name: ["-i", "--identity"],
    description: "Identity file",
    args: { name: "file", template: "filepaths" },
  },
  { name: "--cert-format", description: "SSH certificate format", args: {} },
  {
    name: "--insecure",
    description:
      "Do not verify server's certificate and host name. Use only in test environments",
  },
  {
    name: "--auth",
    description: "Specify the name of authentication connector to use",
    args: {},
  },
  {
    name: "--skip-version-check",
    description: "Skip version checking between server and client",
  },
  { name: ["-d", "--debug"], description: "Verbose logging to stdout" },
  {
    name: ["-k", "--add-keys-to-agent"],
    description:
      "Controls how keys are handled. Valid values are [auto no yes only]",
  },
  {
    name: "--enable-escape-sequences",
    description:
      "Enable support for SSH escape sequences. Type '~?' during an SSH session to list supported sequences. Default is enabled",
  },
  {
    name: "--bind-addr",
    description:
      "Override host:port used when opening a browser for cluster logins",
  },
  { name: ["-J", "--jumphost"], description: "SSH jumphost" },
];

const subcommandOptions: Fig.Option[] = [
  ...globalOptions,
  {
    name: ["-f", "--format"],
    description: "Format output",
    args: {
      name: "format",
      suggestions: ["text", "json", "yaml"],
    },
  },
  { name: ["-q", "--quiet"], description: "Quiet mode" },
];

const completionSpec: Fig.Spec = {
  name: "tsh",
  description: "TSH: Teleport Authentication Gateway Client",
  subcommands: [
    { name: "version", description: "Print the version" },
    {
      name: "ssh",
      description: "Run shell or execute a command on a remote SSH node",
      args: {
        name: "user@hostname",
        description: "Address of remote machine to log into",
        generators: {
          script: ["tsh", "ls", "--format=json"],
          postProcess: (out) => {
            return JSON.parse(out).map((elm) => {
              return {
                name: elm.spec.hostname,
                description: `Access expires: ${elm.metadata.expires}`,
              };
            }); //[{ name: "hello" }];
          },
        },
      },
      options: (sshSpec as Fig.Subcommand).options,
      // Rather than loadspec we will probably just import the ssh spec for all option suggestions and then override argument suggestions with the below
      // loadSpec: "ssh",
    },
    { name: "aws", description: "Access AWS API", options: subcommandOptions },

    {
      name: "apps",
      description: "View and control proxied applications",
      options: subcommandOptions,
      subcommands: [
        {
          name: "ls",
          description: "List available applications",
          options: subcommandOptions,
        },
        {
          name: "login",
          options: subcommandOptions,
          description: "Retrieve short-lived certificate for an app",
        },
        {
          name: "logout",
          description: "Remove app certificate",
          options: subcommandOptions,
        },
        {
          name: "config",
          description: "Print app connection information",
          options: subcommandOptions,
        },
      ],
    },

    {
      name: "proxy",
      options: subcommandOptions,
      description:
        "Run local TLS proxy allowing connecting to Teleport in single-port mode",
      subcommands: [
        {
          name: "ssh",
          options: subcommandOptions,
          description:
            "Start local TLS proxy for ssh connections when using Teleport in single-port mode",
        },
        {
          name: "db",
          options: subcommandOptions,
          description:
            "Start local TLS proxy for database connections when using Teleport in single-port mode",
        },
      ],
    },

    {
      name: "db",
      options: subcommandOptions,
      description: "View and control proxied databases",
      subcommands: [
        {
          name: "ls",
          description: "List all available databases",
          options: subcommandOptions,
        },
        {
          name: "login",
          description: "Retrieve credentials for a database",
          options: subcommandOptions,
        },
        {
          name: "logout",
          description: "Remove database credentials",
          options: subcommandOptions,
        },
        {
          name: "env",
          options: subcommandOptions,
          description:
            "Print environment variables for the configured database",
        },
        {
          name: "config",
          options: subcommandOptions,
          description:
            "Print database connection information. Useful when configuring GUI clients",
        },
        {
          name: "connect",
          description: "Connect   Connect to a database",
          options: subcommandOptions,
        },
      ],
    },

    {
      name: "join",
      description: "Join the active SSH session",
      options: subcommandOptions,
    },
    {
      name: "play",
      description: "Replay the recorded SSH session",
      options: subcommandOptions,
    },
    {
      name: "scp",
      description: "Secure file copy",
      options: subcommandOptions,
    },
    {
      name: "ls",
      description: "List remote SSH nodes",
      options: subcommandOptions,
    },
    {
      name: "clusters",
      description: "List available Teleport clusters",
      options: subcommandOptions,
    },
    {
      name: "login",
      description: "Log in to a cluster and retrieve the session certificate",
      options: subcommandOptions,
    },
    {
      name: "logout",
      description: "Delete a cluster certificate",
      options: subcommandOptions,
    },
    {
      name: "status",
      description:
        "Display the list of proxy servers and retrieved certificates",
      options: subcommandOptions,
    },
    {
      name: "env",
      description:
        "Print commands to set Teleport session environment variables",
      options: subcommandOptions,
    },

    {
      name: "request",
      description: "Manage access requests",
      subcommands: [
        {
          name: "ls",
          description: "List access requests",
          options: subcommandOptions,
        },
        {
          name: "show",
          description: "Show request details",
          options: subcommandOptions,
        },
        {
          name: "new",
          description: "Create a new access request",
          options: subcommandOptions,
        },
        {
          name: "review",
          description: "Review an access request",
          options: subcommandOptions,
        },
      ],
      options: subcommandOptions,
    },

    {
      name: "kube",
      description: "Manage available kubernetes clusters",
      subcommands: [
        {
          name: "ls",
          description: "Get a list of kubernetes clusters",
          options: subcommandOptions,
        },
        {
          name: "login",
          description: "Login to a kubernetes cluster",
          options: subcommandOptions,
        },
        {
          name: "sessions",
          description: "Get a list of active kubernetes sessions",
          options: subcommandOptions,
        },
        {
          name: "exec",
          description: "Execute a command in a kubernetes pod",
          options: subcommandOptions,
        },
        {
          name: "join",
          description: "Join an active Kubernetes session",
          options: subcommandOptions,
        },
      ],
      options: subcommandOptions,
    },

    {
      name: "mfa",
      description: "Manage multi-factor authentication (MFA) devices",
      subcommands: [
        {
          name: "ls",
          description: "Get a list of registered MFA devices",
          options: subcommandOptions,
        },
        {
          name: "add",
          description: "Add a new MFA device",
          options: subcommandOptions,
        },
        {
          name: "rm",
          description: "Remove a MFA device",
          options: subcommandOptions,
        },
      ],
      options: subcommandOptions,
    },

    {
      name: "config",
      description: "Print OpenSSH configuration details",
      options: subcommandOptions,
    },
  ],
  options: globalOptions,
};
export default completionSpec;
