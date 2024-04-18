const ClusterGenerator: Fig.Generator = {
  script: ["k3d", "cluster", "list", "--no-headers"],
  postProcess: (out) => {
    return out.split("\n").map((line) => {
      const [name, servers, agents] = line.split(/\s+/);
      return {
        name,
        icon: "fig://icon?type=kubernetes",
        description: `Cluster with ${servers} server(s), ${agents} agent(s)`,
      };
    });
  },
};

// List of SHELL completions
const ShellCompletions: Fig.Suggestion[] = [
  {
    name: "bash",
    description: "Bash shell",
  },
  {
    name: "zsh",
    description: "Zsh shell",
  },
  {
    name: "fish",
    description: "Fish shell",
  },
  {
    name: "powershell",
    description: "Powershell",
  },
];

// Docker Image Generator
const DockerImageGenerator: Fig.Generator = {
  script: ["docker", "image", "ls", "--format", "{{.Repository}}:{{.Tag}}"],
  postProcess: (out) => {
    return out.split("\n").map((image) => ({
      name: image,
      icon: "fig://icon?type=docker",
      description: "Docker Image",
    }));
  },
};

// Node Generator
const NodeGenerator: Fig.Generator = {
  script: ["k3d", "node", "list", "--no-headers"],
  postProcess: (out) => {
    return out.split("\n").map((line) => {
      const [name, role, cluster] = line.split(/\s+/);
      return {
        name,
        icon: "fig://icon?type=kubernetes",
        description: `${role} node of cluster ${cluster}`,
      };
    });
  },
};

// Registry Generator
const RegistryGenerator: Fig.Generator = {
  script: ["k3d", "registry", "list", "--no-headers"],
  postProcess: (out) => {
    return out.split("\n").map((line) => {
      const [name, cluster] = line.split(/\s+/);
      return {
        name,
        description: `Registry ${name} of cluster ${cluster}`,
      };
    });
  },
};

