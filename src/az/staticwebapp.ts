const completionSpec: Fig.Spec = {
  name: "staticwebapp",
  description: "Manage static apps",
  subcommands: [
    {
      name: "appsettings",
      description: "Manage app settings of Functions of the static app",
      subcommands: [
        {
          name: "delete",
          description:
            "Delete function app settings with given keys of the static app",
        },
        {
          name: "list",
          description:
            "List function app settings of the static app. A function must first be deployed to use this method",
        },
        {
          name: "set",
          description: "Set (replace) function app settings of the static app",
        },
      ],
    },
    {
      name: "create",
      description:
        "Create a static app with content from GitHubRepository URL provided in source on provided branch. Return the app created",
    },
    { name: "delete", description: "Delete a static app" },
    {
      name: "disconnect",
      description:
        "Disconnect source control to enable connecting to a different repo",
    },
    {
      name: "environment",
      description: "Manage environment of the static app",
      subcommands: [
        {
          name: "delete",
          description:
            "Delete the static app production environment or the specified environment",
        },
        { name: "functions", description: "Show information about functions" },
        {
          name: "list",
          description:
            "List all environment of the static app including production",
        },
        {
          name: "show",
          description:
            "Show information about the production environment or the specified environment",
        },
      ],
    },
    {
      name: "hostname",
      description: "Manage custom hostnames of Functions of the static app",
      subcommands: [
        {
          name: "delete",
          description: "Delete given hostname of the static app",
        },
        {
          name: "list",
          description: "List custom hostnames of the static app",
        },
        {
          name: "set",
          description:
            "Set given sub-domain hostname to the static app. Please configure a CNAME record with your DNS provider",
        },
      ],
    },
    {
      name: "list",
      description:
        "List all static app resources in a subscription, or in resource group if provided",
    },
    {
      name: "reconnect",
      description:
        "Connect to a repo and branch following a disconnect command",
    },
    {
      name: "secrets",
      description: "Manage deployment token for the static app",
      subcommands: [
        {
          name: "list",
          description: "List the deployment token for the static app",
        },
        {
          name: "reset-api-key",
          description: "Reset the deployment token for the static app",
        },
      ],
    },
    { name: "show", description: "Show details of a static app" },
    {
      name: "update",
      description: "Update a static app. Return the app updated",
    },
    {
      name: "users",
      description: "Manage users of the static app",
      subcommands: [
        {
          name: "invite",
          description:
            "Create invitation link for specified user to the static app",
        },
        {
          name: "list",
          description:
            "Lists users and assigned roles, limited to users who accepted their invites",
        },
        {
          name: "update",
          description:
            "Updates a user entry with the listed roles. Either user details or user id is required",
        },
      ],
    },
  ],
};

export default completionSpec;
