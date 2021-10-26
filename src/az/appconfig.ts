const completionSpec: Fig.Spec = {
  name: "appconfig",
  description: "Manage App Configurations",
  subcommands: [
    { name: "create", description: "Create an App Configuration" },
    {
      name: "credential",
      description: "Manage credentials for App Configurations",
      subcommands: [
        {
          name: "list",
          description: "List access keys of an App Configuration",
        },
        {
          name: "regenerate",
          description: "Regenerate an access key for an App Configuration",
        },
      ],
    },
    { name: "delete", description: "Delete an App Configuration" },
    {
      name: "feature",
      description: "Manage feature flags stored in an App Configuration",
      subcommands: [
        { name: "delete", description: "Delete feature flag" },
        {
          name: "disable",
          description: "Disable a feature flag to turn it OFF for use",
        },
        {
          name: "enable",
          description: "Enable a feature flag to turn it ON for use",
        },
        {
          name: "filter",
          description:
            "Manage filters associated with feature flags stored in an App Configuration",
          subcommands: [
            { name: "add", description: "Add a filter to a feature flag" },
            {
              name: "delete",
              description: "Delete a filter from a feature flag",
            },
            {
              name: "list",
              description: "List all filters for a feature flag",
            },
            { name: "show", description: "Show filters of a feature flag" },
          ],
        },
        { name: "list", description: "List feature flags" },
        {
          name: "lock",
          description: "Lock a feature flag to prohibit write operations",
        },
        { name: "set", description: "Set a feature flag" },
        { name: "show", description: "Show all attributes of a feature flag" },
        {
          name: "unlock",
          description: "Unlock a feature to gain write operations",
        },
      ],
    },
    {
      name: "identity",
      description: "Managed identities for App Configurations",
      subcommands: [
        {
          name: "assign",
          description: "Update managed identities for an App Configuration",
        },
        {
          name: "remove",
          description: "Remove managed identities for an App Configuration",
        },
        {
          name: "show",
          description: "Display managed identities for an App Configuration",
        },
      ],
    },
    {
      name: "kv",
      description: "Manage key-values stored in an App Configuration",
      subcommands: [
        { name: "delete", description: "Delete key-values" },
        {
          name: "export",
          description:
            "Export configurations to another place from your App Configuration",
        },
        {
          name: "import",
          description:
            "Import configurations into your App Configuration from another place",
        },
        { name: "list", description: "List key-values" },
        {
          name: "lock",
          description: "Lock a key-value to prohibit write operations",
        },
        { name: "restore", description: "Restore key-values" },
        { name: "set", description: "Set a key-value" },
        { name: "set-keyvault", description: "Set a keyvault reference" },
        { name: "show", description: "Show all attributes of a key-value" },
        {
          name: "unlock",
          description: "Unlock a key-value to gain write operations",
        },
      ],
    },
    {
      name: "list",
      description:
        "Lists all App Configurations under the current subscription",
    },
    {
      name: "revision",
      description:
        "Manage revisions for key-values stored in an App Configuration",
      subcommands: [
        { name: "list", description: "Lists revision history of key-values" },
      ],
    },
    { name: "show", description: "Show properties of an App Configuration" },
    { name: "update", description: "Update an App Configuration" },
  ],
};

export default completionSpec;