const completionSpec: Fig.Spec = {
  name: "k3d",
  description: "K3d is a lightweight wrapper to run k3s in Docker",
  subcommands: [
    {
      name: "cluster",
      description: "Manage k3s clusters",
      subcommands: [
        {
          name: "create",
          description: "Create a new k3s cluster",
          args: {
            name: "cluster name",
            description: "Name of the cluster to create",
          },
          options: [
            {
              name: ["-a", "--agents"],
              description: "Number of agents to create",
              args: {
                name: "number of agents",
                description: "Number of agents to create",
              },
            },
            {
              name: "--agents-memory",
              description: "Memory limit imposed on the agents nodes",
              args: {
                name: "memory limit",
                description: "Memory limit imposed on the agents nodes",
              },
            },
            {
              name: "--api-port",
              description:
                "Specify the Kubernetes API server port exposed on the LoadBalancer",
              args: {
                name: "port",
                description:
                  "Specify the Kubernetes API server port exposed on the LoadBalancer",
              },
            },
            {
              name: ["-c", "--config"],
              description: "Path of a config file to use",
              args: {
                name: "path",
                description: "Path of a config file to use",
              },
            },
            {
              name: ["-e", "--env"],
              description: "Add environment variables to nodes",
              args: {
                name: "environment variables",
                description: "Add environment variables to nodes",
              },
            },
            {
              name: "--gpus",
              description: "GPU devices to add to the cluster node containers",
              args: {
                name: "devices",
                description:
                  "GPU devices to add to the cluster node containers",
              },
            },
            {
              name: ["-h", "--help"],
              description: "Help for create",
            },
            {
              name: "--host-alias",
              description: "Add ip:host[,host,...] mappings",
              args: {
                name: "ip:host[,host,...]",
                description: "Add ip:host[,host,...] mappings",
              },
            },
            {
              name: "--host-pid-mode",
              description: "Enable host pid mode of server(s) and agent(s)",
            },
            {
              name: ["-i", "--image"],
              description:
                "Specify k3s image that you want to use for the nodes",
              args: {
                name: "image",
                description:
                  "Specify k3s image that you want to use for the nodes",
              },
            },
            {
              name: "--k3s-arg",
              description: "Additional args passed to k3s command",
              args: {
                name: "ARG@NODEFILTER[;@NODEFILTER]",
                description: "Additional args passed to k3s command",
              },
            },
            {
              name: "--k3s-node-label",
              description: "Add label to k3s node",
              args: {
                name: "KEY[=VALUE][@NODEFILTER[;NODEFILTER...]]",
                description: "Add label to k3s node",
              },
            },
            {
              name: "--kubeconfig-switch-context",
              description:
                "Directly switch the default kubeconfig's current-context to the new cluster's context (requires --kubeconfig-update-default) (default true)",
            },
            {
              name: "--kubeconfig-update-default",
              description:
                "Directly update the default kubeconfig with the new cluster's context (default true)",
            },
            {
              name: "--lb-config-override",
              description:
                "Use dotted YAML path syntax to override nginx loadbalancer settings",
              args: {
                name: "path",
              },
            },
            {
              name: "--network",
              description: "Specify the docker network to use",
              args: {
                name: "network",
                description: "Specify the docker network to use",
              },
            },
            {
              name: "--no-image-volume",
              description:
                "Don't create a volume for the container's root filesystem",
            },
            {
              name: "--no-lb",
              description: "Don't create a loadbalancer for the cluster",
            },
            {
              name: "--no-rollback",
              description: "Don't rollback changes if cluster creation failed",
            },
            {
              name: ["-p", "--port"],
              description:
                "Map ports from the node containers (via the serverlb) to the host",
              args: {
                name: "port",
                description:
                  "Map ports from the node containers (via the serverlb) to the host",
              },
            },
            {
              name: "--registry-config",
              description: "Specify path to an extra registries.yaml file",
              args: {
                name: "path",
                description: "Specify path to an extra registries.yaml file",
              },
            },
            {
              name: "--registry-create",
              description:
                "Create a k3d-managed registry and connect it to the cluster (Format: NAME[:HOST][:HOSTPORT] - Example: `k3d cluster create --registry-create mycluster-registry",
              args: {
                name: "NAME[:HOST][:HOSTPORT]",
                description:
                  "Create a k3d-managed registry and connect it to the cluster (Format: NAME[:HOST][:HOSTPORT] - Example: `k3d cluster create --registry-create mycluster-registry",
              },
            },
            {
              name: "--registry-use",
              description:
                "Connect to one or more k3d-managed registries running locally",
              args: {
                name: "NAME[:HOST][:HOSTPORT]",
              },
            },
            {
              name: "--runtime-label",
              description:
                'Add label to container runtime (Format: KEY[=VALUE][@NODEFILTER[;NODEFILTER...]] - Example: `k3d cluster create --agents 2 --runtime-label "my.label@agent:0,1" --runtime-label "other.label=somevalue@server:0"`',
            },
            {
              name: ["-s", "--servers"],
              description: "Specify how many servers you want to create",
              args: {
                name: "int",
                description: "Specify how many servers you want to create",
              },
            },
            {
              name: "--servers-memory",
              description:
                "Memory limit imposed on the server nodes [From docker]",
              args: {
                name: "string",
                description:
                  "Memory limit imposed on the server nodes [From docker]",
              },
            },
            {
              name: "--subnet",
              description:
                "[Experimental: IPAM] Define a subnet for the newly created container network",
              args: {
                name: "string",
              },
            },
            {
              name: "--timeout",
              description:
                "Rollback changes if cluster couldn't be created in specified duration",
              args: {
                name: "duration",
                description:
                  "Rollback changes if cluster couldn't be created in specified duration",
              },
            },
            {
              name: "--token",
              description:
                "Specify a cluster token. By default, we generate one",
              args: {
                name: "string",
                description:
                  "Specify a cluster token. By default, we generate one",
              },
            },
            {
              name: ["-v", "--volume"],
              description: "Mount volumes into the nodes",
              args: {
                name: "[SOURCE:]DEST[@NODEFILTER[;NODEFILTER...]]",
                description: "Mount volumes into the nodes",
              },
            },
            {
              name: "--wait",
              description:
                "Wait for the server(s) to be ready before returning",
            },
          ],
        },
        {
          name: ["delete", "del", "rm"],
          description: "Delete a cluster",
          args: {
            name: "cluster",
            description: "Cluster to delete",
            generators: ClusterGenerator,
          },
          options: [
            {
              name: ["-a", "--all"],
              description: "Delete all clusters",
            },
            {
              name: ["-c", "--config"],
              description: "Path of a config file to use",
              args: {
                name: "path",
                description: "Path of a config file to use",
              },
            },
          ],
        },
        {
          name: ["edit", "update"],
          description: "Edit a cluster",
          args: {
            name: "cluster",
            description: "Cluster to edit",
            generators: ClusterGenerator,
          },
          options: [
            {
              name: "--port-add",
              description: "Map ports from the node containers",
            },
          ],
        },
        {
          name: ["list", "ls", "get"],
          description: "List clusters",
          args: {
            name: "cluster",
            description: "Cluster to list",
            generators: ClusterGenerator,
          },
          options: [
            {
              name: "--no-headers",
              description: "Don't print headers",
            },
            {
              name: ["-o", "--output"],
              description: "Output format",
              args: {
                name: "string",
                description: "Output format",
                suggestions: [{ name: "json" }, { name: "yaml" }],
              },
            },
            {
              name: "--token",
              description: "Print k3s cluster token",
            },
          ],
        },
        {
          name: "start",
          description: "Start a cluster",
          args: {
            name: "cluster",
            description: "Cluster to start",
            generators: ClusterGenerator,
          },
          options: [
            {
              name: ["a", "--all"],
              description: "Start all clusters",
            },
            {
              name: "--timeout",
              description:
                "Maximum waiting time for '--wait' before canceling/returning",
              args: {
                name: "duration",
                description:
                  "Maximum waiting time for '--wait' before canceling/returning",
              },
            },
            {
              name: "--wait",
              description:
                "Wait for the server(s) (and loadbalancer) to be ready before returning",
            },
          ],
        },
        {
          name: "stop",
          description: "Stop a cluster",
          args: {
            name: "cluster",
            description: "Cluster to stop",
            generators: ClusterGenerator,
          },
          options: [
            {
              name: ["-a", "--all"],
              description: "Stop all clusters",
            },
          ],
        },
      ],
    },
    {
      name: "completion",
      description: "Generate shell completion scripts",
      args: {
        name: "shell",
        description: "Shell to generate completion script for",
        suggestions: ShellCompletions,
      },
    },
    {
      name: "config",
      description: "Manage k3d config",
      subcommands: [
        {
          name: ["init", "create"],
          description: "Create a new config file",
          options: [
            {
              name: ["-f", "--force"],
              description: "Force overwrite of target file",
            },
            {
              name: ["-o", "--output"],
              description:
                'Write a default k3d config (default "k3d-default.yaml")',
            },
          ],
        },
        {
          name: ["migrate", "update"],
          description: "Migrate a config file to the latest version",
        },
      ],
    },
    {
      name: "image",
      description: "Manage k3d images",
      subcommands: [
        {
          name: ["import", "load"],
          description: "Import image(s) from docker into k3d cluster(s)",
          args: {
            name: "image",
            description: "Image to import",
            generators: DockerImageGenerator,
          },
          options: [
            {
              name: ["-c", "--cluster"],
              description: "Cluster to import image(s) into",
              args: {
                name: "cluster",
                description: "Cluster to import image(s) into",
                generators: ClusterGenerator,
              },
            },
            {
              name: ["-k", "--keep-tarball"],
              description:
                "Do not delete the tarball containing the saved images from the shared volume",
            },
            {
              name: ["-t", "--keep-tools"],
              description: "Do not delete the tools node after import",
            },
            {
              name: ["-m", "--mode"],
              description: "Import mode",
              args: {
                name: "mode",
                description: "Import mode",
                suggestions: ["auto", "direct", "tools"],
              },
            },
          ],
        },
      ],
    },
    {
      name: "kubeconfig",
      description: "Manage k3d kubeconfig",
      subcommands: [
        {
          name: ["get", "print", "show"],
          args: {
            name: "cluster",
            description: "Cluster to get kubeconfig for",
            generators: ClusterGenerator,
          },
          options: [
            {
              name: ["-a", "--all"],
            },
          ],
        },
        {
          name: ["merge", "write"],
          description:
            "Write/Merge kubeconfig(s) from cluster(s) into new or existing kubeconfig/file",
          args: {
            name: "cluster",
            description: "Cluster to get kubeconfig for",
            generators: ClusterGenerator,
          },
          options: [
            {
              name: ["-a", "--all"],
            },
            {
              name: ["-d", "--kubeconfig-merge-default"],
              description:
                "Merge into the default kubeconfig ($KUBECONFIG or /Users/balli/.kube/config)",
            },
            {
              name: ["-s", "--kubeconfig-switch-context"],
              description: "Switch to new context (default true)",
            },
            {
              name: ["-o", "--output"],
              description:
                "Define output [ - | FILE ] (default from $KUBECONFIG or /Users/balli/.kube/config",
              args: {
                name: "string",
                description:
                  "Define output [ - | FILE ] (default from $KUBECONFIG or /Users/balli/.kube/config",
              },
            },
            {
              name: "--overwrite",
              description:
                "[Careful!] Overwrite existing file, ignoring its contents",
              isDangerous: true,
            },
            {
              name: ["-u", "--update"],
              description:
                "Update conflicting fields in existing kubeconfig (default true)",
            },
          ],
        },
      ],
    },
    {
      name: "node",
      description: "Manage k3d nodes",
      subcommands: [
        {
          name: "create",
          description: "Create a new node",
          args: {
            name: "Node Name",
            description: "Name of the node",
          },
          options: [
            {
              name: ["-c", "--cluster"],
              description:
                'Cluster URL or k3d cluster name to connect to. (default "k3s-default")',
              args: {
                name: "cluster",
                description: "Cluster to connect to",
                generators: ClusterGenerator,
              },
            },
            {
              name: ["-i", "--image"],
              description: "Node image to use",
              args: {
                name: "image",
                description: "Node image to use",
              },
            },
            {
              name: "--k3s-arg",
              description: "Additional k3s arguments",
              args: {
                name: "k3s-arg",
                description: "Additional k3s arguments",
              },
            },
            {
              name: "--k3s-node-label",
              description: "Specify k3s node labels in format",
              args: {
                name: "k3s-node-label",
                description: 'Specify k3s node labels in format "foo=bar"',
              },
            },
            {
              name: "--memory",
              description: "Memory limit for the node container",
              args: {
                name: "memory",
                description: "Memory limit for the node container",
              },
            },
            {
              name: ["-n", "--network"],
              description: "Add node to (another) runtime network",
              args: {
                name: "network",
              },
            },
            {
              name: "--replicas",
              description: "Number of replicas to create",
              args: {
                name: "replicas",
                description: "Number of replicas to create",
                suggestions: ["1", "2", "3", "4", "5"],
              },
            },
            {
              name: "--role",
              description: "Node role",
              args: {
                name: "role",
                description: "Node role",
                suggestions: ["agent", "server"],
              },
            },
            {
              name: "--runtime-label",
              description: "Specify runtime labels in format",
              args: {
                name: "runtime-label",
                description: 'Specify runtime labels in format "foo=bar"',
              },
            },
            {
              name: "--timeout",
              description:
                "Maximum waiting time for '--wait' before canceling/returning",
              args: {
                name: "timeout",
                description:
                  "Maximum waiting time for '--wait' before canceling/returning",
              },
            },
            {
              name: ["-t", "--token"],
              description: "Override cluster token",
              args: {
                name: "token",
              },
            },
            {
              name: "--wait",
              description: "Wait for the node(s) to be ready before returning",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a node",
          args: {
            name: "Node Name",
            description: "Name of the node",
            generators: NodeGenerator,
          },
          options: [
            {
              name: ["-a", "--all"],
              description: "Delete all existing nodes",
            },
            {
              name: ["-r", "--registry"],
              description: "Also delete registries",
            },
          ],
        },
        {
          name: ["edit", "update"],
          description: "[EXPERIMENTAL] Edit node(s)",
          args: {
            name: "Node Name",
            description: "Name of the node",
            generators: NodeGenerator,
          },
          options: [
            {
              name: "--port-add",
              description: "Map ports from the node container to the host",
              args: {
                name: "port-add",
                description: "Map ports from the node container to the host",
              },
            },
          ],
        },
        {
          name: ["list", "ls", "get"],
          description: "List nodes",
          options: [
            {
              name: "--no-headers",
              description: "Don't print headers (default print headers)",
            },
            {
              name: ["-o", "--output"],
              description: "Output format",
              args: {
                name: "output",
                description: "Output format",
                suggestions: ["json", "yaml"],
              },
            },
          ],
        },
        {
          name: "start",
          description: "Start a node",
          args: {
            name: "Node Name",
            description: "Name of the node",
            generators: NodeGenerator,
          },
        },
        {
          name: "stop",
          description: "Stop a node",
          args: {
            name: "Node Name",
            description: "Name of the node",
            generators: NodeGenerator,
          },
        },
      ],
    },
    {
      name: ["registry", "registries", "reg"],
      description: "Manage registry/registries",
      subcommands: [
        {
          name: "create",
          description: "Create a new registry",
          args: {
            name: "Registry Name",
            description: "Name of the registry",
          },
          options: [
            {
              name: "--default-network",
              description: `Specify the network connected to the registry (default "bridge")`,
            },
            {
              name: ["-i", "--image"],
              description: `Specify image used for the registry (default "docker.io/library/registry:2")`,
              args: {
                name: "image",
              },
            },
            {
              name: "--no-help",
              description: "Disable the help text (How-To use the registry)",
            },
            {
              name: ["-p", "--port"],
              description:
                "Select which port the registry should be listening on your machine (localhost) (Format: [HOST:]HOSTPORT)",
              args: {
                name: "port",
              },
            },
            {
              name: "--proxy-password",
              description:
                "Specify the password of the proxied remote registry",
              args: {
                name: "proxy-password",
              },
            },
            {
              name: "--proxy-remote-url",
              description: "Specify the url of the proxied remote registry",
              args: {
                name: "proxy-remote-url",
              },
            },
            {
              name: "--proxy-username",
              description:
                "Specify the username of the proxied remote registry",
              args: {
                name: "proxy-username",
              },
            },
            {
              name: ["-v", "--volume"],
              description:
                "Mount volumes into the registry node (Format: [SOURCE:]DEST",
              args: {
                name: "volume",
              },
            },
          ],
        },
        {
          name: ["delete", "del", "rm"],
          description: "Delete registry/registries",
          args: {
            name: "Registry Name",
            description: "Name of the registry",
            generators: RegistryGenerator,
          },
          options: [
            {
              name: ["-a", "--all"],
            },
          ],
        },
        {
          name: ["list", "ls", "get"],
          description: "List registries",
          args: {
            name: "Registry Name",
            description: "Name of the registry",
            generators: RegistryGenerator,
            isOptional: true,
          },
          options: [
            {
              name: "--no-headers",
              description: "Don't print headers (default print headers)",
            },
            {
              name: ["-o", "--output"],
              description: "Output format",
              args: {
                name: "output",
                description: "Output format",
                suggestions: ["json", "yaml"],
              },
            },
          ],
        },
      ],
    },
    {
      name: "version",
      description: "Show k3d and default k3s version",
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Help for k3d",
      isPersistent: true,
    },
    {
      name: "--verbose",
      description: "Verbose output",
      isPersistent: true,
    },
    {
      name: "--trace",
      description: "Trace output",
      isPersistent: true,
    },
    {
      name: "--version",
      description: "Print version information",
    },
    {
      name: "--timestamps",
      description: "Print timestamp in log output",
      isPersistent: true,
    },
  ],
};

export default completionSpec;
