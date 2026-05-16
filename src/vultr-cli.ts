const bareMetalIdArg: Fig.Arg = {
  name: "bareMetalId",
  description: "Bare Metal ID",
};
const backupIdArg: Fig.Arg = {
  name: "backupId",
  description: "Backup ID",
};
const instance: Fig.Arg = {
  name: "instanceID",
  generators: {
    script: ["vultr-cli", "instance", "list"],
    postProcess: (lines) =>
      lines
        .split("\n")
        .slice(1, -3)
        .map((line) => ({
          name: line.split("\t")[0],
          description: line.split("\t").slice(1, -4).join("\t"),
        })),
  },
};

const createOptions: Fig.Option[] = [
  {
    name: ["--os", "-o"],
    description:
      "ID of the operating system that will be installed on the server",
    isRequired: true,
    args: {
      name: "osId",
    },
  },
  {
    name: ["--persistent_pxe", "-x"],
    description: "Enable persistent_pxe",
    args: {
      name: "persistent",
      suggestions: ["true", "false"],
    },
  },
  {
    name: ["--plan", "-p"],
    description: "ID of the plan that the server will subscribe to",
    isRequired: true,
    args: {
      name: "planId",
    },
  },
  {
    name: ["--region", "-r"],
    description: "ID of the region where the server will be created",
    isRequired: true,
    args: {
      name: "regionId",
    },
  },
];
const completionSpec: Fig.Spec = {
  name: "vultr-cli",
  description: "Official command line interface for the Vultr API",
  icon: "https://www.vultr.com/favicon/favicon-32x32.png",
  subcommands: [
    { name: "account", description: "Retrieve information about your account" },
    {
      name: ["apps", "a"],
      description: "Display all available applications",
      subcommands: [{ name: ["list", "l"], description: "List applications" }],
    },
    {
      name: "backups",
      description: "Display backups",
      subcommands: [
        {
          name: "get",
          description: "Get backup",
          args: backupIdArg,
        },
        { name: ["list", "l"], description: "List backups" },
      ],
    },
    {
      name: ["bare-metal", "bm"],
      description: "Bare-metal is used to access bare metal server commands",
      subcommands: [
        {
          name: ["app", "a"],
          description:
            "App is used to access bare metal server application commands",
          subcommands: [
            {
              name: ["change", "c"],
              description: "Change a bare metal server's application",
              args: [
                bareMetalIdArg,
                {
                  name: "appID",
                  description: "Application ID",
                },
              ],
            },
            {
              name: "list",
              description: "Available apps a bare metal server can change to",
              args: bareMetalIdArg,
            },
          ],
        },
        {
          name: ["bandwidth", "b"],
          description: "Get a bare metal server's bandwidth usage",
          args: bareMetalIdArg,
        },
        {
          name: ["create", "c"],
          description: "Create a bare metal server",
          options: createOptions,
        },
        {
          name: ["delete", "destroy"],
          description: "Delete a bare metal server",
          isDangerous: true,
          args: bareMetalIdArg,
        },
        {
          name: "get",
          description: "Get a bare metal server by <bareMetalID>",
          args: bareMetalIdArg,
        },
        {
          name: ["halt", "h"],
          description: "Halt a bare metal server",
          args: bareMetalIdArg,
        },
        {
          name: ["image", "i"],
          description:
            "Image is used to access bare metal server image commands",
          subcommands: [
            {
              name: "change",
              description: "Change a bare metal server's image",
              args: [
                bareMetalIdArg,
                {
                  name: "imageID",
                  description: "Image ID",
                },
              ],
            },
            {
              name: "list",
              description: "Available images a bare metal server can change to",
              args: bareMetalIdArg,
            },
          ],
        },
        {
          name: "ipv4",
          description: "List the IPv4 information of a bare metal server",
        },
        {
          name: "ipv6",
          description: "List the IPv6 information of a bare metal server",
        },
        { name: "list", description: "List all bare metal servers" },
        {
          name: "os",
          description:
            "Os is used to access bare metal server operating system commands",
        },
        {
          name: "reboot",
          description:
            "Reboot a bare metal server. This is a hard reboot, which means that the server is powered off, then back on",
        },
        {
          name: "reinstall",
          description: "Reinstall the operating system on a bare metal server",
        },
        { name: "start", description: "Start a bare metal server" },
        {
          name: "user-data",
          description:
            "User-data is used to access bare metal server user-data commands",
        },
        {
          name: "vnc",
          description: "Get a bare metal server's VNC url by <bareMetalID>",
          args: bareMetalIdArg,
        },
      ],
    },
    {
      name: "block-storage",
      description: "Block storage commands",
      subcommands: [
        {
          name: "attach",
          description: "Attaches a block storage to an instance",
        },
        { name: "create", description: "Create a new block storage" },
        { name: "delete", description: "Delete a block storage" },
        {
          name: "detach",
          description: "Detaches a block storage from an instance",
        },
        { name: "get", description: "Retrieves a block storage" },
        { name: "label", description: "Sets a label for a block storage" },
        {
          name: "list",
          description: "Retrieves a list of active block storage",
        },
        { name: "resize", description: "Resize a block storage" },
      ],
    },
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
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
    {
      name: "dns",
      description: "Dns is used to access dns commands",
      subcommands: [
        { name: "domain", description: "Dns domain" },
        { name: "record", description: "Dns record" },
      ],
    },
    {
      name: ["firewall", "fw"],
      description: "Firewall is used to access firewall commands",
      subcommands: [
        {
          name: "group",
          description: "Group is used to access firewall group commands",
        },
        {
          name: "rule",
          description: "Rule is used to access firewall rule commands",
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      subcommands: [
        {
          name: "account",
          description: "Retrieve information about your account",
        },
        { name: "apps", description: "Display all available applications" },
        { name: "backups", description: "Display backups" },
        {
          name: "bare-metal",
          description:
            "Bare-metal is used to access bare metal server commands",
        },
        { name: "block-storage", description: "Block storage commands" },
        {
          name: "completion",
          description:
            "Generate the autocompletion script for the specified shell",
        },
        { name: "dns", description: "Dns is used to access dns commands" },
        {
          name: "firewall",
          description: "Firewall is used to access firewall commands",
        },
        { name: "help", description: "Help about any command" },
        {
          name: "instance",
          description: "Commands to interact with instances on vultr",
        },
        { name: "iso", description: "Iso is used to access iso commands" },
        {
          name: "kubernetes",
          description: "Kubernetes is used to access kubernetes commands",
        },
        { name: "load-balancer", description: "Load balancer commands" },
        {
          name: "network",
          description: "Network interacts with network actions",
        },
        { name: "object-storage", description: "Object storage commands" },
        { name: "os", description: "Os is used to access os commands" },
        { name: "plans", description: "Get information about Vultr plans" },
        { name: "regions", description: "Get regions" },
        {
          name: "reserved-ip",
          description: "Reserved-ip lets you interact with reserved-ip",
        },
        { name: "script", description: "Startup script commands" },
        { name: "snapshot", description: "Snapshot commands" },
        { name: "ssh-key", description: "Ssh-key commands" },
        { name: "user", description: "User commands" },
        {
          name: "version",
          description: "Display current version of Vultr-cli",
        },
      ],
    },
    {
      name: "instance",
      description: "Commands to interact with instances on vultr",
      subcommands: [
        { name: "app", description: "Update application for an instance" },
        {
          name: "backup",
          description: "List and create backup schedules for an instance",
        },
        { name: "bandwidth", description: "Bandwidth for instance" },
        {
          name: "create",
          description: "Create an instance",
          options: createOptions,
        },
        {
          name: ["delete", "destroy"],
          description: "Delete/destroy an instance",
          isDangerous: true,
          args: instance,
        },
        {
          name: "get",
          description: "Get info about a specific instance",
          args: instance,
        },
        { name: "image", description: "Update image for an instance" },
        { name: "ipv4", description: "List/create/delete ipv4 on instance" },
        { name: "ipv6", description: "Commands for ipv6 on instance" },
        { name: "iso", description: "Attach/detach ISOs to a given instance" },
        { name: "label", description: "Label an instance" },
        { name: "list", description: "List all available instances" },
        { name: "os", description: "Update operating system for an instance" },
        { name: "plan", description: "Update/list plans for an instance" },
        { name: "reinstall", description: "Reinstall an instance" },
        { name: "restart", description: "Restart an instance" },
        {
          name: "restore",
          description: "Restore instance from backup/snapshot",
        },
        {
          name: "reverse-dns",
          description: "Commands to handle reverse-dns on an instance",
        },
        { name: "start", description: "Starts an instance" },
        { name: "stop", description: "Stops an instance" },
        { name: "tag", description: "Add/modify tag on instance" },
        {
          name: "update-firewall-group",
          description: "Assign a firewall group to instance",
        },
        {
          name: "user-data",
          description: "Commands to handle userdata on an instance",
        },
      ],
    },
    {
      name: "iso",
      description: "Iso is used to access iso commands",
      subcommands: [
        { name: "create", description: "Create iso from url" },
        { name: "delete", description: "Delete a private iso" },
        {
          name: "get",
          description: "Get private ISO <isoID>",
          args: { name: "isoID" },
        },
        { name: "list", description: "List all private ISOs available" },
        { name: "public", description: "List all public ISOs available" },
      ],
    },
    {
      name: ["kubernetes", "k"],
      description: "Kubernetes is used to access kubernetes commands",
      subcommands: [
        { name: "config", description: "Gets a kubernetes cluster's config" },
        { name: "create", description: "Create kubernetes cluster" },
        { name: "delete", description: "Delete a kubernetes cluster" },
        {
          name: "delete-with-resources",
          description: "Delete a kubernetes cluster and related resources",
        },
        { name: "get", description: "Retrieves a kubernetes cluster" },
        { name: "list", description: "List kubernetes clusters" },
        {
          name: "node-pool",
          description: "Node pools commands for a kubernetes cluster",
        },
        { name: "update", description: "Updates a kubernetes cluster" },
        { name: "versions", description: "Gets supported kubernetes versions" },
      ],
    },
    {
      name: ["load-balancer", "lb"],
      description: "Load balancer commands",
      subcommands: [
        { name: "create", description: "Create a load balancer" },
        {
          name: "delete",
          description: "Deletes a load balancer",
          isDangerous: true,
        },
        {
          name: "firewall-rule",
          description: "Get/list firewall rules for a load balancer",
        },
        { name: "get", description: "Retrieves a load balancer" },
        {
          name: "list",
          description: "Retrieves a list of active load balancers",
        },
        {
          name: "rule",
          description:
            "Create/delete/list forwarding rules for a load balancer",
        },
        { name: "update", description: "Updates a load balancer" },
      ],
    },
    {
      name: "network",
      description: "Network interacts with network actions",
      subcommands: [
        { name: "create", description: "Create a private network" },
        { name: "delete", description: "Delete a private network" },
        { name: "get", description: "Get a private network" },
        { name: "list", description: "List all private networks" },
      ],
    },
    {
      name: "object-storage",
      description: "Object storage commands",
      subcommands: [
        {
          name: "create",
          description: "Create a new object storage subscription",
        },
        {
          name: "delete",
          description: "Deletes an object storage subscription",
        },
        {
          name: "get",
          description: "Retrieves a given object storage subscription",
        },
        {
          name: "label",
          description: "Change the label for object storage subscription",
        },
        {
          name: "list",
          description:
            "Retrieves a list of active object storage subscriptions",
        },
        {
          name: "list-cluster",
          description: "Retrieves a list of object storage clusters",
        },
        {
          name: "s3key-regenerate",
          description:
            "Regenerate the S3 API keys of an object storage subscription",
        },
      ],
    },
    {
      name: "os",
      description: "Os is used to access os commands",
      subcommands: [
        { name: "list", description: "List all available operating systems" },
      ],
    },
    {
      name: ["plans", "p"],
      description: "Get information about Vultr plans",
      subcommands: [{ name: "list", description: "List plans" }],
    },
    {
      name: "regions",
      description: "Get regions",
      subcommands: [
        { name: "availability", description: "List availability in region" },
        { name: "list", description: "List regions" },
      ],
    },
    {
      name: ["reserved-ip", "rip"],
      description: "Reserved-ip lets you interact with reserved-ip",
      subcommands: [
        { name: "attach", description: "Attach a reservedIP to an instance" },
        { name: "convert", description: "Convert IP address to reservedIP" },
        { name: "create", description: "Create reservedIP" },
        { name: "delete", description: "Delete a reserved ip" },
        { name: "detach", description: "Detach a reservedIP to an instance" },
        { name: "get", description: "Get a reserved IP" },
        { name: "list", description: "List all reserved IPs" },
      ],
    },
    {
      name: ["script", "ss"],
      description: "Startup script commands",
      subcommands: [
        { name: "create", description: "Create a startup script" },
        { name: "delete", description: "Delete a startup script" },
        {
          name: "get",
          description: "Displays the contents of specified script",
        },
        { name: "list", description: "List all startup scripts" },
        { name: "update", description: "Update startup script" },
      ],
    },
    {
      name: ["snapshot", "sn"],
      description: "Snapshot commands",
      subcommands: [
        { name: "create", description: "Create a snapshot" },
        { name: "create-url", description: "Create a snapshot from a URL" },
        { name: "delete", description: "Delete a snapshot" },
        { name: "get", description: "Get a snapshot" },
        { name: "list", description: "List all snapshots" },
      ],
    },
    {
      name: ["ssh-key", "ssh"],
      description: "Ssh-key commands",
      subcommands: [
        { name: "create", description: "Create an SSH key" },
        { name: "delete", description: "Delete an SSH key" },
        { name: "get", description: "Get an SSH key" },
        { name: "list", description: "List all SSH keys" },
        { name: "update", description: "Update SSH key" },
      ],
    },
    {
      name: ["user", "u"],
      description: "User commands",
      subcommands: [
        { name: "create", description: "Create a user" },
        { name: "delete", description: "Delete a user" },
        { name: "get", description: "Get a user" },
        { name: "list", description: "List all available users" },
        { name: "update", description: "Update User" },
      ],
    },
    { name: "version", description: "Display current version of Vultr-cli" },
  ],
};
export default completionSpec;
