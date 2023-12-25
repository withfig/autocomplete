const completion: Fig.Spec = {
  name: "stream-analytics",
  description: "Manage Stream Analytics",
  subcommands: [
    {
      name: "cluster",
      description: "Manage cluster with stream analytics",
      subcommands: [
        {
          name: "create",
          description:
            "Create a Stream Analytics Cluster or replaces an already existing cluster",
          options: [
            {
              name: ["--cluster-name", "--name", "-n"],
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
              name: "--if-match",
              description:
                "The ETag of the resource. Omit this value to always overwrite the current record set. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes",
              args: { name: "if-match" },
            },
            {
              name: "--if-none-match",
              description:
                "Set to '*' to allow a new resource to be created, but to prevent updating an existing record set. Other values will result in a 412 Pre-condition Failed response",
              args: { name: "if-none-match" },
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
              name: "--sku",
              description:
                "The SKU of the cluster. This determines the size/capacity of the cluster. Required on PUT (CreateOrUpdate) requests",
              args: { name: "sku" },
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
          description: "Delete the specified cluster",
          options: [
            {
              name: ["--cluster-name", "--name", "-n"],
              description: "The name of the cluster",
              args: { name: "cluster-name" },
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
            "List all of the clusters in the given resource group. And Lists all of the clusters in the given subscription",
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
          name: "list-streaming-job",
          description: "List all of the streaming jobs in the given cluster",
          options: [
            {
              name: ["--cluster-name", "--name", "-n"],
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
          description: "Get information about the specified cluster",
          options: [
            {
              name: ["--cluster-name", "--name", "-n"],
              description: "The name of the cluster",
              args: { name: "cluster-name" },
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
          description:
            "Update an existing cluster. This can be used to partially update (ie. update one or two properties) a cluster without affecting the rest of the cluster definition",
          options: [
            {
              name: ["--cluster-name", "--name", "-n"],
              description: "The name of the cluster",
              args: { name: "cluster-name" },
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
                "The ETag of the resource. Omit this value to always overwrite the current record set. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes",
              args: { name: "if-match" },
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
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--sku",
              description:
                "The SKU of the cluster. This determines the size/capacity of the cluster. Required on PUT (CreateOrUpdate) requests",
              args: { name: "sku" },
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
            "Place the CLI in a waiting state until a condition of the stream-analytics cluster is met",
          options: [
            {
              name: ["--cluster-name", "--name", "-n"],
              description: "The name of the cluster",
              args: { name: "cluster-name" },
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
      name: "function",
      description: "Manage function with stream analytics",
      subcommands: [
        {
          name: "create",
          description:
            "Create a function or replaces an already existing function under an existing streaming job",
          options: [
            {
              name: ["--function-name", "--name", "-n"],
              description: "The name of the function",
              args: { name: "function-name" },
              isRequired: true,
            },
            {
              name: "--job-name",
              description: "The name of the streaming job",
              args: { name: "job-name" },
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
                "The ETag of the function. Omit this value to always overwrite the current function. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes",
              args: { name: "if-match" },
            },
            {
              name: "--if-none-match",
              description:
                "Set to '*' to allow a new function to be created, but to prevent updating an existing function. Other values will result in a 412 Pre-condition Failed response",
              args: { name: "if-none-match" },
            },
            {
              name: "--properties",
              description:
                "The properties that are associated with a function. Expected value: json-string/json-file/@json-file",
              args: { name: "properties" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a function from the streaming job",
          options: [
            {
              name: ["--function-name", "--name", "-n"],
              description: "The name of the function",
              args: { name: "function-name" },
              isRequired: true,
            },
            {
              name: "--job-name",
              description: "The name of the streaming job",
              args: { name: "job-name" },
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
        {
          name: "inspect",
          description:
            "Retrieve the default definition of a function based on the parameters specified",
          options: [
            {
              name: ["--function-name", "--name", "-n"],
              description: "The name of the function",
              args: { name: "function-name" },
              isRequired: true,
            },
            {
              name: "--job-name",
              description: "The name of the streaming job",
              args: { name: "job-name" },
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
              name: "--ml-properties",
              description:
                "The parameters needed to retrieve the default function definition for an Azure Machine Learning web service function",
              args: { name: "ml-properties" },
            },
          ],
        },
        {
          name: "list",
          description:
            "List all of the functions under the specified streaming job",
          options: [
            {
              name: "--job-name",
              description: "The name of the streaming job",
              args: { name: "job-name" },
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
              name: "--select",
              description:
                "The $select OData query parameter. This is a comma-separated list of structural properties to include in the response, or \"\" to include all properties. By default, all properties are returned except diagnostics. Currently only accepts '' as a valid value",
              args: { name: "select" },
            },
          ],
        },
        {
          name: "show",
          description: "Get details about the specified function",
          options: [
            {
              name: ["--function-name", "--name", "-n"],
              description: "The name of the function",
              args: { name: "function-name" },
              isRequired: true,
            },
            {
              name: "--job-name",
              description: "The name of the streaming job",
              args: { name: "job-name" },
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
          name: "test",
          description:
            "Test if the information provided for a function is valid. This can range from testing the connection to the underlying web service behind the function or making sure the function code provided is syntactically correct",
          options: [
            {
              name: ["--function-name", "--name", "-n"],
              description: "The name of the function",
              args: { name: "function-name" },
              isRequired: true,
            },
            {
              name: "--job-name",
              description: "The name of the streaming job",
              args: { name: "job-name" },
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
              name: "--properties",
              description:
                "The properties that are associated with a function. Expected value: json-string/json-file/@json-file",
              args: { name: "properties" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Update an existing function under an existing streaming job. This can be used to partially update (ie. update one or two properties) a function without affecting the rest the job or function definition",
          options: [
            {
              name: ["--function-name", "--name", "-n"],
              description: "The name of the function",
              args: { name: "function-name" },
              isRequired: true,
            },
            {
              name: "--job-name",
              description: "The name of the streaming job",
              args: { name: "job-name" },
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
                "The ETag of the function. Omit this value to always overwrite the current function. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes",
              args: { name: "if-match" },
            },
            {
              name: "--properties",
              description:
                "The properties that are associated with a function. Expected value: json-string/json-file/@json-file",
              args: { name: "properties" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the stream-analytics function is met",
          options: [
            {
              name: ["--function-name", "--name", "-n"],
              description: "The name of the function",
              args: { name: "function-name" },
              isRequired: true,
            },
            {
              name: "--job-name",
              description: "The name of the streaming job",
              args: { name: "job-name" },
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
      name: "input",
      description: "Manage input with stream analytics",
      subcommands: [
        {
          name: "create",
          description:
            "Create an input or replaces an already existing input under an existing streaming job",
          options: [
            {
              name: ["--input-name", "--name", "-n"],
              description: "The name of the input",
              args: { name: "input-name" },
              isRequired: true,
            },
            {
              name: "--job-name",
              description: "The name of the streaming job",
              args: { name: "job-name" },
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
                "The ETag of the input. Omit this value to always overwrite the current input. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes",
              args: { name: "if-match" },
            },
            {
              name: "--if-none-match",
              description:
                "Set to '*' to allow a new input to be created, but to prevent updating an existing input. Other values will result in a 412 Pre-condition Failed response",
              args: { name: "if-none-match" },
            },
            {
              name: "--properties",
              description:
                "The properties that are associated with an input. Required on PUT (CreateOrReplace) requests. Expected value: json-string/json-file/@json-file",
              args: { name: "properties" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an input from the streaming job",
          options: [
            {
              name: ["--input-name", "--name", "-n"],
              description: "The name of the input",
              args: { name: "input-name" },
              isRequired: true,
            },
            {
              name: "--job-name",
              description: "The name of the streaming job",
              args: { name: "job-name" },
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
        {
          name: "list",
          description:
            "List all of the inputs under the specified streaming job",
          options: [
            {
              name: "--job-name",
              description: "The name of the streaming job",
              args: { name: "job-name" },
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
              name: "--select",
              description:
                "The $select OData query parameter. This is a comma-separated list of structural properties to include in the response, or \"\" to include all properties. By default, all properties are returned except diagnostics. Currently only accepts '' as a valid value",
              args: { name: "select" },
            },
          ],
        },
        {
          name: "show",
          description: "Get details about the specified input",
          options: [
            {
              name: ["--input-name", "--name", "-n"],
              description: "The name of the input",
              args: { name: "input-name" },
              isRequired: true,
            },
            {
              name: "--job-name",
              description: "The name of the streaming job",
              args: { name: "job-name" },
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
          name: "test",
          description:
            "Test whether an input’s datasource is reachable and usable by the Azure Stream Analytics service",
          options: [
            {
              name: ["--input-name", "--name", "-n"],
              description: "The name of the input",
              args: { name: "input-name" },
              isRequired: true,
            },
            {
              name: "--job-name",
              description: "The name of the streaming job",
              args: { name: "job-name" },
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
              name: "--properties",
              description:
                "The properties that are associated with an input. Required on PUT (CreateOrReplace) requests. Expected value: json-string/json-file/@json-file",
              args: { name: "properties" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Update an existing input under an existing streaming job. This can be used to partially update (ie. update one or two properties) an input without affecting the rest the job or input definition",
          options: [
            {
              name: ["--input-name", "--name", "-n"],
              description: "The name of the input",
              args: { name: "input-name" },
              isRequired: true,
            },
            {
              name: "--job-name",
              description: "The name of the streaming job",
              args: { name: "job-name" },
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
                "The ETag of the input. Omit this value to always overwrite the current input. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes",
              args: { name: "if-match" },
            },
            {
              name: "--properties",
              description:
                "The properties that are associated with an input. Required on PUT (CreateOrReplace) requests. Expected value: json-string/json-file/@json-file",
              args: { name: "properties" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the stream-analytics input is met",
          options: [
            {
              name: ["--input-name", "--name", "-n"],
              description: "The name of the input",
              args: { name: "input-name" },
              isRequired: true,
            },
            {
              name: "--job-name",
              description: "The name of the streaming job",
              args: { name: "job-name" },
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
      name: "job",
      description: "Manage streaming job with stream analytics",
      subcommands: [
        {
          name: "create",
          description:
            "Create a streaming job or replaces an already existing streaming job",
          options: [
            {
              name: ["--job-name", "--name", "-n"],
              description: "The name of the streaming job",
              args: { name: "job-name" },
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
              name: "--arrival-max-delay",
              description:
                "The maximum tolerable delay in seconds where events arriving late could be included. Supported range is -1 to 1814399 (20.23:59:59 days) and -1 is used to specify wait indefinitely. If the property is absent, it is interpreted to have a value of -1",
              args: { name: "arrival-max-delay" },
            },
            {
              name: "--compatibility-level",
              description:
                "Controls certain runtime behaviors of the streaming job",
              args: {
                name: "compatibility-level",
                suggestions: ["1.0", "1.2"],
              },
            },
            {
              name: "--content-storage-policy",
              description:
                "Valid values are JobStorageAccount and SystemAccount. If set to JobStorageAccount, this requires the user to also specify jobStorageAccount property",
              args: {
                name: "content-storage-policy",
                suggestions: ["JobStorageAccount", "SystemAccount"],
              },
            },
            {
              name: "--data-locale",
              description:
                "The data locale of the stream analytics job. Value should be the name of a supported .NET Culture from the set https://msdn.microsoft.com/en-us/library/system.globalization.culturetypes(v=vs.110).aspx. Defaults to 'en-US' if none specified",
              args: { name: "data-locale" },
            },
            {
              name: "--functions",
              description:
                "A list of one or more functions for the streaming job. The name property for each function is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual transformation. Expected value: json-string/json-file/@json-file",
              args: { name: "functions" },
            },
            {
              name: "--id",
              description: "The resource id of cluster",
              args: { name: "id" },
            },
            {
              name: "--identity",
              description:
                "Describe the system-assigned managed identity assigned to this job that can be used to authenticate with inputs and outputs",
              args: { name: "identity" },
            },
            {
              name: "--if-match",
              description:
                "The ETag of the streaming job. Omit this value to always overwrite the current record set. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes",
              args: { name: "if-match" },
            },
            {
              name: "--if-none-match",
              description:
                "Set to '*' to allow a new streaming job to be created, but to prevent updating an existing record set. Other values will result in a 412 Pre-condition Failed response",
              args: { name: "if-none-match" },
            },
            {
              name: "--inputs",
              description:
                "A list of one or more inputs to the streaming job. The name property for each input is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual input. Expected value: json-string/json-file/@json-file",
              args: { name: "inputs" },
            },
            {
              name: "--job-storage-account",
              description:
                "The properties that are associated with an Azure Storage account with MSI",
              args: { name: "job-storage-account" },
            },
            {
              name: "--job-type",
              description:
                "Describes the type of the job. Valid modes are Cloud and 'Edge'",
              args: { name: "job-type", suggestions: ["Cloud", "Edge"] },
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
              name: "--order-max-delay",
              description:
                "The maximum tolerable delay in seconds where out-of-order events can be adjusted to be back in order",
              args: { name: "order-max-delay" },
            },
            {
              name: "--out-of-order-policy",
              description:
                "Indicates the policy to apply to events that arrive out of order in the input event stream",
              args: {
                name: "out-of-order-policy",
                suggestions: ["Adjust", "Drop"],
              },
            },
            {
              name: "--output-error-policy",
              description:
                "Indicates the policy to apply to events that arrive at the output and cannot be written to the external storage due to being malformed (missing column values, column values of wrong type or size)",
              args: {
                name: "output-error-policy",
                suggestions: ["Drop", "Stop"],
              },
            },
            {
              name: "--output-start-mode",
              description:
                "This property should only be utilized when it is desired that the job be started immediately upon creation. Value may be JobStartTime, CustomTime, or LastOutputEventTime to indicate whether the starting point of the output event stream should start whenever the job is started, start at a custom user time stamp specified via the outputStartTime property, or start from the last event output time",
              args: {
                name: "output-start-mode",
                suggestions: [
                  "CustomTime",
                  "JobStartTime",
                  "LastOutputEventTime",
                ],
              },
            },
            {
              name: "--output-start-time",
              description:
                "Value is either an ISO-8601 formatted time stamp that indicates the starting point of the output event stream, or null to indicate that the output event stream will start whenever the streaming job is started. This property must have a value if outputStartMode is set to CustomTime",
              args: { name: "output-start-time" },
            },
            {
              name: "--outputs",
              description:
                "A list of one or more outputs for the streaming job. The name property for each output is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual output. Expected value: json-string/json-file/@json-file",
              args: { name: "outputs" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--transformation",
              description:
                "Indicate the query and the number of streaming units to use for the streaming job. The name property of the transformation is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual transformation",
              args: { name: "transformation" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a streaming job",
          options: [
            {
              name: ["--job-name", "--name", "-n"],
              description: "The name of the streaming job",
              args: { name: "job-name" },
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
            "List all of the streaming jobs in the specified resource group. And Lists all of the streaming jobs in the given subscription",
          options: [
            {
              name: "--expand",
              description:
                "The $expand OData query parameter. This is a comma-separated list of additional streaming job properties to include in the response, beyond the default set returned when this parameter is absent. The default set is all streaming job properties other than 'inputs', 'transformation', 'outputs', and 'functions'",
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
          name: "scale",
          description: "Scale a streaming job when the job is running",
          options: [
            {
              name: ["--job-name", "--name", "-n"],
              description: "The name of the streaming job",
              args: { name: "job-name" },
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
              name: "--streaming-units",
              description:
                "Specifies the number of streaming units that the streaming job will scale to",
              args: { name: "streaming-units" },
            },
          ],
        },
        {
          name: "show",
          description: "Get details about the specified streaming job",
          options: [
            {
              name: ["--job-name", "--name", "-n"],
              description: "The name of the streaming job",
              args: { name: "job-name" },
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
              name: "--expand",
              description:
                "The $expand OData query parameter. This is a comma-separated list of additional streaming job properties to include in the response, beyond the default set returned when this parameter is absent. The default set is all streaming job properties other than 'inputs', 'transformation', 'outputs', and 'functions'",
              args: { name: "expand" },
            },
          ],
        },
        {
          name: "start",
          description:
            "Start a streaming job. Once a job is started it will start processing input events and produce output",
          options: [
            {
              name: ["--job-name", "--name", "-n"],
              description: "The name of the streaming job",
              args: { name: "job-name" },
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
              name: "--output-start-mode",
              description:
                "Value may be JobStartTime, CustomTime, or LastOutputEventTime to indicate whether the starting point of the output event stream should start whenever the job is started, start at a custom user time stamp specified via the outputStartTime property, or start from the last event output time",
              args: {
                name: "output-start-mode",
                suggestions: [
                  "CustomTime",
                  "JobStartTime",
                  "LastOutputEventTime",
                ],
              },
            },
            {
              name: "--output-start-time",
              description:
                "Value is either an ISO-8601 formatted time stamp that indicates the starting point of the output event stream, or null to indicate that the output event stream will start whenever the streaming job is started. This property must have a value if outputStartMode is set to CustomTime",
              args: { name: "output-start-time" },
            },
          ],
        },
        {
          name: "stop",
          description:
            "Stop a running streaming job. This will cause a running streaming job to stop processing input events and producing output",
          options: [
            {
              name: ["--job-name", "--name", "-n"],
              description: "The name of the streaming job",
              args: { name: "job-name" },
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
          name: "update",
          description:
            "Update an existing streaming job. This can be used to partially update (ie. update one or two properties) a streaming job without affecting the rest the job definition",
          options: [
            {
              name: ["--job-name", "--name", "-n"],
              description: "The name of the streaming job",
              args: { name: "job-name" },
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
              name: "--arrival-max-delay",
              description:
                "The maximum tolerable delay in seconds where events arriving late could be included. Supported range is -1 to 1814399 (20.23:59:59 days) and -1 is used to specify wait indefinitely. If the property is absent, it is interpreted to have a value of -1",
              args: { name: "arrival-max-delay" },
            },
            {
              name: "--compatibility-level",
              description:
                "Controls certain runtime behaviors of the streaming job",
              args: {
                name: "compatibility-level",
                suggestions: ["1.0", "1.2"],
              },
            },
            {
              name: "--content-storage-policy",
              description:
                "Valid values are JobStorageAccount and SystemAccount. If set to JobStorageAccount, this requires the user to also specify jobStorageAccount property",
              args: {
                name: "content-storage-policy",
                suggestions: ["JobStorageAccount", "SystemAccount"],
              },
            },
            {
              name: "--data-locale",
              description:
                "The data locale of the stream analytics job. Value should be the name of a supported .NET Culture from the set https://msdn.microsoft.com/en-us/library/system.globalization.culturetypes(v=vs.110).aspx. Defaults to 'en-US' if none specified",
              args: { name: "data-locale" },
            },
            {
              name: "--functions",
              description:
                "A list of one or more functions for the streaming job. The name property for each function is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual transformation. Expected value: json-string/json-file/@json-file",
              args: { name: "functions" },
            },
            {
              name: "--id",
              description: "The resource id of cluster",
              args: { name: "id" },
            },
            {
              name: "--identity",
              description:
                "Describe the system-assigned managed identity assigned to this job that can be used to authenticate with inputs and outputs",
              args: { name: "identity" },
            },
            {
              name: "--if-match",
              description:
                "The ETag of the streaming job. Omit this value to always overwrite the current record set. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes",
              args: { name: "if-match" },
            },
            {
              name: "--inputs",
              description:
                "A list of one or more inputs to the streaming job. The name property for each input is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual input. Expected value: json-string/json-file/@json-file",
              args: { name: "inputs" },
            },
            {
              name: "--job-storage-account",
              description:
                "The properties that are associated with an Azure Storage account with MSI",
              args: { name: "job-storage-account" },
            },
            {
              name: "--job-type",
              description:
                "Describes the type of the job. Valid modes are Cloud and 'Edge'",
              args: { name: "job-type", suggestions: ["Cloud", "Edge"] },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--order-max-delay",
              description:
                "The maximum tolerable delay in seconds where out-of-order events can be adjusted to be back in order",
              args: { name: "order-max-delay" },
            },
            {
              name: "--out-of-order-policy",
              description:
                "Indicates the policy to apply to events that arrive out of order in the input event stream",
              args: {
                name: "out-of-order-policy",
                suggestions: ["Adjust", "Drop"],
              },
            },
            {
              name: "--output-error-policy",
              description:
                "Indicates the policy to apply to events that arrive at the output and cannot be written to the external storage due to being malformed (missing column values, column values of wrong type or size)",
              args: {
                name: "output-error-policy",
                suggestions: ["Drop", "Stop"],
              },
            },
            {
              name: "--output-start-mode",
              description:
                "This property should only be utilized when it is desired that the job be started immediately upon creation. Value may be JobStartTime, CustomTime, or LastOutputEventTime to indicate whether the starting point of the output event stream should start whenever the job is started, start at a custom user time stamp specified via the outputStartTime property, or start from the last event output time",
              args: {
                name: "output-start-mode",
                suggestions: [
                  "CustomTime",
                  "JobStartTime",
                  "LastOutputEventTime",
                ],
              },
            },
            {
              name: "--output-start-time",
              description:
                "Value is either an ISO-8601 formatted time stamp that indicates the starting point of the output event stream, or null to indicate that the output event stream will start whenever the streaming job is started. This property must have a value if outputStartMode is set to CustomTime",
              args: { name: "output-start-time" },
            },
            {
              name: "--outputs",
              description:
                "A list of one or more outputs for the streaming job. The name property for each output is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual output. Expected value: json-string/json-file/@json-file",
              args: { name: "outputs" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--transformation",
              description:
                "Indicate the query and the number of streaming units to use for the streaming job. The name property of the transformation is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual transformation",
              args: { name: "transformation" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the stream-analytics job is met",
          options: [
            {
              name: ["--job-name", "--name", "-n"],
              description: "The name of the streaming job",
              args: { name: "job-name" },
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
                "The $expand OData query parameter. This is a comma-separated list of additional streaming job properties to include in the response, beyond the default set returned when this parameter is absent. The default set is all streaming job properties other than 'inputs', 'transformation', 'outputs', and 'functions'",
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
    {
      name: "output",
      description: "Manage output with stream analytics",
      subcommands: [
        {
          name: "create",
          description:
            "Create an output or replaces an already existing output under an existing streaming job",
          options: [
            {
              name: "--job-name",
              description: "The name of the streaming job",
              args: { name: "job-name" },
              isRequired: true,
            },
            {
              name: ["--output-name", "--name", "-n"],
              description: "The name of the output",
              args: { name: "output-name" },
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
              name: "--datasource",
              description:
                "Describes the data source that output will be written to. Required on PUT (CreateOrReplace) requests. Expected value: json-string/json-file/@json-file",
              args: { name: "datasource" },
            },
            {
              name: "--if-match",
              description:
                "The ETag of the output. Omit this value to always overwrite the current output. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes",
              args: { name: "if-match" },
            },
            {
              name: "--if-none-match",
              description:
                "Set to '*' to allow a new output to be created, but to prevent updating an existing output. Other values will result in a 412 Pre-condition Failed response",
              args: { name: "if-none-match" },
            },
            {
              name: "--serialization",
              description:
                "Describes how data from an input is serialized or how data is serialized when written to an output. Required on PUT (CreateOrReplace) requests. Expected value: json-string/json-file/@json-file",
              args: { name: "serialization" },
            },
            {
              name: "--size-window",
              description:
                "The size window to constrain a Stream Analytics output to",
              args: { name: "size-window" },
            },
            {
              name: "--time-window",
              description:
                "The time frame for filtering Stream Analytics job outputs",
              args: { name: "time-window" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an output from the streaming job",
          options: [
            {
              name: "--job-name",
              description: "The name of the streaming job",
              args: { name: "job-name" },
              isRequired: true,
            },
            {
              name: ["--output-name", "--name", "-n"],
              description: "The name of the output",
              args: { name: "output-name" },
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
        {
          name: "list",
          description:
            "List all of the outputs under the specified streaming job",
          options: [
            {
              name: "--job-name",
              description: "The name of the streaming job",
              args: { name: "job-name" },
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
              name: "--select",
              description:
                "The $select OData query parameter. This is a comma-separated list of structural properties to include in the response, or \"\" to include all properties. By default, all properties are returned except diagnostics. Currently only accepts '' as a valid value",
              args: { name: "select" },
            },
          ],
        },
        {
          name: "show",
          description: "Get details about the specified output",
          options: [
            {
              name: "--job-name",
              description: "The name of the streaming job",
              args: { name: "job-name" },
              isRequired: true,
            },
            {
              name: ["--output-name", "--name", "-n"],
              description: "The name of the output",
              args: { name: "output-name" },
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
          name: "test",
          description:
            "Test whether an output’s datasource is reachable and usable by the Azure Stream Analytics service",
          options: [
            {
              name: "--job-name",
              description: "The name of the streaming job",
              args: { name: "job-name" },
              isRequired: true,
            },
            {
              name: ["--output-name", "--name", "-n"],
              description: "The name of the output",
              args: { name: "output-name" },
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
              name: "--datasource",
              description:
                "Describes the data source that output will be written to. Required on PUT (CreateOrReplace) requests. Expected value: json-string/json-file/@json-file",
              args: { name: "datasource" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--serialization",
              description:
                "Describes how data from an input is serialized or how data is serialized when written to an output. Required on PUT (CreateOrReplace) requests. Expected value: json-string/json-file/@json-file",
              args: { name: "serialization" },
            },
            {
              name: "--size-window",
              description:
                "The size window to constrain a Stream Analytics output to",
              args: { name: "size-window" },
            },
            {
              name: "--time-window",
              description:
                "The time frame for filtering Stream Analytics job outputs",
              args: { name: "time-window" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Update an existing output under an existing streaming job. This can be used to partially update (ie. update one or two properties) an output without affecting the rest the job or output definition",
          options: [
            {
              name: "--job-name",
              description: "The name of the streaming job",
              args: { name: "job-name" },
              isRequired: true,
            },
            {
              name: ["--output-name", "--name", "-n"],
              description: "The name of the output",
              args: { name: "output-name" },
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
              name: "--datasource",
              description:
                "Describes the data source that output will be written to. Required on PUT (CreateOrReplace) requests. Expected value: json-string/json-file/@json-file",
              args: { name: "datasource" },
            },
            {
              name: "--if-match",
              description:
                "The ETag of the output. Omit this value to always overwrite the current output. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes",
              args: { name: "if-match" },
            },
            {
              name: "--serialization",
              description:
                "Describes how data from an input is serialized or how data is serialized when written to an output. Required on PUT (CreateOrReplace) requests. Expected value: json-string/json-file/@json-file",
              args: { name: "serialization" },
            },
            {
              name: "--size-window",
              description:
                "The size window to constrain a Stream Analytics output to",
              args: { name: "size-window" },
            },
            {
              name: "--time-window",
              description:
                "The time frame for filtering Stream Analytics job outputs",
              args: { name: "time-window" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the stream-analytics output is met",
          options: [
            {
              name: "--job-name",
              description: "The name of the streaming job",
              args: { name: "job-name" },
              isRequired: true,
            },
            {
              name: ["--output-name", "--name", "-n"],
              description: "The name of the output",
              args: { name: "output-name" },
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
      name: "private-endpoint",
      description: "Manage private endpoint with stream analytics",
      subcommands: [
        {
          name: "create",
          description:
            "Create a Stream Analytics Private Endpoint or replaces an already existing Private Endpoint",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--private-endpoint-name", "--name", "-n"],
              description: "The name of the private endpoint",
              args: { name: "private-endpoint-name" },
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
              name: "--connections",
              description:
                "A list of connections to the remote resource. Immutable after it is set. Expected value: json-string/json-file/@json-file",
              args: { name: "connections" },
            },
            {
              name: "--if-match",
              description:
                "The ETag of the resource. Omit this value to always overwrite the current record set. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes",
              args: { name: "if-match" },
            },
            {
              name: "--if-none-match",
              description:
                "Set to '*' to allow a new resource to be created, but to prevent updating an existing record set. Other values will result in a 412 Pre-condition Failed response",
              args: { name: "if-none-match" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the specified private endpoint",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the cluster",
              args: { name: "cluster-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--private-endpoint-name", "--name", "-n"],
              description: "The name of the private endpoint",
              args: { name: "private-endpoint-name" },
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
          description: "List the private endpoints in the cluster",
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
          description: "Get information about the specified Private Endpoint",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the cluster",
              args: { name: "cluster-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--private-endpoint-name", "--name", "-n"],
              description: "The name of the private endpoint",
              args: { name: "private-endpoint-name" },
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
            "Place the CLI in a waiting state until a condition of the stream-analytics private-endpoint is met",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the cluster",
              args: { name: "cluster-name" },
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
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
            },
            {
              name: ["--private-endpoint-name", "--name", "-n"],
              description: "The name of the private endpoint",
              args: { name: "private-endpoint-name" },
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
      name: "subscription",
      description: "Manage subscription with stream analytics",
      subcommands: [
        {
          name: "inspect",
          description:
            "Retrieve the subscription's current quota information in a particular region",
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
      name: "transformation",
      description: "Manage transformation with stream analytics",
      subcommands: [
        {
          name: "create",
          description:
            "Create a transformation or replaces an already existing transformation under an existing streaming job",
          options: [
            {
              name: "--job-name",
              description: "The name of the streaming job",
              args: { name: "job-name" },
              isRequired: true,
            },
            {
              name: ["--transformation-name", "--name", "-n"],
              description: "The name of the transformation",
              args: { name: "transformation-name" },
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
                "The ETag of the transformation. Omit this value to always overwrite the current transformation. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes",
              args: { name: "if-match" },
            },
            {
              name: "--if-none-match",
              description:
                "Set to '*' to allow a new transformation to be created, but to prevent updating an existing transformation. Other values will result in a 412 Pre-condition Failed response",
              args: { name: "if-none-match" },
            },
            {
              name: "--saql",
              description:
                "Specifies the query that will be run in the streaming job. You can learn more about the Stream Analytics Query Language (SAQL) here: https://msdn.microsoft.com/library/azure/dn834998 . Required on PUT (CreateOrReplace) requests",
              args: { name: "saql" },
            },
            {
              name: "--streaming-units",
              description:
                "Specifies the number of streaming units that the streaming job uses",
              args: { name: "streaming-units" },
            },
            {
              name: "--valid-streaming-units",
              description:
                "Specifies the valid streaming units a streaming job can scale to",
              args: { name: "valid-streaming-units" },
            },
          ],
        },
        {
          name: "show",
          description: "Get details about the specified transformation",
          options: [
            {
              name: "--job-name",
              description: "The name of the streaming job",
              args: { name: "job-name" },
              isRequired: true,
            },
            {
              name: ["--transformation-name", "--name", "-n"],
              description: "The name of the transformation",
              args: { name: "transformation-name" },
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
          description:
            "Update an existing transformation under an existing streaming job. This can be used to partially update (ie. update one or two properties) a transformation without affecting the rest the job or transformation definition",
          options: [
            {
              name: "--job-name",
              description: "The name of the streaming job",
              args: { name: "job-name" },
              isRequired: true,
            },
            {
              name: ["--transformation-name", "--name", "-n"],
              description: "The name of the transformation",
              args: { name: "transformation-name" },
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
                "The ETag of the transformation. Omit this value to always overwrite the current transformation. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes",
              args: { name: "if-match" },
            },
            {
              name: "--saql",
              description:
                "Specifies the query that will be run in the streaming job. You can learn more about the Stream Analytics Query Language (SAQL) here: https://msdn.microsoft.com/library/azure/dn834998 . Required on PUT (CreateOrReplace) requests",
              args: { name: "saql" },
            },
            {
              name: "--streaming-units",
              description:
                "Specifies the number of streaming units that the streaming job uses",
              args: { name: "streaming-units" },
            },
            {
              name: "--valid-streaming-units",
              description:
                "Specifies the valid streaming units a streaming job can scale to",
              args: { name: "valid-streaming-units" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
