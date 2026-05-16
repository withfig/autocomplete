const completion: Fig.Spec = {
  name: "edgeorder",
  description: "Manage Edge Order",
  subcommands: [
    {
      name: "address",
      description: "Manage address with edgeorder sub group address",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new address with the specified parameters. Existing address can be updated with this API",
          options: [
            {
              name: ["--address-name", "--name", "-n"],
              description:
                "The name of the address Resource within the specified resource group. address names must be between 3 and 24 characters in length and use any alphanumeric and underscore only",
              args: { name: "address-name" },
              isRequired: true,
            },
            {
              name: "--contact-details",
              description: "Contact details for the address",
              args: { name: "contact-details" },
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
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--shipping-address",
              description: "Shipping details for the address",
              args: { name: "shipping-address" },
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
          description: "Delete an address",
          options: [
            {
              name: ["--address-name", "--name", "-n"],
              description:
                "The name of the address Resource within the specified resource group. address names must be between 3 and 24 characters in length and use any alphanumeric and underscore only",
              args: { name: "address-name" },
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
            "List all the addresses available under the given resource group. And List all the addresses available under the subscription",
          options: [
            {
              name: "--filter",
              description:
                "$filter is supported to filter based on shipping address properties. Filter supports only equals operation",
              args: { name: "filter" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--skip-token",
              description:
                "$skipToken is supported on Get list of addresses, which provides the next page in the list of address",
              args: { name: "skip-token" },
            },
          ],
        },
        {
          name: "show",
          description: "Get information about the specified address",
          options: [
            {
              name: ["--address-name", "--name", "-n"],
              description:
                "The name of the address Resource within the specified resource group. address names must be between 3 and 24 characters in length and use any alphanumeric and underscore only",
              args: { name: "address-name" },
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
          description: "Update the properties of an existing address",
          options: [
            {
              name: ["--address-name", "--name", "-n"],
              description:
                "The name of the address Resource within the specified resource group. address names must be between 3 and 24 characters in length and use any alphanumeric and underscore only",
              args: { name: "address-name" },
            },
            {
              name: "--contact-details",
              description: "Contact details for the address",
              args: { name: "contact-details" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--if-match",
              description:
                "Defines the If-Match condition. The patch will be performed only if the ETag of the job on the server matches this value",
              args: { name: "if-match" },
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
              name: "--shipping-address",
              description: "Shipping details for the address",
              args: { name: "shipping-address" },
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
            "Place the CLI in a waiting state until a condition of the address is met",
          options: [
            {
              name: "--address-name",
              description:
                "The name of the address Resource within the specified resource group",
              args: { name: "address-name" },
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
      name: "list-config",
      description:
        "This method provides the list of configurations for the given product family, product line and product under subscription",
      options: [
        {
          name: "--configuration-filters",
          description:
            "Holds details about product hierarchy information and filterable property. Expected value: json-string/json-file/@json-file",
          args: { name: "configuration-filters" },
          isRequired: true,
        },
        {
          name: "--location-placement-id",
          description: "Location placement Id of a subscription",
          args: { name: "location-placement-id" },
        },
        {
          name: "--quota-id",
          description: "Quota ID of a subscription",
          args: { name: "quota-id" },
        },
        {
          name: "--registered-features",
          description: "List of registered feature flags for subscription",
          args: { name: "registered-features" },
        },
        {
          name: "--skip-token",
          description:
            "$skipToken is supported on list of configurations, which provides the next page in the list of configurations",
          args: { name: "skip-token" },
        },
      ],
    },
    {
      name: "list-family",
      description:
        "This method provides the list of product families for the given subscription",
      options: [
        {
          name: "--filterable-properties",
          description:
            "Dictionary of filterable properties on product family. Expect value: KEY1=VALUE1 KEY2=VALUE2",
          args: { name: "filterable-properties" },
          isRequired: true,
        },
        {
          name: "--expand",
          description:
            "$expand is supported on configurations parameter for product, which provides details on the configurations for the product",
          args: { name: "expand" },
        },
        {
          name: "--location-placement-id",
          description: "Location placement Id of a subscription",
          args: { name: "location-placement-id" },
        },
        {
          name: "--quota-id",
          description: "Quota ID of a subscription",
          args: { name: "quota-id" },
        },
        {
          name: "--registered-features",
          description: "List of registered feature flags for subscription",
          args: { name: "registered-features" },
        },
        {
          name: "--skip-token",
          description:
            "$skipToken is supported on list of product families, which provides the next page in the list of product families",
          args: { name: "skip-token" },
        },
      ],
    },
    {
      name: "list-metadata",
      description:
        "This method provides the list of product families metadata for the given subscription",
      options: [
        {
          name: "--skip-token",
          description:
            "$skipToken is supported on list of product families metadata, which provides the next page in the list of product families metadata",
          args: { name: "skip-token" },
        },
      ],
    },
    {
      name: "order",
      description: "Manage order with edgeorder sub group order",
      subcommands: [
        {
          name: "list",
          description:
            "List order at resource group level. And List order at subscription level",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--skip-token",
              description:
                "$skipToken is supported on Get list of order, which provides the next page in the list of order",
              args: { name: "skip-token" },
            },
          ],
        },
        {
          name: "show",
          description: "Get an order",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--name",
              description: "The name of the order",
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
      name: "order-item",
      description: "Manage order item with edgeorder sub group order-item",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel order item",
          options: [
            {
              name: "--reason",
              description: "Reason for cancellation",
              args: { name: "reason" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--order-item-name", "--name", "-n"],
              description: "The name of the order item",
              args: { name: "order-item-name" },
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
          name: "create",
          description:
            "Create an order item. Existing order item cannot be updated with this api and should instead be updated with the Update order item API",
          options: [
            {
              name: ["--order-item-name", "--name", "-n"],
              description: "The name of the order item",
              args: { name: "order-item-name" },
              isRequired: true,
            },
            {
              name: "--order-item-resource",
              description:
                "Order item details from request body. Expected value: json-string/json-file/@json-file",
              args: { name: "order-item-resource" },
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
          name: "delete",
          description: "Delete an order item",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--order-item-name", "--name", "-n"],
              description: "The name of the order item",
              args: { name: "order-item-name" },
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
            "List order item at resource group level. And List order item at subscription level",
          options: [
            {
              name: "--expand",
              description:
                "$expand is supported on device details, forward shipping details and reverse shipping details parameters. Each of these can be provided as a comma separated list. Device Details for order item provides details on the devices of the product, Forward and Reverse Shipping details provide forward and reverse shipping details respectively",
              args: { name: "expand" },
            },
            {
              name: "--filter",
              description:
                "$filter is supported to filter based on order id. Filter supports only equals operation",
              args: { name: "filter" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--skip-token",
              description:
                "$skipToken is supported on Get list of order items, which provides the next page in the list of order items",
              args: { name: "skip-token" },
            },
          ],
        },
        {
          name: "return",
          description: "Return order item",
          options: [
            {
              name: "--return-reason",
              description: "Return Reason",
              args: { name: "return-reason" },
              isRequired: true,
            },
            {
              name: "--contact-details",
              description: "Contact details for the address",
              args: { name: "contact-details" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--order-item-name", "--name", "-n"],
              description: "The name of the order item",
              args: { name: "order-item-name" },
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
              name: "--service-tag",
              description:
                "Service tag (located on the bottom-right corner of the device)",
              args: { name: "service-tag" },
            },
            {
              name: "--shipping-address",
              description: "Shipping details for the address",
              args: { name: "shipping-address" },
            },
            {
              name: "--shipping-box-required",
              description: "Shipping Box required",
              args: {
                name: "shipping-box-required",
                suggestions: ["false", "true"],
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
          name: "show",
          description: "Get an order item",
          options: [
            {
              name: "--expand",
              description:
                "$expand is supported on device details, forward shipping details and reverse shipping details parameters. Each of these can be provided as a comma separated list. Device Details for order item provides details on the devices of the product, Forward and Reverse Shipping details provide forward and reverse shipping details respectively",
              args: { name: "expand" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--order-item-name", "--name", "-n"],
              description: "The name of the order item",
              args: { name: "order-item-name" },
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
          description: "Update the properties of an existing order item",
          options: [
            {
              name: "--contact-details",
              description: "Contact details for the address",
              args: { name: "contact-details" },
            },
            {
              name: "--encryption-preferences",
              description: "Preferences related to the Encryption",
              args: { name: "encryption-preferences" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--if-match",
              description:
                "Defines the If-Match condition. The patch will be performed only if the ETag of the order on the server matches this value",
              args: { name: "if-match" },
            },
            {
              name: "--mgmt-preferences",
              description: "Preferences related to the Management resource",
              args: { name: "mgmt-preferences" },
            },
            {
              name: ["--order-item-name", "--name", "-n"],
              description: "The name of the order item",
              args: { name: "order-item-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--notif-email-list",
              description: "Additional notification email list",
              args: { name: "notif-email-list" },
            },
            {
              name: "--notif-preferences",
              description: "Notification preferences",
              args: { name: "notif-preferences" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--shipping-address",
              description: "Shipping details for the address",
              args: { name: "shipping-address" },
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
            {
              name: "--transport-preferences",
              description:
                "Preferences related to the shipment logistics of the order",
              args: { name: "transport-preferences" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the order-item is met",
          options: [
            {
              name: "--order-item-name",
              description: "The name of the order item",
              args: { name: "order-item-name" },
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
              name: "--expand",
              description:
                "$expand is supported on device details, forward shipping details and reverse shipping details parameters",
              args: { name: "expand" },
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
};

export default completion;
