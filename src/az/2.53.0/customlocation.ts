const completion: Fig.Spec = {
  name: "customlocation",
  description: "Commands to Create, Get, List and Delete CustomLocations",
  subcommands: [
    {
      name: "create",
      description: "Create a Custom Location",
      options: [
        {
          name: ["--cluster-extension-ids", "-c"],
          description:
            "Space-seperated list of the cluster extension ids - input full id in the format /subscription/.../resourceGroups/.../Microsoft.Kubernetes/connectedClusters/.../providers/Microsoft.KubernetesConfiguration/extensions/",
          args: { name: "cluster-extension-ids" },
          isRequired: true,
        },
        {
          name: "--host-resource-id",
          description: "Host resource ID of the connected cluster",
          args: { name: "host-resource-id" },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "Name of the Customlocation",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: "--namespace",
          description:
            "Namespace for Custom Location. For namespace-scoped extensions, this should match namespace associated with the cluster extension operator",
          args: { name: "namespace" },
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
          name: "--assign-identity",
          description:
            'Create CustomLocation resource with "SystemAssigned" or "None" type identity',
          args: { name: "assign-identity" },
        },
        {
          name: ["--kubeconfig", "-k"],
          description:
            "Admin Kubeconfig of Cluster. Needs to passed in as a file if the cluster is a non-AAD enabled Cluster",
          args: { name: "kubeconfig" },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete a Customlocation",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the Customlocation",
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
      description: "Command to list CustomLocations",
      options: [
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
      ],
    },
    {
      name: "list-enabled-resource-types",
      description: "Get details of Enabled Resource Types for a CustomLocation",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the Customlocation",
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
      name: "patch",
      description: "Patch a Custom Location",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the Customlocation",
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
          name: "--assign-identity",
          description:
            'Create CustomLocation resource with "SystemAssigned" or "None" type identity',
          args: { name: "assign-identity" },
        },
        {
          name: ["--cluster-extension-ids", "-c"],
          description:
            "Space-seperated list of the cluster extension ids - input full id in the format /subscription/.../resourceGroups/.../Microsoft.Kubernetes/connectedClusters/.../providers/Microsoft.KubernetesConfiguration/extensions/",
          args: { name: "cluster-extension-ids" },
        },
        {
          name: ["--display-name", "-d"],
          description: "Display Name of Custom Location",
          args: { name: "display-name" },
        },
        {
          name: "--host-resource-id",
          description: "Host resource ID of the connected cluster",
          args: { name: "host-resource-id" },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: "--namespace",
          description:
            "Namespace for Custom Location. For namespace-scoped extensions, this should match namespace associated with the cluster extension operator",
          args: { name: "namespace" },
        },
        {
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
        },
      ],
    },
    {
      name: "show",
      description: "Get details of a Customlocation",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the Customlocation",
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
      description: "Update a Custom Location",
      options: [
        {
          name: ["--cluster-extension-ids", "-c"],
          description:
            "Space-seperated list of the cluster extension ids - input full id in the format /subscription/.../resourceGroups/.../Microsoft.Kubernetes/connectedClusters/.../providers/Microsoft.KubernetesConfiguration/extensions/",
          args: { name: "cluster-extension-ids" },
          isRequired: true,
        },
        {
          name: "--host-resource-id",
          description: "Host resource ID of the connected cluster",
          args: { name: "host-resource-id" },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "Name of the Customlocation",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: "--namespace",
          description:
            "Namespace for Custom Location. For namespace-scoped extensions, this should match namespace associated with the cluster extension operator",
          args: { name: "namespace" },
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
          name: "--assign-identity",
          description:
            'Create CustomLocation resource with "SystemAssigned" or "None" type identity',
          args: { name: "assign-identity" },
        },
        {
          name: ["--location", "-l"],
          description: "Location of Custom Location resource",
          args: { name: "location" },
        },
        {
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
        },
      ],
    },
  ],
};

export default completion;
