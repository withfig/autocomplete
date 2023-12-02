const completion: Fig.Spec = {
  name: "provider",
  description: "Manage resource providers",
  subcommands: [
    {
      name: "list",
      description: "Gets all resource providers for a subscription",
      options: [
        {
          name: "--expand",
          description:
            "The properties to include in the results. For example, use &$expand=metadata in the query string to retrieve resource provider metadata. To include property aliases in response, use $expand=resourceTypes/aliases. Default value is None",
          args: { name: "expand" },
        },
      ],
    },
    {
      name: "register",
      description: "Register a provider",
      options: [
        {
          name: ["--namespace", "-n"],
          description: "The resource namespace, aka 'provider'",
          args: { name: "namespace" },
          isRequired: true,
        },
        {
          name: ["--consent-to-permissions", "-c"],
          description:
            "A value indicating whether authorization is consented or not",
        },
        {
          name: ["--management-group-id", "-m"],
          description: "The management group id to register",
          args: { name: "management-group-id" },
        },
        { name: "--wait", description: "Wait for the registration to finish" },
      ],
    },
    {
      name: "show",
      description: "Gets the specified resource provider",
      options: [
        {
          name: ["--namespace", "-n"],
          description: "The resource namespace, aka 'provider'",
          args: { name: "namespace" },
          isRequired: true,
        },
        {
          name: "--expand",
          description:
            "The $expand query parameter. For example, to include property aliases in response, use $expand=resourceTypes/aliases. Default value is None",
          args: { name: "expand" },
        },
      ],
    },
    {
      name: "unregister",
      description: "Unregister a provider",
      options: [
        {
          name: ["--namespace", "-n"],
          description: "The resource namespace, aka 'provider'",
          args: { name: "namespace" },
          isRequired: true,
        },
        { name: "--wait", description: "Wait for unregistration to finish" },
      ],
    },
    {
      name: "operation",
      description: "Get provider operations metadatas",
      subcommands: [
        {
          name: "list",
          description: "Get operations from all providers",
        },
        {
          name: "show",
          description: "Get an individual provider's operations",
          options: [
            {
              name: ["--namespace", "-n"],
              description: "The resource namespace, aka 'provider'",
              args: { name: "namespace" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "permission",
      description: "Manage permissions for a provider",
      subcommands: [
        {
          name: "list",
          description: "List permissions from a provider",
          options: [
            {
              name: ["--namespace", "-n"],
              description: "The resource namespace, aka 'provider'",
              args: { name: "namespace" },
              isRequired: true,
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
