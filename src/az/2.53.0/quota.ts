const completion: Fig.Spec = {
  name: "quota",
  description: "Manage Azure Quota Extension API",
  subcommands: [
    {
      name: "create",
      description:
        "Create the quota limit for the specified resource with the requested value",
      options: [
        {
          name: "--resource-name",
          description: "The resource name for a given resource provider",
          args: { name: "resource-name" },
          isRequired: true,
        },
        {
          name: "--scope",
          description: "The target Azure resource URI",
          args: { name: "scope" },
          isRequired: true,
        },
        {
          name: "--limit-object",
          description: "The resource quota limit value",
          args: { name: "limit-object" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--properties",
          description:
            "The additional properties for the specific resource provider",
          args: { name: "properties" },
        },
        {
          name: "--resource-type",
          description: "The resource type name",
          args: { name: "resource-type" },
        },
      ],
    },
    {
      name: "list",
      description:
        "Get a list of current quota limits of all resources for the specified scope. The response from this GET operation can be leveraged to submit requests to update a quota",
      options: [
        {
          name: "--scope",
          description: "The target Azure resource URI",
          args: { name: "scope" },
          isRequired: true,
        },
      ],
    },
    {
      name: "show",
      description:
        "Get the quota limit of a resource. The response can be used to determine the remaining quota to calculate a new quota limit that can be submitted with a PUT request",
      options: [
        {
          name: "--resource-name",
          description: "The resource name for a given resource provider",
          args: { name: "resource-name" },
          isRequired: true,
        },
        {
          name: "--scope",
          description: "The target Azure resource URI",
          args: { name: "scope" },
          isRequired: true,
        },
      ],
    },
    {
      name: "update",
      description:
        "Update the quota limit for a specific resource to the specified value",
      options: [
        {
          name: "--resource-name",
          description: "The resource name for a given resource provider",
          args: { name: "resource-name" },
          isRequired: true,
        },
        {
          name: "--scope",
          description: "The target Azure resource URI",
          args: { name: "scope" },
          isRequired: true,
        },
        {
          name: "--limit-object",
          description: "The resource quota limit value",
          args: { name: "limit-object" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--properties",
          description:
            "The additional properties for the specific resource provider",
          args: { name: "properties" },
        },
        {
          name: "--resource-type",
          description: "Resource type name",
          args: { name: "resource-type" },
        },
      ],
    },
    {
      name: "wait",
      description:
        "Place the CLI in a waiting state until a condition of the quota is met",
      options: [
        {
          name: "--resource-name",
          description: "The resource name for a given resource provider",
          args: { name: "resource-name" },
          isRequired: true,
        },
        {
          name: "--scope",
          description: "The target Azure resource URI",
          args: { name: "scope" },
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
      name: "operation",
      description: "Manage quota operation with quota",
      subcommands: [
        {
          name: "list",
          description:
            "List all the operations supported by the Microsoft.Quota resource provider",
        },
      ],
    },
    {
      name: "request",
      description: "Manage quota request with quota",
      subcommands: [
        {
          name: "status",
          description: "Manage quota request status with quota",
          subcommands: [
            {
              name: "list",
              description:
                "For the specified scope, get the current quota requests for a one year period ending at the time is made. Use the oData filter to select quota requests",
              options: [
                {
                  name: "--scope",
                  description: "The target Azure resource URI",
                  args: { name: "scope" },
                  isRequired: true,
                },
                {
                  name: "--filter",
                  description:
                    "The filter that is applied to packet capture request. Multiple filters can be applied",
                  args: { name: "filter" },
                },
                {
                  name: "--skip-token",
                  description:
                    "SkipToken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skipToken parameter that specifies a starting point to use for subsequent calls",
                  args: { name: "skip-token" },
                },
                {
                  name: "--top",
                  description: "Number of records to return",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Get the quota request details and status by quota request ID for the resources of the resource provider at a specific location. The quota request ID id is returned in the response of the PUT operation",
              options: [
                {
                  name: "--name",
                  description: "Quota request ID",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--scope",
                  description: "The target Azure resource URI",
                  args: { name: "scope" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "usage",
      description: "Manage usage with quota",
      subcommands: [
        {
          name: "list",
          description:
            "Get a list of current usage for all resources for the scope specified",
          options: [
            {
              name: "--scope",
              description: "The target Azure resource URI",
              args: { name: "scope" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Get the current usage of a resource",
          options: [
            {
              name: "--resource-name",
              description: "The resource name for a given resource provider",
              args: { name: "resource-name" },
              isRequired: true,
            },
            {
              name: "--scope",
              description: "The target Azure resource URI",
              args: { name: "scope" },
              isRequired: true,
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
