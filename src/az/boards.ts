const completionSpec: Fig.Spec = {
  name: "boards",
  description: "Manage Azure Boards",
  subcommands: [
    {
      name: "area",
      description: "Manage area paths",
      subcommands: [
        {
          name: "project",
          description: "Manage areas for a project",
          subcommands: [
            { name: "create", description: "Create area" },
            { name: "delete", description: "Delete area" },
            { name: "list", description: "List areas for a project" },
            { name: "show", description: "Show area details for a project" },
            { name: "update", description: "Update area" },
          ],
        },
        {
          name: "team",
          description: "Manage areas for a team",
          subcommands: [
            { name: "add", description: "Add area to a team" },
            { name: "list", description: "List areas for a team" },
            { name: "remove", description: "Remove area from a team" },
            { name: "update", description: "Update team area" },
          ],
        },
      ],
    },
    {
      name: "iteration",
      description: "Manage iterations",
      subcommands: [
        {
          name: "project",
          description: "Manage iterations for a project",
          subcommands: [
            { name: "create", description: "Create iteration" },
            { name: "delete", description: "Delete iteration" },
            { name: "list", description: "List iterations for a project" },
            {
              name: "show",
              description: "Show iteration details for a project",
            },
            { name: "update", description: "Update project iteration" },
          ],
        },
        {
          name: "team",
          description: "Manage iterations for a team",
          subcommands: [
            { name: "add", description: "Add iteration to a team" },
            { name: "list", description: "List iterations for a team" },
            {
              name: "list-work-items",
              description: "List work-items for an iteration",
            },
            { name: "remove", description: "Remove iteration from a team" },
            {
              name: "set-backlog-iteration",
              description: "Set backlog iteration for a team",
            },
            {
              name: "set-default-iteration",
              description: "Set default iteration for a team",
            },
            {
              name: "show-backlog-iteration",
              description: "Show backlog iteration for a team",
            },
            {
              name: "show-default-iteration",
              description: "Show default iteration for a team",
            },
          ],
        },
      ],
    },
    { name: "query", description: "Query for a list of work items" },
    {
      name: "work-item",
      description: "Manage work items",
      subcommands: [
        { name: "create", description: "Create a work item" },
        { name: "delete", description: "Delete a work item" },
        {
          name: "relation",
          description: "Manage work item relations",
          subcommands: [
            { name: "add", description: "Add relation(s) to work item" },
            {
              name: "list-type",
              description:
                "List work item relations supported in the organization",
            },
            {
              name: "remove",
              description: "Remove relation(s) from work item",
            },
            {
              name: "show",
              description: "Get work item, fill relations with friendly name",
            },
          ],
        },
        { name: "show", description: "Show details for a work item" },
        { name: "update", description: "Update work items" },
      ],
    },
  ],
};

export default completionSpec;
