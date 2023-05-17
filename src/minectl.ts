const completionSpec: Fig.Spec = {
  name: "minectl",
  description: "Create Minecraft Server on different cloud provider",
  subcommands: [
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      subcommands: [
        {
          name: "bash",
          description: "Generate the autocompletion script for bash",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "fish",
          description: "Generate the autocompletion script for fish",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "powershell",
          description: "Generate the autocompletion script for powershell",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "zsh",
          description: "Generate the autocompletion script for zsh",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
      ],
    },
    {
      name: "create",
      description: "Create an Minecraft Server",
      options: [
        {
          name: ["--filename", "-f"],
          description: "Location of the manifest file",
          args: { name: "filename", template: ["filepaths"] },
        },
        {
          name: ["--wait", "-w"],
          description: "Wait for Minecraft Server is started",
        },
      ],
    },
    {
      name: "delete",
      description: "Delete an Minecraft Server",
      options: [
        {
          name: ["--filename", "-f"],
          description: "Location of the manifest file",
          args: { name: "filename", template: ["filepaths"] },
        },
        {
          name: "--id",
          description: "Contains the server id",
          args: { name: "id" },
        },
        {
          name: ["--yes", "-y"],
          description: "Automatically delete the server",
        },
      ],
    },
    {
      name: "list",
      description: "List all Minecraft Server",
      options: [
        {
          name: ["--provider", "-p"],
          description:
            "The cloud provider - civo|scaleway|do|hetzner|akamai|ovh|equinix|gce|vultr|azure|oci|ionos|aws|vexxhost|multipass|exoscale",
          args: {
            name: "provider",
            suggestions: [
              "civo",
              "scaleway",
              "do",
              "hetzner",
              "linode",
              "ovh",
              "equinix",
              "gce",
              "vultr",
              "azure",
              "oci",
              "ionos",
              "aws",
              "vexxhost",
              "multipass",
              "exoscale",
            ],
          },
        },
        {
          name: ["--region", "-r"],
          description:
            "The region (gce: zone) for your cloud provider - civo|gce",
          args: { name: "region" },
        },
      ],
    },
    {
      name: "plugins",
      description: "Manage your plugins for a specific server",
      options: [
        {
          name: ["--destination", "-d"],
          description: "Plugin destination folder",
          args: { name: "destination", template: ["folders"] },
        },
        {
          name: ["--filename", "-f"],
          description: "Location of the manifest file",
          args: { name: "filename", template: ["filepaths"] },
        },
        {
          name: "--id",
          description: "Contains the server id",
          args: { name: "id" },
        },
        {
          name: ["--plugin", "-p"],
          description: "Location of the plugin",
          args: { name: "plugin", template: ["filepaths"] },
        },
        {
          name: ["--ssh-key", "-k"],
          description: "Specify a specific path for the SSH key",
          args: { name: "ssh-key" },
        },
      ],
    },
    {
      name: "rcon",
      description: "RCON client to your Minecraft server",
      options: [
        {
          name: ["--filename", "-f"],
          description: "Location of the manifest file",
          args: { name: "filename", template: ["filepaths"] },
        },
        {
          name: "--id",
          description: "Contains the server id",
          args: { name: "id" },
        },
      ],
    },
    {
      name: "update",
      description: "Update an Minecraft Server",
      options: [
        {
          name: ["--filename", "-f"],
          description: "Location of the manifest file",
          args: { name: "filename", template: ["filepaths"] },
        },
        {
          name: "--id",
          description: "Contains the server id",
          args: { name: "id" },
        },
        {
          name: ["--ssh-key", "-k"],
          description: "Specify a specific path for the SSH key",
          args: { name: "ssh-key" },
        },
      ],
    },
    { name: "version", description: "Display the clients version information" },
    {
      name: "wizard",
      description:
        "Calls the minectl wizard to create interactively a minectl 🗺 config",
      options: [
        {
          name: ["--output", "-o"],
          description:
            "Output folder for the configuration file for minectl 🗺 (default: ~/.minectl)",
          args: {
            name: "output",
            template: ["folders"],
            suggestCurrentToken: true,
          },
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      subcommands: [
        {
          name: "completion",
          description:
            "Generate the autocompletion script for the specified shell",
          subcommands: [
            {
              name: "bash",
              description: "Generate the autocompletion script for bash",
            },
            {
              name: "fish",
              description: "Generate the autocompletion script for fish",
            },
            {
              name: "powershell",
              description: "Generate the autocompletion script for powershell",
            },
            {
              name: "zsh",
              description: "Generate the autocompletion script for zsh",
            },
          ],
        },
        { name: "create", description: "Create an Minecraft Server" },
        { name: "delete", description: "Delete an Minecraft Server" },
        { name: "list", description: "List all Minecraft Server" },
        {
          name: "plugins",
          description: "Manage your plugins for a specific server",
        },
        { name: "rcon", description: "RCON client to your Minecraft server" },
        { name: "update", description: "Update an Minecraft Server" },
        {
          name: "version",
          description: "Display the clients version information",
        },
        {
          name: "wizard",
          description:
            "Calls the minectl wizard to create interactively a minectl 🗺 config",
        },
      ],
    },
  ],
  options: [
    {
      name: "--headless",
      description:
        "Set this value to if mincetl is called by a CI system. Enables logging and disables human-readable output rendering (default: false)",
      isPersistent: true,
    },
    {
      name: "--log-encoding",
      description: "Set the log encoding: console|json (default: console)",
      isPersistent: true,
      args: {
        name: "log-encoding",
        default: "console",
        suggestions: ["console", "json"],
      },
    },
    {
      name: "--verbose",
      description:
        "Enable verbose logging: debug|info|warn|error|dpanic|panic|fatal",
      isPersistent: true,
      args: {
        name: "verbose",
        suggestions: [
          "debug",
          "info",
          "warn",
          "error",
          "dpanic",
          "panic",
          "fatal",
        ],
      },
    },
    { name: ["--help", "-h"], description: "Display help", isPersistent: true },
  ],
};
export default completionSpec;
