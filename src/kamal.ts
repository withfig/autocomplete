const destinationGenerator: Fig.Generator = {
  script: ["bin/kamal", "destinations", "--json"],
  cache: {
    cacheByDirectory: true,
    strategy: "stale-while-revalidate",
    ttl: 30,
  },
  postProcess: function (out) {
    try {
      return JSON.parse(out).map((destination: string) => ({
        name: destination,
      }));
    } catch (e) {
      console.error(e);
      return [];
    }
  },
};

const destinationOption: Fig.Option = {
  name: ["-d", "--destination"],
  description: "Specify destination to use",
  args: {
    name: "destination",
    description: "Destination to use",
    generators: destinationGenerator,
  },
};

const deployOptions: Fig.Option[] = [
  destinationOption,
  {
    name: ["-P", "--skip_push"],
    description: "Skip image build and push",
  },
];

const accessorySubcommand: Fig.Subcommand = {
  name: "accessory",
  description: "Manage accessories (db/redis/search)",
  subcommands: [
    {
      name: "boot",
      description:
        "Boot new accessory service on host (use NAME=all to boot all accessories)",
      args: {
        name: "name", // TODO: this can be autocompleted by parsing the config
      },
    },
    {
      name: "upload",
      description: "Upload accessory files to host",
      args: {
        name: "name", // TODO: this can be autocompleted by parsing the config
      },
    },
    {
      name: "directories",
      description: "Create accessory directories on host",
      hidden: true,
      args: {
        name: "name", // TODO: this can be autocompleted by parsing the config
      },
    },
    {
      name: "reboot",
      description:
        "Reboot existing accessory on host (stop container, remove container, start new container)",
      args: {
        name: "name", // TODO: this can be autocompleted by parsing the config
      },
    },
    {
      name: "start",
      description: "Start existing accessory container on host",
      args: {
        name: "name", // TODO: this can be autocompleted by parsing the config
      },
    },
    {
      name: "stop",
      description: "Stop existing accessory container on host",
      args: {
        name: "name", // TODO: this can be autocompleted by parsing the config
      },
    },
    //   desc "stop [NAME]", "Stop existing accessory container on host"
    {
      name: "restart",
      description: "Restart existing accessory container on host",
      args: {
        name: "name", // TODO: this can be autocompleted by parsing the config
      },
    },
    //   desc "restart [NAME]", "Restart existing accessory container on host"
    {
      name: "status",
      description: "Show status of accessory on host",
      args: {
        name: "name", // TODO: this can be autocompleted by parsing the config
      },
    },
    //   desc "details [NAME]", "Show details about accessory on host (use NAME=all to show all accessories)"
    {
      name: "exec",
      description:
        "Execute a custom command on servers (use --help to show options)",
      options: [
        {
          name: ["-i", "--interactive"],
          description:
            "Execute command over ssh for an interactive shell (use for console/bash)",
        },
        {
          name: "--reuse",
          description:
            "Reuse currently running container instead of starting a new one",
        },
      ],
    },
    {
      name: "logs",
      description:
        "Show log lines from accessory on host (use --help to show options)",
      options: [
        {
          name: ["-s", "--since"],
          description:
            "Show logs since timestamp (e.g. 2013-01-02T13:23:37Z) or relative (e.g. 42m for 42 minutes)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: ["-n", "--lines"],
          description: "Number of log lines to pull from each server",
          args: {
            name: "number",
            default: "100",
          },
        },
        {
          name: ["-g", "--grep"],
          description:
            "Show lines with grep match only (use this to fetch specific requests by id)",
          args: {
            name: "pattern",
          },
        },
        {
          name: ["-f", "--follow"],
          description:
            "Follow logs on primary server (or specific host set by --hosts)",
        },
      ],
    },
    {
      name: "remove",
      description:
        "Remove accessory container, image and data directory from host",
      options: [
        {
          name: ["-y", "--confirmed"],
          description: "Proceed without confirmation question",
        },
      ],
      args: {
        name: "name", // TODO: this can be autocompleted by parsing the config
        description: "Use NAME=all to remove all accessories",
      },
    },
    {
      name: "remove_container",
      hidden: true,
      description: "Remove accessory container from host",
      args: {
        name: "name", // TODO: this can be autocompleted by parsing the config
      },
    },
    {
      name: "remove_image",
      hidden: true,
      description: "Remove accessory image from host",
      args: {
        name: "name", // TODO: this can be autocompleted by parsing the config
      },
    },
    {
      name: "remove_service_directory",
      hidden: true,
      description:
        "Remove accessory directory used for uploaded files and data directories from host",
      args: {
        name: "name", // TODO: this can be autocompleted by parsing the config
      },
    },
  ],
};

