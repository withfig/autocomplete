const completion: Fig.Spec = {
  name: "databoxedge",
  description: "Support data box edge device and management",
  subcommands: [
    {
      name: "alert",
      description: "Manage alert with databoxedge",
      subcommands: [
        {
          name: "list",
          description:
            "Get all the alerts for a Data Box Edge/Data Box Gateway device",
          options: [
            {
              name: ["--device-name", "-d"],
              description: "The device name",
              args: { name: "device-name" },
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
          description: "Get an alert by name",
          options: [
            {
              name: ["--device-name", "-d"],
              description: "The device name",
              args: { name: "device-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The alert name",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
      ],
    },
    {
      name: "bandwidth-schedule",
      description: "Manage bandwidth schedule with databoxedge",
      subcommands: [
        {
          name: "create",
          description: "Create a bandwidth schedule",
          options: [
            {
              name: "--days",
              description:
                "The days of the week when this schedule is applicable",
              args: { name: "days" },
              isRequired: true,
            },
            {
              name: ["--device-name", "-d"],
              description: "The device name",
              args: { name: "device-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "The bandwidth schedule name which needs to be added/updated",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--rate-in-mbps",
              description: "The bandwidth rate in Mbps",
              args: { name: "rate-in-mbps" },
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
              name: "--start",
              description: "The start time of the schedule in UTC",
              args: { name: "start" },
              isRequired: true,
            },
            {
              name: "--stop",
              description: "The stop time of the schedule in UTC",
              args: { name: "stop" },
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
          description: "Delete the specified bandwidth schedule",
          options: [
            {
              name: ["--device-name", "-d"],
              description: "The device name",
              args: { name: "device-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The bandwidth schedule name",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
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
            "Get all the bandwidth schedules for a Data Box Edge/Data Box Gateway device",
          options: [
            {
              name: ["--device-name", "-d"],
              description: "The device name",
              args: { name: "device-name" },
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
          description: "Get the properties of the specified bandwidth schedule",
          options: [
            {
              name: ["--device-name", "-d"],
              description: "The device name",
              args: { name: "device-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The bandwidth schedule name",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "update",
          description: "Update a bandwidth schedule",
          options: [
            {
              name: "--days",
              description:
                "The days of the week when this schedule is applicable",
              args: { name: "days" },
              isRequired: true,
            },
            {
              name: "--rate-in-mbps",
              description: "The bandwidth rate in Mbps",
              args: { name: "rate-in-mbps" },
              isRequired: true,
            },
            {
              name: "--start",
              description: "The start time of the schedule in UTC",
              args: { name: "start" },
              isRequired: true,
            },
            {
              name: "--stop",
              description: "The stop time of the schedule in UTC",
              args: { name: "stop" },
              isRequired: true,
            },
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: ["--device-name", "-d"],
              description: "The device name",
              args: { name: "device-name" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The bandwidth schedule name which needs to be added/updated",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--remove",
              description:
                "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
              args: { name: "remove" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
              args: { name: "set" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the databoxedge bandwidth-schedule is met",
          options: [
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
              name: ["--device-name", "-d"],
              description: "The device name",
              args: { name: "device-name" },
            },
            { name: "--exists", description: "Wait until the resource exists" },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
            },
            {
              name: ["--name", "-n"],
              description: "The bandwidth schedule name",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
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
      name: "device",
      description: "Manage device with databoxedge",
      subcommands: [
        {
          name: "create",
          description: "Create a Data Box Edge/Data Box Gateway resource",
          options: [
            {
              name: ["--device-name", "--name", "-n"],
              description: "The device name",
              args: { name: "device-name" },
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
              name: "--description",
              description:
                "The Description of the Data Box Edge/Gateway device",
              args: { name: "description" },
            },
            {
              name: "--etag",
              description: "The etag for the devices",
              args: { name: "etag" },
            },
            {
              name: "--friendly-name",
              description: "The Data Box Edge/Gateway device name",
              args: { name: "friendly-name" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--model-description",
              description:
                "The description of the Data Box Edge/Gateway device model",
              args: { name: "model-description" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--sku",
              description: "The SKU type",
              args: {
                name: "sku",
                suggestions: [
                  "EP2_128_1T4_Mx1_W",
                  "EP2_256_2T4_W",
                  "EP2_64_1VPU_W",
                  "Edge",
                  "EdgeMR_Mini",
                  "EdgePR_Base",
                  "EdgePR_Base_UPS",
                  "EdgeP_Base",
                  "EdgeP_High",
                  "GPU",
                  "Gateway",
                  "Management",
                  "RCA_Large",
                  "RCA_Small",
                  "RDC",
                  "TCA_Large",
                  "TCA_Small",
                  "TDC",
                  "TEA_1Node",
                  "TEA_1Node_Heater",
                  "TEA_1Node_UPS",
                  "TEA_1Node_UPS_Heater",
                  "TEA_4Node_Heater",
                  "TEA_4Node_UPS_Heater",
                  "TMA",
                ],
              },
            },
            {
              name: "--status",
              description: "The status of the Data Box Edge/Gateway device",
              args: {
                name: "status",
                suggestions: [
                  "Disconnected",
                  "Maintenance",
                  "NeedsAttention",
                  "Offline",
                  "Online",
                  "PartiallyDisconnected",
                  "ReadyToSetup",
                ],
              },
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
          description: "Delete the Data Box Edge/Data Box Gateway device",
          options: [
            {
              name: ["--device-name", "--name", "-n"],
              description: "The device name",
              args: { name: "device-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "download-update",
          description:
            "Download the updates on a Data Box Edge/Data Box Gateway device",
          options: [
            {
              name: ["--device-name", "--name", "-n"],
              description: "The device name",
              args: { name: "device-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "install-update",
          description:
            "Install the updates on the Data Box Edge/Data Box Gateway device",
          options: [
            {
              name: ["--device-name", "--name", "-n"],
              description: "The device name",
              args: { name: "device-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "list",
          description:
            "Get all the Data Box Edge/Data Box Gateway devices in a resource group or in a subscription",
          options: [
            {
              name: "--expand",
              description:
                "Specify $expand=details to populate additional fields related to the resource or Specify $skipToken= to populate the next page in the list",
              args: { name: "expand" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "scan-for-update",
          description:
            "Scan for updates on a Data Box Edge/Data Box Gateway device",
          options: [
            {
              name: ["--device-name", "--name", "-n"],
              description: "The device name",
              args: { name: "device-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Get the properties of the Data Box Edge/Data Box Gateway device",
          options: [
            {
              name: ["--device-name", "--name", "-n"],
              description: "The device name",
              args: { name: "device-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "show-update-summary",
          description:
            "Get information about the availability of updates based on the last scan of the device. It also gets information about any ongoing download or install jobs on the device",
          options: [
            {
              name: ["--device-name", "--name", "-n"],
              description: "The device name",
              args: { name: "device-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "update",
          description: "Modify a Data Box Edge/Data Box Gateway resource",
          options: [
            {
              name: ["--device-name", "--name", "-n"],
              description: "The device name",
              args: { name: "device-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
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
            "Place the CLI in a waiting state until a condition of the databoxedge device is met",
          options: [
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
              name: ["--device-name", "--name", "-n"],
              description: "The device name",
              args: { name: "device-name" },
            },
            { name: "--exists", description: "Wait until the resource exists" },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
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
      name: "list-node",
      description:
        "Get all the nodes currently configured under this Data Box Edge device",
      options: [
        {
          name: ["--device-name", "-d"],
          description: "The device name",
          args: { name: "device-name" },
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
      name: "list-sku",
      description:
        "List all the available Skus in the region and information related to them",
      options: [
        {
          name: "--filter",
          description: "Specify $filter='location eq ' to filter on location",
          args: { name: "filter" },
        },
      ],
    },
    {
      name: "show-job",
      description:
        "Get the details of a specified job on a Data Box Edge/Data Box Gateway device",
      options: [
        {
          name: ["--device-name", "-d"],
          description: "The device name",
          args: { name: "device-name" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "The job name",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
      ],
    },
    {
      name: "order",
      description: "Manage order with databoxedge",
      subcommands: [
        {
          name: "create",
          description: "Create an order",
          options: [
            {
              name: "--address-line1",
              description: "The address line1",
              args: { name: "address-line1" },
              isRequired: true,
            },
            {
              name: "--city",
              description: "The city name",
              args: { name: "city" },
              isRequired: true,
            },
            {
              name: "--company-name",
              description: "The name of the company",
              args: { name: "company-name" },
              isRequired: true,
            },
            {
              name: "--contact-person",
              description: "The contact person name",
              args: { name: "contact-person" },
              isRequired: true,
            },
            {
              name: "--country",
              description: "The country name",
              args: { name: "country" },
              isRequired: true,
            },
            {
              name: ["--device-name", "-d"],
              description: "The order details of a device",
              args: { name: "device-name" },
              isRequired: true,
            },
            {
              name: "--email-list",
              description: "The email list",
              args: { name: "email-list" },
              isRequired: true,
            },
            {
              name: "--phone",
              description: "The phone number",
              args: { name: "phone" },
              isRequired: true,
            },
            {
              name: "--postal-code",
              description: "The postal code",
              args: { name: "postal-code" },
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
              name: "--state",
              description: "The state name",
              args: { name: "state" },
              isRequired: true,
            },
            {
              name: "--status",
              description:
                "Status of the order as per the allowed status types",
              args: {
                name: "status",
                suggestions: [
                  "Arriving",
                  "AwaitingFulfilment",
                  "AwaitingPreparation",
                  "AwaitingReturnShipment",
                  "AwaitingShipment",
                  "CollectedAtMicrosoft",
                  "Declined",
                  "Delivered",
                  "LostDevice",
                  "ReplacementRequested",
                  "ReturnInitiated",
                  "Shipped",
                  "ShippedBack",
                  "Untracked",
                ],
              },
              isRequired: true,
            },
            {
              name: "--address-line2",
              description: "The address line2",
              args: { name: "address-line2" },
            },
            {
              name: "--address-line3",
              description: "The address line3",
              args: { name: "address-line3" },
            },
            {
              name: "--comments",
              description: "Comments related to this status change",
              args: { name: "comments" },
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
          description: "Delete the order related to the device",
          options: [
            {
              name: ["--device-name", "-d"],
              description: "The device name",
              args: { name: "device-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
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
            "List all the orders related to a Data Box Edge/Data Box Gateway device",
          options: [
            {
              name: ["--device-name", "-d"],
              description: "The device name",
              args: { name: "device-name" },
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
          description: "Get a specific order by name",
          options: [
            {
              name: ["--device-name", "-d"],
              description: "The device name",
              args: { name: "device-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "update",
          description: "Update an order",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--address-line1",
              description: "The address line1",
              args: { name: "address-line1" },
            },
            {
              name: "--address-line2",
              description: "The address line2",
              args: { name: "address-line2" },
            },
            {
              name: "--address-line3",
              description: "The address line3",
              args: { name: "address-line3" },
            },
            {
              name: "--city",
              description: "The city name",
              args: { name: "city" },
            },
            {
              name: "--comments",
              description: "Comments related to this status change",
              args: { name: "comments" },
            },
            {
              name: "--company-name",
              description: "The name of the company",
              args: { name: "company-name" },
            },
            {
              name: "--contact-person",
              description: "The contact person name",
              args: { name: "contact-person" },
            },
            {
              name: "--country",
              description: "The country name",
              args: { name: "country" },
            },
            {
              name: ["--device-name", "-d"],
              description: "The order details of a device",
              args: { name: "device-name" },
            },
            {
              name: "--email-list",
              description: "The email list",
              args: { name: "email-list" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--phone",
              description: "The phone number",
              args: { name: "phone" },
            },
            {
              name: "--postal-code",
              description: "The postal code",
              args: { name: "postal-code" },
            },
            {
              name: "--remove",
              description:
                "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
              args: { name: "remove" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
              args: { name: "set" },
            },
            {
              name: "--state",
              description: "The state name",
              args: { name: "state" },
            },
            {
              name: "--status",
              description:
                "Status of the order as per the allowed status types",
              args: {
                name: "status",
                suggestions: [
                  "Arriving",
                  "AwaitingFulfilment",
                  "AwaitingPreparation",
                  "AwaitingReturnShipment",
                  "AwaitingShipment",
                  "CollectedAtMicrosoft",
                  "Declined",
                  "Delivered",
                  "LostDevice",
                  "ReplacementRequested",
                  "ReturnInitiated",
                  "Shipped",
                  "ShippedBack",
                  "Untracked",
                ],
              },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the databoxedge order is met",
          options: [
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
              name: ["--device-name", "-d"],
              description: "The device name",
              args: { name: "device-name" },
            },
            { name: "--exists", description: "Wait until the resource exists" },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
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
