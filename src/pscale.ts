const authOptions: Fig.Option[] = [
  {
    name: "--client-id",
    description: "The client ID for the PlanetScale CLI application",
  },
  {
    name: "--client-secret",
    description: "The client ID for the PlanetScale CLI application",
  },
];

const databaseOption: Fig.Option = {
  name: "--database",
  description: "The database this project is using",
  args: {},
};

const forceOption: (arg0: string) => Fig.Option = (target: string) => {
  return {
    name: "--force",
    description: `Delete a ${target} without confirmation`,
  };
};

const helpOption: Fig.Option = {
  name: ["--help", "-h"],
  description: "Show help",
};

const localAddrOption: Fig.Option = {
  name: "--local-addr",
  description:
    "Local address to bind and listen for connections. By default the proxy binds to 127.0.0.1 with a random port",
  args: {},
};

const orgOption: Fig.Option = {
  name: "--org",
  description: "The organization for the current user",
  args: {},
};

const portOption: Fig.Option = {
  name: "--port",
  description: 'Local port to bind and listen for connections (default "3306")',
  args: {},
};

const regionOption: Fig.Option = {
  name: "--region",
  description: "Region for the database",
};

const remoteAddrOption: Fig.Option = {
  name: "--remote-addr",
  description:
    "PlanetScale Database remote network address. By default the remote address is populated automatically from the PlanetScale API",
  args: {},
};

const webOption: Fig.Option = {
  name: "--web",
  description: "Open in web browser",
};

const globalOptions: Fig.Option[] = [
  helpOption,
  {
    name: "--api-token",
    description:
      "The API token to use for authenticating against the PlanetScale API",
    args: {},
  },
  {
    name: "--api-url",
    description:
      'The base URL for the PlanetScale API. (default "https://api.planetscale.com/")',
    args: {},
  },
  {
    name: "--config",
    description:
      "Config file (default is $HOME/.config/planetscale/pscale.yml)",
    args: {},
  },
  {
    name: "--debug",
    description: "Enable debug mode",
  },
  {
    name: ["--format", "-f"],
    description:
      'Show output in a specific format. Possible values: [human, json, csv] (default "human")',
    args: {},
  },
  {
    name: "--no-color",
    description: "Disable color output",
  },
  {
    name: "--service-token",
    description: "Service Token for authenticating",
    args: {},
  },
  {
    name: "--service-token-name",
    description: "The Service Token name for authenticating",
    args: {},
  },
];

