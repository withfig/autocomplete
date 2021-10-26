const completionSpec: Fig.Spec = {
  name: "sentinel",
  description: "Manage Security Insight",
  subcommands: [
    {
      name: "action",
      description: "Sentinel action",
      subcommands: [
        { name: "list", description: "Gets all actions of alert rule" },
      ],
    },
    {
      name: "alert-rule",
      description: "Sentinel alert-rule",
      subcommands: [
        {
          name: "create",
          description:
            "Creates or updates the action of alert rule. And Create the alert rule",
        },
        {
          name: "delete",
          description:
            "Delete the action of alert rule. And Delete the alert rule",
        },
        { name: "get-action", description: "Gets the action of alert rule" },
        { name: "list", description: "Gets all alert rules" },
        { name: "show", description: "Gets the alert rule" },
        { name: "update", description: "Update the alert rule" },
      ],
    },
    {
      name: "alert-rule-template",
      description: "Sentinel alert-rule-template",
      subcommands: [
        { name: "list", description: "Gets all alert rule templates" },
        { name: "show", description: "Gets the alert rule template" },
      ],
    },
    {
      name: "bookmark",
      description: "Sentinel bookmark",
      subcommands: [
        { name: "create", description: "Create the bookmark" },
        { name: "delete", description: "Delete the bookmark" },
        { name: "list", description: "Gets all bookmarks" },
        { name: "show", description: "Gets a bookmark" },
        { name: "update", description: "Update the bookmark" },
      ],
    },
    {
      name: "data-connector",
      description: "Sentinel data-connector",
      subcommands: [
        { name: "create", description: "Create the data connector" },
        { name: "delete", description: "Delete the data connector" },
        { name: "list", description: "Gets all data connectors" },
        { name: "show", description: "Gets a data connector" },
        { name: "update", description: "Update the data connector" },
      ],
    },
    {
      name: "incident",
      description: "Sentinel incident",
      subcommands: [
        { name: "create", description: "Create the incident" },
        { name: "delete", description: "Delete the incident" },
        { name: "list", description: "Gets all incidents" },
        { name: "show", description: "Gets an incident" },
        { name: "update", description: "Update the incident" },
      ],
    },
    {
      name: "incident-comment",
      description: "Sentinel incident-comment",
      subcommands: [
        { name: "create", description: "Creates the incident comment" },
        { name: "list", description: "Gets all incident comments" },
        { name: "show", description: "Gets an incident comment" },
      ],
    },
  ],
};

export default completionSpec;
