const completion: Fig.Spec = {
  name: "k8sconfiguration",
  description: "Commands to manage Kubernetes configuration",
  subcommands: [
    {
      name: "create",
      description: "Create a Kubernetes configuration",
      options: [
        {
          name: ["--cluster-name", "-c"],
          description: "Name of the Kubernetes cluster",
          args: { name: "cluster-name" },
          isRequired: true,
        },
        {
          name: "--cluster-type",
          description: "Specify Arc clusters or AKS managed clusters",
          args: {
            name: "cluster-type",
            suggestions: ["connectedClusters", "managedClusters"],
          },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "Name of the Kubernetes Configuration",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--repository-url", "-u"],
          description: "Url of the source control repository",
          args: { name: "repository-url" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
        {
          name: "--scope",
          description:
            "Specify scope of the operator to be 'namespace' or 'cluster'",
          args: { name: "scope", suggestions: ["cluster", "namespace"] },
          isRequired: true,
        },
        {
          name: "--enable-helm-operator",
          description: "Enable support for Helm chart deployments",
          args: {
            name: "enable-helm-operator",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--helm-operator-params",
          description: "Chart values for the Helm Operator (if enabled)",
          args: { name: "helm-operator-params" },
        },
        {
          name: "--helm-operator-version",
          description: "Chart version of the Helm Operator (if enabled)",
          args: { name: "helm-operator-version" },
        },
        {
          name: "--https-key",
          description:
            "Specify HTTPS token/password for private repository sync",
          args: { name: "https-key" },
        },
        {
          name: "--https-user",
          description: "Specify HTTPS username for private repository sync",
          args: { name: "https-user" },
        },
        {
          name: "--operator-instance-name",
          description: "Instance name of the Operator",
          args: { name: "operator-instance-name" },
        },
        {
          name: "--operator-namespace",
          description: "Namespace in which to install the Operator",
          args: { name: "operator-namespace" },
        },
        {
          name: "--operator-params",
          description: "Parameters for the Operator",
          args: { name: "operator-params" },
        },
        {
          name: "--operator-type",
          description: "Type of the operator. Valid value is 'flux'",
          args: { name: "operator-type" },
        },
        {
          name: "--ssh-known-hosts",
          description:
            "Specify Base64-encoded known_hosts contents containing public SSH keys required to access private Git instances",
          args: { name: "ssh-known-hosts" },
        },
        {
          name: "--ssh-known-hosts-file",
          description:
            "Specify filepath to known_hosts contents containing public SSH keys required to access private Git instances",
          args: { name: "ssh-known-hosts-file" },
        },
        {
          name: "--ssh-private-key",
          description:
            "Specify Base64-encoded private ssh key for private repository sync",
          args: { name: "ssh-private-key" },
        },
        {
          name: "--ssh-private-key-file",
          description:
            "Specify filepath to private ssh key for private repository sync",
          args: { name: "ssh-private-key-file" },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete a Kubernetes configuration",
      options: [
        {
          name: ["--cluster-name", "-c"],
          description: "Name of the Kubernetes cluster",
          args: { name: "cluster-name" },
          isRequired: true,
        },
        {
          name: "--cluster-type",
          description: "Specify Arc clusters or AKS managed clusters",
          args: {
            name: "cluster-type",
            suggestions: ["connectedClusters", "managedClusters"],
          },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "Name of the Kubernetes Configuration",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "list",
      description: "List Kubernetes configurations",
      options: [
        {
          name: ["--cluster-name", "-c"],
          description: "Name of the Kubernetes cluster",
          args: { name: "cluster-name" },
          isRequired: true,
        },
        {
          name: "--cluster-type",
          description: "Specify Arc clusters or AKS managed clusters",
          args: {
            name: "cluster-type",
            suggestions: ["connectedClusters", "managedClusters"],
          },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
      ],
    },
    {
      name: "show",
      description: "Show details of a Kubernetes configuration",
      options: [
        {
          name: ["--cluster-name", "-c"],
          description: "Name of the Kubernetes cluster",
          args: { name: "cluster-name" },
          isRequired: true,
        },
        {
          name: "--cluster-type",
          description: "Specify Arc clusters or AKS managed clusters",
          args: {
            name: "cluster-type",
            suggestions: ["connectedClusters", "managedClusters"],
          },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "Name of the Kubernetes Configuration",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
      ],
    },
    {
      name: "update",
      description: "Update a Kubernetes configuration",
      options: [
        {
          name: ["--cluster-name", "-c"],
          description: "Name of the Kubernetes cluster",
          args: { name: "cluster-name" },
          isRequired: true,
        },
        {
          name: "--cluster-type",
          description: "Specify Arc clusters or AKS managed clusters",
          args: {
            name: "cluster-type",
            suggestions: ["connectedClusters", "managedClusters"],
          },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "Name of the Kubernetes Configuration",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
        {
          name: "--enable-helm-operator",
          description: "Enable support for Helm chart deployments",
          args: {
            name: "enable-helm-operator",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--helm-operator-params",
          description: "Chart values for the Helm Operator (if enabled)",
          args: { name: "helm-operator-params" },
        },
        {
          name: "--helm-operator-version",
          description: "Chart version of the Helm Operator (if enabled)",
          args: { name: "helm-operator-version" },
        },
        {
          name: "--operator-params",
          description: "Parameters for the Operator",
          args: { name: "operator-params" },
        },
        {
          name: ["--repository-url", "-u"],
          description: "Url of the source control repository",
          args: { name: "repository-url" },
        },
        {
          name: "--ssh-known-hosts",
          description:
            "Specify Base64-encoded known_hosts contents containing public SSH keys required to access private Git instances",
          args: { name: "ssh-known-hosts" },
        },
        {
          name: "--ssh-known-hosts-file",
          description:
            "Specify filepath to known_hosts contents containing public SSH keys required to access private Git instances",
          args: { name: "ssh-known-hosts-file" },
        },
      ],
    },
  ],
};

export default completion;
