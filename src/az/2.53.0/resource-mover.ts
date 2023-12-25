const completion: Fig.Spec = {
  name: "resource-mover",
  description: "Manage Resource Mover Service API",
  subcommands: [
    {
      name: "move-collection",
      description: "Manage move-collection",
      subcommands: [
        {
          name: "bulk-remove",
          description:
            "Removes the set of move resources included in the request body from move collection. The orchestration is done by service. To aid the user to prerequisite the operation the client can call operation with validateOnly property set to true",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--input-type",
              description: "Defines the move resource input type",
              args: {
                name: "input-type",
                suggestions: ["MoveResourceId", "MoveResourceSourceId"],
              },
            },
            {
              name: ["--move-collection-name", "--name", "-n"],
              description: "The Move Collection Name",
              args: { name: "move-collection-name" },
            },
            {
              name: "--move-resources",
              description:
                "Gets or sets the list of resource Id's, by default it accepts move resource id's unless the input type is switched via moveResourceInputType property. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
              args: { name: "move-resources" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
              args: {
                name: "no-wait",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
              },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--validate-only",
              description:
                "Gets or sets a value indicating whether the operation needs to only run pre-requisite",
              args: {
                name: "validate-only",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
              },
            },
          ],
        },
        {
          name: "commit",
          description:
            "Commits the set of resources included in the request body. The commit operation is triggered on the moveResources in the moveState 'CommitPending' or 'CommitFailed', on a successful completion the moveResource moveState do a transition to Committed. To aid the user to prerequisite the operation the client can call operation with validateOnly property set to true",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--input-type",
              description: "Defines the move resource input type",
              args: {
                name: "input-type",
                suggestions: ["MoveResourceId", "MoveResourceSourceId"],
              },
            },
            {
              name: ["--move-collection-name", "--name", "-n"],
              description: "The Move Collection Name",
              args: { name: "move-collection-name" },
            },
            {
              name: "--move-resources",
              description:
                "Gets or sets the list of resource Id's, by default it accepts move resource id's unless the input type is switched via moveResourceInputType property. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
              args: { name: "move-resources" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
              args: {
                name: "no-wait",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
              },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--validate-only",
              description:
                "Gets or sets a value indicating whether the operation needs to only run pre-requisite",
              args: {
                name: "validate-only",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
              },
            },
          ],
        },
        {
          name: "create",
          description: "Create a move collection",
          options: [
            {
              name: ["--move-collection-name", "--name", "-n"],
              description: "The Move Collection Name",
              args: { name: "move-collection-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--identity",
              description:
                'Defines the MSI properties of the Move Collection. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "identity" },
            },
            {
              name: ["--location", "-l"],
              description: "The geo-location where the resource lives",
              args: { name: "location" },
            },
            {
              name: "--move-region",
              description:
                "Gets or sets the move region which indicates the region where the VM Regional to Zonal move will be conducted",
              args: { name: "move-region" },
            },
            {
              name: "--move-type",
              description: "Defines the MoveType",
              args: {
                name: "move-type",
                suggestions: ["RegionToRegion", "RegionToZone"],
              },
            },
            {
              name: "--source-region",
              description: "Gets or sets the source region",
              args: { name: "source-region" },
            },
            {
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
            {
              name: "--target-region",
              description: "Gets or sets the target region",
              args: { name: "target-region" },
            },
            {
              name: "--version",
              description: "Gets or sets the version of move collection",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a move collection",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--move-collection-name", "--name", "-n"],
              description: "The Move Collection Name",
              args: { name: "move-collection-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
              args: {
                name: "no-wait",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
              },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=",
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
          name: "discard",
          description:
            "Discards the set of resources included in the request body. The discard operation is triggered on the moveResources in the moveState 'CommitPending' or 'DiscardFailed', on a successful completion the moveResource moveState do a transition to MovePending. To aid the user to prerequisite the operation the client can call operation with validateOnly property set to true",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--input-type",
              description: "Defines the move resource input type",
              args: {
                name: "input-type",
                suggestions: ["MoveResourceId", "MoveResourceSourceId"],
              },
            },
            {
              name: ["--move-collection-name", "--name", "-n"],
              description: "The Move Collection Name",
              args: { name: "move-collection-name" },
            },
            {
              name: "--move-resources",
              description:
                "Gets or sets the list of resource Id's, by default it accepts move resource id's unless the input type is switched via moveResourceInputType property. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
              args: { name: "move-resources" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
              args: {
                name: "no-wait",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
              },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--validate-only",
              description:
                "Gets or sets a value indicating whether the operation needs to only run pre-requisite",
              args: {
                name: "validate-only",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
              },
            },
          ],
        },
        {
          name: "initiate-move",
          description:
            "Moves the set of resources included in the request body. The move operation is triggered after the moveResources are in the moveState 'MovePending' or 'MoveFailed', on a successful completion the moveResource moveState do a transition to CommitPending. To aid the user to prerequisite the operation the client can call operation with validateOnly property set to true",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--input-type",
              description: "Defines the move resource input type",
              args: {
                name: "input-type",
                suggestions: ["MoveResourceId", "MoveResourceSourceId"],
              },
            },
            {
              name: ["--move-collection-name", "--name", "-n"],
              description: "The Move Collection Name",
              args: { name: "move-collection-name" },
            },
            {
              name: "--move-resources",
              description:
                "Gets or sets the list of resource Id's, by default it accepts move resource id's unless the input type is switched via moveResourceInputType property. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
              args: { name: "move-resources" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
              args: {
                name: "no-wait",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
              },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--validate-only",
              description:
                "Gets or sets a value indicating whether the operation needs to only run pre-requisite",
              args: {
                name: "validate-only",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
              },
            },
          ],
        },
        {
          name: "list",
          description: "List all the Move Collections in the subscription",
          options: [
            {
              name: "--max-items",
              description:
                "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
              args: { name: "max-items" },
            },
            {
              name: "--next-token",
              description:
                "Token to specify where to start paginating. This is the token value from a previously truncated response",
              args: { name: "next-token" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "list-required-for",
          description:
            "List of the move resources for which an arm resource is required for",
          options: [
            {
              name: "--source-id",
              description: "The sourceId for which the api is invoked",
              args: { name: "source-id" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--move-collection-name", "--name", "-n"],
              description: "The Move Collection Name",
              args: { name: "move-collection-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=",
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
          name: "list-unresolved-dependency",
          description: "Lists a list of unresolved dependencies",
          options: [
            {
              name: ["--move-collection-name", "--name", "-n"],
              description: "The Move Collection Name",
              args: { name: "move-collection-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--dependency-level",
              description: "Defines the dependency level",
              args: {
                name: "dependency-level",
                suggestions: ["Descendant", "Direct"],
              },
            },
            {
              name: "--filter",
              description:
                "The filter to apply on the operation. For example, $apply=filter(count eq 2)",
              args: { name: "filter" },
            },
            {
              name: "--max-items",
              description:
                "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
              args: { name: "max-items" },
            },
            {
              name: "--next-token",
              description:
                "Token to specify where to start paginating. This is the token value from a previously truncated response",
              args: { name: "next-token" },
            },
            {
              name: "--orderby",
              description:
                "OData order by query option. For example, you can use $orderby=Count desc",
              args: { name: "orderby" },
            },
          ],
        },
        {
          name: "prepare",
          description:
            "Initiates prepare for the set of resources included in the request body. The prepare operation is on the moveResources that are in the moveState 'PreparePending' or 'PrepareFailed', on a successful completion the moveResource moveState do a transition to MovePending. To aid the user to prerequisite the operation the client can call operation with validateOnly property set to true",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--input-type",
              description: "Defines the move resource input type",
              args: {
                name: "input-type",
                suggestions: ["MoveResourceId", "MoveResourceSourceId"],
              },
            },
            {
              name: ["--move-collection-name", "--name", "-n"],
              description: "The Move Collection Name",
              args: { name: "move-collection-name" },
            },
            {
              name: "--move-resources",
              description:
                "Gets or sets the list of resource Id's, by default it accepts move resource id's unless the input type is switched via moveResourceInputType property. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
              args: { name: "move-resources" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
              args: {
                name: "no-wait",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
              },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--validate-only",
              description:
                "Gets or sets a value indicating whether the operation needs to only run pre-requisite",
              args: {
                name: "validate-only",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
              },
            },
          ],
        },
        {
          name: "resolve-dependency",
          description:
            "Computes, resolves and validate the dependencies of the moveResources in the move collection",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--move-collection-name", "--name", "-n"],
              description: "The Move Collection Name",
              args: { name: "move-collection-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
              args: {
                name: "no-wait",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
              },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=",
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
          description: "Get the move collection",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--move-collection-name", "--name", "-n"],
              description: "The Move Collection Name",
              args: { name: "move-collection-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=",
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
          description: "Update a move collection",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
              args: {
                name: "force-string",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
              },
            },
            {
              name: "--identity",
              description:
                'Defines the MSI properties of the Move Collection. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "identity" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--move-collection-name", "--name", "-n"],
              description: "The Move Collection Name",
              args: { name: "move-collection-name" },
            },
            {
              name: "--move-region",
              description:
                "Gets or sets the move region which indicates the region where the VM Regional to Zonal move will be conducted",
              args: { name: "move-region" },
            },
            {
              name: "--move-type",
              description: "Defines the MoveType",
              args: {
                name: "move-type",
                suggestions: ["RegionToRegion", "RegionToZone"],
              },
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
                "Name of resource group. You can configure the default group using az configure --defaults group=",
              args: { name: "resource-group" },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
              args: { name: "set" },
            },
            {
              name: "--source-region",
              description: "Gets or sets the source region",
              args: { name: "source-region" },
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
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
            {
              name: "--target-region",
              description: "Gets or sets the target region",
              args: { name: "target-region" },
            },
            {
              name: "--version",
              description: "Gets or sets the version of move collection",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition is met",
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
              name: ["--move-collection-name", "--name", "-n"],
              description: "The Move Collection Name",
              args: { name: "move-collection-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=",
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
      name: "move-resource",
      description: "Manage move-resource",
      subcommands: [
        {
          name: "add",
          description: "Create a Move Resource in the move collection",
          options: [
            {
              name: "--depends-on-overrides",
              description:
                'Gets or sets the move resource dependencies overrides. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "depends-on-overrides" },
            },
            {
              name: "--existing-target-id",
              description:
                "Gets or sets the existing target ARM Id of the resource",
              args: { name: "existing-target-id" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--move-collection-name",
              description: "The Move Collection Name",
              args: { name: "move-collection-name" },
            },
            {
              name: ["--move-resource-name", "--name", "-n"],
              description: "The Move Resource Name",
              args: { name: "move-resource-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
              args: {
                name: "no-wait",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
              },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-settings",
              description:
                "The resource settings. Expected value: json-string/@json-file. Support json-file and yaml-file",
              args: { name: "resource-settings" },
            },
            {
              name: "--source-id",
              description: "Gets or sets the Source ARM Id of the resource",
              args: { name: "source-id" },
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
          name: "delete",
          description: "Delete a Move Resource from the move collection",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--move-collection-name",
              description: "The Move Collection Name",
              args: { name: "move-collection-name" },
            },
            {
              name: ["--move-resource-name", "--name", "-n"],
              description: "The Move Resource Name",
              args: { name: "move-resource-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
              args: {
                name: "no-wait",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
              },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=",
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
          description: "List the Move Resources in the move collection",
          options: [
            {
              name: ["--move-collection-name", "--name", "-n"],
              description: "The Move Collection Name",
              args: { name: "move-collection-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--filter",
              description:
                "The filter to apply on the operation. For example, you can use $filter=Properties/ProvisioningState eq 'Succeeded'",
              args: { name: "filter" },
            },
            {
              name: "--max-items",
              description:
                "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
              args: { name: "max-items" },
            },
            {
              name: "--next-token",
              description:
                "Token to specify where to start paginating. This is the token value from a previously truncated response",
              args: { name: "next-token" },
            },
          ],
        },
        {
          name: "show",
          description: "Get the Move Resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--move-collection-name",
              description: "The Move Collection Name",
              args: { name: "move-collection-name" },
            },
            {
              name: ["--move-resource-name", "--name", "-n"],
              description: "The Move Resource Name",
              args: { name: "move-resource-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=",
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
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition is met",
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
              name: "--move-collection-name",
              description: "The Move Collection Name",
              args: { name: "move-collection-name" },
            },
            {
              name: ["--move-resource-name", "--name", "-n"],
              description: "The Move Resource Name",
              args: { name: "move-resource-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=",
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
