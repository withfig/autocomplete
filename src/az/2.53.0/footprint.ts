const completion: Fig.Spec = {
  name: "footprint",
  description: "",
  subcommands: [
    {
      name: "experiment",
      description: "Commands to manage experiments under a profile",
      subcommands: [
        {
          name: "create",
          description:
            "Creates or updates a Footprint experiment with the specified properties",
          options: [
            {
              name: ["--experiment-name", "--name", "-n"],
              description: "Name of the Footprint experiment resource",
              args: { name: "experiment-name" },
              isRequired: true,
            },
            {
              name: "--profile-name",
              description: "Name of the Footprint profile resource",
              args: { name: "profile-name" },
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
              description: "The description of a Footprint experiment",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes an existing Footprint experiment",
          options: [
            {
              name: ["--experiment-name", "--name", "-n"],
              description: "Name of the Footprint experiment resource",
              args: { name: "experiment-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--profile-name",
              description: "Name of the Footprint profile resource",
              args: { name: "profile-name" },
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
            "Retrieves the information about all experiments under a Footprint profile",
          options: [
            {
              name: "--profile-name",
              description: "Name of the Footprint profile resource",
              args: { name: "profile-name" },
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
          description:
            "Retrieves the information about a single Footprint experiment",
          options: [
            {
              name: ["--experiment-name", "--name", "-n"],
              description: "Name of the Footprint experiment resource",
              args: { name: "experiment-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--profile-name",
              description: "Name of the Footprint profile resource",
              args: { name: "profile-name" },
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
            "Creates or updates a Footprint experiment with the specified properties",
          options: [
            {
              name: "--description",
              description: "The description of a Footprint experiment",
              args: { name: "description" },
            },
            {
              name: ["--experiment-name", "--name", "-n"],
              description: "Name of the Footprint experiment resource",
              args: { name: "experiment-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--profile-name",
              description: "Name of the Footprint profile resource",
              args: { name: "profile-name" },
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
      name: "measurement-endpoint",
      description: "Commands to manage measurement endpoints under a profile",
      subcommands: [
        {
          name: "create",
          description:
            "Creates or updates a single measurement endpoint under a Footprint profile with the specified properties",
          options: [
            {
              name: "--endpoint",
              description: "The value of a measurement endpoint",
              args: { name: "endpoint" },
              isRequired: true,
            },
            {
              name: ["--measurement-endpoint-name", "--name", "-n"],
              description:
                "Name of the Footprint measurement endpoint resource",
              args: { name: "measurement-endpoint-name" },
              isRequired: true,
            },
            {
              name: "--measurement-type",
              description: "The type of a measurement endpoint",
              args: { name: "measurement-type" },
              isRequired: true,
            },
            {
              name: "--profile-name",
              description: "Name of the Footprint profile resource",
              args: { name: "profile-name" },
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
              name: "--weight",
              description:
                "The weight of a measurement endpoint, higher weight means higher priority",
              args: { name: "weight" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The description of a measurement endpoint",
              args: { name: "description" },
            },
            {
              name: "--end-time-utc",
              description:
                "The end time that a measurement endpoint should be served",
              args: { name: "end-time-utc" },
            },
            {
              name: "--experiment-id",
              description:
                "The id of an experiment that a measurement endpoint is part of",
              args: { name: "experiment-id" },
            },
            {
              name: "--metadata",
              description: "The metadata of a measurement endpoint",
              args: { name: "metadata" },
            },
            {
              name: "--object-path",
              description:
                "The path of the object that a measurement endpoint points to",
              args: { name: "object-path" },
            },
            {
              name: "--sample-rate-cold",
              description:
                "The percentual sampling rate for the cold path logging of a measurement endpoint",
              args: { name: "sample-rate-cold" },
            },
            {
              name: "--sample-rate-hot",
              description:
                "The percentual sampling rate for the hot path logging of a measurement endpoint",
              args: { name: "sample-rate-hot" },
            },
            {
              name: "--sample-rate-warm",
              description:
                "The percentual sampling rate for the warm path logging of a measurement endpoint",
              args: { name: "sample-rate-warm" },
            },
            {
              name: "--start-time-utc",
              description:
                "The start time that a measurement endpoint should be served",
              args: { name: "start-time-utc" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Deletes an existing measurement endpoint under a Footprint profile",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--measurement-endpoint-name", "--name", "-n"],
              description:
                "Name of the Footprint measurement endpoint resource",
              args: { name: "measurement-endpoint-name" },
            },
            {
              name: "--profile-name",
              description: "Name of the Footprint profile resource",
              args: { name: "profile-name" },
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
            "Retrieves the information about all measurement endpoints under a Footprint profile",
          options: [
            {
              name: "--profile-name",
              description: "Name of the Footprint profile resource",
              args: { name: "profile-name" },
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
          description:
            "Retrieves the information about a single measurement endpoint under a Footprint profile",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--measurement-endpoint-name", "--name", "-n"],
              description:
                "Name of the Footprint measurement endpoint resource",
              args: { name: "measurement-endpoint-name" },
            },
            {
              name: "--profile-name",
              description: "Name of the Footprint profile resource",
              args: { name: "profile-name" },
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
            "Creates or updates a single measurement endpoint under a Footprint profile with the specified properties",
          options: [
            {
              name: "--endpoint",
              description: "The value of a measurement endpoint",
              args: { name: "endpoint" },
              isRequired: true,
            },
            {
              name: "--measurement-type",
              description: "The type of a measurement endpoint",
              args: { name: "measurement-type" },
              isRequired: true,
            },
            {
              name: "--weight",
              description:
                "The weight of a measurement endpoint, higher weight means higher priority",
              args: { name: "weight" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The description of a measurement endpoint",
              args: { name: "description" },
            },
            {
              name: "--end-time-utc",
              description:
                "The end time that a measurement endpoint should be served",
              args: { name: "end-time-utc" },
            },
            {
              name: "--experiment-id",
              description:
                "The id of an experiment that a measurement endpoint is part of",
              args: { name: "experiment-id" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--measurement-endpoint-name", "--name", "-n"],
              description:
                "Name of the Footprint measurement endpoint resource",
              args: { name: "measurement-endpoint-name" },
            },
            {
              name: "--metadata",
              description: "The metadata of a measurement endpoint",
              args: { name: "metadata" },
            },
            {
              name: "--object-path",
              description:
                "The path of the object that a measurement endpoint points to",
              args: { name: "object-path" },
            },
            {
              name: "--profile-name",
              description: "Name of the Footprint profile resource",
              args: { name: "profile-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--sample-rate-cold",
              description:
                "The percentual sampling rate for the cold path logging of a measurement endpoint",
              args: { name: "sample-rate-cold" },
            },
            {
              name: "--sample-rate-hot",
              description:
                "The percentual sampling rate for the hot path logging of a measurement endpoint",
              args: { name: "sample-rate-hot" },
            },
            {
              name: "--sample-rate-warm",
              description:
                "The percentual sampling rate for the warm path logging of a measurement endpoint",
              args: { name: "sample-rate-warm" },
            },
            {
              name: "--start-time-utc",
              description:
                "The start time that a measurement endpoint should be served",
              args: { name: "start-time-utc" },
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
      name: "measurement-endpoint-condition",
      description:
        "Commands to manage measurement endpoint conditions under a measurement endpoint",
      subcommands: [
        {
          name: "create",
          description:
            "Creates or updates a measurement endpoint condition under a Footprint measurement with the specified properties",
          options: [
            {
              name: "--constant",
              description:
                "The constant of a Footprint measurement endpoint condition",
              args: { name: "constant" },
              isRequired: true,
            },
            {
              name: "--endpoint-name",
              description:
                "Name of the Footprint measurement endpoint resource",
              args: { name: "endpoint-name" },
              isRequired: true,
            },
            {
              name: "--name",
              description:
                "Name of the Footprint measurement endpoint condition resource",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--operator",
              description:
                "The operator of a Footprint measurement endpoint condition",
              args: {
                name: "operator",
                suggestions: [
                  "ContainsValue",
                  "ContainsValueIgnoreCasing",
                  "DoesNotContainValue",
                  "DoesNotContainValueIgnoreCasing",
                  "IsExactValue",
                  "MatchValueIgnoreCasing",
                ],
              },
              isRequired: true,
            },
            {
              name: "--profile-name",
              description: "Name of the Footprint profile resource",
              args: { name: "profile-name" },
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
              name: "--variable",
              description:
                "The variable of a Footprint measurement endpoint condition",
              args: { name: "variable" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete",
          description:
            "Deletes an existing measurement endpoint condition under a Footprint measurement",
          options: [
            {
              name: "--endpoint-name",
              description:
                "Name of the Footprint measurement endpoint resource",
              args: { name: "endpoint-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--name",
              description:
                "Name of the Footprint measurement endpoint condition resource",
              args: { name: "name" },
            },
            {
              name: "--profile-name",
              description: "Name of the Footprint profile resource",
              args: { name: "profile-name" },
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
            "Retrieves the information about all measurement endpoint conditions under a Footprint measurement endpoint",
          options: [
            {
              name: "--endpoint-name",
              description:
                "Name of the Footprint measurement endpoint resource",
              args: { name: "endpoint-name" },
              isRequired: true,
            },
            {
              name: "--profile-name",
              description: "Name of the Footprint profile resource",
              args: { name: "profile-name" },
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
          description:
            "Retrieves the information about a single measurement endpoint condition under a Footprint measurement endpoint",
          options: [
            {
              name: "--endpoint-name",
              description:
                "Name of the Footprint measurement endpoint resource",
              args: { name: "endpoint-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--name",
              description:
                "Name of the Footprint measurement endpoint condition resource",
              args: { name: "name" },
            },
            {
              name: "--profile-name",
              description: "Name of the Footprint profile resource",
              args: { name: "profile-name" },
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
            "Creates or updates a measurement endpoint condition under a Footprint measurement with the specified properties",
          options: [
            {
              name: "--constant",
              description:
                "The constant of a Footprint measurement endpoint condition",
              args: { name: "constant" },
              isRequired: true,
            },
            {
              name: "--operator",
              description:
                "The operator of a Footprint measurement endpoint condition",
              args: {
                name: "operator",
                suggestions: [
                  "ContainsValue",
                  "ContainsValueIgnoreCasing",
                  "DoesNotContainValue",
                  "DoesNotContainValueIgnoreCasing",
                  "IsExactValue",
                  "MatchValueIgnoreCasing",
                ],
              },
              isRequired: true,
            },
            {
              name: "--variable",
              description:
                "The variable of a Footprint measurement endpoint condition",
              args: { name: "variable" },
              isRequired: true,
            },
            {
              name: "--endpoint-name",
              description:
                "Name of the Footprint measurement endpoint resource",
              args: { name: "endpoint-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--name",
              description:
                "Name of the Footprint measurement endpoint condition resource",
              args: { name: "name" },
            },
            {
              name: "--profile-name",
              description: "Name of the Footprint profile resource",
              args: { name: "profile-name" },
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
      name: "profile",
      description: "Commands to manage Footprint profiles",
      subcommands: [
        {
          name: "create",
          description:
            "Creates or updates a Footprint profile with the specified properties",
          options: [
            {
              name: "--measurement-count",
              description: "The number of measurements to perform",
              args: { name: "measurement-count" },
              isRequired: true,
            },
            {
              name: ["--profile-name", "--name", "-n"],
              description: "Name of the Footprint profile resource",
              args: { name: "profile-name" },
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
              name: "--start-delay-ms",
              description:
                "The delay in milliseconds that the clients should wait for until they start performing measurements",
              args: { name: "start-delay-ms" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The description of the Footprint profile",
              args: { name: "description" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--reporting-endpoints",
              description: "The endpoints which to upload measurements to",
              args: { name: "reporting-endpoints" },
            },
            {
              name: "--sample-rate-cold",
              description:
                "The default sampling percentage for cold path measurement storage",
              args: { name: "sample-rate-cold" },
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
          description: "Deletes an existing Footprint profile",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--profile-name", "--name", "-n"],
              description: "Name of the Footprint profile resource",
              args: { name: "profile-name" },
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
            "Retrieves the information about all Footprint profiles under a subscription",
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
          description:
            "Retrieves the information about a single Footprint profile",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--profile-name", "--name", "-n"],
              description: "Name of the Footprint profile resource",
              args: { name: "profile-name" },
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
          description: "Updates an existing Footprint profile resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--profile-name", "--name", "-n"],
              description: "Name of the Footprint profile resource",
              args: { name: "profile-name" },
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
      ],
    },
  ],
};

export default completion;
