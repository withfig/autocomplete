const completionSpec: Fig.Spec = {
  name: "datadog",
  description: "Manage datadog",
  subcommands: [
    {
      name: "monitor",
      description: "Manage monitor with datadog",
      subcommands: [
        { name: "create", description: "Create a monitor resource" },
        { name: "delete", description: "Delete a monitor resource" },
        { name: "get-default-key", description: "Get the default api key" },
        {
          name: "list",
          description:
            "List all monitors under the specified resource group. And List all monitors under the specified subscription",
        },
        {
          name: "list-api-key",
          description: "List the api keys for a given monitor resource",
        },
        {
          name: "list-host",
          description: "List the hosts for a given monitor resource",
        },
        {
          name: "list-linked-resource",
          description:
            "List all Azure resources associated to the same Datadog organization as the target resource",
        },
        {
          name: "list-monitored-resource",
          description:
            "List the resources currently being monitored by the Datadog monitor resource",
        },
        {
          name: "refresh-set-password-link",
          description: "Refresh the set password link and return a latest one",
        },
        { name: "set-default-key", description: "Set the default api key" },
        {
          name: "show",
          description: "Get the properties of a specific monitor resource",
        },
        { name: "update", description: "Update a monitor resource" },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the datadog monitor is met",
        },
      ],
    },
    {
      name: "sso-config",
      description: "Manage sso config with datadog",
      subcommands: [
        {
          name: "create",
          description: "Configures single-sign-on for this resource",
        },
        {
          name: "list",
          description:
            "List the single sign-on configurations for a given monitor resource",
        },
        {
          name: "show",
          description:
            "Gets the datadog single sign-on resource for the given Monitor",
        },
        {
          name: "update",
          description: "Configures single-sign-on for this resource",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the datadog sso-config is met",
        },
      ],
    },
    {
      name: "tag-rule",
      description: "Manage tag rule with datadog",
      subcommands: [
        {
          name: "create",
          description: "Create a tag rule set for a given monitor resource",
        },
        {
          name: "list",
          description: "List the tag rules for a given monitor resource",
        },
        {
          name: "show",
          description: "Get a tag rule set for a given monitor resource",
        },
        {
          name: "update",
          description: "Update a tag rule set for a given monitor resource",
        },
      ],
    },
    {
      name: "terms",
      description: "Manage marketplace agreements with datadog",
      subcommands: [
        {
          name: "create",
          description:
            "Create Datadog marketplace agreement in the subscription",
        },
        { name: "list", description: "List datadog marketplace agreements" },
        {
          name: "update",
          description:
            "Update Datadog marketplace agreement in the subscription",
        },
      ],
    },
  ],
};

export default completionSpec;
