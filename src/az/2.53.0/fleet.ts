const completion: Fig.Spec = {
  name: "fleet",
  description: "Commands to manage fleet",
  subcommands: [
    {
      name: "create",
      description: "Creates or updates a Fleet",
      options: [
        {
          name: ["--name", "-n"],
          description: "Specify the fleet name",
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
          name: "--agent-subnet-id",
          description:
            "The ID of the subnet which the Fleet hub node will join on startup. If this is not specified, a vnet and subnet will be generated and used",
          args: { name: "agent-subnet-id" },
        },
        {
          name: "--apiserver-subnet-id",
          description:
            "The subnet to be used when apiserver vnet integration is enabled. It is required when creating a new Fleet with BYO vnet",
          args: { name: "apiserver-subnet-id" },
        },
        {
          name: "--assign-identity",
          description:
            "With --enable-managed-identity, enable user assigned managed identity (MSI) on the Fleet resource. Specify the existing user assigned identity resource",
          args: { name: "assign-identity" },
        },
        {
          name: ["--dns-name-prefix", "-p"],
          description:
            "Prefix for hostnames that are created. If not specified, generate a hostname using the managed cluster and resource group names",
          args: { name: "dns-name-prefix" },
        },
        {
          name: "--enable-hub",
          description: "If set, the Fleet will be created with a hub cluster",
        },
        {
          name: "--enable-managed-identity",
          description:
            "Enable system assigned managed identity (MSI) on the Fleet resource",
        },
        {
          name: "--enable-private-cluster",
          description:
            "Whether to create the Fleet hub as a private cluster or not",
        },
        {
          name: "--enable-vnet-integration",
          description:
            "Whether to enable apiserver vnet integration for the Fleet hub or not",
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
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
      description: "Deletes a Fleet",
      options: [
        {
          name: ["--name", "-n"],
          description: "Specify the fleet name",
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
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "get-credentials",
      description: "Lists the user credentials of a Fleet",
      options: [
        {
          name: ["--name", "-n"],
          description: "Specify the fleet name",
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
          name: "--context",
          description: "If specified, overwrite the default context name",
          args: { name: "context" },
        },
        {
          name: ["--file", "-f"],
          description:
            'Kubernetes configuration file to update. Use "-" to print YAML to stdout instead',
          args: { name: "file" },
        },
        {
          name: "--overwrite-existing",
          description:
            "Overwrite any existing cluster entry with the same name",
        },
      ],
    },
    {
      name: "list",
      description:
        "Lists fleets in the specified subscription and resource group",
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
      name: "show",
      description: "Gets a Fleet",
      options: [
        {
          name: ["--name", "-n"],
          description: "Specify the fleet name",
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
      description: "Patches a fleet resource",
      options: [
        {
          name: ["--name", "-n"],
          description: "Specify the fleet name",
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
            "With --enable-managed-identity, enable user assigned managed identity (MSI) on the Fleet resource. Specify the existing user assigned identity resource",
          args: { name: "assign-identity" },
        },
        {
          name: "--enable-managed-identity",
          description:
            "Enable system assigned managed identity (MSI) on the Fleet resource",
          args: {
            name: "enable-managed-identity",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
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
      name: "wait",
      description: "Wait for a fleet resource to reach a desired state",
      options: [
        {
          name: "--fleet-name",
          description: "The name of the Fleet resource. Required",
          args: { name: "fleet-name" },
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
          name: "--created",
          description:
            "Wait until created with 'provisioningState' at 'Succeeded'",
        },
        {
          name: "--custom",
          description:
            "Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']",
          args: { name: "custom" },
        },
        { name: "--deleted", description: "Wait until deleted" },
        { name: "--exists", description: "Wait until the resource exists" },
        {
          name: "--interval",
          description: "Polling interval in seconds",
          args: { name: "interval" },
        },
        {
          name: "--timeout",
          description: "Maximum wait in seconds",
          args: { name: "timeout" },
        },
        {
          name: "--updated",
          description:
            "Wait until updated with provisioningState at 'Succeeded'",
        },
      ],
    },
    {
      name: "member",
      description: "Commands to manage a fleet member",
      subcommands: [
        {
          name: "create",
          description: "Creates or updates a fleet member",
          options: [
            {
              name: ["--fleet-name", "-f"],
              description: "Specify the fleet name",
              args: { name: "fleet-name" },
              isRequired: true,
            },
            {
              name: "--member-cluster-id",
              description: "ID of the managed cluster",
              args: { name: "member-cluster-id" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Specify the fleet member name",
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
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--update-group",
              description: "Group of the fleet member",
              args: { name: "update-group" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a fleet member",
          options: [
            {
              name: ["--fleet-name", "-f"],
              description: "Specify the fleet name",
              args: { name: "fleet-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Specify the fleet member name",
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
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "Lists the members of a fleet",
          options: [
            {
              name: ["--fleet-name", "-f"],
              description: "Specify the fleet name",
              args: { name: "fleet-name" },
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
          description: "Gets a Fleet member",
          options: [
            {
              name: ["--fleet-name", "-f"],
              description: "Specify the fleet name",
              args: { name: "fleet-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Specify the fleet member name",
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
          description: "Update a fleet member",
          options: [
            {
              name: ["--fleet-name", "-f"],
              description: "Specify the fleet name",
              args: { name: "fleet-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Specify the fleet member name",
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
              name: "--update-group",
              description: "Group of the fleet member",
              args: { name: "update-group" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Wait for a fleet member resource to reach a desired state",
          options: [
            {
              name: "--fleet-member-name",
              description: "The name of the Fleet member resource. Required",
              args: { name: "fleet-member-name" },
              isRequired: true,
            },
            {
              name: ["--fleet-name", "-f"],
              description: "Specify the fleet name",
              args: { name: "fleet-name" },
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
              name: "--created",
              description:
                "Wait until created with 'provisioningState' at 'Succeeded'",
            },
            {
              name: "--custom",
              description:
                "Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']",
              args: { name: "custom" },
            },
            { name: "--deleted", description: "Wait until deleted" },
            { name: "--exists", description: "Wait until the resource exists" },
            {
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
            },
            {
              name: "--timeout",
              description: "Maximum wait in seconds",
              args: { name: "timeout" },
            },
            {
              name: "--updated",
              description:
                "Wait until updated with provisioningState at 'Succeeded'",
            },
          ],
        },
      ],
    },
    {
      name: "updaterun",
      description: "Commands to manage a fleet update run",
      subcommands: [
        {
          name: "create",
          description: "Creates or updates a fleet update run",
          options: [
            {
              name: ["--fleet-name", "-f"],
              description: "Specify the fleet name",
              args: { name: "fleet-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Specify name for the update run",
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
              name: "--upgrade-type",
              description:
                "Specify the upgrade type of fleet members. Acceptable values are 'Full' and 'NodeImageOnly'",
              args: {
                name: "upgrade-type",
                suggestions: ["Full", "NodeImageOnly"],
              },
              isRequired: true,
            },
            {
              name: "--kubernetes-version",
              description:
                "Specify the kubernetes version to upgrade fleet member(s) to, when --upgrade-type is set to 'Full'. Acceptable format is x.x.x (eg. 1.2.3)",
              args: { name: "kubernetes-version" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--node-image-selection",
              description:
                "Node Image Selection is an option that lets you choose how your clusters' nodes are upgraded",
              args: {
                name: "node-image-selection",
                suggestions: ["Consistent", "Latest"],
              },
            },
            {
              name: "--stages",
              description:
                "Path to a json file that defines stages to upgrade a fleet. See examples for further reference",
              args: { name: "stages" },
            },
            {
              name: "--update-strategy-name",
              description:
                "The name of the update strategy to use for this update run. If not specified, the default update strategy will be used",
              args: { name: "update-strategy-name" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a fleet update run",
          options: [
            {
              name: ["--fleet-name", "-f"],
              description: "Specify the fleet name",
              args: { name: "fleet-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Specify name for the update run",
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
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "Lists the update runs of a fleet",
          options: [
            {
              name: ["--fleet-name", "-f"],
              description: "Specify the fleet name",
              args: { name: "fleet-name" },
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
          description: "Shows a fleet update run",
          options: [
            {
              name: ["--fleet-name", "-f"],
              description: "Specify the fleet name",
              args: { name: "fleet-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Specify name for the update run",
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
          name: "start",
          description: "Starts a fleet update run",
          options: [
            {
              name: ["--fleet-name", "-f"],
              description: "Specify the fleet name",
              args: { name: "fleet-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Specify name for the update run",
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
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "stop",
          description: "Stops a fleet update run",
          options: [
            {
              name: ["--fleet-name", "-f"],
              description: "Specify the fleet name",
              args: { name: "fleet-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Specify name for the update run",
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
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "wait",
          description:
            "Wait for a fleet updateraun resource to reach a desired state",
          options: [
            {
              name: ["--fleet-name", "-f"],
              description: "Specify the fleet name",
              args: { name: "fleet-name" },
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
              name: "--update-run-name",
              description: "The name of the UpdateRun resource. Required",
              args: { name: "update-run-name" },
              isRequired: true,
            },
            {
              name: "--created",
              description:
                "Wait until created with 'provisioningState' at 'Succeeded'",
            },
            {
              name: "--custom",
              description:
                "Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']",
              args: { name: "custom" },
            },
            { name: "--deleted", description: "Wait until deleted" },
            { name: "--exists", description: "Wait until the resource exists" },
            {
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
            },
            {
              name: "--timeout",
              description: "Maximum wait in seconds",
              args: { name: "timeout" },
            },
            {
              name: "--updated",
              description:
                "Wait until updated with provisioningState at 'Succeeded'",
            },
          ],
        },
      ],
    },
    {
      name: "updatestrategy",
      description: "Commands to manage a fleet update strategy",
      subcommands: [
        {
          name: "create",
          description: "Creates or updates a update strategy",
          options: [
            {
              name: ["--fleet-name", "-f"],
              description: "Specify the fleet name",
              args: { name: "fleet-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Specify name for the fleet update strategy",
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
              name: "--stages",
              description:
                "Path to a json file that defines the update strategy",
              args: { name: "stages" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a update strategy",
          options: [
            {
              name: ["--fleet-name", "-f"],
              description: "Specify the fleet name",
              args: { name: "fleet-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Specify name for the fleet update strategy",
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
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "Lists the fleet's update strategies",
          options: [
            {
              name: ["--fleet-name", "-f"],
              description: "Specify the fleet name",
              args: { name: "fleet-name" },
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
          description: "Shows a update strategy",
          options: [
            {
              name: ["--fleet-name", "-f"],
              description: "Specify the fleet name",
              args: { name: "fleet-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Specify name for the fleet update strategy",
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
          name: "wait",
          description:
            "Wait for a fleet updatestrategy resource to reach a desired state",
          options: [
            {
              name: ["--fleet-name", "-f"],
              description: "Specify the fleet name",
              args: { name: "fleet-name" },
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
              name: "--update-strategy-name",
              description: "The name of the UpdateStrategy resource. Required",
              args: { name: "update-strategy-name" },
              isRequired: true,
            },
            {
              name: "--created",
              description:
                "Wait until created with 'provisioningState' at 'Succeeded'",
            },
            {
              name: "--custom",
              description:
                "Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']",
              args: { name: "custom" },
            },
            { name: "--deleted", description: "Wait until deleted" },
            { name: "--exists", description: "Wait until the resource exists" },
            {
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
            },
            {
              name: "--timeout",
              description: "Maximum wait in seconds",
              args: { name: "timeout" },
            },
            {
              name: "--updated",
              description:
                "Wait until updated with provisioningState at 'Succeeded'",
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
