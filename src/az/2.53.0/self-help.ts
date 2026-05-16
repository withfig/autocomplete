const completion: Fig.Spec = {
  name: "self-help",
  description:
    "Azure SelfHelp will help you troubleshoot issues with Azure resources",
  subcommands: [
    {
      name: "check-name-availability",
      description:
        "This API is used to check the uniqueness of a resource name used for a diagnostic check",
      options: [
        {
          name: "--scope",
          description:
            "This is an extension resource provider and only resource level extension is supported at the moment",
          args: { name: "scope" },
          isRequired: true,
        },
        {
          name: "--name",
          description:
            "The name of the resource for which availability needs to be checked",
          args: { name: "name" },
        },
        {
          name: "--type",
          description: "The resource type",
          args: { name: "type" },
        },
      ],
    },
    {
      name: "diagnostic",
      description:
        "Diagnostic command will help you create diagnostics for azure resources",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a diagnostics that will help you troubleshoot an issue with your azure resource",
          options: [
            {
              name: "--diagnostic-name",
              description:
                "Unique resource name for diagnostic proxy resources",
              args: { name: "diagnostic-name" },
              isRequired: true,
            },
            {
              name: "--scope",
              description:
                "This is an extension resource provider and only resource level extension is supported at the moment",
              args: { name: "scope" },
              isRequired: true,
            },
            {
              name: "--global-parameters",
              description:
                'Global parameters that can be passed to all solutionIds. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "global-parameters" },
            },
            {
              name: "--insights",
              description:
                'SolutionIds that are needed to be invoked. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "insights" },
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
          ],
        },
        {
          name: "show",
          description:
            "Get the diagnostics using the 'diagnosticsResourceName' you chose while creating the diagnostic",
          options: [
            {
              name: "--diagnostic-name",
              description:
                "Unique resource name for diagnostic proxy resources",
              args: { name: "diagnostic-name" },
              isRequired: true,
            },
            {
              name: "--scope",
              description:
                "This is an extension resource provider and only resource level extension is supported at the moment",
              args: { name: "scope" },
              isRequired: true,
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition is met",
          options: [
            {
              name: "--diagnostic-name",
              description:
                "Unique resource name for diagnostic proxy resources",
              args: { name: "diagnostic-name" },
              isRequired: true,
            },
            {
              name: "--scope",
              description:
                "This is an extension resource provider and only resource level extension is supported at the moment",
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
      ],
    },
    {
      name: "discovery-solution",
      description:
        "Discovery-solution command will help you discover available solutions based on your resource type and problem classification Id",
      subcommands: [
        {
          name: "list",
          description:
            "List the existing available solutions for the problemClassificationId or the resourceUri for the Azure resource",
          options: [
            {
              name: "--scope",
              description:
                "This is an extension resource provider and only resource level extension is supported at the moment",
              args: { name: "scope" },
              isRequired: true,
            },
            {
              name: "--filter",
              description:
                "Can be used to filter solutionIds by 'ProblemClassificationId'. The filter supports only 'and' and 'eq' operators. Example: $filter=ProblemClassificationId eq '1ddda5b4-cf6c-4d4f-91ad-bc38ab0e811e' and ProblemClassificationId eq '0a9673c2-7af6-4e19-90d3-4ee2461076d9'",
              args: { name: "filter" },
            },
            {
              name: "--skiptoken",
              description:
                "Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls",
              args: { name: "skiptoken" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
