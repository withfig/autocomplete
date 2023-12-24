const completion: Fig.Spec = {
  name: "tag",
  description: "Tag Management on a resource",
  subcommands: [
    {
      name: "add-value",
      description: "Create a tag value",
      options: [
        {
          name: ["--name", "-n"],
          description: "The tag name",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: "--value",
          description: "The tag value",
          args: { name: "value" },
          isRequired: true,
        },
      ],
    },
    {
      name: "create",
      description: "Create tags on a specific resource",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the tag to create",
          args: { name: "name" },
        },
        {
          name: "--resource-id",
          description:
            "The resource identifier for the entity being tagged. A resource, a resource group or a subscription may be tagged",
          args: { name: "resource-id" },
        },
        {
          name: "--tags",
          description: "The tags to be applied on the resource",
          args: { name: "tags" },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete tags on a specific resource",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the tag to be deleted",
          args: { name: "name" },
        },
        {
          name: "--resource-id",
          description:
            "The resource identifier for the entity being tagged. A resource, a resource group or a subscription may be tagged",
          args: { name: "resource-id" },
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "list",
      description: "List the entire set of tags on a specific resource",
      options: [
        {
          name: "--resource-id",
          description:
            "The resource identifier for the entity being tagged. A resource, a resource group or a subscription may be tagged",
          args: { name: "resource-id" },
        },
      ],
    },
    {
      name: "remove-value",
      description: "Deletes a predefined tag value for a predefined tag name",
      options: [
        {
          name: ["--name", "-n"],
          description: "The tag name",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: "--value",
          description: "The tag value",
          args: { name: "value" },
          isRequired: true,
        },
      ],
    },
    {
      name: "update",
      description: "Selectively update the set of tags on a specific resource",
      options: [
        {
          name: "--operation",
          description:
            "The update operation. Options are Merge, Replace and Delete",
          args: {
            name: "operation",
            suggestions: ["Delete", "Merge", "Replace"],
          },
          isRequired: true,
        },
        {
          name: "--resource-id",
          description:
            "The resource identifier for the entity being tagged. A resource, a resource group or a subscription may be tagged",
          args: { name: "resource-id" },
          isRequired: true,
        },
        {
          name: "--tags",
          description: "The tags to be updated on the resource",
          args: { name: "tags" },
          isRequired: true,
        },
      ],
    },
  ],
};

export default completion;