const completionSpec: Fig.Spec = {
  name: "pscale",
  description:
    "Pscale is a CLI library for communicating with PlanetScale's API",
  subcommands: [
    {
      name: "audit-log",
      description: "List audit logs",
      options: [...globalOptions],
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List all audit logs of an organization",
        },
      ],
    },
    {
      name: "auth",
      description: "Login and logout via the PlanetScale API",
      options: [...globalOptions],
      subcommands: [
        {
          name: "login",
          description: "Authenticate with the PlanetScale API",
          options: [...authOptions, ...globalOptions],
        },
        {
          name: "logout",
          description: "Log out of the PlanetScale API",
          options: [...authOptions, ...globalOptions],
        },
      ],
    },
    {
      name: "backup",
      description: "Create, list, show, and delete branch backups",
      options: [...globalOptions],
      subcommands: [
        {
          name: ["create", "b"],
          description: "Backup a branch's data and schema",
          options: [...globalOptions],
          args: [{}, {}],
        },
        {
          name: ["delete", "rm"],
          description: "Delete a branch backup",
          options: [...globalOptions],
          args: [{}, {}, {}],
        },
        {
          name: ["list", "ls"],
          description: "List all backups of a branch",
          options: [...globalOptions],
          args: [{}, {}],
        },
        {
          name: "restore",
          description: "Restore a backup to a new branch",
          options: [...globalOptions],
          args: [{}, {}, {}],
        },
        {
          name: "show",
          description: "Show a specific backup of a branch",
          options: [...globalOptions],
          args: [{}, {}, {}],
        },
      ],
    },
    {
      name: "branch",
      description: "Create, delete, diff, and manage branches",
      options: [...globalOptions],
      subcommands: [
        {
          name: ["create", "b"],
          description: "Create a new branch from a database",
          options: [
            ...globalOptions,
            { name: "--from", description: "Branch to be created from" },
            regionOption,
            {
              name: "--restore",
              description: "Backup to restore into the branch",
            },
            {
              name: ["--web", "-w"],
              description: "Create a branch in your web browser",
            },
          ],
          args: [{}, {}],
        },
        {
          name: ["delete", "rm"],
          description: "Delete a branch from a database",
          options: [...globalOptions, forceOption("branch")],
          args: [{}, {}],
        },
        {
          name: "diff",
          description: "Show the diff of a branch",
          options: [...globalOptions, webOption],
          args: [{}, {}],
        },
        {
          name: ["list", "ls"],
          description: "List all branches of a database",
          options: [
            ...globalOptions,
            { name: "--web", description: "List branches in your web browser" },
          ],
          args: {},
        },
        {
          name: ["promote", "p"],
          description: "Promote a new branch from a database",
          options: [...globalOptions],
          args: [{}, {}],
        },
        {
          name: "refresh-schema",
          description: "Refresh the schema for a database branch",
          options: [...globalOptions],
          args: [{}, {}],
        },
        {
          name: "schema",
          description: "Show the schema of a branch",
          options: [...globalOptions, webOption],
          args: [{}, {}],
        },
        {
          name: "show",
          description: "Show a specific branch of a database",
          options: [...globalOptions, webOption],
          args: [{}, {}],
        },
        {
          name: "switch",
          description:
            "Switches the current project to use the specified branch",
          options: [
            ...globalOptions,
            {
              name: "--create",
              description:
                "If enabled, will automatically create the branch if it does not exist",
            },
            databaseOption,
            {
              name: "--parent-branch",
              description:
                'Parent branch to inherit from if a new branch is being created (default "main")',
              args: {},
            },
          ],
        },
      ],
    },
    {
      name: "completion",
      description: "Generate completion script for your shell",
      options: [webOption, helpOption, ...globalOptions],
    },
    {
      name: "connect",
      description:
        "Create a secure connection to a database and branch for a local client",
      args: [{}, {}],
      options: [
        helpOption,
        {
          name: "--execute",
          description:
            "Run this command after successfully connecting to the database",
          args: {},
        },
        {
          name: "--execute-env-url",
          description:
            'Environment variable name that contains the exposed Database URL. (default "DATABASE_URL")',
          args: {},
        },
        {
          name: "--execute-protocol",
          description:
            'Protocol for the exposed URL (by default DATABASE_URL) value in execute (default "mysql2")',
          args: {},
        },
        {
          name: "--host",
          description:
            'Local host to bind and listen for connections (default "127.0.0.1")',
          args: {},
        },
        orgOption,
        portOption,
        remoteAddrOption,
        ...globalOptions,
      ],
    },
    {
      name: ["database", "db"],
      description: "Create, read, delete, and dump/restore databases",
      options: [orgOption, ...globalOptions],
      subcommands: [
        {
          name: "create",
          description: "Create a database instance",
          options: [
            {
              name: "--notes",
              description: "Notes for the database",
              args: {},
            },
            regionOption,
            webOption,
            ...globalOptions,
          ],
          args: {},
        },
        {
          name: ["delete", "rm"],
          description: "Delete a database instance",
          options: [forceOption("database"), ...globalOptions],
          args: {},
        },
        {
          name: "dump",
          description: "Backup and dump your database",
          args: [{}, {}],
          options: [
            ...globalOptions,
            localAddrOption,
            {
              name: "--output",
              description:
                "Output director of the dump. By default the dump is stored to a folder in the current directory",
              args: {},
            },
            {
              name: "--tables",
              description:
                "Comma separated string of tables to dump. By default all tables are dumped",
              args: {},
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List databases",
          options: [...globalOptions, webOption],
        },
        {
          name: "restore-dump",
          description: "Restore your database from a local dump directory",
          args: [{}, {}],
          options: [
            {
              name: "--dir",
              description:
                "Directory that contains the files to be used for restoration (required)",
              args: {},
            },
            localAddrOption,
            ...globalOptions,
          ],
        },
        {
          name: "show",
          description: "Retrieve information about a database",
          args: {},
          options: [...globalOptions, webOption],
        },
      ],
    },
    {
      name: ["deploy-request", "dr"],
      description: "Create, review, diff, and manage deploy requests",
      subcommands: [
        {
          name: "close",
          description: "Close a deploy request",
          args: [{}, {}],
          options: [...globalOptions],
        },
        {
          name: "create",
          description: "Create a deploy request from a branch",
          args: [{}, {}],
          options: [
            {
              name: "--deploy-to",
              description:
                "Branch to deploy the branch. By default it's set to 'main' (default \"main\")",
              args: {},
            },
            ...globalOptions,
          ],
        },
        {
          name: "deploy",
          description: "Deploy a specific deploy request",
          args: [{}, {}],
          options: [...globalOptions],
        },
        {
          name: "diff",
          description: "Show the diff of a deploy request",
          args: [{}, {}],
          options: [webOption, ...globalOptions],
        },
        {
          name: ["list", "ls"],
          description: "List all deploy requests for a database",
          args: {},
          options: [webOption, ...globalOptions],
        },
        {
          name: "review",
          description: "Review a deploy request (approve, comment, etc...)",
          args: [{}, {}],
          options: [
            {
              name: "--approve",
              description: "Approve a deploy request",
            },
            {
              name: "--comment",
              description: "Comment on a deploy request",
              args: {},
            },
            ...globalOptions,
          ],
        },
        {
          name: "show",
          description: "Show a specific deploy request",
          args: [{}, {}],
          options: [webOption, ...globalOptions],
        },
      ],
      options: [...globalOptions, orgOption],
    },
    {
      name: "help",
      description: "Help about any command",
    },
    {
      name: "org",
      description: "List, show, and switch organizations",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List the currently active organizations",
          options: [...globalOptions],
        },
        {
          name: "show",
          description: "Display the currently active organization",
          args: {},
          options: [...globalOptions],
        },
        {
          name: "switch",
          description: "Switch the currently active organization",
          args: {},
          options: [
            {
              name: "--save-config",
              description:
                "Path to store the organization. By default the configuration is deducted automatically based on where pscale is executed",
              args: {},
            },
            ...globalOptions,
          ],
        },
      ],
      options: [...globalOptions],
    },
    {
      name: "password",
      description: "Create, list, and delete branch passwords",
      options: [orgOption, ...globalOptions],
      subcommands: [
        {
          name: ["create", "p"],
          description: "Create password to access a branch's data",
          args: [{}, {}, {}],
          options: [...globalOptions],
        },
        {
          name: ["delete", "rm"],
          description: "Delete a branch password",
          args: [{}, {}],
          options: [forceOption("password"), ...globalOptions],
        },
        {
          name: ["list", "ls"],
          description: "List all passwords of a database",
          args: {},
          options: [webOption, ...globalOptions],
        },
      ],
    },
    {
      name: "region",
      description: "List regions",
      options: [...globalOptions],
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List regions",
          options: [...globalOptions],
        },
      ],
    },
    {
      name: "service-token",
      description: "Create, list, and manage access for service tokens",
      options: [orgOption, ...globalOptions],
      subcommands: [
        {
          name: "add-access",
          description: "Ddd access to a service token in the organization",
          args: [{}, {}, {}],
          options: [databaseOption, ...globalOptions],
        },
        {
          name: "create",
          description: "Create a service token for the organization",
          options: [...globalOptions],
        },
        {
          name: "delete",
          description: "Delete an entire service token in an organization",
          args: {},
          options: [...globalOptions],
        },
        {
          name: "delete-access",
          description:
            "Delete access granted to a service token in the organization",
          args: [{}, {}, {}],
          options: [databaseOption, ...globalOptions],
        },
        {
          name: "list",
          description: "List service tokens for the organization",
          options: [...globalOptions],
        },
        {
          name: "show-access",
          description: "Fetch a service token and it's accesses",
          args: {},
          options: [...globalOptions],
        },
      ],
    },
    {
      name: "shell",
      description: "Open a MySQL shell instance to a database and branch",
      args: [{}, {}],
      options: [
        ...globalOptions,
        portOption,
        remoteAddrOption,
        localAddrOption,
      ],
    },
    {
      name: ["signup", "register", "sign-up"],
      description: "Signup for a new PlanetScale account",
      options: [...globalOptions],
    },
  ],
  options: [
    ...globalOptions,
    {
      name: "--version",
      description: "Show pscale version",
    },
  ],
};

export default completionSpec;
