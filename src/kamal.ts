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

const deployOptions: Fig.Option[] = [
  {
    name: ["-P", "--skip_push"],
    description: "Skip image build and push",
  },
];

const logOptions: Fig.Option[] = [
  {
    name: ["--since", "-s"],
    description:
      'Show lines since timestamp\\" (e.g. 2013-01-02T13:23:37Z) or relative (e.g. 42m for 42 minutes)',
  },
  {
    name: ["--lines", "-n"],
    description: "Number of lines to show from each server",
  },
  {
    name: ["--grep", "-g"],
    description:
      "Show lines with grep match only (use this to fetch specific requests by id)",
  },
  {
    name: ["--follow", "-f"],
    description:
      "Follow log on primary server (or specific host set by --hosts)",
  },
];

const baseOptions: Fig.Option[] = [
  { name: ["--verbose", "-v"], description: "Detailed logging" },
  { name: ["--quiet", "-q"], description: "Minimal logging" },
  {
    name: "--version",
    args: { name: "VERSION" },
    description: "Run commands against a specific app version",
  },

  {
    name: ["--primary", "-p"],
    description: "Run commands only on primary host instead of all",
  },
  {
    name: ["--hosts", "-h"],
    args: { name: "hosts" },
    description:
      "Run commands on these hosts instead of all (separate by comma)",
  },
  {
    name: ["--roles", "-r"],
    args: { name: "roles" },
    description:
      "Run commands on these roles instead of all (separate by comma)",
  },

  {
    name: ["--config_file", "-c"],
    args: { name: "config", default: "config/deploy.yml" },
    description: "Path to config file",
  },
  {
    name: ["-d", "--destination"],
    description: "Specify destination to use",
    args: {
      name: "destination",
      description: "Destination to use",
      generators: destinationGenerator,
    },
  },
  { name: ["--skip_hooks", "-H"], description: "Don't run hooks" },
];

