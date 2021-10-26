const completionSpec: Fig.Spec = {
  name: "aks",
  description: "Manage Azure Kubernetes Services",
  subcommands: [
    {
      name: "addon",
      description: "Commands to manage and view single addon conditions",
      subcommands: [
        {
          name: "disable",
          description: "Disable an enabled Kubernetes addon in a cluster",
        },
        { name: "enable", description: "Enable a Kubernetes addon" },
        {
          name: "list",
          description: "List status of all Kubernetes addons in given cluster",
        },
        {
          name: "list-available",
          description: "List available Kubernetes addons",
        },
        {
          name: "show",
          description:
            "Show status and configuration for an enabled Kubernetes addon in a given cluster",
        },
        {
          name: "update",
          description: "Update an already enabled Kubernetes addon",
        },
      ],
    },
    {
      name: "app",
      description: "Commands to manage AKS app",
      subcommands: [
        { name: "up", description: "Deploy to AKS via GitHub actions" },
      ],
    },
    {
      name: "browse",
      description:
        "Show the dashboard for a Kubernetes cluster in a web browser",
    },
    {
      name: "check-acr",
      description: "Validate an ACR is accessible from an AKS cluster",
    },
    {
      name: "command",
      description:
        "See detail usage in 'az aks command invoke', 'az aks command result'",
      subcommands: [
        {
          name: "invoke",
          description:
            "Run a shell command (with kubectl, helm) on your aks cluster, support attaching files as well",
        },
        {
          name: "result",
          description:
            "Fetch result from previously triggered 'aks command invoke'",
        },
      ],
    },
    { name: "create", description: "Create a new managed Kubernetes cluster" },
    { name: "delete", description: "Delete a managed Kubernetes cluster" },
    { name: "disable-addons", description: "Disable Kubernetes addons" },
    {
      name: "egress-endpoints",
      description:
        "Commands to manage egress endpoints in managed Kubernetes cluster",
      subcommands: [
        {
          name: "list",
          description:
            "List egress endpoints that are required or recommended to be whitelisted for a cluster",
        },
      ],
    },
    { name: "enable-addons", description: "Enable Kubernetes addons" },
    {
      name: "get-credentials",
      description: "Get access credentials for a managed Kubernetes cluster",
    },
    {
      name: "get-os-options",
      description:
        "Get the OS options available for creating a managed Kubernetes cluster",
    },
    {
      name: "get-upgrades",
      description:
        "Get the upgrade versions available for a managed Kubernetes cluster",
    },
    {
      name: "get-versions",
      description:
        "Get the versions available for creating a managed Kubernetes cluster",
    },
    {
      name: "install-cli",
      description:
        "Download and install kubectl, the Kubernetes command-line tool. Download and install kubelogin, a client-go credential (exec) plugin implementing azure authentication",
    },
    {
      name: "kanalyze",
      description:
        "Display diagnostic results for the Kubernetes cluster after kollect is done",
    },
    {
      name: "kollect",
      description:
        "Collecting diagnostic information for the Kubernetes cluster",
    },
    { name: "list", description: "List managed Kubernetes clusters" },
    {
      name: "maintenanceconfiguration",
      description:
        "Commands to manage maintenance configurations in managed Kubernetes cluster",
      subcommands: [
        {
          name: "add",
          description:
            "Add a maintenance configuration in managed Kubernetes cluster",
        },
        {
          name: "delete",
          description:
            "Delete a maintenance configuration in managed Kubernetes cluster",
        },
        {
          name: "list",
          description:
            "List maintenance configurations in managed Kubernetes cluster",
        },
        {
          name: "show",
          description:
            "Show the details of a maintenance configuration in managed Kubernetes cluster",
        },
        {
          name: "update",
          description:
            "Update a maintenance configuration of a managed Kubernetes cluster",
        },
      ],
    },
    {
      name: "nodepool",
      description:
        "Commands to manage node pools in Kubernetes kubernetes cluster",
      subcommands: [
        {
          name: "add",
          description: "Add a node pool to the managed Kubernetes cluster",
        },
        {
          name: "delete",
          description:
            "Delete the agent pool in the managed Kubernetes cluster",
        },
        {
          name: "get-upgrades",
          description:
            "Get the available upgrade versions for an agent pool of the managed Kubernetes cluster",
        },
        {
          name: "list",
          description: "List node pools in the managed Kubernetes cluster",
        },
        {
          name: "scale",
          description: "Scale the node pool in a managed Kubernetes cluster",
        },
        {
          name: "show",
          description:
            "Show the details for a node pool in the managed Kubernetes cluster",
        },
        {
          name: "update",
          description:
            "Update a node pool to enable/disable cluster-autoscaler or change min-count or max-count",
        },
        {
          name: "upgrade",
          description: "Upgrade the node pool in a managed Kubernetes cluster",
        },
      ],
    },
    {
      name: "pod-identity",
      description:
        "Commands to manage pod identities in managed Kubernetes cluster",
      subcommands: [
        {
          name: "add",
          description: "Add a pod identity to a managed Kubernetes cluster",
        },
        {
          name: "delete",
          description:
            "Remove a pod identity from a managed Kubernetes cluster",
        },
        {
          name: "exception",
          description:
            "Commands to manage pod identity exceptions in managed Kubernetes cluster",
          subcommands: [
            {
              name: "add",
              description:
                "Add a pod identity exception to a managed Kubernetes cluster",
            },
            {
              name: "delete",
              description:
                "Remove a pod identity exception from a managed Kubernetes cluster",
            },
            {
              name: "list",
              description:
                "List pod identity exceptions in a managed Kubernetes cluster",
            },
            {
              name: "update",
              description:
                "Update a pod identity exception in a managed Kubernetes cluster",
            },
          ],
        },
        {
          name: "list",
          description: "List pod identities in a managed Kubernetes cluster",
        },
      ],
    },
    {
      name: "remove-dev-spaces",
      description: "Remove Azure Dev Spaces from a managed Kubernetes cluster",
    },
    {
      name: "rotate-certs",
      description:
        "Rotate certificates and keys on a managed Kubernetes cluster",
    },
    {
      name: "scale",
      description: "Scale the node pool in a managed Kubernetes cluster",
    },
    {
      name: "show",
      description: "Show the details for a managed Kubernetes cluster",
    },
    {
      name: "start",
      description: "Starts a previously stopped Managed Cluster",
    },
    { name: "stop", description: "Stops a Managed Cluster" },
    { name: "update", description: "Update a managed Kubernetes cluster" },
    {
      name: "update-credentials",
      description:
        "Update credentials for a managed Kubernetes cluster, like service principal",
    },
    {
      name: "upgrade",
      description: "Upgrade a managed Kubernetes cluster to a newer version",
    },
    {
      name: "use-dev-spaces",
      description: "Use Azure Dev Spaces with a managed Kubernetes cluster",
    },
    {
      name: "wait",
      description:
        "Wait for a managed Kubernetes cluster to reach a desired state",
    },
  ],
};

export default completionSpec;
