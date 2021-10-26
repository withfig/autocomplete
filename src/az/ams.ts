const completionSpec: Fig.Spec = {
  name: "ams",
  description: "Manage Azure Media Services resources",
  subcommands: [
    {
      name: "account",
      description: "Manage Azure Media Services accounts",
      subcommands: [
        {
          name: "check-name",
          description:
            "Checks whether the Media Service resource name is available",
        },
        {
          name: "create",
          description: "Create an Azure Media Services account",
        },
        {
          name: "delete",
          description: "Delete an Azure Media Services account",
        },
        {
          name: "encryption",
          description: "Manage encryption for an Azure Media Services account",
          subcommands: [
            {
              name: "set",
              description:
                "Set the encryption settings for an Azure Media Services account",
            },
            {
              name: "show",
              description:
                "Show the details of encryption settings for an Azure Media Services account",
            },
          ],
        },
        {
          name: "list",
          description:
            "List Azure Media Services accounts for the entire subscription",
        },
        {
          name: "mru",
          description:
            "Manage media reserved units for an Azure Media Services account. This doesn't work with accounts created with 2020-05-01 version of the Media Services API or later. Accounts created this way no longer need to set media reserved units as the system will automaticaly scale up and down based on load",
          subcommands: [
            {
              name: "set",
              description:
                "Set the type and number of media reserved units for an Azure Media Services account. This doesn't work with accounts created with 2020-05-01 version of the Media Services API or later. Accounts created this way no longer need to set media reserved units as the system will automaticaly scale up and down based on load",
            },
            {
              name: "show",
              description:
                "Show the details of media reserved units for an Azure Media Services account. This doesn't work with accounts created with 2020-05-01 version of the Media Services API or later. Accounts created this way no longer need to set media reserved units as the system will automaticaly scale up and down based on load",
            },
          ],
        },
        {
          name: "show",
          description: "Show the details of an Azure Media Services account",
        },
        {
          name: "sp",
          description:
            "Manage service principal and role based access for an Azure Media Services account",
          subcommands: [
            {
              name: "create",
              description:
                "Create or update a service principal and configure its access to an Azure Media Services account",
            },
            {
              name: "reset-credentials",
              description:
                "Generate a new client secret for a service principal configured for an Azure Media Services account",
            },
          ],
        },
        {
          name: "storage",
          description: "Manage storage for an Azure Media Services account",
          subcommands: [
            {
              name: "add",
              description:
                "Attach a secondary storage to an Azure Media Services account",
            },
            {
              name: "remove",
              description:
                "Detach a secondary storage from an Azure Media Services account",
            },
            {
              name: "set-authentication",
              description:
                "Set the authentication of a storage account attached to an Azure Media Services account",
            },
            {
              name: "sync-storage-keys",
              description:
                "Synchronize storage account keys for a storage account associated with an Azure Media Services account",
            },
          ],
        },
        {
          name: "update",
          description: "Update the details of an Azure Media Services account",
        },
      ],
    },
    {
      name: "account-filter",
      description: "Manage account filters for an Azure Media Services account",
      subcommands: [
        { name: "create", description: "Create an account filter" },
        { name: "delete", description: "Delete an account filter" },
        {
          name: "list",
          description:
            "List all the account filters of an Azure Media Services account",
        },
        { name: "show", description: "Show the details of an account filter" },
        {
          name: "update",
          description: "Update the details of an account filter",
        },
      ],
    },
    {
      name: "asset",
      description: "Manage assets for an Azure Media Services account",
      subcommands: [
        { name: "create", description: "Create an asset" },
        { name: "delete", description: "Delete an asset" },
        {
          name: "get-encryption-key",
          description:
            "Get the asset storage encryption keys used to decrypt content created by version 2 of the Media Services API",
        },
        {
          name: "get-sas-urls",
          description:
            "Lists storage container URLs with shared access signatures (SAS) for uploading and downloading Asset content. The signatures are derived from the storage account keys",
        },
        {
          name: "list",
          description: "List all the assets of an Azure Media Services account",
        },
        {
          name: "list-streaming-locators",
          description:
            "List streaming locators which are associated with this asset",
        },
        { name: "show", description: "Show the details of an asset" },
        { name: "update", description: "Update the details of an asset" },
      ],
    },
    {
      name: "asset-filter",
      description: "Manage asset filters for an Azure Media Services account",
      subcommands: [
        { name: "create", description: "Create an asset filter" },
        { name: "delete", description: "Delete an asset filter" },
        {
          name: "list",
          description:
            "List all the asset filters of an Azure Media Services account",
        },
        { name: "show", description: "Show the details of an asset filter" },
        {
          name: "update",
          description: "Update the details of an asset filter",
        },
      ],
    },
    {
      name: "content-key-policy",
      description:
        "Manage content key policies for an Azure Media Services account",
      subcommands: [
        { name: "create", description: "Create a new content key policy" },
        { name: "delete", description: "Delete a content key policy" },
        {
          name: "list",
          description:
            "List all the content key policies within an Azure Media Services account",
        },
        {
          name: "option",
          description: "Manage options for an existing content key policy",
          subcommands: [
            {
              name: "add",
              description: "Add a new option to an existing content key policy",
            },
            {
              name: "remove",
              description:
                "Remove an option from an existing content key policy",
            },
            {
              name: "update",
              description:
                "Update an option from an existing content key policy",
            },
          ],
        },
        { name: "show", description: "Show an existing content key policy" },
        {
          name: "update",
          description: "Update an existing content key policy",
        },
      ],
    },
    {
      name: "job",
      description: "Manage jobs for a transform",
      subcommands: [
        { name: "cancel", description: "Cancel a job" },
        { name: "delete", description: "Delete a job" },
        {
          name: "list",
          description:
            "List all the jobs of a transform within an Azure Media Services account",
        },
        { name: "show", description: "Show the details of a job" },
        { name: "start", description: "Start a job" },
        { name: "update", description: "Update an existing job" },
      ],
    },
    {
      name: "live-event",
      description: "Manage live events for an Azure Media Service account",
      subcommands: [
        { name: "create", description: "Create a live event" },
        { name: "delete", description: "Delete a live event" },
        {
          name: "list",
          description:
            "List all the live events of an Azure Media Services account",
        },
        { name: "reset", description: "Reset a live event" },
        { name: "show", description: "Show the details of a live event" },
        {
          name: "standby",
          description: "Allocate a live event to be started later",
        },
        { name: "start", description: "Start a live event" },
        { name: "stop", description: "Stop a live event" },
        { name: "update", description: "Update the details of a live event" },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the live event is met",
        },
      ],
    },
    {
      name: "live-output",
      description: "Manage live outputs for an Azure Media Service account",
      subcommands: [
        { name: "create", description: "Create a live output" },
        { name: "delete", description: "Delete a live output" },
        {
          name: "list",
          description: "List all the live outputs in a live event",
        },
        { name: "show", description: "Show the details of a live output" },
      ],
    },
    {
      name: "streaming-endpoint",
      description:
        "Manage streaming endpoints for an Azure Media Service account",
      subcommands: [
        {
          name: "akamai",
          description:
            "Manage AkamaiAccessControl objects to be used on streaming endpoints",
          subcommands: [
            {
              name: "add",
              description:
                "Add an AkamaiAccessControl to an existing streaming endpoint",
            },
            {
              name: "remove",
              description:
                "Remove an AkamaiAccessControl from an existing streaming endpoint",
            },
          ],
        },
        { name: "create", description: "Create a streaming endpoint" },
        { name: "delete", description: "Delete a streaming endpoint" },
        {
          name: "list",
          description:
            "List all the streaming endpoints within an Azure Media Services account",
        },
        { name: "scale", description: "Set the scale of a streaming endpoint" },
        {
          name: "show",
          description: "Show the details of a streaming endpoint",
        },
        { name: "start", description: "Start a streaming endpoint" },
        { name: "stop", description: "Stop a streaming endpoint" },
        {
          name: "update",
          description: "Update the details of a streaming endpoint",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the streaming endpoint is met",
        },
      ],
    },
    {
      name: "streaming-locator",
      description:
        "Manage streaming locators for an Azure Media Services account",
      subcommands: [
        { name: "create", description: "Create a streaming locator" },
        { name: "delete", description: "Delete a Streaming Locator" },
        {
          name: "get-paths",
          description: "List paths supported by a streaming locator",
        },
        {
          name: "list",
          description:
            "List all the streaming locators within an Azure Media Services account",
        },
        {
          name: "list-content-keys",
          description: "List content keys used by a streaming locator",
        },
        {
          name: "show",
          description: "Show the details of a streaming locator",
        },
      ],
    },
    {
      name: "streaming-policy",
      description:
        "Manage streaming policies for an Azure Media Services account",
      subcommands: [
        { name: "create", description: "Create a streaming policy" },
        { name: "delete", description: "Delete a Streaming Policy" },
        {
          name: "list",
          description:
            "List all the streaming policies within an Azure Media Services account",
        },
        { name: "show", description: "Show the details of a streaming policy" },
      ],
    },
    {
      name: "transform",
      description: "Manage transforms for an Azure Media Services account",
      subcommands: [
        { name: "create", description: "Create a transform" },
        { name: "delete", description: "Delete a transform" },
        {
          name: "list",
          description:
            "List all the transforms of an Azure Media Services account",
        },
        {
          name: "output",
          description:
            "Manage transform outputs for an Azure Media Services account",
          subcommands: [
            {
              name: "add",
              description: "Add an output to an existing transform",
            },
            {
              name: "remove",
              description: "Remove an output from an existing transform",
            },
          ],
        },
        { name: "show", description: "Show the details of a transform" },
        { name: "update", description: "Update the details of a transform" },
      ],
    },
  ],
};

export default completionSpec;
