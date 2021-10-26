const completionSpec: Fig.Spec = {
  name: "bot",
  description: "Manage Microsoft Azure Bot Service",
  subcommands: [
    {
      name: "authsetting",
      description: "Manage OAuth connection settings on a bot",
      subcommands: [
        {
          name: "create",
          description: "Create an OAuth connection setting on a bot",
        },
        {
          name: "delete",
          description: "Delete an OAuth connection setting on a bot",
        },
        {
          name: "list",
          description: "Show all OAuth connection settings on a bot",
        },
        {
          name: "list-providers",
          description:
            "List details for all service providers available for creating OAuth connection settings",
        },
        {
          name: "show",
          description: "Show details of an OAuth connection setting on a bot",
        },
      ],
    },
    { name: "create", description: "Create a new v4 SDK bot" },
    { name: "delete", description: "Delete an existing bot" },
    {
      name: "directline",
      description: "Manage the Directline Channel on a bot",
      subcommands: [
        {
          name: "create",
          description:
            "Create the DirectLine Channel on a bot with only v3 protocol enabled",
        },
        {
          name: "delete",
          description: "Delete the Directline Channel on a bot",
        },
        {
          name: "show",
          description: "Get details of the Directline Channel on a bot",
        },
        {
          name: "update",
          description:
            "Update the DirectLine Channel on a bot with only v3 protocol enabled",
        },
      ],
    },
    { name: "download", description: "Download an existing bot" },
    {
      name: "email",
      description: "Manage the email Channel on a bot",
      subcommands: [
        { name: "create", description: "Create the Email Channel on a bot" },
        { name: "delete", description: "Delete the email Channel on a bot" },
        {
          name: "show",
          description: "Get details of the email Channel on a bot",
        },
      ],
    },
    {
      name: "facebook",
      description: "Manage the Facebook Channel on a bot",
      subcommands: [
        { name: "create", description: "Create the Facebook Channel on a bot" },
        { name: "delete", description: "Delete the Facebook Channel on a bot" },
        {
          name: "show",
          description: "Get details of the Facebook Channel on a bot",
        },
      ],
    },
    {
      name: "kik",
      description: "Manage the Kik Channel on a bot",
      subcommands: [
        { name: "create", description: "Create the Kik Channel on a bot" },
        { name: "delete", description: "Delete the Kik Channel on a bot" },
        {
          name: "show",
          description: "Get details of the Kik Channel on a bot",
        },
      ],
    },
    {
      name: "msteams",
      description: "Manage the Microsoft Teams Channel on a bot",
      subcommands: [
        {
          name: "create",
          description: "Create the Microsoft Teams Channel on a bot",
        },
        {
          name: "delete",
          description: "Delete the Microsoft Teams Channel on a bot",
        },
        {
          name: "show",
          description: "Get details of the Microsoft Teams Channel on a bot",
        },
      ],
    },
    {
      name: "prepare-deploy",
      description:
        "Add scripts/config files for publishing with az webapp deployment",
    },
    {
      name: "prepare-publish",
      description:
        "(Maintenance mode) Add scripts to your local source code directory to be able to publish back using az bot publish for v3 SDK bots",
    },
    {
      name: "publish",
      description: "Publish to a bot's associated app service",
    },
    { name: "show", description: "Get an existing bot" },
    {
      name: "skype",
      description: "Manage the Skype Channel on a bot",
      subcommands: [
        { name: "create", description: "Create the Skype Channel on a bot" },
        { name: "delete", description: "Delete the Skype Channel on a bot" },
        {
          name: "show",
          description: "Get details of the Skype Channel on a bot",
        },
      ],
    },
    {
      name: "slack",
      description: "Manage the Slack Channel on a bot",
      subcommands: [
        { name: "create", description: "Create the Slack Channel on a bot" },
        { name: "delete", description: "Delete the Slack Channel on a bot" },
        {
          name: "show",
          description: "Get details of the Slack Channel on a bot",
        },
      ],
    },
    {
      name: "sms",
      description: "Manage the SMS Channel on a bot",
      subcommands: [
        { name: "create", description: "Create the SMS Channel on a bot" },
        { name: "delete", description: "Delete the SMS Channel on a bot" },
        {
          name: "show",
          description: "Get details of the SMS Channel on a bot",
        },
      ],
    },
    {
      name: "telegram",
      description: "Manage the Telegram Channel on a bot",
      subcommands: [
        { name: "create", description: "Create the Telegram Channel on a bot" },
        { name: "delete", description: "Delete the Telegram Channel on a bot" },
        {
          name: "show",
          description: "Get details of the Telegram Channel on a bot",
        },
      ],
    },
    { name: "update", description: "Update an existing bot" },
    {
      name: "webchat",
      description: "Manage the Webchat Channel on a bot",
      subcommands: [
        {
          name: "show",
          description: "Get details of the Webchat Channel on a bot",
        },
      ],
    },
  ],
};

export default completionSpec;