// ------------------------ COMMANDS ------------------------

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
        suggestions: [
          { name: "all", displayName: 'Use "all" to boot all accessories' },
        ],
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
    {
      name: "restart",
      description: "Restart existing accessory container on host",
      args: {
        name: "name", // TODO: this can be autocompleted by parsing the config
      },
    },
    {
      name: "details",
      description:
        "Show details about accessory on host (use NAME=all to show all accessories)",
      args: {
        name: "name",
        suggestions: [
          { name: "all", displayName: 'Use "all" to boot all accessories' },
        ],
      },
    },
    {
      name: "exec",
      description: "Execute a custom command on servers",
      args: [
        {
          name: "name",
        },
        {
          name: "CMD",
        },
      ],
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
      description: "Show log lines from accessory on host",
      options: logOptions,
    },
    {
      name: "status",
      description: "Show status of accessory on host",
      args: {
        name: "name", // TODO: this can be autocompleted by parsing the config
      },
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
        suggestions: [
          { name: "all", displayName: 'Use "all" to boot all accessories' },
        ],
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
      description: "Execute a custom command on servers",
      args: { name: "CMD" },
      options: [
        {
          name: ["--interactive", "-i"],
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
    { name: "containers", description: "Show app containers on servers" },
    {
      name: "stale_containers",
      description: "Detect app stale containers",
      options: [
        {
          name: ["--stop", "-s"],
          description: "Stop the stale containers found",
        },
      ],
    },
    { name: "images", description: "Show app images on servers" },
    {
      name: "logs",
      description:
        "Show log lines from app on servers (use --help to show options)",
      options: logOptions,
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
  description: "Manage Traefik load balancer",
  icon: "🚦",
  subcommands: [
    { name: "boot", description: "Boot Traefik on servers" },
    {
      name: "reboot",
      description:
        "Reboot Traefik on servers (stop container, remove container, start new container)",
      options: [
        {
          name: "--rolling",
          description: `Reboot traefik on hosts in sequence, rather than in parallel`,
        },
      ],
    },
    {
      name: "start",
      description: "Start existing Traefik container on servers",
    },
    { name: "stop", description: "Stop existing Traefik container on servers" },
    {
      name: "restart",
      description: "Restart existing Traefik container on servers",
    },
    {
      name: "details",
      description: "Show details about Traefik container from servers",
    },
    {
      name: "logs",
      description: "Show log lines from Traefik on servers",
      options: logOptions,
    },
    {
      name: "remove",
      description: "Remove Traefik container and image from servers",
    },
    {
      name: "remove_container",
      description: "Remove Traefik container from servers",
      hidden: true,
    },
    {
      name: "remove_image",
      description: "Remove Traefik image from servers",
      hidden: true,
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
  ],
};

const lockSubcommands: Fig.Subcommand = {
  name: "lock",
  description: "Manage the deploy lock",
  icon: "🔒",
  subcommands: [
    {
      name: "status",
      description: "Report lock status",
    },
    {
      name: "acquire",
      description: "Acquire the deploy lock",
      options: [
        {
          name: ["message", "m"],
          args: {
            name: "message",
            description: "Message to set on the lock",
          },
        },
      ],
    },
    {
      name: "release",
      description: "Release the deploy lock",
    },
  ],
};

const registrySubcommand: Fig.Subcommand = {
  name: "registry",
  description: "Login and -out of the image registry",
  icon: "📦",
  subcommands: [
    { name: "login", description: "Login to registry locally and remotely" },
    { name: "logout", description: "Log out of registry remotely" },
  ],
};

const pruneSubcommand: Fig.Subcommand = {
  name: "prune",
  icon: "🧹",
  description: "Prune old application images and containers",
  subcommands: [
    { name: "all", description: "Prune unused images and stopped containers" },
    { name: "images", description: "Prune unused images" },
    {
      name: "containers",
      description: "Prune stopped containers, except last 5",
    },
  ],
};

const buildSubcommand: Fig.Subcommand = {
  name: "build",
  description: "Build application image",
  icon: "🏗️",
  subcommands: [
    {
      name: "deliver",
      description:
        "Build app and push app image to registry then pull image on servers",
    },
    {
      name: "push",
      description: "Build and push app image to registry",
    },
    {
      name: "pull",
      description: "Pull app image from registry onto servers",
    },
    {
      name: "create",
      description: "Create a build setup",
    },
    {
      name: "remove",
      description: "Remove build setup",
    },
    {
      name: "details",
      description: "Show build setup",
    },
  ],
};

const rootCommands: Fig.Subcommand[] = [
  {
    name: "setup",
    icon: "🛠️",
    description: "Setup all accessories and deploy app to servers",
  },
  {
    name: "destinations",
    description: "List all destinations",
    options: [
      {
        name: ["--json", "-j"],
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
      // TODO: This can be autocompleted by doing `bin/kamal app containers` and parsing output
    },
  },
  {
    name: "details",
    icon: "🔍",
    description: "Show details about all containers",
  },
  {
    name: "audit",
    icon: "🔍",
    description: "Show audit log from servers",
  },
  {
    name: "config",
    description: "Show combined config (including secrets!)",
  },
  {
    name: "init",
    icon: "🆕",
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
      {
        // FIXME: REQUIRES MY FORK since it's not yet merged
        hidden: true,

        name: "template",
        description: "Template to use",
        args: { name: "template", template: "filepaths" },
      },
    ],
  },
  {
    name: "remove",
    description:
      "Remove Traefik, app, accessories, and registry session from servers",
    icon: "🗑️",
    options: [
      {
        name: ["--confirmed", "-y"],
        description: "Proceed without confirmation question",
      },
    ],
  },
  {
    name: "version",
    description: "Show Kamal version",
  },

  // mounted subcommands

  accessorySubcommand,
  appSubcommand,
  buildSubcommand,
  {
    name: "healthcheck",
    description: "Healthcheck application",
    subcommands: [
      { name: "perform", description: "Health check current app version" },
    ],
  },
  lockSubcommands,
  pruneSubcommand,
  registrySubcommand,
  {
    name: "server",
    description: "Bootstrap servers with curl and Docker",
    subcommands: [
      { name: "bootstrap", description: "Set up Docker to run Kamal apps" },
    ],
  },
  traefikCommand,
];

const completionSpec: Fig.Spec = {
  name: "kamal",
  description: "Deploy web apps anywhere",
  generateSpec: async (context, executeShellCommand) => {
    // TODO: use logic from this comment https://github.com/withfig/autocomplete/pull/2112#discussion_r1412879317
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
      options: baseOptions,
      subcommands: hasBinKamal
        ? rootCommands
        : rootCommands.map((cmd) =>
            cmd.name === "init" ? { ...cmd, priority: 100 } : cmd
          ),
    };
  },
};

export default completionSpec;
