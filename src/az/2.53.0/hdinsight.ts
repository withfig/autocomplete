const completion: Fig.Spec = {
  name: "hdinsight",
  description: "Manage HDInsight resources",
  subcommands: [
    {
      name: "application",
      description: "Manage HDInsight applications",
      subcommands: [
        {
          name: "create",
          description: "Create an application for a HDInsight cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The constant value for the application name",
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
              name: "--script-action-name",
              description: "The name of the script action",
              args: { name: "script-action-name" },
              isRequired: true,
            },
            {
              name: "--script-uri",
              description: "The URI to the script",
              args: { name: "script-uri" },
              isRequired: true,
            },
            {
              name: "--access-mode",
              description: "The access mode for the application",
              args: { name: "access-mode" },
            },
            {
              name: "--destination-port",
              description: "The destination port to connect to",
              args: { name: "destination-port" },
            },
            {
              name: "--disable-gateway-auth",
              description:
                "Indicates whether to disable gateway authentication. Default is to enable gateway authentication. Default: false",
              args: {
                name: "disable-gateway-auth",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--edgenode-size",
              description:
                "The size of the node. See also: https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size",
              args: { name: "edgenode-size" },
            },
            {
              name: "--marketplace-id",
              description: "The marketplace identifier",
              args: { name: "marketplace-id" },
            },
            {
              name: "--no-validation-timeout",
              description:
                "Permit timeout error during argument validation phase. If omitted, validation timeout error will be permitted",
            },
            {
              name: "--script-parameters",
              description: "The parameters for the script",
              args: { name: "script-parameters" },
            },
            {
              name: ["--ssh-password", "-P"],
              description: "SSH password for the cluster nodes",
              args: { name: "ssh-password" },
            },
            {
              name: ["--ssh-public-key", "-K"],
              description: "SSH public key for the cluster nodes",
              args: { name: "ssh-public-key" },
            },
            {
              name: ["--ssh-user", "-U"],
              description: "SSH username for the cluster nodes",
              args: { name: "ssh-user" },
            },
            {
              name: "--sub-domain-suffix",
              description: "The subdomain suffix of the application",
              args: { name: "sub-domain-suffix" },
            },
            {
              name: "--subnet",
              description:
                "The name or ID of subnet. If name is supplied, --vnet-name must be supplied",
              args: { name: "subnet" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: ["--type", "-t"],
              description: "The application type",
              args: {
                name: "type",
                suggestions: ["CustomApplication", "RServer"],
              },
            },
            {
              name: "--vnet-name",
              description: "The name of a virtual network",
              args: { name: "vnet-name" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the specified application on the HDInsight cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The constant value for the application name",
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
          description:
            "Lists all of the applications for the HDInsight cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the cluster",
              args: { name: "cluster-name" },
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
          description: "Gets properties of the specified application",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The constant value for the application name",
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
            "Place the CLI in a waiting state until an operation is complete",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The constant value for the application name",
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
      name: "autoscale",
      description: "Manage HDInsight cluster's Autoscale configuration",
      subcommands: [
        {
          name: "create",
          description: "Enable Autoscale for a running cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the cluster",
              args: { name: "cluster-name" },
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
              name: "--type",
              description: "The autoscale type",
              args: { name: "type", suggestions: ["Load", "Schedule"] },
              isRequired: true,
            },
            {
              name: "--days",
              description: "A space-delimited list of schedule day",
              args: {
                name: "days",
                suggestions: [
                  "Friday",
                  "Monday",
                  "Saturday",
                  "Sunday",
                  "Thursday",
                  "Tuesday",
                  "Wednesday",
                ],
              },
            },
            {
              name: "--max-workernode-count",
              description: "The max workernode count for Load-based atuoscale",
              args: { name: "max-workernode-count" },
            },
            {
              name: "--min-workernode-count",
              description:
                "The minimal workernode count for Load-based atuoscale",
              args: { name: "min-workernode-count" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--time",
              description: "The 24-hour time in the form xx:xx in days",
              args: { name: "time" },
            },
            {
              name: "--timezone",
              description:
                "The timezone for schedule autoscale type. Values from az hdinsight autoscale list-timezones",
              args: { name: "timezone" },
            },
            {
              name: "--workernode-count",
              description: "The schedule workernode count",
              args: { name: "workernode-count" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "delete",
          description: "Disable Autoscale for a running cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the cluster",
              args: { name: "cluster-name" },
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
          name: "list-timezones",
          description:
            "List the available timezone name when enabling Schedule-based Autoscale",
        },
        {
          name: "show",
          description: "Get the Autoscale configuration of a specified cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the cluster",
              args: { name: "cluster-name" },
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
          description: "Update the Autoscale configuration",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the cluster",
              args: { name: "cluster-name" },
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
              name: "--max-workernode-count",
              description: "The max workernode count for Load-based atuoscale",
              args: { name: "max-workernode-count" },
            },
            {
              name: "--min-workernode-count",
              description:
                "The minimal workernode count for Load-based atuoscale",
              args: { name: "min-workernode-count" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--timezone",
              description:
                "The timezone for schedule autoscale type. Values from az hdinsight autoscale list-timezones",
              args: { name: "timezone" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until an operation is complete",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the cluster",
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
          name: "condition",
          description:
            "Manage schedule condition of the HDInsight cluster which enabled Schedule-based Autoscale",
          subcommands: [
            {
              name: "create",
              description: "Add a new schedule condition",
              options: [
                {
                  name: "--cluster-name",
                  description: "The name of the cluster",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: "--days",
                  description: "A space-delimited list of schedule day",
                  args: {
                    name: "days",
                    suggestions: [
                      "Friday",
                      "Monday",
                      "Saturday",
                      "Sunday",
                      "Thursday",
                      "Tuesday",
                      "Wednesday",
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
                  name: "--time",
                  description: "The 24-hour time in the form xx:xx in days",
                  args: { name: "time" },
                  isRequired: true,
                },
                {
                  name: "--workernode-count",
                  description: "The schedule workernode count",
                  args: { name: "workernode-count" },
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
              description: "Delete schedule condition",
              options: [
                {
                  name: "--cluster-name",
                  description: "The name of the cluster",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: "--index",
                  description:
                    "The Space-separated list of condition indices which starts with 0 to delete",
                  args: { name: "index" },
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
              description: "List all schedule conditions",
              options: [
                {
                  name: "--cluster-name",
                  description: "The name of the cluster",
                  args: { name: "cluster-name" },
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
              description: "Update a schedule condition",
              options: [
                {
                  name: "--cluster-name",
                  description: "The name of the cluster",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: "--index",
                  description:
                    "The schedule condition index which starts with 0",
                  args: { name: "index" },
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
                  name: "--days",
                  description: "A space-delimited list of schedule day",
                  args: {
                    name: "days",
                    suggestions: [
                      "Friday",
                      "Monday",
                      "Saturday",
                      "Sunday",
                      "Thursday",
                      "Tuesday",
                      "Wednesday",
                    ],
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--time",
                  description: "The 24-hour time in the form xx:xx in days",
                  args: { name: "time" },
                },
                {
                  name: "--workernode-count",
                  description: "The schedule workernode count",
                  args: { name: "workernode-count" },
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until an operation is complete",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the cluster",
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
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
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
    },
    {
      name: "azure-monitor",
      description:
        "Manage Azure Monitor logs integration on an HDInsight cluster",
      subcommands: [
        {
          name: "disable",
          description:
            "Disable the Azure Monitor logs integration on an HDInsight cluster",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the cluster",
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
          name: "enable",
          description:
            "Enable the Azure Monitor logs integration on an HDInsight cluster",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the cluster",
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
              name: "--workspace",
              description:
                "The name, resource ID or workspace ID of Log Analytics workspace",
              args: { name: "workspace" },
              isRequired: true,
            },
            {
              name: "--no-validation-timeout",
              description:
                "Permit timeout error during argument validation phase. If omitted, validation timeout error will be permitted",
            },
            {
              name: "--primary-key",
              description:
                "The certificate for the Log Analytics workspace. Required when workspace ID is provided",
              args: { name: "primary-key" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Get the status of Azure Monitor logs integration on an HDInsight cluster",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the cluster",
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
      ],
    },
    {
      name: "create",
      description: "Create a new cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the cluster",
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
          name: ["--type", "-t"],
          description:
            "Type of HDInsight cluster, like: hadoop, interactivehive, hbase, kafka, storm, spark, rserver, mlservices. See also: https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#cluster-types",
          args: { name: "type" },
          isRequired: true,
        },
        {
          name: "--assign-identity",
          description: "The name or ID of user assigned identity",
          args: { name: "assign-identity" },
        },
        {
          name: ["--autoscale-workernode-count", "--autoscale-count"],
          description: "The scheduled workernode count",
          args: { name: "autoscale-workernode-count" },
        },
        {
          name: ["--autoscale-max-workernode-count", "--autoscale-max-count"],
          description: "The max workernode count for Load-based atuoscale",
          args: { name: "autoscale-max-workernode-count" },
        },
        {
          name: ["--autoscale-min-workernode-count", "--autoscale-min-count"],
          description: "The minimal workernode count for Load-based atuoscale",
          args: { name: "autoscale-min-workernode-count" },
        },
        {
          name: "--autoscale-type",
          description: "The autoscale type",
          args: { name: "autoscale-type", suggestions: ["Load", "Schedule"] },
        },
        {
          name: "--cluster-admin-account",
          description:
            "The domain user account that will have admin privileges on the cluster. Required only when create cluster with Enterprise Security Package",
          args: { name: "cluster-admin-account" },
        },
        {
          name: "--cluster-admin-password",
          description:
            "The domain admin password. Required only when create cluster with Enterprise Security Package",
          args: { name: "cluster-admin-password" },
        },
        {
          name: "--cluster-configurations",
          description:
            "Extra configurations of various components. Configurations may be supplied from a file using the @{path} syntax or a JSON string. See also: https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-customize-cluster-bootstrap",
          args: { name: "cluster-configurations" },
        },
        {
          name: "--cluster-tier",
          description: "The tier of the cluster",
          args: { name: "cluster-tier", suggestions: ["Premium", "Standard"] },
        },
        {
          name: "--cluster-users-group-dns",
          description:
            "A space-delimited list of Distinguished Names for cluster user groups. Required only when create cluster with Enterprise Security Package",
          args: { name: "cluster-users-group-dns" },
        },
        {
          name: "--component-version",
          description:
            "The versions of various Hadoop components, in space-separated versions in 'component=version' format. Example: Spark=2.0 Hadoop=2.7.3 See also: https://docs.microsoft.com/azure/hdinsight/hdinsight-component-versioning#hadoop-components-available-with-different-hdinsight-versions",
          args: { name: "component-version" },
        },
        {
          name: ["--enable-compute-isolation", "--compute-isolation"],
          description: "Indicate whether enable compute isolation or not",
          args: {
            name: "enable-compute-isolation",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--days",
          description: "A space-delimited list of schedule day",
          args: {
            name: "days",
            suggestions: [
              "Friday",
              "Monday",
              "Saturday",
              "Sunday",
              "Thursday",
              "Tuesday",
              "Wednesday",
            ],
          },
        },
        {
          name: "--domain",
          description:
            "The name or resource ID of the user's Azure Active Directory Domain Service. Required only when create cluster with Enterprise Security Package",
          args: { name: "domain" },
        },
        {
          name: "--edgenode-size",
          description:
            "The size of the node. See also: https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size",
          args: { name: "edgenode-size" },
        },
        {
          name: "--enable-private-link",
          description: "Indicate whether enable the private link or not",
          args: { name: "enable-private-link", suggestions: ["false", "true"] },
        },
        {
          name: "--encryption-algorithm",
          description: "Algorithm identifier for encryption",
          args: {
            name: "encryption-algorithm",
            suggestions: ["RSA-OAEP", "RSA-OAEP-256", "RSA1_5"],
          },
        },
        {
          name: "--encryption-at-host",
          description: "Indicates whether enable encryption at host or not",
          args: { name: "encryption-at-host", suggestions: ["false", "true"] },
        },
        {
          name: "--encryption-in-transit",
          description: "Indicates whether enable encryption in transit",
          args: {
            name: "encryption-in-transit",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--encryption-key-name",
          description: "Key name that is used for enabling disk encryption",
          args: { name: "encryption-key-name" },
        },
        {
          name: "--encryption-key-version",
          description: "Key version that is used for enabling disk encryption",
          args: { name: "encryption-key-version" },
        },
        {
          name: "--encryption-vault-uri",
          description:
            "Base key vault URI where the customers key is located eg. https://myvault.vault.azure.net",
          args: { name: "encryption-vault-uri" },
        },
        {
          name: "--esp",
          description:
            "Specify to create cluster with Enterprise Security Package. If omitted, creating cluster with Enterprise Security Package will not allowed",
        },
        {
          name: "--headnode-size",
          description:
            "The size of the node. See also: https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size",
          args: { name: "headnode-size" },
        },
        {
          name: "--host-sku",
          description: "The dedicated host sku of compute isolation",
          args: { name: "host-sku" },
        },
        {
          name: ["--http-password", "-p"],
          description:
            "HTTP password for the cluster. Will prompt if not given",
          args: { name: "http-password" },
        },
        {
          name: ["--http-user", "-u"],
          description: "HTTP username for the cluster. Default: admin",
          args: { name: "http-user" },
        },
        {
          name: "--idbroker",
          description:
            "Specify to create ESP cluster with HDInsight ID Broker. If omitted, creating ESP cluster with HDInsight ID Broker will not allowed",
        },
        {
          name: "--kafka-client-group-id",
          description: "The client AAD security group id for Kafka Rest Proxy",
          args: { name: "kafka-client-group-id" },
        },
        {
          name: "--kafka-client-group-name",
          description:
            "The client AAD security group name for Kafka Rest Proxy",
          args: { name: "kafka-client-group-name" },
        },
        {
          name: "--kafka-management-node-count",
          description: "The number of kafka management node in the cluster",
          args: { name: "kafka-management-node-count" },
        },
        {
          name: "--kafka-management-node-size",
          description:
            "The size of the node. See also: https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size",
          args: { name: "kafka-management-node-size" },
        },
        {
          name: "--ldaps-urls",
          description:
            "A space-delimited list of LDAPS protocol URLs to communicate with the Active Directory. Required only when create cluster with Enterprise Security Package",
          args: { name: "ldaps-urls" },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: "--minimal-tls-version",
          description: "The minimal supported TLS version",
          args: { name: "minimal-tls-version", suggestions: ["1.2"] },
        },
        {
          name: "--no-validation-timeout",
          description:
            "Permit timeout error during argument validation phase. If omitted, validation timeout error will be permitted",
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: ["--private-link-configurations", "--private-link-config"],
          description:
            "The private link configurations when creating cluster. Private Link Configurations may be supplied from a file using the @{path} syntax or a JSON string. Please see https://github.com/Azure/azure-cli/blob/dev/src/azure-cli/azure/cli/command_modules/hdinsight/tests/latest/privatelinkconfigurations.json",
          args: { name: "private-link-configurations" },
        },
        {
          name: ["--resource-provider-connection", "--rp-connection"],
          description: "The resource provider connection type",
          args: {
            name: "resource-provider-connection",
            suggestions: ["Inbound", "Outbound"],
          },
        },
        {
          name: ["--ssh-password", "-P"],
          description:
            "SSH password for the cluster nodes. If none specified, uses the HTTP password",
          args: { name: "ssh-password" },
        },
        {
          name: ["--ssh-public-key", "-K"],
          description: "SSH public key for the cluster nodes",
          args: { name: "ssh-public-key" },
        },
        {
          name: ["--ssh-user", "-U"],
          description: "SSH username for the cluster nodes",
          args: { name: "ssh-user" },
        },
        {
          name: "--storage-account",
          description: "The name or ID of the storage account",
          args: { name: "storage-account" },
        },
        {
          name: "--storage-account-key",
          description:
            "The storage account key. A key can be retrieved automatically if the user has access to the storage account",
          args: { name: "storage-account-key" },
        },
        {
          name: "--storage-account-managed-identity",
          description:
            "User-assigned managed identity with access to the storage account filesystem. Only required when storage account type is Azure Data Lake Storage Gen2",
          args: { name: "storage-account-managed-identity" },
        },
        {
          name: "--storage-container",
          description:
            "The storage container the cluster will use. Uses the cluster name if none was specified. (WASB only)",
          args: { name: "storage-container" },
        },
        {
          name: "--storage-filesystem",
          description:
            "The storage filesystem the cluster will use. Uses the cluster name if none was specified. (DFS only)",
          args: { name: "storage-filesystem" },
        },
        {
          name: "--subnet",
          description:
            "The name or ID of subnet. If name is supplied, --vnet-name must be supplied",
          args: { name: "subnet" },
        },
        {
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
        },
        {
          name: "--time",
          description: "The 24-hour time in the form of xx:xx in days",
          args: { name: "time" },
        },
        {
          name: "--timezone",
          description:
            "The timezone for schedule autoscale type. Values from az hdinsight autoscale list-timezones",
          args: { name: "timezone" },
        },
        {
          name: ["--version", "-v"],
          description:
            "The HDInsight cluster version. See also: https://docs.microsoft.com/azure/hdinsight/hdinsight-component-versioning#supported-hdinsight-versions",
          args: { name: "version" },
        },
        {
          name: "--vnet-name",
          description: "The name of a virtual network",
          args: { name: "vnet-name" },
        },
        {
          name: ["--workernode-count", "-c"],
          description: "The number of worker nodes in the cluster",
          args: { name: "workernode-count" },
        },
        {
          name: "--workernode-data-disk-size",
          description: "The size of the data disk in GB, e.g. 1023",
          args: { name: "workernode-data-disk-size" },
        },
        {
          name: "--workernode-data-disk-storage-account-type",
          description:
            "The type of storage account that will be used for the data disks: standard_lrs or premium_lrs",
          args: {
            name: "workernode-data-disk-storage-account-type",
            suggestions: ["premium_lrs", "standard_lrs"],
          },
        },
        {
          name: "--workernode-data-disks-per-node",
          description: "The number of data disks to use per worker node",
          args: { name: "workernode-data-disks-per-node" },
        },
        {
          name: "--workernode-size",
          description:
            "The size of the node. See also: https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size",
          args: { name: "workernode-size" },
        },
        {
          name: "--zones",
          description:
            "A space-delimited list of availability zones where cluster will be created",
          args: { name: "zones" },
        },
        {
          name: "--zookeepernode-size",
          description:
            "The size of the node. See also: https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size",
          args: { name: "zookeepernode-size" },
        },
      ],
    },
    {
      name: "delete",
      description: "Deletes the specified HDInsight cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the cluster",
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
      name: "list",
      description:
        "List HDInsight clusters in a resource group or subscription",
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
      name: "list-usage",
      description: "Lists the usages for the specified location",
      options: [
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
          isRequired: true,
        },
      ],
    },
    {
      name: "resize",
      description:
        "Resize the specified HDInsight cluster to the specified size",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the cluster",
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
          name: ["--workernode-count", "-c"],
          description:
            "The target worker node instance count for the operation",
          args: { name: "workernode-count" },
          isRequired: true,
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
      ],
    },
    {
      name: "rotate-disk-encryption-key",
      description:
        "Rotate the disk encryption key of the specified HDInsight cluster",
      options: [
        {
          name: "--encryption-key-name",
          description: "Key name that is used for enabling disk encryption",
          args: { name: "encryption-key-name" },
          isRequired: true,
        },
        {
          name: "--encryption-key-version",
          description: "Key version that is used for enabling disk encryption",
          args: { name: "encryption-key-version" },
          isRequired: true,
        },
        {
          name: "--encryption-vault-uri",
          description:
            "Base key vault URI where the customers key is located eg. https://myvault.vault.azure.net",
          args: { name: "encryption-vault-uri" },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "The name of the cluster",
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
      ],
    },
    {
      name: "show",
      description: "Gets the specified cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the cluster",
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
      description: "Update the tags of the specified HDInsight cluster",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the cluster",
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
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
        },
      ],
    },
    {
      name: "wait",
      description:
        "Place the CLI in a waiting state until an operation is complete",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the cluster",
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
      name: "host",
      description: "Manage HDInsight cluster's virtual hosts",
      subcommands: [
        {
          name: "list",
          description: "List the hosts of the specified HDInsight cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the cluster",
              args: { name: "cluster-name" },
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
          name: "restart",
          description:
            "Restart the specific hosts of the specified HDInsight cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: "--host-names",
              description:
                "A space-delimited list of host names that need to be restarted",
              args: { name: "host-names" },
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
      ],
    },
    {
      name: "monitor",
      description:
        "Manage Classic Azure Monitor logs integration on an HDInsight cluster",
      subcommands: [
        {
          name: "disable",
          description:
            "Disable the Classic Azure Monitor logs integration on an HDInsight cluster",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the cluster",
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
          name: "enable",
          description:
            "Enable the Classic Azure Monitor logs integration on an HDInsight cluster",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the cluster",
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
              name: "--workspace",
              description:
                "The name, resource ID or workspace ID of Log Analytics workspace",
              args: { name: "workspace" },
              isRequired: true,
            },
            {
              name: "--no-validation-timeout",
              description:
                "Permit timeout error during argument validation phase. If omitted, validation timeout error will be permitted",
            },
            {
              name: "--primary-key",
              description:
                "The certificate for the Log Analytics workspace. Required when workspace ID is provided",
              args: { name: "primary-key" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Get the status of Classic Azure Monitor logs integration on an HDInsight cluster",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the cluster",
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
      ],
    },
    {
      name: "script-action",
      description: "Manage HDInsight script actions",
      subcommands: [
        {
          name: "delete",
          description:
            "Deletes a specified persisted script action of the cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the script",
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
          name: "execute",
          description:
            "Execute script actions on the specified HDInsight cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the script action",
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
              name: "--roles",
              description:
                "A space-delimited list of roles (nodes) where the script will be executed. Valid roles are headnode, workernode, zookeepernode, edgenode",
              args: { name: "roles" },
              isRequired: true,
            },
            {
              name: "--script-uri",
              description: "The URI to the script",
              args: { name: "script-uri" },
              isRequired: true,
            },
            {
              name: "--persist-on-success",
              description: "If the scripts needs to be persisted",
            },
            {
              name: "--script-parameters",
              description: "The parameters for the script",
              args: { name: "script-parameters" },
            },
          ],
        },
        {
          name: "list",
          description:
            "Lists all the persisted script actions for the specified cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the cluster",
              args: { name: "cluster-name" },
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
          name: "list-execution-history",
          description:
            "Lists all scripts' execution history for the specified cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the cluster",
              args: { name: "cluster-name" },
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
          name: "promote",
          description:
            "Promotes the specified ad-hoc script execution to a persisted script",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: "--execution-id",
              description: "The script execution id",
              args: { name: "execution-id" },
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
          name: "show-execution-details",
          description:
            "Gets the script execution detail for the given script execution ID",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: "--execution-id",
              description: "The script execution id",
              args: { name: "execution-id" },
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
      ],
    },
  ],
};

export default completion;
