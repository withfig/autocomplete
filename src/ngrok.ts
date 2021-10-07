const defaultNgrokOptions: Array<Fig.Option> = [
  {
    description: "Path to log file, 'stdout', 'stderr' or 'false'",
    name: ["--log", "-log"],
    insertValue: "--log={cursor}",
    args: {
      name: "value",
      template: "filepaths",
      suggestions: [
        {
          name: "stdout",
        },
        {
          name: "stderr",
        },
        {
          name: "false",
        },
      ],
    },
  },
  {
    description: "Log record format: 'term', 'logfmt', 'json'",
    name: ["--log-format", "-log-format"],
    insertValue: "--log-format={cursor}",
    args: {
      suggestions: [
        {
          name: "term",
        },
        {
          name: "logfmt",
        },
        {
          name: "json",
        },
      ],
    },
  },
  {
    description: "Logging level",
    name: ["--log-level", "-log-level"],
    insertValue: "--log-level={cursor}",
    args: {
      name: "level",
      suggestions: [
        {
          name: "crit",
        },
        {
          name: "warn",
        },
        {
          name: "error",
        },
        {
          name: "info",
        },
        {
          name: "debug",
        },
      ],
    },
  },
];

const authTokenOption: Fig.Option = {
  description: "Ngrok.com authtoken identifying a user",
  name: ["--authtoken", "-authtoken"],
  insertValue: "--authtoken={cursor}",
  args: {},
};

const regionOption: Fig.Option = {
  description: "Ngrok server region [us, eu, au, ap, sa, jp, in] (default: us)",
  name: ["--region", "-region"],
  insertValue: "--region={cursor}",
  args: {
    suggestions: [
      {
        name: "us",
      },
      {
        name: "eu",
      },
      {
        name: "au",
      },
      {
        name: "ap",
      },
      {
        name: "sa",
      },
      {
        name: "jp",
      },
      {
        name: "in",
      },
    ],
  },
};
const configOptions: Fig.Option = {
  description: "Path to config files; they are merged if multiple",
  name: ["--config", "-config"],
  insertValue: "--config={cursor}",
  args: {
    name: "config file",
    template: "filepaths",
  },
};

const subdomainOption: Fig.Option = {
  description: "Host tunnel on a custom subdomain",
  name: ["--subdomain", "-subdomain"],
  insertValue: "--subdomain={cursor}",
  args: {},
};

const hostOption: Fig.Option = {
  description: "Host tunnel on custom hostname (requires DNS CNAME)",
  name: ["--hostname", "-hostname"],
  insertValue: "--hostname={cursor}",
  args: {},
};

const completionSpec: Fig.Spec = {
  name: "ngrok",
  description: "Tunnel local ports to public URLs and inspect traffic",
  subcommands: [
    {
      name: "help",
      description: "Shows a list of commands or help for one command",
      args: {
        name: "command",
        suggestions: [
          {
            name: "authtoken",
            description: "Save authtoken to configuration file",
          },
          {
            name: "credits",
            description: "Prints author and licensing information",
          },
          {
            name: "http",
            description: "Start an HTTP tunnel",
          },
          {
            name: "start",
            description: "Start tunnels by name from the configuration file",
          },
          {
            name: "tcp",
            description: "Start a TCP tunnel",
          },
          {
            name: "tls",
            description: "Start a TLS tunnel",
          },
          {
            name: "update",
            description: "Update ngrok to the latest version",
          },
          {
            name: "version",
            description: "Print the version string",
          },
          {
            name: "help",
            description: "Shows a list of commands or help for one command",
          },
        ],
      },
    },
    {
      name: "http",
      description: "Start an HTTP tunnel",
      args: {
        name: "host",
        suggestions: [
          {
            name: "8080",
            description: "Port",
          },
        ],
      },
      options: [
        ...defaultNgrokOptions,
        configOptions,
        regionOption,
        authTokenOption,
        hostOption,
        subdomainOption,
        {
          description: "Enforce basic auth on tunnel endpoint, 'user:password'",
          name: ["--auth", "-auth"],
          args: {},
          insertValue: "--auth={cursor}",
        },
        {
          description: "Listen for http, https or both: true/false/both",
          name: ["--bind-tls", "-bind-tls"],
          insertValue: "--bind-tls={cursor}",
          args: {
            name: "true/false/both",
            suggestions: [
              {
                name: "true",
              },
              {
                name: "false",
              },
              {
                name: "both",
              },
            ],
          },
        },
        {
          description:
            "Set Host header; if 'rewrite' use local address hostname",
          name: ["--host-header", "-host-header"],
          insertValue: "--host-header={cursor}",
          args: {
            suggestions: [
              {
                name: "rewrite",
              },
            ],
          },
        },
        {
          description: "Enable/disable http introspection",
          name: ["--introspection", "-introspection"],
          insertValue: "--inspect={cursor}",
          args: {
            suggestions: [
              {
                name: "true",
              },
              {
                name: "false",
              },
            ],
          },
        },
      ],
    },
    {
      name: "authtoken",
      args: {},
      description: "Save authtoken to configuration file",
      options: [...defaultNgrokOptions, configOptions],
    },
    {
      name: "credits",
      description: "Prints author and licensing information",
    },
    {
      name: "start",
      description: "Start tunnels by name from the configuration file",
      args: {
        name: "...tunnels",
        isVariadic: true,
        suggestions: [
          {
            name: "dev",
          },
          {
            name: "web",
          },
          {
            name: "blog",
          },
        ],
      },
      options: [
        ...defaultNgrokOptions,
        configOptions,
        regionOption,
        authTokenOption,
        {
          name: ["--all", "-all"],
          description: "Start all tunnels in the configuration file",
          exclusiveOn: ["--none"],
        },
        {
          name: ["--none", "-none"],
          description: "Start running no tunnels",
          exclusiveOn: ["--all"],
        },
      ],
    },
    {
      name: "tcp",
      description: "Start a TCP tunnel",
      args: {
        name: "port",
        suggestions: [
          {
            name: "22",
          },
        ],
      },
      options: [
        ...defaultNgrokOptions,
        configOptions,
        authTokenOption,
        regionOption,
        {
          name: ["--remote-addr", "-remote-addr"],
          description: "Bind remote address (requires you reserve an address)",
          args: {},
        },
      ],
    },
    {
      name: "tls",
      description: "Start a TLS tunnel",
      args: {
        name: "port",
      },
      options: [
        ...defaultNgrokOptions,
        configOptions,
        authTokenOption,
        regionOption,
        hostOption,
        subdomainOption,
        {
          name: ["--client-cas", "-client-cas"],
          insertValue: "--client-cas={cursor}",
          args: {
            name: "certificate",
            template: "filepaths",
          },
        },
        {
          name: ["--crt", "-crt"],
          insertValue: "--crt={cursor}",
          args: {
            name: "certificate",
            template: "filepaths",
          },
        },
        {
          name: ["--key", "-key"],
          insertValue: "--key={cursor}",
          args: {
            name: "certificate",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "update",
      description: "Update ngrok to the latest version",
      options: [
        ...defaultNgrokOptions,
        {
          name: ["--channel", "-channel"],
          description: "Update channel (stable, beta)",
          args: {
            name: "channel",
            suggestions: [
              {
                name: "stable",
              },
              {
                name: "beta",
              },
            ],
          },
        },
      ],
    },
    {
      name: "version",
      description: "Print the version string",
    },
  ],
};
export default completionSpec;
