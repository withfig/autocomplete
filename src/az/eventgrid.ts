const completionSpec: Fig.Spec = {
  name: "eventgrid",
  description:
    "Manage Azure Event Grid topics, domains, domain topics, system topics partner topics, event subscriptions, system topic event subscriptions and partner topic event subscriptions",
  subcommands: [
    {
      name: "domain",
      description: "Manage event domains",
      subcommands: [
        { name: "create", description: "Create a domain" },
        { name: "delete", description: "Delete a domain" },
        {
          name: "key",
          description: "Manage shared access keys of a domain",
          subcommands: [
            {
              name: "list",
              description: "List shared access keys of a domain",
            },
            {
              name: "regenerate",
              description: "Regenerate a shared access key of a domain",
            },
          ],
        },
        { name: "list", description: "List available domains" },
        {
          name: "private-endpoint-connection",
          description:
            "Manage private endpoint connection resources of a domain",
          subcommands: [
            {
              name: "approve",
              description:
                "Approve a private endpoint connection request for a domain",
            },
            {
              name: "delete",
              description: "Delete a private endpoint connection for a domain",
            },
            {
              name: "list",
              description:
                "List the properties of all the private endpoint connections for a domain",
            },
            {
              name: "reject",
              description:
                "Reject a private endpoint connection request for a domain",
            },
            {
              name: "show",
              description:
                "Display the properties of a private endpoint connection for a domain",
            },
          ],
        },
        {
          name: "private-link-resource",
          description: "Manage private link resource of a domain",
          subcommands: [
            {
              name: "list",
              description:
                "List the properties of all the private link resources for a domain",
            },
            {
              name: "show",
              description:
                "Display the properties of a private link resource for a domain",
            },
          ],
        },
        { name: "show", description: "Get the details of a domain" },
        {
          name: "topic",
          description: "Manage event domain topics",
          subcommands: [
            {
              name: "create",
              description: "Create a domain topic under a domain",
            },
            {
              name: "delete",
              description: "Delete a domain topic under a domain",
            },
            { name: "list", description: "List available topics in a domain" },
            { name: "show", description: "Get the details of a domain topic" },
          ],
        },
        { name: "update", description: "Update a domain" },
      ],
    },
    {
      name: "event-subscription",
      description: "Manage event subscriptions",
      subcommands: [
        { name: "create", description: "Create a new event subscription" },
        { name: "delete", description: "Delete an event subscription" },
        { name: "list", description: "List event subscriptions" },
        {
          name: "show",
          description: "Get the details of an event subscription",
        },
        { name: "update", description: "Update an event subscription" },
      ],
    },
    {
      name: "extension-topic",
      description: "Manage Azure Event Grid extension topics",
      subcommands: [
        { name: "show", description: "Get the details of an extension topic" },
      ],
    },
    {
      name: "partner",
      description: "Manage partner resources",
      subcommands: [
        {
          name: "namespace",
          description: "Manage partner namespaces",
          subcommands: [
            { name: "create", description: "Create a partner namespace" },
            { name: "delete", description: "Delete a partner namespace" },
            {
              name: "event-channel",
              description: "Manage partner event channels",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create an event channel under a partner namespace",
                },
                { name: "delete", description: "Delete a partner namespace" },
                {
                  name: "list",
                  description: "List available partner event-channels",
                },
                {
                  name: "show",
                  description:
                    "Get the details of an event channel under a partner namespace",
                },
              ],
            },
            {
              name: "key",
              description: "Manage shared access keys of a partner namespace",
              subcommands: [
                {
                  name: "list",
                  description: "List shared access keys of a partner namespace",
                },
                {
                  name: "regenerate",
                  description:
                    "Regenerate a shared access key of a partner namespace",
                },
              ],
            },
            { name: "list", description: "List available partner namespaces" },
            {
              name: "show",
              description: "Get the details of a partner namespace",
            },
          ],
        },
        {
          name: "registration",
          description: "Manage partner registrations",
          subcommands: [
            {
              name: "create",
              description: "Create a new partner registration",
            },
            { name: "delete", description: "Delete a partner registration" },
            {
              name: "list",
              description:
                "List all partner registrations in specific resource group or all under the specified azure subscription",
            },
            { name: "show", description: "Get a partner registration" },
          ],
        },
        {
          name: "topic",
          description: "Manage partner topics",
          subcommands: [
            { name: "activate", description: "Activate a partner topic" },
            { name: "deactivate", description: "Deactivate a partner topic" },
            { name: "delete", description: "Delete a partner topic" },
            {
              name: "event-subscription",
              description: "Manage event subscriptions of partner topic",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create a new event subscription for a partner topic",
                },
                {
                  name: "delete",
                  description:
                    "Delete an event subscription of a partner topic",
                },
                {
                  name: "list",
                  description:
                    "List event subscriptions of a specific partner topic",
                },
                {
                  name: "show",
                  description:
                    "Get the details of an event subscription of a partner topic",
                },
                {
                  name: "update",
                  description:
                    "Update an event subscription of a partner topic",
                },
              ],
            },
            { name: "list", description: "List available partner topics" },
            { name: "show", description: "Get the details of a partner topic" },
          ],
        },
      ],
    },
    {
      name: "system-topic",
      description: "Manage system topics",
      subcommands: [
        { name: "create", description: "Create a system topic" },
        { name: "delete", description: "Delete a system topic" },
        {
          name: "event-subscription",
          description: "Manage event subscriptions of system topic",
          subcommands: [
            {
              name: "create",
              description: "Create a new event subscription for a system topic",
            },
            {
              name: "delete",
              description: "Delete an event subscription of a system topic",
            },
            {
              name: "list",
              description:
                "List event subscriptions of a specific system topic",
            },
            {
              name: "show",
              description:
                "Get the details of an event subscription of a system topic",
            },
            {
              name: "update",
              description: "Update an event subscription of a system topic",
            },
          ],
        },
        { name: "list", description: "List available system topics" },
        { name: "show", description: "Get the details of a system topic" },
        { name: "update", description: "Update a system topic" },
      ],
    },
    {
      name: "topic",
      description: "Manage Azure Event Grid topics",
      subcommands: [
        { name: "create", description: "Create a topic" },
        { name: "delete", description: "Delete a topic" },
        {
          name: "key",
          description: "Manage shared access keys of a topic",
          subcommands: [
            { name: "list", description: "List shared access keys of a topic" },
            {
              name: "regenerate",
              description: "Regenerate a shared access key of a topic",
            },
          ],
        },
        { name: "list", description: "List available topics" },
        {
          name: "private-endpoint-connection",
          description: "Manage private endpoint connections of a topic",
          subcommands: [
            {
              name: "approve",
              description:
                "Approve a private endpoint connection request for a topic",
            },
            {
              name: "delete",
              description: "Delete a private endpoint connection for a topic",
            },
            {
              name: "list",
              description:
                "List the properties of all the private endpoint connections for a topic",
            },
            {
              name: "reject",
              description:
                "Reject a private endpoint connection request for a topic",
            },
            {
              name: "show",
              description:
                "Display the properties of a private endpoint connection for a topic",
            },
          ],
        },
        {
          name: "private-link-resource",
          description: "Manage private link resource of a topic",
          subcommands: [
            {
              name: "list",
              description:
                "List the properties of all the private link resources for a topic",
            },
            {
              name: "show",
              description:
                "Display the properties of a private link resource for a topic",
            },
          ],
        },
        { name: "show", description: "Get the details of a topic" },
        { name: "update", description: "Update a topic" },
      ],
    },
    {
      name: "topic-type",
      description: "Get details for topic types",
      subcommands: [
        { name: "list", description: "List registered topic types" },
        {
          name: "list-event-types",
          description: "List the event types supported by a topic type",
        },
        { name: "show", description: "Get the details for a topic type" },
      ],
    },
  ],
};

export default completionSpec;
