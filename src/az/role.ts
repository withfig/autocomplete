const completionSpec: Fig.Spec = {
  name: "role",
  description:
    "Manage user roles for access control with Azure Active Directory and service principals",
  subcommands: [
    {
      name: "assignment",
      description: "Manage role assignments",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new role assignment for a user, group, or service principal",
        },
        { name: "delete", description: "Delete role assignments" },
        { name: "list", description: "List role assignments" },
        {
          name: "list-changelogs",
          description: "List changelogs for role assignments",
        },
        {
          name: "update",
          description:
            "Update an existing role assignment for a user, group, or service principal",
        },
      ],
    },
    {
      name: "definition",
      description: "Manage role definitions",
      subcommands: [
        { name: "create", description: "Create a custom role definition" },
        { name: "delete", description: "Delete a role definition" },
        { name: "list", description: "List role definitions" },
        { name: "update", description: "Update a role definition" },
      ],
    },
  ],
};

export default completionSpec;
