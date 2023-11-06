const ClusterGenerator: Fig.Generator = {
  script: ["kind", "get", "clusters"],
  postProcess: (out) => {
    return out.split("\n").map((cluster) => ({
      name: cluster,
      description: "Cluster",
    }));
  },
};

const NodeGenerator: Fig.Generator = {
  script: ["kind", "get", "nodes", "-A"],
  postProcess: (out) => {
    return out.split("\n").map((node) => ({
      name: node,
      description: "Node",
    }));
  },
};

const completionSpec: Fig.Spec = {
  name: "kind",
  description: "Kubernetes IN Docker - local clusters for testing Kubernetes",
  subcommands: [
    {
      name: "Build",
      description: "Build one of [node-image]",
      subcommands: [
        {
          name: "node-image",
          description: "Builds a node image",
          options: [
            {
              name: "--arch",
              description:
                "Architecture to build for, defaults to the host architecture",
              args: {
                name: "architecture",
                description:
                  "Architecture to build for, defaults to the host architecture",
              },
            },
            {
              name: "--base-image",
              description: "Base image to use for the node image",
              args: {
                name: "base image",
                description: "Name:tag of the base image to use for the build",
              },
            },
            {
              name: "--image",
              description: "Name:tag of the resulting image to be built",
              args: {
                name: "name:tag",
                description: "Name:tag of the resulting image to be built",
              },
            },
            {
              name: "--kube-root",
              description: "Path to the Kubernetes source directory",
              args: {
                name: "path",
                description: "Path to the Kubernetes source directory",
              },
              deprecated: true,
            },
            {
              name: "--type",
              description: "Type of node image to build",
              args: {
                name: "type",
                description: "Build type, default is docker",
              },
            },
          ],
        },
      ],
    },
    {
      name: "create",
      description: "Creates a cluster",
      subcommands: [
        {
          name: "cluster",
          description: "Creates a cluster",
          options: [
            {
              name: "--config",
              description: "Path to a kind config file",
            },
            {
              name: "--image",
              description: "Node docker image to use for booting the cluster",
            },
            {
              name: "--kubeconfig",
              description:
                "Sets kubeconfig path instead of $KUBECONFIG or $HOME/.kube/config",
            },
            {
              name: "--name",
              description: "Cluster name",
            },
            {
              name: "--retain",
              description:
                "Retain nodes for debugging when cluster creation fails",
            },
            {
              name: "--wait",
              description: "Wait for control-plane node to be ready",
            },
          ],
        },
      ],
    },
    {
      name: "completion",
      description: "Generates shell completion scripts",
      subcommands: [
        {
          name: "bash",
          description: "Output shell completions for bash",
        },
        {
          name: "fish",
          description: "Output shell completions for fish",
        },
        {
          name: "zsh",
          description: "Output shell completions for zsh",
        },
      ],
    },
    {
      name: "delete",
      description: "Deletes one or more clusters",
      subcommands: [
        {
          name: "cluster",
          description: "Delete Cluster",
          options: [
            {
              name: "--name",
              description: "Cluster name",
              args: {
                name: "cluster name",
                generators: ClusterGenerator,
              },
              priority: 100,
            },
          ],
        },
        {
          name: "clusters",
          description: "Delete Clusters",
          options: [
            {
              name: ["-A", "--all"],
              description: "Delete all clusters",
              priority: 100,
            },
            {
              name: "--kubeconfig",
              description:
                "Sets kubeconfig path instead of $KUBECONFIG or $HOME/.kube/config",
            },
          ],
        },
      ],
    },
    {
      name: "export",
      description: "Exports a cluster's kubeconfig",
      subcommands: [
        {
          name: "kubeconfig",
          description: "Exports a cluster's kubeconfig",
          options: [
            {
              name: "--name",
              description: "Cluster name",
            },
            {
              name: "--internal",
              description: "Use internal address instead of externalt",
            },
            {
              name: "--kubeconfig",
              description:
                "Sets kubeconfig path instead of $KUBECONFIG or $HOME/.kube/config",
            },
          ],
        },
        {
          name: "logs",
          description: "Exports logs to a tempdir or [output-dir] if specified",
          options: [
            {
              name: "--name",
              description: "Cluster name",
              args: {
                name: "cluster name",
                generators: ClusterGenerator,
              },
              priority: 100,
            },
          ],
        },
      ],
    },
    {
      name: "get",
      description: "Gets one of [clusters, nodes, kubeconfig]",
      subcommands: [
        {
          name: "clusters",
          description: "Lists existing kind clusters by their name",
        },
        {
          name: "kubeconfig",
          description: "Prints cluster kubeconfig",
          options: [
            {
              name: "--name",
              description: "Cluster name",
              args: {
                name: "cluster name",
                generators: ClusterGenerator,
              },
              priority: 100,
            },
            {
              name: "--internal",
              description: "Use internal address instead of external",
            },
          ],
        },
        {
          name: "nodes",
          description: "Lists existing kind nodes by their name",
          options: [
            {
              name: ["-A", "--all"],
              description: "List all nodes",
              priority: 50,
            },
            {
              name: "--name",
              description: "Cluster name",
              args: {
                name: "cluster name",
                generators: ClusterGenerator,
              },
              priority: 50,
            },
          ],
        },
      ],
    },
    {
      name: "load",
      description: "Loads images into node from an archive or image on host",
      subcommands: [
        {
          name: "docker-image",
          description:
            "Loads docker images from host into all or specified nodes by name",
          options: [
            {
              name: "--name",
              description: "Cluster name",
              args: {
                name: "cluster name",
                generators: ClusterGenerator,
              },
            },
            {
              name: "--nodes",
              description: "Comma separated list of nodes to load images into",
              args: {
                name: "nodes",
                generators: NodeGenerator,
              },
            },
          ],
        },
        {
          name: "image-archive",
          description:
            "Loads docker images from archive into all or specified nodes by name",
          options: [
            {
              name: "--name",
              description: "Cluster name",
              args: {
                name: "cluster name",
                generators: ClusterGenerator,
              },
            },
            {
              name: "--nodes",
              description: "Comma separated list of nodes to load images into",
              args: {
                name: "nodes",
                generators: NodeGenerator,
              },
            },
          ],
        },
      ],
    },
    {
      name: "version",
      description: "Prints the kind CLI version",
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Help for kind",
      isPersistent: true,
    },
    {
      name: ["-q", "--quiet"],
      description: "Silence all stderr output",
      isPersistent: true,
    },
    {
      name: ["-v", "--verbosity"],
      description: "Info log verbosity, higher value produces more output",
      isPersistent: true,
      args: {
        name: "int",
      },
    },
  ],
};

export default completionSpec;
