const completionSpec: Fig.Spec = {
  name: "providerhub",
  description: "Manage resources with ProviderHub",
  subcommands: [
    {
      name: "custom-rollout",
      description: "Manage custom rollout with providerhub",
      subcommands: [
        { name: "create", description: "Create the rollout details" },
        {
          name: "list",
          description:
            "Gets the list of the custom rollouts for the given provider",
        },
        { name: "show", description: "Gets the custom rollout details" },
      ],
    },
    {
      name: "default-rollout",
      description: "Manage default rollout with providerhub",
      subcommands: [
        { name: "create", description: "Create the rollout details" },
        {
          name: "delete",
          description:
            "Deletes the rollout resource. Rollout must be in terminal state",
        },
        {
          name: "list",
          description: "Gets the list of the rollouts for the given provider",
        },
        { name: "show", description: "Gets the default rollout details" },
        {
          name: "stop",
          description: "Stops or cancels the rollout, if in progress",
        },
      ],
    },
    {
      name: "manifest",
      description: "Manage with providerhub manifest operations",
      subcommands: [
        { name: "checkin", description: "Checkin the manifest" },
        {
          name: "generate",
          description: "Generates the manifest for the given provider",
        },
      ],
    },
    {
      name: "notification-registration",
      description: "Manage notification registration with providerhub",
      subcommands: [
        { name: "create", description: "Create a notification registration" },
        { name: "delete", description: "Deletes a notification registration" },
        {
          name: "list",
          description:
            "Gets the list of the notification registrations for the given provider",
        },
        {
          name: "show",
          description: "Gets the notification registration details",
        },
      ],
    },
    {
      name: "operation",
      description: "Manage operation with providerhub",
      subcommands: [
        {
          name: "create",
          description: "Create the operation supported by the given provider",
        },
        { name: "delete", description: "Deletes an operation" },
        {
          name: "list",
          description: "Gets the operations supported by the given provider",
        },
      ],
    },
    {
      name: "provider-registration",
      description: "Manage provider registration with providerhub",
      subcommands: [
        { name: "create", description: "Create the provider registration" },
        { name: "delete", description: "Deletes a provider registration" },
        {
          name: "generate-operation",
          description: "Generates the operations api for the given provider",
        },
        {
          name: "list",
          description:
            "Gets the list of the provider registrations in the subscription",
        },
        { name: "show", description: "Gets the provider registration details" },
      ],
    },
    {
      name: "resource-type-registration",
      description: "Manage resource type registration with providerhub",
      subcommands: [
        { name: "create", description: "Create a resource type" },
        { name: "delete", description: "Deletes a resource type" },
        {
          name: "list",
          description:
            "Gets the list of the resource types for the given provider",
        },
        {
          name: "show",
          description:
            "Gets a resource type details in the given subscription and provider",
        },
      ],
    },
    {
      name: "sku",
      description: "Manage sku with providerhub",
      subcommands: [
        {
          name: "create",
          description:
            "Creates or updates the resource type skus in the given resource type. And Creates or updates the resource type skus in the given resource type. And Creates or updates the resource type skus in the given resource type. And Create the resource type skus in the given resource type",
        },
        {
          name: "delete",
          description:
            "Deletes a resource type sku. And Deletes a resource type sku. And Deletes a resource type sku. And Deletes a resource type sku",
        },
        {
          name: "list",
          description:
            "Gets the list of skus for the given resource type. And Gets the list of skus for the given resource type. And Gets the list of skus for the given resource type. And Gets the list of skus for the given resource type",
        },
        {
          name: "show",
          description:
            "Gets the sku details for the given resource type and sku name",
        },
        {
          name: "show-nested-resource-type-first",
          description:
            "Gets the sku details for the given resource type and sku name",
        },
        {
          name: "show-nested-resource-type-second",
          description:
            "Gets the sku details for the given resource type and sku name",
        },
        {
          name: "show-nested-resource-type-third",
          description:
            "Gets the sku details for the given resource type and sku name",
        },
      ],
    },
  ],
};

export default completionSpec;
