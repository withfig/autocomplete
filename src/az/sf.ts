const completionSpec: Fig.Spec = {
  name: "sf",
  description: "Manage and administer Azure Service Fabric clusters",
  subcommands: [
    {
      name: "application",
      description:
        "Manage applications running on an Azure Service Fabric cluster. Only support ARM deployed applications",
      subcommands: [
        {
          name: "certificate",
          description: "Manage the certificate of an application",
          subcommands: [
            {
              name: "add",
              description:
                "Add a new certificate to the Virtual Machine Scale Sets that make up the cluster to be used by hosted applications",
            },
          ],
        },
        {
          name: "create",
          description:
            "Create a new application on an Azure Service Fabric cluster",
        },
        { name: "delete", description: "Delete an application" },
        { name: "list", description: "List applications of a given cluster" },
        {
          name: "show",
          description:
            "Show the properties of an application on an Azure Service Fabric cluster",
        },
        {
          name: "update",
          description:
            "Update a Azure Service Fabric application. This allows updating the application parameters and/or upgrade the application type version which will trigger an application upgrade",
        },
      ],
    },
    {
      name: "application-type",
      description:
        "Manage application types on an Azure Service Fabric cluster",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new application type on an Azure Service Fabric cluster",
        },
        { name: "delete", description: "Delete an application type" },
        {
          name: "list",
          description: "List application types of a given cluster",
        },
        {
          name: "show",
          description:
            "Show the properties of an application type on an Azure Service Fabric cluster",
        },
        {
          name: "version",
          description:
            "Manage application type versions on an Azure Service Fabric cluster. Only support ARM deployed application type versions",
          subcommands: [
            {
              name: "create",
              description:
                "Create a new application type on an Azure Service Fabric cluster",
            },
            {
              name: "delete",
              description: "Delete an application type version",
            },
            {
              name: "list",
              description: "List version of a given application type",
            },
            {
              name: "show",
              description:
                "Show the properties of an application type version on an Azure Service Fabric cluster",
            },
          ],
        },
      ],
    },
    {
      name: "cluster",
      description: "Manage an Azure Service Fabric cluster",
      subcommands: [
        {
          name: "client-certificate",
          description: "Manage the client certificate of a cluster",
          subcommands: [
            {
              name: "add",
              description:
                "Add a common name or certificate thumbprint to the cluster for client authentication",
            },
            {
              name: "remove",
              description:
                "Remove client certificates or subject names used for authentication",
            },
          ],
        },
        {
          name: "create",
          description: "Create a new Azure Service Fabric cluster",
        },
        {
          name: "durability",
          description: "Manage the durability of a cluster",
          subcommands: [
            {
              name: "update",
              description:
                "Update the durability tier or VM SKU of a node type in the cluster",
            },
          ],
        },
        { name: "list", description: "List cluster resources" },
        {
          name: "node",
          description: "Manage the node instance of a cluster",
          subcommands: [
            {
              name: "add",
              description: "Add nodes to a node type in a cluster",
            },
            {
              name: "remove",
              description: "Remove nodes from a node type in a cluster",
            },
          ],
        },
        {
          name: "node-type",
          description: "Manage the node-type of a cluster",
          subcommands: [
            { name: "add", description: "Add a new node type to a cluster" },
          ],
        },
        {
          name: "reliability",
          description: "Manage the reliability of a cluster",
          subcommands: [
            {
              name: "update",
              description:
                "Update the reliability tier for the primary node in a cluster",
            },
          ],
        },
        {
          name: "setting",
          description: "Manage a cluster's settings",
          subcommands: [
            { name: "remove", description: "Remove settings from a cluster" },
            { name: "set", description: "Update the settings of a cluster" },
          ],
        },
        { name: "show", description: "Gets a Service Fabric cluster resource" },
        {
          name: "upgrade-type",
          description: "Manage the upgrade type of a cluster",
          subcommands: [
            {
              name: "set",
              description: "Change the upgrade type for a cluster",
            },
          ],
        },
      ],
    },
    {
      name: "managed-application",
      description:
        "Manage applications running on an Azure Service Fabric managed cluster. Only support ARM deployed applications",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new managed application on an Azure Service Fabric managed cluster",
        },
        { name: "delete", description: "Delete a managed application" },
        {
          name: "list",
          description: "List managed applications of a given managed cluster",
        },
        {
          name: "show",
          description:
            "Show the properties of a managed application on an Azure Service Fabric managed cluster",
        },
        {
          name: "update",
          description: "Update a Azure Service Fabric managed application",
        },
      ],
    },
    {
      name: "managed-application-type",
      description:
        "Manage application types on an Azure Service Fabric cluster",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new managed application type on an Azure Service Fabric managed cluster",
        },
        { name: "delete", description: "Delete a managed application type" },
        {
          name: "list",
          description:
            "List managed application types of a given managed cluster",
        },
        {
          name: "show",
          description:
            "Show the properties of a managed application type on an Azure Service Fabric managed cluster",
        },
        { name: "update", description: "Update an managed application type" },
        {
          name: "version",
          description:
            "Manage application type versions on an Azure Service Fabric managed cluster. Only support ARM deployed application type versions",
          subcommands: [
            {
              name: "create",
              description:
                "Create a new managed application type on an Azure Service Fabric managed cluster",
            },
            {
              name: "delete",
              description: "Delete a managed application type version",
            },
            {
              name: "list",
              description: "List versions of a given managed application type",
            },
            {
              name: "show",
              description:
                "Show the properties of a managed application type version on an Azure Service Fabric managed cluster",
            },
            {
              name: "update",
              description: "Update a managed application type version",
            },
          ],
        },
      ],
    },
    {
      name: "managed-cluster",
      description: "Manage an Azure Service Fabric managed cluster",
      subcommands: [
        {
          name: "client-certificate",
          description: "Manage client certificates of a manged cluster",
          subcommands: [
            {
              name: "add",
              description:
                "Add a new client certificate to the managed cluster",
            },
            {
              name: "delete",
              description:
                "Delete a client certificate from the managed cluster",
            },
          ],
        },
        { name: "create", description: "Delete a managed cluster" },
        { name: "delete", description: "Delete a managed cluster" },
        { name: "list", description: "List managed clusters" },
        {
          name: "show",
          description:
            "Show the properties of an Azure Service Fabric managed cluster",
        },
        { name: "update", description: "Update a managed cluster" },
      ],
    },
    {
      name: "managed-node-type",
      description:
        "Manage a node type of an Azure Service Fabric managed cluster",
      subcommands: [
        { name: "create", description: "Delete a managed cluster" },
        { name: "delete", description: "Delete node type from a cluster" },
        { name: "list", description: "List node types of a managed cluster" },
        {
          name: "node",
          description:
            "Perform operations on nodes of a node type on managed clusters",
          subcommands: [
            { name: "delete", description: "Delete nodes of a node type" },
            { name: "reimage", description: "Reimage nodes of a node type" },
            { name: "restart", description: "Restart nodes of a node type" },
          ],
        },
        { name: "show", description: "Show the properties of a node type" },
        { name: "update", description: "Update a managed cluster" },
        {
          name: "vm-extension",
          description:
            "Managed vm extension on a node type on managed clusters",
          subcommands: [
            { name: "add", description: "Add an extension to the node type" },
            {
              name: "delete",
              description: "Delete an extension to the node type",
            },
          ],
        },
        {
          name: "vm-secret",
          description: "Managed vm secrets on a node type on managed clusters",
          subcommands: [
            { name: "add", description: "Add a secret to the node type" },
          ],
        },
      ],
    },
    {
      name: "managed-service",
      description:
        "Manage services running on an Azure Service Fabric managed cluster. Only support ARM deployed services",
      subcommands: [
        {
          name: "correlation-scheme",
          description:
            "Manage correlation schemes of services running on an Azure Service Fabric managed cluster. Only support ARM deployed services",
          subcommands: [
            {
              name: "create",
              description:
                "Create a new managed service correlation scheme on an Azure Service Fabric managed cluster",
            },
            {
              name: "delete",
              description: "Delete a managed service correlation scheme",
            },
            {
              name: "update",
              description: "Update a managed service correlation scheme",
            },
          ],
        },
        {
          name: "create",
          description:
            "Create a new managed service on an Azure Service Fabric managed cluster",
        },
        { name: "delete", description: "Delete a managed service" },
        {
          name: "list",
          description: "List managed services of a given managed application",
        },
        {
          name: "load-metrics",
          description:
            "Manage service load metrics running on an Azure Service Fabric managed cluster. Only support ARM deployed services",
          subcommands: [
            {
              name: "create",
              description:
                "Create a new managed service load metric on an Azure Service Fabric managed cluster",
            },
            { name: "delete", description: "Delete a managed service" },
            { name: "update", description: "Update a managed service" },
          ],
        },
        { name: "show", description: "Get a service" },
        { name: "update", description: "Update a managed service" },
      ],
    },
    {
      name: "service",
      description:
        "Manage services running on an Azure Service Fabric cluster. Only support ARM deployed services",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new service on an Azure Service Fabric cluster",
        },
        { name: "delete", description: "Delete a service" },
        { name: "list", description: "List services of a given application" },
        { name: "show", description: "Get a service" },
      ],
    },
  ],
};

export default completionSpec;
