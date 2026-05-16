const completion: Fig.Spec = {
  name: "resource",
  description: "Manage Azure resources",
  subcommands: [
    {
      name: "create",
      description: "Create a resource",
      options: [
        {
          name: ["--properties", "-p"],
          description: "A JSON-formatted string containing resource properties",
          args: { name: "properties" },
          isRequired: true,
        },
        {
          name: "--api-version",
          description:
            "The api version of the resource (omit for the latest stable version)",
          args: { name: "api-version" },
        },
        { name: "--id", description: "Resource ID", args: { name: "id" } },
        {
          name: "--is-full-object",
          description:
            "Indicate that the properties object includes other options such as location, tags, sku, and/or plan",
        },
        {
          name: ["--latest-include-preview", "-v"],
          description:
            "Indicate that the latest api-version will be used regardless of whether it is preview version (like 2020-01-01-preview) or not. For example, if the supported api-version of resource provider is 2020-01-01-preview and 2019-01-01: when passing in this parameter it will take the latest version 2020-01-01-preview, otherwise it will take the latest stable version 2019-01-01 without passing in this parameter",
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: ["--name", "-n"],
          description: "The resource name. (Ex: myC)",
          args: { name: "name" },
        },
        {
          name: "--namespace",
          description: "Provider namespace (Ex: 'Microsoft.Provider')",
          args: { name: "namespace" },
        },
        {
          name: "--parent",
          description: "The parent path (Ex: 'resA/myA/resB/myB')",
          args: { name: "parent" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--resource-type",
          description:
            "The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC')",
          args: { name: "resource-type" },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete a resource",
      options: [
        {
          name: "--api-version",
          description:
            "The api version of the resource (omit for the latest stable version)",
          args: { name: "api-version" },
        },
        {
          name: "--ids",
          description:
            'One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified',
          args: { name: "ids" },
        },
        {
          name: ["--latest-include-preview", "-v"],
          description:
            "Indicate that the latest api-version will be used regardless of whether it is preview version (like 2020-01-01-preview) or not. For example, if the supported api-version of resource provider is 2020-01-01-preview and 2019-01-01: when passing in this parameter it will take the latest version 2020-01-01-preview, otherwise it will take the latest stable version 2019-01-01 without passing in this parameter",
        },
        {
          name: ["--name", "-n"],
          description: "The resource name. (Ex: myC)",
          args: { name: "name" },
        },
        {
          name: "--namespace",
          description: "Provider namespace (Ex: 'Microsoft.Provider')",
          args: { name: "namespace" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--parent",
          description: "The parent path (Ex: 'resA/myA/resB/myB')",
          args: { name: "parent" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--resource-type",
          description:
            "The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC')",
          args: { name: "resource-type" },
        },
      ],
    },
    {
      name: "invoke-action",
      description: "Invoke an action on the resource",
      options: [
        {
          name: "--action",
          description:
            "The action that will be invoked on the specified resource",
          args: { name: "action" },
          isRequired: true,
        },
        {
          name: "--api-version",
          description:
            "The api version of the resource (omit for the latest stable version)",
          args: { name: "api-version" },
        },
        {
          name: "--ids",
          description:
            'One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified',
          args: { name: "ids" },
        },
        {
          name: ["--latest-include-preview", "-v"],
          description:
            "Indicate that the latest api-version will be used regardless of whether it is preview version (like 2020-01-01-preview) or not. For example, if the supported api-version of resource provider is 2020-01-01-preview and 2019-01-01: when passing in this parameter it will take the latest version 2020-01-01-preview, otherwise it will take the latest stable version 2019-01-01 without passing in this parameter",
        },
        {
          name: ["--name", "-n"],
          description: "The resource name. (Ex: myC)",
          args: { name: "name" },
        },
        {
          name: "--namespace",
          description: "Provider namespace (Ex: 'Microsoft.Provider')",
          args: { name: "namespace" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--parent",
          description: "The parent path (Ex: 'resA/myA/resB/myB')",
          args: { name: "parent" },
        },
        {
          name: "--request-body",
          description:
            "JSON encoded parameter arguments for the action that will be passed along in the post request body. Use @{file} to load from a file",
          args: { name: "request-body" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--resource-type",
          description:
            "The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC')",
          args: { name: "resource-type" },
        },
      ],
    },
    {
      name: "list",
      description: "List resources",
      options: [
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: ["--name", "-n"],
          description: "The resource name. (Ex: myC)",
          args: { name: "name" },
        },
        {
          name: "--namespace",
          description: "Provider namespace (Ex: 'Microsoft.Provider')",
          args: { name: "namespace" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--resource-type",
          description:
            "The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC')",
          args: { name: "resource-type" },
        },
        {
          name: "--tag",
          description:
            "A single tag in 'key[=value]' format. Use \"\" to clear existing tags",
          args: { name: "tag" },
        },
      ],
    },
    {
      name: "move",
      description:
        "Move resources from one resource group to another (can be under different subscription)",
      options: [
        {
          name: "--destination-group",
          description: "The destination resource group name",
          args: { name: "destination-group" },
          isRequired: true,
        },
        {
          name: "--ids",
          description: "The space-separated resource ids to be moved",
          args: { name: "ids" },
          isRequired: true,
        },
        {
          name: "--destination-subscription-id",
          description: "The destination subscription identifier",
          args: { name: "destination-subscription-id" },
        },
      ],
    },
    {
      name: "patch",
      description: "Update a resource by PATCH request",
      options: [
        {
          name: ["--properties", "-p"],
          description: "A JSON-formatted string containing resource properties",
          args: { name: "properties" },
          isRequired: true,
        },
        {
          name: "--api-version",
          description:
            "The api version of the resource (omit for the latest stable version)",
          args: { name: "api-version" },
        },
        {
          name: "--ids",
          description:
            'One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified',
          args: { name: "ids" },
        },
        {
          name: "--is-full-object",
          description:
            "Indicate that the properties object includes other options such as location, tags, sku, and/or plan",
        },
        {
          name: ["--latest-include-preview", "-v"],
          description:
            "Indicate that the latest api-version will be used regardless of whether it is preview version (like 2020-01-01-preview) or not. For example, if the supported api-version of resource provider is 2020-01-01-preview and 2019-01-01: when passing in this parameter it will take the latest version 2020-01-01-preview, otherwise it will take the latest stable version 2019-01-01 without passing in this parameter",
        },
        {
          name: ["--name", "-n"],
          description: "The resource name. (Ex: myC)",
          args: { name: "name" },
        },
        {
          name: "--namespace",
          description: "Provider namespace (Ex: 'Microsoft.Provider')",
          args: { name: "namespace" },
        },
        {
          name: "--parent",
          description: "The parent path (Ex: 'resA/myA/resB/myB')",
          args: { name: "parent" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--resource-type",
          description:
            "The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC')",
          args: { name: "resource-type" },
        },
      ],
    },
    {
      name: "show",
      description: "Get the details of a resource",
      options: [
        {
          name: "--api-version",
          description:
            "The api version of the resource (omit for the latest stable version)",
          args: { name: "api-version" },
        },
        {
          name: "--ids",
          description:
            'One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified',
          args: { name: "ids" },
        },
        {
          name: "--include-response-body",
          description:
            "Use if the default command output doesn't capture all of the property data",
        },
        {
          name: ["--latest-include-preview", "-v"],
          description:
            "Indicate that the latest api-version will be used regardless of whether it is preview version (like 2020-01-01-preview) or not. For example, if the supported api-version of resource provider is 2020-01-01-preview and 2019-01-01: when passing in this parameter it will take the latest version 2020-01-01-preview, otherwise it will take the latest stable version 2019-01-01 without passing in this parameter",
        },
        {
          name: ["--name", "-n"],
          description: "The resource name. (Ex: myC)",
          args: { name: "name" },
        },
        {
          name: "--namespace",
          description: "Provider namespace (Ex: 'Microsoft.Provider')",
          args: { name: "namespace" },
        },
        {
          name: "--parent",
          description: "The parent path (Ex: 'resA/myA/resB/myB')",
          args: { name: "parent" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--resource-type",
          description:
            "The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC')",
          args: { name: "resource-type" },
        },
      ],
    },
    {
      name: "tag",
      description: "Tag a resource",
      options: [
        {
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
          isRequired: true,
        },
        {
          name: "--api-version",
          description:
            "The api version of the resource (omit for the latest stable version)",
          args: { name: "api-version" },
        },
        {
          name: "--ids",
          description:
            'One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified',
          args: { name: "ids" },
        },
        {
          name: ["--is-incremental", "-i"],
          description:
            "The option to add tags incrementally without deleting the original tags. If the key of new tag and original tag are duplicated, the original value will be overwritten",
          args: { name: "is-incremental" },
        },
        {
          name: ["--latest-include-preview", "-v"],
          description:
            "Indicate that the latest api-version will be used regardless of whether it is preview version (like 2020-01-01-preview) or not. For example, if the supported api-version of resource provider is 2020-01-01-preview and 2019-01-01: when passing in this parameter it will take the latest version 2020-01-01-preview, otherwise it will take the latest stable version 2019-01-01 without passing in this parameter",
        },
        {
          name: ["--name", "-n"],
          description: "The resource name. (Ex: myC)",
          args: { name: "name" },
        },
        {
          name: "--namespace",
          description: "Provider namespace (Ex: 'Microsoft.Provider')",
          args: { name: "namespace" },
        },
        {
          name: "--parent",
          description: "The parent path (Ex: 'resA/myA/resB/myB')",
          args: { name: "parent" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--resource-type",
          description:
            "The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC')",
          args: { name: "resource-type" },
        },
      ],
    },
    {
      name: "update",
      description: "Update a resource by PUT request",
      options: [
        {
          name: "--add",
          description:
            "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
          args: { name: "add" },
        },
        {
          name: "--api-version",
          description:
            "The api version of the resource (omit for the latest stable version)",
          args: { name: "api-version" },
        },
        {
          name: "--force-string",
          description:
            "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
        },
        {
          name: "--ids",
          description:
            'One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified',
          args: { name: "ids" },
        },
        {
          name: "--include-response-body",
          description:
            "Use if the default command output doesn't capture all of the property data",
        },
        {
          name: ["--latest-include-preview", "-v"],
          description:
            "Indicate that the latest api-version will be used regardless of whether it is preview version (like 2020-01-01-preview) or not. For example, if the supported api-version of resource provider is 2020-01-01-preview and 2019-01-01: when passing in this parameter it will take the latest version 2020-01-01-preview, otherwise it will take the latest stable version 2019-01-01 without passing in this parameter",
        },
        {
          name: ["--name", "-n"],
          description: "The resource name. (Ex: myC)",
          args: { name: "name" },
        },
        {
          name: "--namespace",
          description: "Provider namespace (Ex: 'Microsoft.Provider')",
          args: { name: "namespace" },
        },
        {
          name: "--parent",
          description: "The parent path (Ex: 'resA/myA/resB/myB')",
          args: { name: "parent" },
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
          name: "--resource-type",
          description:
            "The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC')",
          args: { name: "resource-type" },
        },
        {
          name: "--set",
          description:
            "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
          args: { name: "set" },
        },
      ],
    },
    {
      name: "wait",
      description:
        "Place the CLI in a waiting state until a condition of a resources is met",
      options: [
        {
          name: "--api-version",
          description:
            "The api version of the resource (omit for the latest stable version)",
          args: { name: "api-version" },
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
          name: "--ids",
          description:
            'One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified',
          args: { name: "ids" },
        },
        {
          name: "--include-response-body",
          description:
            "Use if the default command output doesn't capture all of the property data",
        },
        {
          name: "--interval",
          description: "Polling interval in seconds",
          args: { name: "interval" },
        },
        {
          name: ["--name", "-n"],
          description: "The resource name. (Ex: myC)",
          args: { name: "name" },
        },
        {
          name: "--namespace",
          description: "Provider namespace (Ex: 'Microsoft.Provider')",
          args: { name: "namespace" },
        },
        {
          name: "--parent",
          description: "The parent path (Ex: 'resA/myA/resB/myB')",
          args: { name: "parent" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--resource-type",
          description:
            "The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC')",
          args: { name: "resource-type" },
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
      name: "link",
      description:
        "Manage links between resources.\n\n\t\tLinking is a feature of the Resource Manager. It enables declaring relationships between resources even if they do not reside in the same resource group. Linking has no impact on resource usage, billing, or role-based access. It allows for managing multiple resources across groups as a single unit",
      subcommands: [
        {
          name: "create",
          description: "Create a new link between resources",
          options: [
            {
              name: "--link",
              description: "Fully-qualified resource ID of the resource link",
              args: { name: "link" },
              isRequired: true,
            },
            {
              name: "--target",
              description:
                "Fully-qualified resource ID of the resource link target",
              args: { name: "target" },
              isRequired: true,
            },
            {
              name: "--notes",
              description: "Notes for the link",
              args: { name: "notes" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a link between resources",
          options: [
            {
              name: "--link",
              description: "Fully-qualified resource ID of the resource link",
              args: { name: "link" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description: "List resource links",
          options: [
            {
              name: "--filter",
              description: "Filter string for limiting results",
              args: { name: "filter" },
            },
            {
              name: "--scope",
              description: "Fully-qualified scope for retrieving links",
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "show",
          description: "Gets a resource link with the specified ID",
          options: [
            {
              name: "--link",
              description: "Fully-qualified resource ID of the resource link",
              args: { name: "link" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update link between resources",
          options: [
            {
              name: "--link",
              description: "Fully-qualified resource ID of the resource link",
              args: { name: "link" },
              isRequired: true,
            },
            {
              name: "--notes",
              description: "Notes for the link",
              args: { name: "notes" },
            },
            {
              name: "--target",
              description:
                "Fully-qualified resource ID of the resource link target",
              args: { name: "target" },
            },
          ],
        },
      ],
    },
    {
      name: "lock",
      description: "Manage Azure resource level locks",
      subcommands: [
        {
          name: "create",
          description: "Create a resource-level lock",
          options: [
            {
              name: ["--lock-type", "-t"],
              description: "The type of lock restriction",
              args: {
                name: "lock-type",
                suggestions: ["CanNotDelete", "ReadOnly"],
              },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the lock",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--namespace",
              description: "Provider namespace (Ex: 'Microsoft.Provider')",
              args: { name: "namespace" },
            },
            {
              name: "--notes",
              description: "Notes about this lock",
              args: { name: "notes" },
            },
            {
              name: "--parent",
              description: "The parent path (Ex: 'resA/myA/resB/myB')",
              args: { name: "parent" },
            },
            {
              name: ["--resource-name", "--resource"],
              description:
                "If an ID is given, other resource arguments should not be given",
              args: { name: "resource-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-type",
              description:
                "The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC')",
              args: { name: "resource-type" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a resource-level lock",
          options: [
            {
              name: "--ids",
              description:
                'One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified',
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the lock",
              args: { name: "name" },
            },
            {
              name: "--namespace",
              description: "Provider namespace (Ex: 'Microsoft.Provider')",
              args: { name: "namespace" },
            },
            {
              name: "--parent",
              description: "The parent path (Ex: 'resA/myA/resB/myB')",
              args: { name: "parent" },
            },
            {
              name: ["--resource-name", "--resource"],
              description:
                "If an ID is given, other resource arguments should not be given",
              args: { name: "resource-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-type",
              description:
                "The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC')",
              args: { name: "resource-type" },
            },
          ],
        },
        {
          name: "list",
          description: "List lock information in the resource-level",
          options: [
            {
              name: "--filter-string",
              description: "A query filter to use to restrict the results",
              args: { name: "filter-string" },
            },
            {
              name: "--namespace",
              description: "Provider namespace (Ex: 'Microsoft.Provider')",
              args: { name: "namespace" },
            },
            {
              name: "--parent",
              description: "The parent path (Ex: 'resA/myA/resB/myB')",
              args: { name: "parent" },
            },
            {
              name: ["--resource-name", "--resource"],
              description:
                "If an ID is given, other resource arguments should not be given",
              args: { name: "resource-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-type",
              description:
                "The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC')",
              args: { name: "resource-type" },
            },
          ],
        },
        {
          name: "show",
          description: "Show the details of a resource-level lock",
          options: [
            {
              name: "--ids",
              description:
                'One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified',
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the lock",
              args: { name: "name" },
            },
            {
              name: "--namespace",
              description: "Provider namespace (Ex: 'Microsoft.Provider')",
              args: { name: "namespace" },
            },
            {
              name: "--parent",
              description: "The parent path (Ex: 'resA/myA/resB/myB')",
              args: { name: "parent" },
            },
            {
              name: ["--resource-name", "--resource"],
              description:
                "If an ID is given, other resource arguments should not be given",
              args: { name: "resource-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-type",
              description:
                "The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC')",
              args: { name: "resource-type" },
            },
          ],
        },
        {
          name: "update",
          description: "Update a resource-level lock",
          options: [
            {
              name: "--ids",
              description:
                'One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified',
              args: { name: "ids" },
            },
            {
              name: ["--lock-type", "-t"],
              description: "The type of lock restriction",
              args: {
                name: "lock-type",
                suggestions: ["CanNotDelete", "ReadOnly"],
              },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the lock",
              args: { name: "name" },
            },
            {
              name: "--namespace",
              description: "Provider namespace (Ex: 'Microsoft.Provider')",
              args: { name: "namespace" },
            },
            {
              name: "--notes",
              description: "Notes about this lock",
              args: { name: "notes" },
            },
            {
              name: "--parent",
              description: "The parent path (Ex: 'resA/myA/resB/myB')",
              args: { name: "parent" },
            },
            {
              name: ["--resource-name", "--resource"],
              description:
                "If an ID is given, other resource arguments should not be given",
              args: { name: "resource-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-type",
              description:
                "The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC')",
              args: { name: "resource-type" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
