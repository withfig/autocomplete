const completion: Fig.Spec = {
  name: "datafactory",
  description: "Manage Data Factory",
  subcommands: [
    {
      name: "activity-run",
      description: "Manage activity run with datafactory",
      subcommands: [
        {
          name: "query-by-pipeline-run",
          description: "Query activity runs based on input filter conditions",
          options: [
            {
              name: "--last-updated-after",
              description:
                "The time at or after which the run event was updated in 'ISO 8601' format",
              args: { name: "last-updated-after" },
              isRequired: true,
            },
            {
              name: "--last-updated-before",
              description:
                "The time at or before which the run event was updated in 'ISO 8601' format",
              args: { name: "last-updated-before" },
              isRequired: true,
            },
            {
              name: "--continuation-token",
              description:
                "The continuation token for getting the next page of results. Null for first page",
              args: { name: "continuation-token" },
            },
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--filters",
              description: "List of filters",
              args: { name: "filters" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--order-by",
              description: "List of OrderBy option",
              args: { name: "order-by" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--run-id",
              description: "The pipeline run identifier",
              args: { name: "run-id" },
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
      name: "configure-factory-repo",
      description: "Updates a factory's repo information",
      options: [
        {
          name: ["--factory-git-hub-configuration", "--github-config"],
          description: "Factory's GitHub repo information",
          args: { name: "factory-git-hub-configuration" },
        },
        {
          name: "--factory-resource-id",
          description: "The factory resource id",
          args: { name: "factory-resource-id" },
        },
        {
          name: ["--factory-vsts-configuration", "--vsts-config"],
          description: "Factory's VSTS repo information",
          args: { name: "factory-vsts-configuration" },
        },
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
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
      ],
    },
    {
      name: "create",
      description: "Create a factory",
      options: [
        {
          name: ["--factory-name", "--name", "-n"],
          description: "The factory name",
          args: { name: "factory-name" },
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
          name: ["--factory-git-hub-configuration", "--github-config"],
          description: "Factory's GitHub repo information",
          args: { name: "factory-git-hub-configuration" },
        },
        {
          name: ["--factory-vsts-configuration", "--vsts-config"],
          description: "Factory's VSTS repo information",
          args: { name: "factory-vsts-configuration" },
        },
        {
          name: "--global-parameters",
          description:
            "List of parameters for factory. Expected value: json-string/json-file/@json-file",
          args: { name: "global-parameters" },
        },
        {
          name: "--if-match",
          description:
            "ETag of the factory entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update",
          args: { name: "if-match" },
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
      description: "Deletes a factory",
      options: [
        {
          name: ["--factory-name", "--name", "-n"],
          description: "The factory name",
          args: { name: "factory-name" },
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
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "get-data-plane-access",
      description: "Get Data Plane access",
      options: [
        {
          name: "--access-resource-path",
          description:
            "The resource path to get access relative to factory. Currently only empty string is supported which corresponds to the factory resource",
          args: { name: "access-resource-path" },
        },
        {
          name: "--expire-time",
          description:
            "Expiration time for the token. Maximum duration for the token is eight hours and by default the token will expire in eight hours",
          args: { name: "expire-time" },
        },
        {
          name: ["--factory-name", "--name", "-n"],
          description: "The factory name",
          args: { name: "factory-name" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--permissions",
          description:
            "The string with permissions for Data Plane access. Currently only 'r' is supported which grants read only access",
          args: { name: "permissions" },
        },
        {
          name: "--profile-name",
          description:
            "The name of the profile. Currently only the default is supported. The default value is DefaultProfile",
          args: { name: "profile-name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--start-time",
          description:
            "Start time for the token. If not specified the current time will be used",
          args: { name: "start-time" },
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
      name: "get-git-hub-access-token",
      description: "Get GitHub Access Token",
      options: [
        {
          name: "--git-hub-access-code",
          description: "GitHub access code",
          args: { name: "git-hub-access-code" },
          isRequired: true,
        },
        {
          name: "--git-hub-access-token-base-url",
          description: "GitHub access token base URL",
          args: { name: "git-hub-access-token-base-url" },
          isRequired: true,
        },
        {
          name: ["--factory-name", "--name", "-n"],
          description: "The factory name",
          args: { name: "factory-name" },
        },
        {
          name: "--git-hub-client-id",
          description: "GitHub application client ID",
          args: { name: "git-hub-client-id" },
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
      name: "list",
      description:
        "Lists factories. And Lists factories under the specified subscription",
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
      description: "Gets a factory",
      options: [
        {
          name: ["--factory-name", "--name", "-n"],
          description: "The factory name",
          args: { name: "factory-name" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--if-none-match",
          description:
            "ETag of the factory entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned",
          args: { name: "if-none-match" },
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
      description: "Updates a factory",
      options: [
        {
          name: ["--factory-name", "--name", "-n"],
          description: "The factory name",
          args: { name: "factory-name" },
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
      name: "data-flow",
      description: "Managing and configuring Data Flows in Azure Data Factory",
      subcommands: [
        {
          name: "create",
          description: "Creates a data flow within a factory",
          options: [
            {
              name: ["--data-flow-name", "--name", "-n"],
              description: "The data flow name",
              args: { name: "data-flow-name" },
              isRequired: true,
            },
            {
              name: ["--factory-name", "-f"],
              description: "The factory name",
              args: { name: "factory-name" },
              isRequired: true,
            },
            {
              name: ["--flow-type", "-t"],
              description:
                "The data flow type. Valid choices: MappingDataFlow, Flowlet",
              args: { name: "flow-type" },
              isRequired: true,
            },
            {
              name: "--properties",
              description:
                "Specified properties for the dataflow. Expected value: json-string/json-file/@json-file",
              args: { name: "properties" },
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
              name: "--if-match",
              description:
                "ETag of the data flow entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update",
              args: { name: "if-match" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a specific data flow in a given factory",
          options: [
            {
              name: ["--data-flow-name", "--name", "-n"],
              description: "The data flow name",
              args: { name: "data-flow-name" },
            },
            {
              name: ["--factory-name", "-f"],
              description: "The factory name",
              args: { name: "factory-name" },
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
          name: "list",
          description: "List data flows within a provided factory",
          options: [
            {
              name: ["--factory-name", "-f"],
              description: "The factory name",
              args: { name: "factory-name" },
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
          description: "Show information about the specified data flow",
          options: [
            {
              name: ["--data-flow-name", "--name", "-n"],
              description: "The data flow name",
              args: { name: "data-flow-name" },
            },
            {
              name: ["--factory-name", "-f"],
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--if-none-match",
              description:
                "ETag of the pipeline entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned",
              args: { name: "if-none-match" },
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
          description: "Updates a specified data flow within a factory",
          options: [
            {
              name: "--properties",
              description:
                "Specified properties for the dataflow. Expected value: json-string/json-file/@json-file",
              args: { name: "properties" },
              isRequired: true,
            },
            {
              name: ["--data-flow-name", "--name", "-n"],
              description: "The data flow name",
              args: { name: "data-flow-name" },
            },
            {
              name: ["--factory-name", "-f"],
              description: "The factory name",
              args: { name: "factory-name" },
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
      ],
    },
    {
      name: "dataset",
      description: "Manage dataset with datafactory",
      subcommands: [
        {
          name: "create",
          description: "Create a dataset",
          options: [
            {
              name: ["--dataset-name", "--name", "-n"],
              description: "The dataset name",
              args: { name: "dataset-name" },
              isRequired: true,
            },
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
              isRequired: true,
            },
            {
              name: "--properties",
              description:
                "Dataset properties. Expected value: json-string/json-file/@json-file",
              args: { name: "properties" },
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
              name: "--if-match",
              description:
                "ETag of the dataset entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update",
              args: { name: "if-match" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a dataset",
          options: [
            {
              name: ["--dataset-name", "--name", "-n"],
              description: "The dataset name",
              args: { name: "dataset-name" },
            },
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
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
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "Lists datasets",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
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
          description: "Gets a dataset",
          options: [
            {
              name: ["--dataset-name", "--name", "-n"],
              description: "The dataset name",
              args: { name: "dataset-name" },
            },
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--if-none-match",
              description:
                "ETag of the dataset entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned",
              args: { name: "if-none-match" },
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
          description: "Update a dataset",
          options: [
            {
              name: "--linked-service-name",
              description:
                "Linked service reference. Expected value: json-string/json-file/@json-file",
              args: { name: "linked-service-name" },
              isRequired: true,
            },
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--annotations",
              description:
                "List of tags that can be used for describing the Dataset. Expected value: json-string/json-file/@json-file",
              args: { name: "annotations" },
            },
            {
              name: ["--dataset-name", "--name", "-n"],
              description: "The dataset name",
              args: { name: "dataset-name" },
            },
            {
              name: "--description",
              description: "Dataset description",
              args: { name: "description" },
            },
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--folder",
              description:
                "The folder that this Dataset is in. If not specified, Dataset will appear at the root level",
              args: { name: "folder" },
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
              name: "--if-match",
              description:
                "ETag of the dataset entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update",
              args: { name: "if-match" },
            },
            {
              name: "--if-none-match",
              description:
                "ETag of the dataset entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned. Default value is None",
              args: { name: "if-none-match" },
            },
            {
              name: "--parameters",
              description:
                "Parameters for dataset. Expected value: json-string/json-file/@json-file",
              args: { name: "parameters" },
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
              name: "--schema",
              description:
                "Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement. Expected value: json-string/json-file/@json-file",
              args: { name: "schema" },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
              args: { name: "set" },
            },
            {
              name: "--structure",
              description:
                "Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement. Expected value: json-string/json-file/@json-file",
              args: { name: "structure" },
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
      name: "integration-runtime",
      description: "Manage integration runtime with datafactory",
      subcommands: [
        {
          name: "delete",
          description: "Deletes an integration runtime",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--integration-runtime-name", "--name", "-n"],
              description: "The integration runtime name",
              args: { name: "integration-runtime-name" },
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
          name: "get-connection-info",
          description:
            "Gets the on-premises integration runtime connection information for encrypting the on-premises data source credentials",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--integration-runtime-name", "--name", "-n"],
              description: "The integration runtime name",
              args: { name: "integration-runtime-name" },
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
          name: "get-monitoring-data",
          description:
            "Get the integration runtime monitoring data, which includes the monitor data for all the nodes under this integration runtime",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--integration-runtime-name", "--name", "-n"],
              description: "The integration runtime name",
              args: { name: "integration-runtime-name" },
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
          name: "get-status",
          description:
            "Gets detailed status information for an integration runtime",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--integration-runtime-name", "--name", "-n"],
              description: "The integration runtime name",
              args: { name: "integration-runtime-name" },
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
          description: "Lists integration runtimes",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
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
          name: "list-auth-key",
          description:
            "Retrieves the authentication keys for an integration runtime",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
              isRequired: true,
            },
            {
              name: ["--integration-runtime-name", "--name", "-n"],
              description: "The integration runtime name",
              args: { name: "integration-runtime-name" },
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
          name: "regenerate-auth-key",
          description:
            "Regenerates the authentication key for an integration runtime",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--integration-runtime-name", "--name", "-n"],
              description: "The integration runtime name",
              args: { name: "integration-runtime-name" },
            },
            {
              name: "--key-name",
              description: "The name of the authentication key to regenerate",
              args: { name: "key-name", suggestions: ["authKey1", "authKey2"] },
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
          name: "remove-link",
          description:
            "Remove all linked integration runtimes under specific data factory in a self-hosted integration runtime",
          options: [
            {
              name: "--linked-factory-name",
              description:
                "The data factory name for linked integration runtime",
              args: { name: "linked-factory-name" },
              isRequired: true,
            },
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--integration-runtime-name", "--name", "-n"],
              description: "The integration runtime name",
              args: { name: "integration-runtime-name" },
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
          description: "Gets an integration runtime",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--if-none-match",
              description:
                "ETag of the integration runtime entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned",
              args: { name: "if-none-match" },
            },
            {
              name: ["--integration-runtime-name", "--name", "-n"],
              description: "The integration runtime name",
              args: { name: "integration-runtime-name" },
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
          name: "start",
          description: "Starts a ManagedReserved type integration runtime",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--integration-runtime-name", "--name", "-n"],
              description: "The integration runtime name",
              args: { name: "integration-runtime-name" },
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
          name: "stop",
          description: "Stops a ManagedReserved type integration runtime",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--integration-runtime-name", "--name", "-n"],
              description: "The integration runtime name",
              args: { name: "integration-runtime-name" },
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
          name: "sync-credentials",
          description:
            "Force the integration runtime to synchronize credentials across integration runtime nodes, and this will override the credentials across all worker nodes with those available on the dispatcher node. If you already have the latest credential backup file, you should manually import it (preferred) on any self-hosted integration runtime node than using this API directly",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--integration-runtime-name", "--name", "-n"],
              description: "The integration runtime name",
              args: { name: "integration-runtime-name" },
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
          description: "Updates an integration runtime",
          options: [
            {
              name: "--auto-update",
              description:
                "Enables or disables the auto-update feature of the self-hosted integration runtime. See https://go.microsoft.com/fwlink/?linkid=854189",
              args: { name: "auto-update", suggestions: ["Off", "On"] },
            },
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--integration-runtime-name", "--name", "-n"],
              description: "The integration runtime name",
              args: { name: "integration-runtime-name" },
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
              name: "--update-delay-offset",
              description:
                "The time offset (in hours) in the day, e.g., PT03H is 3 hours. The integration runtime auto update will happen on that time",
              args: { name: "update-delay-offset" },
            },
          ],
        },
        {
          name: "upgrade",
          description:
            "Upgrade self-hosted integration runtime to latest version if availability",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--integration-runtime-name", "--name", "-n"],
              description: "The integration runtime name",
              args: { name: "integration-runtime-name" },
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
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the datafactory integration-runtime is met",
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
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--if-none-match",
              description:
                "ETag of the integration runtime entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned",
              args: { name: "if-none-match" },
            },
            {
              name: ["--integration-runtime-name", "--name", "-n"],
              description: "The integration runtime name",
              args: { name: "integration-runtime-name" },
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
        {
          name: "linked-integration-runtime",
          description:
            "Manage integration runtime with datafactory sub group linked-integration-runtime",
          subcommands: [
            {
              name: "create",
              description:
                "Create a linked integration runtime entry in a shared integration runtime",
              options: [
                {
                  name: "--factory-name",
                  description: "The factory name",
                  args: { name: "factory-name" },
                  isRequired: true,
                },
                {
                  name: "--integration-runtime-name",
                  description: "The integration runtime name",
                  args: { name: "integration-runtime-name" },
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
                  name: "--data-factory-name",
                  description:
                    "The name of the data factory that the linked integration runtime belongs to",
                  args: { name: "data-factory-name" },
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
                },
                {
                  name: "--name",
                  description: "The name of the linked integration runtime",
                  args: { name: "name" },
                },
                {
                  name: "--subscription-id",
                  description:
                    "The ID of the subscription that the linked integration runtime belongs to",
                  args: { name: "subscription-id" },
                },
              ],
            },
          ],
        },
        {
          name: "managed",
          description:
            "Manage integration runtime with datafactory sub group managed",
          subcommands: [
            {
              name: "create",
              description: "Create an integration runtime",
              options: [
                {
                  name: "--factory-name",
                  description: "The factory name",
                  args: { name: "factory-name" },
                  isRequired: true,
                },
                {
                  name: ["--integration-runtime-name", "--name", "-n"],
                  description: "The integration runtime name",
                  args: { name: "integration-runtime-name" },
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
                  name: "--compute-properties",
                  description:
                    "The compute resource for managed integration runtime. Expected value: json-string/json-file/@json-file",
                  args: { name: "compute-properties" },
                },
                {
                  name: "--description",
                  description: "Integration runtime description",
                  args: { name: "description" },
                },
                {
                  name: "--if-match",
                  description:
                    "ETag of the integration runtime entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update",
                  args: { name: "if-match" },
                },
                {
                  name: "--ssis-properties",
                  description:
                    "SSIS properties for managed integration runtime. Expected value: json-string/json-file/@json-file",
                  args: { name: "ssis-properties" },
                },
              ],
            },
          ],
        },
        {
          name: "self-hosted",
          description:
            "Manage integration runtime with datafactory sub group self-hosted",
          subcommands: [
            {
              name: "create",
              description: "Create an integration runtime",
              options: [
                {
                  name: "--factory-name",
                  description: "The factory name",
                  args: { name: "factory-name" },
                  isRequired: true,
                },
                {
                  name: ["--integration-runtime-name", "--name", "-n"],
                  description: "The integration runtime name",
                  args: { name: "integration-runtime-name" },
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
                  description: "Integration runtime description",
                  args: { name: "description" },
                },
                {
                  name: "--if-match",
                  description:
                    "ETag of the integration runtime entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update",
                  args: { name: "if-match" },
                },
                {
                  name: "--linked-info",
                  description:
                    "The base definition of a linked integration runtime. Expected value: json-string/json-file/@json-file",
                  args: { name: "linked-info" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "integration-runtime-node",
      description: "Manage integration runtime node with datafactory",
      subcommands: [
        {
          name: "delete",
          description: "Deletes a self-hosted integration runtime node",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--integration-runtime-name",
              description: "The integration runtime name",
              args: { name: "integration-runtime-name" },
            },
            {
              name: "--node-name",
              description: "The integration runtime node name",
              args: { name: "node-name" },
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
          name: "get-ip-address",
          description:
            "Get the IP address of self-hosted integration runtime node",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--integration-runtime-name",
              description: "The integration runtime name",
              args: { name: "integration-runtime-name" },
            },
            {
              name: "--node-name",
              description: "The integration runtime node name",
              args: { name: "node-name" },
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
          description: "Gets a self-hosted integration runtime node",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--integration-runtime-name",
              description: "The integration runtime name",
              args: { name: "integration-runtime-name" },
            },
            {
              name: "--node-name",
              description: "The integration runtime node name",
              args: { name: "node-name" },
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
          description: "Updates a self-hosted integration runtime node",
          options: [
            {
              name: "--concurrent-jobs-limit",
              description:
                "The number of concurrent jobs permitted to run on the integration runtime node. Values between 1 and maxConcurrentJobs(inclusive) are allowed",
              args: { name: "concurrent-jobs-limit" },
            },
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--integration-runtime-name",
              description: "The integration runtime name",
              args: { name: "integration-runtime-name" },
            },
            {
              name: "--node-name",
              description: "The integration runtime node name",
              args: { name: "node-name" },
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
      name: "linked-service",
      description: "Manage linked service with datafactory",
      subcommands: [
        {
          name: "create",
          description: "Create a linked service",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
              isRequired: true,
            },
            {
              name: ["--linked-service-name", "--name", "-n"],
              description: "The linked service name",
              args: { name: "linked-service-name" },
              isRequired: true,
            },
            {
              name: "--properties",
              description:
                "Properties of linked service. Expected value: json-string/json-file/@json-file",
              args: { name: "properties" },
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
              name: "--if-match",
              description:
                "ETag of the linkedService entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update",
              args: { name: "if-match" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a linked service",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--linked-service-name", "--name", "-n"],
              description: "The linked service name",
              args: { name: "linked-service-name" },
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
          description: "Lists linked services",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
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
          description: "Gets a linked service",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--if-none-match",
              description:
                "ETag of the linked service entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned",
              args: { name: "if-none-match" },
            },
            {
              name: ["--linked-service-name", "--name", "-n"],
              description: "The linked service name",
              args: { name: "linked-service-name" },
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
          description: "Update a linked service",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--annotations",
              description:
                "List of tags that can be used for describing the linked service. Expected value: json-string/json-file/@json-file",
              args: { name: "annotations" },
            },
            {
              name: "--connect-via",
              description:
                "The integration runtime reference. Expected value: json-string/json-file/@json-file",
              args: { name: "connect-via" },
            },
            {
              name: "--description",
              description: "Linked service description",
              args: { name: "description" },
            },
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
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
              name: "--if-match",
              description:
                "ETag of the linkedService entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update",
              args: { name: "if-match" },
            },
            {
              name: "--if-none-match",
              description:
                "ETag of the linked service entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned. Default value is None",
              args: { name: "if-none-match" },
            },
            {
              name: ["--linked-service-name", "--name", "-n"],
              description: "The linked service name",
              args: { name: "linked-service-name" },
            },
            {
              name: "--parameters",
              description:
                "Parameters for linked service. Expected value: json-string/json-file/@json-file",
              args: { name: "parameters" },
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
      ],
    },
    {
      name: "managed-private-endpoint",
      description: "Manage managed private endpoint with datafactory",
      subcommands: [
        {
          name: "create",
          description: "Create a managed private endpoint",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
              isRequired: true,
            },
            {
              name: ["--managed-private-endpoint-name", "--name", "-n"],
              description: "Managed private endpoint name",
              args: { name: "managed-private-endpoint-name" },
              isRequired: true,
            },
            {
              name: ["--managed-virtual-network-name", "--mvnet-name"],
              description: "Managed virtual network name",
              args: { name: "managed-virtual-network-name" },
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
              name: "--fqdns",
              description: "Fully qualified domain names",
              args: { name: "fqdns" },
            },
            {
              name: "--group-id",
              description:
                "The groupId to which the managed private endpoint is created",
              args: { name: "group-id" },
            },
            {
              name: "--if-match",
              description:
                "ETag of the managed private endpoint entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update",
              args: { name: "if-match" },
            },
            {
              name: ["--private-link-resource-id", "--private-link"],
              description:
                "The ARM resource ID of the resource to which the managed private endpoint is created",
              args: { name: "private-link-resource-id" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a managed private endpoint",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--managed-private-endpoint-name", "--name", "-n"],
              description: "Managed private endpoint name",
              args: { name: "managed-private-endpoint-name" },
            },
            {
              name: ["--managed-virtual-network-name", "--mvnet-name"],
              description: "Managed virtual network name",
              args: { name: "managed-virtual-network-name" },
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
          description: "Lists managed private endpoints",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
              isRequired: true,
            },
            {
              name: ["--managed-virtual-network-name", "--mvnet-name"],
              description: "Managed virtual network name",
              args: { name: "managed-virtual-network-name" },
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
          description: "Gets a managed private endpoint",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--if-none-match",
              description:
                "ETag of the managed private endpoint entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned",
              args: { name: "if-none-match" },
            },
            {
              name: ["--managed-private-endpoint-name", "--name", "-n"],
              description: "Managed private endpoint name",
              args: { name: "managed-private-endpoint-name" },
            },
            {
              name: ["--managed-virtual-network-name", "--mvnet-name"],
              description: "Managed virtual network name",
              args: { name: "managed-virtual-network-name" },
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
          description: "Update a managed private endpoint",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--fqdns",
              description: "Fully qualified domain names",
              args: { name: "fqdns" },
            },
            {
              name: "--group-id",
              description:
                "The groupId to which the managed private endpoint is created",
              args: { name: "group-id" },
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
                "ETag of the managed private endpoint entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update",
              args: { name: "if-match" },
            },
            {
              name: "--if-none-match",
              description:
                "ETag of the managed private endpoint entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned. Default value is None",
              args: { name: "if-none-match" },
            },
            {
              name: ["--managed-private-endpoint-name", "--name", "-n"],
              description: "Managed private endpoint name",
              args: { name: "managed-private-endpoint-name" },
            },
            {
              name: ["--managed-virtual-network-name", "--mvnet-name"],
              description: "Managed virtual network name",
              args: { name: "managed-virtual-network-name" },
            },
            {
              name: ["--private-link-resource-id", "--private-link"],
              description:
                "The ARM resource ID of the resource to which the managed private endpoint is created",
              args: { name: "private-link-resource-id" },
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
      ],
    },
    {
      name: "managed-virtual-network",
      description: "Manage managed virtual network with datafactory",
      subcommands: [
        {
          name: "create",
          description: "Create a managed Virtual Network",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
              isRequired: true,
            },
            {
              name: ["--managed-virtual-network-name", "--name", "-n"],
              description: "Managed virtual network name",
              args: { name: "managed-virtual-network-name" },
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
              name: "--if-match",
              description:
                "ETag of the managed Virtual Network entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update",
              args: { name: "if-match" },
            },
          ],
        },
        {
          name: "list",
          description: "Lists managed Virtual Networks",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
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
          description: "Gets a managed Virtual Network",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--if-none-match",
              description:
                "ETag of the managed Virtual Network entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned",
              args: { name: "if-none-match" },
            },
            {
              name: ["--managed-virtual-network-name", "--name", "-n"],
              description: "Managed virtual network name",
              args: { name: "managed-virtual-network-name" },
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
          description: "Update a managed Virtual Network",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
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
              name: "--if-match",
              description:
                "ETag of the managed Virtual Network entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update",
              args: { name: "if-match" },
            },
            {
              name: "--if-none-match",
              description:
                "ETag of the managed Virtual Network entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned. Default value is None",
              args: { name: "if-none-match" },
            },
            {
              name: ["--managed-virtual-network-name", "--name", "-n"],
              description: "Managed virtual network name",
              args: { name: "managed-virtual-network-name" },
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
      ],
    },
    {
      name: "pipeline",
      description: "Manage pipeline with datafactory",
      subcommands: [
        {
          name: "create",
          description: "Create a pipeline",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
              isRequired: true,
            },
            {
              name: ["--pipeline-name", "--name", "-n"],
              description: "The pipeline name",
              args: { name: "pipeline-name" },
              isRequired: true,
            },
            {
              name: "--pipeline",
              description:
                "Pipeline resource definition. Expected value: json-string/json-file/@json-file",
              args: { name: "pipeline" },
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
              name: "--if-match",
              description:
                "ETag of the pipeline entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update",
              args: { name: "if-match" },
            },
          ],
        },
        {
          name: "create-run",
          description: "Creates a run of a pipeline",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
              isRequired: true,
            },
            {
              name: ["--pipeline-name", "--name", "-n"],
              description: "The pipeline name",
              args: { name: "pipeline-name" },
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
              name: "--is-recovery",
              description:
                "Recovery mode flag. If recovery mode is set to true, the specified referenced pipeline run and the new run will be grouped under the same groupId",
              args: { name: "is-recovery", suggestions: ["false", "true"] },
            },
            {
              name: "--parameters",
              description:
                "Parameters of the pipeline run. These parameters will be used only if the runId is not specified. Expected value: json-string/json-file/@json-file",
              args: { name: "parameters" },
            },
            {
              name: "--reference-pipeline-run-id",
              description:
                "The pipeline run identifier. If run ID is specified the parameters of the specified run will be used to create a new run",
              args: { name: "reference-pipeline-run-id" },
            },
            {
              name: "--start-activity-name",
              description:
                "In recovery mode, the rerun will start from this activity. If not specified, all activities will run",
              args: { name: "start-activity-name" },
            },
            {
              name: "--start-from-failure",
              description:
                "In recovery mode, if set to true, the rerun will start from failed activities. The property will be used only if startActivityName is not specified",
              args: {
                name: "start-from-failure",
                suggestions: ["false", "true"],
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a pipeline",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--pipeline-name", "--name", "-n"],
              description: "The pipeline name",
              args: { name: "pipeline-name" },
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
          description: "Lists pipelines",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
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
          description: "Gets a pipeline",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--if-none-match",
              description:
                "ETag of the pipeline entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned",
              args: { name: "if-none-match" },
            },
            {
              name: ["--pipeline-name", "--name", "-n"],
              description: "The pipeline name",
              args: { name: "pipeline-name" },
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
          description: "Update a pipeline",
          options: [
            {
              name: "--activities",
              description:
                "List of activities in pipeline. Expected value: json-string/json-file/@json-file",
              args: { name: "activities" },
            },
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--annotations",
              description:
                "List of tags that can be used for describing the Pipeline. Expected value: json-string/json-file/@json-file",
              args: { name: "annotations" },
            },
            {
              name: "--concurrency",
              description: "The max number of concurrent runs for the pipeline",
              args: { name: "concurrency" },
            },
            {
              name: "--description",
              description: "The description of the pipeline",
              args: { name: "description" },
            },
            {
              name: "--duration",
              description:
                "TimeSpan value, after which an Azure Monitoring Metric is fired. Expected value: json-string/json-file/@json-file",
              args: { name: "duration" },
            },
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--folder-name",
              description: "The name of the folder that this Pipeline is in",
              args: { name: "folder-name" },
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
              name: "--if-match",
              description:
                "ETag of the pipeline entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update",
              args: { name: "if-match" },
            },
            {
              name: "--if-none-match",
              description:
                "ETag of the pipeline entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned. Default value is None",
              args: { name: "if-none-match" },
            },
            {
              name: ["--pipeline-name", "--name", "-n"],
              description: "The pipeline name",
              args: { name: "pipeline-name" },
            },
            {
              name: "--parameters",
              description:
                "List of parameters for pipeline. Expected value: json-string/json-file/@json-file",
              args: { name: "parameters" },
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
              name: "--run-dimensions",
              description:
                "Dimensions emitted by Pipeline. Expected value: json-string/json-file/@json-file",
              args: { name: "run-dimensions" },
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
            {
              name: "--variables",
              description:
                "List of variables for pipeline. Expected value: json-string/json-file/@json-file",
              args: { name: "variables" },
            },
          ],
        },
      ],
    },
    {
      name: "pipeline-run",
      description: "Manage pipeline run with datafactory",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a pipeline run by its run ID",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--is-recursive",
              description:
                "If true, cancel all the Child pipelines that are triggered by the current pipeline",
              args: { name: "is-recursive", suggestions: ["false", "true"] },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--run-id",
              description: "The pipeline run identifier",
              args: { name: "run-id" },
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
          name: "query-by-factory",
          description:
            "Query pipeline runs in the factory based on input filter conditions",
          options: [
            {
              name: "--last-updated-after",
              description:
                "The time at or after which the run event was updated in 'ISO 8601' format",
              args: { name: "last-updated-after" },
              isRequired: true,
            },
            {
              name: "--last-updated-before",
              description:
                "The time at or before which the run event was updated in 'ISO 8601' format",
              args: { name: "last-updated-before" },
              isRequired: true,
            },
            {
              name: "--continuation-token",
              description:
                "The continuation token for getting the next page of results. Null for first page",
              args: { name: "continuation-token" },
            },
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--filters",
              description: "List of filters",
              args: { name: "filters" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--order-by",
              description: "List of OrderBy option",
              args: { name: "order-by" },
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
          description: "Get a pipeline run by its run ID",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
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
              name: "--run-id",
              description: "The pipeline run identifier",
              args: { name: "run-id" },
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
      name: "trigger",
      description: "Manage trigger with datafactory",
      subcommands: [
        {
          name: "create",
          description: "Create a trigger",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
              isRequired: true,
            },
            {
              name: ["--trigger-name", "--name", "-n"],
              description: "The trigger name",
              args: { name: "trigger-name" },
              isRequired: true,
            },
            {
              name: "--properties",
              description:
                "Properties of the trigger. Expected value: json-string/json-file/@json-file",
              args: { name: "properties" },
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
              name: "--if-match",
              description:
                "ETag of the trigger entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update",
              args: { name: "if-match" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a trigger",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--trigger-name", "--name", "-n"],
              description: "The trigger name",
              args: { name: "trigger-name" },
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
          name: "get-event-subscription-status",
          description: "Get a trigger's event subscription status",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--trigger-name", "--name", "-n"],
              description: "The trigger name",
              args: { name: "trigger-name" },
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
          description: "Lists triggers",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
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
          name: "query-by-factory",
          description: "Query triggers",
          options: [
            {
              name: "--continuation-token",
              description:
                "The continuation token for getting the next page of results. Null for first page",
              args: { name: "continuation-token" },
            },
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--parent-trigger-name",
              description:
                "The name of the parent TumblingWindowTrigger to get the child rerun triggers",
              args: { name: "parent-trigger-name" },
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
          description: "Gets a trigger",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--if-none-match",
              description:
                "ETag of the trigger entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned",
              args: { name: "if-none-match" },
            },
            {
              name: ["--trigger-name", "--name", "-n"],
              description: "The trigger name",
              args: { name: "trigger-name" },
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
          name: "start",
          description: "Starts a trigger",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--trigger-name", "--name", "-n"],
              description: "The trigger name",
              args: { name: "trigger-name" },
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
          name: "stop",
          description: "Stops a trigger",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--trigger-name", "--name", "-n"],
              description: "The trigger name",
              args: { name: "trigger-name" },
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
          name: "subscribe-to-event",
          description: "Subscribe event trigger to events",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--trigger-name", "--name", "-n"],
              description: "The trigger name",
              args: { name: "trigger-name" },
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
          name: "unsubscribe-from-event",
          description: "Unsubscribe event trigger from events",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--trigger-name", "--name", "-n"],
              description: "The trigger name",
              args: { name: "trigger-name" },
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
          name: "update",
          description: "Update a trigger",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--annotations",
              description:
                "List of tags that can be used for describing the trigger. Expected value: json-string/json-file/@json-file",
              args: { name: "annotations" },
            },
            {
              name: "--description",
              description: "Trigger description",
              args: { name: "description" },
            },
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
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
              name: "--if-match",
              description:
                "ETag of the trigger entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update",
              args: { name: "if-match" },
            },
            {
              name: "--if-none-match",
              description:
                "ETag of the trigger entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned. Default value is None",
              args: { name: "if-none-match" },
            },
            {
              name: ["--trigger-name", "--name", "-n"],
              description: "The trigger name",
              args: { name: "trigger-name" },
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
            "Place the CLI in a waiting state until a condition of the datafactory trigger is met",
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
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--if-none-match",
              description:
                "ETag of the trigger entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned",
              args: { name: "if-none-match" },
            },
            {
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
            },
            {
              name: ["--trigger-name", "--name", "-n"],
              description: "The trigger name",
              args: { name: "trigger-name" },
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
      name: "trigger-run",
      description: "Manage trigger run with datafactory",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a single trigger instance by runId",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
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
              name: "--run-id",
              description: "The pipeline run identifier",
              args: { name: "run-id" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--trigger-name",
              description: "The trigger name",
              args: { name: "trigger-name" },
            },
          ],
        },
        {
          name: "query-by-factory",
          description: "Query trigger runs",
          options: [
            {
              name: "--last-updated-after",
              description:
                "The time at or after which the run event was updated in 'ISO 8601' format",
              args: { name: "last-updated-after" },
              isRequired: true,
            },
            {
              name: "--last-updated-before",
              description:
                "The time at or before which the run event was updated in 'ISO 8601' format",
              args: { name: "last-updated-before" },
              isRequired: true,
            },
            {
              name: "--continuation-token",
              description:
                "The continuation token for getting the next page of results. Null for first page",
              args: { name: "continuation-token" },
            },
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
            },
            {
              name: "--filters",
              description: "List of filters",
              args: { name: "filters" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--order-by",
              description: "List of OrderBy option",
              args: { name: "order-by" },
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
          name: "rerun",
          description: "Rerun single trigger instance by runId",
          options: [
            {
              name: "--factory-name",
              description: "The factory name",
              args: { name: "factory-name" },
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
              name: "--run-id",
              description: "The pipeline run identifier",
              args: { name: "run-id" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--trigger-name",
              description: "The trigger name",
              args: { name: "trigger-name" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
