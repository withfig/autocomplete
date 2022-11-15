const authOptions: Fig.Option[] = [
  {
    name: ["--pass", "-p"],
    description:
      "Database authentication password to use when connecting [default: root]",
    args: {
      name: "pass",
      description:
        "Database authentication password to use when connecting [default: root]",
    },
  },
  {
    name: ["--user", "-u"],
    description:
      "Database authentication username to use when connecting [default: root]",
    args: {
      name: "user",
      description:
        "Database authentication username to use when connecting [default: root]",
    },
  },
];

const connectionOptionsAndArgs = (
  state: string,
  preposition: string
): Partial<Fig.Subcommand> => ({
  options: [
    ...authOptions,
    {
      name: ["--conn", "-c"],
      description:
        "Remote database server url to connect to [default: https://cloud.surrealdb.com]",
      args: {
        name: "conn",
        description:
          "Remote database server url to connect to [default: https://cloud.surrealdb.com]",
      },
    },
    {
      name: "--ns",
      description: `The namespace to ${state} the data ${preposition}`,
      isRequired: true,
      args: {
        name: "ns",
        description: `The namespace to ${state} the data ${preposition}`,
      },
    },
    {
      name: "--db",
      description: `The database to ${state} the data ${preposition}`,
      isRequired: true,
      args: {
        name: "db",
        description: `The database to ${state} the data ${preposition}`,
      },
    },
  ],
  args: {
    name: "file",
    description: `Path to the sql file to ${state}`,
  },
});

const completionSpec: Fig.Spec = {
  name: "surreal",
  description:
    "SurrealDB is the ultimate cloud database for tomorrow's applications - https://surrealdb.com/",
  subcommands: [
    {
      name: "help",
      description: "Print this message or the help of the given subcommand(s)",
      args: {
        name: "command",
        isOptional: true,
        template: "help",
        description: "Command to get help for",
      },
    },
    {
      name: "start",
      description: "Start the database server",
      args: {
        name: "path",
        description:
          "Database path used for storing data [env: DB_PATH=] [default: memory]",
        isOptional: true,
      },
      options: [
        {
          name: "--",
          description: "Everything after this is an argument",
        },
        {
          name: "--addr",
          description:
            "The allowed networks for master authentication [env: ADDR=] [default: 127.0.0.1/32]",
          args: {
            name: "addr",
            description:
              "The allowed networks for master authentication [env: ADDR=] [default: 127.0.0.1/32]",
          },
        },
        {
          name: ["--bind", "-b"],
          description:
            "The hostname or ip address to listen for connections on [env: BIND=] [default: 0.0.0.0:8000]",
          args: {
            name: "bind",
            description:
              "The hostname or ip address to listen for connections on [env: BIND=] [default: 0.0.0.0:8000]",
          },
        },
        {
          name: ["--key", "-k"],
          description:
            "Encryption key to use for on-disk encryption [env: KEY=]",
          args: {
            name: "key",
            description:
              "Encryption key to use for on-disk encryption [env: KEY=]",
          },
        },
        {
          name: "--kvs-ca",
          description:
            "Path to the CA file used when connecting to the remote KV store [env: KVS_CA=]",
          args: {
            name: "kvs-ca",
            description:
              "Path to the CA file used when connecting to the remote KV store [env: KVS_CA=]",
          },
        },
        {
          name: "--kvs-crt",
          description:
            "Path to the certificate file used when connecting to the remote KV store [env: KVS_CRT=]",
          args: {
            name: "kvs-crt",
            description:
              "Path to the certificate file used when connecting to the remote KV store [env: KVS_CRT=]",
          },
        },
        {
          name: "--kvs-key",
          description:
            "Path to the private key file used when connecting to the remote KV store [env: KVS_KEY=]",
          args: {
            name: "kvs-key",
            description:
              "Path to the private key file used when connecting to the remote KV store [env: KVS_KEY=]",
          },
        },
        {
          name: ["--log", "-l"],
          description:
            "The logging level for the database server [env: LOG=] [default: info] [possible values: warn, info, debug, trace, full]",
          args: {
            name: "log",
            description:
              "The logging level for the database server [env: LOG=] [default: info] [possible values: warn, info, debug, trace, full]",
            suggestions: ["warn", "info", "debug", "trace", "full"],
          },
        },
        {
          name: ["--pass", "-p"],
          description: "The master password for the database [env: PASS=]",
          args: {
            name: "pass",
            description: "The master password for the database [env: PASS=]",
          },
        },
        {
          name: ["--strict", "-s"],
          description:
            "Whether strict mode is enabled on this database instance [env: STRICT=]",
          args: {
            name: "strict",
            description:
              "Whether strict mode is enabled on this database instance [env: STRICT=]",
          },
        },
        {
          name: ["--user", "-u"],
          description:
            "The master username for the database [env: USER=] [default: root]",
          args: {
            name: "user",
            description:
              "The master username for the database [env: USER=] [default: root]",
          },
        },
        {
          name: "--web-crt",
          description:
            "Path to the certificate file for encrypted client connections [env: WEB_CRT=]",
          args: {
            name: "web-crt",
            description:
              "Path to the certificate file for encrypted client connections [env: WEB_CRT=]",
          },
        },
        {
          name: "--web-key",
          description:
            "Path to the private key file for encrypted client connections [env: WEB_KEY=]",
          args: {
            name: "web-key",
            description:
              "Path to the private key file for encrypted client connections [env: WEB_KEY=]",
          },
        },
      ],
    },
    {
      name: "backup",
      description: "Backup data to or from an existing database",
      args: [
        {
          name: "from",
          description:
            "Path to the remote database or file from which to export",
        },
        {
          name: "into",
          description:
            "Path to the remote database or file into which to import",
        },
      ],
      options: authOptions,
    },
    {
      name: "import",
      description: "Import a SurrealQL script into an existing database",
      ...connectionOptionsAndArgs("import", "into"),
    },
    {
      name: "export",
      description: "Export an existing database as a SurrealQL script",
      ...connectionOptionsAndArgs("export", "from"),
    },
    {
      name: "version",
      description: "Output the command-line tool version information",
    },
    {
      name: "sql",
      description: "Start an SQL REPL in your terminal with pipe support",
      options: [
        ...connectionOptionsAndArgs("export", "from").options,
        {
          name: "--pretty",
          description: "Whether database responses should be pretty printed",
        },
      ],
      args: connectionOptionsAndArgs("export", "from").args,
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Print help information",
    },
  ],
};
export default completionSpec;
