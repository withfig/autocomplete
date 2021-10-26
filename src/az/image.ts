const completionSpec: Fig.Spec = {
  name: "image",
  description: "Manage custom virtual machine images",
  subcommands: [
    {
      name: "builder",
      description: "Manage and build image builder templates",
      subcommands: [
        {
          name: "cancel",
          description:
            "Cancel the long running image build based on the image template",
        },
        { name: "create", description: "Create an image builder template" },
        {
          name: "customizer",
          description: "Manage image builder template customizers",
          subcommands: [
            {
              name: "add",
              description:
                "Add an image builder customizer to an image builder template",
            },
            {
              name: "clear",
              description:
                "Remove all image builder customizers from an image builder template",
            },
            {
              name: "remove",
              description:
                "Remove an image builder customizer from an image builder template",
            },
          ],
        },
        { name: "delete", description: "Delete image builder template" },
        { name: "list", description: "List image builder templates" },
        {
          name: "output",
          description: "Manage image builder template output distributors",
          subcommands: [
            {
              name: "add",
              description:
                "Add an image builder output distributor to an image builder template",
            },
            {
              name: "clear",
              description:
                "Remove all image builder output distributors from an image builder template",
            },
            {
              name: "remove",
              description:
                "Remove an image builder output distributor from an image builder template",
            },
          ],
        },
        { name: "run", description: "Build an image builder template" },
        { name: "show", description: "Show an image builder template" },
        {
          name: "show-runs",
          description: "Show an image builder template's run outputs",
        },
        { name: "update", description: "Update an image builder template" },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the template is met",
        },
      ],
    },
    {
      name: "copy",
      description:
        "Copy a managed image (or vm) to other regions. It requires the source disk to be available",
    },
    {
      name: "create",
      description:
        "Create a custom Virtual Machine Image from managed disks or snapshots",
    },
    { name: "delete", description: "Deletes an Image" },
    { name: "list", description: "List custom VM images" },
    { name: "show", description: "Gets an image" },
    { name: "update", description: "Update custom VM images" },
  ],
};

export default completionSpec;
