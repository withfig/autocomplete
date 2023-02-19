const ClusterGenerator: Fig.Generator = {
  script: "k3d cluster list --no-headers",
  postProcess: (out) => {
    return out.split("\n").map((line) => {
      const [name, servers, agents] = line.split(/\s+/);
      return {
        name,
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
  script: "docker image ls --format '{{.Repository}}:{{.Tag}}'",
  postProcess: (out) => {
    return out.split("\n").map((image) => ({
      name: image,
      description: "Docker Image",
    }));
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
            isOptional: true,
          },
          options: [
            {
              name: ["-a", "--agents"],
              description: "Number of agents to create",
              args: {
                name: "number of agents",
                description: "Number of agents to create",
                isOptional: true,
              },
            },
            {
              name: "--agents-memory",
              description: "Memory limit imposed on the agents nodes",
              args: {
                name: "memory limit",
                description: "Memory limit imposed on the agents nodes",
                isOptional: true,
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
                isOptional: true,
              },
            },
            {
              name: ["-c", "--config"],
              description: "Path of a config file to use",
              args: {
                name: "path",
                description: "Path of a config file to use",
                isOptional: true,
              },
            },
            {
              name: ["-e", "--env"],
              description: "Add environment variables to nodes",
              args: {
                name: "environment variables",
                description: "Add environment variables to nodes",
                isOptional: true,
              },
            },
            {
              name: "--gpus",
              description: "GPU devices to add to the cluster node containers",
              args: {
                name: "devices",
                description:
                  "GPU devices to add to the cluster node containers",
                isOptional: true,
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
                isOptional: true,
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
                isOptional: true,
              },
            },
            {
              name: "--k3s-arg",
              description: "Additional args passed to k3s command",
              args: {
                name: "ARG@NODEFILTER[;@NODEFILTER]",
                description: "Additional args passed to k3s command",
                isOptional: true,
              },
            },
            {
              name: "--k3s-node-label",
              description: "Add label to k3s node",
              args: {
                name: "KEY[=VALUE][@NODEFILTER[;NODEFILTER...]]",
                description: "Add label to k3s node",
                isOptional: true,
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
                isOptional: true,
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
                isOptional: true,
              },
            },
            {
              name: "--registry-config",
              description: "Specify path to an extra registries.yaml file",
              args: {
                name: "path",
                description: "Specify path to an extra registries.yaml file",
                isOptional: true,
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
                isOptional: true,
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
                isOptional: true,
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
                isOptional: true,
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
                isOptional: true,
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
                isOptional: true,
              },
            },
            {
              name: ["-v", "--volume"],
              description: "Mount volumes into the nodes",
              args: {
                name: "[SOURCE:]DEST[@NODEFILTER[;NODEFILTER...]]",
                description: "Mount volumes into the nodes",
                isOptional: true,
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
    // TODO: Start From k3d node
  ],
};

export default completionSpec;