const appSubcommand: Fig.Subcommand = {
  name: "app",
  description: "Manage application",

  subcommands: [
    {
      name: "boot",
      description: "Boot app on servers (or reboot app if already running)",
    },
    { name: "start", description: "Start existing app container on servers" },
    { name: "stop", description: "Stop app container on servers" },
    { name: "details", description: "Show details about app containers" },
    {
      name: "exec",
      description:
        "Execute a custom command on servers (use --help to show options)",
      args: { name: "CMD" },
      options: [
        {
          name: ["interactive", "-i"],
          description:
            "Execute command over ssh for an interactive shell (use for console/bash)",
        },
        {
          name: "reuse",
          description:
            "Reuse currently running container instead of starting a new one",
        },
      ],
    },
    { name: "containers", description: "Show app containers on servers" },
    {
      name: "stale_containers",
      description: "Detect app stale containers",
      options: [
        {
          name: ["stop", "-s"],
          description: "Stop the stale containers found",
        },
      ],
    },
    { name: "images", description: "Show app images on servers" },
    {
      name: "logs",
      description:
        "Show log lines from app on servers (use --help to show options)",
      options: [
        {
          name: ["since", "-s"],
          description:
            'Show lines since timestamp\\" (e.g. 2013-01-02T13:23:37Z) or relative (e.g. 42m for 42 minutes)',
        },
        {
          name: ["lines", "-n"],
          description: "Number of lines to show from each server",
        },
        {
          name: ["grep", "-g"],
          description:
            "Show lines with grep match only (use this to fetch specific requests by id)",
        },
        {
          name: ["follow", "-f"],
          description:
            "Follow log on primary server (or specific host set by --hosts)",
        },
      ],
    },
    {
      name: "remove",
      description: "Remove app containers and images from servers",
    },
    {
      name: "remove_container",
      description: "Remove app container with given version from servers",
      hidden: true,
      args: { name: "VERSION" },
    },
    {
      name: "remove_containers",
      description: "Remove all app containers from servers",
      hidden: true,
    },
    {
      name: "remove_images",
      description: "Remove all app images from servers",
      hidden: true,
    },
    {
      name: "version",
      description: "Show app version currently running on servers",
    },
  ],
};

const traefikCommand: Fig.Subcommand = {
  name: "traefik",
  description: "Manage Traefik",
  icon: "🚦",

  subcommands: [
    { name: "boot", description: "Boot Traefik on servers" },
    {
      name: "details",
      description: "Show details about Traefik container from servers",
    },
    {
      name: "help",
      description: "Describe subcommands or one specific subcommand",
      args: {
        name: "subcommand",
        suggestions: [
          { name: "boot" },
          { name: "details" },
          { name: "help" },
          { name: "logs" },
          { name: "reboot" },
          { name: "remove" },
          { name: "restart" },
          { name: "start" },
          { name: "stop" },
        ],
      },
    },
    { name: "logs", description: "Show log lines from Traefik on servers" },
    {
      name: "reboot",
      description:
        "Reboot Traefik on servers (stop container, remove container, start new container)",
    },
    {
      name: "remove",
      description: "Remove Traefik container and image from servers",
    },
    {
      name: "restart",
      description: "Restart existing Traefik container on servers",
    },
    {
      name: "start",
      description: "Start existing Traefik container on servers",
    },
    { name: "stop", description: "Stop existing Traefik container on servers" },
  ],
};

const rootCommands: Fig.Subcommand[] = [
  {
    name: "setup",
    description: "Setup all accessories and deploy app to servers",
  },
  {
    name: "destinations",
    description: "List all destinations",
    options: [
      {
        name: "--json",
        description: "Output as JSON",
      },
    ],
  },
  {
    name: "deploy",
    description: "Deploy your app to a destination",
    icon: "🚀",
    priority: 80,
    options: deployOptions,
  },
  {
    name: "redeploy",
    description:
      "Deploy app to servers without bootstrapping servers, starting Traefik, pruning, and registry login",
    icon: "🚀",
    options: deployOptions,
  },
  {
    name: "rollback",
    description: "Rollback app to VERSION",
    icon: "↩️",
    args: {
      name: "version",
    },
  },
  {
    name: "details",
    description: "Show details about all containers",
  },
  {
    name: "audit",
    description: "Show audit log from servers",
  },
  {
    name: "config",
    description: "Show combined config (including secrets!)",
  },
  {
    name: "init",
    description: "Create config stub in config/deploy.yml and env stub in .env",
    options: [
      {
        name: "bundle",
        description: "Add Kamal to the Gemfile and create a bin/kamal binstub",
      },
    ],
  },
  {
    name: "envify",
    description:
      "Create .env by evaluating .env.erb (or .env.staging.erb -> .env.staging when using -d staging)",
    options: [
      // FIXME: REQUIRES MY FORK
      {
        name: "template",
        description: "Template to use",
        args: { name: "template", template: "filepaths" },
      },
    ],
  },
  {
    name: "version",
    description: "Show Kamal version",
  },
  accessorySubcommand,
  appSubcommand,
  traefikCommand,
  {
    name: "lock",
    subcommands: [
      {
        name: "release",
      },
    ],
  },
];

const completionSpec: Fig.Spec = {
  name: "kamal",
  description: "Deploy web apps anywhere",
  generateSpec: async (context, executeShellCommand) => {
    const hasBinKamal =
      (
        await executeShellCommand({
          command: "bash",
          args: [
            "-c",
            `while [ ! -f "$PWD/bin/kamal" ] && [ "$PWD" != "/" ]; do cd ..; done; [ -f "$PWD/bin/kamal" ] && echo "true" || echo "false"`,
          ],
        })
      ).stdout == "true";

    return {
      name: "kamal",
      // if it has "bin/kamal" file show all commands
      options: [destinationOption],
      subcommands: hasBinKamal
        ? rootCommands
        : rootCommands.map((cmd) =>
            cmd.name === "init" ? { ...cmd, priority: 100 } : cmd
          ),
    };
  },
};

export default completionSpec;
