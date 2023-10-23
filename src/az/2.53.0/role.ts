const completion: Fig.Spec = {
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
          options: [
            {
              name: "--role",
              description: "Role name or id",
              args: { name: "role" },
              isRequired: true,
            },
            {
              name: "--assignee",
              description:
                "Represent a user, group, or service principal. supported format: object id, user sign-in name, or service principal name",
              args: { name: "assignee" },
            },
            {
              name: "--assignee-object-id",
              description:
                "Use this parameter instead of '--assignee' to bypass Graph API invocation in case of insufficient privileges. This parameter only works with object ids for users, groups, service principals, and managed identities. For managed identities use the principal id. For service principals, use the object id and not the app id",
              args: { name: "assignee-object-id" },
            },
            {
              name: "--assignee-principal-type",
              description:
                "Use with --assignee-object-id to avoid errors caused by propagation latency in AAD Graph",
              args: {
                name: "assignee-principal-type",
                suggestions: [
                  "ForeignGroup",
                  "Group",
                  "ServicePrincipal",
                  "User",
                ],
              },
            },
            {
              name: "--condition",
              description:
                "Condition under which the user can be granted permission",
              args: { name: "condition" },
            },
            {
              name: "--condition-version",
              description:
                "Version of the condition syntax. If --condition is specified without --condition-version, default to 2.0",
              args: { name: "condition-version" },
            },
            {
              name: "--description",
              description: "Description of role assignment",
              args: { name: "description" },
            },
            {
              name: ["--name", "-n"],
              description:
                "A GUID for the role assignment. It must be unique and different for each role assignment. If omitted, a new GUID is generetd",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Use it only if the role or assignment was added at the level of a resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--scope",
              description:
                "Scope at which the role assignment or definition applies to, e.g., /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333, /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup, or /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM",
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete role assignments",
          options: [
            {
              name: "--assignee",
              description:
                "Represent a user, group, or service principal. supported format: object id, user sign-in name, or service principal name",
              args: { name: "assignee" },
            },
            {
              name: "--ids",
              description: "Space-separated role assignment ids",
              args: { name: "ids" },
            },
            {
              name: "--include-inherited",
              description: "Include assignments applied on parent scopes",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Use it only if the role or assignment was added at the level of a resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--role",
              description: "Role name or id",
              args: { name: "role" },
            },
            {
              name: "--scope",
              description:
                "Scope at which the role assignment or definition applies to, e.g., /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333, /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup, or /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM",
              args: { name: "scope" },
            },
            {
              name: ["--yes", "-y"],
              description:
                "Continue to delete all assignments under the subscription",
            },
          ],
        },
        {
          name: "list",
          description: "List role assignments",
          options: [
            {
              name: "--all",
              description:
                "Show all assignments under the current subscription",
            },
            {
              name: "--assignee",
              description:
                "Represent a user, group, or service principal. supported format: object id, user sign-in name, or service principal name",
              args: { name: "assignee" },
            },
            {
              name: "--include-classic-administrators",
              description:
                "List default role assignments for subscription classic administrators, aka co-admins",
            },
            {
              name: "--include-groups",
              description:
                "Include extra assignments to the groups of which the user is a member(transitively)",
            },
            {
              name: "--include-inherited",
              description: "Include assignments applied on parent scopes",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Use it only if the role or assignment was added at the level of a resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--role",
              description: "Role name or id",
              args: { name: "role" },
            },
            {
              name: "--scope",
              description:
                "Scope at which the role assignment or definition applies to, e.g., /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333, /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup, or /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM",
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "list-changelogs",
          description: "List changelogs for role assignments",
          options: [
            {
              name: "--end-time",
              description:
                "The end time of the query in the format of %Y-%m-%dT%H:%M:%SZ, e.g. 2000-12-31T12:59:59Z. Defaults to the current time",
              args: { name: "end-time" },
            },
            {
              name: "--start-time",
              description:
                "The start time of the query in the format of %Y-%m-%dT%H:%M:%SZ, e.g. 2000-12-31T12:59:59Z. Defaults to 1 Hour prior to the current time",
              args: { name: "start-time" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Update an existing role assignment for a user, group, or service principal",
          options: [
            {
              name: "--role-assignment",
              description:
                "Description of an existing role assignment as JSON, or a path to a file containing a JSON description",
              args: { name: "role-assignment" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "definition",
      description: "Manage role definitions",
      subcommands: [
        {
          name: "create",
          description: "Create a custom role definition",
          options: [
            {
              name: "--role-definition",
              description:
                "Description of a role as JSON, or a path to a file containing a JSON description",
              args: { name: "role-definition" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a role definition",
          options: [
            {
              name: ["--name", "-n"],
              description: "The role's name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--custom-role-only",
              description: "Custom roles only(vs. build-in ones)",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Use it only if the role or assignment was added at the level of a resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--scope",
              description:
                "Scope at which the role assignment or definition applies to, e.g., /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333, /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup, or /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM",
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "list",
          description: "List role definitions",
          options: [
            {
              name: "--custom-role-only",
              description: "Custom roles only(vs. build-in ones)",
            },
            {
              name: ["--name", "-n"],
              description: "The role's name",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Use it only if the role or assignment was added at the level of a resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--scope",
              description:
                "Scope at which the role assignment or definition applies to, e.g., /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333, /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup, or /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM",
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "update",
          description: "Update a role definition",
          options: [
            {
              name: "--role-definition",
              description:
                "Description of an existing role as JSON, or a path to a file containing a JSON description",
              args: { name: "role-definition" },
              isRequired: true,
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
