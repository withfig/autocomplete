const completion: Fig.Spec = {
  name: "k8s-extension",
  description: "Commands to manage Kubernetes Extensions",
  subcommands: [
    {
      name: "create",
      description:
        "Create a Kubernetes Cluster Extension, including purchasing an extension Offer from Azure Marketplace (AKS only). Please refer to the example at the end to see how to create an extension or purchase an extension offer",
      options: [
        {
          name: ["--cluster-name", "-c"],
          description: "Name of the Kubernetes cluster",
          args: { name: "cluster-name" },
          isRequired: true,
        },
        {
          name: ["--cluster-type", "-t"],
          description:
            "Specify Arc clusters or AKS managed clusters or Arc appliances or provisionedClusters",
          args: {
            name: "cluster-type",
            suggestions: [
              "appliances",
              "connectedClusters",
              "managedClusters",
              "provisionedClusters",
            ],
          },
          isRequired: true,
        },
        {
          name: "--extension-type",
          description: "Name of the extension type",
          args: { name: "extension-type" },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "Name of the extension instance",
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
          name: ["--auto-upgrade-minor-version", "--auto-upgrade"],
          description:
            "Automatically upgrade minor version of the extension instance",
          args: {
            name: "auto-upgrade-minor-version",
            suggestions: ["false", "true"],
          },
        },
        {
          name: ["--cluster-resource-provider", "--cluster-rp"],
          description:
            "Cluster Resource Provider name for this clusterType (Required for provisionedClusters)",
          args: { name: "cluster-resource-provider" },
        },
        {
          name: ["--configuration-settings", "--config"],
          description:
            "Configuration Settings as key=value pair. Repeat parameter for each setting",
          args: { name: "configuration-settings" },
        },
        {
          name: ["--config-settings-file", "--config-file"],
          description: "JSON file path for configuration-settings",
          args: { name: "config-settings-file" },
        },
        {
          name: ["--config-protected-settings", "--config-protected"],
          description:
            "Configuration Protected Settings as key=value pair. Repeat parameter for each setting",
          args: { name: "config-protected-settings" },
        },
        {
          name: ["--config-protected-settings-file", "--config-protected-file"],
          description: "JSON file path for configuration-protected-settings",
          args: { name: "config-protected-settings-file" },
        },
        {
          name: "--config-settings",
          description:
            "Option '--config-settings' has been deprecated and will be removed in a future release. Use '--configuration-settings' instead. Configuration Settings as key=value pair. Repeat parameter for each setting",
          args: { name: "config-settings" },
        },
        {
          name: "--configuration-protected-settings",
          description:
            "Option '--configuration-protected-settings' has been deprecated and will be removed in a future release. Use '--config-protected-settings' instead. Configuration Protected Settings as key=value pair. Repeat parameter for each setting",
          args: { name: "configuration-protected-settings" },
        },
        {
          name: "--configuration-protected-settings-file",
          description:
            "Option '--configuration-protected-settings-file' has been deprecated and will be removed in a future release. Use '--config-protected-file' instead. JSON file path for configuration-protected-settings",
          args: { name: "configuration-protected-settings-file" },
        },
        {
          name: "--configuration-settings-file",
          description:
            "Option '--configuration-settings-file' has been deprecated and will be removed in a future release. Use '--config-settings-file' instead. JSON file path for configuration-settings",
          args: { name: "configuration-settings-file" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--plan-name",
          description:
            "The plan name is referring to the Plan ID of the extension that is being taken from Marketplace portal under Usage Information + Support",
          args: { name: "plan-name" },
        },
        {
          name: "--plan-product",
          description:
            "The plan product is referring to the Product ID of the extension that is being taken from Marketplace portal under Usage Information + Support. An example of this is the name of the ISV offering used",
          args: { name: "plan-product" },
        },
        {
          name: "--plan-publisher",
          description:
            "The plan publisher is referring to the Publisher ID of the extension that is being taken from Marketplace portal under Usage Information + Support",
          args: { name: "plan-publisher" },
        },
        {
          name: "--release-namespace",
          description: "Specify the namespace to install the extension release",
          args: { name: "release-namespace" },
        },
        {
          name: "--release-train",
          description: "Specify the release train for the extension type",
          args: { name: "release-train" },
        },
        {
          name: "--scope",
          description: "Specify the extension scope",
          args: { name: "scope", suggestions: ["cluster", "namespace"] },
        },
        {
          name: "--target-namespace",
          description:
            "Specify the target namespace to install to for the extension instance. This parameter is required if extension scope is set to 'namespace'",
          args: { name: "target-namespace" },
        },
        {
          name: "--version",
          description:
            "Specify the version to install for the extension instance if --auto-upgrade-minor-version is not enabled",
          args: { name: "version" },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete a Kubernetes Extension",
      options: [
        {
          name: ["--cluster-name", "-c"],
          description: "Name of the Kubernetes cluster",
          args: { name: "cluster-name" },
          isRequired: true,
        },
        {
          name: ["--cluster-type", "-t"],
          description:
            "Specify Arc clusters or AKS managed clusters or Arc appliances or provisionedClusters",
          args: {
            name: "cluster-type",
            suggestions: [
              "appliances",
              "connectedClusters",
              "managedClusters",
              "provisionedClusters",
            ],
          },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "Name of the extension instance",
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
          name: ["--cluster-resource-provider", "--cluster-rp"],
          description:
            "Cluster Resource Provider name for this clusterType (Required for provisionedClusters)",
          args: { name: "cluster-resource-provider" },
        },
        {
          name: "--force",
          description:
            "Specify whether to force delete the extension from the cluster",
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        { name: ["--yes", "-y"], description: "Ignore confirmation prompts" },
      ],
    },
    {
      name: "list",
      description: "List Kubernetes Extensions",
      options: [
        {
          name: ["--cluster-name", "-c"],
          description: "Name of the Kubernetes cluster",
          args: { name: "cluster-name" },
          isRequired: true,
        },
        {
          name: ["--cluster-type", "-t"],
          description:
            "Specify Arc clusters or AKS managed clusters or Arc appliances or provisionedClusters",
          args: {
            name: "cluster-type",
            suggestions: [
              "appliances",
              "connectedClusters",
              "managedClusters",
              "provisionedClusters",
            ],
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
        {
          name: ["--cluster-resource-provider", "--cluster-rp"],
          description:
            "Cluster Resource Provider name for this clusterType (Required for provisionedClusters)",
          args: { name: "cluster-resource-provider" },
        },
      ],
    },
    {
      name: "show",
      description: "Show a Kubernetes Extension",
      options: [
        {
          name: ["--cluster-name", "-c"],
          description: "Name of the Kubernetes cluster",
          args: { name: "cluster-name" },
          isRequired: true,
        },
        {
          name: ["--cluster-type", "-t"],
          description:
            "Specify Arc clusters or AKS managed clusters or Arc appliances or provisionedClusters",
          args: {
            name: "cluster-type",
            suggestions: [
              "appliances",
              "connectedClusters",
              "managedClusters",
              "provisionedClusters",
            ],
          },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "Name of the extension instance",
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
          name: ["--cluster-resource-provider", "--cluster-rp"],
          description:
            "Cluster Resource Provider name for this clusterType (Required for provisionedClusters)",
          args: { name: "cluster-resource-provider" },
        },
      ],
    },
    {
      name: "update",
      description: "Update mutable properties of a Kubernetes Extension",
      options: [
        {
          name: ["--cluster-name", "-c"],
          description: "Name of the Kubernetes cluster",
          args: { name: "cluster-name" },
          isRequired: true,
        },
        {
          name: ["--cluster-type", "-t"],
          description:
            "Specify Arc clusters or AKS managed clusters or Arc appliances or provisionedClusters",
          args: {
            name: "cluster-type",
            suggestions: [
              "appliances",
              "connectedClusters",
              "managedClusters",
              "provisionedClusters",
            ],
          },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "Name of the extension instance",
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
          name: ["--auto-upgrade-minor-version", "--auto-upgrade"],
          description:
            "Automatically upgrade minor version of the extension instance",
          args: {
            name: "auto-upgrade-minor-version",
            suggestions: ["false", "true"],
          },
        },
        {
          name: ["--cluster-resource-provider", "--cluster-rp"],
          description:
            "Cluster Resource Provider name for this clusterType (Required for provisionedClusters)",
          args: { name: "cluster-resource-provider" },
        },
        {
          name: ["--configuration-settings", "--config"],
          description:
            "Configuration Settings as key=value pair. Repeat parameter for each setting",
          args: { name: "configuration-settings" },
        },
        {
          name: ["--config-settings-file", "--config-file"],
          description: "JSON file path for configuration-settings",
          args: { name: "config-settings-file" },
        },
        {
          name: ["--config-protected-settings", "--config-protected"],
          description:
            "Configuration Protected Settings as key=value pair. Repeat parameter for each setting",
          args: { name: "config-protected-settings" },
        },
        {
          name: ["--config-protected-settings-file", "--config-protected-file"],
          description: "JSON file path for configuration-protected-settings",
          args: { name: "config-protected-settings-file" },
        },
        {
          name: "--config-settings",
          description:
            "Option '--config-settings' has been deprecated and will be removed in a future release. Use '--configuration-settings' instead. Configuration Settings as key=value pair. Repeat parameter for each setting",
          args: { name: "config-settings" },
        },
        {
          name: "--configuration-protected-settings",
          description:
            "Option '--configuration-protected-settings' has been deprecated and will be removed in a future release. Use '--config-protected-settings' instead. Configuration Protected Settings as key=value pair. Repeat parameter for each setting",
          args: { name: "configuration-protected-settings" },
        },
        {
          name: "--configuration-protected-settings-file",
          description:
            "Option '--configuration-protected-settings-file' has been deprecated and will be removed in a future release. Use '--config-protected-file' instead. JSON file path for configuration-protected-settings",
          args: { name: "configuration-protected-settings-file" },
        },
        {
          name: "--configuration-settings-file",
          description:
            "Option '--configuration-settings-file' has been deprecated and will be removed in a future release. Use '--config-settings-file' instead. JSON file path for configuration-settings",
          args: { name: "configuration-settings-file" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--release-train",
          description: "Specify the release train for the extension type",
          args: { name: "release-train" },
        },
        {
          name: "--version",
          description:
            "Specify the version to install for the extension instance if --auto-upgrade-minor-version is not enabled",
          args: { name: "version" },
        },
        { name: ["--yes", "-y"], description: "Ignore confirmation prompts" },
      ],
    },
    {
      name: "extension-types",
      description: "Commands to discover Kubernetes Extension Types",
      subcommands: [
        {
          name: "list",
          description:
            "List available Cluster Extension Types for an existing cluster",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description: "Name of the Kubernetes cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--cluster-type", "-t"],
              description:
                "Specify Arc clusters or AKS managed clusters or Arc appliances",
              args: {
                name: "cluster-type",
                suggestions: [
                  "appliances",
                  "connectedClusters",
                  "managedClusters",
                ],
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
            {
              name: "--plan-name",
              description:
                "The plan name is referring to the Marketplace Plan ID of the extension",
              args: { name: "plan-name" },
            },
            {
              name: "--plan-product",
              description:
                "The plan product is referring to the Marketplace Product ID of the extension",
              args: { name: "plan-product" },
            },
            {
              name: "--plan-publisher",
              description:
                "The plan publisher is referring to the Marketplace Publisher ID of the extension",
              args: { name: "plan-publisher" },
            },
            {
              name: "--release-train",
              description: "Specify the release train for the extension type",
              args: { name: "release-train" },
            },
          ],
        },
        {
          name: "list-by-cluster",
          description:
            "List available Cluster Extension Types for an existing cluster. The properties used for filtering include type of cluster (managed, connected, etc), kubernetes version, location of the cluster",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description: "Name of the Kubernetes cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--cluster-type", "-t"],
              description:
                "Specify Arc clusters or AKS managed clusters or Arc appliances",
              args: {
                name: "cluster-type",
                suggestions: [
                  "appliances",
                  "connectedClusters",
                  "managedClusters",
                ],
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
            {
              name: "--plan-name",
              description:
                "The plan name is referring to the Marketplace Plan ID of the extension",
              args: { name: "plan-name" },
            },
            {
              name: "--plan-product",
              description:
                "The plan product is referring to the Marketplace Product ID of the extension",
              args: { name: "plan-product" },
            },
            {
              name: "--plan-publisher",
              description:
                "The plan publisher is referring to the Marketplace Publisher ID of the extension",
              args: { name: "plan-publisher" },
            },
            {
              name: "--release-train",
              description: "Specify the release train for the extension type",
              args: { name: "release-train" },
            },
          ],
        },
        {
          name: "list-by-location",
          description: "List available Cluster Extension Types in a region",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Name of the location. Values from: az account list-locations",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--cluster-type", "-t"],
              description:
                "Specify Arc clusters or AKS managed clusters or Arc appliances",
              args: {
                name: "cluster-type",
                suggestions: [
                  "appliances",
                  "connectedClusters",
                  "managedClusters",
                ],
              },
            },
            {
              name: "--plan-name",
              description:
                "The plan name is referring to the Marketplace Plan ID of the extension",
              args: { name: "plan-name" },
            },
            {
              name: "--plan-product",
              description:
                "The plan product is referring to the Marketplace Product ID of the extension",
              args: { name: "plan-product" },
            },
            {
              name: "--plan-publisher",
              description:
                "The plan publisher is referring to the Marketplace Publisher ID of the extension",
              args: { name: "plan-publisher" },
            },
            {
              name: "--release-train",
              description: "Specify the release train for the extension type",
              args: { name: "release-train" },
            },
          ],
        },
        {
          name: "list-versions",
          description:
            "List available versions for a Cluster Extension Type for a given cluster",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description: "Name of the Kubernetes cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--cluster-type", "-t"],
              description:
                "Specify Arc clusters or AKS managed clusters or Arc appliances",
              args: {
                name: "cluster-type",
                suggestions: [
                  "appliances",
                  "connectedClusters",
                  "managedClusters",
                ],
              },
              isRequired: true,
            },
            {
              name: "--extension-type",
              description: "Name of the extension type",
              args: { name: "extension-type" },
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
              name: "--major-version",
              description:
                "Filter results by only the major version of an extension type. For example if 1 is specified, all versions with major version 1 (1.1, 1.1.2) will be shown. The default value is None",
              args: { name: "major-version" },
            },
            {
              name: "--release-train",
              description: "Specify the release train for the extension type",
              args: { name: "release-train" },
            },
            {
              name: "--show-latest",
              description:
                "Filter results by only the latest version. For example, if this flag is used the latest version of the extensionType will be shown",
            },
          ],
        },
        {
          name: "list-versions-by-cluster",
          description:
            "List available versions for a Cluster Extension Type for a given cluster. The properties used for filtering include type of cluster (managed, connected, etc), kubernetes version, location of the cluster",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description: "Name of the Kubernetes cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--cluster-type", "-t"],
              description:
                "Specify Arc clusters or AKS managed clusters or Arc appliances",
              args: {
                name: "cluster-type",
                suggestions: [
                  "appliances",
                  "connectedClusters",
                  "managedClusters",
                ],
              },
              isRequired: true,
            },
            {
              name: "--extension-type",
              description: "Name of the extension type",
              args: { name: "extension-type" },
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
              name: "--major-version",
              description:
                "Filter results by only the major version of an extension type. For example if 1 is specified, all versions with major version 1 (1.1, 1.1.2) will be shown. The default value is None",
              args: { name: "major-version" },
            },
            {
              name: "--release-train",
              description: "Specify the release train for the extension type",
              args: { name: "release-train" },
            },
            {
              name: "--show-latest",
              description:
                "Filter results by only the latest version. For example, if this flag is used the latest version of the extensionType will be shown",
            },
          ],
        },
        {
          name: "list-versions-by-location",
          description:
            "List available versions for a Cluster Extension Type versions in a region",
          options: [
            {
              name: "--extension-type",
              description: "Name of the extension type",
              args: { name: "extension-type" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Name of the location. Values from: az account list-locations",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--cluster-type", "-t"],
              description:
                "Specify Arc clusters or AKS managed clusters or Arc appliances",
              args: {
                name: "cluster-type",
                suggestions: [
                  "appliances",
                  "connectedClusters",
                  "managedClusters",
                ],
              },
            },
            {
              name: "--major-version",
              description:
                "Filter results by only the major version of an extension type. For example if 1 is specified, all versions with major version 1 (1.1, 1.1.2) will be shown. The default value is None",
              args: { name: "major-version" },
            },
            {
              name: "--release-train",
              description: "Specify the release train for the extension type",
              args: { name: "release-train" },
            },
            {
              name: "--show-latest",
              description:
                "Filter results by only the latest version. For example, if this flag is used the latest version of the extensionType will be shown",
            },
          ],
        },
        {
          name: "show",
          description:
            "Get properties for a Cluster Extension Type in a region",
          options: [
            {
              name: "--extension-type",
              description: "Name of the extension type",
              args: { name: "extension-type" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Name of the location. Values from: az account list-locations",
              args: { name: "location" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show-by-cluster",
          description:
            "Show properties for a Cluster Extension Type for an existing cluster. The properties used for filtering include type of cluster (managed, connected, etc), kubernetes version, location of the cluster",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description: "Name of the Kubernetes cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--cluster-type", "-t"],
              description:
                "Specify Arc clusters or AKS managed clusters or Arc appliances",
              args: {
                name: "cluster-type",
                suggestions: [
                  "appliances",
                  "connectedClusters",
                  "managedClusters",
                ],
              },
              isRequired: true,
            },
            {
              name: "--extension-type",
              description: "Name of the extension type",
              args: { name: "extension-type" },
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
          name: "show-by-location",
          description:
            "Show properties for a Cluster Extension Type in a region",
          options: [
            {
              name: "--extension-type",
              description: "Name of the extension type",
              args: { name: "extension-type" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Name of the location. Values from: az account list-locations",
              args: { name: "location" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show-version-by-cluster",
          description:
            "Show properties associated with a Cluster Extension Type version for an existing cluster. The properties used for filtering include type of cluster (managed, connected, etc), kubernetes version, location of the cluster",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description: "Name of the Kubernetes cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--cluster-type", "-t"],
              description:
                "Specify Arc clusters or AKS managed clusters or Arc appliances",
              args: {
                name: "cluster-type",
                suggestions: [
                  "appliances",
                  "connectedClusters",
                  "managedClusters",
                ],
              },
              isRequired: true,
            },
            {
              name: "--extension-type",
              description: "Name of the extension type",
              args: { name: "extension-type" },
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
              name: "--version",
              description: "Version for the extension type",
              args: { name: "version" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show-version-by-location",
          description:
            "Show properties associated with a Cluster Extension Type version in a region",
          options: [
            {
              name: "--extension-type",
              description: "Name of the extension type",
              args: { name: "extension-type" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Name of the location. Values from: az account list-locations",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: "--version",
              description: "Version for the extension type",
              args: { name: "version" },
              isRequired: true,
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
