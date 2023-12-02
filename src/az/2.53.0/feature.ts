const completion: Fig.Spec = {
  name: "feature",
  description: "Manage resource provider features",
  subcommands: [
    {
      name: "list",
      description: "List preview features",
      options: [
        {
          name: "--namespace",
          description: "The resource namespace, aka 'provider'",
          args: { name: "namespace" },
        },
      ],
    },
    {
      name: "register",
      description: "Register a preview feature",
      options: [
        {
          name: ["--name", "-n"],
          description: "The feature name",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: "--namespace",
          description: "The resource namespace, aka 'provider'",
          args: { name: "namespace" },
          isRequired: true,
        },
      ],
    },
    {
      name: "show",
      description: "Gets the preview feature with the specified name",
      options: [
        {
          name: ["--name", "-n"],
          description: "The feature name",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: "--namespace",
          description: "The resource namespace, aka 'provider'",
          args: { name: "namespace" },
          isRequired: true,
        },
      ],
    },
    {
      name: "unregister",
      description: "Unregister a preview feature",
      options: [
        {
          name: ["--name", "-n"],
          description: "The feature name",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: "--namespace",
          description: "The resource namespace, aka 'provider'",
          args: { name: "namespace" },
          isRequired: true,
        },
      ],
    },
    {
      name: "registration",
      description: "Manage resource provider feature registrations",
      subcommands: [
        {
          name: "create",
          description: "Create a feature registration",
          options: [
            {
              name: ["--name", "-n"],
              description: "The feature name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--namespace",
              description: "The resource namespace, aka 'provider'",
              args: { name: "namespace" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a feature registration",
          options: [
            {
              name: ["--name", "-n"],
              description: "The feature name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--namespace",
              description: "The resource namespace, aka 'provider'",
              args: { name: "namespace" },
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
          description: "List feature registrations",
          options: [
            {
              name: "--namespace",
              description: "The resource namespace, aka 'provider'",
              args: { name: "namespace" },
            },
          ],
        },
        {
          name: "show",
          description: "Returns a feature registration",
          options: [
            {
              name: ["--name", "-n"],
              description: "The feature name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--provider-namespace",
              description: "The provider namespace. Required",
              args: { name: "provider-namespace" },
              isRequired: true,
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
