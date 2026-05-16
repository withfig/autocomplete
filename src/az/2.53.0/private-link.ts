const completion: Fig.Spec = {
  name: "private-link",
  description: "Private-link association CLI command group",
  subcommands: [
    {
      name: "association",
      description: "Private-link association management on a resource",
      subcommands: [
        {
          name: "create",
          description: "Create a PrivateLinkAssociation",
          options: [
            {
              name: ["--management-group-id", "-m"],
              description: "The management group id",
              args: { name: "management-group-id" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the private link association",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--privatelink", "-p"],
              description: "The name of the private link",
              args: { name: "privatelink" },
              isRequired: true,
            },
            {
              name: ["--public-network-access", "-a"],
              description: "Restrict traffic to private link",
              args: {
                name: "public-network-access",
                suggestions: ["disabled", "enabled"],
              },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a PrivateLinkAssociation",
          options: [
            {
              name: ["--management-group-id", "-m"],
              description: "The management group id",
              args: { name: "management-group-id" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the private link association",
              args: { name: "name" },
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
          description:
            "Get a private link association for a management group scope",
          options: [
            {
              name: ["--management-group-id", "-m"],
              description: "The management group id",
              args: { name: "management-group-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Get a private link association",
          options: [
            {
              name: ["--management-group-id", "-m"],
              description: "The management group id",
              args: { name: "management-group-id" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the private link association",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
