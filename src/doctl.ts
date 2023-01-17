const DigitalOceanCTLCompletionSpec: Fig.Spec = {
  name: "doctl",
  description: "The official DigitalOcean command line interface (CLI)",
  subcommands: [
    {
      name: "completion",
      description:
        "Configure your terminal's shell so that doctl commands autocomplete when you press the TAB key",
      args: {
        name: "shell",
        suggestions: ["bash", "zsh", "fish"],
      },
    },
    {
      name: "help",
      description: "Display help about commands",
      args: {
        name: "command",
      },
    },
    {
      name: "1-click",
      description:
        "The commands under `doctl 1-click` are for interacting with DigitalOcean 1-Click applications",
      subcommands: [
        {
          name: "list",
        },
      ],
    },
    {
      name: "account",
      description:
        "The subcommands of `doctl account` retrieve information about DigitalOcean accounts",
      subcommands: [
        {
          name: "get",
          description: "Retrieve account profile details",
        },
        {
          name: "ratelimit",
          description: "Retrieve your API usage and the remaining quota",
        },
      ],
    },
    {
      name: "apps",
      description: "Display commands for working with apps",
      subcommands: [
        {
          name: "create",
          description: "Create an app",
        },
        {
          name: "create-deployment",
          description: "Create a deployment",
        },
        {
          name: "delete",
          description: "Deletes an app",
        },
        {
          name: "get",
          description: "Get an app",
        },
        {
          name: "get-deployment",
          description: "Get a deployment",
        },
        {
          name: "list",
          description: "List all apps",
        },
        {
          name: "list-alerts",
          description: "List alerts on an app",
        },
        {
          name: "list-deployments",
          description: "List all deployments",
        },
        {
          name: "list-regions",
          description: "List App Platform regions",
        },
        {
          name: "logs",
          description: "Get logs",
        },
        {
          name: "propose",
          description: "Propose an app spec",
        },
        {
          name: "spec",
          description: "Display commands for working with app specs",
        },
        {
          name: "tier",
          description: "Display commands for working with app tiers",
        },
        {
          name: "update",
          description: "Update an app",
        },
        {
          name: "update-alert-destinations",
          description: "Update alert destinations",
        },
      ],
    },
    {
      name: "auth",
      description: "Display commands for authenticating doctl with an account",
      subcommands: [
        {
          name: "init",
          description: "Initialize doctl to use a specific account",
        },
        {
          name: "list",
          description: "List available authentication contexts",
        },
        {
          name: "remove",
          description: "Remove authentication contexts",
        },
        {
          name: "switch",
          description: "Switches between authentication contexts",
        },
      ],
    },
    {
      name: "balance",
      description: "Display commands for retrieving your account balance",
      subcommands: [
        {
          name: "get",
          description: "Retrieve your account balance",
        },
      ],
    },
    {
      name: "billing-history",
      description: "Display commands for retrieving your billing history",
      subcommands: [
        {
          name: "list",
          description: "Retrieve a paginated billing history for a user",
        },
      ],
    },
    {
      name: "compute",
      description: "Display commands that manage infrastructure",
      subcommands: [
        {
          name: "action",
          description:
            "Display commands for retrieving resource action history",
        },
        {
          name: "cdn",
          description: "Display commands that manage CDNs",
        },
        {
          name: "certificate",
          description:
            "Display commands that manage SSL certificates and private keys",
        },
        {
          name: "domain",
          description: "Display commands that manage domains",
        },
        {
          name: "droplet",
          description: "Manage virtual machines (Droplets)",
        },
        {
          name: "droplet-action",
          description: "Display Droplet action commands",
        },
        {
          name: "firewall",
          description: "Display commands to manage cloud firewalls",
        },
        {
          name: "floating-ip",
          description: "Display commands to manage floating IP addresses",
        },
        {
          name: "floating-ip-action",
          description:
            "Display commands to associate floating IP addresses with Droplets",
        },
        {
          name: "image",
          description: "Display commands to manage images",
        },
        {
          name: "image-action",
          description: "Display commands to perform actions on images",
        },
        {
          name: "load-balancer",
          description: "Display commands to manage load balancers",
        },
        {
          name: "region",
          description: "Display commands to list datacenter regions",
        },
        {
          name: "size",
          description: "List available Droplet sizes",
        },
        {
          name: "snapshot",
          description: "Access and manage snapshots",
        },
        {
          name: "ssh",
          description: "Access a Droplet using SSH",
        },
        {
          name: "ssh-key",
          description: "Display commands to manage SSH keys on your account",
        },
        {
          name: "tag",
          description: "Display commands to manage tags",
        },
        {
          name: "volume",
          description: "Display commands to manage block storage volumes",
        },
        {
          name: "volume-action",
          description: "Display commands to perform actions on a volume",
        },
      ],
    },
    {
      name: "databases",
      description: "Display commands that manage databases",
      subcommands: [
        {
          name: "backups",
          description: "List database cluster backups",
        },
        {
          name: "connection",
          description: "Retrieve connection details for a database cluster",
        },
        {
          name: "create",
          description: "Create a database cluster",
        },
        {
          name: "db",
          description:
            "Display commands for managing individual databases within a cluster",
        },
        {
          name: "delete",
          description: "Delete a database cluster",
        },
        {
          name: "firewalls",
          description:
            "Display commands to manage firewall rules (called `trusted sources` in the control panel) for database clusters",
        },
        {
          name: "get",
          description: "Get details for a database cluster",
        },
        {
          name: "list",
          description: "List your database clusters",
        },
        {
          name: "maintenance-window",
          description:
            "Display commands for scheduling automatic maintenance on your database cluster",
        },
        {
          name: "migrate",
          description: "Migrate a database cluster to a new region",
        },
        {
          name: "pool",
          description: "Display commands for managing connection pools",
        },
        {
          name: "replica",
          description: "Display commands to manage read-only database replicas",
        },
        {
          name: "resize",
          description: "Resize a database cluster",
        },
        {
          name: "sql-mode",
          description:
            "Display commands to configure a MySQL database cluster's SQL modes",
        },
        {
          name: "user",
          description: "Display commands for managing database users",
        },
      ],
    },
    {
      name: "invoice",
      description: "Display commands for retrieving invoices for your account",
      subcommands: [
        {
          name: "csv",
          description: "Download a CSV file of an invoice",
        },
        {
          name: "get",
          description: "Retrieve a list of all the items on an invoice",
        },
        {
          name: "list",
          description: "List all of the invoices for your account",
        },
        {
          name: "pdf",
          description: "Download a PDF file of an invoice",
        },
        {
          name: "summary",
          description: "Get a summary of an invoice",
        },
      ],
    },
    {
      name: "kubernetes",
      description:
        "Displays commands to manage Kubernetes clusters and configurations",
      subcommands: [
        {
          name: "1-click",
          description:
            "Display commands that pertain to kubernetes 1-click applications",
        },
        {
          name: "cluster",
          description: "Display commands for managing Kubernetes clusters",
        },
        {
          name: "options",
          description:
            "List possible option values for use inside Kubernetes commands",
        },
      ],
    },
    {
      name: "monitoring",
      description: "[Beta] Display commands to manage monitoring",
      subcommands: [
        {
          name: "alert",
          description: "Display commands for managing alert policies",
        },
      ],
    },
    {
      name: "projects",
      description: "Manage projects and assign resources to them",
      subcommands: [
        {
          name: "create",
          description: "Create a new project",
        },
        {
          name: "delete",
          description: "Delete the specified project",
        },
        {
          name: "get",
          description: "Retrieve details for a specific project",
        },
        {
          name: "list",
          description: "List existing projects",
        },
        {
          name: "resources",
          description: "Manage resources assigned to a project",
        },
        {
          name: "update",
          description: "Update an existing project",
        },
      ],
    },
    {
      name: "registry",
      description: "Display commands for working with container registries",
      subcommands: [
        {
          name: "create",
          description: "Create a private container registry",
        },
        {
          name: "delete",
          description: "Delete a container registry",
        },
        {
          name: "docker-config",
          description: "Generate a docker auth configuration for a registry",
        },
        {
          name: "garbage-collection",
          description:
            "Display commands for garbage collection for a container registry",
        },
        {
          name: "get",
          description: "Retrieve details about a container registry",
        },
        {
          name: "kubernetes-manifest",
          description: "Generate a Kubernetes secret manifest for a registry",
        },
        {
          name: "login",
          description: "Log in Docker to a container registry",
        },
        {
          name: "logout",
          description: "Log out Docker from a container registry",
        },
        {
          name: "options",
          description: "List available container registry options",
        },
        {
          name: "repository",
          description:
            "Display commands for working with repositories in a container registry",
        },
      ],
    },
    {
      name: "vpcs",
      description: "Display commands that manage VPCs",
      subcommands: [
        {
          name: "create",
          description: "Create a new VPC",
        },
        {
          name: "delete",
          description: "Permanently delete a VPC",
        },
        {
          name: "get",
          description: "Retrieve a VPC",
        },
        {
          name: "list",
          description: "List VPCs",
        },
        {
          name: "update",
          description: "Update a VPC's configuration",
        },
      ],
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Help for doctl",
    },
    {
      name: ["-v", "--verbose"],
      description: "Enable verbose output",
    },
    {
      name: ["-o", "--output"],
      args: {
        name: "format",
        suggestions: ["text", "json"],
        default: "text",
      },
      description: "Desired output format",
    },
    {
      name: "--trace",
      description: "Show a log of network activity while performing a command",
    },
    {
      name: ["-c", "--config"],
      description: 'Specify a custom config file (default "$HOME/config.yaml")',
    },
    {
      name: ["-u", "--api-url"],
      description: "Override default API endpoint",
    },
    {
      name: ["-t", "--access-token"],
      description: "API V2 access token",
    },
    {
      name: "version",
      description: "Show the current version",
    },
  ],
};

export default DigitalOceanCTLCompletionSpec;
