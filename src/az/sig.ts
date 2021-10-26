const completionSpec: Fig.Spec = {
  name: "sig",
  description: "Manage shared image gallery",
  subcommands: [
    { name: "create", description: "Create a shared image gallery" },
    { name: "delete", description: "Delete a Shared Image Gallery" },
    {
      name: "image-definition",
      description: "Manage shared gallery image with VM",
      subcommands: [
        { name: "create", description: "Create a gallery image definition" },
        { name: "delete", description: "Delete a gallery image" },
        {
          name: "list",
          description: "List gallery image definitions in a gallery",
        },
        {
          name: "list-shared",
          description:
            "List VM Image definitions in a gallery shared directly to your subscription or tenant (preview)",
        },
        {
          name: "show",
          description: "Retrieves information about a gallery image definition",
        },
        {
          name: "show-shared",
          description: "Get a shared gallery image (preview)",
        },
        { name: "update", description: "Update a VM Image definition" },
      ],
    },
    {
      name: "image-version",
      description: "Manage shared gallery image version with VM",
      subcommands: [
        { name: "create", description: "Create a new image version" },
        { name: "delete", description: "Delete a gallery image version" },
        {
          name: "list",
          description:
            "List gallery image versions in a gallery image definition",
        },
        {
          name: "list-shared",
          description:
            "List VM Image Versions in a gallery shared directly to your subscription or tenant (preview)",
        },
        {
          name: "show",
          description: "Retrieves information about a gallery image version",
        },
        {
          name: "show-shared",
          description:
            "Get an image version in a gallery shared directly to your subscription or tenant (preview)",
        },
        { name: "update", description: "Update a share image version" },
        {
          name: "wait",
          description: "Wait for image version related operation",
        },
      ],
    },
    { name: "list", description: "List share image galleries" },
    {
      name: "list-shared",
      description:
        "List all galleries shared directly to your subscription or tenant (preview)",
    },
    {
      name: "share",
      description: "Manage gallery sharing profile",
      subcommands: [
        {
          name: "add",
          description: "Share gallery with subscriptions and tenants",
        },
        {
          name: "remove",
          description: "Stop sharing gallery with a subscription or tenant",
        },
        {
          name: "reset",
          description:
            "Disable gallery from being shared with subscription or tenant",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of a shared gallery is met",
        },
      ],
    },
    {
      name: "show",
      description: "Retrieves information about a Shared Image Gallery",
    },
    {
      name: "show-shared",
      description:
        "Get a gallery that has been shared directly to your subscription or tenant (preview)",
    },
    { name: "update", description: "Update a share image gallery" },
  ],
};

export default completionSpec;
